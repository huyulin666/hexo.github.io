import{a as n,bj as p,k as _,o as i,h as l}from"./index.1c6fab4d.js";const d=n({setup(u){const{currentRoute:s,replace:a}=p(),{params:e,query:o}=_(s),{path:r,_redirect_type:c="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(c==="name"?{name:t,query:o,params:e}:{path:t.startsWith("/")?t:"/"+t,query:o}),(f,h)=>(i(),l("div"))}});export{d as default};
