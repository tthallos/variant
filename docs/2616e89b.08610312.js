(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(179)),o={id:"grouping",title:"Grouping"},l={id:"use/grouping",title:"Grouping",description:"A variant's possible cases are most useful *in context*. The variant for `Diamonds` could mean any number of things, but the intended meaning becomes clear when `Diamonds \u2666` is placed next to `Spades \u2660`, `Hearts \u2665`, and `Clubs \u2663`. In general we call this collection of tag constructors the **Variant Module**. This module can be constructed in several ways and every method is compatible with the others. Feel free to mix and match styles as the situation dictates.\r",source:"@site/docs\\use\\grouping.md",permalink:"/variant/docs/use/grouping",sidebar:"someSidebar",previous:{title:"Variant",permalink:"/variant/docs/use/variant"},next:{title:"Matching",permalink:"/variant/docs/use/matching"}},c=[{value:"The Direct Approach",id:"the-direct-approach",children:[]},{value:"<code>variantModule()</code>",id:"variantmodule",children:[]},{value:"<code>variantList()</code>",id:"variantlist",children:[]},{value:"So why use the direct approach?",id:"so-why-use-the-direct-approach",children:[]},{value:"Checking for membership",id:"checking-for-membership",children:[{value:"Ad-hoc matching",id:"ad-hoc-matching",children:[]}]},{value:"Subsets and Combinations",id:"subsets-and-combinations",children:[{value:"Subsets",id:"subsets",children:[]},{value:"Combinations",id:"combinations",children:[]},{value:"Variants in a union type",id:"variants-in-a-union-type",children:[]},{value:"Q &amp; A",id:"q--a",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A variant's possible cases are most useful ",Object(r.b)("em",{parentName:"p"},"in context"),". The variant for ",Object(r.b)("inlineCode",{parentName:"p"},"Diamonds")," could mean any number of things, but the intended meaning becomes clear when ",Object(r.b)("inlineCode",{parentName:"p"},"Diamonds \u2666")," is placed next to ",Object(r.b)("inlineCode",{parentName:"p"},"Spades \u2660"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Hearts \u2665"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"Clubs \u2663"),". In general we call this collection of tag constructors the ",Object(r.b)("strong",{parentName:"p"},"Variant Module"),". This module can be constructed in several ways and every method is compatible with the others. Feel free to mix and match styles as the situation dictates."),Object(r.b)("h3",{id:"the-direct-approach"},"The Direct Approach"),Object(r.b)("p",null,"The underlying type of every variant module will be a simple JavaScript object. The keys of this object will be the names of the variant's types (its tags), and the values will be the tag constructors. You can make this object yourself."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const Animal = {\n    dog: variant('dog', fields<{name: string, favoriteBall?: string}>()),\n    cat: variant('cat', fields<{name: string, daysSinceDamage: number}>()),\n    snake: variant('snake', (name: string, pattern = 'striped') => ({name, pattern})),\n};\n")),Object(r.b)("p",null,"But as you'll see, you'll often use ",Object(r.b)("inlineCode",{parentName:"p"},"variantModule")," or ",Object(r.b)("inlineCode",{parentName:"p"},"variantList")," instead, two functions that save a little time and headache."),Object(r.b)("h3",{id:"variantmodule"},Object(r.b)("inlineCode",{parentName:"h3"},"variantModule()")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"variantModule()")," function resolves two minor issues with what we just saw, and is the ",Object(r.b)("strong",{parentName:"p"},"recommended")," way to create such modules."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The names of each type are no longer duplicated."),Object(r.b)("li",{parentName:"ol"},"There aren't any more tedious ",Object(r.b)("inlineCode",{parentName:"li"},"variant(...)")," calls.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"{1}","{1}":!0}),"export const Animal = variantModule({\n    dog: fields<{name: string, favoriteBall?: string}>(),\n    cat: fields<{name: string, daysSinceDamage: number}>(),\n    snake: (name: string, pattern = 'striped') => ({name, pattern}),\n});\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To create a type with no body, include the property name but set it to the empty object, ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    ...\n    bird: {},\n});\n")),Object(r.b)("p",{parentName:"div"},"You may also provide ",Object(r.b)("inlineCode",{parentName:"p"},"nil"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),"."))),Object(r.b)("h3",{id:"variantlist"},Object(r.b)("inlineCode",{parentName:"h3"},"variantList()")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"variantList()")," function allows the user to use an ",Object(r.b)("em",{parentName:"p"},"array")," of variants instead of an object. The elements of this array may be calls to the ",Object(r.b)("inlineCode",{parentName:"p"},"variant()")," function ",Object(r.b)("em",{parentName:"p"},"or")," a string. Providing the string ",Object(r.b)("inlineCode",{parentName:"p"},"'Diamonds'")," is equivalent to calling ",Object(r.b)("inlineCode",{parentName:"p"},"variant('Diamonds')")," This function offers two main advantages:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"composition of existing variants"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const WingedAnimal = variantList([\n    Animal.bird,\n    Animal.pegasus,\n]);\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"the ability to use strings to quickly initialize enum-like variants."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const Suit = variantList(['Spades', 'Hearts', 'Clubs', 'Diamonds']),\n")))),Object(r.b)("h3",{id:"so-why-use-the-direct-approach"},"So why use the direct approach?"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"variantModule()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"variantList()")," are so convenient, why make the object literal yourself?"),Object(r.b)("p",null,"Well, two reasons."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"You're mixing styles.")," ",Object(r.b)("inlineCode",{parentName:"p"},"variantList()")," is better suited for scooping up specific forms and passing them on, so we might use this to save ourselves effort while building the ",Object(r.b)("inlineCode",{parentName:"p"},"Mammal")," module by pulling from the ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," module we created earlier."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const Mammal = {\n    squirrel: variant('squirrel', fields<{numAcorns: number}>()),\n    ...variantList([\n        Animal.dog,\n        Animal.cat,\n    ]);\n}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Your property names and type names are different.")," In these examples my type names are pretty simple and are also valid property names. Depending on the conventions of your codebase this may not be possible. "),Object(r.b)("p",{parentName:"li"},"Legacy support may be needed to achieve continuity with data from the time java programmers would toss around ",Object(r.b)("inlineCode",{parentName:"p"},"ALL_CAPS_MESSAGE_CONSTANTS")," with no regard to the fact that may become unfashionable someday. ",Object(r.b)("em",{parentName:"p"},"The nerve"),"."),Object(r.b)("p",{parentName:"li"},"In some react projects, actions or other variant types are ",Object(r.b)("em",{parentName:"p"},"scoped"),", or ",Object(r.b)("em",{parentName:"p"},"namespaced"),", resulting in type names like ",Object(r.b)("inlineCode",{parentName:"p"},"@action/ADD_ANIMAL"),". This is not a valid property name and so it may be desirable to use a more friendly name as the key.. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const Action = {\n    addAnimal: variant('@action/ADD_ANIMAL', payload<Animal>()),\n    callAnimal: variant('@action/CALL_ANIMAL_BY_NAME', fields<{name: string}>()),\n    ...\n}\n")),Object(r.b)("p",{parentName:"li"},"It's much easier to call ",Object(r.b)("inlineCode",{parentName:"p"},"Action.addAnimal(...)")," than ",Object(r.b)("inlineCode",{parentName:"p"},"Action['@action/ADD_ANIMAL'](...)"),". Rest assured the variant library functions have all been designed to work with the ",Object(r.b)("em",{parentName:"p"},"actual")," type of the generated object, even when that made the type signatures of those functions really frustrating to write."))),Object(r.b)("h2",{id:"checking-for-membership"},"Checking for membership"),Object(r.b)("p",null,"You may want to determine whether or not an object out in the wild is an ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," or not. Use the ",Object(r.b)("inlineCode",{parentName:"p"},"isOfVariant")," function to do so."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare var x: object;\n\nif (isOfVariant(x, Animal)) {\n    console.log('Found animal named', x.name);\n}\n")),Object(r.b)("p",null,"Note this is operating under the assumption you have relatively unique names for your variants. This isn't inspecting the object structure, just the ",Object(r.b)("inlineCode",{parentName:"p"},"type")," property."),Object(r.b)("h3",{id:"ad-hoc-matching"},"Ad-hoc matching"),Object(r.b)("p",null,"It's easy to construct a variant module on the fly with ",Object(r.b)("inlineCode",{parentName:"p"},"variantList"),". This will still be a valid comparison. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"if (isOfVariant(x, variantList([Animal.cat, Animal.dog]))) {\n    console.log('Received a four legged animal');\n}\n")),Object(r.b)("h2",{id:"subsets-and-combinations"},"Subsets and Combinations"),Object(r.b)("p",null,'Getting to the "Algebra" of algebraic data types, variants can be mixed and matched in a number of ways.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83e\uddd9 If you have a functional programming background, ",Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},"variant()")," is a factory function to generate tag constructors of ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://www.cs.cornell.edu/courses/cs3110/2019sp/textbook/data/polymorphic_variants.html"}),"polymorphic variants"),".")," If you don't have a functional programming background, ignore that sentence.")),Object(r.b)("p",null,"Let's begin with an expanded version of the ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," variant we've been using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const Animal = variantModule({\n    dog: fields<{name: string, favoriteBall?: string}>(),\n    cat: fields<{name: string, daysSinceDamage: number}>(),\n    snake: (name: string, pattern = 'striped') => ({name, pattern}),\n    pegasus: fields<{color: string, magicType: 'Arcane' | 'Divine'}>(),\n    bird: nil,\n}\n...\n")),Object(r.b)("h3",{id:"subsets"},"Subsets"),Object(r.b)("p",null,"Note the new ",Object(r.b)("inlineCode",{parentName:"p"},"pegasus")," and ",Object(r.b)("inlineCode",{parentName:"p"},"bird")," cases. These neatly fit into a new subcategory, ",Object(r.b)("inlineCode",{parentName:"p"},"WingedAnimal"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const WingedAnimal = variantList([\n    Animal.bird,\n    Animal.pegasus,\n]);\n\nconst flap = (animal: WingedAnimal) => {...} \n\nif (isOfVariant(animal, WingedAnimal)) {\n    // a is now known to be an WingedAnimal\n    // so this is safe.\n    flap(a);\n}\n")),Object(r.b)("p",null,"Our privileged pegasus can also claim membership to the group of animals with four legs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const FourLeggedAnimal = variantList([\n    Animal.cat,\n    Animal.dog,\n    Animal.pegasus,\n]);\n")),Object(r.b)("p",null,"By maintaining a subset like ",Object(r.b)("inlineCode",{parentName:"p"},"WingedAnimal")," as its own type you gain the ability to write functions that are scoped to ",Object(r.b)("inlineCode",{parentName:"p"},"WingedAnimal"),". Any changes to ",Object(r.b)("inlineCode",{parentName:"p"},"WingedAnimal")," are centralized, and will cause the compiler to inform you of any handlers that don't process the new cases."),Object(r.b)("h3",{id:"combinations"},"Combinations"),Object(r.b)("p",null,"We could also have constructed this in the other direction\u2014creating the subsets first and then combining them into the final ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," object. The pegasus being both winged and four legged makes our current set of animals difficult to work with. For this example we'll use a different setup."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const LandAnimal = variantModule({\n    dog: fields<{name: string, favoriteBall?: string}>(),\n    cat: fields<{name: string, daysSinceDamage: number}>(),\n});\n\nconst WaterAnimal = variantModule({\n    goldfish: fields<{memoryInSeconds: number}>(),\n});\n")),Object(r.b)("p",null,"From this point it's easy to create the combined set of ",Object(r.b)("inlineCode",{parentName:"p"},"Animal"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const Animal = {\n    ...LandAnimal,\n    ...WaterAnimal,\n};\n")),Object(r.b)("p",null,"A new list (perhaps ",Object(r.b)("inlineCode",{parentName:"p"},"SkyAnimal"),") could be added in the future and it would simply be another entry next to ",Object(r.b)("inlineCode",{parentName:"p"},"LandAnimal")," and ",Object(r.b)("inlineCode",{parentName:"p"},"WaterAnimal"),". We could complicate this yet further with a new genre-bending list of animals, ",Object(r.b)("inlineCode",{parentName:"p"},"AmphibiousAnimals"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const AmphibiousAnimal = variantList([\n    variant('frog', fields<{color: string}>()),\n]);\n")),Object(r.b)("p",null,"Amphibious animals may be encountered in both ",Object(r.b)("em",{parentName:"p"},"water")," and on ",Object(r.b)("em",{parentName:"p"},"land"),". How should this be expressed? It may be tempting to merge ",Object(r.b)("inlineCode",{parentName:"p"},"AmphibiousAnimal")," into the lists of ",Object(r.b)("inlineCode",{parentName:"p"},"LandAnimal")," and ",Object(r.b)("inlineCode",{parentName:"p"},"WaterAnimal"),", but that would be a step backward because we then lose the ability to identify ",Object(r.b)("em",{parentName:"p"},"land only")," or ",Object(r.b)("em",{parentName:"p"},"water only")," animals. "),Object(r.b)("p",null,"The better approach would be to use our friend the union type. Remember that variants are designed to work with vanilla typescript and will work seamlessly with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html"}),"union and intersection types"),"."),Object(r.b)("h3",{id:"variants-in-a-union-type"},"Variants in a union type"),Object(r.b)("p",null,"Assume there is a function that was meant to handle animals encountered on land. It took a parameter ",Object(r.b)("inlineCode",{parentName:"p"},"animal: LandAnimal"),". To expand its scope, change the type of the parameter from ",Object(r.b)("inlineCode",{parentName:"p"},"LandAnimal")," to ",Object(r.b)("inlineCode",{parentName:"p"},"LandAnimal | AmphibiousAnimal"),". TypeScript will understand that ",Object(r.b)("inlineCode",{parentName:"p"},"frog")," is now a valid case your your ",Object(r.b)("inlineCode",{parentName:"p"},"match")," or ",Object(r.b)("inlineCode",{parentName:"p"},"switch")," statements will have to handle."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// I'm sorry\nfunction runoverAnimal(roadKill: LandAnimal | AmphibiousAnimal) {\n    return match(roadKill, {\n        dog: ({name}) => `Don't make me go there :(.`,\n        cat: ({name}) => `Poor ${name}...`,\n        frog: _ => 'Was that a frog?',\n    })\n}\n")),Object(r.b)("h3",{id:"q--a"},"Q & A"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Should I use singular or plural names for modules?")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Do you want to write ",Object(r.b)("inlineCode",{parentName:"li"},"Animal.dog(...)")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Animals.dog(...)"),"? Personally I like singular because it makes type annotations read more clearly. I like ",Object(r.b)("inlineCode",{parentName:"li"},"x: Animal")," over ",Object(r.b)("inlineCode",{parentName:"li"},"x: Animals"),", since that value is singular. Nothing breaks if you go plural."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Should I make a type for each variant module?")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I do. This gives you the ",Object(r.b)("inlineCode",{parentName:"p"},"Animal")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Animal<'cat'>")," types, which are quite convenient and improve ergonomics by offering intellisense. One of my motivations in writing this library was to simplify the fragile process of discriminant union creation and type generation for my team. Again, your consumers, including your own team members using your types, do not experience this complexity."),Object(r.b)("p",{parentName:"li"},"Some users find the full type intimidating or just plain frustrating. ",Object(r.b)("inlineCode",{parentName:"p"},"VariantOf")," is designed with a simpler form is common in the community:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type Animal = VariantOf<typeof Animal>;\n")),Object(r.b)("p",{parentName:"li"},"I admit this is much clearer for the average TypeScript user. You retain ",Object(r.b)("inlineCode",{parentName:"p"},"Animal"),", but lose ",Object(r.b)("inlineCode",{parentName:"p"},"Animal<'cat'>"),". You can compute ",Object(r.b)("inlineCode",{parentName:"p"},"Animal<'cat'>")," through ",Object(r.b)("inlineCode",{parentName:"p"},"Extract<Animal, {type: 'cat'}>"),". The disadvantage here is you lose the restrictions on the type property ('cat'), and autocomplete with it. So if at some point your application changes from ",Object(r.b)("inlineCode",{parentName:"p"},"cat")," to ",Object(r.b)("inlineCode",{parentName:"p"},"feline"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Animal<'cat'>")," will now raise an error to alert you that it needs updating. ",Object(r.b)("inlineCode",{parentName:"p"},"Extract<Animal, {type: 'cat'}>")," would not."),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../articles/that-type"}),"See the type page explanation"),"."))))))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,l({ref:t},s,{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);