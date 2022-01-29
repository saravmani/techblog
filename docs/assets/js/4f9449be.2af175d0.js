"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[2114],{3905:function(e,t,r){r.d(t,{Zo:function(){return y},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},y=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,d=l["".concat(p,".").concat(f)]||l[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},y),{},{components:r})):n.createElement(d,a({ref:t},y))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4887:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return y},default:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},p="What is Shadow Property Foreign Key in Entity Framework Core",u={unversionedId:"DotNetCore/EntityFrameworkCORE/Entity-framework-core-shadow-property-foreign-key",id:"DotNetCore/EntityFrameworkCORE/Entity-framework-core-shadow-property-foreign-key",title:"What is Shadow Property Foreign Key in Entity Framework Core",description:"Entity framework Core uses shadow foreign key property, When there is no actual foreign key property defined ..",source:"@site/docs/DotNetCore/EntityFrameworkCORE/Entity-framework-core-shadow-property-foreign-key.md",sourceDirName:"DotNetCore/EntityFrameworkCORE",slug:"/DotNetCore/EntityFrameworkCORE/Entity-framework-core-shadow-property-foreign-key",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/Entity-framework-core-shadow-property-foreign-key",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DotNetCore/EntityFrameworkCORE/Entity-framework-core-shadow-property-foreign-key.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Framework Core Migration Commands",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/Entity-Framework-Core-Migration-Commands"},next:{title:"Microservices - gRPC Communication",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/MicroServices-Communication-GRPC"}},y=[{value:"Entity framework Core uses shadow foreign key property, When there is no actual foreign key property defined ..",id:"entity-framework-core-uses-shadow-foreign-key-property-when-there-is-no-actual-foreign-key-property-defined-",children:[],level:6}],s={toc:y};function l(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-shadow-property-foreign-key-in-entity-framework-core"},"What is Shadow Property Foreign Key in Entity Framework Core"),(0,i.kt)("h6",{id:"entity-framework-core-uses-shadow-foreign-key-property-when-there-is-no-actual-foreign-key-property-defined-"},"Entity framework Core uses shadow foreign key property, When there is no actual foreign key property defined .."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In entity framework if foreign key property is NOT defined, a shadow foreign key property will be introduced by default.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note - But it is not recomended to not create foreign key property. We should define foreign key in dependent class")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ex:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"}," Public class StudentDetails // Principle entity\n {\n    [Key]\n    public int StudentId { get; set; }\n    public string StudentName{ get; set; }\n }\n Public class StudentAttendance // Dependent entity\n {\n    [Key]\n    public int AttendanceId { get; set; }\n    public string SubjectName{ get; set; }\n    public StudentDetails StudentDetails {get;set;}\n      //Note here we have not defined foreign key for student id\n      //In this case shandow foreign key will get generated automatically\n    ...\n }\n"))))}l.isMDXComponent=!0}}]);