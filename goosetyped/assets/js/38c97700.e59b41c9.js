(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return i}));var r=n(3),o=n(8),a=(n(0),n(277)),d={},l={unversionedId:"api/goosetyped.model.findoneandremove_2",id:"api/goosetyped.model.findoneandremove_2",isDocsHomePage:!1,title:"goosetyped.model.findoneandremove_2",description:"Home &gt; @pebula/goosetyped &gt; Model &gt; findOneAndRemove",source:"@site/docs/api/goosetyped.model.findoneandremove_2.md",slug:"/api/goosetyped.model.findoneandremove_2",permalink:"/node/goosetyped/docs/api/goosetyped.model.findoneandremove_2",editUrl:"https://github.com/pebula/node/tree/master/apps/dpcs/touchstone/docs/docs/api/goosetyped.model.findoneandremove_2.md",version:"current"},c=[{value:"Model.findOneAndRemove() method",id:"modelfindoneandremove-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],p={toc:c};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped"},"@pebula/goosetyped")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.model"},"Model")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.model.findoneandremove_2"},"findOneAndRemove")),Object(a.b)("h2",{id:"modelfindoneandremove-method"},"Model.findOneAndRemove() method"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"findOneAndRemove<T extends Document>(this: Ctor<T>, conditions: any, options: {\n        rawResult: true;\n    } & QueryOptions, callback?: (err: any, doc: mongodb.FindAndModifyWriteOpResultObject<T | null>, res: any) => void): DocumentQuery<T | null, T, QueryHelpers> & QueryHelpers;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"this"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/node/goosetyped/docs/api/goosetyped.ctor"},"Ctor"),"<","T",">"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"conditions"),Object(a.b)("td",{parentName:"tr",align:null},"any"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"options"),Object(a.b)("td",{parentName:"tr",align:null},"{ rawResult: true; } ","&"," QueryOptions"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"callback"),Object(a.b)("td",{parentName:"tr",align:null},"(err: any, doc: mongodb.FindAndModifyWriteOpResultObject","<","T ","|"," null",">",", res: any) =",">"," void"),Object(a.b)("td",{parentName:"tr",align:null})))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"DocumentQuery","<","T ","|"," null, T, QueryHelpers",">"," ","&"," QueryHelpers"))}i.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),i=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=i(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=i(n),m=r,s=b["".concat(d,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(s,l(l({ref:t},p),{},{components:n})):o.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,d=new Array(a);d[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var p=2;p<a;p++)d[p]=n[p];return o.a.createElement.apply(null,d)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);