!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(8)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,'@import url(<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">);',""]);var r=n(4)(n(5));t.push([e.i,"html {\n  font-size: 10px; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  width: 100%;\n  height: 100vh;\n  background-image: url("+r+');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Josefin Sans", sans-serif; }\n\n#calculator {\n  width: 32rem;\n  height: 52rem;\n  border-radius: .5rem;\n  background-color: #e6e6e6;\n  box-shadow: 0px 0px 40px -1px #3b3b3b; }\n  #calculator #result {\n    height: 12rem; }\n    #calculator #result #history {\n      text-align: right;\n      height: 2rem;\n      margin: 0 2rem;\n      padding: 2rem 0 0 0;\n      font-size: 1.5rem;\n      color: #727272; }\n    #calculator #result #output {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      height: 6rem;\n      margin: 1rem 2rem;\n      font-size: 3rem; }\n    #calculator #result p {\n      margin: 0; }\n  #calculator #keyboard {\n    height: 40rem;\n    display: flex;\n    flex-wrap: wrap; }\n    #calculator #keyboard .operator,\n    #calculator #keyboard .number,\n    #calculator #keyboard .empty {\n      width: 5rem;\n      height: 5rem;\n      margin: 1.5rem;\n      border-radius: 50%;\n      border: none;\n      font-weight: 900;\n      font-size: 1.5rem; }\n    #calculator #keyboard .number,\n    #calculator #keyboard .empty {\n      background-color: #e6e6e6; }\n    #calculator #keyboard .number,\n    #calculator #keyboard .operator {\n      cursor: pointer; }\n    #calculator #keyboard .number:active,\n    #calculator #keyboard .operator:active {\n      font-size: 1.2rem; }\n    #calculator #keyboard .number:focus,\n    #calculator #keyboard .operator:focus {\n      outline: 0; }\n    #calculator #keyboard .operator {\n      font-size: 2rem; }\n    #calculator #keyboard #point {\n      background-color: #f7d852; }\n    #calculator #keyboard #divide {\n      background-color: #20b2aa; }\n    #calculator #keyboard #multiply {\n      background-color: #ffa500; }\n    #calculator #keyboard #minus {\n      background-color: #f08080; }\n    #calculator #keyboard #plus {\n      background-color: #7d93e0; }\n    #calculator #keyboard #equals {\n      background-color: #9477af; }\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"9f7afa48573135002d991b8df6dead6f.png"},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,s=0,l=[],f=n(7);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],t))}else{var c=[];for(i=0;i<r.parts.length;i++)c.push(g(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function b(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),b(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=s++;n=u||(u=m(t)),r=k.bind(null,n,i,!1),o=k.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),b(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(c=a[i.id]).refs--,r.push(c)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}};var v,x=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(module,__webpack_exports__,__webpack_require__){"use strict";const output=document.querySelector("#output-value"),historyValue=document.querySelector("#history-value"),numbers=document.querySelectorAll(".number"),operators=document.querySelectorAll(".operator"),calculate=()=>{output.innerText=eval(output.innerText)},showHistory=e=>{historyValue.innerText=e},clear=()=>{output.innerText=""},backspace=()=>{let e=output.innerText;e=e.substr(0,e.length-1),output.innerText=e},insertValue=e=>{if("clear"!=e.target.id&&"backspace"!=e.target.id&&"equals"!=e.target.id?output.innerText+=e.target.innerText:"clear"==e.target.id?clear():"backspace"==e.target.id&&backspace(),"equals"==e.target.id){const e=`${output.innerText} =`;calculate(),showHistory(e)}};numbers.forEach(e=>e.addEventListener("click",insertValue)),operators.forEach(e=>e.addEventListener("click",insertValue))}]);