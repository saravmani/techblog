"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[7952],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(t),f=s,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||a;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5961:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=t(7462),s=t(3366),a=(t(7294),t(3905)),o=["components"],i={},l="Resharper Useful Tips",p={unversionedId:"DeveloperTools/ReSharper/Resharper-Usful-Tips",id:"DeveloperTools/ReSharper/Resharper-Usful-Tips",title:"Resharper Useful Tips",description:"Discussion on Resharper and Some of it's tips and tricks",source:"@site/docs/DeveloperTools/ReSharper/Resharper-Usful-Tips.md",sourceDirName:"DeveloperTools/ReSharper",slug:"/DeveloperTools/ReSharper/Resharper-Usful-Tips",permalink:"/techblog/docs/DeveloperTools/ReSharper/Resharper-Usful-Tips",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DeveloperTools/ReSharper/Resharper-Usful-Tips.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis With Docker And Asp.net Core",permalink:"/techblog/docs/DB/REDIS/Redis-With-Docker-And-Asp-Net-Core"},next:{title:"Dapper Vs EntitiyFramework",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/Dapper-Vs-EntityFramework"}},c=[{value:"Discussion on Resharper and Some of it&#39;s tips and tricks",id:"discussion-on-resharper-and-some-of-its-tips-and-tricks",children:[],level:6},{value:"Settings hierarchy",id:"settings-hierarchy",children:[],level:5},{value:"ReSharper pluggins",id:"resharper-pluggins",children:[],level:5},{value:"ReSharper Useful shortcuts",id:"resharper-useful-shortcuts",children:[],level:4}],u={toc:c};function h(e){var r=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resharper-useful-tips"},"Resharper Useful Tips"),(0,a.kt)("h6",{id:"discussion-on-resharper-and-some-of-its-tips-and-tricks"},"Discussion on Resharper and Some of it's tips and tricks"),(0,a.kt)("blockquote",null),(0,a.kt)("p",null,"Code Editing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|   +-- File Header Text  *(To Setup the header for each file)*\n|   +-- C# *(Can specify multiple project specific styles)*\n|   |   +--Formatting Style *(Styles for Alignment, Breaks, Braces etc.,)*\n")),(0,a.kt)("h5",{id:"settings-hierarchy"},"Settings hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3 Levels are there - User Level, Team Level and Computer level"),(0,a.kt)("li",{parentName:"ul"},"User-level settings are saved into ",(0,a.kt)("em",{parentName:"li"},"sln.DotSettings.User")," file. This has the highest precedence. ",(0,a.kt)("em",{parentName:"li"},"(Don't check-in to source control)"),"."),(0,a.kt)("li",{parentName:"ul"},"Team Level settings are saved into ",(0,a.kt)("em",{parentName:"li"},"sln.DotSettings file"),". This must be checked in"),(0,a.kt)("li",{parentName:"ul"},"User Level settings have"),(0,a.kt)("li",{parentName:"ul"},"You can find these settings under ",(0,a.kt)("em",{parentName:"li"},"ReSharper->Manage")," Options settings")),(0,a.kt)("h5",{id:"resharper-pluggins"},"ReSharper pluggins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ReSharper supports other plugins  on top of ReSharper. Also, we can develop our own plugin for ReSharper"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ReSharper-> plugin Manager")," is the marketplace to install the plugins")),(0,a.kt)("h4",{id:"resharper-useful-shortcuts"},"ReSharper Useful shortcuts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ctrl+T -> Advanced any search option. Using this we can search anything Ex: Filename, Class, Methods, etc.,")))}h.isMDXComponent=!0}}]);