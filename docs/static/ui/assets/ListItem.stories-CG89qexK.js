import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{L as O,M as c}from"./listItem-CBP7OGnl.js";import{U as j}from"./user-m77xcT7m.js";import{C as a}from"./chevron-right-Ce623L-n.js";import"./index-DRjF_FHU.js";import"./createLucideIcon-CVKaca6J.js";import"./clsx-B-dksMZM.js";const W={title:"Components/ListItem",component:O,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{decorativeIcon:{control:"select",options:["Mail","User","none"],mapping:{Mail:c,User:j,none:void 0}},actionIcon:{control:"select",options:["ChevronRight","none"],mapping:{ChevronRight:a,none:void 0}},onClick:{action:"clicked"}}},e={args:{title:"List Item Title",subtitle:"Subtitle text goes here",decorativeIcon:t.jsx(c,{size:16}),actionIcon:t.jsx(a,{size:16})}},o={args:{title:"List Item Title",subtitle:"Subtitle text goes here"}},s={args:{title:"List Item with Icon",subtitle:"Has only decorative icon",decorativeIcon:t.jsx(j,{size:16})}},i={args:{title:"List Item with Action",subtitle:"Has only action icon",actionIcon:t.jsx(a,{size:16})}},n={args:{title:"Title Only List Item"}},r={args:{title:t.jsx("div",{style:{fontWeight:"bold",color:"#333"},children:"Custom Styled Title"}),subtitle:t.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Custom styled subtitle with different color and size"}),decorativeIcon:t.jsx(c,{size:16}),actionIcon:t.jsx(a,{size:16})}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "List Item Title",
    subtitle: "Subtitle text goes here",
    decorativeIcon: <Mail size={16} />,
    actionIcon: <ChevronRight size={16} />
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "List Item Title",
    subtitle: "Subtitle text goes here"
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var I,h,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: "List Item with Icon",
    subtitle: "Has only decorative icon",
    decorativeIcon: <User size={16} />
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,b,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "List Item with Action",
    subtitle: "Has only action icon",
    actionIcon: <ChevronRight size={16} />
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var z,S,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: "Title Only List Item"
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,L,T;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: <div style={{
      fontWeight: "bold",
      color: "#333"
    }}>Custom Styled Title</div>,
    subtitle: <div style={{
      fontSize: "0.875rem",
      color: "#666"
    }}>
        Custom styled subtitle with different color and size
      </div>,
    decorativeIcon: <Mail size={16} />,
    actionIcon: <ChevronRight size={16} />
  }
}`,...(T=(L=r.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const k=["Default","WithoutIcons","OnlyDecorativeIcon","OnlyActionIcon","TitleOnly","CustomStyling"];export{r as CustomStyling,e as Default,i as OnlyActionIcon,s as OnlyDecorativeIcon,n as TitleOnly,o as WithoutIcons,k as __namedExportsOrder,W as default};
