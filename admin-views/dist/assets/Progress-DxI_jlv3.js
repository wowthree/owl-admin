import{s as g,am as D,ay as d,ai as E,K as i,a3 as F,f as c,de as R,z as v,P as S,Q as u,T as V,D as W}from"./index-B1wf86tJ.js";var h=["name","value","data","defaultValue"],k=function(l){g(t,l);function t(e){var a=l.call(this,e)||this;return a.state={value:a.getValue()},a}return t.prototype.componentDidUpdate=function(e){D(d(e,h),d(this.props,h))||this.setState({value:this.getValue()})},t.prototype.getValue=function(){var e=E(this.props);return e=typeof e=="number"?e:i(e,this.props.data),/^\d*\.?\d+$/.test(e)&&(e=parseFloat(e)),e},t.prototype.format=function(e){var a=this.props,s=a.valueTpl,n=a.render,p=a.data;return n("progress-value",s||"${value}%",{data:F(p,{value:e})})},t.prototype.render=function(){var e=this.props,a=e.data,s=e.mode,n=e.className,p=e.style,m=e.placeholder,f=e.progressClassName,y=e.map,b=e.stripe,T=e.animate,P=e.showLabel,_=e.strokeWidth,C=e.gapDegree,w=e.gapPosition;e.classnames;var r=e.threshold,N=e.showThresholdText,x=this.state.value;return r&&(Array.isArray(r)?r.forEach(function(o){o.value=typeof o.value=="string"?i(o.value,a):o.value,o.color&&(o.color=i(o.color,a))}):(r.value=i(r.value,a),r.color&&(r.color=i(r.color,a)))),c.createElement(R,{value:x,type:s,map:y,stripe:b,animate:T,showLabel:P,placeholder:m,format:this.format,strokeWidth:_,gapDegree:C,gapPosition:w,className:n,style:p,progressClassName:f,threshold:r,showThresholdText:N})},t.defaultProps={placeholder:"-",progressClassName:"",progressBarClassName:"",map:["bg-danger","bg-warning","bg-info","bg-success","bg-success"],valueTpl:"${value}%",showLabel:!0,stripe:!1,animate:!1},v([S,u("design:type",Function),u("design:paramtypes",[Number]),u("design:returntype",void 0)],t.prototype,"format",null),t}(c.Component),L=function(l){g(t,l);function t(e,a){var s=l.call(this,e)||this,n=a;return n.registerComponent(s),s}return t.prototype.componentWillUnmount=function(){var e;(e=l.prototype.componentWillUnmount)===null||e===void 0||e.call(this);var a=this.context;a.unRegisterComponent(this)},t.prototype.doAction=function(e,a,s,n){var p=e==null?void 0:e.actionType;p==="reset"&&this.setState({value:0})},t.prototype.setData=function(e){(typeof e=="number"||typeof+e=="number")&&this.setState({value:+e})},t.contextType=V,t=v([W({type:"progress"}),u("design:paramtypes",[Object,Object])],t),t}(k);export{k as ProgressField,L as ProgressFieldRenderer};