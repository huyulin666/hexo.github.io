import{a as B,w as A,v as H,f as J,cG as K,ab as Q,aN as U,x as R,a1 as I,a0 as Y,b4 as $,z as o,n as u,_ as w,cf as Z,a3 as h,a4 as ee,a8 as ae,ch as re,bu as te}from"./index.1c6fab4d.js";import{u as ne,a as ie}from"./useSize.d44fc67b.js";import{e as le}from"./eagerComputed.d2c15b12.js";var oe=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:ee.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},se=B({name:"AAvatar",inheritAttrs:!1,props:oe(),slots:["icon"],setup:function(e,S){var P=S.slots,i=S.attrs,g=A(!0),p=A(!1),x=A(1),l=A(null),y=A(null),T=H("avatar",e),m=T.prefixCls,k=ne(),n=J(function(){return e.size==="default"?k.value:e.size}),E=K(),c=le(function(){if(Q(e.size)==="object"){var a=U.find(function(t){return E.value[t]}),r=e.size[a];return r}}),N=function(r){return c.value?{width:"".concat(c.value,"px"),height:"".concat(c.value,"px"),lineHeight:"".concat(c.value,"px"),fontSize:"".concat(r?c.value/2:18,"px")}:{}},v=function(){if(!(!l.value||!y.value)){var r=l.value.offsetWidth,t=y.value.offsetWidth;if(r!==0&&t!==0){var s=e.gap,z=s===void 0?4:s;z*2<t&&(x.value=t-z*2<r?(t-z*2)/r:1)}}},b=function(){var r=e.loadError,t=r==null?void 0:r();t!==!1&&(g.value=!1)};return R(function(){return e.src},function(){I(function(){g.value=!0,x.value=1})}),R(function(){return e.gap},function(){I(function(){v()})}),Y(function(){I(function(){v(),p.value=!0})}),function(){var a,r,t=e.shape,s=e.src,z=e.alt,F=e.srcset,L=e.draggable,M=e.crossOrigin,C=$(P,e,"icon"),f=m.value,V=(a={},o(a,"".concat(i.class),!!i.class),o(a,f,!0),o(a,"".concat(f,"-lg"),n.value==="large"),o(a,"".concat(f,"-sm"),n.value==="small"),o(a,"".concat(f,"-").concat(t),t),o(a,"".concat(f,"-image"),s&&g.value),o(a,"".concat(f,"-icon"),C),a),X=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:C?"".concat(n.value/2,"px"):"18px"}:{},G=(r=P.default)===null||r===void 0?void 0:r.call(P),_;if(s&&g.value)_=u("img",{draggable:L,src:s,srcset:F,onError:b,alt:z,crossorigin:M},null);else if(C)_=C;else if(p.value||x.value!==1){var O="scale(".concat(x.value,") translateX(-50%)"),q={msTransform:O,WebkitTransform:O,transform:O},D=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};_=u(Z,{onResize:v},{default:function(){return[u("span",{class:"".concat(f,"-string"),ref:l,style:w(w({},D),q)},[G])]}})}else _=u("span",{class:"".concat(f,"-string"),ref:l,style:{opacity:0}},[G]);return u("span",h(h({},i),{},{ref:y,class:V,style:[X,N(!!C),i.style]}),[_])}}}),j=se,ue=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},ce=B({name:"AAvatarGroup",inheritAttrs:!1,props:ue(),setup:function(e,S){var P=S.slots,i=S.attrs,g=H("avatar-group",e),p=g.prefixCls,x=g.direction;return ie(e),function(){var l,y=e.maxPopoverPlacement,T=y===void 0?"top":y,m=e.maxCount,k=e.maxStyle,n=e.maxPopoverTrigger,E=n===void 0?"hover":n,c=(l={},o(l,p.value,!0),o(l,"".concat(p.value,"-rtl"),x.value==="rtl"),o(l,"".concat(i.class),!!i.class),l),N=$(P,e),v=ae(N).map(function(t,s){return re(t,{key:"avatar-key-".concat(s)})}),b=v.length;if(m&&m<b){var a=v.slice(0,m),r=v.slice(m,b);return a.push(u(te,{key:"avatar-popover-key",content:r,trigger:E,placement:T,overlayClassName:"".concat(p.value,"-popover")},{default:function(){return[u(j,{style:k},{default:function(){return["+".concat(b-m)]}})]}})),u("div",h(h({},i),{},{class:c,style:i.style}),[a])}return u("div",h(h({},i),{},{class:c,style:i.style}),[v])}}}),W=ce;j.Group=W;j.install=function(d){return d.component(j.name,j),d.component(W.name,W),d};export{j as A};
