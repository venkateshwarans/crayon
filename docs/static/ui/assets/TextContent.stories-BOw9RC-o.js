import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as w}from"./clsx-B-dksMZM.js";import"./index-DRjF_FHU.js";const q=j=>{const{children:L,variant:y="sunk",className:S,style:b}=j;return e.jsx("div",{className:w("text-content",`text-content-${y}`,S),style:b,children:L})};q.__docgenInfo={description:"",methods:[],displayName:"TextContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"clear" | "card" | "sunk"',elements:[{name:"literal",value:'"clear"'},{name:"literal",value:'"card"'},{name:"literal",value:'"sunk"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const N={title:"Components/TextContent",component:q,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["clear","card","sunk"],description:"Visual style variant of the text content"},children:{control:"text",description:"Content to be displayed"}}},t={args:{children:"This is some sample text content.",variant:"sunk"}},a={args:{children:"This is text content with clear variant.",variant:"clear"}},n={args:{children:"This is text content with card variant.",variant:"card"}},r={args:{children:`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
    `,variant:"sunk"}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Heading 1"}),e.jsxs("p",{children:["This is a paragraph with ",e.jsx("strong",{children:"bold"})," and ",e.jsx("em",{children:"italic"})," text."]}),e.jsx("h2",{children:"Heading 2"}),e.jsxs("ul",{children:[e.jsx("li",{children:"List item 1"}),e.jsx("li",{children:"List item 2"}),e.jsx("li",{children:"List item 3"})]})]}),variant:"card"}};var s,o,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "This is some sample text content.",
    variant: "sunk"
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "This is text content with clear variant.",
    variant: "clear"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "This is text content with card variant.",
    variant: "card"
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,x,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: \`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
    \`,
    variant: "sunk"
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,f,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <>
        <h1>Heading 1</h1>
        <p>
          This is a paragraph with <strong>bold</strong> and <em>italic</em> text.
        </p>
        <h2>Heading 2</h2>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </>,
    variant: "card"
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const D=["Default","Clear","Card","WithLongContent","WithHTMLContent"];export{n as Card,a as Clear,t as Default,i as WithHTMLContent,r as WithLongContent,D as __namedExportsOrder,N as default};
