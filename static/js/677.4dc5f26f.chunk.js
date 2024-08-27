"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[677],{3677:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a,r,i,l,o,c=t(3433),u=t(9439),s=t(2791),f=t(2352),p=t(5551),d=t(2520),m=t(6095),g=t(168),x=t(6088),h=x.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-left: 128px;\n  padding-right: 128px;\n"]))),Z=x.Z.ul(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 50px 29px;\n  padding-left: 128px;\n  padding-right: 128px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),j=x.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n"]))),M=x.Z.button(l||(l=(0,g.Z)(["\n  border: none;\n  background-color: transparent;\n"]))),k=x.Z.span(o||(o=(0,g.Z)(["\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px; /* 150% */\n  text-decoration-line: underline;\n"]))),v=t(3329);var w=function(){var e=(0,s.useState)(1),n=(0,u.Z)(e,2),t=n[0],a=n[1],r=(0,s.useState)([]),i=(0,u.Z)(r,2),l=i[0],o=i[1],g=(0,d.Uh)(t),x=g.data,w=g.error,y=g.isLoading,b=(0,d.FP)().data,S=(0,s.useState)({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),P=(0,u.Z)(S,2),C=P[0],F=P[1],E=(0,s.useState)(null),L=(0,u.Z)(E,2),$=L[0],_=L[1],z=(0,s.useState)(!1),N=(0,u.Z)(z,2),O=N[0],U=N[1];(0,s.useEffect)((function(){x&&o((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(x))}))}),[x]),(0,s.useEffect)((function(){if(O)if(C.make||C.filteredPrices.length>0||C.minMileage||C.maxMileage){var e=b.filter((function(e){return(!C.make||e.make===C.make.value)&&(!(C.filteredPrices.length>0&&!C.filteredPrices.some((function(n){return n.value===e.rentalPrice.replace("$","")})))&&(!(C.minMileage&&e.mileage<C.minMileage)&&!(C.maxMileage&&e.mileage>C.maxMileage)))}));_(e)}else _(l),U(!1)}),[C,b,O,l]);var q=b?(0,c.Z)(new Set(b.map((function(e){return e.make})))):[],A=b?(0,c.Z)(new Set(b.map((function(e){return e.rentalPrice.replace("$","")})))):[],B=b?(0,c.Z)(new Set(b.map((function(e){return e.mileage})))):[],D=Math.min.apply(Math,(0,c.Z)(B)),G=Math.max.apply(Math,(0,c.Z)(B));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{children:(0,v.jsx)(p.Z,{makes:q,prices:A,minMileage:D,maxMileage:G,onFilterChange:function(e){F(e),U(!0)},filters:C})}),(0,v.jsx)(Z,{children:O?null!==$&&$.length>0?$.map((function(e,n){return(0,v.jsx)(f.Z,{data:e},n)})):(0,v.jsx)("div",{children:"No results found for the selected criteria."}):w?(0,v.jsx)(v.Fragment,{children:"Oops, there was an error..."}):y?(0,v.jsx)(m.a,{}):l.length>0?l.map((function(e,n){return(0,v.jsx)(f.Z,{data:e},n)})):null}),(0,v.jsx)(j,{children:!O&&(null===x||void 0===x?void 0:x.length)>=8&&(0,v.jsx)(M,{type:"button",onClick:function(){a(t+1)},children:(0,v.jsx)(k,{children:"Load more"})})})]})}}}]);
//# sourceMappingURL=677.4dc5f26f.chunk.js.map