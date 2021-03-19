(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{276:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),o=n.n(r),s=n(297),l=n.n(s),c=n(291),i=n(280),u=n(16),m=n(278),p=n(219),g=n.n(p),d=n(290),y=n(292),h=n(325),f=n.n(h);var v=function(e){var t=Object(u.default)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,s=Object(r.useState)(!1),l=s[0],c=s[1];Object(r.useEffect)((function(){c(!0)}),[]);var i=Object(d.a)().isDarkTheme,m=n.theme||f.a,p=n.darkTheme||m,h=i?p:m,v=e.lang,b=void 0===v?"yaml":v,E=e.snippet;return o.a.createElement(y.a,Object(a.a)({},y.b,{key:l,theme:h,code:E,language:b}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,s=e.getTokenProps;return o.a.createElement("pre",{className:t+" "+g.a.codeSnippet,style:n},a.map((function(e,t){return o.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",s({token:e,key:t}))})))})))}))},b=n(220),E=n.n(b),k=[{title:o.a.createElement(o.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("strong",null,"GooseTyped")," is here to make your life easy. The classes you define are the actual models you use. No intermediate classes or any additional step is required.")},{title:o.a.createElement(o.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:o.a.createElement(o.a.Fragment,null,"Forget about mongoose ",o.a.createElement("strong",null,"Schema"),", define your models using typescript decorators and let ",o.a.createElement("strong",null,"GooseTyped")," do the rest. Discriminators? Extending Schemas? who cares... GooseTyped will take care of it for you.")},{title:o.a.createElement(o.a.Fragment,null,"Code Reuse"),imageUrl:"img/undraw_docusaurus_react.svg",description:o.a.createElement(o.a.Fragment,null,"Wether you extend your models using inheritance or composition (via mixins),",o.a.createElement("strong",null," GooseTyped")," got you covered. Creating models and reusing code is now natural.")}];function N(e){var t=e.imageUrl,n=e.title,a=e.description,r=Object(m.a)(t);return o.a.createElement("div",{className:l()("col col--4",E.a.feature)},r&&o.a.createElement("div",{className:"text--center"},o.a.createElement("img",{className:E.a.featureImage,src:r,alt:n})),o.a.createElement("h3",null,n),o.a.createElement("p",null,a))}t.default=function(){var e=Object(u.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(c.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},o.a.createElement("header",{className:l()("hero hero--primary",E.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"hero__title"},t.title),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement("div",{className:E.a.buttons},o.a.createElement(i.a,{className:l()("button button--outline button--secondary button--lg",E.a.getStarted),to:Object(m.a)("docs/getting-started/introduction")},"Get Started")))),o.a.createElement("main",null,o.a.createElement("section",{className:E.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:l()("col col--6")},o.a.createElement("h3",null,"Turn this..."),o.a.createElement(v,{snippet:"/* customer.ts */\nimport mongoose from 'mongoose';\n\nconst customerSchema = new mongoose.Schema({\n  name: String,\n  age: Number,\n});\n\nexport interface ICustomer extends mongoose.Document {\n  name: string;\n  age: number;\n}\n\nexport const Customer = mongoose.model<ICustomer>('Customer', customerSchema);",lang:"typescript"})),o.a.createElement("div",{className:l()("col col--6")},o.a.createElement("h3",null,"To this..."),o.a.createElement(v,{snippet:"/* customer.ts */\nimport { GtDocument, GtModel } from '@pebula/goosetyped';\n\n@GtDocument()\nexport class Customer extends GtModel() {\n  @GtColumn()\n  name: string;\n\n  @GtColumn()\n  age: number;\n}",lang:"typescript"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:l()("col")},o.a.createElement(v,{snippet:"import { Customer } from './customer';\n\nconst customer = new Customer({ name: 'John', age: 50 });\n",lang:"typescript"}),"And we're not even scratching the surface of what GooseTyped can do for you...")))),k&&k.length&&o.a.createElement("section",{className:E.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},k.map((function(e,t){return o.a.createElement(N,Object(a.a)({key:t},e))})))))))}},292:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(24),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:a.a,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var d=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=c({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?c({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=c({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?c({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],c=[l];s>-1;){for(;(o=a[s]++)<r[s];){var p=void 0,g=t[s],d=n[s][o];if("string"==typeof d?(g=s>0?g:["plain"],p=d):(g=m(g,d.type),d.alias&&(g=m(g,d.alias)),p=d.content),"string"==typeof p){var y=p.split(i),h=y.length;l.push({types:g,content:y[0]});for(var f=1;f<h;f++)u(l),c.push(l=[]),l.push({types:g,content:y[f]})}else s++,t.push(g),n.push(p),a.push(0),r.push(p.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),c}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=d},325:function(e,t){e.exports={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["comment"],style:{color:"rgb(136, 132, 111)"}},{types:["string","changed"],style:{color:"rgb(230, 219, 116)"}},{types:["punctuation","tag","deleted"],style:{color:"rgb(249, 38, 114)"}},{types:["number","builtin"],style:{color:"rgb(174, 129, 255)"}},{types:["variable"],style:{color:"rgb(248, 248, 242)"}},{types:["function","attr-name","inserted"],style:{color:"rgb(166, 226, 46)"}}]}}}]);