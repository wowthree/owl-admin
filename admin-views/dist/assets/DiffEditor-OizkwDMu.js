import{s as C,aF as F,E as g,G as m,v as V,w as B,f as E,cs as S,y as w,z as D,a1 as N,ah as y}from"./index-B1wf86tJ.js";function _(r,o){if(r&&typeof r!="string"&&(r=JSON.stringify(r,null,2)),o&&o==="json")try{r=JSON.stringify(typeof r=="string"?JSON.parse(r):r,null,2)}catch{}return r||""}var b=function(r){C(o,r);function o(t){var e=r.call(this,t)||this;return e.state={focused:!1},e.handleFocus=e.handleFocus.bind(e),e.handleBlur=e.handleBlur.bind(e),e.handleEditorMounted=e.handleEditorMounted.bind(e),e.handleChange=e.handleChange.bind(e),e}return o.prototype.doAction=function(t,e,a,d){var n,i,s=t==null?void 0:t.actionType,l=this.props,u=l.onChange,h=l.resetValue,c=l.formStore,f=l.store,v=l.name;if(s==="clear")u("");else if(s==="reset"){var p=(i=F((n=c==null?void 0:c.pristine)!==null&&n!==void 0?n:f==null?void 0:f.pristine,v))!==null&&i!==void 0?i:h;u(p??"")}else s==="focus"&&this.focus()},o.prototype.focus=function(){var t,e,a;(t=this.editor)===null||t===void 0||t.focus(),this.setState({focused:!0});var d=(e=this.editor)===null||e===void 0?void 0:e.getPosition();(a=this.editor)===null||a===void 0||a.setPosition(d)},o.prototype.handleFocus=function(t){return g(this,void 0,void 0,function(){var e,a,d,n,i;return m(this,function(s){switch(s.label){case 0:return e=this.props,a=e.dispatchEvent,d=e.value,n=e.onFocus,this.setState({focused:!0}),[4,a("focus",y(this.props,{value:d}))];case 1:return i=s.sent(),i!=null&&i.prevented?[2]:(n==null||n(t),[2])}})})},o.prototype.handleBlur=function(t){return g(this,void 0,void 0,function(){var e,a,d,n,i;return m(this,function(s){switch(s.label){case 0:return e=this.props,a=e.dispatchEvent,d=e.value,n=e.onBlur,this.setState({focused:!1}),[4,a("blur",y(this.props,{value:d}))];case 1:return i=s.sent(),i!=null&&i.prevented?[2]:(n==null||n(t),[2])}})})},o.prototype.handleChange=function(t){return g(this,void 0,void 0,function(){var e,a,d,n;return m(this,function(i){switch(i.label){case 0:return e=this.props,a=e.onChange,d=e.dispatchEvent,[4,d("change",y(this.props,{value:t}))];case 1:return n=i.sent(),n!=null&&n.prevented?[2]:(a&&a(t),[2])}})})},o.prototype.handleEditorMounted=function(t){this.editor=t},o.prototype.render=function(){var t=this.props,e=t.className;t.style;var a=t.value;t.onChange;var d=t.disabled,n=t.size,i=t.options,s=t.language,l=t.editorTheme,u=t.diffValue,h=t.classnames,c=t.data,f=V(u)?_(B(u||"",c,"| raw"),s):_(u,s),v=_(a,s);return E.createElement("div",{className:h("EditorControl",n?"EditorControl--".concat(n):"",e,{"is-focused":this.state.focused})},E.createElement(S,{value:v,originValue:f,onChange:this.handleChange,disabled:d,language:s,editorTheme:l,options:i,onFocus:this.handleFocus,onBlur:this.handleBlur,editorDidMount:this.handleEditorMounted}))},o.defaultProps={language:"javascript",editorTheme:"vs",options:{automaticLayout:!1,selectOnLineNumbers:!0,scrollBeyondLastLine:!1,folding:!0,minimap:{enabled:!1}},diffValue:""},o}(E.Component),P=function(r){C(o,r);function o(){return r!==null&&r.apply(this,arguments)||this}return o.defaultProps=w({},b.defaultProps),o=D([N({type:"diff-editor",sizeMutable:!1})],o),o}(b);export{P as DiffEditorControlRenderer,b as DiffEditorRenderer};