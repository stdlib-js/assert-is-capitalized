// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,i=t.toString,n=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,c=t.__lookupSetter__,s=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,s){var l,p,u,f;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof s||null===s||"[object Array]"===i.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((p="value"in s)&&(o.call(e,r)||c.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=s.value,e.__proto__=l):e[r]=s.value),u="get"in s,f="set"in s,p&&(u||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&n&&n.call(e,r,s.get),f&&a&&a.call(e,r,s.set),e};function l(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(e){return"string"==typeof e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return u&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString,d=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",b=f()?function(e){var r,t,i,n,a;if(null==e)return g.call(e);t=e[h],a=h,r=null!=(n=e)&&d.call(n,a);try{e[h]=void 0}catch(r){return g.call(e)}return i=g.call(e),r?e[h]=t:delete e[h],i}:function(e){return g.call(e)},y=String.prototype.valueOf,w=f();function v(e){return"object"==typeof e&&(e instanceof String||(w?function(e){try{return y.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function m(e){return p(e)||v(e)}function _(e){return"number"==typeof e}function S(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function E(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+S(n):S(n)+e,i&&(e="-"+e)),e}l(m,"isPrimitive",p),l(m,"isObject",v);var x=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function j(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!_(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=E(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=E(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===k.call(e.specifier)?k.call(t):x.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function T(e){return"string"==typeof e}var V=Math.abs,C=String.prototype.toLowerCase,O=String.prototype.toUpperCase,$=String.prototype.replace,F=/e\+(\d)$/,A=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,R=/\.0$/,Z=/\.0*e/,G=/(\..*[^0])0*e/;function L(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!_(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":V(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=$.call(t,G,"$1e"),t=$.call(t,Z,"e"),t=$.call(t,R,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=$.call(t,F,"e+0$1"),t=$.call(t,A,"e-0$1"),e.alternate&&(t=$.call(t,I,"$1."),t=$.call(t,P,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===O.call(e.specifier)?O.call(t):C.call(t)}function W(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function M(e,r,t){var i=r-e.length;return i<0?e:e=t?e+W(i):W(i)+e}var U=String.fromCharCode,z=isNaN,N=Array.isArray;function X(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function q(e){var r,t,i,n,a,o,c,s,l;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(T(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=X(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,z(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,z(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=j(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!z(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=z(a)?String(i.arg):U(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=L(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=E(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=M(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function H(e){var r,t,i,n;for(t=[],n=0,i=B.exec(e);i;)(r=e.slice(n,B.lastIndex-i[0].length)).length&&t.push(r),t.push(D(i)),n=B.lastIndex,i=B.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function J(e){return"string"==typeof e}function K(e){var r,t,i;if(!J(e))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=H(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return q.apply(null,t)}return function(e){var r;return!(!p(e)||""===e)&&(r=e[0])===function(e){if(!p(e))throw new TypeError(K("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}(r)&&r!==function(e){if(!p(e))throw new TypeError(K("invalid argument. Must provide a string. Value: `%s`.",e));return e.toLowerCase()}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isCapitalized=r();
//# sourceMappingURL=browser.js.map
