(this["webpackJsonpreact-trello-report"]=this["webpackJsonpreact-trello-report"]||[]).push([[0],{27:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),l=n(13),i=n(2),u=n(11),s=n(5),m=n(6),d=n(7),f=n.n(d),p=n(12),b="https://api.trello.com/",v="1476e4d6cc0bec828338050c24381b18",h=localStorage.getItem("token")||"",E=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),window.location.replace("".concat("/react-trello-report"));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("".concat(b,"1/members/me/boards?fields=name,id,url,list&key=").concat(v,"&token=").concat(h)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("".concat(b,"1/boards/").concat(t,"/lists?fields=name,id&key=").concat(v,"&token=").concat(h)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("".concat(b,"1/lists/").concat(t,"/cards?key=").concat(v,"&token=").concat(h)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("".concat(b,"1/boards/").concat(t,"?key=").concat(v,"&token=").concat(h)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.onSelect,n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1];return Object(a.useEffect)((function(){d(!0),w().then((function(e){l(e),d(!1)}))}),[]),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label"},"Choice the board"),r.a.createElement("select",{className:"form-select",disabled:m,onChange:function(e){return function(e){var n=o.find((function(t){return t.id===e.target.value}));t(n)}(e)}},r.a.createElement("option",{value:""},m?"Loading...":""),o.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))};j.defaultProps={onSelect:function(){}};var O=j;function N(){var e=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #F7F8F9;\n    height: 100vh;\n    width: 100vw;\n"]);return N=function(){return e},e}var x=m.a.div(N());function S(){var e=Object(s.a)(["\n    width: 400px;\n    height: 400px;\n"]);return S=function(){return e},e}var I=m.a.div(S()),C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(),o=Object(u.a)(c,2),i=o[0],s=o[1];return r.a.createElement(x,null,r.a.createElement(I,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title h5"},"React Trello Report")),r.a.createElement("div",{className:"card-body"},r.a.createElement(O,{onSelect:function(e){var t;(t=e)?(s(t),y(t.id).then((function(e){n(e)}))):(s(void 0),n([]))}})),r.a.createElement("div",{className:"card-footer"},i?r.a.createElement(l.b,{className:"btn btn-primary",to:"/board/".concat(i.id)},"Generate"):r.a.createElement("button",{className:"btn btn-primary",disabled:!0},"Generate")))))},R=n(42),B=n(43),L=function(e){var t=e.title;return r.a.createElement("div",{className:"empty"},r.a.createElement("div",{className:"empty-icon"},r.a.createElement("i",{className:"icon icon-people"})),r.a.createElement("p",{className:"empty-title h5"},t))};function U(){var e=Object(s.a)(["\n display: block; \n page-break-before: always;\n"]);return U=function(){return e},e}function F(){var e=Object(s.a)(["\n    margin-bottom: 30px;    \n"]);return F=function(){return e},e}var _=m.a.div(F()),P=m.a.div(U()),T=function(e){var t=e.list;return r.a.createElement(_,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"h4 badge","data-badge":t.totalCard},t.name))),0===t.totalCard?r.a.createElement(L,{title:"No cards found"}):r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{style:{pageBreakInside:"auto"},className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",{style:{width:"150px"}},"URL"),r.a.createElement("th",{style:{width:"180px"}},"Date"))),r.a.createElement("tbody",null,t.cards.map((function(e){return r.a.createElement("tr",{key:e.id,style:{pageBreakInside:"avoid",pageBreakAfter:"auto"}},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("a",{href:e.shortUrl,target:"_blank",rel:"noopener noreferrer"},e.shortUrl)),r.a.createElement("td",null,function(e){var t=Object(R.a)(e);return Object(B.a)(t,"dd/MM/yyyy HH:mm:ss")}(e.dateLastActivity)))})))),r.a.createElement(P,null))))};function D(){var e=Object(s.a)(["\n    animation: loader 2s ease infinite;\n    background: #4240D4;\n    display: block;    \n    padding: 10px;\n    width: 0;\n\n    @keyframes loader {\n        0% { width: 0 }\n        100% { width: 100% }\n    }\n"]);return D=function(){return e},e}function M(){var e=Object(s.a)(["\n    background: #e5e5ff;\n    display: block;\n"]);return M=function(){return e},e}function A(){var e=Object(s.a)(["\n    border-radius: 60px;\n\toverflow: hidden;\n    width: 100%;\n    left: 50%;\n    max-width: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%,-50%,0);\n"]);return A=function(){return e},e}function G(){var e=Object(s.a)(["\n    height: 60px;\n    width: 60px;\n    border: 8px solid #e5e5ff;\n    border-left-color: #4240D4;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n\n    @keyframes spin {\n        to { transform: rotate(360deg);}\n    }\n"]);return G=function(){return e},e}m.a.div(G());var H=m.a.div(A()),J=m.a.span(M()),W=m.a.span(D()),z=function(){return r.a.createElement(H,null,r.a.createElement(J,null,r.a.createElement(W,null)))},$=function(){return r.a.createElement(z,null)};function q(){var e=Object(s.a)(["\n    @media print\n    {    \n        display: none !important;\n    }\n"]);return q=function(){return e},e}var K=m.a.div(q());function Q(){var e=Object(s.a)(["\n    width: 90vw;  \n    @media print {\n        width: 100vw; \n    }\n"]);return Q=function(){return e},e}var V=m.a.div(Q()),X=function(){var e=Object(i.f)().boardId,t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),d=m[0],b=m[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),E=h[0],w=h[1],j=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){!function(e){k(e).then((function(e){return e&&o(e)}))}(e),function(e){w(!0),y(e).then((function(e){e&&Promise.all(e.map(function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t.id);case 2:return n=e.sent,t.totalCard=n.length,t.cards=n,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){b(e),w(!1)}))}))}(e)}),[e]),r.a.createElement(V,{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column col-6"},r.a.createElement("div",{className:"h3"},(null===c||void 0===c?void 0:c.name)||""),r.a.createElement("p",null,r.a.createElement("a",{href:null===c||void 0===c?void 0:c.shortUrl,target:"_blank",rel:"noopener noreferrer"},null===c||void 0===c?void 0:c.shortUrl))),r.a.createElement("div",{className:"column col-6"},r.a.createElement(K,null,r.a.createElement("div",{className:"float-right",style:{marginTop:20}},r.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:function(e){window.print()},style:{marginRight:5}},"Print"),r.a.createElement(l.b,{to:"/",className:"btn btn-lg"},"Back"))))),E?r.a.createElement($,null):d.length<=0?r.a.createElement(L,{title:"No list found"}):d.map((function(e){return r.a.createElement(T,{key:e.id,list:e})})))};function Y(){var e=Object(s.a)(["\n    width: 300px;\n    height: 300px;\n"]);return Y=function(){return e},e}var Z=/[&#]?token=([0-9a-f]{64})/,ee=m.a.div(Y()),te={name:"Trello Report React",scope:"read",expiration:"never",response_type:"token",key:v,callback_method:"fragment",interactive:"true",redirect_uri:window.location.href,persist:"true"},ne=function(){var e=function(){return window.location.replace("".concat("/react-trello-report","#choice-board"))};return Object(a.useEffect)((function(){if(function(){var e=localStorage.getItem("token")||"";return e&&64===e.length}())e();else{var t=Z.exec(window.location.hash)||"";t&&t[1]&&(localStorage.setItem("token",t[1]),e())}}),[]),r.a.createElement(x,null,r.a.createElement(ee,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title h5"},"Login at Trello")),r.a.createElement("div",{className:"card-body"}),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return function(){var e=new URLSearchParams(Object.entries(te)),t="".concat("http://trello.com/","1/authorize?").concat(e.toString());window.location.href=t}()}},"Login")))))},ae=function(){return r.a.createElement(x,null,r.a.createElement(L,{title:"Not Found"}))},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"/react-trello-report"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/board/:boardId"},r.a.createElement(X,null)),r.a.createElement(i.a,{exact:!0,path:"/choice-board"},r.a.createElement(C,null)),r.a.createElement(i.a,{exact:!0,path:"/*"},r.a.createElement(ne,null)),r.a.createElement(i.a,{exact:!0,path:"*",component:ae}))))};n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.cd6e5229.chunk.js.map