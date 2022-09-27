"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6341],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:20},i="State Matchers",c={unversionedId:"multiblocks/state-matchers/state-matchers",id:"multiblocks/state-matchers/state-matchers",title:"State Matchers",description:"Each state matcher represents one block at one specific position in the multiblock, and depending on the type of matcher it may only allow one specific block, or a wide range of blocks in that position.",source:"@site/docs/multiblocks/state-matchers/state-matchers.md",sourceDirName:"multiblocks/state-matchers",slug:"/multiblocks/state-matchers/",permalink:"/modonomicon/docs/multiblocks/state-matchers/",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/multiblocks/state-matchers/state-matchers.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Sparse Multiblock",permalink:"/modonomicon/docs/multiblocks/defining-multiblocks/sparse-multiblocks"},next:{title:"Any Matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/any-matcher"}},l={},s=[{value:"Common Attributes",id:"common-attributes",level:2},{value:"Attribute Types",id:"attribute-types",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state-matchers"},"State Matchers"),(0,a.kt)("p",null,"Each state matcher represents one block at one specific position in the multiblock, and depending on the type of matcher it may only allow one specific block, or a wide range of blocks in that position. "),(0,a.kt)("p",null,"State matchers are defined ",(0,a.kt)("a",{parentName:"p",href:"/modonomicon/docs/multiblocks/defining-multiblocks/#mappings"},"in the ",(0,a.kt)("inlineCode",{parentName:"a"},"mappings")," part of the multiblock definition"),"."),(0,a.kt)("h2",{id:"common-attributes"},"Common Attributes"),(0,a.kt)("p",null,"All state matchers need to have the following attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," (State Matcher Type, ",(0,a.kt)("em",{parentName:"li"},"mandatory"),")")),(0,a.kt)("p",null,"A ResourceLocation identifying the type of state matcher to use.",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"modonomicon:block")," "),(0,a.kt)("h2",{id:"attribute-types"},"Attribute Types"),(0,a.kt)("p",null,"Besides standard JSON types, state matchers support the following attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Block")," (String)"),(0,a.kt)("p",{parentName:"li"},"A ResourceLocation for a block, in the format ",(0,a.kt)("inlineCode",{parentName:"p"},"modid:block"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft:stone")," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"BlockState")," (String)"),(0,a.kt)("p",{parentName:"li"},"A BlockState string as used in the Minecraft ",(0,a.kt)("inlineCode",{parentName:"p"},"setblock")," command.",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft:chest[facing=east]"),".  "),(0,a.kt)("p",{parentName:"li"},"The block state properties can be omitted, in which case the default BlockState will be used.",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft:chest"),"."),(0,a.kt)("p",{parentName:"li"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Commands/setblock"},"https://minecraft.fandom.com/wiki/Commands/setblock")," for more information")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Tag")," (String)"),(0,a.kt)("p",{parentName:"li"},"A Tag string that is based on the BlockState string as used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setblock")," command, but prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"#"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"#forge:chests[facing=east]")),(0,a.kt)("p",{parentName:"li"},"The block state properties can be omitted, in which case the block state properties will be ignored when matching.",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"#forge:chests"),"."))))}m.isMDXComponent=!0}}]);