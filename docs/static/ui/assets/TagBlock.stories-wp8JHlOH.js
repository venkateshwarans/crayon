import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{T as t,H as j}from"./Tag-C-nSHbNE.js";import{c as h}from"./clsx-B-dksMZM.js";import{r as R}from"./index-DRjF_FHU.js";import{U as C}from"./user-m77xcT7m.js";import{c as B}from"./createLucideIcon-CVKaca6J.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=B("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),a=R.forwardRef((r,s)=>e.jsx("div",{ref:s,className:h("crayon-tag-block",r.className),style:r.styles,children:r.children}));a.displayName="TagBlock";a.__docgenInfo={description:"",methods:[],displayName:"TagBlock",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<typeof Tag> | React.ReactElement<typeof Tag>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<typeof Tag>",elements:[{name:"Tag"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<typeof Tag>",elements:[{name:"Tag"}]}],raw:"React.ReactElement<typeof Tag>[]"}]},description:""},styles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/TagBlock",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsxs(a,{styles:{},children:[e.jsx(t,{text:"Simple Tag"}),e.jsx(t,{text:"Another Tag"}),e.jsx(t,{text:"Third Tag"})]})},n={render:()=>e.jsxs(a,{children:[e.jsx(t,{icon:e.jsx(C,{size:16}),text:"User"}),e.jsx(t,{icon:e.jsx(E,{size:16}),text:"Star"}),e.jsx(t,{icon:e.jsx(j,{size:16}),text:"Heart"})]})},c={render:()=>e.jsxs(a,{children:[e.jsx(t,{text:"Custom Color",styles:{backgroundColor:"#e6f3ff",color:"#0066cc"}}),e.jsx(t,{text:"Different Style",styles:{backgroundColor:"#ffe6e6",color:"#cc0000"}}),e.jsx(t,{text:"Another Style",styles:{backgroundColor:"#e6ffe6",color:"#006600"}})]})},l={render:()=>e.jsx(a,{children:Array.from({length:10},(r,s)=>e.jsx(t,{text:`Tag ${s+1}`},s))})};var m,i,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <TagBlock styles={{}}>
      <Tag text="Simple Tag" />
      <Tag text="Another Tag" />
      <Tag text="Third Tag" />
    </TagBlock>
}`,...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var d,p,T;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TagBlock>
      <Tag icon={<User size={16} />} text="User" />
      <Tag icon={<Star size={16} />} text="Star" />
      <Tag icon={<Heart size={16} />} text="Heart" />
    </TagBlock>
}`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var x,f,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <TagBlock>
      <Tag text="Custom Color" styles={{
      backgroundColor: "#e6f3ff",
      color: "#0066cc"
    }} />
      <Tag text="Different Style" styles={{
      backgroundColor: "#ffe6e6",
      color: "#cc0000"
    }} />
      <Tag text="Another Style" styles={{
      backgroundColor: "#e6ffe6",
      color: "#006600"
    }} />
    </TagBlock>
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var u,k,S;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TagBlock>
      {Array.from({
      length: 10
    }, (_, i) => <Tag key={i} text={\`Tag \${i + 1}\`} />)}
    </TagBlock>
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const U=["Default","WithIcons","CustomStyles","ManyTags"];export{c as CustomStyles,o as Default,l as ManyTags,n as WithIcons,U as __namedExportsOrder,N as default};
