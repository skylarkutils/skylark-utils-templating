/**
 * skylark-template7 - A version of template7.js that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/types","../templating"],function(n,t){return t.helpers.unless=function(t,e){return n.isFunction(t)&&(t=t.call(this)),t?e.inverse(this,e.data):e.fn(this,e.data)}});
//# sourceMappingURL=../sourcemaps/helpers/unless.js.map
