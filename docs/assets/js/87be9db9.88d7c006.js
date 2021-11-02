"use strict";(self.webpackChunkvariant_site=self.webpackChunkvariant_site||[]).push([[6013],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return F}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),F=r,N=c["".concat(p,".").concat(F)]||c[F]||m[F]||o;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function F(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2415:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Advanced Creation"},p=void 0,l={unversionedId:"book/advanced-creation",id:"book/advanced-creation",isDocsHomePage:!1,title:"Advanced Creation",description:'"Advanced Creation", huh? I feel like I\'m teaching a seminar for small gods. Well, this is an article on the skullduggery you can pull off with an open mind and understanding of functional programming, so I suppose in some ways that is what it is. On with the dark magic \ud83e\uddd9\ud83c\udffd.',source:"@site/docs/book/advanced-creation.md",sourceDirName:"book",slug:"/book/advanced-creation",permalink:"/variant/docs/next/book/advanced-creation",tags:[],version:"current",frontMatter:{title:"Advanced Creation"},sidebar:"someSidebar",previous:{title:"Making Variants",permalink:"/variant/docs/next/book/creation"},next:{title:"Augmented Variants",permalink:"/variant/docs/next/book/augment"}},d=[{value:"Differing key labels and names",id:"differing-key-labels-and-names",children:[],level:2},{value:"Variants are templates",id:"variants-are-templates",children:[],level:2},{value:"Scoped Variants",id:"scoped-variants",children:[],level:2},{value:"Constraining Subtypes",id:"constraining-subtypes",children:[],level:2}],m={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'"Advanced Creation"'),", huh? I feel like I'm teaching a seminar for small gods. Well, this is an article on the skullduggery you can pull off with an open mind and understanding of functional programming, so I suppose in some ways that is what it is. On with the dark magic \ud83e\uddd9\ud83c\udffd. "),(0,o.kt)("h2",{id:"differing-key-labels-and-names"},"Differing key labels and names"),(0,o.kt)("p",null,"In many cases, the label used when referring to a variant is exactly what is used in the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field. However, this is not always desirable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sometimes coding conventions will dictate ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase")," names while database/network conventions will demand ",(0,o.kt)("inlineCode",{parentName:"li"},"ALL_CAPS"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPER_SNAKE_CASE")," format has historically been the most common naming scheme for constant values. Perhaps you'll need to support them to support existing code or data models."),(0,o.kt)("li",{parentName:"ul"},"In larger codebases, it may be necessary to start introducing scopes to avoid name collisions. These might look something like ",(0,o.kt)("inlineCode",{parentName:"li"},"@player/update")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"AUDIT::END_RECORDING"),". These strings contain special characters and so are not valid property names, but may be required by your code. Ideally, the variant creators would manage that complexity.")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"variation()")," resolves these concerns. The first parameter, the string, will be the ",(0,o.kt)("em",{parentName:"p"},"actual")," underlying type (both at runtime and compile time). The second parameter is the function that will handle the rest of the body."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast twoslash lsp",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," {"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const variant: {\n    <VM extends RawVariant>(template: GenericTemplate<VM>): Identity<GenericVariantRecord<VM, "type">>;\n    <VM_1 extends RawVariant>(template: VM_1): Identity<...>;\n    <T extends string | VariantCreator<...>>(template: T[]): Identity<...>;\n}\nimport variant'},"variant")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const variation: <T extends string, F extends Func = () => {}>(type: T, creator?: F | undefined) => VariantCreator<T, F extends VariantCreator<string, infer VF, "type"> ? VF : F, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"Describe the fields of the variation.\r\n\r\nWhen used creates a function of type `(input: T) => T & {type: 'literal'}`\n\n(alias) function fields<T extends {}>(defaults?: Partial<T> | undefined): (...args: {} extends T ? ([input: T] | []) : [input: T]) => T\nimport fields"},"fields")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"} "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'variant'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const Action: {\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}'},"Action")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variant<{\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}>(template: {\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}): {\n    ...;\n} (+2 overloads)\nimport variant'},"variant")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"({")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">'},"DoSomething"),": "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variation<"DO_SOMETHING", () => {}>(type: "DO_SOMETHING", creator?: (() => {}) | undefined): VariantCreator<"DO_SOMETHING", () => {}, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'DO_SOMETHING'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) LoadThing: VariantCreator<"LOAD_THING", (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}, "type">'},"LoadThing"),": "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variation<"LOAD_THING", (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}>(type: "LOAD_THING", creator?: ((input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}) | undefined): VariantCreator<"LOAD_THING", (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'LOAD_THING'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"Describe the fields of the variation.\r\n\r\nWhen used creates a function of type `(input: T) => T & {type: 'literal'}`\n\n(alias) fields<{\n    thingId: number;\n}>(defaults?: Partial<{\n    thingId: number;\n}> | undefined): (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}\nimport fields"},"fields")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"<{",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) thingId: number"},"thingId")),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"number"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"}>()),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) RefreshPage: VariantCreator<"REFRESH_PAGE", () => {}, "type">'},"RefreshPage"),": "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variation<"REFRESH_PAGE", () => {}>(type: "REFRESH_PAGE", creator?: (() => {}) | undefined): VariantCreator<"REFRESH_PAGE", () => {}, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'REFRESH_PAGE'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"})")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const doAction: {\n    type: "DO_SOMETHING";\n}'},"doAction")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const Action: {\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}'},"Action")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) DoSomething: () => {\n    type: "DO_SOMETHING";\n}'},"DoSomething")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"();")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const doAction: {\n    type: "DO_SOMETHING";\n}'},"doAction")),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) type: "DO_SOMETHING"',style:{borderBottom:"solid 2px lightgrey"}},"type"))),(0,o.kt)("div",{parentName:"code",className:"meta-line"},(0,o.kt)("span",{parentName:"div",className:"popover-prefix"},"          "),(0,o.kt)("span",{parentName:"div",className:"popover"},(0,o.kt)("div",{parentName:"span",className:"arrow"}),'(property) type: "DO_SOMETHING"'))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme twoslash lsp",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"import"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const variant: {\n    <VM extends RawVariant>(template: GenericTemplate<VM>): Identity<GenericVariantRecord<VM, "type">>;\n    <VM_1 extends RawVariant>(template: VM_1): Identity<...>;\n    <T extends string | VariantCreator<...>>(template: T[]): Identity<...>;\n}\nimport variant'},"variant")),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) const variation: <T extends string, F extends Func = () => {}>(type: T, creator?: F | undefined) => VariantCreator<T, F extends VariantCreator<string, infer VF, "type"> ? VF : F, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"Describe the fields of the variation.\r\n\r\nWhen used creates a function of type `(input: T) => T & {type: 'literal'}`\n\n(alias) function fields<T extends {}>(defaults?: Partial<T> | undefined): (...args: {} extends T ? ([input: T] | []) : [input: T]) => T\nimport fields"},"fields")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"from"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const Action: {\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}'},"Action")),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variant<{\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}>(template: {\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}): {\n    ...;\n} (+2 overloads)\nimport variant'},"variant")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">'},"DoSomething"),": ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variation<"DO_SOMETHING", () => {}>(type: "DO_SOMETHING", creator?: (() => {}) | undefined): VariantCreator<"DO_SOMETHING", () => {}, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"DO_SOMETHING"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) LoadThing: VariantCreator<"LOAD_THING", (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}, "type">'},"LoadThing"),": ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variation<"LOAD_THING", (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}>(type: "LOAD_THING", creator?: ((input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}) | undefined): VariantCreator<"LOAD_THING", (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"LOAD_THING"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"Describe the fields of the variation.\r\n\r\nWhen used creates a function of type `(input: T) => T & {type: 'literal'}`\n\n(alias) fields<{\n    thingId: number;\n}>(defaults?: Partial<{\n    thingId: number;\n}> | undefined): (input: {\n    thingId: number;\n}) => {\n    thingId: number;\n}\nimport fields"},"fields")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) thingId: number"},"thingId")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"number"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},">())"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) RefreshPage: VariantCreator<"REFRESH_PAGE", () => {}, "type">'},"RefreshPage"),": ",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(alias) variation<"REFRESH_PAGE", () => {}>(type: "REFRESH_PAGE", creator?: (() => {}) | undefined): VariantCreator<"REFRESH_PAGE", () => {}, "type">\nimport variation'},"variation")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"REFRESH_PAGE"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const doAction: {\n    type: "DO_SOMETHING";\n}'},"doAction")),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const Action: {\n    DoSomething: VariantCreator<"DO_SOMETHING", () => {}, "type">;\n    LoadThing: VariantCreator<"LOAD_THING", (input: {\n        thingId: number;\n    }) => {\n        thingId: number;\n    }, "type">;\n    RefreshPage: VariantCreator<...>;\n}'},"Action")),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},".",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) DoSomething: () => {\n    type: "DO_SOMETHING";\n}'},"DoSomething")),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"()"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:'const doAction: {\n    type: "DO_SOMETHING";\n}'},"doAction")),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},".",(0,o.kt)("data-lsp",{parentName:"span",lsp:'(property) type: "DO_SOMETHING"',style:{borderBottom:"solid 2px lightgrey"}},"type"))),(0,o.kt)("div",{parentName:"code",className:"meta-line"},(0,o.kt)("span",{parentName:"div",className:"popover-prefix"},"          "),(0,o.kt)("span",{parentName:"div",className:"popover"},(0,o.kt)("div",{parentName:"span",className:"arrow"}),'(property) type: "DO_SOMETHING"')))))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"variation()")," can also be used individually, similarly to ",(0,o.kt)("inlineCode",{parentName:"p"},"createAction"),". "),(0,o.kt)("h2",{id:"variants-are-templates"},"Variants are templates"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"variant()")," function accepts a template as an object. In this object each value is a function (ignore ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," for now). Well... variants count. It is possible to clone ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal")),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"OtherAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},");"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"OtherAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u23f2\ufe0f coming soon.")),(0,o.kt)("h2",{id:"scoped-variants"},"Scoped Variants"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u23f2\ufe0f coming soon.")),(0,o.kt)("h2",{id:"constraining-subtypes"},"Constraining Subtypes"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"patterned()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"constrained()")," to enforce that every member of a variant meet certain criteria. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u23f2\ufe0f coming soon.")))}c.isMDXComponent=!0}}]);