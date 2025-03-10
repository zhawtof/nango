import type { Request, Response, NextFunction } from 'express';
import accountService from '../services/account.service.js';
import type { Account } from '@nangohq/shared';
import { isCloud, setAccount, isBasicAuthEnabled } from '../utils/utils.js';
import errorManager from '../utils/error.manager.js';
import userService from '../services/user.service.js';

export class AccessMiddleware {
    async secretKeyAuth(req: Request, res: Response, next: NextFunction) {
        if (isCloud()) {
            let authorizationHeader = req.get('authorization');

            if (!authorizationHeader) {
                return errorManager.errRes(res, 'missing_auth_header');
            }

            let secret = authorizationHeader.split('Bearer ').pop();

            if (!secret) {
                return errorManager.errRes(res, 'malformed_auth_header');
            }

            if (!/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(secret)) {
                return errorManager.errRes(res, 'invalid_secret_key_format');
            }

            var account: Account | null;
            try {
                account = await accountService.getAccountBySecretKey(secret);
            } catch (_) {
                return errorManager.errRes(res, 'malformed_auth_header');
            }

            if (account == null) {
                return errorManager.errRes(res, 'unkown_account');
            }

            setAccount(account.id, res);
            next();
        } else {
            setAccount(0, res);

            const secretKey = process.env['NANGO_SECRET_KEY'];

            if (!secretKey) {
                next();
                return;
            }

            const authorizationHeader = req.get('authorization');

            if (!authorizationHeader) {
                return errorManager.errRes(res, 'missing_auth_header');
            }

            const { providedUser } = this.fromBasicAuth(authorizationHeader);

            if (providedUser !== secretKey) {
                return errorManager.errRes(res, 'invalid_secret_key');
            }

            next();
        }
    }

    async publicKeyAuth(req: Request, res: Response, next: NextFunction) {
        if (isCloud()) {
            let publicKey = req.query['public_key'] as string;

            if (!publicKey) {
                return errorManager.errRes(res, 'missing_public_key');
            }

            if (!/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(publicKey)) {
                return errorManager.errRes(res, 'invalid_public_key');
            }

            var account: Account | null | undefined;
            try {
                account = await accountService.getAccountByPublicKey(publicKey);
            } catch (e) {
                errorManager.report(e);
                return errorManager.errRes(res, 'unkown_account');
            }

            if (account == null) {
                return errorManager.errRes(res, 'unkown_account');
            }

            setAccount(account.id, res);
            next();
        } else {
            setAccount(0, res);
            next();
        }
    }

    async sessionAuth(req: Request, res: Response, next: NextFunction) {
        if (!req.isAuthenticated()) {
            res.status(401).send({ error: 'Not authenticated.' });
            return;
        }

        next();
    }

    async noAuth(req: Request, _: Response, next: NextFunction) {
        if (!req.isAuthenticated()) {
            let user = await userService.getUserById(0);

            req.login(user!, function (err) {
                if (err) {
                    return next(err);
                }

                next();
            });
        } else {
            next();
        }
    }

    async basicAuth(req: Request, res: Response, next: NextFunction) {
        // Already signed in.
        if (req.isAuthenticated()) {
            next();
            return;
        }

        // Protected by basic auth: should be signed in.
        if (isBasicAuthEnabled()) {
            res.status(401).send({ error: 'Not authenticated.' });
            return;
        }
    }

    admin(req: Request, res: Response, next: NextFunction) {
        if (!isCloud()) {
            return errorManager.errRes(res, 'only_nango_cloud');
        }

        const adminKey = process.env['NANGO_ADMIN_KEY'];

        if (!adminKey) {
            return errorManager.errRes(res, 'admin_key_configuration');
        }

        let authorizationHeader = req.get('authorization');

        if (!authorizationHeader) {
            return errorManager.errRes(res, 'missing_auth_header');
        }

        let candidateKey = authorizationHeader.split('Bearer ').pop();
        if (candidateKey !== adminKey) {
            return errorManager.errRes(res, 'invalid_admin_key');
        }

        next();
    }

    private fromBasicAuth(authorizationHeader: string) {
        const basicAsBase64 = authorizationHeader.split('Basic ').pop() || '';
        const basicAsBuffer = Buffer.from(basicAsBase64, 'base64');
        const basicAsString = basicAsBuffer.toString('utf-8');

        const providedCredentials = basicAsString.split(':');
        const providedUser: string = providedCredentials.shift() || '';
        const providedPassword: string = providedCredentials.shift() || '';

        return { providedUser, providedPassword };
    }
}

export default new AccessMiddleware();
