"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[321],{3055:(e,i,t)=>{t.d(i,{Z:()=>o});t(2791);var r=t(7630),n=t(4294);const l=t(6088).Z.span`
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;var a=t(3329);function o(e){let{text:i,onClick:t,width:o}=e;const s=(0,r.ZP)(n.Z)((e=>{let{theme:i}=e;return{width:o,padding:"14px 0 14px 0",borderRadius:"12px",color:i.palette.getContrastText("#3470FF"),backgroundColor:"#3470FF","&:hover":{backgroundColor:"#0B44CD"}}}));return(0,a.jsx)(s,{variant:"contained",onClick:t,children:(0,a.jsx)(l,{children:i})})}},2352:(e,i,t)=>{t.d(i,{Z:()=>H});var r=t(2791),n=t(3055),l=t(6747),a=t(8237),o=t(4358),s=t(6088);const d=s.Z.div`
  position: relative;
  padding: 34px;
`,c=s.Z.button`
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  top: 16px;
  right: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`,p=(s.Z.img`
  width: 30px;
  height: 30px;
`,s.Z.img`
  width: 100%;
  height: 314px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`,s.Z.div`
  margin-top: 14px;
  margin-bottom: 24px;
`),x=s.Z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`,h=s.Z.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`,g=s.Z.span`
  color: #3470ff;
`,f=s.Z.ul`
  display: flex;
  flex-wrap: wrap;
`,m=s.Z.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`,u=s.Z.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`,b=s.Z.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`,j=s.Z.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    width: 461px;
  }
`,w=s.Z.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`,k=s.Z.span`
  color: #3470ff;
  font-weight: 600;
`,y=s.Z.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,Z=t.p+"static/media/loader.0c450659cf9b16df3087.gif";var v=t(3329);function C(e){let{data:i}=e;const[t,n]=(0,r.useState)(!1),[l,a]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=new Image;e.src=i.img,e.onload=()=>{n(!0)},e.onerror=()=>{n(!1),a(!0)}}),[i.img]),(0,v.jsx)(v.Fragment,{children:l?(0,v.jsx)(y,{src:Z,alt:"Error Loading Image Car"}):t&&(0,v.jsx)(y,{src:i.img,alt:"Car"})})}const M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",borderRadius:"24px",boxShadow:24,width:"541px",maxHeight:"90vh",overflowY:"auto"};function F(e){let{open:i,onClose:t,data:r}=e;return(0,v.jsx)("div",{children:(0,v.jsx)(a.Z,{open:i,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsx)(l.Z,{sx:{...M,"&::-webkit-scrollbar":{width:"10px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#12141720",borderRadius:"5px"}},children:(0,v.jsxs)(d,{children:[(0,v.jsx)(c,{onClick:t,children:(0,v.jsx)(o.nfZ,{style:{width:"18px",height:"18px"}})}),(0,v.jsx)(C,{data:r,width:"461",height:"248"}),(0,v.jsxs)(p,{children:[(0,v.jsx)(x,{children:(0,v.jsxs)(h,{children:[r.make," ",(0,v.jsxs)(g,{children:[r.model,", "]}),r.year]})}),(0,v.jsxs)(f,{children:[(0,v.jsx)(m,{children:r.address.split(",")[1]}),(0,v.jsx)(m,{children:r.address.split(",")[2]}),(0,v.jsx)(m,{children:"Id: "}),(0,v.jsxs)(m,{children:["Year: ",r.year]}),(0,v.jsxs)(m,{children:["Type: ",r.type]})]}),(0,v.jsxs)(f,{children:[(0,v.jsxs)(m,{children:["Fuel Consumption: ",r.fuelConsumption]}),(0,v.jsxs)(m,{children:["Engine Size: ",r.engineSize]})]}),(0,v.jsx)(u,{children:r.description}),(0,v.jsx)(b,{children:"Accessories and functionalities:"}),(0,v.jsx)(f,{children:r.accessories.map((e=>(0,v.jsx)(m,{children:e},e)))}),(0,v.jsx)(f,{children:r.functionalities.map((e=>(0,v.jsx)(m,{children:e},e)))}),(0,v.jsx)(b,{children:"Rental Conditions:"}),(0,v.jsxs)(j,{children:[(0,v.jsxs)(w,{children:["Minimum age:"," ",(0,v.jsx)(k,{children:(new Date).getFullYear()-r.year})]}),(0,v.jsx)(w,{children:r.rentalConditions.split("\n")[1]}),(0,v.jsx)(w,{children:r.rentalConditions.split("\n")[2]}),(0,v.jsxs)(w,{children:["Mileage:"," ",(0,v.jsx)(k,{children:r.mileage.toLocaleString("en-US")})]}),(0,v.jsxs)(w,{children:["Price: ",(0,v.jsx)(k,{children:r.rentalPrice})]})]})]}),(0,v.jsx)(n.Z,{text:"Rental car",width:"168px",onClick:()=>{window.location.href="tel:+380730000000"}})]})})})})}var S=t(4957),z=t(7488),P=t(7237),I=t(7630);const L=(0,I.ZP)(P.Z)({fill:"#3470FF"}),R=(0,I.ZP)(z.Z)({fill:"#FFFFFFCC"});var E=t(5048),T=t(8020),$=t(6351);function Y(e){let{data:i}=e;const t=(0,E.I0)(),r=(0,E.v9)($.T).some((e=>{let{id:t}=e;return t===i.id}));return(0,v.jsx)("div",{style:{position:"absolute",top:"0",right:"0"},children:(0,v.jsx)(S.Z,{icon:(0,v.jsx)(R,{}),checkedIcon:(0,v.jsx)(L,{}),checked:r,onChange:()=>{t(r?(0,T.Ni)(i):(0,T.a3)(i))}})})}const A=s.Z.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`,B=s.Z.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`,D=(s.Z.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,s.Z.div`
  width: 274px;
  align-items: center;
  color: #121417;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  margin-bottom: 8px;
`),N=s.Z.h3`
  width: 274px;
  height: 24px;
  overflow: hidden;
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,U=s.Z.p`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,_=s.Z.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  width: 274px;
  height: 40px;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 1.5;
  row-gap: 4px;
  width: fit-content;
  margin-bottom: 24px;
  & > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
  & li {
    color: rgba(18, 20, 23, 0.5);
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;function H(e){let{data:i}=e;const[t,l]=(0,r.useState)(!1);return(0,v.jsxs)(A,{children:[(0,v.jsxs)(B,{children:[(0,v.jsx)(Y,{data:i}),(0,v.jsx)(C,{data:i})]}),(0,v.jsxs)(D,{children:[(0,v.jsxs)(N,{children:[i.make," ",(0,v.jsx)("span",{style:{color:"#3470FF"},children:i.model}),","," ",i.year]}),(0,v.jsx)(U,{children:i.rentalPrice})]}),(0,v.jsxs)(_,{children:[(0,v.jsx)("li",{children:i.address.split(",")[1]}),(0,v.jsx)("li",{children:i.address.split(",")[2]}),(0,v.jsx)("li",{children:i.rentalCompany}),(0,v.jsx)("li",{children:i.type}),(0,v.jsx)("li",{children:i.model}),(0,v.jsx)("li",{children:i.mileage}),(0,v.jsx)("li",{children:i.accessories[0]})]}),(0,v.jsx)(n.Z,{text:"Learn more",onClick:()=>l(!0),width:"274px"}),t&&(0,v.jsx)(F,{open:t,onClose:()=>l(!1),data:i})]})}},5551:(e,i,t)=>{t.d(i,{Z:()=>b});var r=t(528),n=t(6088);const l=n.Z.div`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`,a=n.Z.div`
  display: flex;
  flex-direction: column;
`,o=n.Z.div`
  display: flex;
  position: relative;
  height: 48px;
`,s=n.Z.form`
  display: flex;
  flex-direction: column;
`,d=n.Z.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`,c=n.Z.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
`,p=n.Z.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
`,x=n.Z.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`,h=n.Z.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;var g=t(3055),f=t(2791),m=t(9655),u=t(3329);function b(e){let{makes:i,prices:t,onFilterChange:n}=e;const[b,j]=(0,f.useState)(""),[w,k]=(0,f.useState)(null),[y,Z]=(0,f.useState)(""),[v,C]=(0,f.useState)(""),[M,F]=(0,f.useState)(""),S=i.map((e=>({value:e,label:e}))),z=[];for(let r=30;r<=500;r+=10)z.push({value:r,label:`${r}`});const P=t.filter((e=>e<=w)),I=e=>e.toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,u.jsxs)(l,{children:[(0,u.jsxs)(a,{children:[(0,u.jsx)(d,{htmlFor:"nameSelect",children:"Car brand"}),(0,u.jsx)(r.ZP,{id:"nameSelect",placeholder:"Enter the text",value:b,onChange:e=>j(e),options:S,isClearable:!0,styles:{control:e=>({...e,width:"224px",height:"48px",borderColor:"rgba(18, 20, 23, 0.2)",border:"none",borderRadius:"14px",padding:"8px",fontSize:"16px",fontFamily:"ManropeMedium",backgroundColor:"rgba(247, 247, 251, 1)",appearance:"none"}),option:(e,i)=>{let{isFocused:t}=i;return{...e,color:t?"black":"rgba(18, 20, 23, 0.2)",fontFamily:"ManropeMedium"}},menuList:e=>({...e,"::-webkit-scrollbar":{width:"9px"},"::-webkit-scrollbar-track":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb:hover":{background:"rgba(18, 20, 23, 0.05)"}}),placeholder:e=>({...e,color:"rgba(18, 20, 23, 1)"})},components:{IndicatorSeparator:()=>null}})]}),(0,u.jsxs)(a,{children:[(0,u.jsx)(d,{htmlFor:"priceSelect",children:"Price/ 1 hour"}),(0,u.jsx)(r.ZP,{id:"priceSelect",placeholder:"To $",value:w?{value:w,label:y}:null,onChange:e=>{null===e?(k(null),Z("")):(k(e.value),Z(e.label))},options:z,isClearable:!0,styles:{control:e=>({...e,width:"125",height:"48px",borderColor:"rgba(18, 20, 23, 0.2)",border:"none",borderRadius:"14px",padding:"8px",fontSize:"16px",fontFamily:"ManropeMedium",backgroundColor:"rgba(247, 247, 251, 1)",appearance:"none"}),option:(e,i)=>{let{isFocused:t}=i;return{...e,color:t?"black":"rgba(18, 20, 23, 0.2)",fontFamily:"ManropeMedium"}},menuList:e=>({...e,"::-webkit-scrollbar":{width:"9px"},"::-webkit-scrollbar-track":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb:hover":{background:"rgba(18, 20, 23, 0.05)"}}),placeholder:e=>({...e,color:"rgba(18, 20, 23, 1)"})},components:{IndicatorSeparator:()=>null}})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(d,{children:"Car mileage / km"}),(0,u.jsxs)(o,{children:[(0,u.jsx)(c,{type:"text",value:I(v),onChange:e=>{C(e.target.value)}}),(0,u.jsx)(x,{children:"From"}),(0,u.jsx)(p,{type:"text",value:I(M),onChange:e=>{F(e.target.value)}}),(0,u.jsx)(h,{children:"To"})]})]}),(0,u.jsx)(g.Z,{text:"Search",onClick:()=>{parseInt(v.replace(/,/g,""),10)>parseInt(M.replace(/,/g,""),10)&&m.Am.error("Minimum mileage cannot be greater than maximum mileage");const e={make:b,filteredPrices:P.map((e=>({value:e,label:`${e}`}))),minMileage:parseInt(v.replace(/,/g,""),10),maxMileage:parseInt(M.replace(/,/g,""),10)};n(e)},width:"135px"})]})}},3677:(e,i,t)=>{t.r(i),t.d(i,{default:()=>f});var r=t(2791),n=t(2352),l=t(5551),a=t(2520),o=t(6095),s=t(6088);const d=s.Z.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
`,c=s.Z.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  padding-left: 128px;
  padding-right: 128px;
  margin-top: 50px;
  margin-bottom: 50px;
`,p=s.Z.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`,x=s.Z.button`
  border: none;
  background-color: transparent;
`,h=s.Z.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;var g=t(3329);const f=function(){const[e,i]=(0,r.useState)(1),[t,s]=(0,r.useState)([]),{data:f,error:m,isLoading:u}=(0,a.Uh)(e),{data:b}=(0,a.FP)(),[j,w]=(0,r.useState)({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),[k,y]=(0,r.useState)(null),[Z,v]=(0,r.useState)(!1);(0,r.useEffect)((()=>{f&&s((e=>[...e,...f]))}),[f]),(0,r.useEffect)((()=>{if(Z)if(j.make||j.filteredPrices.length>0||j.minMileage||j.maxMileage){const e=b.filter((e=>(!j.make||e.make===j.make.value)&&(!(j.filteredPrices.length>0&&!j.filteredPrices.some((i=>i.value===e.rentalPrice.replace("$",""))))&&(!(j.minMileage&&e.mileage<j.minMileage)&&!(j.maxMileage&&e.mileage>j.maxMileage)))));y(e)}else y(t),v(!1)}),[j,b,Z,t]);const C=b?[...new Set(b.map((e=>e.make)))]:[],M=b?[...new Set(b.map((e=>e.rentalPrice.replace("$",""))))]:[],F=b?[...new Set(b.map((e=>e.mileage)))]:[],S=Math.min(...F),z=Math.max(...F);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{children:(0,g.jsx)(l.Z,{makes:C,prices:M,minMileage:S,maxMileage:z,onFilterChange:e=>{w(e),v(!0)},filters:j})}),(0,g.jsx)(c,{children:Z?null!==k&&k.length>0?k.map(((e,i)=>(0,g.jsx)(n.Z,{data:e},i))):(0,g.jsx)("div",{children:"No results found for the selected criteria."}):m?(0,g.jsx)(g.Fragment,{children:"Oops, there was an error..."}):u?(0,g.jsx)(o.a,{}):t.length>0?t.map(((e,i)=>(0,g.jsx)(n.Z,{data:e},i))):null}),(0,g.jsx)(p,{children:!Z&&(null===f||void 0===f?void 0:f.length)>=8&&(0,g.jsx)(x,{type:"button",onClick:()=>{i(e+1)},children:(0,g.jsx)(h,{children:"Load more"})})})]})}},6351:(e,i,t)=>{t.d(i,{T:()=>r});const r=e=>e.favorites.favorites}}]);
//# sourceMappingURL=321.a60e7062.chunk.js.map