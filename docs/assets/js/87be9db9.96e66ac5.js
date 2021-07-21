(self.webpackChunkvariant_site=self.webpackChunkvariant_site||[]).push([[6013],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return F}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),F=r,k=m["".concat(i,".").concat(F)]||m[F]||d[F]||o;return t?n.createElement(k,s(s({ref:a},c),{},{components:t})):n.createElement(k,s({ref:a},c))}));function F(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5798:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),s=["components"],l={title:"Advanced Creation"},i=void 0,p={unversionedId:"book/advanced-creation",id:"book/advanced-creation",isDocsHomePage:!1,title:"Advanced Creation",description:'"Advanced Creation", huh? I feel like I\'m teaching a seminar for small gods. Well, this is an article on the skullduggery you can pull off with an open mind and understanding of functional programming, so I suppose in some ways that is what it is. On with the dark magic \ud83e\uddd9\ud83c\udffd.',source:"@site/docs/book/advanced-creation.md",sourceDirName:"book",slug:"/book/advanced-creation",permalink:"/variant/docs/next/book/advanced-creation",version:"current",frontMatter:{title:"Advanced Creation"},sidebar:"someSidebar",previous:{title:"Making Variants",permalink:"/variant/docs/next/book/creation"},next:{title:"Augmented Variants",permalink:"/variant/docs/next/book/augment"}},c=[{value:"Differing key labels and names",id:"differing-key-labels-and-names",children:[]},{value:"Variants are templates",id:"variants-are-templates",children:[]},{value:"Constraining Subtypes",id:"constraining-subtypes",children:[]}],d={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'"Advanced Creation"'),", huh? I feel like I'm teaching a seminar for small gods. Well, this is an article on the skullduggery you can pull off with an open mind and understanding of functional programming, so I suppose in some ways that is what it is. On with the dark magic \ud83e\uddd9\ud83c\udffd. "),(0,o.kt)("h2",{id:"differing-key-labels-and-names"},"Differing key labels and names"),(0,o.kt)("p",null,"In many cases, the label used when referring to a variant is exactly what is used in the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field. However, this is not always desirable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sometimes coding conventions will dictate camelCase or PascalCase names while database/network conventions will demand ALL_CAPS."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPER_SNAKE_CASE")," format has historically been the most common naming scheme for constant values. Perhaps you'll need to support them to support existing code or data models."),(0,o.kt)("li",{parentName:"ul"},"In larger codebases, it may be necessary to start introducing scopes to avoid name collisions. These might look something like ",(0,o.kt)("inlineCode",{parentName:"li"},"@player/update")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"AUDIT::END_RECORDING"),". These strings contain special characters and so are not valid property names, but may be required by your code.")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"variation()")," resolves these concerns. "),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"Action"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"({")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    DoSomething: "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'DO_SOMETHING'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    LoadThing: "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'LOAD_THING'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"fields"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"<{thingId"),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"number"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"}>()),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"    RefreshPage: "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#63A5A5"}},"'REFRESH_PAGE'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"),")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"})"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Action"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    DoSomething: variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"DO_SOMETHING"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    LoadThing: variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"LOAD_THING"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},", fields"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"thingId"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"number"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},">())"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"    RefreshPage: variation"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"REFRESH_PAGE"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")")))))),(0,o.kt)("p",null,"There are some minor consequences to breaking this assumption. "),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"doAction"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"Action"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"DoSomething"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"();")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"console"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"log"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"()"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"doAction"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Action"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},".DoSomething"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"()"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"console"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},".log"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"()")))))),(0,o.kt)("h2",{id:"variants-are-templates"},"Variants are templates"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"variant()")," function accepts a template as an object. In this object each value is a function (ignore ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," for now). Well... variants count. It is possible to clone ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal")),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki comrade-contrast",style:{backgroundColor:"rgb(26, 32, 32)",color:"#d6dbdb"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#C24E4B"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"OtherAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#9BB7A7"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F9F7F1"}},"variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#D6DBDB"}},");"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki Monotone-red-color-theme",style:{backgroundColor:"#000000",color:"#ffffff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"OtherAnimal"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}}," variant"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#F56565"}},"Animal"),(0,o.kt)("span",{parentName:"div",style:{color:"#A8A8B1"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#FFFFFF"}},";")))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u23f2\ufe0f coming soon.")),(0,o.kt)("h2",{id:"constraining-subtypes"},"Constraining Subtypes"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"patterned()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"constrained()")," to enforce that every member of a variant meet certain criteria. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u23f2\ufe0f coming soon.")))}m.isMDXComponent=!0}}]);