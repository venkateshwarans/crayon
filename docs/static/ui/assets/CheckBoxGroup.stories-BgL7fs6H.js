import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as a}from"./checkBoxItem-PpeE67me.js";/* empty css              */import{c as V}from"./clsx-B-dksMZM.js";import{R as W}from"./index-DRjF_FHU.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";import"./index-BSdpmjSK.js";import"./index-B9TBPUnv.js";import"./index-COb6PUCI.js";import"./Hint-uOyVVPYf.js";import"./Label-WIf-SGtb.js";import"./check-CDbHn8Pq.js";import"./createLucideIcon-CVKaca6J.js";const c=W.forwardRef((v,f)=>{const{children:E,className:N,style:P,variant:w="clear"}=v;return e.jsx("div",{ref:f,className:V("crayon-checkbox-group",`crayon-checkbox-group-${w}`,N),style:P,children:E})});c.displayName="CheckBoxGroup";c.__docgenInfo={description:"",methods:[],displayName:"CheckBoxGroup",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<CheckBoxItemProps> | React.ReactElement<CheckBoxItemProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<CheckBoxItemProps>",elements:[{name:"CheckBoxItemProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<CheckBoxItemProps>",elements:[{name:"CheckBoxItemProps"}]}],raw:"React.ReactElement<CheckBoxItemProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"clear" | "card" | "sunk"',elements:[{name:"literal",value:'"clear"'},{name:"literal",value:'"card"'},{name:"literal",value:'"sunk"'}]},description:""}}};const Q={title:"Components/CheckBoxGroup",component:c,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{children:[e.jsx(a,{label:"Option 1",onChange:()=>{}},"1"),e.jsx(a,{label:"Option 2",onChange:()=>{}},"2"),e.jsx(a,{label:"Option 3",onChange:()=>{}},"3")]}},o={args:{variant:"clear",children:[e.jsx(a,{label:"Clear Option 1",onChange:()=>{}},"1"),e.jsx(a,{label:"Clear Option 2",onChange:()=>{}},"2"),e.jsx(a,{label:"Clear Option 3",onChange:()=>{}},"3")]}},r={args:{variant:"card",children:[e.jsx(a,{label:"Card Option 1",onChange:()=>{}},"1"),e.jsx(a,{label:"Card Option 2",onChange:()=>{}},"2"),e.jsx(a,{label:"Card Option 3",onChange:()=>{}},"3")]}},t={args:{variant:"sunk",children:[e.jsx(a,{label:"Sunk Option 1",onChange:()=>{}},"1"),e.jsx(a,{label:"Sunk Option 2",onChange:()=>{}},"2"),e.jsx(a,{label:"Sunk Option 3",onChange:()=>{}},"3")]}},s={args:{className:"custom-class",children:[e.jsx(a,{label:"Custom Class Option 1",onChange:()=>{}},"1"),e.jsx(a,{label:"Custom Class Option 2",onChange:()=>{}},"2")]}},l={args:{style:{maxWidth:"300px"},variant:"card",children:[e.jsx(a,{label:"Custom Style Option 1",onChange:()=>{}},"1"),e.jsx(a,{label:"Custom Style Option 2",onChange:()=>{}},"2")]}};var m,i,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<CheckBoxItem key="1" label="Option 1" onChange={() => {}} />, <CheckBoxItem key="2" label="Option 2" onChange={() => {}} />, <CheckBoxItem key="3" label="Option 3" onChange={() => {}} />]
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var C,h,d;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "clear",
    children: [<CheckBoxItem key="1" label="Clear Option 1" onChange={() => {}} />, <CheckBoxItem key="2" label="Clear Option 2" onChange={() => {}} />, <CheckBoxItem key="3" label="Clear Option 3" onChange={() => {}} />]
  }
}`,...(d=(h=o.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,k,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "card",
    children: [<CheckBoxItem key="1" label="Card Option 1" onChange={() => {}} />, <CheckBoxItem key="2" label="Card Option 2" onChange={() => {}} />, <CheckBoxItem key="3" label="Card Option 3" onChange={() => {}} />]
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "sunk",
    children: [<CheckBoxItem key="1" label="Sunk Option 1" onChange={() => {}} />, <CheckBoxItem key="2" label="Sunk Option 2" onChange={() => {}} />, <CheckBoxItem key="3" label="Sunk Option 3" onChange={() => {}} />]
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var O,B,I;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    children: [<CheckBoxItem key="1" label="Custom Class Option 1" onChange={() => {}} />, <CheckBoxItem key="2" label="Custom Class Option 2" onChange={() => {}} />]
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,R,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: "300px"
    },
    variant: "card",
    children: [<CheckBoxItem key="1" label="Custom Style Option 1" onChange={() => {}} />, <CheckBoxItem key="2" label="Custom Style Option 2" onChange={() => {}} />]
  }
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const U=["Default","ClearVariant","CardVariant","SunkVariant","WithCustomClassName","WithCustomStyle"];export{r as CardVariant,o as ClearVariant,n as Default,t as SunkVariant,s as WithCustomClassName,l as WithCustomStyle,U as __namedExportsOrder,Q as default};
