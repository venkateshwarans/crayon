import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{C}from"./Card-C8q16TRB.js";import{I as S}from"./image-Be8kN-4W.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";const W={title:"Components/Image",component:S,tags:["autodocs"],decorators:[o=>s.jsx("div",{style:{maxWidth:600,margin:"20px auto",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:s.jsx(o,{})})],argTypes:{aspectRatio:{control:"select",options:["1:1","3:2","3:4","4:3","16:9"],description:"Uses Radix UI AspectRatio component"},scale:{control:"radio",options:["fit","fill"]}}},a={args:{src:"https://picsum.photos/800/600",alt:"Sample image"}},e={args:{src:"https://picsum.photos/800/600",alt:"Sample image with fill scaling",aspectRatio:"1:1",scale:"fill"}},t={render:o=>s.jsxs(C,{children:[s.jsx(S,{...o}),s.jsx("h3",{children:"Card Title"}),s.jsx("p",{children:"This is how the image looks inside a card component."})]}),args:{src:"https://picsum.photos/800/600",alt:"Sample image in card",aspectRatio:"16:9",scale:"fill"}},r={args:{src:"https://picsum.photos/800/600",alt:"Sample image with custom styles",styles:{border:"2px solid #000",borderRadius:"8px"}}};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Sample image"
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Sample image with fill scaling",
    aspectRatio: "1:1",
    scale: "fill"
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,h,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Card>
      <Image {...args} />
      <h3>Card Title</h3>
      <p>This is how the image looks inside a card component.</p>
    </Card>,
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Sample image in card",
    aspectRatio: "16:9",
    scale: "fill"
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Sample image with custom styles",
    styles: {
      border: "2px solid #000",
      borderRadius: "8px"
    }
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const k=["Default","WithScaleFill","InCard","WithCustomStyles"];export{a as Default,t as InCard,r as WithCustomStyles,e as WithScaleFill,k as __namedExportsOrder,W as default};
