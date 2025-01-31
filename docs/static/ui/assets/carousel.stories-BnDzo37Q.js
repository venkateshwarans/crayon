import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as g}from"./header-BZtv_l72.js";import{I as h}from"./IconButton-D6G_v-I0.js";/* empty css                   */import{I}from"./image-Be8kN-4W.js";import{c as z}from"./clsx-B-dksMZM.js";import{r as o}from"./index-DRjF_FHU.js";import{B as b}from"./bell-C-Y86PL7.js";import{c as $}from"./createLucideIcon-CVKaca6J.js";import{C as w}from"./chevron-right-Ce623L-n.js";import"./index-rW5U9cm3.js";import"./index-F1fJ65uJ.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Y=o.createContext(null),L=()=>{const s=o.useContext(Y);if(!s)throw new Error("useCarousel must be used within a Carousel");return s},p=o.forwardRef(({itemsToScroll:s=1,hasWrappingDivForCards:t,showButtons:l=!0,className:c,children:a,...v},y)=>{const u=o.useRef(null),m=n=>{if(u.current){const i=u.current;let r=Array.from(i.children);const d=r.splice(0,1)[0];t&&(r=Array.from(r[0].children));const T=r.findIndex(Z=>Z.getBoundingClientRect().left>=i.getBoundingClientRect().left),A=n==="left"?Math.max(0,T-s):Math.min(r.length-1,T+s),E=A===0?d:r[A];E&&i.scrollTo({left:E.offsetLeft,behavior:"smooth"})}};return e.jsx(Y.Provider,{value:{scrollDivRef:u,scroll:m,itemsToScroll:s,hasWrappingDivForCards:t,showButtons:l},children:e.jsx("div",{className:z("crayon-carousel",c),ref:y,...v,children:a})})}),x=o.forwardRef(({className:s,children:t,...l},c)=>{const{scrollDivRef:a}=L();return e.jsxs("div",{ref:a,className:z("crayon-carousel-content",s),...l,children:[e.jsx("div",{className:""}),t]})}),f=o.forwardRef(({className:s,children:t,...l},c)=>e.jsx("div",{ref:c,className:z("crayon-carousel-item",s),...l,children:t})),C=o.forwardRef(({className:s,style:t,...l},c)=>{const{scrollDivRef:a,scroll:v,showButtons:y}=L(),[u,m]=o.useState(!0);return o.useEffect(()=>{if(!a.current)return;const n=a.current,i=()=>n.scrollLeft>0;m(i());const r=()=>{m(i())},d=new ResizeObserver(r);return d.observe(n),n.addEventListener("scroll",r),()=>{n.removeEventListener("scroll",r),d.disconnect()}},[a]),!u||!y?null:e.jsx("div",{className:"crayon-carousel-button crayon-carousel-button-left",children:e.jsx(h,{ref:c,shape:"circle",variant:"secondary",size:"small",onClick:()=>v("left"),style:t,...l})})}),j=o.forwardRef(({className:s,style:t,...l},c)=>{const{scrollDivRef:a,scroll:v,showButtons:y}=L(),[u,m]=o.useState(!0);return o.useEffect(()=>{if(!a.current)return;const n=a.current,i=()=>n.scrollLeft+n.offsetWidth<n.scrollWidth;m(i());const r=()=>{m(i())},d=new ResizeObserver(r);return d.observe(n),n.addEventListener("scroll",r),()=>{n.removeEventListener("scroll",r),d.disconnect()}},[a]),!u||!y?null:e.jsx("div",{className:"crayon-carousel-button crayon-carousel-button-right",children:e.jsx(h,{ref:c,shape:"circle",variant:"secondary",size:"small",onClick:()=>v("right"),style:t,...l})})});p.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{itemsToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},hasWrappingDivForCards:{required:!1,tsType:{name:"boolean"},description:""},showButtons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};x.__docgenInfo={description:"",methods:[],displayName:"CarouselContent"};f.__docgenInfo={description:"",methods:[],displayName:"CarouselItem"};C.__docgenInfo={description:"",methods:[],displayName:"CarouselPrevious"};j.__docgenInfo={description:"",methods:[],displayName:"CarouselNext"};const he={title:"Components/Carousel",component:p,parameters:{layout:"centered"},tags:["autodocs"]},B={render:()=>e.jsxs(p,{style:{width:"100%",maxWidth:"20rem"},children:[e.jsx(x,{children:Array.from({length:10}).map((s,t)=>e.jsxs(f,{children:[e.jsx(g,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(h,{variant:"tertiary",size:"small",icon:e.jsx(b,{})})]}),e.jsx(I,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]},t))}),e.jsx(C,{icon:e.jsx(S,{})}),e.jsx(j,{icon:e.jsx(w,{})})]})},N={render:()=>e.jsxs(p,{style:{width:"100%",maxWidth:"28rem"},itemsToScroll:2,children:[e.jsx(x,{children:Array.from({length:10}).map((s,t)=>e.jsxs(f,{children:[e.jsx(g,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(h,{variant:"tertiary",size:"small",icon:e.jsx(b,{})})]}),e.jsx(I,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]},t))}),e.jsx(C,{icon:e.jsx(S,{})}),e.jsx(j,{icon:e.jsx(w,{})})]})},_={render:()=>e.jsxs(p,{style:{width:"100%",maxWidth:"28rem"},hasWrappingDivForCards:!0,children:[e.jsx(x,{children:e.jsx("div",{style:{display:"flex"},children:Array.from({length:20}).map((s,t)=>e.jsxs(f,{children:[e.jsx(g,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(h,{variant:"tertiary",size:"small",icon:e.jsx(b,{})})]}),e.jsx(I,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]},t))})}),e.jsx(C,{icon:e.jsx(S,{})}),e.jsx(j,{icon:e.jsx(w,{})})]})},R={render:()=>e.jsxs(p,{style:{width:"100%",maxWidth:"28rem"},showButtons:!1,children:[e.jsx(x,{style:{gap:"1rem"},children:Array.from({length:10}).map((s,t)=>e.jsxs(f,{children:[e.jsx(g,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(h,{variant:"tertiary",size:"small",icon:e.jsx(b,{})})]}),e.jsx(I,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]},t))}),e.jsx(C,{icon:e.jsx(S,{})}),e.jsx(j,{icon:e.jsx(w,{})})]})},W={render:()=>e.jsxs(p,{style:{width:"100%",maxWidth:"28rem"},children:[e.jsx(x,{style:{gap:"1rem"},children:Array.from({length:10}).map((s,t)=>e.jsxs(f,{children:[e.jsx(g,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(h,{variant:"tertiary",size:"small",icon:e.jsx(b,{})})]}),e.jsx(I,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]},t))}),e.jsx(C,{icon:e.jsx(S,{})}),e.jsx(j,{icon:e.jsx(w,{})})]})};var D,k,P;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Carousel style={{
    width: "100%",
    maxWidth: "20rem"
  }}>
      <CarouselContent>
        {Array.from({
        length: 10
      }).map((_, index) => <CarouselItem key={index}>
            <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
            <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
}`,...(P=(k=B.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var H,O,M;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Carousel style={{
    width: "100%",
    maxWidth: "28rem"
  }} itemsToScroll={2}>
      <CarouselContent>
        {Array.from({
        length: 10
      }).map((_, index) => <CarouselItem key={index}>
            <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
            <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
}`,...(M=(O=N.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var q,F,V;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Carousel style={{
    width: "100%",
    maxWidth: "28rem"
  }} hasWrappingDivForCards>
      <CarouselContent>
        <div style={{
        display: "flex"
      }}>
          {Array.from({
          length: 20
        }).map((_, index) => <CarouselItem key={index}>
              <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
              <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
            </CarouselItem>)}
        </div>
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
}`,...(V=(F=_.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var G,J,K;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Carousel style={{
    width: "100%",
    maxWidth: "28rem"
  }} showButtons={false}>
      <CarouselContent style={{
      gap: "1rem"
    }}>
        {Array.from({
        length: 10
      }).map((_, index) => <CarouselItem key={index}>
            <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
            <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
}`,...(K=(J=R.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;W.parameters={...W.parameters,docs:{...(Q=W.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Carousel style={{
    width: "100%",
    maxWidth: "28rem"
  }}>
      <CarouselContent style={{
      gap: "1rem"
    }}>
        {Array.from({
        length: 10
      }).map((_, index) => <CarouselItem key={index}>
            <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
            <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
}`,...(X=(U=W.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const pe=["Default","MultipleItems","WithWrappingDiv","WithNoButtons","CustomStyling"];export{W as CustomStyling,B as Default,N as MultipleItems,R as WithNoButtons,_ as WithWrappingDiv,pe as __namedExportsOrder,he as default};
