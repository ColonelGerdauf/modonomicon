"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3803],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return o?n.createElement(h,a(a({ref:t},l),{},{components:o})):n.createElement(h,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1941:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=o(3117),r=(o(7294),o(3905));const i={sidebar_position:10},a="Step by Step Guide for Book Datagen",d={unversionedId:"getting-started/step-by-step-with-datagen/step-by-step-with-datagen",id:"getting-started/step-by-step-with-datagen/step-by-step-with-datagen",title:"Step by Step Guide for Book Datagen",description:"This page will guide you through the recommended and most convenient way to create a book.",source:"@site/docs/getting-started/step-by-step-with-datagen/step-by-step-with-datagen.md",sourceDirName:"getting-started/step-by-step-with-datagen",slug:"/getting-started/step-by-step-with-datagen/",permalink:"/modonomicon/docs/getting-started/step-by-step-with-datagen/",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/getting-started/step-by-step-with-datagen/step-by-step-with-datagen.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/modonomicon/docs/getting-started/"},next:{title:"Step 1: Setting up the Demo Project",permalink:"/modonomicon/docs/getting-started/step-by-step-with-datagen/step1"}},s={},p=[{value:"Book Creation Demo Project",id:"book-creation-demo-project",level:2},{value:"For Mod Developers",id:"for-mod-developers",level:3},{value:"For Modpack Creators",id:"for-modpack-creators",level:3},{value:"Understanding the Demo Project Repository",id:"understanding-the-demo-project-repository",level:2},{value:"Step 0: The Editor of your Choice",id:"step-0-the-editor-of-your-choice",level:2}],l={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-by-step-guide-for-book-datagen"},"Step by Step Guide for Book Datagen"),(0,r.kt)("p",null,"This page will guide you through the recommended and most convenient way to create a book. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you run into any issues or have any questions, join our Discord: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://invite.gg/klikli"},"https://invite.gg/klikli")))),(0,r.kt)("h2",{id:"book-creation-demo-project"},"Book Creation Demo Project"),(0,r.kt)("p",null,"To show how to create a book with datagen, we have created a demo project that you can use as a starting point for your own book. "),(0,r.kt)("p",null,"You can find the files at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/klikli-dev/modonomicon-demo-book"},"https://github.com/klikli-dev/modonomicon-demo-book"))),(0,r.kt)("h3",{id:"for-mod-developers"},"For Mod Developers"),(0,r.kt)("p",null,"You can copy and paste code from the Demo Project into your own mod.\nPlease also see ",(0,r.kt)("a",{parentName:"p",href:"../maven-dependencies"},"Maven Dependencies")," for information on how to set up the Modonomicon dependency (alternatively, look into the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle.properties")," files of the demo project)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that you cannot mix a manually created ",(0,r.kt)("inlineCode",{parentName:"p"},"lang/*.json")," file with language datagen (datagen will override your manually created file).\nHowever, it is best practice to datagen all your lang files anyway.")),(0,r.kt)("h3",{id:"for-modpack-creators"},"For Modpack Creators"),(0,r.kt)("p",null,"You can use the Demo Project to generate JSON files that you can copy into your modpack's datapack/resourcepack."),(0,r.kt)("p",null,"The generated files for the book will end up in ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/generated/resources/data/modonomicon_demo_book/"),", while the generated language files can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/generated/resources/assets/modonomicon_demo_book/lang/"),"."),(0,r.kt)("p",null,"Follow this guide to learn how to generate your own files."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"No Java or other programming knowledge is needed to use the Demo Project, but programming knowledge will be helpful if you want to automate the creation of the book to a higher degree.")),(0,r.kt)("h2",{id:"understanding-the-demo-project-repository"},"Understanding the Demo Project Repository"),(0,r.kt)("p",null,"The Demo Project will offer one git branch for each major step in this guide. A list of branches can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/klikli-dev/modonomicon-demo-book/branches"},"https://github.com/klikli-dev/modonomicon-demo-book/branches")),(0,r.kt)("p",null,'The branch "main", which you also see when opening ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/klikli-dev/modonomicon-demo-book"},"https://github.com/klikli-dev/modonomicon-demo-book"),", contains the final result of the guide, including the generated files."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'If you do not know what a "git branch" is - worry not. Think of it as one snapshot of the demo project that you can download that corresponds to the current step in this guide.')),(0,r.kt)("h2",{id:"step-0-the-editor-of-your-choice"},"Step 0: The Editor of your Choice"),(0,r.kt)("p",null,"You can use any text editor you like to create the book."),(0,r.kt)("p",null,"For convenience, and if you are familiar with it, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"Intellij Community Version"),", however other Editors such as Eclipse and Visual Studio Code will work as well."),(0,r.kt)("p",null,"The guide will mostly be editor-agnostic, but we will provide some tips for Intellij users. Steps are very similar for users of other IDEs."))}c.isMDXComponent=!0}}]);