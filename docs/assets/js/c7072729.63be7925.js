"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[2746],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={},l="How to change default Docker image installation path / Direcotory on Windows 10",s={unversionedId:"Docker/Docker-How-To-Change-Image-Installation-Path",id:"Docker/Docker-How-To-Change-Image-Installation-Path",title:"How to change default Docker image installation path / Direcotory on Windows 10",description:"Steps to change default image download path",source:"@site/docs/Docker/Docker-How-To-Change-Image-Installation-Path.md",sourceDirName:"Docker",slug:"/Docker/Docker-How-To-Change-Image-Installation-Path",permalink:"/techblog/docs/Docker/Docker-How-To-Change-Image-Installation-Path",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/Docker-How-To-Change-Image-Installation-Path.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discussion on Docker File and Docker Compose File",permalink:"/techblog/docs/Docker/Docker-File-DockerCompose"},next:{title:"Useful Docker Commands",permalink:"/techblog/docs/Docker/Containers/Docker-Frequently-Used-Comments"}},p=[{value:"Steps to change default image download path",id:"steps-to-change-default-image-download-path",children:[],level:6}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-change-default-docker-image-installation-path--direcotory-on-windows-10"},"How to change default Docker image installation path / Direcotory on Windows 10"),(0,a.kt)("h6",{id:"steps-to-change-default-image-download-path"},"Steps to change default image download path"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Stop Docker from your machine"),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("em",{parentName:"li"},"daemon.json")," file from the below mentioned path")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    %programdata%\\docker\\config\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Find the josn key ",(0,a.kt)("em",{parentName:"li"},"data-root")," and update the value with the path . If the key not exsits then add the key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Example\n      {\n          "registry-mirrors": [],\n          "insecure-registries": [],\n          "debug": false,\n          "experimental": false,\n          "data-root": "D:\\\\DockerImages\\\\",\n      }\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the docker. From now the images will get installed into new path")))}m.isMDXComponent=!0}}]);