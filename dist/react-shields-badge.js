!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("ReactShieldsBadge",["react"],t):"object"==typeof exports?exports.ReactShieldsBadge=t(require("react")):e.ReactShieldsBadge=t(e.react)}(window,function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=c(r(1)),a=c(r(2)),u=c(r(3));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default.backgroundColor,i=a.default.color,f=a.default.colorMap,p=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),o(t,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.prefixCls,o=this.props.data,a=this.props,u=a.backgroundColor,c=a.color;return u=0===u.length?l:u,c=0===c.length?i:c,u=u.map(function(e){return f[e]||e}),c=c.map(function(e){return f[e]||e}),n.default.createElement("span",{title:t,className:r,onClick:this.props.onClick},o.map(function(e,t){return n.default.createElement("span",{className:r+"-badge",key:t,style:{backgroundColor:u[t%u.length],color:c[t%c.length]}},e)}))}}]),t}();p.propTypes={data:u.default.array.isRequired,color:u.default.array,backgroundColor:u.default.array,prefixCls:u.default.string,onClick:u.default.func},p.defaultProps={data:[],color:[],backgroundColor:[],prefixCls:"rc-shields",onClick:function(){}},t.default=p},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={backgroundColor:["black","blue","brightgreen","red","orange","green","yellowgreen","yellow","lightgrey"],color:["#fff"],colorMap:{red:"#d7624b",orange:"#f27e3f",green:"#96c40f",brightgreen:"#4cc61f",yellowgreen:"#a1a328",yellow:"#d6ae22",lightgrey:"#9e9e9e",blue:"#0f80c0",black:"#5b5b5b"}}},function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";var o=r(5);function n(){}e.exports=function(){function e(e,t,r,n,a,u){if(u!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])});