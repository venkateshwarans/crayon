import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{F as l}from"./followUpItem-CisMdH8C.js";import{c as f}from"./clsx-B-dksMZM.js";import{R}from"./index-DRjF_FHU.js";import{P as s}from"./plus-1TuLe9OZ.js";import"./createLucideIcon-CVKaca6J.js";const o=R.forwardRef((x,g)=>{const{children:C,className:F,style:U}=x;return e.jsx("div",{ref:g,className:f("crayon-follow-up-block",F),style:U,children:C})});o.displayName="FollowUpBlock";o.__docgenInfo={description:"",methods:[],displayName:"FollowUpBlock",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<FollowUpItemProps> | React.ReactElement<FollowUpItemProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<FollowUpItemProps>",elements:[{name:"FollowUpItemProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<FollowUpItemProps>",elements:[{name:"FollowUpItemProps"}]}],raw:"React.ReactElement<FollowUpItemProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const B={title:"Components/FollowUpBlock",component:o,tags:["autodocs"],parameters:{layout:"centered"}},t={render:()=>e.jsx(o,{children:e.jsx(l,{text:"What is machine learning?",onClick:()=>console.log("Clicked"),icon:e.jsx(s,{size:16})})})},n={render:()=>e.jsxs(o,{children:[e.jsx(l,{text:"Tell me more about artificial intelligence",onClick:()=>console.log("Clicked 1"),icon:e.jsx(s,{size:16})}),e.jsx(l,{text:"How does deep learning work?",onClick:()=>console.log("Clicked 2"),icon:e.jsx(s,{size:16})}),e.jsx(l,{text:"What are neural networks?",onClick:()=>console.log("Clicked 3"),icon:e.jsx(s,{size:16})})]})},c={render:()=>e.jsx(o,{className:"custom-class",style:{backgroundColor:"#f5f5f5",padding:"20px"},children:e.jsx(l,{text:"How can I customize the appearance?",onClick:()=>console.log("Clicked"),icon:e.jsx(s,{size:16})})})};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <FollowUpBlock>
      <FollowUpItem text="What is machine learning?" onClick={() => console.log("Clicked")} icon={<Plus size={16} />} />
    </FollowUpBlock>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <FollowUpBlock>
      <FollowUpItem text="Tell me more about artificial intelligence" onClick={() => console.log("Clicked 1")} icon={<Plus size={16} />} />
      <FollowUpItem text="How does deep learning work?" onClick={() => console.log("Clicked 2")} icon={<Plus size={16} />} />
      <FollowUpItem text="What are neural networks?" onClick={() => console.log("Clicked 3")} icon={<Plus size={16} />} />
    </FollowUpBlock>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,w,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <FollowUpBlock className="custom-class" style={{
    backgroundColor: "#f5f5f5",
    padding: "20px"
  }}>
      <FollowUpItem text="How can I customize the appearance?" onClick={() => console.log("Clicked")} icon={<Plus size={16} />} />
    </FollowUpBlock>
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const E=["Default","MultipleItems","CustomStyling"];export{c as CustomStyling,t as Default,n as MultipleItems,E as __namedExportsOrder,B as default};
