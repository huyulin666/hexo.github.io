import{C as o}from"./index.1dbb4aba.js";import{a as P,v as x,z as d,b4 as v,n as i,a4 as u,f as G}from"./index.af1aee38.js";var M=function(){return{prefixCls:String,title:u.any,description:u.any,avatar:u.any}},f=P({name:"ACardMeta",props:M(),slots:["title","description","avatar"],setup:function(r,s){var n=s.slots,l=x("card",r),e=l.prefixCls;return function(){var c=d({},"".concat(e.value,"-meta"),!0),a=v(n,r,"avatar"),p=v(n,r,"title"),C=v(n,r,"description"),y=a?i("div",{class:"".concat(e.value,"-meta-avatar")},[a]):null,g=p?i("div",{class:"".concat(e.value,"-meta-title")},[p]):null,_=C?i("div",{class:"".concat(e.value,"-meta-description")},[C]):null,D=g||_?i("div",{class:"".concat(e.value,"-meta-detail")},[g,_]):null;return i("div",{class:c},[y,D])}}}),b=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},m=P({name:"ACardGrid",__ANT_CARD_GRID:!0,props:b(),setup:function(r,s){var n=s.slots,l=x("card",r),e=l.prefixCls,c=G(function(){var a;return a={},d(a,"".concat(e.value,"-grid"),!0),d(a,"".concat(e.value,"-grid-hoverable"),r.hoverable),a});return function(){var a;return i("div",{class:c.value},[(a=n.default)===null||a===void 0?void 0:a.call(n)])}}});o.Meta=f;o.Grid=m;o.install=function(t){return t.component(o.name,o),t.component(f.name,f),t.component(m.name,m),t};
