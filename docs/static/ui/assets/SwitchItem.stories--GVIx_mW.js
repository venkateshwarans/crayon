import{j as q}from"./jsx-runtime-DR9Q75dM.js";import{r as z}from"./index-DRjF_FHU.js";/* empty css              */import{S as v}from"./switchItem-BbDxtcCN.js";import"./index-BSdpmjSK.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";import"./index-B9TBPUnv.js";import"./clsx-B-dksMZM.js";import"./Hint-uOyVVPYf.js";import"./Label-WIf-SGtb.js";const V={title:"Components/SwitchItem",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},onChange:{action:"changed"}}},r={args:{label:"Switch Item",onChange:()=>{}}},a={args:{label:"Notifications",onChange:()=>{}}},t={args:{label:"Disabled Switch",disabled:!0,onChange:()=>{}}},o={args:{label:"Checked Switch",checked:!0,onChange:()=>{}}},e=()=>{const[L,O]=z.useState(!1);return q.jsx(v,{label:"Controlled Switch",checked:L,onChange:R=>O(R)})},s={args:{label:"Controlled Switch",checked:!1}},n={args:{label:"Switch with a very long label that might wrap to multiple lines to test the component's layout handling",onChange:()=>{}}},c={args:{label:"Switch with Error",onChange:()=>{}}};e.__docgenInfo={description:"",methods:[],displayName:"ControlledSwitchTemplate"};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Switch Item",
    onChange: () => {}
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,m,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Notifications",
    onChange: () => {}
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true,
    onChange: () => {}
  }
}`,...(C=(u=t.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var S,b,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Checked Switch",
    checked: true,
    onChange: () => {}
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var k,f,x;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = useState(false);
  return <SwitchItem label="Controlled Switch" checked={isChecked} onChange={checked => setIsChecked(checked)} />;
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,D,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Controlled Switch",
    checked: false
  }
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var E,T,W;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Switch with a very long label that might wrap to multiple lines to test the component's layout handling",
    onChange: () => {}
  }
}`,...(W=(T=n.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,j,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Switch with Error",
    onChange: () => {}
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const X=["Default","WithDescription","Disabled","Checked","ControlledSwitchTemplate","Controlled","LongText","WithError"];export{o as Checked,s as Controlled,e as ControlledSwitchTemplate,r as Default,t as Disabled,n as LongText,a as WithDescription,c as WithError,X as __namedExportsOrder,V as default};
