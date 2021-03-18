(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),o=(a(0),a(205)),c={},s={unversionedId:"api/touchstone.casemetadataargs.variants",id:"api/touchstone.casemetadataargs.variants",isDocsHomePage:!1,title:"touchstone.casemetadataargs.variants",description:"Home &gt; @pebula/touchstone &gt; CaseMetadataArgs &gt; variants",source:"@site/docs/api/touchstone.casemetadataargs.variants.md",slug:"/api/touchstone.casemetadataargs.variants",permalink:"/node/touchstone/docs/api/touchstone.casemetadataargs.variants",editUrl:"https://github.com/pebula/node/tree/master/apps/dpcs/touchstone/docs/docs/api/touchstone.casemetadataargs.variants.md",version:"current"},i=[{value:"CaseMetadataArgs.variants property",id:"casemetadataargsvariants-property",children:[]}],u={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/node/touchstone/docs/api/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/node/touchstone/docs/api/touchstone"},"@pebula/touchstone")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/node/touchstone/docs/api/touchstone.casemetadataargs"},"CaseMetadataArgs")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/node/touchstone/docs/api/touchstone.casemetadataargs.variants"},"variants")),Object(o.b)("h2",{id:"casemetadataargsvariants-property"},"CaseMetadataArgs.variants property"),Object(o.b)("p",null,"A list of variants that will run in the suite, each as a separate case. I.E. run the same method as a new case but with a different benchmark configuration set."),Object(o.b)("p",null,">"," Note that each variant must have a unique name across the entire suite and must not match the original name or any other variant name for this method and other methods within the Suite."),Object(o.b)("p",null,">"," Note that filters apply on each variant like it will on any regular case."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"variants?: Array<Required<Omit<CaseMetadataArgs, 'variants'>>>;\n")))}p.isMDXComponent=!0},205:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(a),m=r,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return a?n.a.createElement(b,s(s({ref:t},u),{},{components:a})):n.a.createElement(b,s({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=a[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);