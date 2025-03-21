---
sidebar_label: Instagram
---

# Instagram API wiki

:::note Working with the Instagram API?
Please add your learnings, favorite links and gotchas here by [editing this page](https://github.com/nangohq/nango/tree/master/docs/docs/providers/instagram.md).

:::

:::caution
Nango currently does not support long-lived access tokens and token refreshes for the Instagram Basic Display API. See [this open issue](https://github.com/NangoHQ/nango/issues/357) for details.

This restriction does _not_ apply to the Instagram Graph API.
:::

## Using Instagram with Nango

Note that Instagram has two different APIs: The [Instagram Graph API](https://developers.facebook.com/docs/instagram-api) (for Business and Creator accounts) and the [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api) (for Consumer/regular accounts).

This template implements the **Instagram Basic Display API** OAuth. For access to the Instagram Graph API use the [Facebook](facebook.md) template and follow the instructions under "API specific gotchas" below.

API template name in Nango: `instagram`  
Follow our [quickstart](../quickstart.md) to add an OAuth integration with the Instagram API in 5 minutes.

Supported features in Nango:

| Feature                            | Supported                 |
| ---------------------------------- | ------------------------- |
| [Auth](/nango-auth/core-concepts)  | ✅                        |
| [Proxy](/nango-unified-apis/proxy) | ❎                        |
| Unified APIs                       | _Not included in any yet_ |

## App registration & publishing

Apps for the Instagram API can be [registered here](https://developers.facebook.com/apps) (you must be logged in with your Facebook/Meta account). Select "Consumer" as the app type, then [follow these steps](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#step-1--create-a-facebook-app). You can find your OAuth redirect URL of your Nango instance in the [quickstart](../quickstart.md).

When registering your provider config with Nango, use the Instagram App ID and Instagram App secret as `client_id` and `client_secret` (NOT your Meta app's app id & secret).

## Useful links

-   [Instagram Basic Display API docs](https://developers.facebook.com/docs/instagram-basic-display-api)
-   [Instagram Basic Display API OAuth scopes](https://developers.facebook.com/docs/instagram-basic-display-api/overview/permissions) -> These scopes did not work for me. What worked was `user_profile` and `user_media`
-   [Instagram Graph API docs](https://developers.facebook.com/docs/instagram-api) (see below for how to add OAuth)

## API specific gotchas

-   For the Basic Display API the scope `user_profile` is mandatory. The only other available scope seems to be `user_media`.
-   For access to the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api) follow these steps:
    1. The Instagram Graph API uses [Facebook OAuth](facebook.md) to authenticate the accounts. Add a provider config for it to Nango with the scopes [specified here](https://developers.facebook.com/docs/instagram-api/getting-started#2--implement-facebook-login).
    2. Once the login flow completes you can [query the facebook API for the Instagram account details](https://developers.facebook.com/docs/instagram-api/getting-started#4--get-the-user-s-pages) (follow steps 4-6).
