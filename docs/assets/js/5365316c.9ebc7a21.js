"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[7873],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6060:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={},c="Log SQL Queries in EntityFramework Core",s={unversionedId:"DotNetCore/EntityFrameworkCORE/Entity-framework-core-log-sql-query-to-file",id:"DotNetCore/EntityFrameworkCORE/Entity-framework-core-log-sql-query-to-file",title:"Log SQL Queries in EntityFramework Core",description:"Steps to add logging mechanism to EF Core project to log SQL queries to console/ file/ debug window",source:"@site/docs/DotNetCore/EntityFrameworkCORE/Entity-framework-core-log-sql-query-to-file.md",sourceDirName:"DotNetCore/EntityFrameworkCORE",slug:"/DotNetCore/EntityFrameworkCORE/Entity-framework-core-log-sql-query-to-file",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/Entity-framework-core-log-sql-query-to-file",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DotNetCore/EntityFrameworkCORE/Entity-framework-core-log-sql-query-to-file.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dapper Vs EntitiyFramework",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/Dapper-Vs-EntityFramework"},next:{title:"Entity Framework Core Migration Commands",permalink:"/techblog/docs/DotNetCore/EntityFrameworkCORE/Entity-Framework-Core-Migration-Commands"}},u=[{value:"Steps to add logging mechanism to EF Core project to log SQL queries to console/ file/ debug window",id:"steps-to-add-logging-mechanism-to-ef-core-project-to-log-sql-queries-to-console-file-debug-window",children:[],level:6},{value:"Full DbContext Class Code with logging",id:"full-dbcontext-class-code-with-logging",children:[],level:6}],g={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"log-sql-queries-in-entityframework-core"},"Log SQL Queries in EntityFramework Core"),(0,i.kt)("h6",{id:"steps-to-add-logging-mechanism-to-ef-core-project-to-log-sql-queries-to-console-file-debug-window"},"Steps to add logging mechanism to EF Core project to log SQL queries to console/ file/ debug window"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install nuget package  - Microsoft.Extensions.Logging")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"PM> Microsoft.Extensions.Logging\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In DbContext class add below code to create logger factory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"}," public static readonly ILoggerFactory objLoggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Configure LoggerFactory in OnConfiguration method of dbcontext class")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n{\n  optionsBuilder.UseLoggerFactory(objLoggerFactory);\n  //.. Other configurations\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h6",{id:"full-dbcontext-class-code-with-logging"},"Full DbContext Class Code with logging"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyDbContext : DbContext\n  {\n      public DbSet<UserDetail> UserDetails { get; set; } // DB Model\n      public static readonly ILoggerFactory objLoggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });\n      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n      {\n          optionsBuilder.UseLoggerFactory(objLoggerFactory);\n          optionsBuilder.UseSqlite(@"Data Source=DBLayer\\MyDB.db");\n          base.OnConfiguring(optionsBuilder);\n      }\n  }\n')))}p.isMDXComponent=!0}}]);