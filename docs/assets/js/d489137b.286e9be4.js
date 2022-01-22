"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[3105],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,v=p["".concat(i,".").concat(m)]||p[m]||b[m]||l;return t?n.createElement(v,s(s({ref:r},c),{},{components:t})):n.createElement(v,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=p;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9996:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),s=["components"],o={},i="Angular - Observables - Quick start",u={unversionedId:"Angular/Angular2/Observables/Angular-observables-example-quick-start",id:"Angular/Angular2/Observables/Angular-observables-example-quick-start",title:"Angular - Observables - Quick start",description:"In Angular Observable collection playing important role. This article will provide simple steps to start with Observables in Angular 2 +",source:"@site/docs/Angular/Angular2/Observables/Angular-observables-example-quick-start.md",sourceDirName:"Angular/Angular2/Observables",slug:"/Angular/Angular2/Observables/Angular-observables-example-quick-start",permalink:"/techblog/docs/Angular/Angular2/Observables/Angular-observables-example-quick-start",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Angular/Angular2/Observables/Angular-observables-example-quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Angular HttpInterceptor to Handle HTTP Error (Middleware)",permalink:"/techblog/docs/Angular/Angular2/MiddleWare/Angular-Http-Interceptor-Middleware"}},c=[{value:"In Angular Observable collection playing important role. This article will provide simple steps to start with Observables in Angular 2 +",id:"in-angular-observable-collection-playing-important-role-this-article-will-provide-simple-steps-to-start-with-observables-in-angular-2-",children:[],level:6},{value:"Full Code with Observable and Subject",id:"full-code-with-observable-and-subject",children:[],level:6},{value:"Producer.ts - Producer which broadcast the data usbing Observable",id:"producerts---producer-which-broadcast-the-data-usbing-observable",children:[],level:6},{value:"Consumer.ts - consumer who subscribes the Observable",id:"consumerts---consumer-who-subscribes-the-observable",children:[],level:6}],b={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"angular---observables---quick-start"},"Angular - Observables - Quick start"),(0,l.kt)("h6",{id:"in-angular-observable-collection-playing-important-role-this-article-will-provide-simple-steps-to-start-with-observables-in-angular-2-"},"In Angular Observable collection playing important role. This article will provide simple steps to start with Observables in Angular 2 +"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Import Observable, Subject from rxjs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"  import { Observable, Subject } from 'rxjs';\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Declare subject and Observable properties")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"  private menuSubject: Subject<string>;\n  public menuItemsObservable: Observable<string>;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"In constructor create object for subject and initialise Observable")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"  this.menuSubject = new Subject<string>();\n  this.menuItemsObservable = this.menuSubject.asObservable();\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Use the subject to publish or broadcast the data")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"  this.menuSubject.next(result);\n")),(0,l.kt)("hr",null),(0,l.kt)("h6",{id:"full-code-with-observable-and-subject"},"Full Code with Observable and Subject"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Producer.ts - producer"),(0,l.kt)("li",{parentName:"ul"},"consumer.ts - consumer")),(0,l.kt)("h6",{id:"producerts---producer-which-broadcast-the-data-usbing-observable"},"Producer.ts - Producer which broadcast the data usbing Observable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nimport { Injectable } from '@angular/core';\nimport { HttpClient, HttpHeaders } from '@angular/common/http';\nimport { Observable, Subject } from 'rxjs';\n@Injectable({\n  providedIn: 'root'\n})\nexport class Producer {\n  private serverBaseURL = 'http://localhost:53316/';\n  private menuSubject: Subject<string>;// Step 1\n  public menuItemsObservable: Observable<string>;// Step 2\n  constructor(private objHttpClient: HttpClient) {\n    this.menuSubject = new Subject<string>();// Step 4\n    this.menuItemsObservable = this.menuSubject.asObservable();// Step 5\n  }\n  public AuthenticateUser(idToken: string, authenticationSource: string): Observable<AuthenticationRes> {\n    return this.objHttpClient.post<AuthenticationRes>(this.serverBaseURL + 'ServerAPI')\n     .SUBSCRIBE(result => {\n       this.menuSubject.next(result);// Step 6\n     });\n  }\n}\n")),(0,l.kt)("h6",{id:"consumerts---consumer-who-subscribes-the-observable"},"Consumer.ts - consumer who subscribes the Observable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Observable, Subject } from 'rxjs';\nimport { Producer } from './services/Producer';\nexport class Consumer {\n  constructor(private producer: Producer) {\n  }\n  initializeApp() {\n    this.producer.menuItemsObservable.subscribe(a => { //Step 7\n      console.log(a);\n    });\n  }\n}\n\n")))}p.isMDXComponent=!0}}]);