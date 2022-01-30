"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[5906],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,g=f["".concat(a,".").concat(m)]||f[m]||u[m]||r;return t?o.createElement(g,l(l({ref:n},p),{},{components:t})):o.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4508:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],c={},a="Ionic lifecycle events",s={unversionedId:"MobileDevelopment/Ionic5/Ionic-lifecycle-events-order",id:"MobileDevelopment/Ionic5/Ionic-lifecycle-events-order",title:"Ionic lifecycle events",description:"Know Ionic page life Cycle hooks. Ionic by default cache the pages. Becuase of caching mechanism we are having some new lifecycle hooks along with Angular lifecycle hooks",source:"@site/docs/MobileDevelopment/Ionic5/Ionic-lifecycle-events-order.md",sourceDirName:"MobileDevelopment/Ionic5",slug:"/MobileDevelopment/Ionic5/Ionic-lifecycle-events-order",permalink:"/techblog/docs/MobileDevelopment/Ionic5/Ionic-lifecycle-events-order",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MobileDevelopment/Ionic5/Ionic-lifecycle-events-order.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Log4Net in Asp.Net Core",permalink:"/techblog/docs/DotNetCore/Asp.netCore/Logging/log4net-with-asp-net-core-quick-start-example"},next:{title:"Benifits  of using Ionic with other Js frameworks",permalink:"/techblog/docs/MobileDevelopment/Ionic5/WhyIonicWithOtherJsFramework"}},p=[{value:"Know Ionic page life Cycle hooks. Ionic by default cache the pages. Becuase of caching mechanism we are having some new lifecycle hooks along with Angular lifecycle hooks",id:"know-ionic-page-life-cycle-hooks-ionic-by-default-cache-the-pages-becuase-of-caching-mechanism-we-are-having-some-new-lifecycle-hooks-along-with-angular-lifecycle-hooks",children:[],level:6},{value:"Sample Code",id:"sample-code",children:[],level:6}],u={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ionic-lifecycle-events"},"Ionic lifecycle events"),(0,r.kt)("h6",{id:"know-ionic-page-life-cycle-hooks-ionic-by-default-cache-the-pages-becuase-of-caching-mechanism-we-are-having-some-new-lifecycle-hooks-along-with-angular-lifecycle-hooks"},"Know Ionic page life Cycle hooks. Ionic by default cache the pages. Becuase of caching mechanism we are having some new lifecycle hooks along with Angular lifecycle hooks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Note: Like Angular, Ionic will not destroy the pages (will not call ngOnDestroy).\n      It will cache the pages and store it in stack.\n      when user navigates, the previous page will move back to stack\n      and next page will get visible\n")),(0,r.kt)("p",null,"Between ngOnInit and ngOnDestroy we are having multiple Ionic view events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ngOnInit ",(0,r.kt)("em",{parentName:"li"},"(angular event)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ionViewWillEnter  -- called when page start get visible (i.e begins transition)"),(0,r.kt)("li",{parentName:"ul"},"ionViewDidEnter   -- called when page visible completed"),(0,r.kt)("li",{parentName:"ul"},"ionViewWillLeave  -- called when page start leaving (i.e begins transition)"),(0,r.kt)("li",{parentName:"ul"},"ionViewDidLeave   -- called when page completely invisible and other page came to visibe"))),(0,r.kt)("li",{parentName:"ul"},"ngOnDestroy ",(0,r.kt)("em",{parentName:"li"},"(angular event)"))),(0,r.kt)("hr",null),(0,r.kt)("h6",{id:"sample-code"},"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ionViewWillEnter() {\n   this.apiService.FetchData().subscribe(a => {\n     this.listOfItems = a;\n   },error=>{\n     console.log(error);\n   });\n }\n")))}f.isMDXComponent=!0}}]);