(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{176:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),s=t.n(r),l=t(3),o=t.n(l),u=t(5),i=t(2),d=t(14),p=t(57),m=t.n(p).a.create({baseURL:"https://covid19-brazil-api.now.sh"}),b=t(59),f=[{value:"AC",label:"Acre"},{value:"AL",label:"Alagoas"},{value:"AP",label:"Amap\xe1"},{value:"AM",label:"Amazonas"},{value:"BA",label:"Bahia"},{value:"CE",label:"Cear\xe1"},{value:"DF",label:"Distrito Federal"},{value:"ES",label:"Esp\xedrito Santo"},{value:"GO",label:"Goi\xe1s"},{value:"MA",label:"Maranh\xe3o"},{value:"MT",label:"Mato Grosso"},{value:"MS",label:"Mato Grosso do Sul"},{value:"MG",label:"Minas Gerais"},{value:"PA",label:"Par\xe1"},{value:"PB",label:"Para\xedba"},{value:"PR",label:"Paran\xe1"},{value:"PE",label:"Pernambuco"},{value:"PI",label:"Piau\xed"},{value:"RJ",label:"Rio de Janeiro"},{value:"RN",label:"Rio Grande do Norte"},{value:"RS",label:"Rio Grande do Sul"},{value:"RO",label:"Rond\xf4nia"},{value:"RR",label:"Roraima"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xe3o Paulo"},{value:"SE",label:"Sergipe"},{value:"TO",label:"Tocantins"}];t(176);function v(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(!0),l=Object(i.a)(s,2),p=(l[0],l[1]),v=Object(n.useState)(""),h=Object(i.a)(v,2),E=h[0],g=h[1];function w(e){return e.getFullYear()+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+(e.getDate()<10?"0"+e.getDate():e.getDate())}function O(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(a){var t,n,c,r,s,l,u,i,d,p,b,f,v,h,E,g,O,j,k,x,S,D,N;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=864e5,e.next=4,m.get("/api/report/v1/brazil/".concat(w(new Date(t-42*n))));case 4:return e.next=6,e.sent.data.data;case 6:return c=e.sent,e.next=9,m.get("/api/report/v1/brazil/".concat(w(new Date(t-35*n))));case 9:return e.next=11,e.sent.data.data;case 11:return r=e.sent,e.next=14,m.get("/api/report/v1/brazil/".concat(w(new Date(t-28*n))));case 14:return e.next=16,e.sent.data.data;case 16:return s=e.sent,e.next=19,m.get("/api/report/v1/brazil/".concat(w(new Date(t-21*n))));case 19:return e.next=21,e.sent.data.data;case 21:return l=e.sent,e.next=24,m.get("/api/report/v1/brazil/".concat(w(new Date(t-14*n))));case 24:return e.next=26,e.sent.data.data;case 26:return u=e.sent,e.next=29,m.get("/api/report/v1/brazil/".concat(w(new Date(t-7*n))));case 29:return e.next=31,e.sent.data.data;case 31:return i=e.sent,e.next=34,m.get("/api/report/v1/brazil/".concat(w(t)));case 34:return e.next=36,e.sent.data.data;case 36:if(0!==(d=e.sent).length){e.next=43;break}return e.next=40,m.get("/api/report/v1/brazil/".concat(w(new Date(t-1*n))));case 40:return e.next=42,e.sent.data.data;case 42:d=e.sent;case 43:return p="",b="",f="",v="",h="",E="",g="",O="",j="",k="",x="",S="",D="",Object.entries(c).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(p=e[1].cases)})),Object.entries(r).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(b=e[1].cases,O=new Date(e[1].datetime))})),Object.entries(s).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(f=e[1].cases,j=new Date(e[1].datetime))})),Object.entries(l).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(v=e[1].cases,k=new Date(e[1].datetime))})),Object.entries(u).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(h=e[1].cases,x=new Date(e[1].datetime))})),Object.entries(i).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(E=e[1].cases,S=new Date(e[1].datetime))})),Object.entries(d).map((function(e){(e[1].uf===a||"RS"===e[1].uf)&&(g=e[1].cases,D=new Date(e[1].datetime))})),N={week1:{cases:b-p,date:O},week2:{cases:f-b,date:j},week3:{cases:v-f,date:k},week4:{cases:h-v,date:x},week5:{cases:E-h,date:S},week6:{cases:g-E,date:D}},e.abrupt("return",N);case 71:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,O(a.value);case 3:t=e.sent,r({labels:["".concat(t.week1.date.getDate(),"/").concat(t.week1.date.getMonth()+1),"".concat(t.week2.date.getDate(),"/").concat(t.week2.date.getMonth()+1),"".concat(t.week3.date.getDate(),"/").concat(t.week3.date.getMonth()+1),"".concat(t.week4.date.getDate(),"/").concat(t.week4.date.getMonth()+1),"".concat(t.week5.date.getDate(),"/").concat(t.week5.date.getMonth()+1),"".concat(t.week6.date.getDate(),"/").concat(t.week6.date.getMonth()+1)],datasets:[{label:"Aumento de casos por semana",data:[t.week1.cases,t.week2.cases,t.week3.cases,t.week4.cases,t.week5.cases,t.week6.cases],borderColor:"#6370ff",backgroundColor:"rgba(99, 112, 255, 0.3)",pointBackgroundColor:"#6370ff",pointRadius:4,pointHoverRadius:8,pointHoverBorderColor:"#55bae7"}]}),p(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){k.apply(this,arguments)}(E)}),[E]),c.a.createElement("div",{className:"chart"},c.a.createElement("p",{className:"title"},"Aumento de casos no estado ".concat(E?E.value:"RS")),c.a.createElement("div",{className:"select"},c.a.createElement(b.a,{value:E,onChange:function(e){g(e)},options:f,placeholder:"Selecione um Estado",className:"select"})),c.a.createElement(d.b,{height:100,data:t,options:{legend:{display:!0,position:"bottom"},maintainAspectRatio:!0}}))}t(177);function h(e){var a=e.chartData,t=e.legendPosition,r=Object(n.useState)(a),s=Object(i.a)(r,1)[0],l=Object(n.useState)(t),o=Object(i.a)(l,1)[0];return c.a.createElement("div",{className:"Dchart"},c.a.createElement(d.a,{className:"hchart",data:s,options:{title:{display:!0,text:"Total de casos no Brasil",fontSize:20},legend:{display:!0,position:o},maintainAspectRatio:!0}}))}t(178);function E(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),d=l[0],p=l[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),v=f[0],h=f[1];function E(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function g(){return(g=Object(u.a)(o.a.mark((function e(){var a,t,n,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/api/report/v1/brazil");case 2:a=e.sent,t=a.data.data.confirmed,n=a.data.data.deaths,c=a.data.data.updated_at,s=new Date(c),l=s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear()+" - "+s.getHours()+"h",p(E(t)),h(E(n)),r(l);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"updated"},c.a.createElement("p",{className:"updateFont"},"\xdaltima atualiza\xe7\xe3o"),c.a.createElement("p",null,c.a.createElement("strong",{className:""},t))),c.a.createElement("div",{className:"cont"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{className:"containerFont"},"Casos Confirmados"),c.a.createElement("p",null,c.a.createElement("strong",{className:"strongCase"},d))),c.a.createElement("div",{className:"box"},c.a.createElement("p",{className:"containerFont"},"Total de \xd3bitos"),c.a.createElement("p",null,c.a.createElement("strong",{className:"strongDeath"},v))),c.a.createElement("div",{className:"box"},c.a.createElement("p",{className:"containerFont"},"Taxa de Letalidade"),c.a.createElement("p",null,c.a.createElement("strong",{className:"strongLetal"},"".concat((100*v/d).toFixed(2),"%"))))))}t(179);function g(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];function s(){return(s=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("https://covid19-brazil-api.now.sh/api/report/v1");case 2:return e.next=4,e.sent.data.data;case 4:a=e.sent,r(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"c"},c.a.createElement("div",{className:"blueTable"},c.a.createElement("table",null,c.a.createElement("thead",{className:"head"},c.a.createElement("tr",null,c.a.createElement("th",null,"Estado"),c.a.createElement("th",null,"Casos"),c.a.createElement("th",null,"\xd3bitos"),c.a.createElement("th",null,"Letalidade"))),t.map((function(e){return c.a.createElement("tbody",{key:e.uid},c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("strong",null,e.state)),c.a.createElement("td",null,e.cases),c.a.createElement("td",null,e.deaths),c.a.createElement("td",null,function(e){return"".concat((100*e.deaths/e.cases).toFixed(2),"%")}(e))))})))))}t(180);function w(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)({}),l=Object(i.a)(s,2),d=l[0],p=l[1];function b(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil");case 2:return a=e.sent,t={cases:a.data.data.cases,deaths:a.data.data.deaths,recovers:a.data.data.recovered,total:a.data.data.confirmed},e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:a=e.sent,p({labels:["Recuperados","Casos Ativos","\xd3bitos"],datasets:[{label:"Casos",data:[a.recovers,a.cases,a.deaths],backgroundColor:["#50c878","#6370ff","#e8544f"]}]}),r(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"MainPage"},c.a.createElement("header",null,"Coronav\xedrus"),c.a.createElement(E,null),c.a.createElement(v,null),c.a.createElement("div",{className:"charts"},t?c.a.createElement("p",null,"Loading"):c.a.createElement(h,{chartData:d,legendPosition:"bottom"}),c.a.createElement(g,null)))}t(181);function O(){return c.a.createElement(w,null)}s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))},60:function(e,a,t){e.exports=t(182)}},[[60,1,2]]]);
//# sourceMappingURL=main.0bbe7db7.chunk.js.map