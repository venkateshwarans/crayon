import{j as e}from"./jsx-runtime-DR9Q75dM.js";/* empty css              */import{S as t}from"./switchItem-BbDxtcCN.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as N}from"./index-DRjF_FHU.js";import"./index-BSdpmjSK.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";import"./index-B9TBPUnv.js";import"./Hint-uOyVVPYf.js";import"./Label-WIf-SGtb.js";const a=N.forwardRef((R,y)=>{const{children:G,className:f,style:g,variant:C="clear"}=R;return e.jsx("div",{ref:y,className:E("crayon-switch-group",`crayon-switch-group-${C}`,f),style:g,children:G})});a.displayName="SwitchGroup";a.__docgenInfo={description:"",methods:[],displayName:"SwitchGroup",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<SwitchItemProps> | React.ReactElement<SwitchItemProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<SwitchItemProps>",elements:[{name:"SwitchItemProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<SwitchItemProps>",elements:[{name:"SwitchItemProps"}]}],raw:"React.ReactElement<SwitchItemProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"clear" | "card" | "sunk"',elements:[{name:"literal",value:'"clear"'},{name:"literal",value:'"card"'},{name:"literal",value:'"sunk"'}]},description:""}}};const B={title:"Components/SwitchGroup",component:a,tags:["autodocs"]},o={render:()=>e.jsxs(a,{children:[e.jsx(t,{value:"option1",label:"Option 1"}),e.jsx(t,{value:"option2",label:"Option 2"}),e.jsx(t,{value:"option3",label:"Option 3"})]})},r={render:()=>e.jsxs(a,{variant:"card",children:[e.jsx(t,{value:"option1",label:"Option 1"}),e.jsx(t,{value:"option2",label:"Option 2"}),e.jsx(t,{value:"option3",label:"Option 3"})]})},n={render:()=>e.jsxs(a,{variant:"sunk",children:[e.jsx(t,{value:"option1",label:"Option 1"}),e.jsx(t,{value:"option2",label:"Option 2"}),e.jsx(t,{value:"option3",label:"Option 3"})]})},i={render:()=>e.jsxs(a,{className:"custom-class",children:[e.jsx(t,{value:"option1",label:"Option 1"}),e.jsx(t,{value:"option2",label:"Option 2"}),e.jsx(t,{value:"option3",label:"Option 3"})]})},s={render:()=>e.jsxs(a,{style:{maxWidth:"300px",margin:"20px"},children:[e.jsx(t,{value:"option1",label:"Option 1"}),e.jsx(t,{value:"option2",label:"Option 2"}),e.jsx(t,{value:"option3",label:"Option 3"})]})};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <SwitchGroup>
      <SwitchItem value="option1" label="Option 1" />
      <SwitchItem value="option2" label="Option 2" />
      <SwitchItem value="option3" label="Option 3" />
    </SwitchGroup>
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SwitchGroup variant="card">
      <SwitchItem value="option1" label="Option 1" />
      <SwitchItem value="option2" label="Option 2" />
      <SwitchItem value="option3" label="Option 3" />
    </SwitchGroup>
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,S,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SwitchGroup variant="sunk">
      <SwitchItem value="option1" label="Option 1" />
      <SwitchItem value="option2" label="Option 2" />
      <SwitchItem value="option3" label="Option 3" />
    </SwitchGroup>
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var v,x,O;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SwitchGroup className="custom-class">
      <SwitchItem value="option1" label="Option 1" />
      <SwitchItem value="option2" label="Option 2" />
      <SwitchItem value="option3" label="Option 3" />
    </SwitchGroup>
}`,...(O=(x=i.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var b,I,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <SwitchGroup style={{
    maxWidth: "300px",
    margin: "20px"
  }}>
      <SwitchItem value="option1" label="Option 1" />
      <SwitchItem value="option2" label="Option 2" />
      <SwitchItem value="option3" label="Option 3" />
    </SwitchGroup>
}`,...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const F=["Default","CardVariant","SunkVariant","WithCustomClassName","WithCustomStyle"];export{r as CardVariant,o as Default,n as SunkVariant,i as WithCustomClassName,s as WithCustomStyle,F as __namedExportsOrder,B as default};
