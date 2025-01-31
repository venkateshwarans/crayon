import{j}from"./jsx-runtime-DR9Q75dM.js";import{c as O}from"./clsx-B-dksMZM.js";import{R as P}from"./index-DRjF_FHU.js";const c=P.forwardRef((N,q)=>{const{className:v,styles:A,rows:D=3,..._}=N;return j.jsx("textarea",{ref:q,className:O("crayon-textarea",v),style:A,..._,rows:D})});c.displayName="TextArea";c.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},rows:{required:!1,tsType:{name:"number"},description:""}},composes:["Omit"]};const z={title:"Components/TextArea",component:c,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{placeholder:"Enter your text here"}},r={args:{placeholder:"Small textarea",rows:2}},a={args:{placeholder:"Large textarea",rows:4}},s={args:{disabled:!0,placeholder:"This textarea is disabled",value:"This textarea is disabled"}},t={args:{value:"This is a pre-filled textarea with some content",placeholder:"Enter notes"}},o={args:{placeholder:"Custom styled textarea",styles:{width:"400px",margin:"20px"}}},n={args:{placeholder:"Textarea with icons"}};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your text here"
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Small textarea",
    rows: 2
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "Large textarea",
    rows: 4
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "This textarea is disabled",
    value: "This textarea is disabled"
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,w,b;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: "This is a pre-filled textarea with some content",
    placeholder: "Enter notes"
  }
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,C,E;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Custom styled textarea",
    styles: {
      width: "400px",
      margin: "20px"
    }
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var L,W,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: "Textarea with icons"
    // iconLeft: <YourLeftIcon />,
    // iconRight: <YourRightIcon />,
  }
}`,...(I=(W=n.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const B=["Default","Small","Large","Disabled","WithValue","WithCustomStyle","WithIcons"];export{e as Default,s as Disabled,a as Large,r as Small,o as WithCustomStyle,n as WithIcons,t as WithValue,B as __namedExportsOrder,z as default};
