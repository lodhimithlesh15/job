(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{43974:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/frontend/dashboard",function(){return l(9271)}])},9271:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Dashboard}});var a=l(85893);l(19806);var o=l(11163),n=l(67294),i=l(90044),r=l(9473);function AppliedJobDataTable(){let e=(0,o.useRouter)(),t=(0,r.v9)(e=>e.AppliedJob.appliedJob),[l,s]=(0,n.useState)([]);(0,n.useEffect)(()=>{s(t)},[]);let[d,c]=(0,n.useState)(""),[u,p]=(0,n.useState)([]);(0,n.useEffect)(()=>{p(l)},[l]);let v=[{name:"Apply Date",selector:e=>{var t;return new Date("".concat(null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.createdAt)).toLocaleDateString("en-GB")}},{name:"Company",selector:e=>{var t;return null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.company}},{name:"Job title",selector:e=>{var t;return null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.title}},{name:"Job Salary ",selector:e=>{var t;return"$"+(null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.salary)}},{name:"Status",selector:e=>(0,a.jsx)("p",{className:"uppercase font-semibold ".concat((null==e?void 0:e.status)==="approved"?"text-green-500":"","  ").concat((null==e?void 0:e.status)==="rejected"?"text-red-600":""),children:null==e?void 0:e.status})},{name:"Action",cell:t=>(0,a.jsx)("button",{onClick:()=>{var l;return e.push("/frontend/jobDetails/".concat(null==t?void 0:null===(l=t.job)||void 0===l?void 0:l._id))},className:"md:px-2 md:py-2 px-1 py-1 text-xs text-indigo-600 hover:text-white my-2 hover:bg-indigo-600 border border-indigo-600   rounded transition-all duration-700  ",children:"view Detail"})}];return(0,n.useEffect)(()=>{""===d?p(l):p(null==l?void 0:l.filter(e=>{var t;let l=null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.company.toUpperCase(),a=d.toUpperCase();return l.indexOf(a)>-1}))},[d,l]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.ZP,{subHeaderAlign:"right",columns:v,data:u,keyField:"id",pagination:!0,title:"Total Applied Jobs: ".concat(null==l?void 0:l.length),fixedHeader:!0,fixedHeaderScrollHeight:"79%",selectableRows:!0,selectableRowsHighlight:!0,subHeader:!0,persistTableHead:!0,subHeaderComponent:(0,a.jsx)("input",{className:"w-60  py-2 px-2  outline-none  border-b-2 border-indigo-600",type:"search",value:d,onChange:e=>c(e.target.value),placeholder:"Search with company name..."}),className:"h-screen bg-white"})})}var s=l(94076),d=l(1241),c=l(8193),u=l(22920);function SavedJobDataTable(){let e=(0,o.useRouter)(),t=(0,r.v9)(e=>e.AppliedJob.bookMark),[l,s]=(0,n.useState)([]);(0,n.useEffect)(()=>{s(t)},[]);let[p,v]=(0,n.useState)(""),[b,x]=(0,n.useState)([]);(0,n.useEffect)(()=>{x(l)},[l]);let h=[{name:"Apply Date",selector:e=>{var t;return new Date("".concat(null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.createdAt)).toLocaleDateString("en-GB")}},{name:"Company",selector:e=>{var t;return null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.company}},{name:"Job title",selector:e=>{var t;return null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.title}},{name:"Job Salary ",selector:e=>{var t;return"$"+(null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.salary)}},{name:"Action",cell:e=>(0,a.jsx)("button",{onClick:()=>handleDelete(null==e?void 0:e._id),className:"md:px-2 md:py-2 px-1 py-1 text-xl text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600   rounded transition-all duration-700  ",children:(0,a.jsx)(c.YK6,{})})},{name:"",cell:t=>(0,a.jsx)("button",{onClick:()=>{var l;return e.push("/frontend/jobDetails/".concat(null==t?void 0:null===(l=t.job)||void 0===l?void 0:l._id))},className:"md:px-2 md:py-2 px-1 py-1 text-xs text-indigo-600 hover:text-white my-2 hover:bg-indigo-600 border border-indigo-600   rounded transition-all duration-700  ",children:"view Detail"})}];(0,n.useEffect)(()=>{""===p?x(l):x(null==l?void 0:l.filter(e=>{var t;let l=null==e?void 0:null===(t=e.job)||void 0===t?void 0:t.company.toUpperCase(),a=p.toUpperCase();return l.indexOf(a)>-1}))},[p,l]);let handleDelete=async e=>{let t=await (0,d.hB)(e);return t.success?x(b.filter(t=>(null==t?void 0:t._id)!==e)):u.Am.error(t.message)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.ZP,{subHeaderAlign:"right",columns:h,data:b,keyField:"id",pagination:!0,title:"Total Saved Jobs: ".concat(null==l?void 0:l.length),fixedHeader:!0,fixedHeaderScrollHeight:"79%",selectableRows:!0,selectableRowsHighlight:!0,subHeader:!0,persistTableHead:!0,subHeaderComponent:(0,a.jsx)("input",{className:"w-60  py-2 px-2  outline-none  border-b-2 border-indigo-600",type:"search",value:p,onChange:e=>v(e.target.value),placeholder:"Search with company name..."}),className:"h-screen bg-white"}),(0,a.jsx)(u.Ix,{})]})}var p=l(57562),v=l(9517),b=l(31955),x=l(63750),h=l(2585),m=l(55767);function Dashboard(){let[e,t]=(0,n.useState)("appliedJobs"),[l,i]=(0,n.useState)(!0),c=(0,o.useRouter)(),u=(0,r.I0)(),f=(0,r.v9)(e=>{var t;return null==e?void 0:null===(t=e.User)||void 0===t?void 0:t.userData}),g=null==f?void 0:f._id;(0,n.useEffect)(()=>{g&&b.Z.get("token")||c.push("/auth/login")},[f,g,b.Z]),(0,n.useEffect)(()=>{fetchAppliedJobs()},[]);let fetchAppliedJobs=async()=>{let e=await (0,p.rb)(g),t=await (0,d.di)(g);e.success||t.success?(u((0,v.mp)(null==e?void 0:e.data)),u((0,v.WO)(null==t?void 0:t.data)),i(!1)):c.push("/auth/login")};return(0,a.jsx)(a.Fragment,{children:l?(0,a.jsxs)("div",{className:"bg-gray w-full h-screen flex items-center flex-col justify-center",children:[(0,a.jsx)(m.Nx,{width:"200",color:"#4f46e5"}),(0,a.jsx)("p",{className:"text-xs uppercase",children:"Loading Resources Hold Tight..."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{}),(0,a.jsxs)("div",{className:"w-full h-screen pt-20 flex items-center justify-start flex-col",children:[(0,a.jsxs)("div",{className:"flex bg-gray-100 flex-wrap items-center justify-center w-full py-2 px-2",children:[(0,a.jsxs)("div",{onClick:()=>t("appliedJobs"),className:"py-2 cursor-pointer border-indigo-600 border-b-2 px-2 w-60 h-32 rounded mx-2 my-2 bg-white flex items-center justify-center",children:[(0,a.jsx)(h.WMf,{className:"bg-gray-50 text-indigo-600 rounded-full w-10 h-10"}),(0,a.jsxs)("div",{className:"flex  flex-col mx-2 items-start justify-start px-2 ",children:[(0,a.jsx)("p",{className:"text-xl font-semibold",children:"Total Applied"}),(0,a.jsx)("p",{className:"text-lg font-semibold",children:"50+"})]})]}),(0,a.jsxs)("div",{onClick:()=>t("savedJobs"),className:"py-2 cursor-pointer border-b-teal-600 border-b-2 px-2 w-60 h-32 rounded mx-2 my-2 bg-white flex items-center justify-center",children:[(0,a.jsx)(x.rlt,{className:"bg-gray-50 text-indigo-600 rounded-full w-10 h-10"}),(0,a.jsxs)("div",{className:"flex  flex-col items-start mx-2 justify-start px-2 ",children:[(0,a.jsx)("p",{className:"text-xl font-semibold",children:"Save Jobs"}),(0,a.jsx)("p",{className:"text-lg font-semibold",children:"50+"})]})]})]}),(0,a.jsx)("div",{className:"w-full h-full px-4 ",children:"savedJobs"===e?(0,a.jsx)(SavedJobDataTable,{}):(0,a.jsx)(AppliedJobDataTable,{})})]})]})})}},72950:function(){},22868:function(){},14777:function(){},99830:function(){},70209:function(){}},function(e){e.O(0,[980,617,874,13,949,866,44,806,366,774,888,179],function(){return e(e.s=43974)}),_N_E=e.O()}]);