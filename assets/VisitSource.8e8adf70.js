import{a as o,w as n,x as r,o as l,j as u,H as s,i as d,bs as f,k as m}from"./index.af1aee38.js";import{C as c}from"./index.1dbb4aba.js";import"./index.284c7062.js";import"./index.431ed50e.js";import{u as h}from"./useECharts.6cd4716f.js";import"./index.fb46e027.js";const x=o({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=n(null),{setOptions:i}=h(a);return r(()=>t.loading,()=>{t.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u4F2A\u9020\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u56FD\u5185"},{value:735,name:"\u7F8E\u56FD"},{value:580,name:"\u4FC4\u7F57\u65AF"},{value:484,name:"\u6CD5\u56FD"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(p,g)=>(l(),u(m(c),{title:"\u4F2A\u9020\u6765\u6E90",loading:e.loading},{default:s(()=>[d("div",{ref_key:"chartRef",ref:a,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{x as default};
