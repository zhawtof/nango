/*
 * Copyright (c) 2022 Nango, all rights reserved.
 */

import {
    Config as ProviderConfig,
    TemplateOAuth2 as ProviderTemplateOAuth2,
    AuthModes as ProviderAuthModes,
    Template as ProviderTemplate,
    OAuth2Credentials,
    OAuthAuthorizationMethod,
    OAuthBodyFormat,
    Connection
} from '@nangohq/shared';
import { AuthorizationCode, AccessToken } from 'simple-oauth2';
import connectionsManager from '../services/connection.service.js';
import { interpolateString } from '../utils/utils.js';
import Boom from '@hapi/boom';
import { NangoError } from '../utils/error.js';

// Simple OAuth 2 does what it says on the tin: A simple, no-frills client for OAuth 2 that implements the 3 most common grant_types.
// Well maintained, I like :-)
export function getSimpleOAuth2ClientConfig(providerConfig: ProviderConfig, template: ProviderTemplate, connectionConfig: Record<string, string>) {
    const tokenUrl = new URL(interpolateString(template.token_url, connectionConfig));
    const authorizeUrl = new URL(interpolateString(template.authorization_url, connectionConfig));
    const headers = { 'User-Agent': 'Nango' };

    const authConfig = template as ProviderTemplateOAuth2;

    return {
        client: {
            id: providerConfig.oauth_client_id!,
            secret: providerConfig.oauth_client_secret!
        },
        auth: {
            tokenHost: tokenUrl.origin,
            tokenPath: tokenUrl.pathname,
            authorizeHost: authorizeUrl.origin,
            authorizePath: authorizeUrl.pathname
        },
        http: { headers: headers },
        options: {
            authorizationMethod: authConfig.authorization_method || OAuthAuthorizationMethod.BODY,
            bodyFormat: authConfig.body_format || OAuthBodyFormat.FORM,
            scopeSeparator: template.scope_separator || ' '
        }
    };
}

export async function getFreshOAuth2Credentials(connection: Connection, config: ProviderConfig, template: ProviderTemplateOAuth2): Promise<OAuth2Credentials> {
    let credentials = connection.credentials as OAuth2Credentials;
    const simpleOAuth2ClientConfig = getSimpleOAuth2ClientConfig(config, template, connection.connection_config);
    if (template.token_request_auth_method === 'basic') {
        const headers = {
            ...simpleOAuth2ClientConfig.http.headers,
            Authorization: 'Basic ' + Buffer.from(config.oauth_client_id + ':' + config.oauth_client_secret).toString('base64')
        };
        simpleOAuth2ClientConfig.http.headers = headers;
    }
    const client = new AuthorizationCode(simpleOAuth2ClientConfig);
    const oldAccessToken = client.createToken({
        access_token: credentials.access_token,
        expires_at: credentials.expires_at,
        refresh_token: credentials.refresh_token
    });

    let additionalParams = {};
    if (template.refresh_params) {
        additionalParams = template.refresh_params;
    } else if (template.token_params) {
        additionalParams = template.token_params;
    }

    var rawNewAccessToken: AccessToken;

    try {
        rawNewAccessToken = await oldAccessToken.refresh(additionalParams);
    } catch (e) {
        let nangoErr = new NangoError(`refresh_token_external_error`);

        if (Boom.isBoom(e)) {
            nangoErr.payload = { external_message: e.message, external_request_details: JSON.stringify(e.output) };
        }

        throw nangoErr;
    }

    var newCredentials: OAuth2Credentials;
    try {
        newCredentials = connectionsManager.parseRawCredentials(rawNewAccessToken.token, ProviderAuthModes.OAuth2) as OAuth2Credentials;

        if (!newCredentials.refresh_token && credentials.refresh_token != null) {
            newCredentials.refresh_token = credentials.refresh_token;
        }

        return newCredentials;
    } catch (e) {
        throw new NangoError(`refresh_token_parsing_error`);
    }
}
