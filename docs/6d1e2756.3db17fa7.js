(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(179)),c={id:"cast-and-narrow",title:"Cast and Narrow"},i={id:"use/cast-and-narrow",title:"Cast and Narrow",description:"Let's say you have an `animal: Animal` and you're sure it's a snake or you only care about it if it's a snake. Here are a couple of shortcuts to help with that.\r",source:"@site/docs\\use\\cast.md",permalink:"/variant/docs/use/cast-and-narrow"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's say you have an ",Object(o.b)("inlineCode",{parentName:"p"},"animal: Animal")," and you're sure it's a snake or you only care about it if it's a snake. Here are a couple of shortcuts to help with that."),Object(o.b)("p",null,"If you're sure it's a snake, use cast."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const snake = cast(animal, 'snake'); // typeof snake === Animal<'snake'>;\n")),Object(o.b)("p",null,"The second property will only allow valid keys of animal."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Yes this is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"const snake = animal as Animal<'snake'>")," but is cleaner in a ",Object(o.b)("inlineCode",{parentName:"p"},"useSelector")," call. Imagine ",Object(o.b)("inlineCode",{parentName:"p"},"state.view")," is a variant of menu states like ",Object(o.b)("inlineCode",{parentName:"p"},"Game"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Settings"),", ",Object(o.b)("inlineCode",{parentName:"p"},"About"),", ",Object(o.b)("inlineCode",{parentName:"p"},"MainMenu"),"."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// settingsPage.tsx\nconst graphicsSettings = useSelector((state: RootState) => cast(state.view, 'Settings').graphics);\n"))),Object(o.b)("p",null,"If you're not sure it's a snake, try to narrow it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const snake = narrow(animal, 'snake'); // typeof snake === (Animal<'snake'> | undefined);\n\nconsole.log(snake?.pattern);\n")),Object(o.b)("p",null,"Like before, the second property can only be a valid key of ",Object(o.b)("inlineCode",{parentName:"p"},"Animal"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"animal")," is in fact a snake you get it back. If not, you get undefined. This works very well with the optional chaining operator in TypeScript. Especially when you get a deeper object in the tree. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Yes this is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"const snake = partialMatch(animal, {snake: s => s});")," but it's way more readable. It's also clearer in a ",Object(o.b)("inlineCode",{parentName:"p"},"useSelector")," call."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// settingsPage.tsx\nconst graphicsSettings = useSelector((state: RootState) => \n    narrow(state.view, 'Settings')?.graphics ?? DEFAULT_GRAPHICS_SETTINGS);\n"))))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(f,i({ref:t},l,{components:n})):r.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);