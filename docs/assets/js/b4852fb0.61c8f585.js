"use strict";(self.webpackChunkvariant_site=self.webpackChunkvariant_site||[]).push([[8111],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return F}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),F=r,v=m["".concat(i,".").concat(F)]||m[F]||d[F]||o;return t?n.createElement(v,s(s({ref:a},c),{},{components:t})):n.createElement(v,s({ref:a},c))}));function F(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2785:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],l={id:"filter",title:"Filtering & Analyzing"},i=void 0,p={unversionedId:"use/filter",id:"version-2.1.0/use/filter",isDocsHomePage:!1,title:"Filtering & Analyzing",description:"The last section covered how to create and group variants. Here, we'll cover how to narrow variant types into more specific subsets and automatically extract variants from a module based on various types.",source:"@site/versioned_docs/version-2.1.0/use/filter.md",sourceDirName:"use",slug:"/use/filter",permalink:"/variant/docs/use/filter",tags:[],version:"2.1.0",frontMatter:{id:"filter",title:"Filtering & Analyzing"},sidebar:"version-2.1.0/someSidebar",previous:{title:"Matching",permalink:"/variant/docs/use/matching"},next:{title:"Advanced Creation",permalink:"/variant/docs/use/advanced-creation"}},c=[{value:"Filtering the discriminated union",id:"filtering-the-discriminated-union",children:[],level:2},{value:"isOfVariant",id:"isofvariant",children:[],level:2}],d={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The last section covered how to create and group variants. Here, we'll cover how to narrow variant types into more specific subsets and automatically extract variants from a module based on various types."),(0,o.kt)("h2",{id:"filtering-the-discriminated-union"},"Filtering the discriminated union"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal")," type allows some filtering out of the box. We have access to the type of a specific form through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal<'snake'>")," syntax, and can create a type union ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal<'dog'> | Animal<'cat'>")," as expected. Remember that it's possible to compute ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal<'dog'>")," yourself with the built in ",(0,o.kt)("inlineCode",{parentName:"p"},"Extract<T, U>")," type."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," Dog "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," Extract<Animal, {type"),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'dog'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"}>;"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Dog"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Extract"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"dog"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"}>"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")))))),(0,o.kt)("p",null,"It's also possible to leverage that",(0,o.kt)("inlineCode",{parentName:"p"},"Extract<T, U>")," type to filter the union to only the possibilities matching a given interface. For example, our variant may be structured such that every winged animal has a ",(0,o.kt)("inlineCode",{parentName:"p"},"wingCount: number")," property."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#506565"}},"// assume every winged animal has a wingCount property")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#506565"}},"// and other animals don't.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," WingedAnimal "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," Extract<Animal, {wingCount"),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"number"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"}>;"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"//"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," assume every winged animal has a wingCount property")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"//"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," and other animals don't.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"WingedAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Extract"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"wingCount"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"number}>"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")))))),(0,o.kt)("h2",{id:"isofvariant"},"isOfVariant"),(0,o.kt)("p",null,"It's possible to use ",(0,o.kt)("inlineCode",{parentName:"p"},"isOfVariant")," to ",(0,o.kt)("strong",{parentName:"p"},"narrow")," a variable to a variant type. ",(0,o.kt)("inlineCode",{parentName:"p"},"isOfVariant()")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards"},"user-defined type guard")," that expects two parameters"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The variable to be evaluated"),(0,o.kt)("li",{parentName:"ol"},"The variant module to compared against")),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"flap"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," WingedAnimal) "),(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," {"),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"..."),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"} ")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"declare"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"var"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," Animal;")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"if"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"isOfVariant"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"WingedAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},")) {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#506565"}},"// a is now known to be an WingedAnimal")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#506565"}},"// so this is safe.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"flap"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},");")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," flap "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"WingedAnimal)"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"..."),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," ")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"declare"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"var"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"if"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"isOfVariant"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"WingedAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"))"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"//"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," a is now known to be an WingedAnimal")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"//"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," so this is safe.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    flap"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"}")))))),(0,o.kt)("p",null,"Note it's possible to construct the variant module ",(0,o.kt)("inlineCode",{parentName:"p"},"isOfVariant")," is expecting on the fly. "),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"if"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"isOfVariant"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variantList"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"(["),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"bird"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"pegasus"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"]))) {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"flap"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},");")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"if"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"isOfVariant"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", variantList"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"["),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},".bird, "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},".pegasus]"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")))"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    flap"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"}")))))))}m.isMDXComponent=!0}}]);