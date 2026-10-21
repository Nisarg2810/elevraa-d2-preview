import{D,r as a,u as E,h as L,o as _,j as e,W as P,E as b,B as T,k as M}from"./main-BBCGV6Pf.js";import{W as F}from"./WebsiteFooter-Cj1EvIUf.js";import{C as $}from"./calendar-B3SrzIpx.js";import{A as W}from"./arrow-left-2tNS6bG2.js";import{A as B}from"./arrow-right-XQUrVeGp.js";import"./phone-Bcq6iNfU.js";function H(){D("Resources");const[n,w]=a.useState([]),[g,v]=a.useState(!0),[l,y]=a.useState(""),[o,N]=a.useState("All"),[r,d]=a.useState(1),p=E();a.useEffect(()=>{const s=L(M,"resources");return _(s,u=>{const f=u.val(),j=f?Object.entries(f).map(([i,h])=>({id:i,...h})).filter(i=>i.isLive!==!1):[];j.sort((i,h)=>(h.createdAt||"").localeCompare(i.createdAt||"")),w(j),v(!1)})},[]);const k=a.useMemo(()=>{const s=new Set(n.map(t=>t.type).filter(Boolean));return["All",...Array.from(s)]},[n]),m=a.useMemo(()=>n.filter(s=>{const t=o==="All"?!0:s.type===o,u=s.title?.toLowerCase().includes(l.toLowerCase())||s.description?.toLowerCase().includes(l.toLowerCase());return t&&u}),[n,o,l]);a.useEffect(()=>{d(1)},[l,o]),a.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[r]);const x=6,c=Math.ceil(m.length/x),S=m.slice((r-1)*x,r*x),C=()=>e.jsxs("div",{className:"rounded-3xl border border-black/10 p-5 animate-pulse",children:[e.jsx("div",{className:"aspect-video bg-gray-200 rounded-xl mb-4"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3 mb-3"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-2/4"})]}),A=()=>e.jsx("div",{className:"w-full sm:max-w-sm h-10 bg-gray-200 rounded-xl animate-pulse"}),R=()=>e.jsx("div",{className:"flex gap-2 overflow-hidden",children:[...Array(4)].map((s,t)=>e.jsx("div",{className:"h-8 w-24 bg-gray-200 rounded-full animate-pulse"},t))});return e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx(P,{}),e.jsxs("section",{className:"relative pt-40 pb-28 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,238,127,0.95)_0%,rgba(236,238,127,0.6)_35%,transparent_75%)]"}),e.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 text-center",children:[e.jsx(b.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"block text-sm font-medium mb-4",children:"• Resources"}),e.jsx(b.h1,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},className:"font-garet text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em]",style:{color:"#201e2b"},children:"Resources & Downloads"})]})]}),e.jsx("section",{className:"pb-12",children:e.jsx("div",{className:"max-w-6xl mx-auto px-4",children:e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center",children:g?e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx(R,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("input",{value:l,onChange:s=>y(s.target.value),placeholder:"Search resources...",className:"w-full sm:max-w-sm px-4 py-2 rounded-xl border border-black/10"}),e.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar",children:k.map(s=>e.jsx("button",{onClick:()=>N(s),className:`px-4 py-1.5 rounded-full text-sm border ${o===s?"bg-[#ecee81] border-[#ecee81]":"border-black/10 hover:bg-black/5"}`,children:s},s))})]})})})}),e.jsx("section",{className:"pb-32 flex-1",children:e.jsx("div",{className:"max-w-6xl mx-auto px-4",children:g?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:[...Array(6)].map((s,t)=>e.jsx(C,{},t))}):m.length?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:S.map(s=>e.jsxs(b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5},className:"cursor-pointer bg-white border border-black/10 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300",onClick:()=>p(`/r/${s.slug}`),children:[e.jsx("div",{className:"aspect-video bg-gray-100",children:s.coverImage?e.jsx("img",{src:s.coverImage,className:"w-full h-full object-cover",alt:s.title}):e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx(T,{className:"w-10 h-10 text-gray-400"})})}),e.jsxs("div",{className:"p-5 flex flex-col",children:[e.jsx("span",{className:"inline-block mb-3 px-3 py-1 text-xs rounded-full bg-black/5 text-black w-fit",children:s.type}),e.jsx("h3",{className:"font-medium mb-2 text-lg",children:s.title}),s.type==="webinar"&&s.webinarDate?e.jsxs("div",{className:"mb-4 text-sm text-black flex items-center gap-2",children:[e.jsx($,{className:"w-4 h-4 opacity-60"}),e.jsxs("span",{children:[new Date(s.webinarDate).toLocaleDateString("en-US",{month:"short",day:"numeric"}),","," ",new Date(s.webinarDate).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})]})]}):s.description&&e.jsx("p",{className:"text-sm text-gray-600 mb-4 line-clamp-3",children:s.description}),e.jsx("button",{onClick:t=>{t.stopPropagation(),p(`/r/${s.slug}`)},className:"w-full py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors",children:s.type==="webinar"?"Register Now":"View Resource"})]})]},s.id))}),c>1&&e.jsxs("div",{className:"flex items-center justify-center gap-5 mt-16",children:[e.jsx("button",{onClick:()=>d(s=>Math.max(1,s-1)),disabled:r===1,className:`
      w-12
      h-12
      rounded-full
      border
      border-black/20
      flex
      items-center
      justify-center
      transition-colors
      ${r===1?"opacity-50 cursor-not-allowed":"hover:bg-black/5"}
    `,children:e.jsx(W,{className:"w-5 h-5 text-black"})}),e.jsxs("div",{className:`
      px-5
      py-2
      rounded-full
      border
      border-black/10
      text-sm
      text-gray-700
      min-w-[90px]
      text-center
    `,children:[r," / ",c]}),e.jsx("button",{onClick:()=>d(s=>Math.min(c,s+1)),disabled:r===c,className:`
      w-12
      h-12
      rounded-full
      bg-black
      text-white
      flex
      items-center
      justify-center
      transition-colors
      ${r===c?"opacity-50 cursor-not-allowed":"hover:bg-gray-800"}
    `,children:e.jsx(B,{className:"w-5 h-5 text-white"})})]})]}):e.jsx("p",{className:"text-center text-gray-500 py-24",children:"No resources found."})})}),e.jsx(F,{})]})}export{H as default};
