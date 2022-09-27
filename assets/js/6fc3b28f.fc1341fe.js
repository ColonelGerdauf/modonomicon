"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4239],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var a=r(3117),n=(r(7294),r(3905));const i={sidebar_position:50},o="Predicate Matchers",c={unversionedId:"multiblocks/state-matchers/predicate-matcher",id:"multiblocks/state-matchers/predicate-matcher",title:"Predicate Matchers",description:"Typepredicate",source:"@site/docs/multiblocks/state-matchers/predicate-matcher.md",sourceDirName:"multiblocks/state-matchers",slug:"/multiblocks/state-matchers/predicate-matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/predicate-matcher",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/multiblocks/state-matchers/predicate-matcher.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Display (Only) Matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/display-matcher"},next:{title:"Tag Matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/tag-matcher"}},l={},s=[{value:"Attributes",id:"attributes",level:2},{value:"Registering Predicates",id:"registering-predicates",level:2},{value:"Builtin Predicates",id:"builtin-predicates",level:2},{value:"Air Predicate",id:"air-predicate",level:3},{value:"Usage Examples",id:"usage-examples",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"predicate-matchers"},"Predicate Matchers"),(0,n.kt)("h1",{id:"tag-matcher"},"Tag Matcher"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"modonomicon:predicate")),(0,n.kt)("p",null,"Predicate matchers can use advanced logic to match blocks. The matching logic must be provided as Java Code and registerd with a Resource Location ID.\nTag matchers will check if the placed block is part of the provided tag. Additionally BlockState properties can be provided to match against, in that case the matcher will only match if the block is in the tag, and has the provided properties."),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"predicate")," (ResourceLocation, ",(0,n.kt)("em",{parentName:"p"},"mandatory"),")"),(0,n.kt)("p",{parentName:"li"},"The ID of the predicate to use for the matcher.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"display")," (BlockState, ",(0,n.kt)("em",{parentName:"p"},"mandatory"),")"),(0,n.kt)("p",{parentName:"li"},"The block to display in the multiblock preview. "),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you omit the BlockState properties (",(0,n.kt)("inlineCode",{parentName:"p"},"[key=value]"),"), Modonomicon will display the Block's default BlockState.")))),(0,n.kt)("h2",{id:"registering-predicates"},"Registering Predicates"),(0,n.kt)("p",null,"Predicates are registered in the ",(0,n.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent"),": "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public void onCommonSetup(FMLCommonSetupEvent event) {\n    LoaderRegistry.registerPredicate(new ResourceLocation("modonomicon:air"), (getter, pos, state) -> state.isAir());\n}\n')),(0,n.kt)("p",null,"You can of course define any predicate you like that fits a "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"TriPredicate<BlockGetter, BlockPos, BlockState>\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To access the ",(0,n.kt)("inlineCode",{parentName:"p"},"LoaderRegistry")," you need to define a dependency on the full modonomicon jar in your ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gralde")," (See ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"../../getting-started/maven-dependencies"},"Maven Dependencies")),")\nIf you then call ",(0,n.kt)("inlineCode",{parentName:"p"},"LoaderRegistry.registerPredicate")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent")," like above you effectively create a hard dependency on Modonomicon.\nYou can avoid this by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"LoaderRegistry.registerPredicate")," in a separate class, and only call that classes Methods if Modonomicon is loaded.")),(0,n.kt)("h2",{id:"builtin-predicates"},"Builtin Predicates"),(0,n.kt)("h3",{id:"air-predicate"},"Air Predicate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Predicate ID:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"modonomicon:air")),(0,n.kt)("p",null,"Matches air blocks. Requires players to remove any blocks in the location of this matcher."),(0,n.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,n.kt)("p",null,"Match air predicate and display .. nothing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "modonomicon:predicate",\n  "predicate": "modonomicon:air",\n  "display": "minecraft:air"\n}\n')))}d.isMDXComponent=!0}}]);