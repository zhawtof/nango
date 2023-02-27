"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[486],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5494:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_label:"Contribute a New Provider"},i="Contribute a New Provider",l={unversionedId:"contribute-api",id:"contribute-api",title:"Contribute a New Provider",description:"Adding support for a new provider to Nango is fast & easy. Please follow the steps below and we will be happy to accept your PR!",source:"@site/docs/contribute-api.md",sourceDirName:".",slug:"/contribute-api",permalink:"/contribute-api",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/contribute-api.md",tags:[],version:"current",frontMatter:{sidebar_label:"Contribute a New Provider"},sidebar:"nango",previous:{title:"Deploy Nango to Heroku",permalink:"/nango-deploy/heroku"}},p={},s=[{value:"Step 0: A quick overview of how provider templates work in Nango",id:"step-0-a-quick-overview-of-how-provider-templates-work-in-nango",level:2},{value:"Step 1: Add your new provider to <code>providers.yaml</code>",id:"step-1-add-your-new-provider-to-providersyaml",level:2},{value:"Step 2: Test your new provider",id:"step-2-test-your-new-provider",level:2},{value:"1. Add your client credentials to the local Nango Server by running the npx nango command",id:"1-add-your-client-credentials-to-the-local-nango-server-by-running-the-npx-nango-command",level:3},{value:"2. Navigate to the Test Website and Trigger the OAuth Flow",id:"2-navigate-to-the-test-website-and-trigger-the-oauth-flow",level:3},{value:"3. Request an Access Token from Your New Provider",id:"3-request-an-access-token-from-your-new-provider",level:3},{value:"Step 3: Submit your PR",id:"step-3-submit-your-pr",level:2},{value:"Where to get help",id:"where-to-get-help",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contribute-a-new-provider"},"Contribute a New Provider"),(0,r.kt)("p",null,"Adding support for a new provider to Nango is fast & easy. Please follow the steps below and we will be happy to accept your PR!"),(0,r.kt)("p",null,"If you find a bug with one of the existing providers feel free to use these steps to submit a PR with a fix. Thank you!"),(0,r.kt)("h2",{id:"step-0-a-quick-overview-of-how-provider-templates-work-in-nango"},"Step 0: A quick overview of how provider templates work in Nango"),(0,r.kt)("p",null,"Support for the OAuth flow of different providers in Nango is implemented with templates: A small config that tells Nango how to perform the OAuth flow for the specific provider."),(0,r.kt)("p",null,"All templates of Nango live in a single file called ",(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/oauth-providers"},"providers.yaml")," in the server package. ",(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/"},"More about YAML here"),"."),(0,r.kt)("p",null,"Most templates only need to make use of 2-3 configuration keys, but in some cases you might need more.\nFor a full list of configuration options please check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/Nango/blob/master/packages/auth/lib/models.ts"},"type definitions here"),"."),(0,r.kt)("p",null,"The most commonly used configuration options are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# All keys & slugs use lowercase and snake_case\nprovider_slug: # Shorthand for the provider, ideally the provider's name. Must be unique.\n    # Mandatory fields\n    auth_mode: OAUTH2 # Either OAUTH1 (for OAuth 1.0a) or OAUTH2\n    authorization_url: https://${connectionConfig.params.subdomain}.gitlab.com/oauth/authorize # The URL of the authorization page for the OAuth service (supports string interpolation)\n    token_url: https://${connectionConfig.params.subdomain}.gitlab.com/oauth/token # The URL for the token request (supports string interpolation)\n\n    # Optional fields\n    authorization_params: # Additional parameters to pass along in the authorization step\n        response_type: code\n    token_params: # Additional parameters to pass along in the token request\n        mycoolparam: value\n    refresh_url: https://api.example.com/oauth/refresh # The URL to use for refreshing the access token, if different from token_url\n    scope_separator: ',' # String to use to separate scopes. Defaults to ' ' (1 space) if not provided\n    redirect_uri_metadata:\n        - subdomain # Save the 'subdomain' query parameter value returned in the Redirect URI (Connection Metadata)\n    token_response_metadata:\n        - scopes # Save the 'scopes' query parameter value returned in the token response (Connection Metadata)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Templates support parameters using string interpolation (cf. ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#connection-config"},"Connection Configuration"),") for dynamic URLs, etc.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Verify if some ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#connection-metadata"},"Connection Metadata")," should be captured during the OAuth flow.")),(0,r.kt)("h2",{id:"step-1-add-your-new-provider-to-providersyaml"},"Step 1: Add your new provider to ",(0,r.kt)("inlineCode",{parentName:"h2"},"providers.yaml")),(0,r.kt)("p",null,"Fork the repo and edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/auth/providers.yaml")," file as explained above to add support for the new provider. The API documentation should contain all the details you need on the OAuth flow to complete this step."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"We are here")," if you need help with this."),(0,r.kt)("h2",{id:"step-2-test-your-new-provider"},"Step 2: Test your new provider"),(0,r.kt)("p",null,"To test your new provider:"),(0,r.kt)("p",null,"The docker compose configuration in the root of the repo ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," will run 3 containers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Postgres DB"),(0,r.kt)("li",{parentName:"ol"},"Nango Server"),(0,r.kt)("li",{parentName:"ol"},"Test Website to Trigger the OAuth Flow")),(0,r.kt)("p",null,"The providers.yaml file from step 1 is synced between the host machine (your laptop) and the running Nango Server container. When you add new provider templates to that yaml the running Nango Server will pick them up."),(0,r.kt)("p",null,"If your changes don't seem to be getting picked up, then try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Force a restart, which will load in the yaml again\ndocker compose restart nango-server\n\n# print the contents of the providers file from inside the container\ndocker compose run nango-server cat packages/auth/providers.yaml\n")),(0,r.kt)("p",null,"When you are ready to test your new provider template:"),(0,r.kt)("h3",{id:"1-add-your-client-credentials-to-the-local-nango-server-by-running-the-npx-nango-command"},"1. Add your client credentials to the local Nango Server by running the npx nango command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx nango config:create <unique-config-key> <template-name> <cliend-id> <client-secret> <scopes>\n\n")),(0,r.kt)("p",null,"Note: if you've already configured environment variables for Nango Cloud or your own remote instance of Nango then you may need to unset those variables as they will interfere with your local testing."),(0,r.kt)("h3",{id:"2-navigate-to-the-test-website-and-trigger-the-oauth-flow"},"2. Navigate to the Test Website and Trigger the OAuth Flow"),(0,r.kt)("p",null,"The test site should be running at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8001/bin/quickstart.html"},"http://localhost:8001/bin/quickstart.html")),(0,r.kt)("p",null,"You can modify the ports in the docker compose if there are any conflicts with other local services on your host machine."),(0,r.kt)("h3",{id:"3-request-an-access-token-from-your-new-provider"},"3. Request an Access Token from Your New Provider"),(0,r.kt)("p",null,"In the cli run the npx nango command to fetch a new token or make a curl request to the locally running Nango Server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npx nango token:get <unique-config-key> <connection-id>\n\n\n> curl 'http://localhost:3003/connection/<connection-id>?provider_config_key=<unique-config-key>'\n")),(0,r.kt)("p",null,"Once you've confirmed the access token was returned, then you are ready to submit a PR."),(0,r.kt)("h2",{id:"step-3-submit-your-pr"},"Step 3: Submit your PR"),(0,r.kt)("p",null,"Submit your PR with the new provider to the Nango repo. Please make sure to mention that you tested the full flow and that it works. We will review your PR asap and merge it into the main Nango repo for inclusion with the next release."),(0,r.kt)("h2",{id:"where-to-get-help"},"Where to get help"),(0,r.kt)("p",null,"If you get stuck or need help please join our ",(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community")," where the Nango contributors hang out. We will do our best to help you and get Nango to work with the OAuth flow of your provider."))}c.isMDXComponent=!0}}]);