/**
 * skylark-template7 - A version of template7.js that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/types","../templating"],function(t,e){return e.helpers.partial=function(t,e){const a=this,i=this.templater._partials[t];return!i||i&&!i.template?"":(i.compiled||(i.compiled=this.templater.compile(i.template)),Object.keys(e.hash).forEach(function(t){a[t]=e.hash[t]}),i.compiled(a,e.data,e.root))}});
//# sourceMappingURL=../sourcemaps/helpers/partial.js.map
