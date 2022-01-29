"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[7996],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,k=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return t?o.createElement(k,i(i({ref:n},d),{},{components:t})):o.createElement(k,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6654:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],c={},s="Useful Docker Commands",l={unversionedId:"Docker/Containers/Docker-Frequently-Used-Comments",id:"Docker/Containers/Docker-Frequently-Used-Comments",title:"Useful Docker Commands",description:"Frequently used docker commands",source:"@site/docs/Docker/Containers/Docker-Frequently-Used-Comments.md",sourceDirName:"Docker/Containers",slug:"/Docker/Containers/Docker-Frequently-Used-Comments",permalink:"/techblog/docs/Docker/Containers/Docker-Frequently-Used-Comments",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/Containers/Docker-Frequently-Used-Comments.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to change default Docker image installation path / Direcotory on Windows 10",permalink:"/techblog/docs/Docker/Docker-How-To-Change-Image-Installation-Path"},next:{title:"Disadvantages of Software frameworks",permalink:"/techblog/docs/SoftwareDevelopment/DisAdvantages-Of-Frameworks"}},d=[{value:"Frequently used docker commands",id:"frequently-used-docker-commands",children:[],level:6},{value:"To Remove Containers and Images",id:"to-remove-containers-and-images",children:[],level:6},{value:"To listdown",id:"to-listdown",children:[],level:6},{value:"To Start and Stop containers",id:"to-start-and-stop-containers",children:[],level:6},{value:"To Run Container with interactive mode",id:"to-run-container-with-interactive-mode",children:[],level:6},{value:"Command to run bash in docker",id:"command-to-run-bash-in-docker",children:[],level:6},{value:"Debugging/ View logs in docker",id:"debugging-view-logs-in-docker",children:[],level:6},{value:"Docker Compose",id:"docker-compose",children:[],level:6}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useful-docker-commands"},"Useful Docker Commands"),(0,a.kt)("h6",{id:"frequently-used-docker-commands"},"Frequently used docker commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"\ndocker -version #to Get installed docker version\ndocker pull image-name\ndocker run -it -d image-name #Creates container from image\n          # -it means interactive mode.\n          # --rm if we add this switch then container will get removed once its work done\n          # -e ENVIRNMENT_VARIABLE_NAME=SOMEVALUE\n\ndocker run -e ENVIRNMENT_VARIABLE_NAME=SOMEVALUE image-name # To set the environment variable for the container\ndocker log container-id\ndocker compose up # to run multiple containers\n")),(0,a.kt)("h6",{id:"to-remove-containers-and-images"},"To Remove Containers and Images"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker stop $(docker ps -aq) # to stop all containers\ndocker rm $(docker ps -a -q) # to remove all stopped CONTAINERS\ndocker rmi $(docker images -q) #to remove all IMAGES\ndocker rmi <image id> # to remove image by image id\ndocker rm <container id> #to remove stopped container\ndocker system purne # will remove stopped containers, not used networks, Cache  etc.,\n")),(0,a.kt)("h6",{id:"to-listdown"},"To listdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker images   #to get list of images\ndocker container list # lists the containers with running status\ndocker container list -a #lists the containers with or without running status\ndocker ps #shows running list of running images\ndocker ps -a #shows running list of running and exited containers\ndocker port <container name>  # To listdown list ports used by the container\ndocker logs <conainer name> # To read the Container logs. This will get the logs even if the container in not running state\n\n")),(0,a.kt)("h6",{id:"to-start-and-stop-containers"},"To Start and Stop containers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker stop $(docker ps -aq) #to stop all containers\ndocker start <container id>\ndocker stop <container id>\n")),(0,a.kt)("h6",{id:"to-run-container-with-interactive-mode"},"To Run Container with interactive mode"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: With interactive mode we can able to execute the commands in our system's terminal and the command actually executes in container")),(0,a.kt)("h6",{id:"command-to-run-bash-in-docker"},"Command to run bash in docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker exec -it bloggerDocDB /bin/bash\n# Interact with Linux containers\ndocker exec -it microblogger_bloggerservice_1 cmd.exe\n# Interact with Windows containers\n")),(0,a.kt)("p",null,"Two switches are there for this command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"i - to run container interactively mode"),(0,a.kt)("li",{parentName:"ul"},"t - commands typed in our terminal, will get executed within container's terminal and produces output in outside")),(0,a.kt)("h6",{id:"debugging-view-logs-in-docker"},"Debugging/ View logs in docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"docker logs -f <Contianer_Name>\n# To view the Image Running Status, Logs  and Live Logs\n")),(0,a.kt)("h6",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f docker-compose.yml  -f docker-compose.override.yml up -d\n# up -  To up the Containers\n# down -  To stop the Containers\n\n")))}m.isMDXComponent=!0}}]);