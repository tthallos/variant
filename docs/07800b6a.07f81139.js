(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),o=(n(0),n(179)),r={title:"React + Redux \u269b\ufe0f"},c={id:"use/redux",title:"React + Redux \u269b\ufe0f",description:"**Variant** works seamlessly with [react](https://reactjs.org/) and [redux](https://redux.js.org/). Create your actions as a variant just like you would anything else. It should Just Work\u2122 as an action type for your reducers. You can create async task creators by simply using an async function in your [`variant`](api.md#variant) definition.\r",source:"@site/docs\\use\\redux.md",permalink:"/variant/docs/use/redux",sidebar:"someSidebar",previous:{title:"Advanced Creation",permalink:"/variant/docs/use/advanced-creation"},next:{title:"Cheat Sheet",permalink:"/variant/docs/cheat"}},s=[{value:"The Money \ud83c\udfc6",id:"the-money-",children:[]},{value:"Grouping",id:"grouping",children:[{value:"<code>Action</code>",id:"action",children:[]},{value:"isOfVariant",id:"isofvariant",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"<code>useState</code>",id:"usestate",children:[]}]},{value:"Redux Official Example",id:"redux-official-example",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Variant")," works seamlessly with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/"}),"react")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/"}),"redux"),". Create your actions as a variant just like you would anything else. It should Just Work\u2122 as an action type for your reducers. You can create async task creators by simply using an async function in your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/variant/docs/api#variant"}),Object(o.b)("inlineCode",{parentName:"a"},"variant"))," definition."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Other libraries")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Sometimes users familiar with action creators will ask about ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"redux-toolkit"))," and which library they should use. I'll take a moment here to go over the differences, but ",Object(o.b)("em",{parentName:"p"},"you do not need to pick one"),". These libraries can work together. I recommend you keep using ",Object(o.b)("inlineCode",{parentName:"p"},"redux-toolkit")," for it's configuration features like ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore()"),", middleware, etc, but you complete ignore ",Object(o.b)("inlineCode",{parentName:"p"},"createAction()")," and use ",Object(o.b)("inlineCode",{parentName:"p"},"variant()")," instead for your actions. Consider also using it to express your domain models. As you'll soon see, Variant and React are a ",Object(o.b)("em",{parentName:"p"},"match")," made in heaven \ud83e\udd23."),Object(o.b)("p",{parentName:"div"},"Redux-toolkit is meant to be opinionated and is specifically scoped to redux. Variant, in contrast, does not care what stack you use and is dedicated to expressing complex domains without getting in your way. Even if that includes ",Object(o.b)("strong",{parentName:"p"},"async"),", ",Object(o.b)("strong",{parentName:"p"},"generic"),", or ",Object(o.b)("strong",{parentName:"p"},"recursive")," variants. Action creators are only a starting point, this library is also great for creating messages and branching options. Variant's full cast of supporting functions makes it possible to more easily construct and process these models."))),Object(o.b)("h2",{id:"the-money-"},"The Money \ud83c\udfc6"),Object(o.b)("p",null,"I'm going to jump straight to the beautiful part. By expressing an element of your state as a variant, you gain the ability to ",Object(o.b)("inlineCode",{parentName:"p"},"match")," on that state information for type-safe and exhaustive conditional rendering with a ",Object(o.b)("em",{parentName:"p"},"pretty")," slick syntax."),Object(o.b)("p",null,"Here's an example from a media manager I'm writing."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * Render a series of file attributes (size, resolution, etc.)\n */\nexport const AttributeList: React.FC<{attributes: Attribute[]}> = ({attributes}) => {\n  return (\n    <div>\n      {attributes.map(attr => (\n        <Badge key={attr.type}>\n          {match(attr, {\n            Filename: ({payload}) => `filename: ${payload}`,\n            Resolution: ({width, height}) => `resolution: ${width} x ${height}`,\n            CreatedDate: ({payload}) => <>\n              <Icon icon='calendar' />\n              created: {renderDate(payload)}\n            </>,\n          })}\n        </Badge>\n      ))}\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"Note the degrees of flexibility shown here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the component rendered fundamentally different kinds of data (strings, numbers, dates)."),Object(o.b)("li",{parentName:"ul"},"each case has independent control over its rendering.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"an icon is only added for ",Object(o.b)("em",{parentName:"li"},"some")," of the options."))),Object(o.b)("li",{parentName:"ul"},"refactor with ease. Adding a new attribute type will add warnings to update this component as well.")),Object(o.b)("p",null,"Edge cases are typically difficult to express and process. Variants make them trivial. Simply add a new possibility to the variant module (",Object(o.b)("inlineCode",{parentName:"p"},"Attribute"),"). The compiler will inform you of every class or component that then needs updating. These edge cases can have completely different types of data than every case before them. "),Object(o.b)("p",null,"Even if there were two attribute types with the same structure, they could be handled differently. For example, the handler branch for ",Object(o.b)("inlineCode",{parentName:"p"},"Filesize")," could run ",Object(o.b)("inlineCode",{parentName:"p"},"renderSize(size: number): string")," on the payload to show something like ",Object(o.b)("inlineCode",{parentName:"p"},"3.51 MB")," while the handler branch for ",Object(o.b)("inlineCode",{parentName:"p"},"AccessCount")," knows not to bother."),Object(o.b)("h2",{id:"grouping"},"Grouping"),Object(o.b)("p",null,"The lesson on grouping will come into play here. As your application becomes more complex you may want to separate your actions into subsets. Variant will allow you to capture those with simple types and combine them. Since we build on core TypeScript features we can perform unions and intersections on these types as you'd expect."),Object(o.b)("h3",{id:"action"},Object(o.b)("inlineCode",{parentName:"h3"},"Action")),Object(o.b)("p",null,"My overall ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," type is usually a composite of all my other action variants."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const Action = {\n  ...GameAction,\n  ...DebugAction,\n};\nexport type Action<T extends TypeNames<typeof Action> = undefined> = VariantOf<typeof Action, T>;\n")),Object(o.b)("p",null,"This pattern allows me to create reducers that target specifically the subvariants ",Object(o.b)("inlineCode",{parentName:"p"},"GameAction"),", ",Object(o.b)("inlineCode",{parentName:"p"},"DebugAction"),"."),Object(o.b)("h3",{id:"isofvariant"},"isOfVariant"),Object(o.b)("p",null,"In these more complex cases it will be useful to judge if an object is one of your ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," types \u2014 either the main set or one of your subsets. In such a scenario ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/variant/docs/api#isOfVariant"}),Object(o.b)("inlineCode",{parentName:"a"},"isOfVariant"))," can play a significant role. This function will help narrow your action to a more specific type."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const rootReducer = (state = initState, action: GameAction | DebugAction) => {\n    return isOfVariant(action, DebugActions) ? debugReducer(state, action)\n        : isOfVariant(action, GameAction) ? gameReducer(state, action)\n        : state\n    ;\n}\n")),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("p",null,"I often use a variant to capture view or app ",Object(o.b)("em",{parentName:"p"},"modes"),". Let's say I've got a View type that could be set to either ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," or a user's ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," page. Home is the same no matter what, but viewing someone's profile means I need a user ID to reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type View = {\n  type: 'Home';\n} | {\n  type: 'Profile';\n  id: number \n}\n")),Object(o.b)("h3",{id:"usestate"},Object(o.b)("inlineCode",{parentName:"h3"},"useState")),Object(o.b)("p",null,"In a simple application, this view might just be switching between tabs and the state for that would be stored in the component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const [view, setView] = useState<View>(View.Home());\n\n...\n\nsetView(View.Profile(42));\n")),Object(o.b)("p",null,"Thanks to the variant's payload when it is time to render a profile, we'll know which ID to include in the API call."),Object(o.b)("h2",{id:"redux-official-example"},"Redux Official Example"),Object(o.b)("p",null,"So here is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/example"}),"the official redux example")," in vanilla javascript."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// Before (not using variant)\nlet nextTodoId = 0\nexport const addTodo = text => ({\n  type: 'ADD_TODO',\n  id: nextTodoId++,\n  text\n})\n\nexport const setVisibilityFilter = filter => ({\n  type: 'SET_VISIBILITY_FILTER',\n  filter\n})\n\nexport const toggleTodo = id => ({\n  type: 'TOGGLE_TODO',\n  id\n})\n\nexport const VisibilityFilters = {\n  SHOW_ALL: 'SHOW_ALL',\n  SHOW_COMPLETED: 'SHOW_COMPLETED',\n  SHOW_ACTIVE: 'SHOW_ACTIVE'\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// After\nlet nextTodoId = 0;\nexport const Action = variantModule({\n    addTodo: (text: string) => ({\n        id: nextTodoId++,\n        text,\n    }),\n    toggleTodo: fields<{id: number}>(),\n    setVisibilityFilter: payload<VisibilityFilters>(), \n});\nexport type Action<T extends TypeNames<typeof Action> = undefined> = VariantOf<typeof Action, T>;\n\nexport const VisibilityFilters = strEnum([\n    'SHOW_ALL',\n    'SHOW_COMPLETED',\n    'SHOW_ACTIVE',\n});\nexport type VisibilityFilters = keyof typeof VisibilityFilters;\n")),Object(o.b)("p",null,"The second sample gives more type information and an easy way to access the type of an action (",Object(o.b)("inlineCode",{parentName:"p"},"Action<'addTodo'>"),") while also being shorter. The reducer is where things get interesting. Here's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/example/#reducerstodosjs"}),"the official redux example reducer"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// Before (not using variant)\nconst todos = (state = [], action) => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [\n        ...state,\n        {\n          id: action.id,\n          text: action.text,\n          completed: false\n        }\n      ]\n    case 'TOGGLE_TODO':\n      return state.map(todo =>\n        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo\n      )\n    default:\n      return state\n  }\n}\n\nexport default todos\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// After\nconst initialState: Todo[] = [];\nconst todos = (state = initialState, action: Action) => match(action, {\n    addTodo: ({id, text}) => [\n        ...state,\n        { id, text, completed: false }\n    ],\n    toggleTodo: ({id}) => state.map(todo => \n        todo.id === id ? {...todo, completed: !todo.completed} : todo\n    ),\n    setVisibilityFilter: () => state,\n});\n")),Object(o.b)("p",null,"It's very nice to having exhaustiveness checking by default and the ability to easily destructure properties."),Object(o.b)("p",null,"For example, let's say you want to render the event history of your application and are writing a component to render a single ",Object(o.b)("inlineCode",{parentName:"p"},"Action"),". This becomes very clean with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/variant/docs/api#match"}),Object(o.b)("inlineCode",{parentName:"a"},"match()")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'export const ActionView: React.FC<{action: Action}> = ({action}) => {\n    return (\n        <div>\n            {match(action, {\n                addTodo: ({id, text}) => <>Add new todo [{id}]: "{text}".</>,\n                toggleTodo: ({id}) => <>Toggle todo with id [{id}].</>,\n                setVisibilityFilter: ({payload}) => <>\n                  Set the current visibility filter to {payload}.\n                </>,\n            })}\n        </div>\n    )\n}\n\n')))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);