"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3767],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7794:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const o={sidebar_position:60},i="Tag Matcher",c={unversionedId:"multiblocks/state-matchers/tag-matcher",id:"multiblocks/state-matchers/tag-matcher",title:"Tag Matcher",description:"Typetag",source:"@site/docs/multiblocks/state-matchers/tag-matcher.md",sourceDirName:"multiblocks/state-matchers",slug:"/multiblocks/state-matchers/tag-matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/tag-matcher",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/multiblocks/state-matchers/tag-matcher.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Predicate Matchers",permalink:"/modonomicon/docs/multiblocks/state-matchers/predicate-matcher"},next:{title:"Using Multiblocks in Code",permalink:"/modonomicon/docs/multiblocks/using-multiblocks-in-code"}},l={},s=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tag-matcher"},"Tag Matcher"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"modonomicon:tag")),(0,r.kt)("p",null,"Tag matchers will check if the placed block is part of the provided tag. Additionally BlockState properties can be provided to match against, in that case the matcher will only match if the block is in the tag, and has the provided properties."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," (Tag, ",(0,r.kt)("em",{parentName:"p"},"mandatory"),")"),(0,r.kt)("p",{parentName:"li"},"The Tag to match against when checking if a given block fits this matcher.",(0,r.kt)("br",{parentName:"p"}),"\n","BlockState properties can be provided in square brackets: ",(0,r.kt)("inlineCode",{parentName:"p"},"[key=value]")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"display")," (BlockState, ",(0,r.kt)("em",{parentName:"p"},"optional"),")"),(0,r.kt)("p",{parentName:"li"},"If none is provied, Modonomicon will cycle through the blocks in the tag.\nThe BlockState to display in the multiblock preview. "),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you omit the BlockState properties (",(0,r.kt)("inlineCode",{parentName:"p"},"[key=value]"),"), Modonomicon will display the Block's default BlockState.")))),(0,r.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")," Matching (and displaying) any planks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "modonomicon:tag",\n  "tag": "minecraft:planks"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")," Matching any wooden stairs facing west, but displaying a west-facing oak stair"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "modonomicon:block",\n    "display": "minecraft:oak_stairs[facing=west]",\n    "tag": "minecraft:wooden_stairs[facing=west]"\n}\n')))}m.isMDXComponent=!0}}]);