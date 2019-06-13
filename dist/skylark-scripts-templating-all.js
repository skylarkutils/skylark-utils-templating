/**
 * skylark-scripts-templating - The skylark template engine library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,i=e.require,a="function"==typeof n&&n.amd,o=!a&&"undefined"!=typeof exports;if(!a&&!n){var s={};n=e.define=function(t,r,e){"function"==typeof e?(s[t]={factory:e,deps:r.map(function(r){return function(t,r){if("."!==t[0])return t;var e=r.split("/"),n=t.split("/");e.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?e.pop():e.push(n[i]));return e.join("/")}(r,t)}),resolved:!1,exports:null},i(t)):s[t]={factory:null,resolved:!0,exports:e}},i=e.require=function(t){if(!s.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var r=s[t];if(!r.resolved){var n=[];r.deps.forEach(function(t){n.push(i(t))}),r.exports=r.factory.apply(e,n)||null,r.resolved=!0}return r.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-langx/_attach",[],function(){return function(t,r,e){"string"==typeof r&&(r=r.split("."));for(var n=r.length,i=t,a=0,o=r[a++];a<n;)i=i[o]=i[o]||{},o=r[a++];return i[o]=e}}),r("skylark-langx/skylark",["./_attach"],function(t){var r={attach:function(e,n){return t(r,e,n)}};return r}),r("skylark-scripts-templating/templating",["skylark-langx/skylark"],function(t){return t.attach("scripts.templating",{helpers:{}})}),r("skylark-langx/types",[],function(){var t,r={}.toString,e=(t={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(r){t["[object "+r+"]"]=r.toLowerCase()}),function(e){return null==e?String(e):t[r.call(e)]||"object"});function n(t){var r;for(r in t)if(null!==t[r])return!1;return!0}function i(t){return"function"==e(t)}function a(t){return t&&t.nodeType}function o(t){return"number"==typeof t}function s(t){return"object"==e(t)}function l(t){return"string"==typeof t}function u(t){return t&&t==t.window}return{isArray:function(t){return t&&t.constructor===Array},isArrayLike:function(t){return!l(t)&&!a(t)&&"number"==typeof t.length&&!i(t)},isBoolean:function(t){return"boolean"==typeof t},isDefined:function(t){return void 0!==t},isDocument:function(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE},isEmpty:n,isEmptyObject:n,isFunction:i,isHtmlNode:a,isNull:function(t){return"null"===e(t)},isNumber:o,isNumeric:o,isObject:s,isPlainObject:function(t){return s(t)&&!u(t)&&Object.getPrototypeOf(t)==Object.prototype},isString:l,isSameOrigin:function(t){if(t){var r=location.protocol+"//"+location.hostname;return location.port&&(r+=":"+location.port),t.startsWith(r)}},isSymbol:function(t){return"symbol"==typeof t||isObjectLike(t)&&objectToString.call(t)==symbolTag},isUndefined:function(t){return void 0===t},isWindow:u,type:e}}),r("skylark-langx/numbers",["./types"],function(t){var r=t.isObject,e=t.isSymbol,n=1/0,i=1.7976931348623157e308,a=NaN,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt;function c(t){if(!t)return 0===t?t:0;if((t=p(t))===n||t===-n){var r=t<0?-1:1;return r*i}return t==t?t:0}function p(t){if("number"==typeof t)return t;if(e(t))return a;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=l.test(t);return i||u.test(t)?f(t.slice(2),i?2:8):s.test(t)?a:+t}return{toFinite:c,toNumber:p,toInteger:function(t){var r=c(t),e=r%1;return r==r?e?r-e:r:0}}}),r("skylark-langx/objects",["./_attach","./types","./numbers"],function(t,r,e){var n,i,a=Object.prototype.hasOwnProperty,o=Array.prototype.slice,s=r.isBoolean,l=r.isFunction,u=r.isObject,f=r.isPlainObject,c=r.isArray,p=r.isArrayLike,h=r.isString,v=e.toInteger;var y,g,d="undefined"!=typeof Symbol?Symbol.prototype:null;function m(t){if(!u(t))return[];var r=[];for(var e in t)r.push(e);return r}function k(t,r){if(!c(r))return null!=t&&a.call(t,r);for(var e=r.length,n=0;n<e;n++){var i=r[n];if(null==t||!a.call(t,i))return!1;t=t[i]}return!!e}function x(t,r,e,n){for(var i in r)n&&void 0!==t[i]||(e&&(f(r[i])||c(r[i]))?(f(r[i])&&!f(t[i])&&(t[i]={}),c(r[i])&&!c(t[i])&&(t[i]=[]),x(t[i],r[i],e,n)):void 0!==r[i]&&(t[i]=r[i]));return t}function b(t){var r=o.call(arguments,0),e=r.shift(),n=!1;return s(r[r.length-1])&&(n=r.pop()),{target:e,sources:r,deep:n}}function _(){var t=b.apply(this,arguments);return t.sources.forEach(function(r){x(t.target,r,t.deep,!1)}),t.target}function O(t){for(var r=m(t),e=r.length,n=Array(e),i=0;i<e;i++)n[i]=t[r[i]];return n}return n=function(t,r,e,n){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return!1;if(t!=t)return r!=r;var a=typeof t;return("function"===a||"object"===a||"object"==typeof r)&&i(t,r,e,n)},i=function(t,r,e,i){var a=toString.call(t);if(a!==toString.call(r))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+t==""+r;case"[object Number]":return+t!=+t?+r!=+r:0==+t?1/+t==1/r:+t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object Symbol]":return d.valueOf.call(t)===d.valueOf.call(r)}var o="[object Array]"===a;if(!o){if("object"!=typeof t||"object"!=typeof r)return!1;var s=t.constructor,u=r.constructor;if(s!==u&&!(l(s)&&s instanceof s&&l(u)&&u instanceof u)&&"constructor"in t&&"constructor"in r)return!1}e=e||[],i=i||[];for(var f=e.length;f--;)if(e[f]===t)return i[f]===r;if(e.push(t),i.push(r),o){if((f=t.length)!==r.length)return!1;for(;f--;)if(!n(t[f],r[f],e,i))return!1}else{var c,p=Object.keys(t);if(f=p.length,Object.keys(r).length!==f)return!1;for(;f--;)if(c=p[f],void 0===r[c]||!n(t[c],r[c],e,i))return!1}return e.pop(),i.pop(),!0},{allKeys:m,attach:t,clone:function t(r,e){var n;if(void 0===r||null===r)n=r;else if(e&&r.clone)n=r.clone();else if(c(r)){n=[];for(var i=0;i<r.length;i++)n.push(t(r[i]))}else if(f(r))for(var a in n={},r)n[a]=t(r[a]);else n=r;return n},defaults:(y=m,g=!0,function(t){var r=arguments.length;if(g&&(t=Object(t)),r<2||null==t)return t;for(var e=1;e<r;e++)for(var n=arguments[e],i=y(n),a=i.length,o=0;o<a;o++){var s=i[o];g&&void 0!==t[s]||(t[s]=n[s])}return t}),each:function(t,r){var e,n,i,a;if(t)if(void 0===(e=t.length)){for(n in t)if(t.hasOwnProperty(n)&&(a=t[n],!1===r.call(a,n,a)))break}else for(i=0;i<e&&(a=t[i],!1!==r.call(a,i,a));i++);return this},extend:function(t){var r,e=o.call(arguments,1);"boolean"==typeof t&&(r=t,t=e.shift());0==e.length&&(e=[t],t=this);return e.forEach(function(e){_(t,e,r)}),t},has:k,isEqual:function(t,r){return n(t,r)},includes:function(t,r,e,n){t=p(t)?t:O(t),e=e&&!n?v(e):0;var i=t.length;e<0&&(e=nativeMax(i+e,0));return h(t)?e<=i&&t.indexOf(r,e)>-1:!!i&&baseIndexOf(t,r,e)>-1},isMatch:function(t,r){var e=e(r),n=e.length;if(null==t)return!n;for(var i=Object(t),a=0;a<n;a++){var o=e[a];if(r[o]!==i[o]||!(o in i))return!1}return!0},keys:function(t){if(u(t))return[];var r=[];for(var e in t)k(t,e)&&r.push(e);return r},mixin:_,omit:function(t,r,e){if(!t)return null;for(var n=_({},t),i=1;i<arguments.length;i++){var a=arguments[i];a in t&&delete n[a]}return n},pick:function(t,r,e){if(!t)return null;for(var n={},i=1;i<arguments.length;i++){var a=arguments[i];a in t&&(n[a]=t[a])}return n},removeItem:function(t,r){if(c(t)){var e=t.indexOf(r);-1!=e&&t.splice(e,1)}else if(f(t))for(var n in t)if(t[n]==r){delete t[n];break}return this},result:function(t,r,e){c(r)||(r=r.split("."));var n=r.length;if(!n)return l(e)?e.call(t):e;for(var i=0;i<n;i++){var a=null==t?void 0:t[r[i]];void 0===a&&(a=e,i=n),t=l(a)?a.call(t):a}return t},safeMixin:function(){var t=b.apply(this,arguments);return t.sources.forEach(function(r){x(t.target,r,t.deep,!0)}),t.target},values:O}}),r("skylark-langx/arrays",["./types"],function(t,r){var e=Array.prototype.filter,n=t.isArrayLike;function i(t,r,e,n){for(var i=t.length,a=e+(n?1:-1);n?a--:++a<i;)if(r(t[a],a,t))return a;return-1}function a(t){return t!=t}function o(t){if(n(t)){for(var r=[],e=0;e<t.length;e++){var i=t[e];if(n(i))for(var a=0;a<i.length;a++)r.push(i[a]);else r.push(i)}return r}return t}return{baseFindIndex:i,baseIndexOf:function(t,r,e){if(r!=r)return i(t,a,e);var n=e-1,o=t.length;for(;++n<o;)if(t[n]===r)return n;return-1},compact:function(t){return e.call(t,function(t){return null!=t})},first:function(t,r){return r?t.slice(0,r):t[0]},filter:function(t,r){return e.call(t,r)},flatten:o,inArray:function(t,r){if(!r)return-1;var e;if(r.indexOf)return r.indexOf(t);e=r.length;for(;e--;)if(r[e]===t)return e;return-1},makeArray:function(t,r,e){if(n(t))return(e||[]).concat(Array.prototype.slice.call(t,r||0));return[t]},merge:function(t,r){var e=r.length,n=t.length,i=0;if("number"==typeof e)for(;i<e;i++)t[n++]=r[i];else for(;void 0!==r[i];)t[n++]=r[i++];return t.length=n,t},forEach:function(t,r){if(t.forEach)return t.forEach(r);for(var e=0;e<t.length;e++)r(t[e],e)},map:function(t,r){var e,i,a,s=[];if(n(t))for(i=0;i<t.length;i++)null!=(e=r.call(t[i],t[i],i))&&s.push(e);else for(a in t)null!=(e=r.call(t[a],t[a],a))&&s.push(e);return o(s)},reduce:function(t,r,e){return Array.prototype.reduce.call(t,r,e)},uniq:function(t){return e.call(t,function(r,e){return t.indexOf(r)==e})}}}),r("skylark-langx/klass",["./arrays","./objects","./types"],function(t,r,e){var n=t.uniq,i=r.has,a=r.mixin,o=e.isArray,s=e.isDefined;var l=function(){function t(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function r(l,u,f,c){o(u)&&(c=f,f=u,u=null),u=u||Object,s(f)&&!o(f)&&(c=f,f=!1);var p=u;f&&(f=function(t,r){var e=[];return r.forEach(function(t){if(i(t,"__mixins__"))throw new Error("nested mixins");for(var r=[];t;)r.unshift(t),t=t.superclass;e=e.concat(r)}),(e=(e=n(e)).filter(function(r){for(var e=t;e;){if(r===e)return!1;if(i(e,"__mixins__"))for(var n=e.__mixins__,a=0;a<n.length;a++)if(n[a]===r)return!1;e=e.superclass}return!0})).length>0&&e}(p,f)),f&&(p=function(t,r){for(var e=t,n=0;n<r.length;n++){var i=new Function;i.prototype=Object.create(e.prototype),i.__proto__=e,i.superclass=null,a(i.prototype,r[n].prototype),i.prototype.__mixin__=r[n],e=i}return e}(p,f));var h=l.klassName||"",v=new Function("return function "+h+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return v.prototype=Object.create(p.prototype),v.prototype.constructor=v,v.superclass=u,v.__proto__=p,v._constructor||(v._constructor=t),f&&(v.__mixins__=f),v.partial||(v.partial=function(t,r){return function(t,r,n){var i=t.prototype,a=t.superclass.prototype,o=n&&n.noOverrided;n&&n.overrides;for(var s in r)if("constructor"!==s){var l=r[s];"function"==typeof r[s]?i[s]=l._constructor||o||"function"!=typeof a[s]?l:function(t,r,e){return function(){var t=this.overrided;this.overrided=e;var n=r.apply(this,arguments);return this.overrided=t,n}}(0,l,a[s]):e.isPlainObject(l)&&null!==l&&l.get?Object.defineProperty(i,s,l):i[s]=l}return t}(this,t,r)}),v.inherit||(v.inherit=function(t,e,n){return r(t,this,e,n)}),v.partial(l,c),v}}();return l}),r("skylark-langx/Evented",["./klass","./arrays","./objects","./types"],function(t,r,e,n){var i=Array.prototype.slice,a=r.compact,o=n.isDefined,s=n.isPlainObject,l=n.isFunction,u=n.isString,f=n.isEmptyObject,c=e.mixin;function p(t){var r=(""+t).split(".");return{name:r[0],ns:r.slice(1).join(" ")}}var h=t({on:function(t,r,e,n,i,a){var o=this,f=this._hub||(this._hub={});return s(t)?(i=n,each(t,function(t,n){o.on(t,r,e,n,i,a)}),this):(u(r)||l(n)||(i=n,n=e,e=r,r=void 0),l(e)&&(i=n,n=e,e=null),u(t)&&(t=t.split(/\s/)),t.forEach(function(t){var o=p(t),s=o.name,l=o.ns;(f[s]||(f[s]=[])).push({fn:n,selector:r,data:e,ctx:i,ns:l,one:a})}),this)},one:function(t,r,e,n,i){return this.on(t,r,e,n,i,1)},trigger:function(t){if(!this._hub)return this;var r=this;u(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var e=i.call(arguments,1);return e=o(e)?[t].concat(e):[t],[t.type||t.name,"all"].forEach(function(n){var i=p(n),o=i.name,s=i.ns,l=r._hub[o];if(l){for(var u=l.length,f=!1,h=0;h<u;h++){var v=l[h];(!s||v.ns&&v.ns.startsWith(s))&&(t.data?v.data&&(t.data=c({},v.data,t.data)):t.data=v.data||null,v.fn.apply(v.ctx,e),v.one&&(l[h]=null,f=!0))}f&&(r._hub[n]=a(l))}}),this},listened:function(t){var r=(this._hub||(this._events={}))[t]||[];return r.length>0},listenTo:function(t,r,e,n){if(!t)return this;u(e)&&(e=this[e]),n?t.one(r,e,this):t.on(r,e,this);for(var i,a=this._listeningTo||(this._listeningTo=[]),o=0;o<a.length;o++)if(a[o].obj==t){i=a[o];break}i||a.push(i={obj:t,events:{}});var s=i.events,l=s[r]=s[r]||[];return-1==l.indexOf(e)&&l.push(e),this},listenToOnce:function(t,r,e){return this.listenTo(t,r,e,1)},off:function(t,r){var e=this._hub||(this._hub={});return u(t)&&(t=t.split(/\s/)),t.forEach(function(t){var n=p(t),i=n.name,a=n.ns,o=e[i];if(o){var s=[];if(r||a)for(var l=0,u=o.length;l<u;l++)r&&o[l].fn!==r&&o[l].fn._!==r?s.push(o[l]):!a||o[l].ns&&0==o[l].ns.indexOf(a)||s.push(o[l]);s.length?e[i]=s:delete e[i]}}),this},unlistenTo:function(t,r,e){var n=this._listeningTo;if(!n)return this;for(var i=0;i<n.length;i++){var o=n[i];if(!t||t==o.obj){var s=o.events;for(var l in s)if(!r||r==l){for(var u=s[l],c=0;c<u.length;c++)e&&e!=u[i]||(o.obj.off(l,u[i],this),u[i]=null);u=s[l]=a(u),f(u)&&(s[l]=null)}f(s)&&(n[i]=null)}}return n=this._listeningTo=a(n),f(n)&&(this._listeningTo=null),this}});return h}),r("skylark-scripts-templating/helpers/each",["skylark-langx/types","../templating"],function(t,r){return r.helpers.each=function(r,e){var n="",i=0;if(t.isFunction(r)&&(r=r.call(this)),t.isArray(r)){for(e.hash.reverse&&(r=r.reverse()),i=0;i<r.length;i++)r[i].templater=this.templater,n+=e.fn(r[i],{first:0===i,last:i===r.length-1,index:i});e.hash.reverse&&(r=r.reverse())}else for(var a in r)i++,r[a].templater=this.templater,n+=e.fn(r[a],{key:a});return i>0?n:e.inverse(this)}}),r("skylark-scripts-templating/helpers/if",["skylark-langx/types","../templating"],function(t,r){return r.helpers.if=function(r,e){return t.isFunction(r)&&(r=r.call(this)),r?e.fn(this,e.data):e.inverse(this,e.data)}}),r("skylark-scripts-templating/helpers/join",["skylark-langx/types","../templating"],function(t,r){return r.helpers.join=function(r,e){return t.isFunction(r)&&(r=r.call(this)),r.join(e.hash.delimiter)}}),r("skylark-scripts-templating/helpers/js",["skylark-langx/types","../templating"],function(t,r){return r.helpers.js=function(t,r){var e;return e=t.indexOf("return")>=0?"(function(){"+t+"})":"(function(){return ("+t+")})",eval.call(this,e).call(this)}}),r("skylark-scripts-templating/helpers/js_compare",["skylark-langx/types","../templating"],function(t,r){return r.helpers.js_compare=function(t,r){var e;e=t.indexOf("return")>=0?"(function(){"+t+"})":"(function(){return ("+t+")})";var n=eval.call(this,e).call(this);return n?r.fn(this,r.data):r.inverse(this,r.data)}}),r("skylark-scripts-templating/helpers/partial",["skylark-langx/types","../templating"],function(t,r){return r.helpers.partial=function(t,r){const e=this,n=this.templater._partials[t];return!n||n&&!n.template?"":(n.compiled||(n.compiled=this.templater.compile(n.template)),Object.keys(r.hash).forEach(function(t){e[t]=r.hash[t]}),n.compiled(e,r.data,r.root))}}),r("skylark-scripts-templating/helpers/unless",["skylark-langx/types","../templating"],function(t,r){return r.helpers.unless=function(r,e){return t.isFunction(r)&&(r=r.call(this)),r?e.inverse(this,e.data):e.fn(this,e.data)}}),r("skylark-scripts-templating/helpers/with",["skylark-langx/types","../templating"],function(t,r){return r.helpers.with=function(r,e){return t.isFunction(r)&&(r=r.call(this)),e.fn(r)}}),r("skylark-scripts-templating/Templater",["skylark-langx/types","skylark-langx/objects","skylark-langx/Evented","./templating","./helpers/each","./helpers/if","./helpers/join","./helpers/js","./helpers/js_compare","./helpers/partial","./helpers/unless","./helpers/with"],function(r,e,n,i,a,o,s,l,u,f,c,p){"use strict";function h(t){var r,e,n,i=t.replace(/[{}#}]/g,"").split(" "),a=[];for(e=0;e<i.length;e++){var o=i[e];if(0===e)a.push(o);else if(0===o.indexOf('"'))if(2===o.match(/"/g).length)a.push(o);else{for(r=0,n=e+1;n<i.length;n++)if(o+=" "+i[n],i[n].indexOf('"')>=0){r=n,a.push(o);break}r&&(e=r)}else if(o.indexOf("=")>0){var s=o.split("="),l=s[0],u=s[1];if(2!==u.match(/"/g).length){for(r=0,n=e+1;n<i.length;n++)if(u+=" "+i[n],i[n].indexOf('"')>=0){r=n;break}r&&(e=r)}var f=[l,u.replace(/"/g,"")];a.push(f)}else a.push(o)}return a}var v=n.inherit({klassName:"Templater",init:function(t,r){this._options=t||{},this._helpers=e.mixin({each:a,if:o,join:s,js:l,js_compare:u,partial:f,unless:c,with:p},r),this._partials={},this._cache={}},compile:function(e){var n=this;function i(t,r){return t.content?l(t.content,r):function(){return""}}function a(t,r){return t.inverseContent?l(t.inverseContent,r):function(){return""}}function o(t,r){var e,n,i=0;if(0===t.indexOf("../")){i=t.split("../").length-1;var a=r.split("_")[1]-i;r="ctx_"+(a>=1?a:1),n=t.split("../")[i].split(".")}else 0===t.indexOf("@global")?(r="$.Template7.global",n=t.split("@global.")[1].split(".")):0===t.indexOf("@root")?(r="ctx_1",n=t.split("@root.")[1].split(".")):n=t.split(".");e=r;for(var o=0;o<n.length;o++){var s=n[o];0===s.indexOf("@")?o>0?e+="[(data && data."+s.replace("@","")+")]":e="(data && data."+t.replace("@","")+")":isFinite(s)?e+="["+s+"]":0===s.indexOf("this")?e=s.replace("this",r):e+="."+s}return e}function s(t,r){for(var e=[],n=0;n<t.length;n++)0===t[n].indexOf('"')?e.push(t[n]):e.push(o(t[n],r));return e.join(", ")}function l(e,l){if(l=l||1,"string"!=typeof(e=e||t.template))throw new Error("Template7: Template must be a string");var u=function(t){var e,n,i=[];if(!t)return[];var a=t.split(/({{[^{^}]*}})/);for(e=0;e<a.length;e++){var o=a[e];if(""!==o)if(o.indexOf("{{")<0)i.push({type:"plain",content:o});else{if(o.indexOf("{/")>=0)continue;if(o.indexOf("{#")<0&&o.indexOf(" ")<0&&o.indexOf("else")<0){i.push({type:"variable",contextName:o.replace(/[{}]/g,"")});continue}var s=h(o),l=s[0],u=">"===l,f=[],c={};for(n=1;n<s.length;n++){var p=s[n];r.isArray(p)?c[p[0]]="false"!==p[1]&&p[1]:f.push(p)}if(o.indexOf("{#")>=0){var v,y="",g="",d=0,m=!1,k=!1,x=0;for(n=e+1;n<a.length;n++)if(a[n].indexOf("{{#")>=0&&x++,a[n].indexOf("{{/")>=0&&x--,a[n].indexOf("{{#"+l)>=0)y+=a[n],k&&(g+=a[n]),d++;else if(a[n].indexOf("{{/"+l)>=0){if(!(d>0)){v=n,m=!0;break}d--,y+=a[n],k&&(g+=a[n])}else a[n].indexOf("else")>=0&&0===x?k=!0:(k||(y+=a[n]),k&&(g+=a[n]));m&&(v&&(e=v),i.push({type:"helper",helperName:l,contextName:f,content:y,inverseContent:g,hash:c}))}else o.indexOf(" ")>0&&(u&&(l="partial",f[0]&&(0===f[0].indexOf("[")?f[0]=f[0].replace(/[[\]]/g,""):f[0]=f[0].replace(/"|'/g,""))),i.push({type:"helper",helperName:l,contextName:f,hash:c}))}}return i}(e);if(0===u.length)return function(){return""};var f,c="ctx_"+l,p="(function ("+c+", data) {\n";for(1===l&&(p+=c+".templater = this\n",p+="function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n",p+="function isFunction(func){return (typeof func === 'function');}\n",p+='function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n'),p+="var r = '';\n",f=0;f<u.length;f++){var v,y,g=u[f];if("plain"!==g.type){if("variable"===g.type&&(v=o(g.contextName,c),p+="r += c("+v+", "+c+");"),"helper"===g.type)if(g.helperName in n._helpers)y=s(g.contextName,c),p+="r += "+c+".templater._helpers."+g.helperName+".call("+c+", "+(y&&y+", ")+"{hash:"+JSON.stringify(g.hash)+", data: data || {}, fn: "+i(g,l+1)+", inverse: "+a(g,l+1)+", root: ctx_1});";else{if(g.contextName.length>0)throw new Error('Missing helper: "'+g.helperName+'"');v=o(g.helperName,c),p+="if ("+v+") {",p+="if (isArray("+v+")) {",p+="r += "+c+".templater._helpers.each.call("+c+", "+v+", {hash:"+JSON.stringify(g.hash)+", data: data || {}, fn: "+i(g,l+1)+", inverse: "+a(g,l+1)+", root: ctx_1});",p+="}else {",p+="r += "+c+".templater._helpers.with.call("+c+", "+v+", {hash:"+JSON.stringify(g.hash)+", data: data || {}, fn: "+i(g,l+1)+", inverse: "+a(g,l+1)+", root: ctx_1});",p+="}}"}}else p+="r +='"+g.content.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/'/g,"\\'")+"';"}return p+="\nreturn r;})",eval.call(window,p)}var u=this._cache[e];if(!u){var f=l(e);u=this._cache[e]=function(){return f.apply(n,arguments)}}return u},render:function(t,r){var e=this.compile(t);return e(r)},registerHelper:function(t,r){this._helpers[t]=r},unregisterHelper:function(t){this._helpers[t]=void 0,delete this._helpers[t]},registerPartial:function(t,r){this._partials[t]={template:r}},unregisterPartial:function(t){this._partials[t]&&(this._partials[t]=void 0,delete this._partials[t])}}),y=v.defaultTemplater=new v;return["registerHelper","registerPartial","unregisterHelper","unregisterPartial","render","compile"].forEach(function(t){i[t]=function(){return v.prototype[t].apply(y,arguments)}}),i.Templater=v}),r("skylark-scripts-templating/main",["./templating","./Templater"],function(t){return t}),r("skylark-scripts-templating",["skylark-scripts-templating/main"],function(t){return t})}(n),!a){var l=i("skylark-langx/skylark");o?module.exports=l:e.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-scripts-templating-all.js.map