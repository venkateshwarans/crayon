import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{F as i}from"./Hint-uOyVVPYf.js";import{L as d}from"./Label-WIf-SGtb.js";import{I as m}from"./Input-Cn6633Oo.js";/* empty css              */import{C as s}from"./Card-C8q16TRB.js";import{H as p}from"./header-BZtv_l72.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";const y={title:"Components/Card",component:s,parameters:{layout:"centered"},argTypes:{width:{control:"radio",options:["standard","full"]},variant:{control:"radio",options:["card","clear","sunk"]}},tags:["autodocs"]},t={args:{width:"standard",variant:"card"},render:a=>r.jsx("div",{style:{width:"500px"},children:r.jsxs(s,{variant:a.variant,width:a.width,children:[r.jsx(p,{title:"Card Title",subtitle:"Card Description",actions:[]}),r.jsxs(i,{children:[r.jsx(d,{children:"Username"}),r.jsx(m,{placeholder:"Enter username"})]})]})})};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    width: "standard",
    variant: "card"
  },
  render: args => <div style={{
    width: "500px"
  }}>
      <Card variant={args.variant} width={args.width}>
        <Header title="Card Title" subtitle="Card Description" actions={[]} />
        <FormControl>
          <Label>Username</Label>
          <Input placeholder="Enter username" />
        </FormControl>
      </Card>
    </div>
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const b=["CardStory"];export{t as CardStory,b as __namedExportsOrder,y as default};
