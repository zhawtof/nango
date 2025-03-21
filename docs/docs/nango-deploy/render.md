# Deploy Nango to Render

Deploy your own hosted Nango instance with Render (free account available):

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/NangoHQ/nango-render)

:::caution
By default the button above deploys free Render instances.

These have some [important limitations](https://render.com/docs/free#free-web-services) you should be aware of, especially:

> Web Services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request.

:::

### Deployment Information

The Render Blueprint generates a dedicated Nango Server instance as well as a separate Postgres database.

This Blueprint defaults to Render's free tier which has some limitations (e.g. DB is only free for 3 months), but you can easily upgrade the instances in your Render dashboard.

The environment variables related to the server URL (`NANGO_SERVER_URL`), port (`SERVER_PORT`) and database credentials are automatically set for you.

If you use a custom domain, you should set the right value for the `NANGO_SERVER_URL` environment variable on your Render dashboard.

:::info
Your should read the [self-hosting instructions](./oss-instructions.md) before deploying to production.
:::
