!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(0)),a=c(n(2)),i=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}n(4);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(){alert("badge is onClick")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),r(t,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:{margin:20}},o.default.createElement(i.default,{data:["npm","v2.0.2"]}),o.default.createElement(i.default,{data:["build","passing"]}),o.default.createElement(i.default,{data:["npm","v2.0.2","passing"]})),o.default.createElement("div",{style:{margin:20}},o.default.createElement(i.default,{data:["license","MIT"]}),o.default.createElement(i.default,{data:["license","MIT"],backgroundColor:["red","orange"],color:["yellowgreen","#000"]})),o.default.createElement("div",{style:{margin:20}},o.default.createElement(i.default,{data:["donload","v2.0.2","100/m"]}),o.default.createElement(i.default,{data:["coverage","99%"],backgroundColor:["black","green"]}),o.default.createElement(i.default,{data:["dependencies","up to date"],backgroundColor:["black","brightgreen"]})),o.default.createElement("div",{style:{margin:20}},o.default.createElement(i.default,{data:["price","$100 USD","$200 CAD","¥500 JPY","$1000 CNY"],onClick:this.onClick})))}}]),t}();a.default.render(o.default.createElement(l,null),document.getElementById("index"))},function(e,t){e.exports=ReactDOM},function(e,t,n){window,e.exports=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(3);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a={backgroundColor:["black","blue","brightgreen","red","orange","green","yellowgreen","yellow","lightgrey"],color:["#fff"],colorMap:{red:"#d7624b",orange:"#f27e3f",green:"#96c40f",brightgreen:"#4cc61f",yellowgreen:"#a1a328",yellow:"#d6ae22",lightgrey:"#9e9e9e",blue:"#0f80c0",black:"#5b5b5b"}},i=n(0),c=n.n(i),l=a.colorMap;function u(e){var t=e.title,n=e.prefixCls,r=e.className,i=e.data,c=e.backgroundColor,u=e.color;return Array.isArray(i)?(Array.isArray(c)&&0!==c.length||(c=a.backgroundColor),Array.isArray(u)&&0!==u.length||(u=a.color),c=c.map(function(e){return l[e]||e}),u=u.map(function(e){return l[e]||e}),o.a.createElement("span",{title:t,className:"".concat(n," ").concat(r),onClick:e.onClick},i.map(function(e,t){var r=c[t%c.length],a=u[t%u.length];return o.a.createElement("span",{className:"".concat(n,"-badge"),key:t,style:{backgroundColor:r,color:a}},e)}))):null}u.propTypes={data:c.a.array.isRequired,color:c.a.array,backgroundColor:c.a.array,prefixCls:c.a.string,className:c.a.string,onClick:c.a.func},u.defaultProps={data:[],color:[],backgroundColor:[],prefixCls:"rc-shields",className:"",onClick:function(){}},t.default=o.a.memo(u)}])}(n(0))},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".rc-shields {\n  margin-right: 8px;\n  margin-top: 8px;\n  display: inline-flex;\n  border-radius: 0px 4px 4px 0px;\n}\n\n.rc-shields-badge {\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n  line-height: 22px;\n  height: 22px;\n  padding: 0 7px;\n  border-radius: 0px;\n  -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n  opacity: 1;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #fff;\n  box-shadow: 2px 2px rgba(66, 17, 17, 0.2);\n}\n\n.rc-shields-badge:first-child {\n  border-radius: 4px 0px 0px 4px;\n}\n.rc-shields-badge:last-child {\n  border-radius: 0px 4px 4px 0px;\n}\n.rc-shields:hover .rc-shields-badge {\n  opacity: 0.7;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,c=0,l=[],u=n(8);function s(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(h(o.parts[i],t))}else{var c=[];for(i=0;i<o.parts.length;i++)c.push(h(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:c}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var l=c++;n=i||(i=b(t)),r=m.bind(null,n,l,!1),o=m.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return s(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(c=r[i.id]).refs--,o.push(c)}e&&s(f(e,t),t);for(a=0;a<o.length;a++){var c;if(0===(c=o[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete r[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);