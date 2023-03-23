"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9661],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3688:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_position:30},i="Categories",l={unversionedId:"basics/structure/categories",id:"basics/structure/categories",title:"Categories",description:"Categories are defined in json files placed in the /data//modonomicons//categories/ folder.",source:"@site/docs/basics/structure/categories.md",sourceDirName:"basics/structure",slug:"/basics/structure/categories",permalink:"/modonomicon/docs/basics/structure/categories",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/structure/categories.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Book.json",permalink:"/modonomicon/docs/basics/structure/book"},next:{title:"Entries",permalink:"/modonomicon/docs/basics/structure/entries"}},s={},u=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"categories"},"Categories"),(0,o.kt)("p",null,"Categories are defined in json files placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/data/<mod_id>/modonomicons/<book_id>/categories/")," folder. "),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (DescriptionId, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"The category name. Will not parse markdown."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"icon")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Either")," an item/block ResourceLocation that should be used as icon. E.g.:  ",(0,o.kt)("inlineCode",{parentName:"p"},"minecraft:nether_star")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"minecraft:chest"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Or")," the ResourceLocation to a texture. The texture must be 16x16 pixels. E.g.:  ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:textures/gui/some_random_icon.png"),". "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To use a texture make sure the ResourceLocation includes the file endinge ",(0,o.kt)("inlineCode",{parentName:"p"},".png")," as seen in the example above.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sort_number")," (Integer, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),".",(0,o.kt)("br",{parentName:"p"}),"\n",'Category "Bookmark"-Buttos on the left side of the Book will be sorted by this number.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"condition")," (Condition, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Categories, like Entries, can be hidden until an Unlock Condition is fulfilled. Conditions are JSON objects.",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../unlock-conditions"},"Unlock Conditions"))," for details."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"background")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:textures/gui/dark_slate_seamless.png"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The ResourceLocation for the Background texture to use for this category. The texture must be 512px by 512px."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"background_parallax_layers")," (JSON Array of JSON Objects, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"If any parallax layers are supplied, the ",(0,o.kt)("inlineCode",{parentName:"p"},"background")," property will be ignored.   "),(0,o.kt)("p",null,"Parallax layers allow a multi-layered background with a parallax effect. That means, the textures supplied here likely will feature transparent elements, however the first layer should be fully opaque to avoid visual artifacts.   "),(0,o.kt)("p",null,"Sample Value: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"background_parallax_layers": [\n    {\n      "background": "modonomicon:textures/gui/parallax/flow/base.png",\n      "speed": 0.7\n    },\n    {\n      "background": "modonomicon:textures/gui/parallax/flow/1.png",\n      "speed": 1.0\n    },\n    {\n      "background": "modonomicon:textures/gui/parallax/flow/2.png",\n      "speed": 1.4,\n      "vanish_zoom": 0.9\n    }\n  ],\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"background_height")," (Integer, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Default value: ",(0,o.kt)("inlineCode",{parentName:"p"},"512"),(0,o.kt)("br",{parentName:"p"}),"\n","The height of the background texture. Applies both to the ",(0,o.kt)("inlineCode",{parentName:"p"},"background")," property as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"background_parallax_layers")," property."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"background_width")," (Integer, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Default value: ",(0,o.kt)("inlineCode",{parentName:"p"},"512"),(0,o.kt)("br",{parentName:"p"}),"\n","The width of the background texture. Applies both to the ",(0,o.kt)("inlineCode",{parentName:"p"},"background")," property as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"background_parallax_layers")," property."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"entry_textures")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:textures/gui/entry_textures.png"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The ResourceLocation for the Entry textures to use for this category. The texture must be 512px by 512px.",(0,o.kt)("br",{parentName:"p"}),"\n","Entry textures govern how the Entry background behind the Icon as well as the arrows connecting entries look.   "),(0,o.kt)("p",null,"If you want to use a custom texture, make sure to copy the default file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/klikli-dev/modonomicon/blob/version/1.19/src/main/resources/assets/modonomicon/textures/gui/entry_textures.png"},(0,o.kt)("inlineCode",{parentName:"a"},"/assets/modonomicon/textures/gui/entry_textures.png"))," and modify it in order to preserve the UV coordinates of all parts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"show_category_button")," (Boolean, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".",(0,o.kt)("br",{parentName:"p"}),"\n","If false, the book overview screen will not show a button/bookmark for this category. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'This is intended to be used with an entry that links to this category to effectively create "sub-categories". See also ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./entries"},"Entries"))," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"category_to_open")," attribute.")),(0,o.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/data/<mod_id>/modonomicons/<book_id>/categories/features.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "background": "modonomicon:textures/gui/dark_slate_seamless.png",\n  "entry_textures": "modonomicon:textures/gui/entry_textures.png",\n  "icon": "minecraft:nether_star",\n  "name": "book.modonomicon.demo.features.name",\n  "sort_number": -1\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/lang/*.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "book.modonomicon.demo.features.name": "Features Category",\n}\n')))}c.isMDXComponent=!0}}]);