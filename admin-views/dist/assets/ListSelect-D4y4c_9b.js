import{s as S,aF as I,f as r,y as B,a3 as _,K as x,z as O,aX as D,Q as L,bk as T}from"./index-B1wf86tJ.js";var R=function(b){S(a,b);function a(){return b!==null&&b.apply(this,arguments)||this}return a.prototype.doAction=function(t,e,d){var C,o,m=this.props,g=m.resetValue,l=m.onChange,u=m.formStore,v=m.store,p=m.name,n=t==null?void 0:t.actionType;if(n==="clear")l==null||l("");else if(n==="reset"){var s=(o=I((C=u==null?void 0:u.pristine)!==null&&C!==void 0?C:v==null?void 0:v.pristine,p))!==null&&o!==void 0?o:g;l==null||l(s??"")}},a.prototype.handleDBClick=function(t,e){this.props.onToggle(t,!1,!0),this.props.onAction(null,{type:"submit"})},a.prototype.handleClick=function(t,e){if(!(e.target&&e.target.closest("a,button"))){var d=this.props.onToggle;d(t)}},a.prototype.reload=function(){var t=this.props.reloadOptions;t&&t()},a.prototype.renderStatic=function(t){t===void 0&&(t="-");var e=this.props,d=e.itemSchema,C=e.labelField;e.valueField;var o=e.imageClassName,m=e.itemClassName,g=e.selectedOptions,l=e.classnames,u=e.render,v=e.data;if(!g.length)return t;var p=function(n,s){var c=n[C||"label"];return c=c||"选项".concat(s+1),d||n.body||n.image?r.createElement("div",{key:s,className:l("ListControl-static-item",m)},d?u("".concat(s,"/body"),d,{data:_(v,n)}):n.body?u("".concat(s,"/body"),n.body):[n.image?r.createElement("div",{key:"image",className:l("ListControl-itemImage",o)},r.createElement("img",{src:n.image,alt:c})):null,r.createElement("div",{key:"label",className:l("ListControl-itemLabel")},c)]):r.createElement("div",{key:s,className:l("ListControl-static-item")},c)};return r.createElement("div",{className:l("StaticList")},g.map(p))},a.prototype.render=function(){var t=this,e=this.props,d=e.render,C=e.itemClassName,o=e.classnames,m=e.className;e.style;var g=e.disabled,l=e.options,u=e.placeholder,v=e.selectedOptions,p=e.imageClassName,n=e.submitOnDBClick,s=e.itemSchema,c=e.activeItemSchema,E=e.data,h=e.labelField,k=e.listClassName,F=e.translate,y=e.testIdBuilder,N=null;return l&&l.length&&(N=r.createElement("div",{className:o("ListControl-items",k)},l.map(function(i,f){return r.createElement("div",B({key:f,className:o("ListControl-item",C,{"is-active":~v.indexOf(i),"is-disabled":i.disabled||g,"is-custom":!!s}),onClick:t.handleClick.bind(t,i),onDoubleClick:n?t.handleDBClick.bind(t,i):void 0},y==null?void 0:y.getChild("options-".concat(i.value||f)).getTestId()),s?d("".concat(f,"/body"),~v.indexOf(i)?c??s:s,{data:_(E,i)}):i.body?d("".concat(f,"/body"),i.body):[i.image?r.createElement("div",{key:"image",className:o("ListControl-itemImage",p)},r.createElement("img",{src:i.image,alt:i[h||"label"]})):null,i[h||"label"]?r.createElement("div",{key:"label",className:o("ListControl-itemLabel")},x(String(i[h||"label"]),E)):null])}))),r.createElement("div",{className:o("ListControl",m)},N||r.createElement("span",{className:o("ListControl-placeholder")},F(u)))},a.propsList=["itemSchema","value","renderFormItems"],a.defaultProps={clearable:!1,imageClassName:"",submitOnDBClick:!1},O([D(),L("design:type",Function),L("design:paramtypes",[]),L("design:returntype",void 0)],a.prototype,"render",null),a}(r.Component),A=function(b){S(a,b);function a(){return b!==null&&b.apply(this,arguments)||this}return a=O([T({type:"list-select",sizeMutable:!1})],a),a}(R);export{A as ListControlRenderer,R as default};