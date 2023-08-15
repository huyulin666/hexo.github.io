var m=(t,e,n)=>new Promise((s,u)=>{var l=a=>{try{r(n.next(a))}catch(c){u(c)}},o=a=>{try{r(n.throw(a))}catch(c){u(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);r((n=n.apply(t,e)).next())});import{w as f,aP as I,k as d,a as S,K as h,c as z,f as C,Q as g,R as w,aQ as F,S as p,o as y,j as _,H as v,J as T,t as k,Y as $,D as A,aR as N,aJ as R,a1 as D,aG as P,aS as j,b as O,T as V,U as E,V as J,W as Q,X as U,n as q,Z as b}from"./index.e6de5fc3.js";function G(t){const e=f(t),n=f(!1);let s;function u(){s&&window.clearInterval(s)}function l(){n.value=!1,u(),s=null}function o(){d(n)||!!s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function r(){e.value=t,l()}function a(){r(),o()}return I(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:l,currentCount:e,isStart:n}}const H={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},K=S({name:"CountButton",components:{Button:h},props:H,setup(t){const e=f(!1),{currentCount:n,isStart:s,start:u,reset:l}=G(t.count),{t:o}=z(),r=C(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));g(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&F(c)){e.value=!0;try{(yield c())&&u()}finally{e.value=!1}}else u()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:r,isStart:s}}});function L(t,e,n,s,u,l){const o=p("Button");return y(),_(o,$(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[T(k(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=w(K,[["render",L]]);function W(t,e="value",n="change",s){const u=j(),l=u==null?void 0:u.emit,o=A({value:t[e]}),r=N(o),a=i=>{o.value=i};return g(()=>{o.value=t[e]}),[C({get(){return o.value},set(i){R(i,r.value)||(o.value=i,D(()=>{l==null||l(n,i,...P(d(s))||[])}))}}),a,r]}const X={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},Y=S({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:X,setup(t){const{prefixCls:e}=O("countdown-input"),[n]=W(t);return{prefixCls:e,state:n}}});function Z(t,e,n,s,u,l){const o=p("CountButton"),r=p("a-input");return y(),_(r,$(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),V({addonAfter:v(()=>[q(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[E(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[J(t.$slots,a,Q(U(c||{})))])}))]),1040,["class","size","value"])}var M=w(Y,[["render",Z]]);const et=b(M);b(B);export{et as C};
