(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(177)),c={id:"matching",title:"Matching"},o={id:"use/matching",title:"Matching",description:"Pattern matching is the crown jewel of variant types. In general, pattern matching compares a given object to a series of patterns and executes the relevant code block when a match is found. Variant features a match expression and several more specific versions for use depending on the situation.\r",source:"@site/docs\\use\\matching.md",permalink:"/variant/docs/use/matching",sidebar:"someSidebar",previous:{title:"Grouping",permalink:"/variant/docs/use/grouping"},next:{title:"Filtering",permalink:"/variant/docs/use/filter"}},l=[{value:"<code>match()</code>",id:"match",children:[{value:"The Handler",id:"the-handler",children:[]},{value:"The Return Type",id:"the-return-type",children:[]},{value:"Inline Matching",id:"inline-matching",children:[]},{value:"<code>partialMatch()</code>",id:"partialmatch",children:[]},{value:"<code>matchElse()</code>",id:"matchelse",children:[]}]},{value:"<code>lookup()</code>",id:"lookup",children:[{value:"<code>partialLookup()</code>",id:"partiallookup",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Pattern matching is the crown jewel of variant types. In general, pattern matching compares a given object to a series of patterns and executes the relevant code block when a match is found. Variant features a match expression and several more specific versions for use depending on the situation."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Glossary: Exhaustiveness")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The term ",Object(i.b)("strong",{parentName:"p"},"exhaustive")," gets tossed around a lot when talking about variant types, especially in the term ",Object(i.b)("strong",{parentName:"p"},"exhaustiveness checking"),". Simply speaking, it's a check for whether or not you've handled all the possibilities. Having access to this feature ",Object(i.b)("em",{parentName:"p"},"greatly")," simplifies refactoring because breaking changes to the variant (adding a new case, for example) will point you to every point in the code that then needs to add support for that case to its handler."))),Object(i.b)("h2",{id:"match"},Object(i.b)("inlineCode",{parentName:"h2"},"match()")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"match")," expression inspects the type of an unknown variant and executes the code relevant to that type."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * Describe how some animal is lounging around the player's room.\n\n *  returns: description [string]\n * */\nconst describeAnimal = (animal: Animal) => match(animal, {\n    cat: ({name}) => `${name} is sleeping on a sunlit window sill.`,\n    dog: ({name, favoriteBall}) => [\n        `${name} is on the rug`,\n        favoriteBall ? `nuzzling a ${favoriteBall} ball.` : '.' \n    ].join(' '),\n    snake: s => `${s.name} is enjoying the heat of the lamp on his ${s.pattern} skin`,\n});\n")),Object(i.b)("p",null,"Not only was ",Object(i.b)("inlineCode",{parentName:"p"},"describeAnimal()")," able to capture the serene beauty of domestic life with a pet, it did so while referencing information ",Object(i.b)("em",{parentName:"p"},"specific")," to the pet, like the color of a dog's favorite ball or the pattern of a snake's skin. It also did so without requiring any casting, null checks, or type checks on the part of the user. "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"match()")," function includes ",Object(i.b)("strong",{parentName:"p"},"exhaustiveness checking"),". ",Object(i.b)("inlineCode",{parentName:"p"},"describeAnimal()")," will gain the ease of mind of knowing its covered all the bases. If the intention is to not handle every case, use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"matching#partialmatch"}),Object(i.b)("inlineCode",{parentName:"a"},"partialMatch()"))),Object(i.b)("h3",{id:"the-handler"},"The Handler"),Object(i.b)("p",null,"The second object ",Object(i.b)("inlineCode",{parentName:"p"},"match")," expects is the ",Object(i.b)("em",{parentName:"p"},"handler"),". It's an object with a property for each case of the unknown variant. The property key is the case's ",Object(i.b)("inlineCode",{parentName:"p"},"type")," and the value is a function that takes a variant of that type and returns... well... anything."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Given ",Object(i.b)("inlineCode",{parentName:"p"},"Animal")," has possible types ",Object(i.b)("inlineCode",{parentName:"p"},"dog"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cat"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"snake"),", this is the type of the handler."),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"{\n   dog: (x: Animal<'dog'>) => any,\n   cat: (x: Animal<'cat'>) => any,\n   snake: (x: Animal<'snake'>) => any,\n}\n"))),Object(i.b)("p",null,"The syntax seen in the code is enabled by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"}),"destructuring the parameters")," of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://basarat.gitbook.io/typescript/future-javascript/arrow-functions"}),"arrow functions"),"."),Object(i.b)("h3",{id:"the-return-type"},"The Return Type"),Object(i.b)("p",null,"The return type of a ",Object(i.b)("inlineCode",{parentName:"p"},"match()"),"expression will respect TypeScript's type inference. If every branch returns a number, the type of the expression will be ",Object(i.b)("inlineCode",{parentName:"p"},"number"),". If there are a variety of types returned, ",Object(i.b)("inlineCode",{parentName:"p"},"match"),"'s return type will be the union of those types."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// rate from 1-10\nconst rating = (a: Animal) => match(a, {\n    dog: ({name}) => name === 'Chewbacca' ? 10 : 7, \n    cat: _ => 5,\n    snake: ({name}) => name.startsWith('S') ? 7 : 4,\n})\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},"const rating: (a: Animal) => number")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Arguments named ",Object(i.b)("inlineCode",{parentName:"h5"},"_"))),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"_")," as the label for throwaway arguments in the handler functions. This convention is concise and helps limit ",Object(i.b)("inlineCode",{parentName:"p"},"tsc"),"'s whining when the ",Object(i.b)("inlineCode",{parentName:"p"},"noUnusedParameters")," flag is on."))),Object(i.b)("p",null,"Now this would never happen, of course, but let's pretend I made a mistake while typing ",Object(i.b)("inlineCode",{parentName:"p"},"4"),", and accidentally wrote the string ",Object(i.b)("inlineCode",{parentName:"p"},"'4'"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{4}","{4}":!0}),"const rating = (a: Animal) => match(a, {\n    dog: ({name}) => name === 'Chewbacca' ? 10 : 7, \n    cat: _ => 5,\n    snake: ({name}) => name.startsWith('S') ? 7 : '4',\n})\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type:")," ",Object(i.b)("inlineCode",{parentName:"p"},'const rating: (a: Animal) => number | "4"')),Object(i.b)("p",null,"Thanks to this feature, this slip-up will raise a compiler error when the result of ",Object(i.b)("inlineCode",{parentName:"p"},"rating()")," is used where a number is expected."),Object(i.b)("h3",{id:"inline-matching"},"Inline Matching"),Object(i.b)("p",null,"As a type-safe and elegant flow control expression, ",Object(i.b)("inlineCode",{parentName:"p"},"match")," can be used inline as part of other expressions. These can be language features or elements of other libraries."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filtering a list of variants"),". Heterogeneous lists are a #1 use case for variants. Matching that list to make decisions allows for some very succinct and powerful code."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * Filter to the animals that are just quake-in-your-booties cool.\n *  - cool cats haven't broken anything in a week\n *  - cool dogs like red balls\n *  - every snake is cool\n */\nconst coolAnimals = animals.filter(a => match(a, {\n    cat: ({daysSinceDamage}) => daysSinceDamage > 7,\n    dog: ({favoriteBall}) => favoriteBall === 'red',\n    snake: _ => true,\n}));\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Last minute color selections.")," Conveniently switch based on type for various properties. Since literals are retained, this even works for fields like the react library ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"@blueprintjs/core"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"icon")," property which is required to be a valid literal from a selection. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"<Icon\n    icon='upload'\n    color={match(uploadState, {\n        sucess: _ => 'green',\n        failure: _ => 'red',\n    })}\n/>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Though ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"matching#partiallookup"}),Object(i.b)("inlineCode",{parentName:"a"},"partialLookup"))," is a better candidiate here.")),Object(i.b)("h3",{id:"partialmatch"},Object(i.b)("inlineCode",{parentName:"h3"},"partialMatch()")),Object(i.b)("p",null,"Specifically for when you don't want to handle every case. Optionaly use ",Object(i.b)("inlineCode",{parentName:"p"},"??")," to provide default behavior."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const favoriteBallColor = (a: Animal) => partialMatch(a, {\n    dog: ({favoriteBall}) => favoriteBall,\n}) ?? 'none';\n")),Object(i.b)("h3",{id:"matchelse"},Object(i.b)("inlineCode",{parentName:"h3"},"matchElse()")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A hybrid between ",Object(i.b)("inlineCode",{parentName:"p"},"match()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"partialMatch()"),".")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"matchElse()")," function lets a user handle the specific cases they want, like partialMatch, but then collects the type that the handler ",Object(i.b)("em",{parentName:"p"},"didn't")," have branches for and passes that union into a function."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const attributeToString = (attr: Attribute) => matchElse(attr, {\n    Filename: ({payload}) => `Filename: ${payload}`,\n    Resolution: ({width, height}) => `Resolution: ${width} x ${height}`,\n}, rest => `Unknown Attribute: ${rest.type}`);\n")),Object(i.b)("h2",{id:"lookup"},Object(i.b)("inlineCode",{parentName:"h2"},"lookup()")),Object(i.b)("p",null,"A much simpler kind of pattern matcher, ",Object(i.b)("inlineCode",{parentName:"p"},"lookup()")," leverages a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lookup_table"}),"lookup table")," and uses the ",Object(i.b)("inlineCode",{parentName:"p"},"type")," property of the object as the key."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const cuteName = lookup(animal, {\n    cat: 'kitty',\n    dog: 'pupper',\n    snake: 'snek',\n});\n")),Object(i.b)("h3",{id:"partiallookup"},Object(i.b)("inlineCode",{parentName:"h3"},"partialLookup()")),Object(i.b)("p",null,"The same as before, but none of the properties are required. If there is not a branch that matches the variant's type, this function returns ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"<Icon\n    icon='upload'\n    color={partialLookup(uploadState, {failure: 'red'})}\n/>\n")))}p.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||h[d]||i;return a?r.a.createElement(m,o({ref:t},s,{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);