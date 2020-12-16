(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(179)),o={title:"Advanced Creation"},c={id:"use/advanced-creation",title:"Advanced Creation",description:"## Recursive Variants\r",source:"@site/docs\\use\\advanced-creation.md",permalink:"/variant/docs/use/advanced-creation",sidebar:"someSidebar",previous:{title:"Filtering",permalink:"/variant/docs/use/filter"},next:{title:"React + Redux \u269b\ufe0f",permalink:"/variant/docs/use/redux"}},l=[{value:"Recursive Variants",id:"recursive-variants",children:[]},{value:"<code>typedVariant&lt;T&gt;()</code>",id:"typedvariantt",children:[{value:"<code>pass</code>",id:"pass",children:[]},{value:"custom implementation",id:"custom-implementation",children:[]}]},{value:"Generic Variants",id:"generic-variants",children:[]},{value:"\ud83d\udd2e Constrained Variants",id:"-constrained-variants",children:[{value:"\ud83d\udd2e Patterned Variants",id:"-patterned-variants",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"recursive-variants"},"Recursive Variants"),Object(i.b)("p",null,"Recursive variants are a wonderful pattern for expressing and evaluating tree and list-like data. The traditional example involves a binary tree and we'll implement a proper one in the next section on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"use/generic"}),"generic variants"),".. In the meantime, let's do a binary tree of ",Object(i.b)("inlineCode",{parentName:"p"},"Animal"),"s. An animal tree may not have many real world applications but please bear with me. "),Object(i.b)("h2",{id:"typedvariantt"},Object(i.b)("inlineCode",{parentName:"h2"},"typedVariant<T>()")),Object(i.b)("p",null,"So far we've been letting the ",Object(i.b)("strong",{parentName:"p"},"type")," flow from the ",Object(i.b)("strong",{parentName:"p"},"value"),". However, this makes recursive variants impossible. Attempting to reference ",Object(i.b)("inlineCode",{parentName:"p"},"AnimalNode")," in the ",Object(i.b)("em",{parentName:"p"},"definition")," for ",Object(i.b)("inlineCode",{parentName:"p"},"AnimalNode")," causes an error in the time-loop (and ",Object(i.b)("inlineCode",{parentName:"p"},"tsc"),")."),Object(i.b)("p",null,"So we've got flip our approach. We're going to make a ",Object(i.b)("strong",{parentName:"p"},"type")," and ",Object(i.b)("em",{parentName:"p"},"then")," create the variant module, the ",Object(i.b)("strong",{parentName:"p"},"value"),", based on that type."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type AnimalTree =\n    | Variant<'Leaf', {animal: Animal}>\n    | Variant<'Branch', {left?: AnimalTree, right?: AnimalTree, label?: string}>\n;\n\nconst AnimalTree = typedVariant<AnimalTree>({\n    Leaf: pass,\n    Branch: pass,\n});\n\nconst tree = AnimalTree.Branch({\n    label: 'Animal Kingdom',\n    left: AnimalTree.Leaf({animal: Animal.snake({name: 'Steve'})),\n    right: AnimalTree.Branch({\n        label: 'Mammals',\n        left: AnimalTree.Leaf({animal: Animal.dog({name: 'Cerberus'})}),\n        right: AnimalTree.Leaf({animal: Animal.cat({name: 'Sikandar'})}),\n    })\n})\n")),Object(i.b)("p",null,"In this example we created a recursive type, a binary tree of ",Object(i.b)("inlineCode",{parentName:"p"},"Animal"),"s. We then created the implementation of that type as a variant module by calling ",Object(i.b)("inlineCode",{parentName:"p"},"typedVariant<T>()"),". "),Object(i.b)("h3",{id:"pass"},Object(i.b)("inlineCode",{parentName:"h3"},"pass")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pass")," achieves the most common use case\u2014create a variant that accepts an object of a given type and returns that object plus the ",Object(i.b)("inlineCode",{parentName:"p"},"type: ...")," property. The user is welcome to write the implementation themselves, but most often ",Object(i.b)("inlineCode",{parentName:"p"},"pass")," is sufficient."),Object(i.b)("h3",{id:"custom-implementation"},"custom implementation"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"typedVariant<T>()")," uses the type ",Object(i.b)("inlineCode",{parentName:"p"},"T")," to restrict the object you offer as the implementation, meaning you can safely destructure the variant's input in its own implementation."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const AnimalTree = typedVariant<AnimalTree>({\n    Leaf: ({animal}) => {\n        console.log('creating leaf node with animal', animal);\n        return {animal};\n    },\n    Branch: pass,\n});\n\n")),Object(i.b)("h2",{id:"generic-variants"},"Generic Variants"),Object(i.b)("p",null,"We can use generics to create a more flexible binary tree"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type Tree<T> =\n    | Variant<'Leaf', {payload: T}>\n    | Variant<'Branch', {left: Tree<T>, right: Tree<T>}>\n;\n\nconst Tree = genericVariant(({T}) => ({\n    Branch: fields<{left: Tree<typeof T>, right: Tree<typeof T>}>(),\n    Leaf: payload(T),\n}));\n\nconst leaf = Tree.Leaf(5);\n\nconst numTree = Tree.Branch({\n    left: Tree.Leaf(4),\n    right: Tree.Leaf(66),\n});\n\nconst strTree = Tree.Branch({\n    left: Tree.Leaf('hello'),\n    right: Tree.Branch({\n        left: Tree.Leaf('world'),\n        right: Tree.Leaf('people'),\n    }),\n})\n")),Object(i.b)("p",null,"To use the ",Object(i.b)("inlineCode",{parentName:"p"},"genericVariant()"),", pass in a function that returns a variant module. ",Object(i.b)("inlineCode",{parentName:"p"},"genericVariant")," will provide ",Object(i.b)("em",{parentName:"p"},"your")," function with a set of sigils that you can use as ",Object(i.b)("strong",{parentName:"p"},"placeholder")," types. These will be replaced by true generics in the resulting type! In the above example, I use T, but this is actually an object that is being destructured and that object contains the full alphabet ",Object(i.b)("inlineCode",{parentName:"p"},"{A: _, B: _, C: _, ..., Z: _}"),". Use whichever letter best fits your use case."),Object(i.b)("h2",{id:"-constrained-variants"},"\ud83d\udd2e Constrained Variants"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Preview Content")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udd2e denotes preview content. These are features that are available, but not well-documented and may be modified in the near future as they see better integration."))),Object(i.b)("p",null,"We can use ",Object(i.b)("inlineCode",{parentName:"p"},"constrainedVariant")," to create a module where every variant must support the inputs and output types of an example function we pass in. In my hypothetical game the player can change their hairstyle, but only if the currently have enough hair to fit that style. Someone who is bald cannot restyle their hair into a ponytail, but it is perfectly okay to do it the other way around. To help represent that I'm going to give each hairstyle an optional minimum and maximum length. When it comes time to check if a particular restyling is valid I can simply check if ",Object(i.b)("inlineCode",{parentName:"p"},"player.hair.length >= (targetStyle.min ?? 0)"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Hairstyles with listed min and max length requirements.\n *  - HairLength is an enum\n */\nexport const Hairstyle = constrainedVariant(\n    just<{min?: HairLength, max?: HairLength}>({}), \n    {\n        Afro: just({min: HairLength.Short}),\n        Bald: just({max: HairLength.Bald}),\n        Bun: just({min: HairLength.Medium, max: HairLength.Long}),\n        CrewCut: just({min: HairLength.Buzzed, max: HairLength.Short}),\n        Dreadlocks: just({min: HairLength.Short}),\n        Mohawk: just({min: HairLength.Buzzed, max: HairLength.Long}),\n        Ponytail: just({min: HairLength.Medium}),\n        Shaved: just({min: HairLength.Bald, max: HairLength.Buzzed}),\n        Undercut: just({min: HairLength.Buzzed}),\n        Waves: just({min: HairLength.Medium}),\n    },\n);\n")),Object(i.b)("p",null,"The first parameter was our example function, which evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"() => {min?: HairLength, max?: HairLength}"),". Now when we implement our variants we will have autocomplete for our return values. If our example function had an input, every case constructor would need to accept that type of variable as its first argument."),Object(i.b)("p",null,"When using constrainedVariant, optional properties of the return type ",Object(i.b)("em",{parentName:"p"},"will")," be available on the union. It will be possible to inspect ",Object(i.b)("inlineCode",{parentName:"p"},"min")," and ",Object(i.b)("inlineCode",{parentName:"p"},"max")," without needing to understand the "),Object(i.b)("p",null,"Note that these variant bodies can still require extra information. Any such variants can simply require multiple parameters as long as the first parameters line up with the example. If you need to ",Object(i.b)("em",{parentName:"p"},"ensure")," that every case constructor takes ",Object(i.b)("em",{parentName:"p"},"no")," parameters, this isn't the best choice, you want ",Object(i.b)("em",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"em"},"patternedVariant()"),".")),Object(i.b)("h3",{id:"-patterned-variants"},"\ud83d\udd2e Patterned Variants"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"patternedVariant")," is the same as as ",Object(i.b)("inlineCode",{parentName:"p"},"constrainedVariant"),", except your case constructors are not allowed any extraneous properties\u2014they must ",Object(i.b)("em",{parentName:"p"},"exactly")," match the example function."),Object(i.b)("p",null,"Our previous code will work again, as is."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Hairstyles with listed min and max length requirements.\n *  - HairLength is an enum\n */\nexport const Hairstyle = patternedVariant(\n    just<{min?: HairLength, max?: HairLength}>({}), \n    {\n        Afro: just({min: HairLength.Short}),\n        Bald: just({max: HairLength.Bald}),\n        Bun: just({min: HairLength.Medium, max: HairLength.Long}),\n        CrewCut: just({min: HairLength.Buzzed, max: HairLength.Short}),\n        Dreadlocks: just({min: HairLength.Short}),\n        Mohawk: just({min: HairLength.Buzzed, max: HairLength.Long}),\n        Ponytail: just({min: HairLength.Medium}),\n        Shaved: just({min: HairLength.Bald, max: HairLength.Buzzed}),\n        Undercut: just({min: HairLength.Buzzed}),\n        Waves: just({min: HairLength.Medium}),\n    },\n);\n")),Object(i.b)("p",null,"The difference is that now I cannot add any extra inputs to the functions. This is an excellent feature if we would like to automatically create an instance of a variant ",Object(i.b)("em",{parentName:"p"},"without knowing which constructor we're using"),". "))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);