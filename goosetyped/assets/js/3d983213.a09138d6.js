(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(8),a=(r(0),r(277)),c={},p={unversionedId:"api/goosetyped.model.ctor",id:"api/goosetyped.model.ctor",isDocsHomePage:!1,title:"goosetyped.model.ctor",description:"Home &gt; @pebula/goosetyped &gt; Model &gt; ctor",source:"@site/docs/api/goosetyped.model.ctor.md",slug:"/api/goosetyped.model.ctor",permalink:"/node/goosetyped/docs/api/goosetyped.model.ctor",editUrl:"https://github.com/pebula/node/tree/master/apps/dpcs/touchstone/docs/docs/api/goosetyped.model.ctor.md",version:"current"},l=[{value:"Model.ctor() method",id:"modelctor-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped"},"@pebula/goosetyped")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.model"},"Model")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.model.ctor"},"ctor")),Object(a.b)("h2",{id:"modelctor-method"},"Model.ctor() method"),Object(a.b)("p",null,"Like ",Object(a.b)("inlineCode",{parentName:"p"},"create()")," but without the save, replaces the constructor. Useful when you want to create a new instance from a base discriminator class"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"ctor<T extends Document>(this: Ctor<T>, doc: Partial<T>): T;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"this"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/node/goosetyped/docs/api/goosetyped.ctor"},"Ctor"),"<","T",">"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"doc"),Object(a.b)("td",{parentName:"tr",align:null},"Partial","<","T",">"),Object(a.b)("td",{parentName:"tr",align:null})))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"T"))}d.isMDXComponent=!0},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),d=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=d(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=d(r),s=n,m=b["".concat(c,".").concat(s)]||b[s]||u[s]||a;return r?o.a.createElement(m,p(p({ref:t},i),{},{components:r})):o.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);