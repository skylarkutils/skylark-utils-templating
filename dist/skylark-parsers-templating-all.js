/**
 * skylark-parsers-templating - The skylark template engine library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var e=n.define,i=n.require,a="function"==typeof e&&e.amd,s=!a&&"undefined"!=typeof exports;if(!a&&!e){var l={};e=n.define=function(t,r,n){"function"==typeof n?(l[t]={factory:n,deps:r.map(function(r){return function(t,r){if("."!==t[0])return t;var n=r.split("/"),e=t.split("/");n.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?n.pop():n.push(e[i]));return n.join("/")}(r,t)}),resolved:!1,exports:null},i(t)):l[t]={factory:null,resolved:!0,exports:n}},i=n.require=function(t){if(!l.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var r=l[t];if(!r.resolved){var e=[];r.deps.forEach(function(t){e.push(i(t))}),r.exports=r.factory.apply(n,e)||null,r.resolved=!0}return r.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,n){r("skylark-langx-ns/_attach",[],function(){return function(t,r,n){"string"==typeof r&&(r=r.split("."));for(var e=r.length,i=t,a=0,s=r[a++];a<e;)i=i[s]=i[s]||{},s=r[a++];return i[s]=n}}),r("skylark-langx-ns/ns",["./_attach"],function(t){var r={attach:function(n,e){return t(r,n,e)}};return r}),r("skylark-langx-ns/main",["./ns"],function(t){return t}),r("skylark-langx-ns",["skylark-langx-ns/main"],function(t){return t}),r("skylark-langx/skylark",["skylark-langx-ns"],function(t){return t}),r("skylark-parsers-templating/templating",["skylark-langx/skylark"],function(t){return t.attach("scripts.templating",{helpers:{}})}),r("skylark-langx-types/types",["skylark-langx-ns"],function(t){var r,n={}.toString,e=(r={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(t){r["[object "+t+"]"]=t.toLowerCase()}),function(t){return null==t?String(t):r[n.call(t)]||"object"});function i(t){var r;for(r in t)if(null!==t[r])return!1;return!0}function a(t){return"function"==e(t)}function s(t){return t&&t.nodeType}function l(t){return"number"==typeof t}function o(t){return"object"==e(t)}function u(t){return"string"==typeof t}function f(t){return t&&t==t.window}return t.attach("langx.types",{isArray:function(t){return t&&t.constructor===Array},isArrayLike:function(t){return!u(t)&&!s(t)&&"number"==typeof t.length&&!a(t)},isBoolean:function(t){return"boolean"==typeof t},isDefined:function(t){return void 0!==t},isDocument:function(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE},isEmpty:i,isEmptyObject:i,isFunction:a,isHtmlNode:s,isNull:function(t){return"null"===e(t)},isNumber:l,isNumeric:l,isObject:o,isPlainObject:function(t){return o(t)&&!f(t)&&Object.getPrototypeOf(t)==Object.prototype},isString:u,isSameOrigin:function(t){if(t){var r=location.protocol+"//"+location.hostname;return location.port&&(r+=":"+location.port),t.startsWith(r)}},isSymbol:function(t){return"symbol"==typeof t||isObjectLike(t)&&objectToString.call(t)==symbolTag},isUndefined:function(t){return void 0===t},isWindow:f,type:e})}),r("skylark-langx-types/main",["./types"],function(t){return t}),r("skylark-langx-types",["skylark-langx-types/main"],function(t){return t}),r("skylark-langx/types",["skylark-langx-types"],function(t){return t}),r("skylark-langx-numbers/numbers",["skylark-langx-ns","skylark-langx-types"],function(t,r){var n=r.isObject,e=r.isSymbol,i=1/0,a=1.7976931348623157e308,s=NaN,l=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;function p(t){if(!t)return 0===t?t:0;if((t=h(t))===i||t===-i){var r=t<0?-1:1;return r*a}return t==t?t:0}function h(t){if("number"==typeof t)return t;if(e(t))return s;if(n(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=n(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):o.test(t)?s:+t}return t.attach("langx.numbers",{toFinite:p,toNumber:h,toInteger:function(t){var r=p(t),n=r%1;return r==r?n?r-n:r:0}})}),r("skylark-langx-numbers/main",["./numbers"],function(t){return t}),r("skylark-langx-numbers",["skylark-langx-numbers/main"],function(t){return t}),r("skylark-langx-objects/objects",["skylark-langx-ns/ns","skylark-langx-ns/_attach","skylark-langx-types","skylark-langx-numbers"],function(t,r,n,e){var i,a,s=Object.prototype.hasOwnProperty,l=Array.prototype.slice,o=n.isBoolean,u=n.isFunction,f=n.isObject,c=n.isPlainObject,p=n.isArray,h=n.isArrayLike,y=n.isString,g=e.toInteger;var v,k,m="undefined"!=typeof Symbol?Symbol.prototype:null;function x(t){if(!f(t))return[];var r=[];for(var n in t)r.push(n);return r}function d(t,r){if(!p(r))return null!=t&&s.call(t,r);for(var n=r.length,e=0;e<n;e++){var i=r[e];if(null==t||!s.call(t,i))return!1;t=t[i]}return!!n}function b(t,r,n,e){for(var i in r)e&&void 0!==t[i]||(n&&(c(r[i])||p(r[i]))?(c(r[i])&&!c(t[i])&&(t[i]={}),p(r[i])&&!p(t[i])&&(t[i]=[]),b(t[i],r[i],n,e)):void 0!==r[i]&&(t[i]=r[i]));return t}function _(t){var r=l.call(arguments,0),n=r.shift(),e=!1;return o(r[r.length-1])&&(e=r.pop()),{target:n,sources:r,deep:e}}function j(){var t=_.apply(this,arguments);return t.sources.forEach(function(r){b(t.target,r,t.deep,!1)}),t.target}function O(t){for(var r=x(t),n=r.length,e=Array(n),i=0;i<n;i++)e[i]=t[r[i]];return e}return i=function(t,r,n,e){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return!1;if(t!=t)return r!=r;var i=typeof t;return("function"===i||"object"===i||"object"==typeof r)&&a(t,r,n,e)},a=function(t,r,n,e){var a=toString.call(t);if(a!==toString.call(r))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+t==""+r;case"[object Number]":return+t!=+t?+r!=+r:0==+t?1/+t==1/r:+t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object Symbol]":return m.valueOf.call(t)===m.valueOf.call(r)}var s="[object Array]"===a;if(!s){if("object"!=typeof t||"object"!=typeof r)return!1;var l=t.constructor,o=r.constructor;if(l!==o&&!(u(l)&&l instanceof l&&u(o)&&o instanceof o)&&"constructor"in t&&"constructor"in r)return!1}n=n||[],e=e||[];for(var f=n.length;f--;)if(n[f]===t)return e[f]===r;if(n.push(t),e.push(r),s){if((f=t.length)!==r.length)return!1;for(;f--;)if(!i(t[f],r[f],n,e))return!1}else{var c,p=Object.keys(t);if(f=p.length,Object.keys(r).length!==f)return!1;for(;f--;)if(c=p[f],void 0===r[c]||!i(t[c],r[c],n,e))return!1}return n.pop(),e.pop(),!0},t.attach("langx.objects",{allKeys:x,attach:r,clone:function t(r,n){var e;if(void 0===r||null===r)e=r;else if(n&&r.clone)e=r.clone();else if(p(r)){e=[];for(var i=0;i<r.length;i++)e.push(t(r[i]))}else if(c(r))for(var a in e={},r)e[a]=t(r[a]);else e=r;return e},defaults:(v=x,k=!0,function(t){var r=arguments.length;if(k&&(t=Object(t)),r<2||null==t)return t;for(var n=1;n<r;n++)for(var e=arguments[n],i=v(e),a=i.length,s=0;s<a;s++){var l=i[s];k&&void 0!==t[l]||(t[l]=e[l])}return t}),each:function(t,r){var n,e,i,a;if(t)if(void 0===(n=t.length)){for(e in t)if(t.hasOwnProperty(e)&&(a=t[e],!1===r.call(a,e,a)))break}else for(i=0;i<n&&(a=t[i],!1!==r.call(a,i,a));i++);return this},extend:function(t){var r,n=l.call(arguments,1);"boolean"==typeof t&&(r=t,t=n.shift());0==n.length&&(n=[t],t=this);return n.forEach(function(n){j(t,n,r)}),t},has:d,isEqual:function(t,r){return i(t,r)},includes:function(t,r,n,e){t=h(t)?t:O(t),n=n&&!e?g(n):0;var i=t.length;n<0&&(n=nativeMax(i+n,0));return y(t)?n<=i&&t.indexOf(r,n)>-1:!!i&&baseIndexOf(t,r,n)>-1},isMatch:function(t,r){var n=n(r),e=n.length;if(null==t)return!e;for(var i=Object(t),a=0;a<e;a++){var s=n[a];if(r[s]!==i[s]||!(s in i))return!1}return!0},keys:function(t){if(f(t))return[];var r=[];for(var n in t)d(t,n)&&r.push(n);return r},mixin:j,omit:function(t,r,n){if(!t)return null;for(var e=j({},t),i=1;i<arguments.length;i++){var a=arguments[i];a in t&&delete e[a]}return e},pick:function(t,r,n){if(!t)return null;for(var e={},i=1;i<arguments.length;i++){var a=arguments[i];a in t&&(e[a]=t[a])}return e},removeItem:function(t,r){if(p(t)){var n=t.indexOf(r);-1!=n&&t.splice(n,1)}else if(c(t))for(var e in t)if(t[e]==r){delete t[e];break}return this},result:function(t,r,n){p(r)||(r=r.split("."));var e=r.length;if(!e)return u(n)?n.call(t):n;for(var i=0;i<e;i++){var a=null==t?void 0:t[r[i]];void 0===a&&(a=n,i=e),t=u(a)?a.call(t):a}return t},safeMixin:function(){var t=_.apply(this,arguments);return t.sources.forEach(function(r){b(t.target,r,t.deep,!0)}),t.target},values:O})}),r("skylark-langx-objects/main",["./objects"],function(t){return t}),r("skylark-langx-objects",["skylark-langx-objects/main"],function(t){return t}),r("skylark-langx/objects",["skylark-langx-objects"],function(t){return t}),r("skylark-langx-arrays/arrays",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(t,r,n){var e=Array.prototype.filter,i=r.isArrayLike;function a(t,r,n,e){for(var i=t.length,a=n+(e?1:-1);e?a--:++a<i;)if(r(t[a],a,t))return a;return-1}function s(t){return t!=t}function l(t){if(i(t)){for(var r=[],n=0;n<t.length;n++){var e=t[n];if(i(e))for(var a=0;a<e.length;a++)r.push(e[a]);else r.push(e)}return r}return t}return t.attach("langx.arrays",{baseFindIndex:a,baseIndexOf:function(t,r,n){if(r!=r)return a(t,s,n);var e=n-1,i=t.length;for(;++e<i;)if(t[e]===r)return e;return-1},compact:function(t){return e.call(t,function(t){return null!=t})},first:function(t,r){return r?t.slice(0,r):t[0]},filter:function(t,r){return e.call(t,r)},flatten:l,grep:function(t,r){var e=[];return n.each(t,function(t,n){r(n,t)&&e.push(n)}),e},inArray:function(t,r){if(!r)return-1;var n;if(r.indexOf)return r.indexOf(t);n=r.length;for(;n--;)if(r[n]===t)return n;return-1},makeArray:function(t,r,n){if(i(t))return(n||[]).concat(Array.prototype.slice.call(t,r||0));return[t]},merge:function(t,r){var n=r.length,e=t.length,i=0;if("number"==typeof n)for(;i<n;i++)t[e++]=r[i];else for(;void 0!==r[i];)t[e++]=r[i++];return t.length=e,t},forEach:function(t,r){if(t.forEach)return t.forEach(r);for(var n=0;n<t.length;n++)r(t[n],n)},map:function(t,r){var n,e,a,s=[];if(i(t))for(e=0;e<t.length;e++)null!=(n=r.call(t[e],t[e],e))&&s.push(n);else for(a in t)null!=(n=r.call(t[a],t[a],a))&&s.push(n);return l(s)},reduce:function(t,r,n){return Array.prototype.reduce.call(t,r,n)},uniq:function(t){return e.call(t,function(r,n){return t.indexOf(r)==n})}})}),r("skylark-langx-arrays/main",["./arrays"],function(t){return t}),r("skylark-langx-arrays",["skylark-langx-arrays/main"],function(t){return t}),r("skylark-langx-klass/klass",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays"],function(t,r,n,e){var i=e.uniq,a=n.has,s=n.mixin,l=r.isArray,o=r.isDefined;var u=function(){function t(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function n(e,u,f,c){l(u)&&(c=f,f=u,u=null),u=u||Object,o(f)&&!l(f)&&(c=f,f=!1);var p=u;f&&(f=function(t,r){var n=[];return r.forEach(function(t){if(a(t,"__mixins__"))throw new Error("nested mixins");for(var r=[];t;)r.unshift(t),t=t.superclass;n=n.concat(r)}),(n=(n=i(n)).filter(function(r){for(var n=t;n;){if(r===n)return!1;if(a(n,"__mixins__"))for(var e=n.__mixins__,i=0;i<e.length;i++)if(e[i]===r)return!1;n=n.superclass}return!0})).length>0&&n}(p,f)),f&&(p=function(t,r){for(var n=t,e=0;e<r.length;e++){var i=new Function;i.prototype=Object.create(n.prototype),i.__proto__=n,i.superclass=null,s(i.prototype,r[e].prototype),i.prototype.__mixin__=r[e],n=i}return n}(p,f));var h=e.klassName||"",y=new Function("return function "+h+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return y.prototype=Object.create(p.prototype),y.prototype.constructor=y,y.superclass=u,y.__proto__=p,y._constructor||(y._constructor=t),f&&(y.__mixins__=f),y.partial||(y.partial=function(t,n){return function(t,n,e){var i=t.prototype,a=t.superclass.prototype,s=e&&e.noOverrided;e&&e.overrides;for(var l in n)if("constructor"!==l){var o=n[l];"function"==typeof n[l]?i[l]=o._constructor||s||"function"!=typeof a[l]?o:function(t,r,n){return function(){var t=this.overrided;this.overrided=n;var e=r.apply(this,arguments);return this.overrided=t,e}}(0,o,a[l]):r.isPlainObject(o)&&null!==o&&o.get?Object.defineProperty(i,l,o):i[l]=o}return t}(this,t,n)}),y.inherit||(y.inherit=function(t,r,e){return n(t,this,r,e)}),y.partial(e,c),y}}();return t.attach("langx.klass",u)}),r("skylark-langx-klass/main",["./klass"],function(t){return t}),r("skylark-langx-klass",["skylark-langx-klass/main"],function(t){return t}),r("skylark-langx-emitter/Evented",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx-klass"],function(t,r,n,e,i){var a=Array.prototype.slice,s=e.compact,l=r.isDefined,o=r.isPlainObject,u=r.isFunction,f=r.isString,c=r.isEmptyObject,p=n.mixin;function h(t){var r=(""+t).split(".");return{name:r[0],ns:r.slice(1).join(" ")}}var y=i({on:function(t,r,n,e,i,a){var s=this,l=this._hub||(this._hub={});return o(t)?(i=e,each(t,function(t,e){s.on(t,r,n,e,i,a)}),this):(f(r)||u(e)||(i=e,e=n,n=r,r=void 0),u(n)&&(i=e,e=n,n=null),f(t)&&(t=t.split(/\s/)),t.forEach(function(t){var s=h(t),o=s.name,u=s.ns;(l[o]||(l[o]=[])).push({fn:e,selector:r,data:n,ctx:i,ns:u,one:a})}),this)},one:function(t,r,n,e,i){return this.on(t,r,n,e,i,1)},trigger:function(t){if(!this._hub)return this;var r=this;f(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var n=a.call(arguments,1);return n=l(n)?[t].concat(n):[t],[t.type||t.name,"all"].forEach(function(e){var i=h(e),a=i.name,l=i.ns,o=r._hub[a];if(o){for(var u=o.length,f=!1,c=0;c<u;c++){var y=o[c];(!l||y.ns&&y.ns.startsWith(l))&&(t.data?y.data&&(t.data=p({},y.data,t.data)):t.data=y.data||null,y.fn.apply(y.ctx,n),y.one&&(o[c]=null,f=!0))}f&&(r._hub[e]=s(o))}}),this},listened:function(t){var r=(this._hub||(this._events={}))[t]||[];return r.length>0},listenTo:function(t,r,n,e){if(!t)return this;f(n)&&(n=this[n]),e?t.one(r,n,this):t.on(r,n,this);for(var i,a=this._listeningTo||(this._listeningTo=[]),s=0;s<a.length;s++)if(a[s].obj==t){i=a[s];break}i||a.push(i={obj:t,events:{}});var l=i.events,o=l[r]=l[r]||[];return-1==o.indexOf(n)&&o.push(n),this},listenToOnce:function(t,r,n){return this.listenTo(t,r,n,1)},off:function(t,r){var n=this._hub||(this._hub={});return f(t)&&(t=t.split(/\s/)),t.forEach(function(t){var e=h(t),i=e.name,a=e.ns,s=n[i];if(s){var l=[];if(r||a)for(var o=0,u=s.length;o<u;o++)r&&s[o].fn!==r&&s[o].fn._!==r?l.push(s[o]):!a||s[o].ns&&0==s[o].ns.indexOf(a)||l.push(s[o]);l.length?n[i]=l:delete n[i]}}),this},unlistenTo:function(t,r,n){var e=this._listeningTo;if(!e)return this;for(var i=0;i<e.length;i++){var a=e[i];if(!t||t==a.obj){var l=a.events;for(var o in l)if(!r||r==o){for(var u=l[o],f=0;f<u.length;f++)n&&n!=u[i]||(a.obj.off(o,u[i],this),u[i]=null);u=l[o]=s(u),c(u)&&(l[o]=null)}c(l)&&(e[i]=null)}}return e=this._listeningTo=s(e),c(e)&&(this._listeningTo=null),this}});return t.attach("langx.Evented",y)}),r("skylark-langx-emitter/main",["./Evented"],function(t){return t}),r("skylark-langx-emitter",["skylark-langx-emitter/main"],function(t){return t}),r("skylark-langx/Evented",["skylark-langx-emitter"],function(t){return t}),r("skylark-parsers-templating/helpers/each",["skylark-langx/types","../templating"],function(t,r){return r.helpers.each=function(r,n){var e="",i=0;if(t.isFunction(r)&&(r=r.call(this)),t.isArray(r)){for(n.hash.reverse&&(r=r.reverse()),i=0;i<r.length;i++)r[i].templater=this.templater,e+=n.fn(r[i],{first:0===i,last:i===r.length-1,index:i});n.hash.reverse&&(r=r.reverse())}else for(var a in r)i++,r[a].templater=this.templater,e+=n.fn(r[a],{key:a});return i>0?e:n.inverse(this)}}),r("skylark-parsers-templating/helpers/if",["skylark-langx/types","../templating"],function(t,r){return r.helpers.if=function(r,n){return t.isFunction(r)&&(r=r.call(this)),r?n.fn(this,n.data):n.inverse(this,n.data)}}),r("skylark-parsers-templating/helpers/join",["skylark-langx/types","../templating"],function(t,r){return r.helpers.join=function(r,n){return t.isFunction(r)&&(r=r.call(this)),r.join(n.hash.delimiter)}}),r("skylark-parsers-templating/helpers/js",["skylark-langx/types","../templating"],function(t,r){return r.helpers.js=function(t,r){var n;return n=t.indexOf("return")>=0?"(function(){"+t+"})":"(function(){return ("+t+")})",eval.call(this,n).call(this)}}),r("skylark-parsers-templating/helpers/js_compare",["skylark-langx/types","../templating"],function(t,r){return r.helpers.js_compare=function(t,r){var n;n=t.indexOf("return")>=0?"(function(){"+t+"})":"(function(){return ("+t+")})";var e=eval.call(this,n).call(this);return e?r.fn(this,r.data):r.inverse(this,r.data)}}),r("skylark-parsers-templating/helpers/partial",["skylark-langx/types","../templating"],function(t,r){return r.helpers.partial=function(t,r){const n=this,e=this.templater._partials[t];return!e||e&&!e.template?"":(e.compiled||(e.compiled=this.templater.compile(e.template)),Object.keys(r.hash).forEach(function(t){n[t]=r.hash[t]}),e.compiled(n,r.data,r.root))}}),r("skylark-parsers-templating/helpers/unless",["skylark-langx/types","../templating"],function(t,r){return r.helpers.unless=function(r,n){return t.isFunction(r)&&(r=r.call(this)),r?n.inverse(this,n.data):n.fn(this,n.data)}}),r("skylark-parsers-templating/helpers/with",["skylark-langx/types","../templating"],function(t,r){return r.helpers.with=function(r,n){return t.isFunction(r)&&(r=r.call(this)),n.fn(r)}}),r("skylark-parsers-templating/Templater",["skylark-langx/types","skylark-langx/objects","skylark-langx/Evented","./templating","./helpers/each","./helpers/if","./helpers/join","./helpers/js","./helpers/js_compare","./helpers/partial","./helpers/unless","./helpers/with"],function(r,n,e,i,a,s,l,o,u,f,c,p){"use strict";function h(t){var r,n,e,i=t.replace(/[{}#}]/g,"").split(" "),a=[];for(n=0;n<i.length;n++){var s=i[n];if(0===n)a.push(s);else if(0===s.indexOf('"'))if(2===s.match(/"/g).length)a.push(s);else{for(r=0,e=n+1;e<i.length;e++)if(s+=" "+i[e],i[e].indexOf('"')>=0){r=e,a.push(s);break}r&&(n=r)}else if(s.indexOf("=")>0){var l=s.split("="),o=l[0],u=l[1];if(2!==u.match(/"/g).length){for(r=0,e=n+1;e<i.length;e++)if(u+=" "+i[e],i[e].indexOf('"')>=0){r=e;break}r&&(n=r)}var f=[o,u.replace(/"/g,"")];a.push(f)}else a.push(s)}return a}var y=e.inherit({klassName:"Templater",init:function(t,r){this._options=t||{},this._helpers=n.mixin({each:a,if:s,join:l,js:o,js_compare:u,partial:f,unless:c,with:p},r),this._partials={},this._cache={}},compile:function(n){var e=this;function i(t,r){return t.content?o(t.content,r):function(){return""}}function a(t,r){return t.inverseContent?o(t.inverseContent,r):function(){return""}}function s(t,r){var n,e,i=0;if(0===t.indexOf("../")){i=t.split("../").length-1;var a=r.split("_")[1]-i;r="ctx_"+(a>=1?a:1),e=t.split("../")[i].split(".")}else 0===t.indexOf("@global")?(r="$.Template7.global",e=t.split("@global.")[1].split(".")):0===t.indexOf("@root")?(r="ctx_1",e=t.split("@root.")[1].split(".")):e=t.split(".");n=r;for(var s=0;s<e.length;s++){var l=e[s];0===l.indexOf("@")?s>0?n+="[(data && data."+l.replace("@","")+")]":n="(data && data."+t.replace("@","")+")":isFinite(l)?n+="["+l+"]":0===l.indexOf("this")?n=l.replace("this",r):n+="."+l}return n}function l(t,r){for(var n=[],e=0;e<t.length;e++)0===t[e].indexOf('"')?n.push(t[e]):n.push(s(t[e],r));return n.join(", ")}function o(n,o){if(o=o||1,"string"!=typeof(n=n||t.template))throw new Error("Template7: Template must be a string");var u=function(t){var n,e,i=[];if(!t)return[];var a=t.split(/({{[^{^}]*}})/);for(n=0;n<a.length;n++){var s=a[n];if(""!==s)if(s.indexOf("{{")<0)i.push({type:"plain",content:s});else{if(s.indexOf("{/")>=0)continue;if(s.indexOf("{#")<0&&s.indexOf(" ")<0&&s.indexOf("else")<0){i.push({type:"variable",contextName:s.replace(/[{}]/g,"")});continue}var l=h(s),o=l[0],u=">"===o,f=[],c={};for(e=1;e<l.length;e++){var p=l[e];r.isArray(p)?c[p[0]]="false"!==p[1]&&p[1]:f.push(p)}if(s.indexOf("{#")>=0){var y,g="",v="",k=0,m=!1,x=!1,d=0;for(e=n+1;e<a.length;e++)if(a[e].indexOf("{{#")>=0&&d++,a[e].indexOf("{{/")>=0&&d--,a[e].indexOf("{{#"+o)>=0)g+=a[e],x&&(v+=a[e]),k++;else if(a[e].indexOf("{{/"+o)>=0){if(!(k>0)){y=e,m=!0;break}k--,g+=a[e],x&&(v+=a[e])}else a[e].indexOf("else")>=0&&0===d?x=!0:(x||(g+=a[e]),x&&(v+=a[e]));m&&(y&&(n=y),i.push({type:"helper",helperName:o,contextName:f,content:g,inverseContent:v,hash:c}))}else s.indexOf(" ")>0&&(u&&(o="partial",f[0]&&(0===f[0].indexOf("[")?f[0]=f[0].replace(/[[\]]/g,""):f[0]=f[0].replace(/"|'/g,""))),i.push({type:"helper",helperName:o,contextName:f,hash:c}))}}return i}(n);if(0===u.length)return function(){return""};var f,c="ctx_"+o,p="(function ("+c+", data) {\n";for(1===o&&(p+=c+".templater = this\n",p+="function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n",p+="function isFunction(func){return (typeof func === 'function');}\n",p+='function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n'),p+="var r = '';\n",f=0;f<u.length;f++){var y,g,v=u[f];if("plain"!==v.type){if("variable"===v.type&&(y=s(v.contextName,c),p+="r += c("+y+", "+c+");"),"helper"===v.type)if(v.helperName in e._helpers)g=l(v.contextName,c),p+="r += "+c+".templater._helpers."+v.helperName+".call("+c+", "+(g&&g+", ")+"{hash:"+JSON.stringify(v.hash)+", data: data || {}, fn: "+i(v,o+1)+", inverse: "+a(v,o+1)+", root: ctx_1});";else{if(v.contextName.length>0)throw new Error('Missing helper: "'+v.helperName+'"');y=s(v.helperName,c),p+="if ("+y+") {",p+="if (isArray("+y+")) {",p+="r += "+c+".templater._helpers.each.call("+c+", "+y+", {hash:"+JSON.stringify(v.hash)+", data: data || {}, fn: "+i(v,o+1)+", inverse: "+a(v,o+1)+", root: ctx_1});",p+="}else {",p+="r += "+c+".templater._helpers.with.call("+c+", "+y+", {hash:"+JSON.stringify(v.hash)+", data: data || {}, fn: "+i(v,o+1)+", inverse: "+a(v,o+1)+", root: ctx_1});",p+="}}"}}else p+="r +='"+v.content.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/'/g,"\\'")+"';"}return p+="\nreturn r;})",eval.call(window,p)}var u=this._cache[n];if(!u){var f=o(n);u=this._cache[n]=function(){return f.apply(e,arguments)}}return u},render:function(t,r){var n=this.compile(t);return n(r)},registerHelper:function(t,r){this._helpers[t]=r},unregisterHelper:function(t){this._helpers[t]=void 0,delete this._helpers[t]},registerPartial:function(t,r){this._partials[t]={template:r}},unregisterPartial:function(t){this._partials[t]&&(this._partials[t]=void 0,delete this._partials[t])}}),g=y.defaultTemplater=new y;return["registerHelper","registerPartial","unregisterHelper","unregisterPartial","render","compile"].forEach(function(t){i[t]=function(){return y.prototype[t].apply(g,arguments)}}),i.Templater=y}),r("skylark-parsers-templating/main",["./templating","./Templater"],function(t){return t}),r("skylark-parsers-templating",["skylark-parsers-templating/main"],function(t){return t})}(e),!a){var o=i("skylark-langx/skylark");s?module.exports=o:n.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-parsers-templating-all.js.map
