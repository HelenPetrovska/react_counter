(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c=e(3),r=e.n(c),o=e(4),u=e(5),a=e(7),s=e(6),i=e(1),d=e.n(i),b=(e(12),e(0)),l=function(t){Object(a.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(o.a)(this,e);for(var c=arguments.length,r=new Array(c),u=0;u<c;u++)r[u]=arguments[u];return(t=n.call.apply(n,[this].concat(r))).state={counter:0},t.addOne=function(){t.setState((function(t){return{counter:t.counter+1}}))},t.add100=function(){t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(n){n.counter%5===0&&t.add100(),t.addOne()},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.state.counter;return Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsxs)("h1",{className:"counter__title",children:["Count:"," ",n]}),Object(b.jsxs)("div",{className:"counter__buttons",children:[Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.addOne()},children:"One"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.add100()},children:"100"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){t.increase(t.state)},children:"increase"})]})]})}}]),e}(d.a.Component),j=l;r.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a20da772.chunk.js.map