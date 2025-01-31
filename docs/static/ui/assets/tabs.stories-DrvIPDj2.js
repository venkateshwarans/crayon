import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{H as l}from"./header-BZtv_l72.js";import{I as n}from"./IconButton-D6G_v-I0.js";/* empty css                   */import{I as r}from"./image-Be8kN-4W.js";import{r as T}from"./index-DRjF_FHU.js";import{c as pt,a as xt,d as A}from"./index-BSdpmjSK.js";import{c as st,R as Tt,I as vt}from"./index-BRaJLKu3.js";import{P as gt}from"./index-COb6PUCI.js";import{P as w}from"./index-rW5U9cm3.js";import{u as ht}from"./index-CzUF5-ib.js";import{u as jt}from"./index-9JWoxsC4.js";import{c as P}from"./clsx-B-dksMZM.js";import{B as o}from"./bell-C-Y86PL7.js";import{c as V}from"./createLucideIcon-CVKaca6J.js";import"./index-F1fJ65uJ.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=V("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=V("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);var H="Tabs",[yt,Ut]=pt(H,[st]),it=st(),[Ct,_]=yt(H),lt=T.forwardRef((e,c)=>{const{__scopeTabs:u,value:a,onValueChange:b,defaultValue:p,orientation:m="horizontal",dir:g,activationMode:f="automatic",...I}=e,x=ht(g),[d,j]=xt({prop:a,onChange:b,defaultProp:p});return t.jsx(Ct,{scope:u,baseId:jt(),value:d,onValueChange:j,orientation:m,dir:x,activationMode:f,children:t.jsx(w.div,{dir:x,"data-orientation":m,...I,ref:c})})});lt.displayName=H;var nt="TabsList",rt=T.forwardRef((e,c)=>{const{__scopeTabs:u,loop:a=!0,...b}=e,p=_(nt,u),m=it(u);return t.jsx(Tt,{asChild:!0,...m,orientation:p.orientation,dir:p.dir,loop:a,children:t.jsx(w.div,{role:"tablist","aria-orientation":p.orientation,...b,ref:c})})});rt.displayName=nt;var ot="TabsTrigger",ct=T.forwardRef((e,c)=>{const{__scopeTabs:u,value:a,disabled:b=!1,...p}=e,m=_(ot,u),g=it(u),f=mt(m.baseId,a),I=dt(m.baseId,a),x=a===m.value;return t.jsx(vt,{asChild:!0,...g,focusable:!b,active:x,children:t.jsx(w.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":I,"data-state":x?"active":"inactive","data-disabled":b?"":void 0,disabled:b,id:f,...p,ref:c,onMouseDown:A(e.onMouseDown,d=>{!b&&d.button===0&&d.ctrlKey===!1?m.onValueChange(a):d.preventDefault()}),onKeyDown:A(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&m.onValueChange(a)}),onFocus:A(e.onFocus,()=>{const d=m.activationMode!=="manual";!x&&!b&&d&&m.onValueChange(a)})})})});ct.displayName=ot;var ut="TabsContent",bt=T.forwardRef((e,c)=>{const{__scopeTabs:u,value:a,forceMount:b,children:p,...m}=e,g=_(ut,u),f=mt(g.baseId,a),I=dt(g.baseId,a),x=a===g.value,d=T.useRef(x);return T.useEffect(()=>{const j=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(j)},[]),t.jsx(gt,{present:b||x,children:({present:j})=>t.jsx(w.div,{"data-state":x?"active":"inactive","data-orientation":g.orientation,role:"tabpanel","aria-labelledby":f,hidden:!j,id:I,tabIndex:0,...m,ref:c,style:{...e.style,animationDuration:d.current?"0s":void 0},children:j&&p})})});bt.displayName=ut;function mt(e,c){return`${e}-trigger-${c}`}function dt(e,c){return`${e}-content-${c}`}var zt=lt,Bt=rt,Rt=ct,Nt=bt;const v=T.forwardRef(({className:e,style:c,variant:u="clear",...a},b)=>t.jsx(zt,{ref:b,className:P("crayon-tabs",e,`crayon-tabs-${u}`),style:c,...a})),h=T.forwardRef(({className:e,style:c,...u},a)=>t.jsx(Bt,{ref:a,className:P("crayon-tabs-list",e),style:c,...u})),s=T.forwardRef(({className:e,style:c,icon:u,text:a,value:b,...p},m)=>t.jsxs(Rt,{ref:m,className:P("crayon-tabs-trigger",e),style:c,value:b,...p,children:[u,a]})),i=T.forwardRef(({className:e,style:c,children:u,...a},b)=>t.jsx(Nt,{ref:b,className:P("crayon-tabs-content",e),style:c,...a,children:t.jsx("div",{className:"crayon-tabs-content-inner",children:u})}));v.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"clear" | "card" | "sunk"',elements:[{name:"literal",value:'"clear"'},{name:"literal",value:'"card"'},{name:"literal",value:'"sunk"'}]},description:"",defaultValue:{value:'"clear"',computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},value:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},text:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Wt={title:"Components/Tabs",component:v,tags:["autodocs"],decorators:[e=>t.jsx("div",{style:{maxWidth:"600px",margin:"2rem"},children:t.jsx(e,{})})]},S={render:()=>t.jsxs(v,{defaultValue:"tab1",children:[t.jsxs(h,{children:[t.jsx(s,{value:"tab1",text:"Account"}),t.jsx(s,{value:"tab2",text:"Password"}),t.jsx(s,{value:"tab3",text:"Settings"})]}),t.jsxs(i,{value:"tab1",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab3",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})},y={render:()=>t.jsxs(v,{defaultValue:"tab1",children:[t.jsxs(h,{children:[t.jsx(s,{value:"tab1",text:"Active Tab"}),t.jsx(s,{value:"tab2",disabled:!0,text:"Disabled Tab"}),t.jsx(s,{value:"tab3",text:"Another Tab"})]}),t.jsxs(i,{value:"tab1",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab3",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})},C={render:()=>t.jsxs(v,{defaultValue:"tab1",className:"custom-tabs",children:[t.jsxs(h,{className:"custom-tabs-list",children:[t.jsx(s,{value:"tab1",text:"Tab 1"}),t.jsx(s,{value:"tab2",text:"Tab 2"})]}),t.jsxs(i,{value:"tab1",className:"custom-content",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",className:"custom-content",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]})]})},z={render:()=>t.jsxs(v,{defaultValue:"tab1",variant:"clear",children:[t.jsxs(h,{children:[t.jsx(s,{value:"tab1",text:"Account",icon:t.jsx(St,{})}),t.jsx(s,{value:"tab2",text:"Password",icon:t.jsx(It,{})}),t.jsx(s,{value:"tab3",text:"Settings",icon:t.jsx(ft,{})})]}),t.jsxs(i,{value:"tab1",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab3",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})},B={render:()=>t.jsxs(v,{defaultValue:"tab1",variant:"clear",children:[t.jsxs(h,{children:[t.jsx(s,{value:"tab1",text:"Account"}),t.jsx(s,{value:"tab2",text:"Password"}),t.jsx(s,{value:"tab3",text:"Settings"})]}),t.jsxs(i,{value:"tab1",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab3",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})},R={render:()=>t.jsxs(v,{defaultValue:"tab2",variant:"card",children:[t.jsxs(h,{children:[t.jsx(s,{value:"tab1",text:"Account"}),t.jsx(s,{value:"tab2",text:"Password"}),t.jsx(s,{value:"tab3",text:"Settings"})]}),t.jsxs(i,{value:"tab1",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab3",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})},N={render:()=>t.jsxs(v,{defaultValue:"tab3",variant:"sunk",children:[t.jsxs(h,{children:[t.jsx(s,{value:"tab1",text:"Account"}),t.jsx(s,{value:"tab2",text:"Password"}),t.jsx(s,{value:"tab3",text:"Settings"})]}),t.jsxs(i,{value:"tab1",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/200/300",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab2",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/300/400",alt:"Image",scale:"fill"})]}),t.jsxs(i,{value:"tab3",children:[t.jsx(l,{title:"Title",subtitle:"Subtitle",actions:[t.jsx(n,{variant:"tertiary",size:"small",icon:t.jsx(o,{})})]}),t.jsx(r,{src:"https://picsum.photos/400/500",alt:"Image",scale:"fill"})]})]})};var L,k,q;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab3">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(q=(k=S.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var D,M,E;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1" text="Active Tab" />
        <TabsTrigger value="tab2" disabled text="Disabled Tab" />
        <TabsTrigger value="tab3" text="Another Tab" />
      </TabsList>
      <TabsContent value="tab1">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab3">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(E=(M=y.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var F,$,G;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="custom-tabs">
      <TabsList className="custom-tabs-list">
        <TabsTrigger value="tab1" text="Tab 1" />
        <TabsTrigger value="tab2" text="Tab 2" />
      </TabsList>
      <TabsContent value="tab1" className="custom-content">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2" className="custom-content">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,U,W;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" variant="clear">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" icon={<UserRound />} />
        <TabsTrigger value="tab2" text="Password" icon={<ShieldCheck />} />
        <TabsTrigger value="tab3" text="Settings" icon={<Settings />} />
      </TabsList>
      <TabsContent value="tab1">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab3">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(W=(U=z.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var O,J,Q;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" variant="clear">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab3">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(Q=(J=B.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab2" variant="card">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab3">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,at;N.parameters={...N.parameters,docs:{...(tt=N.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab3" variant="sunk">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/200/300" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab2">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/300/400" alt="Image" scale="fill" />
      </TabsContent>
      <TabsContent value="tab3">
        <Header title="Title" subtitle="Subtitle" actions={[<IconButton variant="tertiary" size="small" icon={<Bell />} />]} />
        <Image src="https://picsum.photos/400/500" alt="Image" scale="fill" />
      </TabsContent>
    </Tabs>
}`,...(at=(et=N.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};const Ot=["Default","Disabled","CustomStyling","WithIcon","Clear","Card","Sunk"];export{R as Card,B as Clear,C as CustomStyling,S as Default,y as Disabled,N as Sunk,z as WithIcon,Ot as __namedExportsOrder,Wt as default};
