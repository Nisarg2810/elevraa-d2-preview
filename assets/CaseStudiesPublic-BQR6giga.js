import{D as E,r as t,h as _,k as L,o as T,j as e,W as P,E as j,I as W}from"./main-BBCGV6Pf.js";import{W as I}from"./WebsiteFooter-Cj1EvIUf.js";import{A as M}from"./arrow-left-2tNS6bG2.js";import{A as R}from"./arrow-right-XQUrVeGp.js";import"./phone-Bcq6iNfU.js";function o({width:m="100%",height:x="14px"}){return e.jsx("div",{className:"bg-black/10 rounded-md animate-pulse",style:{width:m,height:x}})}function $(){return e.jsxs("div",{className:"bg-white border border-black/10 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-black/10 animate-pulse"}),e.jsx(o,{width:"140px"})]}),e.jsx(o,{width:"180px",height:"12px"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx(o,{width:"90%"}),e.jsx(o,{width:"85%"}),e.jsx(o,{width:"70%"})]}),e.jsx("div",{className:"mt-6 w-36 h-9 rounded-lg bg-black/10 animate-pulse"})]}),e.jsx("div",{className:"aspect-video rounded-2xl bg-black/10 animate-pulse"})]})}function G(){E("Case Studies");const[m,x]=t.useState([]),[v,y]=t.useState(!0),[n,N]=t.useState(""),[r,k]=t.useState("All"),[S,A]=t.useState([]),[l,u]=t.useState(1);t.useEffect(()=>{const s=_(L,"caseStudies");return T(s,b=>{const w=b.val(),g=w?Object.entries(w).map(([a,c])=>({id:a,...c})).filter(a=>a.isLive!==!1):[];g.sort((a,c)=>(c.createdAt||"").localeCompare(a.createdAt||""));const f=new Set;g.forEach(a=>{Array.isArray(a.tags)&&a.tags.forEach(c=>f.add(c)),a.category&&f.add(a.category)}),x(g),A(["All",...Array.from(f)]),y(!1)})},[]),t.useEffect(()=>{u(1)},[n,r]),t.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[l]);const h=m.filter(s=>{const d=s.title?.toLowerCase().includes(n.toLowerCase())||s.description?.toLowerCase().includes(n.toLowerCase()),b=r==="All"||s.category===r||Array.isArray(s.tags)&&s.tags.includes(r);return d&&b}),p=4,i=Math.ceil(h.length/p),C=h.slice((l-1)*p,l*p);return e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx(P,{}),e.jsxs("section",{className:"relative pt-40 pb-32 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(236,238,127,0.95)_0%,rgba(236,238,127,0.6)_30%,rgba(236,238,127,0.3)_50%,transparent_75%)]"}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 text-center",children:[e.jsx(j.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"block text-sm font-medium mb-4",children:"• Our Work"}),e.jsx(j.h1,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},className:"font-garet text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em]",style:{color:"#201e2b"},children:"Case Studies"})]})]}),e.jsx("section",{className:"pb-16",children:e.jsx("div",{className:"max-w-6xl mx-auto px-4",children:v?e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 md:items-center",children:[e.jsx("div",{className:"w-full md:max-w-sm h-10 rounded-xl bg-black/10 animate-pulse"}),e.jsx("div",{className:"flex gap-3 overflow-x-auto",children:[1,2,3,4].map(s=>e.jsx("div",{className:"h-8 w-24 rounded-full bg-black/10 animate-pulse"},s))})]}):e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 md:items-center",children:[e.jsx("input",{value:n,onChange:s=>N(s.target.value),placeholder:"Search case studies...",className:"w-full md:max-w-sm px-4 py-2 border border-black/10 rounded-xl outline-none"}),e.jsx("div",{className:"flex gap-3 overflow-x-auto no-scrollbar",children:S.map(s=>e.jsx("button",{onClick:()=>k(s),className:`px-4 py-1.5 rounded-full text-sm border whitespace-nowrap ${r===s?"bg-[#ecee81] border-[#ecee81]":"border-black/10 hover:bg-black/5"}`,children:s},s))})]})})}),e.jsx("section",{className:"pb-32 flex-1",children:e.jsx("div",{className:"max-w-6xl mx-auto px-4",children:v?e.jsx("div",{className:"space-y-20",children:[1,2,3].map(s=>e.jsx($,{},s))}):h.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"space-y-20",children:C.map((s,d)=>e.jsxs(j.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45,delay:d*.05},className:"bg-white border border-black/10 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.logo&&e.jsx("img",{src:s.logo,alt:s.title,className:"w-10 h-10 rounded-lg object-cover"}),e.jsx("span",{className:"font-medium",children:s.company})]}),e.jsxs("span",{className:"text-xs block mb-3",children:["• ",s.category," → ",s.service]}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-medium mb-4",children:s.title}),e.jsx("p",{className:"text-gray-600 mb-6 max-w-xl",children:s.description}),e.jsx(W,{to:`/case-study/${s.id}`,className:"inline-block px-4 py-2 bg-black text-white rounded-lg text-sm",children:"View case study"})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden aspect-video bg-gray-100",children:s.coverImage&&e.jsx("img",{src:s.coverImage,alt:s.title,className:"w-full h-full object-cover"})})]},s.id))}),i>1&&e.jsxs("div",{className:"flex items-center justify-center gap-5 mt-20",children:[e.jsx("button",{onClick:()=>u(s=>Math.max(1,s-1)),disabled:l===1,className:`
      w-12
      h-12
      rounded-full
      border
      border-black/20
      flex
      items-center
      justify-center
      transition-colors
      ${l===1?"opacity-50 cursor-not-allowed":"hover:bg-black/5"}
    `,children:e.jsx(M,{className:"w-5 h-5 text-black"})}),e.jsxs("div",{className:`
      px-5
      py-2
      rounded-full
      border
      border-black/10
      text-sm
      text-gray-700
      min-w-[90px]
      text-center
    `,children:[l," / ",i]}),e.jsx("button",{onClick:()=>u(s=>Math.min(i,s+1)),disabled:l===i,className:`
      w-12
      h-12
      rounded-full
      bg-black
      text-white
      flex
      items-center
      justify-center
      transition-colors
      ${l===i?"opacity-50 cursor-not-allowed":"hover:bg-gray-800"}
    `,children:e.jsx(R,{className:"w-5 h-5 text-white"})})]})]}):e.jsx("p",{className:"text-center text-gray-500 py-24",children:"No case studies found."})})}),e.jsx(I,{})]})}export{G as CaseStudiesPublic};
