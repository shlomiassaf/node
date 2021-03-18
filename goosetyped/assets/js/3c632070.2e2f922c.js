(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(277)),d={},i={unversionedId:"api/goosetyped.model.findbyid",id:"api/goosetyped.model.findbyid",isDocsHomePage:!1,title:"goosetyped.model.findbyid",description:"Home &gt; @pebula/goosetyped &gt; Model &gt; findById",source:"@site/docs/api/goosetyped.model.findbyid.md",slug:"/api/goosetyped.model.findbyid",permalink:"/node/goosetyped/docs/api/goosetyped.model.findbyid",editUrl:"https://github.com/pebula/node/tree/master/apps/dpcs/touchstone/docs/docs/api/goosetyped.model.findbyid.md",version:"current"},l=[{value:"Model.findById() method",id:"modelfindbyid-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped"},"@pebula/goosetyped")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.model"},"Model")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.model.findbyid"},"findById")),Object(o.b)("h2",{id:"modelfindbyid-method"},"Model.findById() method"),Object(o.b)("p",null,"Finds a single document by its ","_","id field. findById(id) is almost","*"," equivalent to findOne(","{ ","_","id: id }","). findById() triggers findOne hooks."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"findById<T extends Document>(this: Ctor<T>, id: any | string | number, callback?: (err: any, res: T | null) => void): DocumentQuery<T | null, T, QueryHelpers> & QueryHelpers;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"this"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/node/goosetyped/docs/api/goosetyped.ctor"},"Ctor"),"<","T",">"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"id"),Object(o.b)("td",{parentName:"tr",align:null},"any ","|"," string ","|"," number"),Object(o.b)("td",{parentName:"tr",align:null},"value of ","_","id to query by")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"callback"),Object(o.b)("td",{parentName:"tr",align:null},"(err: any, res: T ","|"," null) =",">"," void"),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"DocumentQuery","<","T ","|"," null, T, QueryHelpers",">"," ","&"," QueryHelpers"))}p.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(d,".").concat(s)]||b[s]||u[s]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var c=2;c<o;c++)d[c]=n[c];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);