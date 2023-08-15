import{c8 as h,B as R,n as T,aU as U,aO as M,a as L,v as j,w as z,D as N,x as W,a1 as D,a0 as X,cz as q,cQ as G,a6 as J,_ as x,z as C,cR as Q,E as Y,G as Z,a3 as I,cS as K,cT as tt,R as et,by as nt,bJ as rt,cU as ot,b as at,f as $,k as _,bS as F,S as k,o as b,h as it,j as B,l as E,q as ct,M as st}from"./index.53837640.js";import{c as lt,u as ut}from"./index.084d3dd6.js";import ft from"./SessionTimeoutLogin.ea492ebd.js";import"./useContentViewHeight.5d1ad131.js";import"./index.569b513d.js";import"./Login.3aa72236.js";import"./LoginForm.3bc075b8.js";import"./index.c5c780a1.js";import"./index.b14b2ce2.js";import"./index.e3ea48f0.js";import"./get.ebc8c13f.js";import"./useSize.3827c56b.js";import"./LoginFormTitle.f0cd17b1.js";import"./index.888ebf17.js";import"./ForgetPasswordForm.914c00e8.js";import"./index.ec2c14b3.js";import"./RegisterForm.99018e56.js";import"./MobileForm.da5218af.js";function vt(t){var e,n=function(c){return function(){e=null,t.apply(void 0,R(c))}},o=function(){if(e==null){for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];e=h(n(i))}};return o.cancel=function(){return h.cancel(e)},o}function A(t){return t!=null&&t===t.window}function H(t,e){var n;if(typeof window=="undefined")return 0;var o=e?"scrollTop":"scrollLeft",r=0;return A(t)?r=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?r=t.documentElement[o]:t&&(r=t[o]),t&&!A(t)&&typeof r!="number"&&(r=(n=(t.ownerDocument||t).documentElement)===null||n===void 0?void 0:n[o]),r}function pt(t,e,n,o){var r=n-e;return t/=o/2,t<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e}function mt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.getContainer,o=n===void 0?function(){return window}:n,r=e.callback,c=e.duration,i=c===void 0?450:c,a=o(),v=H(a,!0),l=Date.now(),p=function w(){var O=Date.now(),m=O-l,d=pt(m>i?i:m,v,t,i);A(a)?a.scrollTo(window.pageXOffset,d):a instanceof HTMLDocument||a.constructor.name==="HTMLDocument"?a.documentElement.scrollTop=d:a.scrollTop=d,m<i?h(w):typeof r=="function"&&r()};h(p)}var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=dt;function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){Tt(t,r,n[r])})}return t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(e,n){var o=V({},e,n.attrs);return T(U,V({},o,{icon:gt}),null)};P.displayName="VerticalAlignTopOutlined";P.inheritAttrs=!1;var St=P,wt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},_t=L({name:"ABackTop",inheritAttrs:!1,props:wt(),setup:function(e,n){var o=n.slots,r=n.attrs,c=n.emit,i=j("back-top",e),a=i.prefixCls,v=i.direction,l=z(),p=N({visible:!1,scrollEvent:null}),w=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},O=function(u){var f=e.target,g=f===void 0?w:f,S=e.duration;mt(0,{getContainer:g,duration:S}),c("click",u)},m=vt(function(s){var u=e.visibilityHeight,f=H(s.target,!0);p.visible=f>u}),d=function(){var u=e.target,f=u||w,g=f();p.scrollEvent=tt(g,"scroll",function(S){m(S)}),m({target:g})},y=function(){p.scrollEvent&&p.scrollEvent.remove(),m.cancel()};return W(function(){return e.target},function(){y(),D(function(){d()})}),X(function(){D(function(){d()})}),q(function(){D(function(){d()})}),G(function(){y()}),J(function(){y()}),function(){var s,u,f=T("div",{class:"".concat(a.value,"-content")},[T("div",{class:"".concat(a.value,"-icon")},[T(St,null,null)])]),g=x(x({},r),{onClick:O,class:(s={},C(s,"".concat(a.value),!0),C(s,"".concat(r.class),r.class),C(s,"".concat(a.value,"-rtl"),v.value==="rtl"),s)}),S=Q("fade");return T(K,S,{default:function(){return[Y(T("div",I(I({},g),{},{ref:l}),[((u=o.default)===null||u===void 0?void 0:u.call(o))||f]),[[Z,p.visible]])]}})}}}),bt=M(_t);const ht=L({name:"LayoutFeatures",components:{BackTop:bt,SettingDrawer:lt(()=>nt(()=>import("./index.8eaf5e83.js").then(function(t){return t.i}),["assets/index.8eaf5e83.js","assets/index.e727234b.css","assets/index.53837640.js","assets/index.c7a16deb.css","assets/index.084d3dd6.js","assets/index.18eb9d42.css","assets/useContentViewHeight.5d1ad131.js","assets/index.569b513d.js","assets/index.a2831ae3.css","assets/ArrowLeftOutlined.bed0be66.js"])),SessionTimeoutLogin:ft},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:n,getFullContent:o}=rt(),r=ot(),{prefixCls:c}=at("setting-drawer-feature"),{getShowHeader:i}=ut(),a=$(()=>r.getSessionTimeout),v=$(()=>{if(!_(e))return!1;const l=_(n);return l===F.AUTO?!_(i)||_(o):l===F.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:v,prefixCls:c,getIsSessionTimeout:a}}});function Ot(t,e,n,o,r,c){const i=k("BackTop"),a=k("SettingDrawer"),v=k("SessionTimeoutLogin");return b(),it(st,null,[t.getUseOpenBackTop?(b(),B(i,{key:0,target:t.getTarget},null,8,["target"])):E("",!0),t.getIsFixedSettingDrawer?(b(),B(a,{key:1,class:ct(t.prefixCls)},null,8,["class"])):E("",!0),t.getIsSessionTimeout?(b(),B(v,{key:2})):E("",!0)],64)}var zt=et(ht,[["render",Ot]]);export{zt as default};
