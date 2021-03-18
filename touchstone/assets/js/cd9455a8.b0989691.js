(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(205)),i=r(210),l={id:"vega-lite-reporter",title:"Vega Lite Reporter",sidebar_label:"2. Vega Lite Reporter"},c={unversionedId:"reporters/vega-lite-reporter",id:"reporters/vega-lite-reporter",isDocsHomePage:!1,title:"Vega Lite Reporter",description:"The Vega Lite Reporter reporter is a graph reporter that renders a graph for each suite",source:"@site/docs/reporters/vega-lite-reporter.md",slug:"/reporters/vega-lite-reporter",permalink:"/node/touchstone/docs/reporters/vega-lite-reporter",editUrl:"https://github.com/pebula/node/tree/master/apps/dpcs/touchstone/docs/docs/reporters/vega-lite-reporter.md",version:"current",sidebar_label:"2. Vega Lite Reporter",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/node/touchstone/docs/reporters/introduction"},next:{title:"Simple Console Reporter",permalink:"/node/touchstone/docs/reporters/simple-console-reporter"}},p=[{value:"Bar Legend",id:"bar-legend",children:[]}],s={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Vega Lite Reporter")," reporter is a graph reporter that renders a graph for each suite\nwith each case represented as a bar."),Object(o.b)("p",null,"The reporter supports 3 types of outputs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HTML - An interactive HTML page that allows filtering of cases and toggling the view mode."),Object(o.b)("li",{parentName:"ul"},"SVG - A static SVG file with all suites as graphs."),Object(o.b)("li",{parentName:"ul"},"PNG - A PNG image file with all suites as graphs.")),Object(o.b)("p",null,"The default configuration is to output all 3 types."),Object(o.b)("p",null,"In addition, you can select the view mode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"horizontal - The graph bar's are laid out horizontally (default)"),Object(o.b)("li",{parentName:"ul"},"vertical - The graph bar's are laid out vertically")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To render the graph's the reporter use the amazing ",Object(o.b)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/"},"vega-lite")," library!"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@TouchStone()\nclass TestRun extends Mixin(VegaLiteReporter) {\n  getVegaLiteReporterFileOrientation(): Orientation {\n    return 'horizontal';\n  }\n\n  getVegaLiteReporterFilename(): string {\n    return 'benchmark-chart';\n  }\n\n  getVegaLiteReporterFileTypes(): Array<'html' | 'svg' | 'png'> {\n    return ['html', 'png', 'svg'];\n  }\n}\n")),Object(o.b)("h2",{id:"bar-legend"},"Bar Legend"),Object(o.b)("p",null,"Each bar in the graph represents the operation per second (",Object(o.b)("strong",{parentName:"p"},"OPS"),") for each case (higher is better)."),Object(o.b)("p",null,"It is a ",Object(o.b)("strong",{parentName:"p"},"ranged bar")," starting from the lowest ",Object(o.b)("strong",{parentName:"p"},"OPS")," value measured and ending with the highest ",Object(o.b)("strong",{parentName:"p"},"OPS")," value measured."),Object(o.b)("p",null,"In between there are multiple indicators:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A black, dotted, ranged error ruler: representing the range of the standard deviation."),Object(o.b)("li",{parentName:"ul"},"A white point: representing the median value"),Object(o.b)("li",{parentName:"ul"},"A red point: representing the mean value (average)"),Object(o.b)("li",{parentName:"ul"},"A plot of green lines: each line represents the OPS of a single case.")),Object(o.b)("img",{alt:"Vega Lite Reporter Legend",src:Object(i.a)("img/vega-lite-reporter.png")}),Object(o.b)("p",null,"This will give you the information you need to analyze your benchmarks."))}u.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(g,l(l({ref:t},p),{},{components:r})):a.a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},210:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(16),a=r(212);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,p=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(l)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+s:s}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},212:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);