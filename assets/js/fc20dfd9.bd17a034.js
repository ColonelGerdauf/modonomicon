"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4910],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7858:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:40},i="Display (Only) Matcher",l={unversionedId:"multiblocks/state-matchers/display-matcher",id:"multiblocks/state-matchers/display-matcher",title:"Display (Only) Matcher",description:"Typedisplay",source:"@site/docs/multiblocks/state-matchers/display-matcher.md",sourceDirName:"multiblocks/state-matchers",slug:"/multiblocks/state-matchers/display-matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/display-matcher",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/multiblocks/state-matchers/display-matcher.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Block State Matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/blockstate-matcher"},next:{title:"Predicate Matchers",permalink:"/modonomicon/docs/multiblocks/state-matchers/predicate-matcher"}},c={},s=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display-only-matcher"},"Display (Only) Matcher"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"modonomicon:display")),(0,a.kt)("p",null,"Display matchers will render the configured block in the multiblock book page, but will match any blocks, including air.\nDisplay matchers will not render in the in-world preview to avoid confusing players.\nTheir main use is to provide background blocks for the multiblock when rendering in the book for better contrast and visibility."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"display")," (BlockState, ",(0,a.kt)("em",{parentName:"p"},"optional"),")"),(0,a.kt)("p",{parentName:"li"},"The BlockState to display in the multiblock preview. "),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you omit the BlockState properties (",(0,a.kt)("inlineCode",{parentName:"p"},"[key=value]"),"), Modonomicon will display the Block's default BlockState.")))),(0,a.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "modonomicon:display",\n    "display": "minecraft:chest[facing=west]",\n}\n')))}u.isMDXComponent=!0}}]);