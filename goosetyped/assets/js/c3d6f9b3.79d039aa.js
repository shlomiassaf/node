(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(8),a=(n(0),n(277)),c={},p={unversionedId:"api/goosetyped.gtconnectoptions",id:"api/goosetyped.gtconnectoptions",isDocsHomePage:!1,title:"goosetyped.gtconnectoptions",description:"Home &gt; @pebula/goosetyped &gt; GtConnectOptions",source:"@site/docs/api/goosetyped.gtconnectoptions.md",slug:"/api/goosetyped.gtconnectoptions",permalink:"/node/goosetyped/docs/api/goosetyped.gtconnectoptions",editUrl:"https://github.com/pebula/node/tree/master/apps/dpcs/touchstone/docs/docs/api/goosetyped.gtconnectoptions.md",version:"current"},i=[{value:"GtConnectOptions interface",id:"gtconnectoptions-interface",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped"},"@pebula/goosetyped")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/node/goosetyped/docs/api/goosetyped.gtconnectoptions"},"GtConnectOptions")),Object(a.b)("h2",{id:"gtconnectoptions-interface"},"GtConnectOptions interface"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export interface GtConnectOptions \n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Property"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/node/goosetyped/docs/api/goosetyped.gtconnectoptions.beforecompile"},"beforeCompile")),Object(a.b)("td",{parentName:"tr",align:null},"(handler: ",Object(a.b)("a",{parentName:"td",href:"/node/goosetyped/docs/api/goosetyped.gtbeforecompilemodelhandler"},"GtBeforeCompileModelHandler"),") =",">"," void"),Object(a.b)("td",{parentName:"tr",align:null},"A handler invoked before compiling the model, providing the schema so you can perform final adjustments.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/node/goosetyped/docs/api/goosetyped.gtconnectoptions.compileat"},"compileAt")),Object(a.b)("td",{parentName:"tr",align:null},"'immediate' ","|"," 'connected'"),Object(a.b)("td",{parentName:"tr",align:null},"When to compile the model.",'- immediate: When the connection object is resolved from the factory function (which does not necessarily mean it is connected) - connected: When the connection status changes to connected (if the connection is already connected this is equivalent to "immediate")')))))}s.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);