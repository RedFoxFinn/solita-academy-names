(this.webpackJsonpsolita_academy_names=this.webpackJsonpsolita_academy_names||[]).push([[0],{38:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),a=n.n(i),r=n(13),s=n.n(r),d=function(){return{fontSize:"3em",color:"black"}},o=function(){return{fontSize:"1em",color:"grey"}},l=function(){return{fontSize:"1em",color:"#dc4233"}},u=function(){return{marginLeft:"1em",width:"6em",height:"2em",outline:"1px solid #dc4233",border:"1px solid transparent",background:"transparent"}},j=function(){return{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center"}},m=function(){return{display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"}},h=function(){return{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",height:"4em"}},b=function(){return{fontSize:"2.5em",color:"black"}},f=function(){return{fontSize:"1em",color:"darkblue"}},O=function(){return{marginLeft:"1em",width:"8em",height:"2em",outline:"1px solid #dc4233",border:"1px solid transparent",background:"transparent"}},x=function(){return{width:"12em",height:"1em",outline:"1px solid #dc4233",border:"1px solid transparent",background:"transparent"}},y=function(){return{marginBottom:"0.5em",width:"12em",height:"2em",outline:"1px solid #dc4233",border:"1px solid transparent",background:"transparent"}},g=function(){return{marginLeft:"1em",marginRight:"1em",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"}},p=function(){return{fontSize:"1em",color:"forestgreen"}},v=function(){return{fontSize:"1em",color:"black"}},N=function(){return{fontSize:"1.5em",color:"black"}},S=function(t){return Object(c.jsxs)("div",{id:t.id,"data-testid":t.id,style:j(),children:[Object(c.jsx)("p",{id:"".concat(t.id,"-appName"),"data-testid":"".concat(t.id,"-appName"),style:d(),children:"Names"}),Object(c.jsx)("p",{id:"".concat(t.id,"-authorName"),"data-testid":"".concat(t.id,"-authorName"),style:o(),children:"by RedFoxFinn"})]})},A=n(3),k=n(14),D=n.n(k),E=function(){return D.a.get("https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json")},C={fetch:Object.freeze({DONE:"done",ERROR:"error",RUNNING:"running",STOPPED:"stopped"}),sorting:Object.freeze({AtoZ:"by name, ascending",ZtoA:"by name, descending",AMOUNT_ASC:"by amount, ascending",AMOUNT_DES:"by amount, descending"})},w=function(t){return Object(c.jsxs)("li",{id:t.id,"data-testid":t.id,style:h(),title:"Name: ".concat(t.name,"\n Amount: ").concat(t.amount),children:[Object(c.jsx)("p",{style:b(),children:t.name},"".concat(t.id,"-name")),Object(c.jsx)("p",{style:o(),children:t.amount},"".concat(t.id,"-amount"))]},"".concat(t.id,"-").concat(t.name))},R=function(t){return Object(c.jsx)("div",{id:t.id,"data-testid":t.id,style:{},children:Object(c.jsx)("p",{style:l(),children:"You need to fetch the names . . ."})})},B=function(t){return Object(c.jsxs)("div",{id:t.id,"data-testid":t.id,style:m(),children:[Object(c.jsx)("p",{style:l(),children:"Error occured while fetching the names . . ."}),Object(c.jsx)("p",{style:l(),children:"Please try again"})]})},z=function(t){return Object(c.jsx)("div",{id:t.id,"data-testid":t.id,style:{},children:Object(c.jsx)("p",{style:f(),children:"Fetching the names . . ."})})},T=function(t){return Object(c.jsx)("div",{id:t.id,"data-testid":t.id,style:{},children:Object(c.jsxs)("p",{style:l(),children:["With name '",t.name,"' we couldn't find any results"]})})},I=function(t){var e=t.names,n=Object(i.useState)(null),a=Object(A.a)(n,2),r=a[0],s=a[1],d=function(){e=e.sort((function(t,e){return t.name>e.name?1:e.name>t.name?-1:0}))},l=function(t){var n=t.id;return Object(c.jsx)("div",{id:n,"data-testid":n,style:j(),children:Object(c.jsxs)("p",{style:p(),children:["Total amount of names: ",Object(c.jsx)("strong",{children:e.length})]})})},u=function(t){var n=t.id,i=0;return e.forEach((function(t){i+=t.amount})),Object(c.jsx)("div",{id:n,"data-testid":n,style:j(),children:Object(c.jsxs)("p",{style:p(),children:["Total amount from names: ",Object(c.jsx)("strong",{children:i})]})})},h=function(n){var i=n.id;switch(t.sorting){case C.sorting.AtoZ:d();break;case C.sorting.ZtoA:e=e.sort((function(t,e){return e.name>t.name?1:t.name>e.name?-1:0}));break;case C.sorting.AMOUNT_ASC:e=e.sort((function(t,e){return t.amount>e.amount?1:e.amount>t.amount?-1:0}));break;case C.sorting.AMOUNT_DES:e=e.sort((function(t,e){return e.amount>t.amount?1:t.amount>e.amount?-1:0}));break;default:d()}return r?r.length>0?Object(c.jsx)("ul",{id:"".concat(i,"-search"),"data-testid":"".concat(i,"-search"),style:m(),children:r.map((function(e){return Object(c.jsx)(w,{name:e.name,amount:e.amount,id:"".concat(t.id,"-person")})}))}):Object(c.jsx)(T,{id:"".concat(i,"-noResults")}):Object(c.jsx)("ul",{id:"".concat(i,"-list"),"data-testid":"".concat(i,"-list"),style:m(),children:e.map((function(e){return Object(c.jsx)(w,{name:e.name,amount:e.amount,id:"".concat(t.id,"-person")})}))})},b=function(n){var i=n.id;return Object(c.jsxs)("div",{id:i,"data-testid":i,style:m(),children:[Object(c.jsxs)("div",{id:"".concat(i,"-header"),"data-testid":"".concat(i,"-header"),style:j(),children:[Object(c.jsx)("p",{style:N(),children:"Search"}),Object(c.jsx)("p",{style:o(),children:"by name"})]}),Object(c.jsxs)("div",{id:"".concat(i,"-searchBar"),"data-testid":"".concat(i,"-searchBar"),style:j(),children:[Object(c.jsx)("input",{id:"".concat(i,"-searchByName"),"data-testid":"".concat(i,"-searchByName"),type:"text",style:x(),placeholder:"type name for search"}),Object(c.jsx)("input",{id:"".concat(i,"-searchAmounts"),"data-testid":"".concat(i,"-searchAmounts"),type:"button",style:O(),value:"search amounts",onClick:function(){return function(){s([]);var n=document.getElementById("".concat(t.id,"-search-searchByName")).value,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));s(c)}()}}),Object(c.jsx)("input",{id:"".concat(i,"-resetSearch"),"data-testid":"".concat(i,"-resetSearch"),type:"button",style:O(),value:"reset search",onClick:function(){return document.getElementById("".concat(t.id,"-search-searchByName")).value="",void s(null)}})]})]})};return t.names&&Object(c.jsxs)("div",{id:t.id,"data-testid":t.id,style:m(),children:[Object(c.jsx)(l,{id:"".concat(t.id,"-datasetSize")}),Object(c.jsx)(u,{id:"".concat(t.id,"-totalAmount")}),Object(c.jsx)(b,{id:"".concat(t.id,"-search")}),Object(c.jsx)(h,{id:"".concat(t.id,"-nameList")})]})},_=function(t){var e=t.id,n=t.setSorting;return Object(c.jsxs)("div",{id:e,"data-testid":e,style:j(),children:[Object(c.jsxs)("div",{style:g(),children:[Object(c.jsxs)("div",{style:j(),children:[Object(c.jsx)("p",{style:N(),children:"Sort"}),Object(c.jsx)("p",{style:o(),children:"by name"})]}),Object(c.jsx)("button",{id:"".concat(e,"-nameAscending"),"data-testid":"".concat(e,"-nameAscending"),style:y(),onClick:function(){return n(C.sorting.AtoZ)},children:"Name, \u2191"}),Object(c.jsx)("button",{id:"".concat(e,"-nameDescending"),"data-testid":"".concat(e,"-nameDescending"),style:y(),onClick:function(){return n(C.sorting.ZtoA)},children:"Name, \u2193"})]}),Object(c.jsxs)("div",{style:g(),children:[Object(c.jsxs)("div",{style:j(),children:[Object(c.jsx)("p",{style:N(),children:"Sort"}),Object(c.jsx)("p",{style:o(),children:"by amount"})]}),Object(c.jsx)("button",{id:"".concat(e,"-amountAscending"),"data-testid":"".concat(e,"-amountAscending"),style:y(),onClick:function(){return n(C.sorting.AMOUNT_ASC)},children:"Amount, \u2191"}),Object(c.jsx)("button",{id:"".concat(e,"-amountDescending"),"data-testid":"".concat(e,"-amountDescending"),style:y(),onClick:function(){return n(C.sorting.AMOUNT_DES)},children:"Amount, \u2193"})]})]})},U=function(t){var e=t.id,n=t.sorting;return Object(c.jsx)("div",{id:e,"data-testid":e,style:j(),children:Object(c.jsxs)("p",{style:p(),children:["Current sorting: ",Object(c.jsx)("strong",{children:n})]})})},M=function(t){var e=Object(i.useState)(C.fetch.STOPPED),n=Object(A.a)(e,2),a=n[0],r=n[1],s=Object(i.useState)(null),d=Object(A.a)(s,2),o=d[0],l=d[1],h=Object(i.useState)(C.sorting.AtoZ),b=Object(A.a)(h,2),f=b[0],O=b[1],x=function(t){var e=t.id;return Object(c.jsxs)("div",{id:e,"data-testid":e,style:j(),children:[Object(c.jsx)("p",{style:v(),children:"Fetch names?"}),Object(c.jsx)("button",{id:"".concat(e,"-fetchButton"),"data-testid":"".concat(e,"-fetchButton"),style:u(),onClick:function(){return function(){r(C.fetch.RUNNING);try{E().then((function(t){return l(t.data.names)})),r(C.fetch.DONE)}catch(t){r(C.fetch.ERROR)}}()},children:"please do"})]})};return Object(c.jsxs)("div",{id:t.id,"data-testid":t.id,style:m(),children:[Object(c.jsx)(x,{id:"".concat(t.id,"-fetch")}),null==o&&a===C.fetch.RUNNING&&Object(c.jsx)(z,{id:"".concat(t.id,"-status-run")}),null==o&&a===C.fetch.STOPPED&&Object(c.jsx)(R,{id:"".concat(t.id,"-status-nope")}),null==o&&a===C.fetch.ERROR&&Object(c.jsx)(B,{id:"".concat(t.id,"-status-err")}),a===C.fetch.DONE&&o&&null!=o&&Object(c.jsx)(_,{id:"".concat(t.id,"-sorting-selector"),setSorting:O}),a===C.fetch.DONE&&o&&null!=o&&Object(c.jsx)(U,{id:"".concat(t.id,"-sorting-current"),sorting:f}),a===C.fetch.DONE&&o&&null!=o&&Object(c.jsx)(I,{id:"".concat(t.id,"-list"),names:o,sorting:f})]})},P=function(t){return Object(c.jsxs)("div",{id:t.id,"data-testid":t.id,style:m(),children:[Object(c.jsx)(S,{id:"".concat(t.id,"-header")}),Object(c.jsx)(M,{id:"".concat(t.id,"-viewer")})]})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(P,{id:"sda-names"})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2ffbbb4f.chunk.js.map