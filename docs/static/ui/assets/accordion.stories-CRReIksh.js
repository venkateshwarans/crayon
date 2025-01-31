import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as m}from"./header-BZtv_l72.js";import{I as p}from"./IconButton-D6G_v-I0.js";/* empty css                   */import{I as u}from"./image-Be8kN-4W.js";import{r as h,R as I}from"./index-DRjF_FHU.js";import{c as Re,a as Q,d as we,u as Ye}from"./index-BSdpmjSK.js";import{c as Je,u as Qe}from"./index-CzUF5-ib.js";import{P as z,u as Ne}from"./index-rW5U9cm3.js";import{P as We}from"./index-COb6PUCI.js";import{u as Be}from"./index-9JWoxsC4.js";import{c as _}from"./clsx-B-dksMZM.js";import{C as Xe}from"./chevron-down-CNMr56bq.js";import{B as x}from"./bell-C-Y86PL7.js";import{D as Y}from"./download-C7xrp--O.js";import"./index-F1fJ65uJ.js";import"./createLucideIcon-CVKaca6J.js";var W="Collapsible",[Ze,_e]=Re(W),[et,X]=Ze(W),ze=h.forwardRef((t,c)=>{const{__scopeCollapsible:o,open:i,defaultOpen:r,disabled:n,onOpenChange:d,...g}=t,[j=!1,v]=Q({prop:i,defaultProp:r,onChange:d});return e.jsx(et,{scope:o,disabled:n,contentId:Be(),open:j,onOpenToggle:h.useCallback(()=>v(f=>!f),[v]),children:e.jsx(z.div,{"data-state":ee(j),"data-disabled":n?"":void 0,...g,ref:c})})});ze.displayName=W;var Pe="CollapsibleTrigger",He=h.forwardRef((t,c)=>{const{__scopeCollapsible:o,...i}=t,r=X(Pe,o);return e.jsx(z.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":ee(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...i,ref:c,onClick:we(t.onClick,r.onOpenToggle)})});He.displayName=Pe;var Z="CollapsibleContent",Ee=h.forwardRef((t,c)=>{const{forceMount:o,...i}=t,r=X(Z,t.__scopeCollapsible);return e.jsx(We,{present:o||r.open,children:({present:n})=>e.jsx(tt,{...i,ref:c,present:n})})});Ee.displayName=Z;var tt=h.forwardRef((t,c)=>{const{__scopeCollapsible:o,present:i,children:r,...n}=t,d=X(Z,o),[g,j]=h.useState(i),v=h.useRef(null),f=Ne(c,v),b=h.useRef(0),N=b.current,T=h.useRef(0),P=T.current,S=d.open||g,R=h.useRef(S),w=h.useRef(void 0);return h.useEffect(()=>{const A=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(A)},[]),Ye(()=>{const A=v.current;if(A){w.current=w.current||{transitionDuration:A.style.transitionDuration,animationName:A.style.animationName},A.style.transitionDuration="0s",A.style.animationName="none";const B=A.getBoundingClientRect();b.current=B.height,T.current=B.width,R.current||(A.style.transitionDuration=w.current.transitionDuration,A.style.animationName=w.current.animationName),j(i)}},[d.open,i]),e.jsx(z.div,{"data-state":ee(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!S,...n,ref:f,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":P?`${P}px`:void 0,...t.style},children:S&&r})});function ee(t){return t?"open":"closed"}var ot=ze,it=He,nt=Ee,C="Accordion",rt=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[te,ct,st]=Je(C),[$,kt]=Re(C,[st,_e]),oe=_e(),ke=I.forwardRef((t,c)=>{const{type:o,...i}=t,r=i,n=i;return e.jsx(te.Provider,{scope:t.__scopeAccordion,children:o==="multiple"?e.jsx(mt,{...n,ref:c}):e.jsx(dt,{...r,ref:c})})});ke.displayName=C;var[De,at]=$(C),[Oe,lt]=$(C,{collapsible:!1}),dt=I.forwardRef((t,c)=>{const{value:o,defaultValue:i,onValueChange:r=()=>{},collapsible:n=!1,...d}=t,[g,j]=Q({prop:o,defaultProp:i,onChange:r});return e.jsx(De,{scope:t.__scopeAccordion,value:g?[g]:[],onItemOpen:j,onItemClose:I.useCallback(()=>n&&j(""),[n,j]),children:e.jsx(Oe,{scope:t.__scopeAccordion,collapsible:n,children:e.jsx(Me,{...d,ref:c})})})}),mt=I.forwardRef((t,c)=>{const{value:o,defaultValue:i,onValueChange:r=()=>{},...n}=t,[d=[],g]=Q({prop:o,defaultProp:i,onChange:r}),j=I.useCallback(f=>g((b=[])=>[...b,f]),[g]),v=I.useCallback(f=>g((b=[])=>b.filter(N=>N!==f)),[g]);return e.jsx(De,{scope:t.__scopeAccordion,value:d,onItemOpen:j,onItemClose:v,children:e.jsx(Oe,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(Me,{...n,ref:c})})})}),[pt,L]=$(C),Me=I.forwardRef((t,c)=>{const{__scopeAccordion:o,disabled:i,dir:r,orientation:n="vertical",...d}=t,g=I.useRef(null),j=Ne(g,c),v=ct(o),b=Qe(r)==="ltr",N=we(t.onKeyDown,T=>{var ne;if(!rt.includes(T.key))return;const P=T.target,S=v().filter(U=>{var re;return!((re=U.ref.current)!=null&&re.disabled)}),R=S.findIndex(U=>U.ref.current===P),w=S.length;if(R===-1)return;T.preventDefault();let A=R;const B=0,G=w-1,K=()=>{A=R+1,A>G&&(A=B)},F=()=>{A=R-1,A<B&&(A=G)};switch(T.key){case"Home":A=B;break;case"End":A=G;break;case"ArrowRight":n==="horizontal"&&(b?K():F());break;case"ArrowDown":n==="vertical"&&K();break;case"ArrowLeft":n==="horizontal"&&(b?F():K());break;case"ArrowUp":n==="vertical"&&F();break}const Ue=A%w;(ne=S[Ue].ref.current)==null||ne.focus()});return e.jsx(pt,{scope:o,disabled:i,direction:r,orientation:n,children:e.jsx(te.Slot,{scope:o,children:e.jsx(z.div,{...d,"data-orientation":n,ref:j,onKeyDown:i?void 0:N})})})}),q="AccordionItem",[ut,ie]=$(q),Ve=I.forwardRef((t,c)=>{const{__scopeAccordion:o,value:i,...r}=t,n=L(q,o),d=at(q,o),g=oe(o),j=Be(),v=i&&d.value.includes(i)||!1,f=n.disabled||t.disabled;return e.jsx(ut,{scope:o,open:v,disabled:f,triggerId:j,children:e.jsx(ot,{"data-orientation":n.orientation,"data-state":Fe(v),...g,...r,ref:c,disabled:f,open:v,onOpenChange:b=>{b?d.onItemOpen(i):d.onItemClose(i)}})})});Ve.displayName=q;var qe="AccordionHeader",$e=I.forwardRef((t,c)=>{const{__scopeAccordion:o,...i}=t,r=L(C,o),n=ie(qe,o);return e.jsx(z.h3,{"data-orientation":r.orientation,"data-state":Fe(n.open),"data-disabled":n.disabled?"":void 0,...i,ref:c})});$e.displayName=qe;var J="AccordionTrigger",Le=I.forwardRef((t,c)=>{const{__scopeAccordion:o,...i}=t,r=L(C,o),n=ie(J,o),d=lt(J,o),g=oe(o);return e.jsx(te.ItemSlot,{scope:o,children:e.jsx(it,{"aria-disabled":n.open&&!d.collapsible||void 0,"data-orientation":r.orientation,id:n.triggerId,...g,...i,ref:c})})});Le.displayName=J;var Ge="AccordionContent",Ke=I.forwardRef((t,c)=>{const{__scopeAccordion:o,...i}=t,r=L(C,o),n=ie(Ge,o),d=oe(o);return e.jsx(nt,{role:"region","aria-labelledby":n.triggerId,"data-orientation":r.orientation,...d,...i,ref:c,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});Ke.displayName=Ge;function Fe(t){return t?"open":"closed"}var xt=ke,At=Ve,gt=$e,ht=Le,jt=Ke;const y=h.forwardRef(({className:t,style:c,...o},i)=>e.jsx(xt,{ref:i,className:_("crayon-accordion",t),style:c,...o})),s=h.forwardRef(({className:t,style:c,value:o,variant:i="card",...r},n)=>e.jsx(At,{ref:n,className:_("crayon-accordion-item",`crayon-accordion-item-${i}`,t),style:c,value:o,...r})),a=h.forwardRef(({className:t,style:c,text:o,icon:i,...r},n)=>e.jsx(gt,{className:_("crayon-accordion-header"),children:e.jsxs(ht,{ref:n,className:_("crayon-accordion-trigger",t),style:c,...r,children:[e.jsxs("div",{className:"crayon-accordion-trigger-content",children:[i,o]}),e.jsx(Xe,{className:"crayon-accordion-trigger-icon"})]})})),l=h.forwardRef(({className:t,style:c,children:o,...i},r)=>e.jsx(jt,{ref:r,className:_("crayon-accordion-content",t),style:c,...i,children:e.jsx("div",{className:"crayon-accordion-content-wrapper",children:o})}));y.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"card" | "sunk"',elements:[{name:"literal",value:'"card"'},{name:"literal",value:'"sunk"'}]},description:"",defaultValue:{value:'"card"',computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},text:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"AccordionContent",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Dt={title:"Components/Accordion",component:y,tags:["autodocs"],decorators:[t=>e.jsx(t,{})]},H={render:()=>e.jsxs(y,{type:"single",collapsible:!0,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(a,{text:"Accordion 1"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(a,{text:"Accordion 2"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(a,{text:"Accordion 3"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})},E={render:()=>e.jsxs(y,{type:"single",collapsible:!0,defaultValue:"item-1",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(a,{text:"Accordion 1"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(a,{text:"Accordion 2"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(a,{text:"Accordion 3"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})},k={render:()=>e.jsxs(y,{type:"multiple",children:[e.jsxs(s,{value:"item-1",children:[e.jsx(a,{text:"Accordion 1"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(a,{text:"Accordion 2"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(a,{text:"Accordion 3"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})},D={render:()=>e.jsxs(y,{type:"multiple",defaultValue:["item-1","item-2"],children:[e.jsxs(s,{value:"item-1",children:[e.jsx(a,{text:"Accordion 1"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(a,{text:"Accordion 2"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(a,{text:"Accordion 3"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})},O={render:()=>e.jsxs(y,{type:"single",collapsible:!0,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(a,{text:"Accordion 1",icon:e.jsx(Y,{})}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(a,{text:"Accordion 2",icon:e.jsx(Y,{})}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(a,{text:"Accordion 3",icon:e.jsx(Y,{})}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})},M={render:()=>e.jsxs(y,{type:"single",collapsible:!0,children:[e.jsxs(s,{value:"item-1",variant:"card",children:[e.jsx(a,{text:"Accordion 1"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",variant:"card",children:[e.jsx(a,{text:"Accordion 2"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",variant:"card",children:[e.jsx(a,{text:"Accordion 3"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})},V={render:()=>e.jsxs(y,{type:"single",collapsible:!0,children:[e.jsxs(s,{value:"item-1",variant:"sunk",children:[e.jsx(a,{text:"Accordion 1"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-2",variant:"sunk",children:[e.jsx(a,{text:"Accordion 2"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]}),e.jsxs(s,{value:"item-3",variant:"sunk",children:[e.jsx(a,{text:"Accordion 3"}),e.jsxs(l,{children:[e.jsx(m,{title:"Title",subtitle:"Subtitle",actions:[e.jsx(p,{variant:"tertiary",size:"small",icon:e.jsx(x,{})})]}),e.jsx(u,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})]})};var ce,se,ae;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger text="Accordion 1" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger text="Accordion 2" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger text="Accordion 3" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ae=(se=H.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,de,me;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger text="Accordion 1" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger text="Accordion 2" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger text="Accordion 3" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(me=(de=E.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,xe;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger text="Accordion 1" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger text="Accordion 2" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger text="Accordion 3" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(xe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var Ae,ge,he;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger text="Accordion 1" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger text="Accordion 2" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger text="Accordion 3" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(he=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var je,ve,Ie;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger text="Accordion 1" icon={<Download />} />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger text="Accordion 2" icon={<Download />} />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger text="Accordion 3" icon={<Download />} />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ie=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var fe,be,Ce;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1" variant="card">
        <AccordionTrigger text="Accordion 1" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="card">
        <AccordionTrigger text="Accordion 2" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="card">
        <AccordionTrigger text="Accordion 3" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ce=(be=M.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ye,Te,Se;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1" variant="sunk">
        <AccordionTrigger text="Accordion 1" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="sunk">
        <AccordionTrigger text="Accordion 2" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="sunk">
        <AccordionTrigger text="Accordion 3" />
        <AccordionContent>
          <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
          <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Se=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};const Ot=["Default","SingleOpen","Multiple","MultipleOpen","withIcon","CardVariant","SunkVariant"];export{M as CardVariant,H as Default,k as Multiple,D as MultipleOpen,E as SingleOpen,V as SunkVariant,Ot as __namedExportsOrder,Dt as default,O as withIcon};
