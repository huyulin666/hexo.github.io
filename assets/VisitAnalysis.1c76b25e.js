var n=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(a,e,t)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,l=(a,e)=>{for(var t in e||(e={}))p.call(e,t)&&i(a,t,e[t]);if(s)for(var t of s(e))c.call(e,t)&&i(a,t,e[t]);return a};import{u as h}from"./useECharts.abf89eda.js";import{b as m}from"./props.f48aca0b.js";import{a as y,w as u,a0 as f,o as d,h as b,bs as g}from"./index.53837640.js";const k=y({props:l({},m),setup(a){const e=u(null),{setOptions:t}=h(e);return f(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},xAxis:{type:"category",boundaryGap:!1,data:[...new Array(18)].map((o,r)=>`${r+6}:00`),splitLine:{show:!0,lineStyle:{width:1,type:"solid",color:"rgba(226,226,226,0.5)"}},axisTick:{show:!1}},yAxis:[{type:"value",max:1e4,splitNumber:4,axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0.2)","rgba(226,226,226,0.2)"]}}}],grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},series:[{smooth:!0,data:[11,22,400,1800,3333,5555,6666,4333,3400,3600,4666,4044,2222,1111,400,200,50,33,22,11],type:"line",areaStyle:{},itemStyle:{color:"#5ab1ef"}},{smooth:!0,data:[1,2,40,180,333,555,666,433,340,360,466,404,222,111,40,20,5,3,2,1],type:"line",areaStyle:{},itemStyle:{color:"#eeaaaa"}}]})}),(o,r)=>(d(),b("div",{ref_key:"chartRef",ref:e,style:g({height:o.height,width:o.width})},null,4))}});export{k as default};
