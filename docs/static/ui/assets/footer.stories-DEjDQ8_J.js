import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as a}from"./Button-Dfg0yeFE.js";import{c as y}from"./clsx-B-dksMZM.js";import{R as f}from"./index-DRjF_FHU.js";const n=f.forwardRef((o,i)=>{const{className:l,style:m,variant:p,children:u,...d}=o;return e.jsx("div",{ref:i,className:y("crayon-footer",`crayon-footer-${p}`,l),style:m,...d,children:u})});n.displayName="Footer";n.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{variant:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},children:{required:!0,tsType:{name:"union",raw:`| React.ReactElement<typeof Button | typeof IconButton>
| React.ReactElement<typeof Button | typeof IconButton>[]`,elements:[{name:"ReactReactElement",raw:"React.ReactElement<typeof Button | typeof IconButton>",elements:[{name:"union",raw:"typeof Button | typeof IconButton",elements:[{name:"Button"},{name:"IconButton"}]}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<typeof Button | typeof IconButton>",elements:[{name:"union",raw:"typeof Button | typeof IconButton",elements:[{name:"Button"},{name:"IconButton"}]}]}],raw:"React.ReactElement<typeof Button | typeof IconButton>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const x={title:"Components/Footer",component:n,parameters:{layout:"centered"},argTypes:{variant:{control:"radio",options:["horizontal","vertical"]}},tags:["autodocs"]},t={args:{variant:"horizontal"},render:o=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(n,{variant:o.variant,children:[e.jsx(a,{children:"Cancel"}),e.jsx(a,{children:"Save"})]})})};var r,s,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: "horizontal"
  },
  render: args => <div style={{
    width: "500px"
  }}>
      <Footer variant={args.variant}>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Footer>
    </div>
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const w=["FooterStory"];export{t as FooterStory,w as __namedExportsOrder,x as default};
