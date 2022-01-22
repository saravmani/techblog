"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[2585],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9472:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},l="Microservices - gRPC Communication",s={unversionedId:"SoftwareDevelopment/Architecture/Microservices/MicroServices-Communication-GRPC",id:"SoftwareDevelopment/Architecture/Microservices/MicroServices-Communication-GRPC",title:"Microservices - gRPC Communication",description:"gRPC is a high-performance, open source, universal RPC framework from Google",source:"@site/docs/SoftwareDevelopment/Architecture/Microservices/MicroServices-Communication-GRPC.md",sourceDirName:"SoftwareDevelopment/Architecture/Microservices",slug:"/SoftwareDevelopment/Architecture/Microservices/MicroServices-Communication-GRPC",permalink:"/techblog/docs/SoftwareDevelopment/Architecture/Microservices/MicroServices-Communication-GRPC",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SoftwareDevelopment/Architecture/Microservices/MicroServices-Communication-GRPC.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Disadvantages of Software frameworks",permalink:"/techblog/docs/SoftwareDevelopment/DisAdvantages-Of-Frameworks"},next:{title:"Redis With Docker And Asp.net Core",permalink:"/techblog/docs/DB/REDIS/Redis-With-Docker-And-Asp-Net-Core"}},u=[{value:"gRPC is a high-performance, open source, universal RPC framework from Google",id:"grpc-is-a-high-performance-open-source-universal-rpc-framework-from-google",children:[],level:6},{value:"Example implementation of GRPC in MicroServices",id:"example-implementation-of-grpc-in-microservices",children:[],level:6},{value:"Protobuf Format",id:"protobuf-format",children:[{value:"Kestrel Configuration",id:"kestrel-configuration",children:[],level:6}],level:5}],m={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microservices---grpc-communication"},"Microservices - gRPC Communication"),(0,i.kt)("h6",{id:"grpc-is-a-high-performance-open-source-universal-rpc-framework-from-google"},"gRPC is a high-performance, open source, universal RPC framework from Google"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Note: An alternate for GRPC can be REST"),"\n",(0,i.kt)("em",{parentName:"p"},"REST is Text based and it not having standard API contract. So every client have to write their client libraries"),"\n",(0,i.kt)("em",{parentName:"p"},"GRPC is binary protocol"))),(0,i.kt)("p",null,"GRPC is implemented on top of HTTP/2 and Protocol buffer."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"HTTP/2 is mandatory"))),(0,i.kt)("p",null,"GRPC is highly recomended for Internal Microservices Communication. Because it is more efficient, low latency."),(0,i.kt)("p",null,"When we build multiple microservices with different technologies and programming languages, it is important to have a standard way to define service interfaces and underlying message interchange formats.\n",(0,i.kt)("img",{parentName:"p",src:"https://grpc.io/img/landing-2.svg",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can push the data"),(0,i.kt)("li",{parentName:"ul"},"Real time communicaiton"),(0,i.kt)("li",{parentName:"ul"},"Different programming languages can communicate",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Note: Official support avaliable for  .Net Core, Net 4.5+"))))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/introduction/"},"Refer official documentation for GRPC")),(0,i.kt)("h6",{id:"example-implementation-of-grpc-in-microservices"},"Example implementation of GRPC in MicroServices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"flowchart LR\n  A(Microservice1 - With GRPC Server)\n  B(Microservice12 - With GRPC Server)\n  C(Aggregator - With GRPC Client)\n  D(Api Gateway)\n  E[End User]\n\nsubgraph MicroServices\n  A\n  B\nend\nE--\x3eD\nD --\x3e C\n\nC --\x3e A\nC --\x3e B\n")),(0,i.kt)("h5",{id:"protobuf-format"},"Protobuf Format"),(0,i.kt)("p",null,"Protocol Buffers is a free and open-source cross-platform data format used to serialize structured data.\ngRPC uses Protobuf Language for Communication. Protobuf is a mechanism for serializing structured data in a standard way. When compare to other formats (JSON, XML) Protobuf is smaller, faster"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"Refer official documentation for Protobuf syntax")),(0,i.kt)("h6",{id:"kestrel-configuration"},"Kestrel Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"'Kestrel': {\n    'EndpointDefaults': {\n      'Protocols': 'Http2'\n    }\n\"\n")))}p.isMDXComponent=!0}}]);