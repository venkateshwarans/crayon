import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{B as s}from"./Button-Dfg0yeFE.js";/* empty css               */import{D as B}from"./download-C7xrp--O.js";import{A as L}from"./arrow-right-Dg-zd4-N.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CVKaca6J.js";const e={args:{children:"Primary Button",variant:"primary",size:"medium",disabled:!1},render:r=>a.jsx(s,{variant:r.variant,size:r.size,disabled:r.disabled,children:r.children})},n={args:{children:"Secondary",variant:"secondary"}},i={name:"Tertiary (Ghost)",args:{children:"Tertiary",variant:"tertiary"}},t={args:{children:"Download",variant:"primary",iconLeft:a.jsx(B,{size:18})},render:r=>a.jsx(s,{variant:r.variant,size:r.size,disabled:r.disabled,iconLeft:r.iconLeft,children:r.children})},o={args:{children:"Next",variant:"primary",iconRight:a.jsx(L,{size:18})},render:r=>a.jsx(s,{variant:r.variant,size:r.size,disabled:r.disabled,iconRight:r.iconRight,children:r.children})},W={title:"Components/Button",component:s,parameters:{layout:"centered"},argTypes:{variant:{control:"radio",options:["primary","secondary","tertiary"]},size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"},iconLeft:{control:!1,description:"Any react icon component"},iconRight:{control:!1,description:"Any react icon component"}},tags:["autodocs"]};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
    disabled: false
  },
  render: args => <Button variant={args.variant} size={args.size} disabled={args.disabled}>
      {args.children}
    </Button>
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Tertiary (Ghost)",
  args: {
    children: "Tertiary",
    variant: "tertiary"
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,z,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Download",
    variant: "primary",
    iconLeft: <Download size={18} />
  },
  render: args => <Button variant={args.variant} size={args.size} disabled={args.disabled} iconLeft={args.iconLeft}>
      {args.children}
    </Button>
}`,...(f=(z=t.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var b,R,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Next",
    variant: "primary",
    iconRight: <ArrowRight size={18} />
  },
  render: args => <Button variant={args.variant} size={args.size} disabled={args.disabled} iconRight={args.iconRight}>
      {args.children}
    </Button>
}`,...(x=(R=o.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const E=["Primary","Secondary","Tertiary","WithLeftIcon","WithRightIcon"];export{e as Primary,n as Secondary,i as Tertiary,t as WithLeftIcon,o as WithRightIcon,E as __namedExportsOrder,W as default};
