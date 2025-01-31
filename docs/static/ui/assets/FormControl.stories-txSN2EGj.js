import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{I as e}from"./Input-Cn6633Oo.js";import{F as m,H as l}from"./Hint-uOyVVPYf.js";import{L as i}from"./Label-WIf-SGtb.js";/* empty css              */import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";const v={title:"Components/FormControl",component:m,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{children:r.jsx(e,{placeholder:"Enter text..."})}},s={render:()=>r.jsxs(m,{children:[r.jsx(i,{children:"Username"}),r.jsx(e,{placeholder:"Enter username"}),r.jsx(l,{children:"Must be at least 4 characters long"})]})},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(i,{htmlFor:"email",children:"Email"}),r.jsx(e,{placeholder:"Enter email",id:"email",type:"email"}),r.jsx(l,{children:"We'll never share your email"})]}),style:{width:"300px",margin:"20px"}}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(i,{htmlFor:"password",children:"Password"}),r.jsx(e,{type:"password",placeholder:"Enter password",id:"password"}),r.jsx(l,{children:"Use a strong password with mixed characters"})]}),className:"custom-form-control"}},n={render:()=>r.jsxs(m,{children:[r.jsx(i,{htmlFor:"profile-information",children:"Profile Information"}),r.jsx(e,{placeholder:"Full name",id:"profile-information"}),r.jsx(e,{placeholder:"Bio"}),r.jsx(l,{children:"This information will be displayed on your public profile"})]})};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <Input placeholder="Enter text..." />
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,u,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <FormControl>
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <Hint>Must be at least 4 characters long</Hint>
    </FormControl>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,g,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Enter email" id="email" type="email" />
        <Hint>We'll never share your email</Hint>
      </>,
    style: {
      width: "300px",
      margin: "20px"
    }
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var w,b,F;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <>
        <Label htmlFor="password">Password</Label>
        <Input type="password" placeholder="Enter password" id="password" />
        <Hint>Use a strong password with mixed characters</Hint>
      </>,
    className: "custom-form-control"
  }
}`,...(F=(b=t.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var y,C,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FormControl>
      <Label htmlFor="profile-information">Profile Information</Label>
      <Input placeholder="Full name" id="profile-information" />
      <Input placeholder="Bio" />
      <Hint>This information will be displayed on your public profile</Hint>
    </FormControl>
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const A=["Basic","WithLabelAndHint","WithCustomStyle","WithCustomClass","WithMultipleChildren"];export{o as Basic,t as WithCustomClass,a as WithCustomStyle,s as WithLabelAndHint,n as WithMultipleChildren,A as __namedExportsOrder,v as default};
