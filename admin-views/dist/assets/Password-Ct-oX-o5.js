import{s as o,f as i,L as l,z as r,P as v,Q as a,D as g}from"./index-B1wf86tJ.js";var b=function(s){o(e,s);function e(){var t=s!==null&&s.apply(this,arguments)||this;return t.state={visible:!1},t}return e.prototype.toggleVisible=function(){this.setState({visible:!this.state.visible})},e.prototype.render=function(){var t=this.props,c=t.classnames,d=t.className,m=t.style,n=t.mosaicText,p=n===void 0?"********":n,u=t.value;return i.createElement("span",{className:c("Password-field",d),style:m},this.state.visible?u:p,this.state.visible?i.createElement(l,{icon:"view",className:"icon",onClick:this.toggleVisible}):i.createElement(l,{icon:"invisible",className:"icon",onClick:this.toggleVisible}))},r([v,a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",void 0)],e.prototype,"toggleVisible",null),e}(i.Component),y=function(s){o(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e=r([g({type:"password"})],e),e}(b);export{b as PasswordField,y as PasswordFieldRenderer};