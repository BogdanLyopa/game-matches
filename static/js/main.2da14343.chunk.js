(this["webpackJsonpgame-matches"]=this["webpackJsonpgame-matches"]||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(0),i=n.n(o),l=n(12),j=n.n(l),s=(n(20),n(2)),b=n(3),h=n(6),u=n(7),O=n(1);function d(e){var t=e.toggleMode,n=e.changeMode,c=e.toggleStart;return Object(O.jsxs)(x,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Matches\ud83d\udd25"}),Object(O.jsx)("h2",{children:"How to play?\u2753"}),Object(O.jsx)(g,{children:"Two are playing a game. From a bunch of 25 matches, each takes one, two or three matches in turn. The winner is the one who at the end of the game - after all the matches are disassembled - will be an even number of matches."})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["Choose mode:",Object(O.jsx)(f,{onClick:t,children:n?"First mode":"Second mode"})]})}),Object(O.jsx)(f,{onClick:c,children:"START"})]})}var g=u.a.p(c||(c=Object(h.a)(["\n  text-align: center;\n"]))),x=u.a.div(r||(r=Object(h.a)(["\n  width: 600px;\n\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=u.a.button(a||(a=Object(h.a)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  background-color: #fff;\n  cursor: pointer;\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n"])));var m=function(){var e=new Array(25).fill("\ud83e\uddb4"),t=Object(o.useState)(e),n=Object(b.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(!1),i=Object(b.a)(a,2),l=i[0],j=i[1],h=Object(o.useState)([]),u=Object(b.a)(h,2),g=u[0],x=u[1],f=Object(o.useState)([]),m=Object(b.a)(f,2),p=m[0],v=m[1],k=Object(o.useState)(!0),w=Object(b.a)(k,2),C=w[0],S=w[1],M=Object(o.useCallback)((function(){var e=Math.floor(3*Math.random())+1,t=c.splice(c.length-e,e);v((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))}))}),[c]);Object(o.useEffect)((function(){l&&!C&&M()}),[C,l,M]);var y=function(){r(e),x([]),v([])},N=function(){return j(!l)},T=function(e){var t=Number(e.target.textContent),n=c.splice(c.length-t,t);x((function(e){return[].concat(Object(s.a)(e),Object(s.a)(n))}));var a=Object(s.a)(c);r(a),F(e),1===a.length&&(alert("You are win!!!"),y(),C||M())},F=function(e){var t=Number(e.target.textContent),n=c.splice(c.length-(4-t),4-t);v((function(e){return[].concat(Object(s.a)(e),Object(s.a)(n))})),r(Object(s.a)(c)),1===c.length&&(alert("You are lose!!!"),y(),C||(console.log(M()),M()))};return Object(O.jsx)(O.Fragment,{children:l?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"button-back",onClick:function(){N(),y()},children:"\ud83d\udd19"}),Object(O.jsx)("ul",{children:p.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))}),Object(O.jsxs)("h2",{children:["Matches left : ",c.length]}),Object(O.jsx)("ul",{children:c.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))}),Object(O.jsxs)("ul",{className:"buttons",children:[Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:T,children:"1"})}),c.length>2&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:T,children:"2"})}),c.length>3&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:T,children:"3"})})]}),Object(O.jsx)("ul",{children:g.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))})]}):Object(O.jsx)(d,{toggleStart:N,toggleMode:function(){return S(!C)},changeMode:C})})};j.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2da14343.chunk.js.map