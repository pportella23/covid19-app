(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),l=a(3),o=a.n(l),i=a(5),d=a(2),u=a(24),m=a(61),h=a.n(m).a.create({}),p=a(63),f=[{value:"AC",label:"Acre"},{value:"AL",label:"Alagoas"},{value:"AP",label:"Amap\xe1"},{value:"AM",label:"Amazonas"},{value:"BA",label:"Bahia"},{value:"CE",label:"Cear\xe1"},{value:"DF",label:"Distrito Federal"},{value:"ES",label:"Esp\xedrito Santo"},{value:"GO",label:"Goi\xe1s"},{value:"MA",label:"Maranh\xe3o"},{value:"MT",label:"Mato Grosso"},{value:"MS",label:"Mato Grosso do Sul"},{value:"MG",label:"Minas Gerais"},{value:"PA",label:"Par\xe1"},{value:"PB",label:"Para\xedba"},{value:"PR",label:"Paran\xe1"},{value:"PE",label:"Pernambuco"},{value:"PI",label:"Piau\xed"},{value:"RJ",label:"Rio de Janeiro"},{value:"RN",label:"Rio Grande do Norte"},{value:"RS",label:"Rio Grande do Sul"},{value:"RO",label:"Rond\xf4nia"},{value:"RR",label:"Roraima"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xe3o Paulo"},{value:"SE",label:"Sergipe"},{value:"TO",label:"Tocantins"}];a(181);function b(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),l=Object(d.a)(c,2),m=l[0],b=l[1],v=Object(n.useState)({label:"Rio Grande do Sul",value:"RS"}),E=Object(d.a)(v,2),g=E[0],w=E[1];function D(e){return e.getFullYear()+"-"+(e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())}function k(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(o.a.mark((function e(t){var a,n,s,r,c,l,i,d,u,m,p,f,b,v,E,g,w,k,_,O,j,N,x,S,y,C,R,A,M,P,F,B;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state&state=".concat(t));case 2:return e.next=4,e.sent.data.results[0];case 4:return a=e.sent,e.next=7,h.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=False&place_type=state&state=".concat(t));case 7:return e.next=9,e.sent.data.results;case 9:if((n=e.sent).unshift(a),s=[],r=[],n.length>43){for(Object.entries(n).map((function(e){s.push({confirmed:e[1].confirmed,date:e[1].date,death_rate:e[1].death_rate,deaths:e[1].deaths}),s.estimated=e[1].estimated_population_2019,s.state=e[1].state})),c=0;c<43;c+=7)r.push(s[c]);r.estimated=s.estimated,r.state=s.state}else if(n.length>36){for(Object.entries(n).map((function(e){s.push({confirmed:e[1].confirmed,date:e[1].date,death_rate:e[1].death_rate,deaths:e[1].deaths}),s.estimated=e[1].estimated_population_2019,s.state=e[1].state})),l=0;l<36;l+=7)r.push(s[l]);(i=new Date(r[r.length-1].date)).setDate(i.getDate()-6),r.push({confirmed:0,date:D(i),death_rate:0,deaths:0}),r.estimated=s.estimated,r.state=s.state}else if(n.length>29){for(Object.entries(n).map((function(e){s.push({confirmed:e[1].confirmed,date:e[1].date,death_rate:e[1].death_rate,deaths:e[1].deaths}),s.estimated=e[1].estimated_population_2019,s.state=e[1].state})),d=0;d<29;d+=7)r.push(s[d]);(u=new Date(r[r.length-1].date)).setDate(u.getDate()-6),(m=new Date(u)).setDate(m.getDate()-6),r.push({confirmed:0,date:D(u),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(m),death_rate:0,deaths:0}),r.estimated=s.estimated,r.state=s.state}else if(n.length>22){for(Object.entries(n).map((function(e){s.push({confirmed:e[1].confirmed,date:e[1].date,death_rate:e[1].death_rate,deaths:e[1].deaths}),s.estimated=e[1].estimated_population_2019,s.state=e[1].state})),p=0;p<22;p+=7)r.push(s[p]);(f=new Date(r[r.length-1].date)).setDate(f.getDate()-6),(b=new Date(f)).setDate(b.getDate()-6),(v=new Date(b)).setDate(v.getDate()-6),r.push({confirmed:0,date:D(f),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(b),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(v),death_rate:0,deaths:0}),r.estimated=s.estimated,r.state=s.state}else if(n.length>15){for(Object.entries(n).map((function(e){s.push({confirmed:e[1].confirmed,date:e[1].date,death_rate:e[1].death_rate,deaths:e[1].deaths}),s.estimated=e[1].estimated_population_2019,s.state=e[1].state})),E=0;E<15;E+=7)r.push(s[E]);(g=new Date(r[r.length-1].date)).setDate(g.getDate()-6),(w=new Date(g)).setDate(w.getDate()-6),(k=new Date(w)).setDate(k.getDate()-6),(_=new Date(k)).setDate(_.getDate()-6),r.push({confirmed:0,date:D(g),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(w),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(k),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(_),death_rate:0,deaths:0}),r.estimated=s.estimated,r.state=s.state}else if(n.length>8){for(Object.entries(n).map((function(e){s.push({confirmed:e[1].confirmed,date:e[1].date,death_rate:e[1].death_rate,deaths:e[1].deaths}),s.estimated=e[1].estimated_population_2019,s.state=e[1].state})),O=0;O<15;O+=7)r.push(s[O]);(j=new Date(r[r.length-1].date)).setDate(j.getDate()-6),(N=new Date(j)).setDate(N.getDate()-6),(x=new Date(N)).setDate(x.getDate()-6),(S=new Date(x)).setDate(S.getDate()-6),(y=new Date(S)).setDate(y.getDate()-6),r.push({confirmed:0,date:D(j),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(N),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(x),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(S),death_rate:0,deaths:0}),r.push({confirmed:0,date:D(y),death_rate:0,deaths:0}),r.estimated=s.estimated,r.state=s.state}else console.log("dados insuficientes");return C=r[5].confirmed-r[6].confirmed,R=r[4].confirmed-r[5].confirmed,A=r[3].confirmed-r[4].confirmed,M=r[2].confirmed-r[3].confirmed,P=r[1].confirmed-r[2].confirmed,F=r[0].confirmed-r[1].confirmed,B={week1:{cases:C,date:r[5].date},week2:{cases:R,date:r[4].date},week3:{cases:A,date:r[3].date},week4:{cases:M,date:r[2].date},week5:{cases:P,date:r[1].date},week6:{cases:F,date:r[0].date}},e.abrupt("return",B);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,k(t.value);case 3:a=e.sent,console.log(a),r({labels:["".concat(a.week1.date.substring(8,10),"/").concat(a.week1.date.substring(5,7)),"".concat(a.week2.date.substring(8,10),"/").concat(a.week2.date.substring(5,7)),"".concat(a.week3.date.substring(8,10),"/").concat(a.week3.date.substring(5,7)),"".concat(a.week4.date.substring(8,10),"/").concat(a.week4.date.substring(5,7)),"".concat(a.week5.date.substring(8,10),"/").concat(a.week5.date.substring(5,7)),"".concat(a.week6.date.substring(8,10),"/").concat(a.week6.date.substring(5,7))],datasets:[{label:"Aumento de casos por semana",data:[a.week1.cases,a.week2.cases,a.week3.cases,a.week4.cases,a.week5.cases,a.week6.cases],borderColor:"#6370ff",backgroundColor:"rgba(99, 112, 255, 0.3)",pointBackgroundColor:"#6370ff",pointRadius:4,pointHoverRadius:8,pointHoverBorderColor:"rgba(121, 209, 255, 0.9)"}]}),b(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){O.apply(this,arguments)}(g)}),[g]),s.a.createElement("div",{className:"chart"},s.a.createElement("p",{className:"title"},"Aumento de casos no estado ".concat(g?g.value:"RS")),s.a.createElement("div",{className:"select"},s.a.createElement(p.a,{value:g,onChange:function(e){w(e)},options:f,placeholder:"Selecione um Estado",className:"select"})),m?s.a.createElement("p",{className:"p"},"Carregando.."):s.a.createElement(u.b,{height:100,data:a,options:{legend:{display:!0,position:"bottom"},maintainAspectRatio:!0}}))}a(182);function v(e){var t=e.chartData,a=e.legendPosition,r=Object(n.useState)(t),c=Object(d.a)(r,1)[0],l=Object(n.useState)(a),o=Object(d.a)(l,1)[0];return s.a.createElement("div",null,s.a.createElement(u.a,{height:400,width:300,data:c,options:{title:{display:!0,text:"Total de casos no Brasil",fontSize:20},legend:{display:!0,position:o},responsive:!0,maintainAspectRatio:!1}}))}a(183);function E(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(d.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(""),f=Object(d.a)(p,2),b=f[0],v=f[1],E=Object(n.useState)(""),g=Object(d.a)(E,2),w=g[0],D=g[1];function k(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function _(){return(_=Object(i.a)(o.a.mark((function e(){var t,a,n,s,c,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil");case 2:t=e.sent,a=t.data.data.confirmed,n=t.data.data.deaths,s=t.data.data.updated_at,c=t.data.data.recovered,l=new Date(s),i=l.getDate()+"/"+(l.getMonth()+1)+"/"+l.getFullYear()+" - "+l.getHours()+"h",m(k(a)),v(k(n)),D(k(c)),r(i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){_.apply(this,arguments)}()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"updated"},s.a.createElement("p",{className:"updateFont"},"\xdaltima atualiza\xe7\xe3o"),s.a.createElement("p",null,s.a.createElement("strong",{className:""},a))),s.a.createElement("div",{className:"cont"},s.a.createElement("div",{className:"box"},s.a.createElement("p",{className:"containerFont"},"Casos Confirmados"),s.a.createElement("p",null,s.a.createElement("strong",{className:"strongCase"},u))),s.a.createElement("div",{className:"box"},s.a.createElement("p",{className:"containerFont"},"Total de \xd3bitos"),s.a.createElement("p",null,s.a.createElement("strong",{className:"strongDeath"},b))),s.a.createElement("div",{className:"box"},s.a.createElement("p",{className:"containerFont"},"Total de Recuperados"),s.a.createElement("p",null,s.a.createElement("strong",{className:"strongLetal"},w)))))}a(184);var g=a(10);function w(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1];function c(e){return parseFloat((100*e.deaths/e.cases).toFixed(2))}function l(){return(l=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("https://covid19-brazil-api.now.sh/api/report/v1");case 2:return e.next=4,e.sent.data.data;case 4:t=(t=e.sent).map((function(e){var t={};return t.uid=e.uid++,t.state=e.state,t.cases=e.cases,t.deaths=e.deaths,t.lethality=c(e),t})),r(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t){var n=a.sort((function(a,n){return function(e,t,a,n){if("lethality"===n){var s=e.lethality,r=t.lethality;if("asc"===a)return s>r?1:s<r?-1:0;if("desc"===a)return s<r?1:s>r?-1:0}else{if("asc"===a)return e[n]>t[n]?1:e[n]<t[n]?-1:0;if("desc"===a)return e[n]<t[n]?1:e[n]>t[n]?-1:0}}(a,n,e,t)})).map((function(e){var t={};return t.uid=e.uid++,t.state=e.state,t.cases=e.cases,t.deaths=e.deaths,t.lethality=e.lethality,t}));r(n)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),s.a.createElement("div",{className:"c"},s.a.createElement("div",{className:"blueTable"},s.a.createElement("table",null,s.a.createElement("thead",{className:"head"},s.a.createElement("tr",null,s.a.createElement("th",null,"Estado",s.a.createElement("div",{className:"sort-controls"},s.a.createElement("div",{onClick:function(){return u("asc","state")},className:"text-asc"},s.a.createElement(g.b,null)),"|",s.a.createElement("div",{onClick:function(){return u("desc","state")},className:"text-desc"},s.a.createElement(g.a,null)))),s.a.createElement("th",null,"Casos",s.a.createElement("div",{className:"sort-controls"},s.a.createElement("div",{onClick:function(){return u("asc","cases")},className:"text-asc"},s.a.createElement(g.b,null)),"|",s.a.createElement("div",{onClick:function(){return u("desc","cases")},className:"text-desc"},s.a.createElement(g.a,null)))),s.a.createElement("th",null,"\xd3bitos",s.a.createElement("div",{className:"sort-controls"},s.a.createElement("div",{onClick:function(){return u("asc","deaths")},className:"text-asc"},s.a.createElement(g.b,null)),"|",s.a.createElement("div",{onClick:function(){return u("desc","deaths")},className:"text-desc"},s.a.createElement(g.a,null)))),s.a.createElement("th",null,"Letalidade",s.a.createElement("div",{className:"sort-controls"},s.a.createElement("div",{onClick:function(){return u("asc","lethality")},className:"text-asc"},s.a.createElement(g.b,null)),"|",s.a.createElement("div",{onClick:function(){return u("desc","lethality")},className:"text-desc"},s.a.createElement(g.a,null)))))),a.map((function(e){return s.a.createElement("tbody",{key:e.uid},s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("strong",null,e.state)),s.a.createElement("td",null,e.cases),s.a.createElement("td",null,e.deaths),s.a.createElement("td",null,e.lethality,"%")))})))))}var D=a(64);function k(){return s.a.createElement("div",null,s.a.createElement(D.a,{sourceType:"url",url:"https://twitter.com/CoronavirusBra1",options:{height:400,width:600}}))}a(185);a(186);function _(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),l=Object(d.a)(c,2),u=l[0],m=l[1];function p(){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil");case 2:return t=e.sent,a={cases:t.data.data.cases,deaths:t.data.data.deaths,recovers:t.data.data.recovered,total:t.data.data.confirmed},e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,m({labels:["Recuperados","Casos Ativos","\xd3bitos"],datasets:[{label:"Casos",data:[t.recovers,t.cases,t.deaths],backgroundColor:["rgba(92, 188, 124, 0.9)","rgba(99, 112, 255, 0.8)","rgba(255, 87, 77, 0.9)"]}]}),r(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),s.a.createElement("div",{className:"MainPage"},s.a.createElement("header",null,"Coronav\xedrus"),s.a.createElement(E,null),s.a.createElement(b,null),s.a.createElement("div",{className:"contMiddle"},s.a.createElement("div",{className:"boxChart"},a?s.a.createElement("p",null,"Loading"):s.a.createElement(v,{chartData:u,legendPosition:"bottom"})),s.a.createElement("div",{className:"box"},s.a.createElement(k,null))),s.a.createElement(w,null))}a(187);function O(){return s.a.createElement(_,null)}c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root"))},65:function(e,t,a){e.exports=a(188)}},[[65,1,2]]]);
//# sourceMappingURL=main.0dc69c8b.chunk.js.map