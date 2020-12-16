(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),r=(a(0),a(179)),l={title:"API Reference",sidebar_label:"\u2615 API"},b={id:"api",title:"API Reference",description:"## Functions\r",source:"@site/docs\\api.md",permalink:"/variant/docs/api",sidebar_label:"\u2615 API",sidebar:"someSidebar",previous:{title:"Changelog",permalink:"/variant/docs/changelog"}},c=[{value:"Functions",id:"functions",children:[{value:"cast",id:"cast",children:[]},{value:"isOfVariant",id:"isofvariant",children:[]},{value:"keys",id:"keys",children:[]},{value:"keymap",id:"keymap",children:[]},{value:"lookup",id:"lookup",children:[]},{value:"match",id:"match",children:[]},{value:"matchElse",id:"matchelse",children:[]},{value:"narrow",id:"narrow",children:[]},{value:"outputTypes",id:"outputtypes",children:[]},{value:"partialLookup",id:"partiallookup",children:[]},{value:"partialMatch",id:"partialmatch",children:[]}]},{value:"Variant Creation",id:"variant-creation",children:[{value:"variant",id:"variant",children:[]},{value:"fields",id:"fields",children:[]},{value:"payload",id:"payload",children:[]},{value:"variantFactory",id:"variantfactory",children:[]},{value:"variantList",id:"variantlist",children:[]},{value:"variantModule",id:"variantmodule",children:[]}]},{value:"Types",id:"types",children:[{value:"Flags&lt;T&gt;",id:"flagst",children:[]},{value:"Handler&lt;T&gt;",id:"handlert",children:[]},{value:"KeysOf&lt;T&gt;",id:"keysoft",children:[]},{value:"Lookup&lt;T, U?&gt;",id:"lookupt-u",children:[]},{value:"Matrix&lt;T&gt;",id:"matrixt",children:[]},{value:"TypeNames&lt;T&gt;",id:"typenamest",children:[]},{value:"VariantCreator&lt;T, F, K?&gt;",id:"variantcreatort-f-k",children:[]},{value:"VariantModule&lt;K&gt;",id:"variantmodulek",children:[]},{value:"VariantOf&lt;T&gt;",id:"variantoft",children:[]},{value:"TypeExt&lt;K, T&gt;",id:"typeextk-t",children:[]},{value:"WithProperty&lt;K, T&gt;",id:"withpropertyk-t",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("p",null,"Tools to help describe and process domains."),Object(r.b)("h3",{id:"cast"},"cast"),Object(r.b)("p",null,"Set a variable's type to a new case of the same variant."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"obj")," ",Object(r.b)("inlineCode",{parentName:"li"},"O extends TypeExt<K, string>")," object of concern."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends O[K]"),Object(r.b)("em",{parentName:"li"},"(string)")," new type tag. Restricted to possible types of the variant."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string")," discriminant key.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const snake = cast(animal, 'snake'); // typeof snake === Animal<'snake'>;\n")),Object(r.b)("h3",{id:"isofvariant"},"isOfVariant"),Object(r.b)("p",null,"Checks if an object was created from one of a set of variants. This function is a\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards"}),"user-defined type guard"),"\nso TypeScript will narrow the type of ",Object(r.b)("inlineCode",{parentName:"p"},"object")," correctly."),Object(r.b)("p",null,"The variant module may be a pre-existing module or one constructed on the fly."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"instance")," ",Object(r.b)("inlineCode",{parentName:"li"},"{} | null | undefined")," an instance of a variant."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"variant")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends VariantModule<K>")," the variant module."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string")," the key used as the discriminant.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"instance is variant")," ",Object(r.b)("em",{parentName:"p"},"(boolean)")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"declare var animal: {};\n\nif (isOfVariant(animal, Animal)) {\n    ... // animal is now of type Animal\n}\n\nif (isOfVariant(animal, variantList([Animal.cat, Animal.dog]))) {\n    ... // animal is now of type Animal<'cat'> | Animal<'dog'>\n}\n")),Object(r.b)("h3",{id:"keys"},"keys"),Object(r.b)("p",null,"Retrieve an object cache (",Object(r.b)("inlineCode",{parentName:"p"},"{[P]: P}"),") of a variant's  keys."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"console.log(keys(Animal));\n")),Object(r.b)("p",null,"prints"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"{\n    cat: 'cat',\n    dog: 'dog',\n    snake: 'snake',\n}\n")),Object(r.b)("h3",{id:"keymap"},"keymap"),Object(r.b)("p",null,"Retrieve an mapping object from a variant module's convenient keys\n(property names) and literal keys (valid elements of the ",Object(r.b)("inlineCode",{parentName:"p"},"type: ")," property)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"console.log(keymap({\n    ...Animal,\n    bird: variant('@flying/bird'),\n}));\n")),Object(r.b)("p",null,"prints"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"{\n    bird: '@flying/bird',\n    cat: 'cat',\n    dog: 'dog',\n    snake: 'snake',\n}\n")),Object(r.b)("h3",{id:"lookup"},"lookup"),Object(r.b)("p",null,"Process an unknown variant by comparing it to a provided lookup table and returning the proper result."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"object")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends TypeExt<K, string>"),": some object that extends ",Object(r.b)("inlineCode",{parentName:"li"},"{[K]: string}"),". The type of this item should be a union of possible cases."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"lookup")," ",Object(r.b)("inlineCode",{parentName:"li"},"L extends Lookup<VariantsOfUnion<T, K>>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"assume ",Object(r.b)("inlineCode",{parentName:"li"},"T")," is ",Object(r.b)("inlineCode",{parentName:"li"},"A | B | C")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"L")," will be ",Object(r.b)("inlineCode",{parentName:"li"},"{ A: any, B: any, C: any }")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey?")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string = 'type'"),": the discriminant to use.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const cuteName = lookup(animal, {\n    cat: 'kitty',\n    dog: 'pupper',\n    snake: 'snek',\n});\n")),Object(r.b)("h3",{id:"match"},"match"),Object(r.b)("p",null,"Process an unknown variant by providing a handler object that will react to the various possible cases."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"object")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends TypeExt<K, string>"),": Some item to be handled. The type of this object should be a union of possible cases."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"handler")," ",Object(r.b)("inlineCode",{parentName:"li"},"H extends Handler<VariantsOfUnion<T, K>>"),": The type seems more complex than it is. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Assume ",Object(r.b)("inlineCode",{parentName:"li"},"object")," is ",Object(r.b)("inlineCode",{parentName:"li"},"A | B | C"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"H")," will be ",Object(r.b)("inlineCode",{parentName:"li"},"{ [A.type]: (_:A) => any, [B.type]: (_: B) => any, [C.type]: (_: C) => any }")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey?")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string = 'type'")," the key to look at as the discriminant.")),Object(r.b)("p",null,"It's simpler to use than it is to describe."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const describeAnimal = (animal: Animal) => match(animal, {\n    cat: ({name}) => `${name} is sleeping on a sunlit window sill.`,\n    dog: ({name, favoriteBall}) => [\n        `${name} is on the rug`,\n        favoriteBall ? `nuzzling a ${favoriteBall} ball.` : '.' \n    ].join(' '),\n    snake: s => `Hi ${s.name}, your ${s.pattern} skin looks nice today.`,\n});\n")),Object(r.b)("p",null,"It's not necessary to destructure the objects into their properties, or even to use any of the state of a given case."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const rating = (animal: Animal) => match(animal, {\n    dog: _ => 1,\n    cat: _ => 2,\n    snake: _ => 3,\n});\n")),Object(r.b)("p",null,"though in this case, it would be simpler to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#lookup"}),Object(r.b)("inlineCode",{parentName:"a"},"lookup()")),"."),Object(r.b)("h3",{id:"matchelse"},"matchElse"),Object(r.b)("p",null,"A hybrid between match() and partialMatch()."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const attributeToString = (attr: Attribute) => matchElse(attr, {\n    Filename: ({payload}) => `Filename: ${payload}`,\n    Resolution: ({width, height}) => `Resolution: ${width} x ${height}`,\n}, rest => `Unknown Attribute: ${rest.type}`);\n")),Object(r.b)("h3",{id:"narrow"},"narrow"),Object(r.b)("p",null,"Attempt to narrow a variable to a specific case of the same variant"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"obj")," ",Object(r.b)("inlineCode",{parentName:"li"},"O extends TypeExt<K, string>")," object of concern."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends O[K]"),Object(r.b)("em",{parentName:"li"},"(string)")," new type tag. Restricted to possible types of the variant."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string")," discriminant key.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const snake = narrow(animal, 'snake'); // typeof snake === (Animal<'snake'> | undefined);\n\nconsole.log(snake?.pattern ?? 'unknown');\n")),Object(r.b)("h3",{id:"outputtypes"},"outputTypes"),Object(r.b)("p",null,"Get a well-typed array of the literals any given ",Object(r.b)("inlineCode",{parentName:"p"},"VariantModule")," uses for tags."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vm: {[name: string]: {key: string, type: string}"),": Note that every ",Object(r.b)("inlineCode",{parentName:"li"},"VariantModule")," meets this contract.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),": A list of types"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {Animal} from '...';\n\nconst types = outputTypes(Animal);\n\nconsole.log(types); // ['cat', 'dog', 'snake'];\n")),Object(r.b)("h3",{id:"partiallookup"},"partialLookup"),Object(r.b)("p",null,"Process an unknown variant by comparing it to a provided lookup table and returning the proper result.\nIf the handler does not account for the case, returns undefined"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"obj")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends TypeExt<K, string>")," some object that extends ",Object(r.b)("inlineCode",{parentName:"li"},"{[K]: string}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"lookup")," ",Object(r.b)("inlineCode",{parentName:"li"},"L extends Lookup<VariantsOfUnion<T, K>>")," a partial lookup table going from some keys of ",Object(r.b)("inlineCode",{parentName:"li"},"obj"),"'s type to any."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string = 'type'")," the key used as the discriminant.")),Object(r.b)("h3",{id:"partialmatch"},"partialMatch"),Object(r.b)("p",null,"Process an unknown variant by providing a handler object that will react to some of the various possible cases."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"object")," ",Object(r.b)("inlineCode",{parentName:"li"},"T extends TypeExt<K, string>"),": Some item to be handled. The type of this object should be a union of possible cases."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"handler")," ",Object(r.b)("inlineCode",{parentName:"li"},"H extends Handler<VariantsOfUnion<T, K>>"),": The type seems more complex than it is. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Assume ",Object(r.b)("inlineCode",{parentName:"li"},"object")," is ",Object(r.b)("inlineCode",{parentName:"li"},"A | B | C"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"H")," will be ",Object(r.b)("inlineCode",{parentName:"li"},"{ [A.type]: (_:A) => any, [B.type]: (_: B) => any, [C.type]: (_: C) => any }")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"typeKey?")," ",Object(r.b)("inlineCode",{parentName:"li"},"K extends string = 'type'")," the key to look at as the discriminant.")),Object(r.b)("h2",{id:"variant-creation"},"Variant Creation"),Object(r.b)("h3",{id:"variant"},"variant"),Object(r.b)("p",null,"Define a case of a variant type, optionally with a constructor function to help define the body."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const addAnimal1 = variant('AddAnimal');\nconst addAnimal2 = variant('AddAnimal', (animal: Animal) => ({animal}));\n")),Object(r.b)("h3",{id:"fields"},"fields"),Object(r.b)("p",null,"Take a single variable of type T and express that as the body of the variant."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const addAnimal = variant('AddAnimal', fields<{animal: Animal}>());\nconst command = addAnimal({animal: Animal.dog({name: 'Cerberus'})});\n")),Object(r.b)("h3",{id:"payload"},"payload"),Object(r.b)("p",null,"Take a single variable of type T and store as 'payload'"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const addAnimal = variant('AddAnimal', payload<Animal>());\nconst command = addAnimal(Animal.dog({name: 'Cerberus'}));\n")),Object(r.b)("h3",{id:"variantfactory"},"variantFactory"),Object(r.b)("p",null,"By default, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#variant"}),Object(r.b)("inlineCode",{parentName:"a"},"variant()"))," generates tag constructors that use the ",Object(r.b)("inlineCode",{parentName:"p"},"type")," property for the discriminant."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const niceVariant = variantFactory('kind');\nconst fish = niceVariant('fish', (name: string) => ({name}));\n\nconst steph = fish('stephanie');\n")),Object(r.b)("p",null,"The value of ",Object(r.b)("inlineCode",{parentName:"p"},"steph")," is shown below. Note that the object is marked as a fish, but uses the ",Object(r.b)("inlineCode",{parentName:"p"},"kind")," property instead of ",Object(r.b)("inlineCode",{parentName:"p"},"type"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"{\n    kind: 'fish',\n    name: 'stephanie',\n}\n")),Object(r.b)("p",null,"in fact the ",Object(r.b)("inlineCode",{parentName:"p"},"variant")," function you know and love is defined as"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export const variant = variantFactory('type');\n")),Object(r.b)("p",null,"so know the freaky factories you make from this will be just as valid as the official one."),Object(r.b)("h3",{id:"variantlist"},"variantList"),Object(r.b)("p",null,"Create a variant module based on a list of variants."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const WingedAnimal = variantList([\n    Animal.bird,\n    Animal.pegasus,\n]);\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const Suit = variantList(['Spades', 'Hearts', 'Clubs', 'Diamonds']),\n")),Object(r.b)("h3",{id:"variantmodule"},"variantModule"),Object(r.b)("p",null,"Create a variant module from an object describing the variant's structure.\nEach key of the object is a case of the variant. Each value of the object\nis the constructor function associated with that key. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export const Animal = variantModule({\n    dog: fields<{name: string, favoriteBall?: string}>(),\n    cat: fields<{name: string, furnitureDamaged: number}>(),\n    snake: (name: string, pattern = 'striped') => ({name, pattern}),\n});\n")),Object(r.b)("h2",{id:"types"},"Types"),Object(r.b)("p",null,"The supporting cast of types that helps keep this concise and relevant."),Object(r.b)("h3",{id:"flagst"},"Flags<T",">"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"exp\\ort type Flags<T extends VariantModule> = Partial<Matrix<T>>;\n")),Object(r.b)("h3",{id:"handlert"},"Handler<T",">"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * Built to describe an object with the same keys as a variant but instead of constructors\n * for those objects has functions that handle objects of that type.\n */\nexport type Handler<T, U = any> = {\n    [P in keyof T]: (variant: T[P]) => U\n}\n")),Object(r.b)("h3",{id:"keysoft"},"KeysOf<T",">"),Object(r.b)("p",null,"Extract the key literals of a variant."),Object(r.b)("h3",{id:"lookupt-u"},"Lookup<T, U?>"),Object(r.b)("p",null,"An object that has the same keys as a variant but has arbitrary values for the data a.k.a. a lookup table."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const names: Lookup<Animal, string> = {\n    cat: 'Steven',\n    dog: 'Cubone',\n    snake: 'Slither',\n}\n")),Object(r.b)("h3",{id:"matrixt"},"Matrix<T",">"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"VariantModule")," is a collection of variant constructors. A ",Object(r.b)("inlineCode",{parentName:"p"},"Matrix"),", in contrast, is a collection of ",Object(r.b)("em",{parentName:"p"},"instances")," of these variants."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const exampleAnimals: Matrix<Animal> = {\n    dog: Animal.dog({name: 'Cerberus'}),\n    cat: Animal.cat({name: 'Batman'}),\n    snake: Animal.snake('Naga'),\n}\n")),Object(r.b)("h3",{id:"typenamest"},"TypeNames<T",">"),Object(r.b)("p",null,"A Helper type so consumers can restrict their generics more easily."),Object(r.b)("h3",{id:"variantcreatort-f-k"},"VariantCreator<T, F, K?",">"),Object(r.b)("p",null,"Calling ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#variant"}),Object(r.b)("inlineCode",{parentName:"a"},"variant()"))," results in a function with some extra properties, described as a ",Object(r.b)("inlineCode",{parentName:"p"},"VariantCreator"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"T extends string")," (",Object(r.b)("strong",{parentName:"li"},"Tag"),") the string literal populating the ",Object(r.b)("inlineCode",{parentName:"li"},"type")," field."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"F extends (...args: any[]) => {}")," (",Object(r.b)("strong",{parentName:"li"},"Function"),") the constructor function returning some object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"K extends string = 'type'")," (",Object(r.b)("strong",{parentName:"li"},"Key"),") The key")),Object(r.b)("p",null,"In use, a VariantCreator acts like it's parameter ",Object(r.b)("inlineCode",{parentName:"p"},"F"),", as a function, but also has ",Object(r.b)("inlineCode",{parentName:"p"},"key: K")," and ",Object(r.b)("inlineCode",{parentName:"p"},"type: T")," properties to inform a user of the kinds of objects it generates. "),Object(r.b)("h3",{id:"variantmodulek"},"VariantModule<K",">"),Object(r.b)("p",null,"A grouping of variants into an object literal."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"K extends string = 'type'")," (",Object(r.b)("strong",{parentName:"li"},"Key"),") The ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions"}),"discriminant")," of the discriminated union. ")),Object(r.b)("p",null,"This can be written directly or using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#variantlist"}),Object(r.b)("inlineCode",{parentName:"a"},"variantList")),"."),Object(r.b)("h3",{id:"variantoft"},"VariantOf<T",">"),Object(r.b)("p",null,"Some of the magic of this library. May be referenced in two ways"),Object(r.b)("h4",{id:"variantoft-1"},Object(r.b)("inlineCode",{parentName:"h4"},"VariantOf<T>")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VariantOf<typeof Animal>")," resolves to the type union:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'{\n    type: "dog";\n    name: string;\n    favoriteBall?: string | undefined;\n} | {\n    type: "cat";\n    name: string;\n    furnitureDamaged: number;\n} | {\n    type: "snake";\n    name: string;\n    pattern: string;\n}\n')),Object(r.b)("h4",{id:"variantoft-string--undefined"},Object(r.b)("inlineCode",{parentName:"h4"},"VariantOf<T, string | undefined>")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VariantOf<typeof Animal, 'dog'>")," resolves to the more specific type"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'{\n    type: "dog";\n    name: string;\n    favoriteBall?: string | undefined;\n}\n')),Object(r.b)("p",null,"If using ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," or some invalid string, this falls back to the full union type."),Object(r.b)("h3",{id:"typeextk-t"},"TypeExt<K, T>"),Object(r.b)("p",null,"Describe a simple object literal with a single property."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"K extends string")," (",Object(r.b)("strong",{parentName:"li"},"Key"),") the property key"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"T")," (",Object(r.b)("strong",{parentName:"li"},"Value"),") the property value ")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TypeExt<K, T>")," is equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"{ [K]: T }"),"."),Object(r.b)("h3",{id:"withpropertyk-t"},"WithProperty<K, T>"),Object(r.b)("p",null,"Alias of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#typeextk-t"}),Object(r.b)("strong",{parentName:"a"},"TypeExt"),"ension"),"."))}p.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return a?i.a.createElement(u,b({ref:t},o,{components:a})):i.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<r;o++)l[o]=a[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);