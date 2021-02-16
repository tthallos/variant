(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(1),i=a(9),r=(a(0),a(179)),o={id:"intro",title:"Introduction"},c={id:"intro",title:"Introduction",description:"> _**Variant** is a language feature disguised as a library._\r",source:"@site/docs\\intro.md",permalink:"/variant/docs/intro",sidebar:"someSidebar",next:{title:"Motivation",permalink:"/variant/docs/motivation"}},l=[{value:"Quick Start",id:"quick-start",children:[{value:"Match",id:"match",children:[]},{value:"Grouping",id:"grouping",children:[]}]},{value:"Applications",id:"applications",children:[{value:"Continued",id:"continued",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Variant")," is a language feature disguised as a library."))),Object(r.b)("p",null,"Variant aims to bring the experience of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dev.realworldocaml.org/variants.html"}),"variant types")," to TypeScript. Variant types, a.k.a. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://basarat.gitbook.io/typescript/type-system/discriminated-unions"}),"discriminated unions")," in the TypeScript world, are an excellent tool for describing and handling flexible domain models and tiny DSLs. However, because ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions"}),Object(r.b)("em",{parentName:"a"},'"TypeScript instead builds on JavaScript patterns as they exist today"'))," using them as-is can result in tedious and fragile code. This project addresses that by providing well-typed, fluent, and expressive tools to safely do away with the boilerplate."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"http://google.com"}),"glossary: domain"))),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The term ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Domain_(software_engineering)"}),"Domain")," has many meanings but here we use domain to mean ",Object(r.b)("strong",{parentName:"p"},"your set of concerns"),". If you are making a game, you might care about the player state, potential enemies, or items and inventory. If you are writing a budget tracker, your concerns might include income sources and recurring vs. one-time expenses."))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/variant/docs/api"}),"\ud83e\udde0 Click here to jump straight to the API Reference")),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"Variant doesn't have any dependencies and doesn't need any setup. Simply run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save variant\n")),Object(r.b)("p",null,"Let's use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/variant"}),Object(r.b)("inlineCode",{parentName:"a"},"variant"))," to describe a simple domain \u2014 ",Object(r.b)("strong",{parentName:"p"},"Animals"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/redux"}),"Or if you'd like a redux example...")),Object(r.b)("p",null,"For this application, we care about dogs, cats, and snakes. These will be the various pets our player can have. We have different concerns for each animal, so we'll want to define them with distinct fields. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/variant#fields"}),Object(r.b)("inlineCode",{parentName:"a"},"fields"))," function below is shorthand to help do this. We'll see more of how it works in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/variant"}),"first section of the User Guide"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {variant, variantModule, VariantOf, fields, TypeNames} from 'variant';\n\nexport const Animal = variantModule({\n    dog: fields<{name: string, favoriteBall?: string}>(),\n    cat: fields<{name: string, furnitureDamaged: number}>(),\n    snake: (name: string, pattern = 'striped') => ({name, pattern}),\n});\n// optional, but very helpful.\nexport type Animal<T extends TypeNames<typeof Animal> = undefined>\n    = VariantOf<typeof Animal, T>;\n")),Object(r.b)("p",null,"We can now import and use the ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," object, which simply collects the tag constructors we care about in one place. To create a new dog, for example, call ",Object(r.b)("inlineCode",{parentName:"p"},"Animal.dog({name: 'Guava'})"),". When we imported the ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," ",Object(r.b)("em",{parentName:"p"},"object")," we also imported the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"articles/that-type"}),Object(r.b)("inlineCode",{parentName:"a"},"Animal")," ",Object(r.b)("em",{parentName:"a"},"type"))," since we defined these with the same name. This single import will allows us to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Create")," a new animal",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Animal.snake('Steve')")," \u2014 ",Object(r.b)("em",{parentName:"li"},"value"),": ",Object(r.b)("inlineCode",{parentName:"li"},"{ type: 'snake', name: 'Steve', pattern: 'striped' }")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Annotate")," the type for a ",Object(r.b)("strong",{parentName:"li"},"single")," animal.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Animal<'snake'>")," \u2014 ",Object(r.b)("em",{parentName:"li"},"type"),": ",Object(r.b)("inlineCode",{parentName:"li"},"{ type: 'snake', name: string, pattern: string }")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Annotate")," the ",Object(r.b)("strong",{parentName:"li"},"union")," of all animals.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Animal")," \u2014 ",Object(r.b)("em",{parentName:"li"},"type"),": ",Object(r.b)("inlineCode",{parentName:"li"},"Animal<'dog'> | Animal<'cat'> | Animal<'snake'>"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {Animal} from '...';\n\nconst snek = Animal.snake('steve');\nconst describeSnake = (snake: Animal<'snake'>) => {...}\nconst describeAnimal = (animal: Animal) => {...}\n")),Object(r.b)("p",null,"With these building blocks we're ready to write some elegant code. Let's implement the ",Object(r.b)("inlineCode",{parentName:"p"},"describeAnimal")," function with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/matching"}),Object(r.b)("inlineCode",{parentName:"a"},"match"))," utility."),Object(r.b)("h3",{id:"match"},"Match"),Object(r.b)("p",null,"Match is a great tool to ",Object(r.b)("strong",{parentName:"p"},"process")," a variant of unknown type. The function will accept a variant object (",Object(r.b)("em",{parentName:"p"},"animal"),") and a handler object. Think of each entry of the handler like a branch that might execute. We'll have to describe how to deal with every option to be safe. "),Object(r.b)("p",null,"In this case, let's describe how each animal is relaxing in the bedroom."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {match} from 'variant';\n\nconst describeAnimal = (animal: Animal) => match(animal, {\n    cat: ({name}) => `${name} is sleeping on a sunlit window sill.`,\n    dog: ({name, favoriteBall}) => [\n        `${name} is on the rug`,\n        favoriteBall ? `nuzzling a ${favoriteBall} ball.` : '.' \n    ].join(' '),\n    snake: s => `${s.name} is enjoying the heat of the lamp on his ${s.pattern} skin`,\n});\n")),Object(r.b)("p",null,"If any of this syntax looks unfamiliar, take a look at ES6 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"}),"lambda expressions"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"}),"template strings"),", and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_function_parameter"}),"parameter destructuring")," features. "),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"/variant/docs/api#match"}),Object(r.b)("inlineCode",{parentName:"a"},"match")))," is..."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"exhaustive by default"),". ",Object(r.b)("em",{parentName:"li"},"Exhaustiveness")," means if you add a new animal, TypeScript will remind you to update the ",Object(r.b)("inlineCode",{parentName:"li"},"describeAnimal")," function! No more tedious guesswork.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Partial matching is available by providing a ",Object(r.b)("inlineCode",{parentName:"li"},"default")," property, or using ",Object(r.b)("inlineCode",{parentName:"li"},"match"),"'s ",Object(r.b)("em",{parentName:"li"},"else")," overload."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pure TypeScript.")," This will work on any valid discriminated union, made with ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/variant/docs/api#variant"}),Object(r.b)("inlineCode",{parentName:"a"},"variant"))," or not."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"well typed"),". ",Object(r.b)("inlineCode",{parentName:"li"},"match"),"'s return type is the union of the return types of all the handler functions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"familiar"),". It's meant to imitate the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://ocaml.org/learn/tutorials/data_types_and_matching.html#Pattern-matching-on-datatypes"}),"OCaml / Reason ML ",Object(r.b)("strong",{parentName:"a"},Object(r.b)("inlineCode",{parentName:"strong"},"match"))," statement"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"flexible"),". By default ",Object(r.b)("inlineCode",{parentName:"li"},"match")," switches on the ",Object(r.b)("inlineCode",{parentName:"li"},"type")," property but that can easily be overridden.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/variant/docs/api#match"}),Object(r.b)("strong",{parentName:"a"},"match"))," has a little sister named ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/variant/docs/api#lookup"}),Object(r.b)("strong",{parentName:"a"},"lookup")),", for when you don't need to use any properties from the variant."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const cuteName = lookup(animal, {\n    cat: 'kitty',\n    dog: 'pupper',\n    snake: 'snek',\n});\n")))),Object(r.b)("h3",{id:"grouping"},"Grouping"),Object(r.b)("p",null,"Earlier we defined ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/grouping#variantmodule"}),Object(r.b)("inlineCode",{parentName:"a"},"variantModule"))," function. This is often the most convenient method, but it's also perfectly valid to use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/grouping#variantlist"}),Object(r.b)("inlineCode",{parentName:"a"},"variantList()"))," function or to construct the ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," object directly."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Here's ",Object(r.b)("inlineCode",{parentName:"p"},"variantList()")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const Animal = variantList([\n    variant('dog', ...),\n    variant('cat', ...),\n    variant('snake', ...),\n])\n"))),Object(r.b)("p",null,"This function can also accept a string literal for a variant that has no body"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Example"),": ",Object(r.b)("inlineCode",{parentName:"li"},"variantList(['red', 'blue', 'green'])"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"...and this is the direct approach."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const Animal = {\n    dog: variant('dog', ...),\n    cat: variant('cat', ...),\n    snake: variant('snake', ...),\n}\n"))),Object(r.b)("p",null,"Feel free to mix and match styles. This is discussed further in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/grouping"}),"the page on grouping variants.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"applications"},"Applications"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Variant")," is a language feature disguised as a library. As such, it's relevant to any type of application. I find myself eventually including variant in every project I write, to the point that I include it in my template repo along with my logger of choice, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paarthenon/daslog"}),"daslog")," (which also uses variant \ud83e\udd23)."),Object(r.b)("p",null,"However there are certainly applications where variants ",Object(r.b)("em",{parentName:"p"},"excel"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actions"),". Variant types are the ideal solution for expressing a set of possible actions that need dispatching. That's exactly why this example is used in every conversation about discriminated unions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Optionals and result objects"),". The ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Option_type"}),Object(r.b)("inlineCode",{parentName:"a"},"Option<T>")," type")," is familiar and loved for good reason. Variants allow you to express this and more powerful versions of result types with partial success and progress information."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Compilers and interpreters.")," Variants closely mirror the recursive rule definitions of S-langs. Expressing grammars in TypeScript feels natural and is feasible with this project's support for recursive and generic types."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Heterogeneous")," (mixed) ",Object(r.b)("strong",{parentName:"li"},"lists"),". These are the best way to express heterogeneous lists that can still be unzipped into separate, well-typed parts. Job or task systems tend to love having access to heterogeneous lists for the task queue, a list made up of different types of jobs.")),Object(r.b)("h3",{id:"continued"},"Continued"),Object(r.b)("p",null,"There's more to come. The next page, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./motivation"}),"Motivation"),", is background information for new and interested readers. ",Object(r.b)("em",{parentName:"p"},"This next section is safe to skip"),". It explains why variant matters and what a vanilla TypeScript approach would look like. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use/variant"}),"Usage Guide")," goes over the practical things you need to know and is the next place I'd look as a new user wanting to get things done. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"articles/that-type"}),"Articles")," are loose writings addressing specific topics. Finally, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"api"}),"the API Reference")," is available for details on every function and type."))}b.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,c({ref:t},s,{components:a})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);