(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(179)),i={title:"Cheat Sheet"},p={id:"cheat",title:"Cheat Sheet",description:"Assume `Animal` is defined as in the [Introduction](intro)\r",source:"@site/docs\\cheat.md",permalink:"/variant/docs/cheat",sidebar:"someSidebar",previous:{title:"React + Redux \u269b\ufe0f",permalink:"/variant/docs/use/redux"},next:{title:"That type tho...",permalink:"/variant/docs/articles/that-type"}},c=[{value:"Boilerplate",id:"boilerplate",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Assume ",Object(o.b)("inlineCode",{parentName:"p"},"Animal")," is defined as in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"intro"}),"Introduction")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// import \nimport {Animal} from '...';\n\n// create\nconst steve = Animal.snake('steve');\n\n// snake type\ntype SnakeType = Animal<'snake'>;\n\n// union of all animals\ntype AllAnimalsType = Animal;\n")),Object(o.b)("h3",{id:"boilerplate"},"Boilerplate"),Object(o.b)("p",null,"Here are some ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets"}),"VS Code snippets")," to make following the groupings pattern very easy."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "VariantModule": {\n        "prefix": ["variant-module", "vm"],\n        "body": [\n            "export const $1 = variantModule({",\n            "    $2",\n            "});",\n            "export type $1<T extends TypeNames<typeof $1> = undefined> = VariantOf<typeof $1, T>;",\n            ""\n        ],\n        "description": "Initialize a module for variants"\n    },\n    "VariantList": {\n        "prefix": ["variant-list", "vl"],\n        "body": [\n            "export const $1 = variantList([",\n            "    $2",\n            "]);",\n            "export type $1<T extends TypeNames<typeof $1> = undefined> = VariantOf<typeof $1, T>;",\n            ""\n        ],\n        "description": "Initialize a module for variants as a list"\n    },\n    "VariantTypeAnnotation": {\n        "prefix": ["variant-type", "vt"],\n        "body": [\n            "export type $1<T extends TypeNames<typeof $1> = undefined> = VariantOf<typeof $1, T>;",\n        ],\n        "description": "Type annotation for variants"\n    },\n}\n')))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(m,p({ref:t},l,{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);