"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[415],{3055:(e,i,t)=>{t.d(i,{Z:()=>o});t(2791);var r=t(7630),n=t(4294);const a=t(6088).Z.span`
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;var l=t(3329);function o(e){let{text:i,onClick:t,width:o}=e;const s=(0,r.ZP)(n.Z)((e=>{let{theme:i}=e;return{width:o,padding:"14px 0 14px 0",borderRadius:"12px",color:i.palette.getContrastText("#3470FF"),backgroundColor:"#3470FF","&:hover":{backgroundColor:"#0B44CD"}}}));return(0,l.jsx)(s,{variant:"contained",onClick:t,children:(0,l.jsx)(a,{children:i})})}},2352:(e,i,t)=>{t.d(i,{Z:()=>G});var r=t(2791),n=t(3055),a=t(6747),l=t(8237),o=t(4358),s=t(6088);const d=s.Z.div`
  position: relative;
  padding: 34px;
`,p=s.Z.button`
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
`,c=(s.Z.img`
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
`,y=s.Z.span`
  color: #3470ff;
  font-weight: 600;
`,k=s.Z.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,v=t.p+"static/media/loader.0c450659cf9b16df3087.gif";var Z=t(3329);function C(e){let{data:i}=e;const[t,n]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=new Image;e.src=i.img,e.onload=()=>{n(!0)},e.onerror=()=>{n(!1),l(!0)}}),[i.img]),(0,Z.jsx)(Z.Fragment,{children:a?(0,Z.jsx)(k,{src:v,alt:"Error Loading Image Car"}):t&&(0,Z.jsx)(k,{src:i.img,alt:"Car"})})}const M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",borderRadius:"24px",boxShadow:24,width:"541px",maxHeight:"90vh",overflowY:"auto"};function F(e){let{open:i,onClose:t,data:r}=e;return(0,Z.jsx)("div",{children:(0,Z.jsx)(l.Z,{open:i,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsx)(a.Z,{sx:{...M,"&::-webkit-scrollbar":{width:"10px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#12141720",borderRadius:"5px"}},children:(0,Z.jsxs)(d,{children:[(0,Z.jsx)(p,{onClick:t,children:(0,Z.jsx)(o.nfZ,{style:{width:"18px",height:"18px"}})}),(0,Z.jsx)(C,{data:r,width:"461",height:"248"}),(0,Z.jsxs)(c,{children:[(0,Z.jsx)(x,{children:(0,Z.jsxs)(h,{children:[r.make," ",(0,Z.jsxs)(g,{children:[r.model,", "]}),r.year]})}),(0,Z.jsxs)(f,{children:[(0,Z.jsx)(m,{children:r.address.split(",")[1]}),(0,Z.jsx)(m,{children:r.address.split(",")[2]}),(0,Z.jsx)(m,{children:"Id: "}),(0,Z.jsxs)(m,{children:["Year: ",r.year]}),(0,Z.jsxs)(m,{children:["Type: ",r.type]})]}),(0,Z.jsxs)(f,{children:[(0,Z.jsxs)(m,{children:["Fuel Consumption: ",r.fuelConsumption]}),(0,Z.jsxs)(m,{children:["Engine Size: ",r.engineSize]})]}),(0,Z.jsx)(u,{children:r.description}),(0,Z.jsx)(b,{children:"Accessories and functionalities:"}),(0,Z.jsx)(f,{children:r.accessories.map((e=>(0,Z.jsx)(m,{children:e},e)))}),(0,Z.jsx)(f,{children:r.functionalities.map((e=>(0,Z.jsx)(m,{children:e},e)))}),(0,Z.jsx)(b,{children:"Rental Conditions:"}),(0,Z.jsxs)(j,{children:[(0,Z.jsxs)(w,{children:["Minimum age:"," ",(0,Z.jsx)(y,{children:(new Date).getFullYear()-r.year})]}),(0,Z.jsx)(w,{children:r.rentalConditions.split("\n")[1]}),(0,Z.jsx)(w,{children:r.rentalConditions.split("\n")[2]}),(0,Z.jsxs)(w,{children:["Mileage:"," ",(0,Z.jsx)(y,{children:r.mileage.toLocaleString("en-US")})]}),(0,Z.jsxs)(w,{children:["Price: ",(0,Z.jsx)(y,{children:r.rentalPrice})]})]})]}),(0,Z.jsx)(n.Z,{text:"Rental car",width:"168px",onClick:()=>{window.location.href="tel:+380730000000"}})]})})})})}var S=t(4957),z=t(7488),P=t(7237),I=t(7630);const R=(0,I.ZP)(P.Z)({fill:"#3470FF"}),T=(0,I.ZP)(z.Z)({fill:"#FFFFFFCC"});var E=t(5048),$=t(8020),L=t(6351);function _(e){let{data:i}=e;const t=(0,E.I0)(),r=(0,E.v9)(L.T).some((e=>{let{id:t}=e;return t===i.id}));return(0,Z.jsx)("div",{style:{position:"absolute",top:"0",right:"0"},children:(0,Z.jsx)(S.Z,{icon:(0,Z.jsx)(T,{}),checkedIcon:(0,Z.jsx)(R,{}),checked:r,onChange:()=>{t(r?(0,$.Ni)(i):(0,$.a3)(i))}})})}const Y=s.Z.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`,A=s.Z.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`,B=(s.Z.img`
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
`),D=s.Z.h3`
  width: 274px;
  height: 24px;
  overflow: hidden;
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,N=s.Z.p`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,U=s.Z.ul`
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
`;function G(e){let{data:i}=e;const[t,a]=(0,r.useState)(!1);return(0,Z.jsxs)(Y,{children:[(0,Z.jsxs)(A,{children:[(0,Z.jsx)(_,{data:i}),(0,Z.jsx)(C,{data:i})]}),(0,Z.jsxs)(B,{children:[(0,Z.jsxs)(D,{children:[i.make," ",(0,Z.jsx)("span",{style:{color:"#3470FF"},children:i.model}),","," ",i.year]}),(0,Z.jsx)(N,{children:i.rentalPrice})]}),(0,Z.jsxs)(U,{children:[(0,Z.jsx)("li",{children:i.address.split(",")[1]}),(0,Z.jsx)("li",{children:i.address.split(",")[2]}),(0,Z.jsx)("li",{children:i.rentalCompany}),(0,Z.jsx)("li",{children:i.type}),(0,Z.jsx)("li",{children:i.model}),(0,Z.jsx)("li",{children:i.mileage}),(0,Z.jsx)("li",{children:i.accessories[0]})]}),(0,Z.jsx)(n.Z,{text:"Learn more",onClick:()=>a(!0),width:"274px"}),t&&(0,Z.jsx)(F,{open:t,onClose:()=>a(!1),data:i})]})}},5551:(e,i,t)=>{t.d(i,{Z:()=>b});var r=t(528),n=t(6088);const a=n.Z.div`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`,l=n.Z.div`
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
`,p=n.Z.input`
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
`,c=n.Z.input`
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
`;var g=t(3055),f=t(2791),m=t(9655),u=t(3329);function b(e){let{makes:i,prices:t,onFilterChange:n}=e;const[b,j]=(0,f.useState)(""),[w,y]=(0,f.useState)(null),[k,v]=(0,f.useState)(""),[Z,C]=(0,f.useState)(""),[M,F]=(0,f.useState)(""),S=i.map((e=>({value:e,label:e}))),z=[];for(let r=30;r<=500;r+=10)z.push({value:r,label:`${r}`});const P=t.filter((e=>e<=w)),I=e=>e.toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,u.jsxs)(a,{children:[(0,u.jsxs)(l,{children:[(0,u.jsx)(d,{htmlFor:"nameSelect",children:"Car brand"}),(0,u.jsx)(r.ZP,{id:"nameSelect",placeholder:"Enter the text",value:b,onChange:e=>j(e),options:S,isClearable:!0,styles:{control:e=>({...e,width:"224px",height:"48px",borderColor:"rgba(18, 20, 23, 0.2)",border:"none",borderRadius:"14px",padding:"8px",fontSize:"16px",fontFamily:"ManropeMedium",backgroundColor:"rgba(247, 247, 251, 1)",appearance:"none"}),option:(e,i)=>{let{isFocused:t}=i;return{...e,color:t?"black":"rgba(18, 20, 23, 0.2)",fontFamily:"ManropeMedium"}},menuList:e=>({...e,"::-webkit-scrollbar":{width:"9px"},"::-webkit-scrollbar-track":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb:hover":{background:"rgba(18, 20, 23, 0.05)"}}),placeholder:e=>({...e,color:"rgba(18, 20, 23, 1)"})},components:{IndicatorSeparator:()=>null}})]}),(0,u.jsxs)(l,{children:[(0,u.jsx)(d,{htmlFor:"priceSelect",children:"Price/ 1 hour"}),(0,u.jsx)(r.ZP,{id:"priceSelect",placeholder:"To $",value:w?{value:w,label:k}:null,onChange:e=>{null===e?(y(null),v("")):(y(e.value),v(e.label))},options:z,isClearable:!0,styles:{control:e=>({...e,width:"125",height:"48px",borderColor:"rgba(18, 20, 23, 0.2)",border:"none",borderRadius:"14px",padding:"8px",fontSize:"16px",fontFamily:"ManropeMedium",backgroundColor:"rgba(247, 247, 251, 1)",appearance:"none"}),option:(e,i)=>{let{isFocused:t}=i;return{...e,color:t?"black":"rgba(18, 20, 23, 0.2)",fontFamily:"ManropeMedium"}},menuList:e=>({...e,"::-webkit-scrollbar":{width:"9px"},"::-webkit-scrollbar-track":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)"},"::-webkit-scrollbar-thumb:hover":{background:"rgba(18, 20, 23, 0.05)"}}),placeholder:e=>({...e,color:"rgba(18, 20, 23, 1)"})},components:{IndicatorSeparator:()=>null}})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(d,{children:"Car mileage / km"}),(0,u.jsxs)(o,{children:[(0,u.jsx)(p,{type:"text",value:I(Z),onChange:e=>{C(e.target.value)}}),(0,u.jsx)(x,{children:"From"}),(0,u.jsx)(c,{type:"text",value:I(M),onChange:e=>{F(e.target.value)}}),(0,u.jsx)(h,{children:"To"})]})]}),(0,u.jsx)(g.Z,{text:"Search",onClick:()=>{parseInt(Z.replace(/,/g,""),10)>parseInt(M.replace(/,/g,""),10)&&m.Am.error("Minimum mileage cannot be greater than maximum mileage");const e={make:b,filteredPrices:P.map((e=>({value:e,label:`${e}`}))),minMileage:parseInt(Z.replace(/,/g,""),10),maxMileage:parseInt(M.replace(/,/g,""),10)};n(e)},width:"135px"})]})}},3178:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var r=t(2791),n=t(5048),a=t(6351),l=t(2352),o=t(5551),s=t(6088),d=t(1087);const p=t.p+"static/media/favorites__empty_.5dda16f363371449596c.png",c=s.Z.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,x=s.Z.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: 425px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`,h=s.Z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,s.Z)(d.rU)`
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 5px;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
  }
`,f=s.Z.img`
  margin-top: 5px;
  border-radius: 14px;
  width: 20vw;
  content: url(${p});
`;var m=t(3329);const u=function(){const[e,i]=(0,r.useState)([]),t=(0,n.v9)(a.T);(0,r.useEffect)((()=>{t&&i(t)}),[t]);const[s,d]=(0,r.useState)({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),[p,u]=(0,r.useState)(null),[b,j]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(b)if(s.make||s.filteredPrices.length>0||s.minMileage||s.maxMileage){const i=e.filter((e=>(!s.make||e.make===s.make.value)&&(!(s.filteredPrices.length>0&&!s.filteredPrices.some((i=>i.value===e.rentalPrice.replace("$",""))))&&(!(s.minMileage&&e.mileage<s.minMileage)&&!(s.maxMileage&&e.mileage>s.maxMileage)))));u(i)}else u([])}),[s,e,b]);const w=e?[...new Set(e.map((e=>e.make)))]:[],y=e?[...new Set(e.map((e=>e.rentalPrice.replace("$",""))))]:[],k=e?[...new Set(e.map((e=>e.mileage)))]:[],v=Math.min(...k),Z=Math.max(...k);return console.log(s),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c,{children:(0,m.jsx)(o.Z,{makes:w,prices:y,minMileage:v,maxMileage:Z,onFilterChange:e=>{d(e),j(!0)},filters:s})}),(0,m.jsx)(x,{children:b?null!==p&&p.length>0?p.map(((e,i)=>(0,m.jsx)(l.Z,{data:e},i))):(0,m.jsx)("div",{children:"No results found for the selected criteria."}):e.length>0?e.map(((e,i)=>(0,m.jsx)(l.Z,{data:e},i))):(0,m.jsxs)(h,{children:[(0,m.jsx)("span",{children:"Favorite is empty."}),(0,m.jsx)(f,{alt:"favorite-is-empty"}),(0,m.jsx)(g,{to:"/catalog",children:"Go to catalog"})]})})]})}},6351:(e,i,t)=>{t.d(i,{T:()=>r});const r=e=>e.favorites.favorites}}]);
//# sourceMappingURL=415.3fd0fb26.chunk.js.map