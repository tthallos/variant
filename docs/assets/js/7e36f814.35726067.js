"use strict";(self.webpackChunkvariant_site=self.webpackChunkvariant_site||[]).push([[136],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5940:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"redux-toolkit"},l=void 0,c={unversionedId:"libraries/redux-toolkit",id:"libraries/redux-toolkit",isDocsHomePage:!1,title:"redux-toolkit",description:"Redux Toolkit is an opinionated library of batteries-included components and tools intended to assist react users by providing sane defaults. I have been asked to compare Variant to redux-toolkit on a number of occasions. It makes sense that readers would connect the two - createAction is almost identical to our variation().",source:"@site/docs/libraries/redux-toolkit.md",sourceDirName:"libraries",slug:"/libraries/redux-toolkit",permalink:"/variant/docs/next/libraries/redux-toolkit",tags:[],version:"current",frontMatter:{title:"redux-toolkit"},sidebar:"someSidebar",previous:{title:"rx/js - Observables",permalink:"/variant/docs/next/libraries/rxjs"},next:{title:"Todo",permalink:"/variant/docs/next/todo"}},p=[{value:"<code>createAction</code>",id:"createaction",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Redux Toolkit is an opinionated library of batteries-included components and tools intended to assist react users by providing sane defaults. I have been asked to compare Variant to redux-toolkit on a number of occasions. It makes sense that readers would connect the two - ",(0,o.kt)("inlineCode",{parentName:"p"},"createAction")," is almost identical to our ",(0,o.kt)("inlineCode",{parentName:"p"},"variation()"),"."),(0,o.kt)("p",null,"Redux Toolkit attempts to resolve the confusion around redux by providing a set of tools that improve and streamline the developer experience. They have a strong focus on inferred typing to do this. In their efforts, they present an action creator, configuration tools, a tool to create reducers by writing look tables of action types. These are fantastic tools, in fact you'll find analogues to each of them here. I would argue the problem isn't a lack of clarity in ",(0,o.kt)("em",{parentName:"p"},"redux"),", specifically. The problem is a lack of strong tooling around this ",(0,o.kt)("em",{parentName:"p"},"in the language itself"),"."),(0,o.kt)("p",null,"What if you could use createReducer on anything? What if you could model your entire domain, instead of just your actions, in unions and other types. "),(0,o.kt)("h2",{id:"createaction"},(0,o.kt)("inlineCode",{parentName:"h2"},"createAction")),(0,o.kt)("p",null,"The full details of createAction are available at ",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createAction"},"their documentation"),". Much like ",(0,o.kt)("inlineCode",{parentName:"p"},"variation()"),", the first parameter is the relevant type."),(0,o.kt)("p",null,"The simplest use appears the same."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"actionOne"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"createAction"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'test'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},");")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"actionTwo"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'test'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},");"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"actionOne"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," createAction"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"actionTwo"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"test"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")))))),(0,o.kt)("p",null,"There is another "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"createAction focuses on a singular action creator that may or may not get grouped into a larger set of Action types. ")),(0,o.kt)("p",null,"There are several key differences between our projects, but the two may work in harmony and (spoiler alert) I recommend that redux-toolkit users continue working with their preferred stack but integrate Variant in select places for its superior creation utilities and more general-purpose matching. "),(0,o.kt)("p",null,"The first being I'm not here to sell you on redux. Don't get me wrong, I use and enjoy redux, but I have no affiliation with the project and Variant has tremendous utility with or without it. This tie to redux also influences their decision to provide utilities like ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice"),". "),(0,o.kt)("p",null,"The second is that Variant is unopinionated. Use as much or as little of the library as you wish and do so in whichever ways you find beneficial. I will demonstrate some useful patterns, but they are by no means mandated."),(0,o.kt)("p",null,"mapDispatchToProps "),(0,o.kt)("p",null,"bindActionCreators, same as augment. "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"TODO:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exhaustiveness.")))}u.isMDXComponent=!0}}]);