var st=Object.defineProperty,rt=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var De=(e,t,s)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,L=(e,t)=>{for(var s in t||(t={}))lt.call(t,s)&&De(e,s,t[s]);if(Te)for(var s of Te(t))ut.call(t,s)&&De(e,s,t[s]);return e},_e=(e,t)=>rt(e,at(t));var Ce=(e,t,s)=>new Promise((_,d)=>{var E=c=>{try{l(s.next(c))}catch(O){d(O)}},a=c=>{try{l(s.throw(c))}catch(O){d(O)}},l=c=>c.done?_(c.value):Promise.resolve(c.value).then(E,a);l((s=s.apply(e,t)).next())});import{aO as ct,a as k,v as gt,f,z as v,_ as Me,a8 as _t,n as i,c as le,b as pe,R as ue,S as I,o as A,h as G,M as Y,V as N,j as q,H as h,J as Oe,t as ae,Y as J,l as z,q as F,bs as Le,cX as dt,O as de,i as Ae,bL as St,w as Z,co as Et,cY as Re,k as n,aG as K,cD as Ot,x as Ne,a1 as pt,aS as ve,aQ as ft,bY as Tt,T as ye,E as Dt,U as Ct,W as Mt,X as At,D as we,aJ as Rt,aP as Nt,cs as yt,cZ as ht,Z as It,by as W,c_ as he,c$ as Se,d0 as P,b9 as se,ba as Q,d1 as Ie,bZ as re,bN as me,d2 as Ue,d3 as Pe,bJ as Fe,d4 as bt,d5 as Bt,d6 as Lt,d7 as vt,bU as wt,be as mt,A as Ut,d8 as Pt,d9 as Ft,da as Gt,bc as kt}from"./index.53837640.js";import{D as Wt,c as $,u as $t,a as Ht}from"./index.084d3dd6.js";import{A as Xt}from"./ArrowLeftOutlined.bed0be66.js";var xt=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},Vt=k({name:"ADivider",props:xt(),setup:function(t,s){var _=s.slots,d=gt("divider",t),E=d.prefixCls,a=d.direction,l=f(function(){return t.orientation==="left"&&t.orientationMargin!=null}),c=f(function(){return t.orientation==="right"&&t.orientationMargin!=null}),O=f(function(){var S,R=t.type,w=t.dashed,H=t.plain,D=E.value;return S={},v(S,D,!0),v(S,"".concat(D,"-").concat(R),!0),v(S,"".concat(D,"-dashed"),!!w),v(S,"".concat(D,"-plain"),!!H),v(S,"".concat(D,"-rtl"),a.value==="rtl"),v(S,"".concat(D,"-no-default-orientation-margin-left"),l.value),v(S,"".concat(D,"-no-default-orientation-margin-right"),c.value),S}),C=f(function(){var S=typeof t.orientationMargin=="number"?"".concat(t.orientationMargin,"px"):t.orientationMargin;return Me(Me({},l.value&&{marginLeft:S}),c.value&&{marginRight:S})}),M=f(function(){return t.orientation.length>0?"-"+t.orientation:t.orientation});return function(){var S,R=_t((S=_.default)===null||S===void 0?void 0:S.call(_));return i("div",{class:[O.value,R.length?"".concat(E.value,"-with-text ").concat(E.value,"-with-text").concat(M.value):""],role:"separator"},[R.length?i("span",{class:"".concat(E.value,"-inner-text"),style:C.value},[R]):null])}}}),y=ct(Vt);const{t:be}=le(),Ge={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:be("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:be("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},jt=L({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},Ge);const Yt=k({name:"BasicDrawerFooter",props:_e(L({},Ge),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:s}=pe("basic-drawer-footer"),_=f(()=>{const a=`${e.height}`;return{height:a,lineHeight:`calc(${a} - 1px)`}});function d(){t("ok")}function E(){t("close")}return{handleOk:d,prefixCls:s,handleClose:E,getStyle:_}}});function Kt(e,t,s,_,d,E){const a=I("a-button");return e.showFooter||e.$slots.footer?(A(),G("div",{key:0,class:F(e.prefixCls),style:Le(e.getStyle)},[e.$slots.footer?N(e.$slots,"footer",{key:1}):(A(),G(Y,{key:0},[N(e.$slots,"insertFooter"),e.showCancelBtn?(A(),q(a,J({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[Oe(ae(e.cancelText),1)]),_:1},16,["onClick"])):z("",!0),N(e.$slots,"centerFooter"),e.showOkBtn?(A(),q(a,J({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[Oe(ae(e.okText),1)]),_:1},16,["type","onClick","loading"])):z("",!0),N(e.$slots,"appendFooter")],64))],6)):z("",!0)}var Qt=ue(Yt,[["render",Kt]]);const zt=k({name:"BasicDrawerHeader",components:{BasicTitle:dt,ArrowLeftOutlined:Xt},props:{isDetail:de.bool,showDetailBack:de.bool,title:de.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:s}=pe("basic-drawer-header");function _(){t("close")}return{prefixCls:s,handleClose:_}}}),Zt={key:1};function qt(e,t,s,_,d,E){const a=I("BasicTitle"),l=I("ArrowLeftOutlined");return e.isDetail?(A(),G("div",{key:1,class:F([e.prefixCls,`${e.prefixCls}--detail`])},[Ae("span",{class:F(`${e.prefixCls}__twrap`)},[e.showDetailBack?(A(),G("span",{key:0,onClick:t[0]||(t[0]=(...c)=>e.handleClose&&e.handleClose(...c))},[i(l,{class:F(`${e.prefixCls}__back`)},null,8,["class"])])):z("",!0),e.title?(A(),G("span",Zt,ae(e.title),1)):z("",!0)],2),Ae("span",{class:F(`${e.prefixCls}__toolbar`)},[N(e.$slots,"titleToolbar")],2)],2)):(A(),q(a,{key:0,class:F(e.prefixCls)},{default:h(()=>[N(e.$slots,"title"),Oe(" "+ae(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var Jt=ue(zt,[["render",qt]]);const en=k({components:{Drawer:Wt,ScrollContainer:St,DrawerFooter:Qt,DrawerHeader:Jt},inheritAttrs:!1,props:jt,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const s=Z(!1),_=Et(),d=Z(null),{t:E}=le(),{prefixVar:a,prefixCls:l}=pe("basic-drawer"),c={setDrawerProps:ee,emitVisible:void 0},O=ve();O&&t("register",c,O.uid);const C=f(()=>Re(K(e),n(d))),M=f(()=>{const u=_e(L(L({placement:"right"},n(_)),n(C)),{visible:n(s)});u.title=void 0;const{isDetail:p,width:X,wrapClassName:x,getContainer:ce}=u;if(p){X||(u.width="100%");const ne=`${l}__detail`;u.class=x?`${x} ${ne}`:ne,ce||(u.getContainer=`.${a}-layout-content`)}return u}),S=f(()=>L(L({},_),n(M))),R=f(()=>{const{footerHeight:u,showFooter:p}=n(M);return p&&u?Ot(u)?`${u}px`:`${u.replace("px","")}px`:"0px"}),w=f(()=>{const u=n(R);return{position:"relative",height:`calc(100% - ${u})`}}),H=f(()=>{var u;return!!((u=n(M))!=null&&u.loading)});Ne(()=>e.visible,(u,p)=>{u!==p&&(s.value=u)},{deep:!0}),Ne(()=>s.value,u=>{pt(()=>{var p;t("visible-change",u),O&&((p=c.emitVisible)==null||p.call(c,u,O.uid))})});function D(u){return Ce(this,null,function*(){const{closeFunc:p}=n(M);if(t("close",u),p&&ft(p)){const X=yield p();s.value=!X;return}s.value=!1})}function ee(u){d.value=Re(n(d)||{},u),Reflect.has(u,"visible")&&(s.value=!!u.visible)}function te(){t("ok")}return{onClose:D,t:E,prefixCls:l,getMergeProps:C,getScrollContentStyle:w,getProps:M,getLoading:H,getBindValues:S,getFooterHeight:R,handleOk:te}}});function tn(e,t,s,_,d,E){const a=I("DrawerHeader"),l=I("ScrollContainer"),c=I("DrawerFooter"),O=I("Drawer"),C=Tt("loading");return A(),q(O,J({class:e.prefixCls,onClose:e.onClose},e.getBindValues),ye({default:h(()=>[Dt((A(),q(l,{style:Le(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[N(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[C,e.getLoading]]),i(c,J(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),ye({_:2},[Ct(Object.keys(e.$slots),M=>({name:M,fn:h(S=>[N(e.$slots,M,Mt(At(S||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[N(e.$slots,"title")])}:{name:"title",fn:h(()=>[i(a,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[N(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var nn=ue(en,[["render",tn]]);const V=we({}),Be=we({});function on(){if(!ve())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=Z(null),t=Z(!1),s=Z("");function _(a,l){Nt(()=>{e.value=null,t.value=null,V[n(s)]=null}),!(n(t)&&yt()&&a===n(e))&&(s.value=l,e.value=a,t.value=!0,a.emitVisible=(c,O)=>{Be[O]=c})}const d=()=>{const a=n(e);return a||ht("useDrawer instance is undefined!"),a},E={setDrawerProps:a=>{var l;(l=d())==null||l.setDrawerProps(a)},getVisible:f(()=>Be[~~n(s)]),openDrawer:(a=!0,l,c=!0)=>{var C;if((C=d())==null||C.setDrawerProps({visible:a}),!l)return;if(c){V[n(s)]=null,V[n(s)]=K(l);return}Rt(K(V[n(s)]),K(l))||(V[n(s)]=K(l))},closeDrawer:()=>{var a;(a=d())==null||a.setDrawerProps({visible:!1})}};return[_,E]}const sn=It(nn),rn=$(()=>W(()=>import("./TypePicker.871da7ad.js"),["assets/TypePicker.871da7ad.js","assets/TypePicker.2def876c.css","assets/index.53837640.js","assets/index.c7a16deb.css"])),Ee=$(()=>W(()=>import("./ThemeColorPicker.c018d2a1.js"),["assets/ThemeColorPicker.c018d2a1.js","assets/ThemeColorPicker.8eb61909.css","assets/index.53837640.js","assets/index.c7a16deb.css","assets/index.084d3dd6.js","assets/index.18eb9d42.css","assets/useContentViewHeight.5d1ad131.js","assets/index.569b513d.js","assets/index.a2831ae3.css","assets/ArrowLeftOutlined.bed0be66.js"])),an=$(()=>W(()=>import("./SettingFooter.1dae042d.js"),["assets/SettingFooter.1dae042d.js","assets/SettingFooter.339dcc62.css","assets/index.53837640.js","assets/index.c7a16deb.css","assets/CopyOutlined.b2ccd6c1.js","assets/index.084d3dd6.js","assets/index.18eb9d42.css","assets/useContentViewHeight.5d1ad131.js","assets/index.569b513d.js","assets/index.a2831ae3.css"])),g=$(()=>W(()=>import("./SwitchItem.07a4e92e.js"),["assets/SwitchItem.07a4e92e.js","assets/SwitchItem.bdc0c448.css","assets/index.53837640.js","assets/index.c7a16deb.css","assets/index.084d3dd6.js","assets/index.18eb9d42.css","assets/useContentViewHeight.5d1ad131.js","assets/index.569b513d.js","assets/index.a2831ae3.css","assets/ArrowLeftOutlined.bed0be66.js"])),j=$(()=>W(()=>import("./SelectItem.7e6e6475.js"),["assets/SelectItem.7e6e6475.js","assets/SelectItem.a8bbeb0d.css","assets/index.53837640.js","assets/index.c7a16deb.css","assets/index.084d3dd6.js","assets/index.18eb9d42.css","assets/useContentViewHeight.5d1ad131.js","assets/index.569b513d.js","assets/index.a2831ae3.css","assets/ArrowLeftOutlined.bed0be66.js"])),ln=$(()=>W(()=>import("./InputNumberItem.370d9151.js"),["assets/InputNumberItem.370d9151.js","assets/InputNumberItem.c01ab67a.css","assets/index.53837640.js","assets/index.c7a16deb.css","assets/index.084d3dd6.js","assets/index.18eb9d42.css","assets/useContentViewHeight.5d1ad131.js","assets/index.569b513d.js","assets/index.a2831ae3.css","assets/ArrowLeftOutlined.bed0be66.js"])),{t:T}=le();var o=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.FULL_CONTENT=25]="FULL_CONTENT",e[e.CONTENT_MODE=26]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=27]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=28]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=29]="GRAY_MODE",e[e.COLOR_WEAK=30]="COLOR_WEAK",e[e.SHOW_LOGO=31]="SHOW_LOGO",e[e.SHOW_FOOTER=32]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=33]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=34]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=35]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=36]="OPEN_ROUTE_TRANSITION",e))(o||{});const un=[{value:he.FULL,label:T("layout.setting.contentModeFull")},{value:he.FIXED,label:T("layout.setting.contentModeFixed")}],cn=[{value:Se.CENTER,label:T("layout.setting.topMenuAlignRight")},{value:Se.START,label:T("layout.setting.topMenuAlignLeft")},{value:Se.END,label:T("layout.setting.topMenuAlignCenter")}],gn=e=>[{value:re.NONE,label:T("layout.setting.menuTriggerNone")},{value:re.FOOTER,label:T("layout.setting.menuTriggerBottom")},...e?[]:[{value:re.HEADER,label:T("layout.setting.menuTriggerTop")}]],_n=[P.ZOOM_FADE,P.FADE,P.ZOOM_OUT,P.FADE_SIDE,P.FADE_BOTTOM,P.FADE_SCALE].map(e=>({label:e,value:e})),dn=[{title:T("layout.setting.menuTypeSidebar"),mode:se.INLINE,type:Q.SIDEBAR},{title:T("layout.setting.menuTypeMix"),mode:se.INLINE,type:Q.MIX},{title:T("layout.setting.menuTypeTopMenu"),mode:se.HORIZONTAL,type:Q.TOP_MENU},{title:T("layout.setting.menuTypeMixSidebar"),mode:se.INLINE,type:Q.MIX_SIDEBAR}],Sn=[{value:Ie.HOVER,label:T("layout.setting.triggerHover")},{value:Ie.CLICK,label:T("layout.setting.triggerClick")}];function En(e,t){const s=me(),_=On(e,t);s.setProjectConfig(_),e===o.CHANGE_THEME&&(Ue(),Pe())}function On(e,t){const s=me(),{getThemeColor:_,getDarkMode:d}=Fe();switch(e){case o.CHANGE_LAYOUT:const{mode:E,type:a,split:l}=t;return{menuSetting:L({mode:E,type:a,collapsed:!1,show:!0,hidden:!1},l===void 0?{split:l}:{})};case o.CHANGE_THEME_COLOR:return _.value===t?{}:(vt(t),{themeColor:t});case o.CHANGE_THEME:return d.value===t?{}:(Lt(t),{});case o.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case o.MENU_ACCORDION:return{menuSetting:{accordion:t}};case o.MENU_TRIGGER:return{menuSetting:{trigger:t}};case o.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case o.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case o.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case o.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case o.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case o.MENU_THEME:return Pe(t),{menuSetting:{bgColor:t}};case o.MENU_SPLIT:return{menuSetting:{split:t}};case o.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case o.MENU_FIXED:return{menuSetting:{fixed:t}};case o.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case o.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case o.OPEN_PAGE_LOADING:return s.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case o.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case o.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case o.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case o.FULL_CONTENT:return{fullContent:t};case o.CONTENT_MODE:return{contentMode:t};case o.SHOW_BREADCRUMB:return{showBreadCrumb:t};case o.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case o.GRAY_MODE:return Bt(t),{grayMode:t};case o.SHOW_FOOTER:return{showFooter:t};case o.COLOR_WEAK:return bt(t),{colorWeak:t};case o.SHOW_LOGO:return{showLogo:t};case o.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case o.TABS_SHOW:return{multiTabsSetting:{show:t}};case o.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case o.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case o.HEADER_THEME:return Ue(t),{headerSetting:{bgColor:t}};case o.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case o.HEADER_FIXED:return{headerSetting:{fixed:t}};case o.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}const{t:r}=le();var pn=k({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:s,getShowFooter:_,getShowBreadCrumb:d,getShowBreadCrumbIcon:E,getShowLogo:a,getFullContent:l,getColorWeak:c,getGrayMode:O,getShowDarkModeToggle:C,getThemeColor:M}=Fe(),{getOpenPageLoading:S,getBasicTransition:R,getEnableTransition:w,getOpenNProgress:H}=wt(),{getIsHorizontal:D,getShowMenu:ee,getMenuType:te,getTrigger:u,getCollapsedShowTitle:p,getMenuFixed:X,getCollapsed:x,getCanDrag:ce,getTopMenuAlign:ne,getAccordion:ke,getMenuWidth:We,getMenuBgColor:$e,getIsTopMenu:He,getSplit:oe,getIsMixSidebar:b,getCloseMixSidebarOnChange:Xe,getMixSideTrigger:xe,getMixSideFixed:Ve}=mt(),{getShowHeader:m,getFixed:je,getHeaderBgColor:Ye,getShowSearch:Ke}=$t(),{getShowMultipleTab:ie,getShowQuick:Qe,getShowRedo:ze,getShowFold:Ze}=Ht(),B=f(()=>n(ee)&&!n(D));function qe(){return i(Y,null,[i(rn,{menuTypeList:dn,handler:U=>{En(o.CHANGE_LAYOUT,{mode:U.mode,type:U.type,split:n(D)?!1:void 0})},def:n(te)},null)])}function Je(){return i(Ee,{colorList:Pt,def:n(Ye),event:o.HEADER_THEME},null)}function et(){return i(Ee,{colorList:Ft,def:n($e),event:o.MENU_THEME},null)}function tt(){return i(Ee,{colorList:Gt,def:n(M),event:o.CHANGE_THEME_COLOR},null)}function nt(){let U=n(u);const fe=gn(n(oe));return fe.some(ge=>ge.value===U)||(U=re.FOOTER),i(Y,null,[i(g,{title:r("layout.setting.splitMenu"),event:o.MENU_SPLIT,def:n(oe),disabled:!n(B)||n(te)!==Q.MIX},null),i(g,{title:r("layout.setting.mixSidebarFixed"),event:o.MENU_FIXED_MIX_SIDEBAR,def:n(Ve),disabled:!n(b)},null),i(g,{title:r("layout.setting.closeMixSidebarOnChange"),event:o.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:n(Xe),disabled:!n(b)},null),i(g,{title:r("layout.setting.menuCollapse"),event:o.MENU_COLLAPSED,def:n(x),disabled:!n(B)},null),i(g,{title:r("layout.setting.menuDrag"),event:o.MENU_HAS_DRAG,def:n(ce),disabled:!n(B)},null),i(g,{title:r("layout.setting.menuSearch"),event:o.HEADER_SEARCH,def:n(Ke),disabled:!n(m)},null),i(g,{title:r("layout.setting.menuAccordion"),event:o.MENU_ACCORDION,def:n(ke),disabled:!n(B)},null),i(g,{title:r("layout.setting.collapseMenuDisplayName"),event:o.MENU_COLLAPSED_SHOW_TITLE,def:n(p),disabled:!n(B)||!n(x)||n(b)},null),i(g,{title:r("layout.setting.fixedHeader"),event:o.HEADER_FIXED,def:n(je),disabled:!n(m)},null),i(g,{title:r("layout.setting.fixedSideBar"),event:o.MENU_FIXED,def:n(X),disabled:!n(B)||n(b)},null),i(j,{title:r("layout.setting.mixSidebarTrigger"),event:o.MENU_TRIGGER_MIX_SIDEBAR,def:n(xe),options:Sn,disabled:!n(b)},null),i(j,{title:r("layout.setting.topMenuLayout"),event:o.MENU_TOP_ALIGN,def:n(ne),options:cn,disabled:!n(m)||n(oe)||!n(He)&&!n(oe)||n(b)},null),i(j,{title:r("layout.setting.menuCollapseButton"),event:o.MENU_TRIGGER,def:U,options:fe,disabled:!n(B)||n(b)},null),i(j,{title:r("layout.setting.contentMode"),event:o.CONTENT_MODE,def:n(s),options:un},null),i(ln,{title:r("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:o.MENU_WIDTH,disabled:!n(B),defaultValue:n(We),formatter:ge=>`${parseInt(ge)}px`},null)])}function ot(){return i(Y,null,[i(g,{title:r("layout.setting.breadcrumb"),event:o.SHOW_BREADCRUMB,def:n(d),disabled:!n(m)},null),i(g,{title:r("layout.setting.breadcrumbIcon"),event:o.SHOW_BREADCRUMB_ICON,def:n(E),disabled:!n(m)},null),i(g,{title:r("layout.setting.tabs"),event:o.TABS_SHOW,def:n(ie)},null),i(g,{title:r("layout.setting.tabsRedoBtn"),event:o.TABS_SHOW_REDO,def:n(ze),disabled:!n(ie)},null),i(g,{title:r("layout.setting.tabsQuickBtn"),event:o.TABS_SHOW_QUICK,def:n(Qe),disabled:!n(ie)},null),i(g,{title:r("layout.setting.tabsFoldBtn"),event:o.TABS_SHOW_FOLD,def:n(Ze),disabled:!n(ie)},null),i(g,{title:r("layout.setting.sidebar"),event:o.MENU_SHOW_SIDEBAR,def:n(ee),disabled:n(D)},null),i(g,{title:r("layout.setting.header"),event:o.HEADER_SHOW,def:n(m)},null),i(g,{title:"Logo",event:o.SHOW_LOGO,def:n(a),disabled:n(b)},null),i(g,{title:r("layout.setting.footer"),event:o.SHOW_FOOTER,def:n(_)},null),i(g,{title:r("layout.setting.fullContent"),event:o.FULL_CONTENT,def:n(l)},null),i(g,{title:r("layout.setting.grayMode"),event:o.GRAY_MODE,def:n(O)},null),i(g,{title:r("layout.setting.colorWeak"),event:o.COLOR_WEAK,def:n(c)},null)])}function it(){return i(Y,null,[i(g,{title:r("layout.setting.progress"),event:o.OPEN_PROGRESS,def:n(H)},null),i(g,{title:r("layout.setting.switchLoading"),event:o.OPEN_PAGE_LOADING,def:n(S)},null),i(g,{title:r("layout.setting.switchAnimation"),event:o.OPEN_ROUTE_TRANSITION,def:n(w)},null),i(j,{title:r("layout.setting.animationType"),event:o.ROUTER_TRANSITION,def:n(R),options:_n,disabled:!n(w)},null)])}return()=>i(sn,J(t,{title:r("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[n(C)&&i(y,null,{default:()=>r("layout.setting.darkMode")}),n(C)&&i(Ut,{class:"mx-auto"},null),i(y,null,{default:()=>r("layout.setting.navMode")}),qe(),i(y,null,{default:()=>r("layout.setting.sysTheme")}),tt(),i(y,null,{default:()=>r("layout.setting.headerTheme")}),Je(),i(y,null,{default:()=>r("layout.setting.sidebarTheme")}),et(),i(y,null,{default:()=>r("layout.setting.interfaceFunction")}),nt(),i(y,null,{default:()=>r("layout.setting.interfaceDisplay")}),ot(),i(y,null,{default:()=>r("layout.setting.animation")}),it(),i(y,null,null),i(an,null,null)]})}});const fn=k({name:"SettingButton",components:{SettingDrawer:pn,Icon:kt},setup(){const[e,{openDrawer:t}]=on();return{register:e,openDrawer:t}}});function Tn(e,t,s,_,d,E){const a=I("Icon"),l=I("SettingDrawer");return A(),G("div",{onClick:t[0]||(t[0]=c=>e.openDrawer(!0))},[i(a,{icon:"ion:settings-outline"}),i(l,{onRegister:e.register},null,8,["onRegister"])])}var Dn=ue(fn,[["render",Tn]]),yn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"}));export{En as b,yn as i};
