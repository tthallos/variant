(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(179)),l={title:"Changelog"},c={id:"changelog",title:"Changelog",description:"Summary of the changes in each patch.\r",source:"@site/docs\\changelog.md",permalink:"/variant/docs/changelog",sidebar:"secondSidebar",previous:{title:"About",permalink:"/variant/docs/about"},next:{title:"Credits & Attribution",permalink:"/variant/docs/credits"}},o=[{value:"2.0.3",id:"203",children:[]},{value:"2.0.2",id:"202",children:[]},{value:"2.0.1",id:"201",children:[]},{value:"2.0",id:"20",children:[]}],b={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Summary of the changes in each patch."),Object(i.b)("h2",{id:"203"},"2.0.3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"matcher()")," function"),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"constrainedVariant()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"patternedVariant()"),"."),Object(i.b)("li",{parentName:"ul"},"Added match helpers ",Object(i.b)("inlineCode",{parentName:"li"},"just()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"unpack()"))),Object(i.b)("h2",{id:"202"},"2.0.2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"isType")," utility",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"and a curried overload"))),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"match")," function has some new overloads",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"default functionality"),Object(i.b)("li",{parentName:"ul"},"type-safe 'else' handling"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match")," is now stricter, extraneous keys will raise a compiler error"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"partialMatch")," and ",Object(i.b)("inlineCode",{parentName:"li"},"matchElse")," will soon be deprecated and removed in ",Object(i.b)("inlineCode",{parentName:"li"},"3.0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"their functionality is now covered by ",Object(i.b)("inlineCode",{parentName:"li"},"match")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variantModule")," also accepts ",Object(i.b)("inlineCode",{parentName:"li"},"{}")),Object(i.b)("li",{parentName:"ul"},"improved generic handling (",Object(i.b)("inlineCode",{parentName:"li"},"genericVariant"),")")),Object(i.b)("h2",{id:"201"},"2.0.1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"exposed ",Object(i.b)("inlineCode",{parentName:"li"},"variantModule"))),Object(i.b)("h2",{id:"20"},"2.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"first overhaul of library"),Object(i.b)("li",{parentName:"ul"},"added recursive and generic variants"),Object(i.b)("li",{parentName:"ul"},"added ",Object(i.b)("inlineCode",{parentName:"li"},"variantModule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variantList")," now accepts raw string literals"),Object(i.b)("li",{parentName:"ul"},"match ")))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(O,c({ref:t},b,{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);