import{_ as d}from"./nuxt-link.cd556b82.js";import{i as c,o as s,c as _,w as y,b as i,E as n,u as o,G as C,f as b,r as u}from"./entry.12ec9bb1.js";const k=c({__name:"LinkBtn",props:{href:null,variant:null,costumSpanClass:null,costumTextColor:null},setup(e){const{href:l,variant:t,costumSpanClass:m="",costumTextColor:p=""}=e;let a="",r="";return t==="primary"?(a="bg-primary border-2 border-transparent",r="text-white"):t==="primary-outlined"?(a="border-2 border-primary",r="text-primary"):t==="secondary"?(a="bg-primary/5",r="text-primary"):t==="costum"&&(a=m,r=p),(f,g)=>{const x=d;return s(),_(x,{to:e.href,class:"px-6 md:px-7 py-3 rounded-full relative group"},{default:y(()=>[e.variant!=="costum"?(s(),i("span",{key:0,class:n(["absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out",o(a)])},null,2)):C("",!0),b("span",{class:n(["relative flex items-center justify-center",o(r)])},[u(f.$slots,"default")],2)]),_:3},8,["to"])}}}),w=c({__name:"Container",props:{className:null},setup(e){return(l,t)=>(s(),i("div",{class:n(["w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto",e.className])},[u(l.$slots,"default")],2))}});export{k as _,w as a};
