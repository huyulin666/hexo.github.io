import{a as F,v as S,f as p,a2 as j,z as d,n as i,ct as M,cu as O,w as Q,Q as V,M as q,cv as D,a4 as $,b5 as G}from"./index.4b13a73b.js";var H=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},J=F({name:"ACheckableTag",props:H(),setup:function(e,r){var l=r.slots,s=r.emit,g=S("tag",e),u=g.prefixCls,o=function(C){var v=e.checked;s("update:checked",!v),s("change",!v),s("click",C)},k=p(function(){var n;return j(u.value,(n={},d(n,"".concat(u.value,"-checkable"),!0),d(n,"".concat(u.value,"-checkable-checked"),e.checked),n))});return function(){var n;return i("span",{class:k.value,onClick:o},[(n=l.default)===null||n===void 0?void 0:n.call(l)])}}}),b=J,K=new RegExp("^(".concat(M.join("|"),")(-inverse)?$")),L=new RegExp("^(".concat(O.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:$.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:$.any}},f=F({name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(e,r){var l=r.slots,s=r.emit,g=r.attrs,u=S("tag",e),o=u.prefixCls,k=u.direction,n=Q(!0);V(function(){e.visible!==void 0&&(n.value=e.visible)});var C=function(t){t.stopPropagation(),s("update:visible",!1),s("close",t),!t.defaultPrevented&&e.visible===void 0&&(n.value=!1)},v=p(function(){var a=e.color;return a?K.test(a)||L.test(a):!1}),w=p(function(){var a;return j(o.value,(a={},d(a,"".concat(o.value,"-").concat(e.color),v.value),d(a,"".concat(o.value,"-has-color"),e.color&&!v.value),d(a,"".concat(o.value,"-hidden"),!n.value),d(a,"".concat(o.value,"-rtl"),k.value==="rtl"),a))});return function(){var a,t,h,m=e.icon,R=m===void 0?(a=l.icon)===null||a===void 0?void 0:a.call(l):m,y=e.color,P=e.closeIcon,T=P===void 0?(t=l.closeIcon)===null||t===void 0?void 0:t.call(l):P,x=e.closable,B=x===void 0?!1:x,E=function(){return B?T?i("div",{class:"".concat(o.value,"-close-icon"),onClick:C},[T]):i(G,{class:"".concat(o.value,"-close-icon"),onClick:C},null):null},A={backgroundColor:y&&!v.value?y:void 0},I=R||null,_=(h=l.default)===null||h===void 0?void 0:h.call(l),U=I?i(q,null,[I,i("span",null,[_])]):_,W="onClick"in g,N=i("span",{class:w.value,style:A},[U,E()]);return W?i(D,null,{default:function(){return[N]}}):N}}});f.CheckableTag=b;f.install=function(c){return c.component(f.name,f),c.component(b.name,b),c};var Z=f;export{Z as T};
