(this.webpackJsonpflipbit=this.webpackJsonpflipbit||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),l=(a(9),a(1));a(10),a(11);var o=function(e){e.toggleBit;var t=e.placeValue,a=e.bitTable,r=e.setBitTable,i=Object(n.useState)(!1),o=Object(l.a)(i,2),s=o[0],u=o[1];return c.a.createElement("label",{className:"switch"},c.a.createElement("input",{onClick:function(){var e={};u(!s),e[t]=!s,r(Object.assign(a,e))},value:s,type:"checkbox"}),c.a.createElement("span",{className:"slider"}),c.a.createElement("p",{className:"bit-value"},s?1:0),c.a.createElement("p",{className:"bit-value"},t))},s=[128,64,32,16,8,4,2,1];var u=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),u=Object(l.a)(i,2),m=u[0],b=u[1];function p(e){b(e),r(function(){var e=Object.keys(m).filter((function(e){return m[e]}));if(e.length<=0)return 0;return e.reduce((function(e,t){return Number(e)+Number(t)}))}())}return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"FlipBit")),s.map((function(e,t){return c.a.createElement(o,{key:t,placeValue:e,bitTable:m,setBitTable:p})})),c.a.createElement("h1",{style:{color:"white"}},"Decimal: ",a))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.f00874d3.chunk.js.map