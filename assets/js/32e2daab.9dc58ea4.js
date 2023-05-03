"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7779],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(f,s(s({ref:n},u),{},{components:t})):a.createElement(f,s({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),o=t(7294),r=t(6010),s=t(2466),i=t(6550),l=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,c]=f({queryString:t,groupId:a}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),m=(()=>{const e=l??d;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var m=t(2389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==i&&(d(n),l(a))},h=e=>{var n;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}null==(n=t)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:h,onClick:p},s,{className:(0,r.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(y,(0,a.Z)({},e,n)),o.createElement(v,(0,a.Z)({},e,n)))}function w(e){const n=(0,m.Z)();return o.createElement(N,(0,a.Z)({key:String(n)},e))}},5384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(7462),o=(t(7294),t(3905)),r=t(4866),s=t(5162);const i={sidebar_label:"Node SDK"},l="Nango Node SDK",c={unversionedId:"reference/node-sdk",id:"reference/node-sdk",title:"Nango Node SDK",description:"The Nango node SDK helps you retrieve access tokens and work with Connections from your backend.",source:"@site/docs/reference/node-sdk.md",sourceDirName:"reference",slug:"/reference/node-sdk",permalink:"/reference/node-sdk",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/reference/node-sdk.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node SDK"},sidebar:"nango",previous:{title:"Frontend SDK",permalink:"/reference/frontend-sdk"},next:{title:"Connections API",permalink:"/reference/connections-api"}},u={},d=[{value:"Installing &amp; instantiating the node SDK",id:"installing--instantiating-the-node-sdk",level:2},{value:"Getting the current access token for a Connection",id:"getting-the-current-access-token-for-a-connection",level:2},{value:"Getting Connection Details &amp; Metadata",id:"connectionDetails",level:2},{value:"Accessing the raw token response",id:"accessing-the-raw-token-response",level:2},{value:"Getting a list of all Connections",id:"getting-a-list-of-all-connections",level:2},{value:"Getting a list of all Connections for a specific connectionId",id:"getting-a-list-of-all-connections-for-a-specific-connectionid",level:2}],p={toc:d};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nango-node-sdk"},"Nango Node SDK"),(0,o.kt)("p",null,"The Nango node SDK helps you retrieve access tokens and work with ",(0,o.kt)("a",{parentName:"p",href:"/reference/core-concepts#connections"},"Connections")," from your backend."),(0,o.kt)("h2",{id:"installing--instantiating-the-node-sdk"},"Installing & instantiating the node SDK"),(0,o.kt)("p",null,"The node SDK is ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nangohq/node"},"available on NPM")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"@nangohq/node"),", install it with your favorite package manager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S @nangohq/node\n")),(0,o.kt)("p",null,"How you instantiate the SDK depends on your Nango deployment method:"),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Key")," from your ",(0,o.kt)("a",{parentName:"p",href:"https://app.nango.dev/project-settings"},"Dashboard's project settings"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ secretKey: '<SECRET-KEY>' });\n"))),(0,o.kt)(s.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ host: 'http://localhost:3003' });\n"))),(0,o.kt)(s.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ host: '<NANGO-HOST-AND-PORT>' });\n")))),(0,o.kt)("p",null,"If you are using TypeScript you will notice that the node SDK ships with TypeScript types."),(0,o.kt)("h2",{id:"getting-the-current-access-token-for-a-connection"},"Getting the current access token for a Connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let access_token = await nango.getToken('<PROVIDER-CONFIG-KEY>', '<CONNECTION-ID>');\nconsole.log(access_token); // For OAuth 2 APIs this will print \"axb_dijifoweif32qwij923jfo3\" or similar\n")),(0,o.kt)("p",null,"If you are not familiar with the Provider Config Key and Connection Id parameters please take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/reference/core-concepts"},"Core Concepts")," page."),(0,o.kt)("p",null,"This is the recommended way to retrieve an access token to make an API call."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response for OAuth 1 tokens"),(0,o.kt)("br",{parentName:"p"}),"\n","If the access token stored in Nango is for an OAuth 1 provider (there are very very few left, the most prominent ones are Twitter and Trello) the response is an object instead of a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    oAuthToken: "efjweiofoj34iji2io43j",\n    oAuthTokenSecret: "dijdwojfwef89329834hf3ohf2o3i8"\n}\n')),(0,o.kt)("p",null,"This is because OAuth 1 requires you to cryptographically sign every HTTP request, which requires both an access token and an (OAuth 1 specific) access token secret."),(0,o.kt)("admonition",{title:"Keep your access tokens fresh and don't cache them!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you call this method the Nango server will check whether the access token needs to be refreshed, and, if needed, refresh it before returning it to you. This typically changes the access token."),(0,o.kt)("p",{parentName:"admonition"},"Because of this it is important that you always use this method to get the latest access token from Nango just before making an API request. If you cache the access token on your end you risk working with an expired or revoked access token and your API call will fail!"),(0,o.kt)("p",{parentName:"admonition"},"We take great care to make sure that this call to get an access token is blazingly fast, so retrieving it fresh will not slow down your API requests.")),(0,o.kt)("h2",{id:"connectionDetails"},"Getting Connection Details & Metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let connectionDetails = await nango.getConnection('<CONFIG-KEY>', '<CONNECTION-ID>');\n")),(0,o.kt)("p",null,"This retrieves the full Connection object from Nango, which looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\nid: 18393,                                  // Nango internal connection id\ncreated_at: '2023-03-08T09:43:03.725Z',     // Creation timestamp\nupdated_at: '2023-03-08T09:43:03.725Z',     // Last updated timestamp (e.g. last token refresh)\nprovider_config_key: 'github',              // <PROVIDER-CONFIG-KEY>\nconnection_id: '1',                         // <CONNECTION-ID>\ncredentials: {\n    type: 'OAUTH2',                         // OAUTH2 or OAUTH1\n    access_token: 'gho_tsXLG73f....',       // The current access token (refreshed if needed)\n    refresh_token: 'gho_fjofu84u9....',     // Refresh token (if available, otherwise missing)\n    expires_at: '2024-03-08T09:43:03.725Z', // Expiration date of access token (only if refresh token is present, otherwise missing)\n    raw: {                                  // Raw token response from the OAuth provider: Contents vary!\n        access_token: 'gho_tsXLG73f....',\n        token_type: 'bearer',\n        scope: 'public_repo,user'\n    }\n},\nconnection_config: {},                      // Additional configuration, see Frontend SDK reference\naccount_id: 0,                              // ID of your Nango account (Nango Cloud only)\nmetadata: {}                                // Structured metadata retrieved by Nango\n}\n")),(0,o.kt)("p",null,"The metadata field contains ",(0,o.kt)("a",{parentName:"p",href:"/reference/core-concepts#metadata"},"structured metadata"),", which Nango obtained from the OAuth flow. This varies by provider and is documented on the provider's Nango documentation page."),(0,o.kt)("h2",{id:"accessing-the-raw-token-response"},"Accessing the raw token response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let rawTokenResponse = await nango.getRawTokenResponse('<CONFIG-KEY>', '<CONNECTION-ID>');\n")),(0,o.kt)("p",null,"A fast access method for obtaining the raw token response, as returned by the OAuth provider, for a given connection. This is equivalent to getting the full connection details and then reading ",(0,o.kt)("inlineCode",{parentName:"p"},"fullDetails.credentials.raw"),"."),(0,o.kt)("h2",{id:"getting-a-list-of-all-connections"},"Getting a list of all Connections"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let connectionsList = await nango.listConnections();\n")),(0,o.kt)("p",null,"Returns a list of minimalistic Connection objects. This can be helpful if you need to check whether a user has setup a specific integration. Note that the list does not contain any access credentials and fetching it also does not refresh the access tokens of any Connections."),(0,o.kt)("p",null,"The return value looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    connections: [\n        {\n            connection_id: '<CONNECTION-ID-1>',\n            provider: '<CONFIG-KEY-1>',\n            created: '2023-03-08T09:43:03.725Z'\n        },\n        {\n            //....\n        }\n        // Additional objects like the one above\n    ];\n}\n")),(0,o.kt)("h2",{id:"getting-a-list-of-all-connections-for-a-specific-connectionid"},"Getting a list of all Connections for a specific connectionId"),(0,o.kt)("p",null,"In the case where you want to get a list of all the connections for only a specific connectionId you can pass the connection ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let connectionsList = await nango.listConnections("userId");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    connections: [\n        {\n            connection_id: 'userId',\n            provider: '<CONFIG-KEY-1>',\n            created: '2023-03-08T09:43:03.725Z'\n        },\n        {\n            //....\n        }\n        // Additional objects like the one above but only for the same connection Id\n    ];\n}\n")))}h.isMDXComponent=!0}}]);