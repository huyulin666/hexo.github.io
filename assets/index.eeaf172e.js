var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ne=(e,n,a)=>n in e?me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,k=(e,n)=>{for(var a in n||(n={}))be.call(n,a)&&ne(e,a,n[a]);if(te)for(var a of te(n))ve.call(n,a)&&ne(e,a,n[a]);return e},W=(e,n)=>he(e,ye(n));var A=(e,n,a)=>new Promise((u,l)=>{var r=d=>{try{o(a.next(d))}catch(i){l(i)}},t=d=>{try{o(a.throw(d))}catch(i){l(i)}},o=d=>d.done?u(d.value):Promise.resolve(d.value).then(r,t);o((a=a.apply(e,n)).next())});import{c as Q,Q as G,k as s,bf as Ce,a as w,bi as Me,co as ke,n as C,dd as $e,de as Se,cr as He,bn as Fe,bL as Be,w as b,df as Oe,f as $,x as ue,a0 as we,aZ as de,a1 as T,R as D,S as m,bY as _e,o as y,j as S,H as g,E as Te,h as z,V as O,bs as De,bq as Pe,b5 as Ne,b as K,M as Re,l as Y,q as I,J,t as X,Y as L,cX as We,bK as Ee,aI as Z,aS as pe,aQ as Ie,cY as Le,T as oe,U as le,W as ae,X as se,D as fe,aG as U,aJ as je,cs as Ve,cZ as Ae,Z as Ue,cF as qe,bd as re,by as ze,O as Ye,C as Xe,i as q,bB as Ze}from"./index.af1aee38.js";import{D as Je}from"./siteSetting.c485f07c.js";import{F as Qe,b as Ge,c as Ke,u as xe}from"./index.5d8776d7.js";import{b as et}from"./useContentViewHeight.54f5e525.js";import{h as tt}from"./header.d801b988.js";import"./index.284c7062.js";const{t:ie}=Q(),nt={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ie("common.cancelText")},okText:{type:String,default:ie("common.okText")},closeFunc:Function},x=Object.assign({},nt,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function ot(e){const n=(l,r)=>getComputedStyle(l)[r],a=l=>{if(!l)return;l.setAttribute("data-drag",s(e.draggable));const r=l.querySelector(".ant-modal-header"),t=l.querySelector(".ant-modal");!r||!t||!s(e.draggable)||(r.style.cursor="move",r.onmousedown=o=>{if(!o)return;const d=o.clientX,i=o.clientY,p=document.body.clientWidth,f=document.documentElement.clientHeight,h=t.offsetWidth,M=t.offsetHeight,H=t.offsetLeft,F=p-t.offsetLeft-h,B=t.offsetTop,j=f-t.offsetTop-M,_=n(t,"left"),P=n(t,"top");let N=+_,R=+P;_.includes("%")?(N=+document.body.clientWidth*(+_.replace(/%/g,"")/100),R=+document.body.clientHeight*(+P.replace(/%/g,"")/100)):(N=+_.replace(/px/g,""),R=+P.replace(/px/g,"")),document.onmousemove=function(V){let c=V.clientX-d,v=V.clientY-i;-c>H?c=-H:c>F&&(c=F),-v>B?v=-B:v>j&&(v=j),t.style.cssText+=`;left:${c+N}px;top:${v+R}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},u=()=>{const l=document.querySelectorAll(".ant-modal-wrap");for(const r of Array.from(l)){if(!r)continue;const t=n(r,"display"),o=r.getAttribute("data-drag");t!=="none"&&(o===null||s(e.destroyOnClose))&&a(r)}};G(()=>{!s(e.visible)||!s(e.draggable)||Ce(()=>{u()},30)})}function lt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!He(e)}var at=w({name:"Modal",inheritAttrs:!1,props:x,emits:["cancel"],setup(e,{slots:n,emit:a}){const{visible:u,draggable:l,destroyOnClose:r}=Me(e),t=ke();ot({visible:u,destroyOnClose:r,draggable:l});const o=d=>{a("cancel",d)};return()=>{let d;const i=W(k(k({},s(t)),e),{onCancel:o});return C(Se,i,lt(d=$e(n))?d:{default:()=>[d]})}}});const st=Symbol();function rt(e){return Fe(e,st)}const it={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},ct=w({name:"ModalWrapper",components:{ScrollContainer:Be},inheritAttrs:!1,props:it,emits:["height-change","ext-height"],setup(e,{emit:n}){const a=b(null),u=b(null),l=b(0),r=b(0);let t=0;et(i.bind(null,!1)),Oe(u,()=>{i()},{attributes:!0,subtree:!0}),rt({redoModalHeight:i});const o=$(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(l)}px`}));G(()=>{e.useWrapper&&i()}),ue(()=>e.fullScreen,p=>{i(),p?r.value=l.value:l.value=r.value}),we(()=>{const{modalHeaderHeight:p,modalFooterHeight:f}=e;n("ext-height",p+f)}),de(()=>{});function d(){return A(this,null,function*(){T(()=>{var f;const p=s(a);!p||(f=p==null?void 0:p.scrollTo)==null||f.call(p,0)})})}function i(){return A(this,null,function*(){if(!e.visible)return;const p=s(a);if(!p)return;const f=p.$el.parentElement;if(!!f){f.style.padding="0",yield T();try{const h=f.parentElement&&f.parentElement.parentElement;if(!h)return;const M=getComputedStyle(h).top,H=Number.parseInt(M);let F=window.innerHeight-H*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;H<40&&(F-=26),yield T();const B=s(u);if(!B)return;yield T(),t=B.scrollHeight,e.fullScreen?l.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:l.value=e.height?e.height:t>F?F:t,n("height-change",s(l))}catch(h){}}})}return{wrapperRef:a,spinRef:u,spinStyle:o,scrollTop:d,setModalHeight:i}}}),ut=["loading-tip"];function dt(e,n,a,u,l,r){const t=m("ScrollContainer"),o=_e("loading");return y(),S(t,{ref:"wrapperRef"},{default:g(()=>[Te((y(),z("div",{ref:"spinRef",style:De(e.spinStyle),"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,ut)),[[o,e.loading]])]),_:3},512)}var pt=D(ct,[["render",dt]]);const ft=w({name:"ModalClose",components:{Tooltip:Pe,FullscreenExitOutlined:Qe,FullscreenOutlined:Ge,CloseOutlined:Ne},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:n}){const{prefixCls:a}=K("basic-modal-close"),{t:u}=Q(),l=$(()=>[a,`${a}--custom`,{[`${a}--can-full`]:e.canFullscreen}]);function r(o){n("cancel",o)}function t(o){o==null||o.stopPropagation(),o==null||o.preventDefault(),n("fullscreen")}return{t:u,getClass:l,prefixCls:a,handleCancel:r,handleFullScreen:t}}});function gt(e,n,a,u,l,r){const t=m("FullscreenExitOutlined"),o=m("Tooltip"),d=m("FullscreenOutlined"),i=m("CloseOutlined");return y(),z("div",{class:I(e.getClass)},[e.canFullscreen?(y(),z(Re,{key:0},[e.fullScreen?(y(),S(o,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:g(()=>[C(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(y(),S(o,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:g(()=>[C(d,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):Y("",!0),C(o,{title:e.t("component.modal.close"),placement:"bottom"},{default:g(()=>[C(i,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}var mt=D(ft,[["render",gt]]);const ht=w({name:"BasicModalFooter",props:x,emits:["ok","cancel"],setup(e,{emit:n}){function a(l){n("ok",l)}function u(l){n("cancel",l)}return{handleOk:a,handleCancel:u}}});function yt(e,n,a,u,l,r){const t=m("a-button");return y(),z("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(y(),S(t,L({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:g(()=>[J(X(e.cancelText),1)]),_:1},16,["onClick"])):Y("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(y(),S(t,L({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:g(()=>[J(X(e.okText),1)]),_:1},16,["type","onClick","loading"])):Y("",!0),O(e.$slots,"appendFooter")])}var bt=D(ht,[["render",yt]]);const vt=w({name:"BasicModalHeader",components:{BasicTitle:We},props:{helpMessage:{type:[String,Array]},title:{type:String}},emits:["dblclick"]});function Ct(e,n,a,u,l,r){const t=m("BasicTitle");return y(),S(t,{helpMessage:e.helpMessage},{default:g(()=>[J(X(e.title),1)]),_:1},8,["helpMessage"])}var Mt=D(vt,[["render",Ct]]);function kt(e){const n=b(!1),a=$(()=>{const l=s(e.wrapClassName)||"";return s(n)?`fullscreen-modal ${l} `:s(l)});function u(l){l&&l.stopPropagation(),n.value=!s(n)}return{getWrapClassName:a,handleFullScreen:u,fullScreenRef:n}}const $t=w({name:"BasicModal",components:{Modal:at,ModalWrapper:pt,ModalClose:mt,ModalFooter:bt,ModalHeader:Mt},inheritAttrs:!1,props:x,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:n,attrs:a}){const u=b(!1),l=b(null),r=b(null),{prefixCls:t}=K("basic-modal"),o=b(0),d={setModalProps:_,emitVisible:void 0,redoModalHeight:()=>{T(()=>{s(r)&&s(r).setModalHeight()})}},i=pe();i&&n("register",d,i.uid);const p=$(()=>k(k({},e),s(l))),{handleFullScreen:f,getWrapClassName:h,fullScreenRef:M}=kt({modalWrapperRef:r,extHeightRef:o,wrapClassName:Ee(p.value,"wrapClassName")}),H=$(()=>{const c=W(k({},s(p)),{visible:s(u),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return W(k({},c),{wrapClassName:s(h)})}),F=$(()=>{const c=W(k(k({},a),s(p)),{visible:s(u),wrapClassName:s(h)});return s(M)?Z(c,["height","title"]):Z(c,"title")}),B=$(()=>{if(!s(M))return s(H).height});G(()=>{u.value=!!e.visible,M.value=!!e.defaultFullscreen}),ue(()=>s(u),c=>{var v;n("visible-change",c),n("update:visible",c),i&&((v=d.emitVisible)==null||v.call(d,c,i.uid)),T(()=>{e.scrollTop&&c&&s(r)&&s(r).scrollTop()})},{immediate:!1});function j(c){return A(this,null,function*(){var v,ee;if(c==null||c.stopPropagation(),!((ee=(v=c.target)==null?void 0:v.classList)!=null&&ee.contains(t+"-close--custom"))){if(e.closeFunc&&Ie(e.closeFunc)){const ge=yield e.closeFunc();u.value=!ge;return}u.value=!1,n("cancel",c)}})}function _(c){l.value=Le(s(l)||{},c),Reflect.has(c,"visible")&&(u.value=!!c.visible),Reflect.has(c,"defaultFullscreen")&&(M.value=!!c.defaultFullscreen)}function P(c){n("ok",c)}function N(c){n("height-change",c)}function R(c){o.value=c}function V(c){!e.canFullscreen||(c.stopPropagation(),f(c))}return{handleCancel:j,getBindValue:F,getProps:H,handleFullScreen:f,fullScreenRef:M,getMergeProps:p,handleOk:P,visibleRef:u,omit:Z,modalWrapperRef:r,handleExtHeight:R,handleHeightChange:N,handleTitleDbClick:V,getWrapperHeight:B}}});function St(e,n,a,u,l,r){const t=m("ModalClose"),o=m("ModalHeader"),d=m("ModalFooter"),i=m("ModalWrapper"),p=m("Modal");return y(),S(p,L(e.getBindValue,{onCancel:e.handleCancel}),oe({default:g(()=>[C(i,L({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:g(()=>[O(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:g(()=>[C(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])},e.$slots.title?void 0:{name:"title",fn:g(()=>[C(o,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])])},e.$slots.footer?void 0:{name:"footer",fn:g(()=>[C(d,L(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),oe({_:2},[le(Object.keys(e.$slots),f=>({name:f,fn:g(h=>[O(e.$slots,f,ae(se(h||{})))])}))]),1040,["onOk","onCancel"])])},le(Object.keys(e.omit(e.$slots,"default")),f=>({name:f,fn:g(h=>[O(e.$slots,f,ae(se(h||{})))])}))]),1040,["onCancel"])}var Ht=D($t,[["render",St]]);const E=fe({}),ce=fe({});function Ft(){const e=b(null),n=b(!1),a=b("");function u(t,o){if(!pe())throw new Error("useModal() can only be used inside setup() or functional components!");a.value=o,de(()=>{e.value=null,n.value=!1,E[s(a)]=null}),!(s(n)&&Ve()&&t===s(e))&&(e.value=t,n.value=!0,t.emitVisible=(d,i)=>{ce[i]=d})}const l=()=>{const t=s(e);return t||Ae("useModal instance is undefined!"),t},r={setModalProps:t=>{var o;(o=l())==null||o.setModalProps(t)},getVisible:$(()=>ce[~~s(a)]),redoModalHeight:()=>{var t,o;(o=(t=l())==null?void 0:t.redoModalHeight)==null||o.call(t)},openModal:(t=!0,o,d=!0)=>{var f;if((f=l())==null||f.setModalProps({visible:t}),!o)return;const i=s(a);if(d){E[i]=null,E[i]=U(o);return}je(U(E[i]),U(o))||(E[i]=U(o))},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})}};return[u,r]}Ue(Ht);const Bt=w({name:"UserDropdown",components:{Dropdown:qe,Menu:re,MenuItem:Ke(()=>ze(()=>import("./DropMenuItem.877a9ccc.js"),["assets/DropMenuItem.877a9ccc.js","assets/index.af1aee38.js","assets/index.c7a16deb.css"])),MenuDivider:re.Divider},props:{theme:Ye.oneOf(["dark","light"])},setup(){const{prefixCls:e}=K("header-user-dropdown"),{t:n}=Q(),{getShowDoc:a}=xe(),u=Xe(),l=$(()=>{const{realName:i="",avatar:p,desc:f}=u.getUserInfo||{};return{realName:i,avatar:p||tt,desc:f}}),[r]=Ft();function t(){u.confirmLoginOut()}function o(){Ze(Je)}function d(i){switch(i.key){case"logout":t();break;case"doc":o();break}}return{prefixCls:e,t:n,getUserInfo:l,handleMenuClick:d,getShowDoc:a,register:r}}}),Ot=["src"];function wt(e,n,a,u,l,r){const t=m("MenuDivider"),o=m("MenuItem"),d=m("Menu"),i=m("Dropdown");return y(),S(i,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g(()=>[C(d,{onClick:e.handleMenuClick},{default:g(()=>[e.getShowDoc?(y(),S(t,{key:0})):Y("",!0),C(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:g(()=>[q("span",{class:I([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[q("img",{class:I(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,Ot),q("span",{class:I(`${e.prefixCls}__info hidden md:block`)},[q("span",{class:I([`${e.prefixCls}__name  `,"truncate"])},X(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"])}var Et=D(Bt,[["render",wt]]);export{Et as default};
