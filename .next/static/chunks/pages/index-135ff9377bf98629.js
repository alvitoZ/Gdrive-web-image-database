(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6365)}])},1251:function(e,t,n){"use strict";var a=n(5893),r=n(1664),l=n.n(r),s=n(5675),o=n.n(s),i=n(7294);let d=()=>{let[e,t]=(0,i.useState)(!0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:" dark:bg-[#1a202c] w-full py-4 md:pt-16 text-lg text-gray-700 ",children:[(0,a.jsx)("div",{className:"h-16 w-8 cursor-pointer md:hidden flex items-center",onClick:()=>t(!e),children:(0,a.jsx)(o(),{src:"/static/svgs/dehaze.svg",alt:"s",width:25,height:25})}),(0,a.jsx)("div",{className:"".concat(e?"hidden":"block"," w-full md:flex md:items-center md:w-auto"),children:(0,a.jsx)("div",{className:" pt-4 md:flex md:justify-between md:items-center md:pt-0 md:w-full pb-8 border-b-[3px] ",children:(0,a.jsxs)("div",{className:"md:flex md:flex-row md:gap-20",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(l(),{href:"/",children:"Homepage"})}),(0,a.jsx)("div",{className:"flex items-center ",children:(0,a.jsx)(l(),{href:"/coba",children:"about me"})})]})})})]})})};t.Z=d},2075:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(5893);let r=e=>{let{title:t,description:n}=e,r="".concat(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:r}),(0,a.jsx)("meta",{name:"robots",content:"follow, index"}),(0,a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=7"}),(0,a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{name:"keywords",content:"Enter Your Keyword"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("link",{rel:"icon",href:"/static/favicons/favicon.ico",type:"image/x-icon"}),(0,a.jsx)("meta",{property:"og:site_name",content:r}),(0,a.jsx)("meta",{property:"og:description",content:n})]})};var l=n(1163);let s=e=>{let{children:t}=e,n=(0,l.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"min-h-screen flex w-full flex-col dark:bg-[#1a202c] px-[6%]",children:[(0,a.jsx)(r,{title:"/"==n.asPath?"Gdrive as database image":n.asPath.replace("/",""),description:"Description of Create Next Page by aing"}),t]})})};var o=s},6365:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return p},default:function(){return x}});var a=n(5893),r=n(2075),l=n(1251),s=n(7294),o=n(6154);let i=o.Z.create({baseURL:"https://gdrive-web-image-database.vercel.app"}),d=()=>{let[e,t]=(0,s.useState)({src:"",alt:"",downloadUrl:"",name:"",desc:""}),[n,r]=(0,s.useState)({bool:!1}),l=t=>{var a;(a=e.src,RegExp('^https://drive.google.com/(?:open?id=|file/d/)([a-zA-Z0-9_-]{25,})|(?<=id=)([a-zA-Z0-9_-]{25,})|(?<=/d/)([a-zA-Z0-9_-]{25,})|(?<=/uc?export=download&id=)([a-zA-Z0-9_-]{25,})$";').test(a))?(i.post("/api/server",e).catch(e=>{console.log(e)}),r({bool:!n.bool}),setTimeout(()=>{r({bool:n.bool})},5e3)):(alert("kudu masukin link gdrive"),t.preventDefault())};return(0,a.jsx)("div",{className:"flex justify-between flex-col items-start border-b border-teal-500 py-2",children:(0,a.jsxs)("form",{method:"post",onSubmit:e=>l(e),children:[(0,a.jsx)("input",{className:"appearance-none bg-pink-300 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",required:!0,name:"src",placeholder:"your image Gdrive link",onChange:n=>t({...e,src:n.target.value})}),(0,a.jsx)("input",{className:"appearance-none bg-yellow-300 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",required:!0,name:"alt",placeholder:"your image alt",onChange:n=>t({...e,alt:n.target.value})}),(0,a.jsx)("input",{className:"appearance-none bg-blue-600 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",required:!0,name:"downloadUrl",placeholder:"your image downloadUrl",onChange:n=>t({...e,downloadUrl:n.target.value})}),(0,a.jsx)("input",{className:"appearance-none bg-blue-700 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",required:!0,name:"name",placeholder:"name",maxLength:20,onChange:n=>t({...e,name:n.target.value})}),(0,a.jsx)("input",{className:"appearance-none bg-red-600 border-none w-full text-yellow-600 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",required:!0,name:"desc",placeholder:"deskripsi",maxLength:30,onChange:n=>t({...e,desc:n.target.value})}),(0,a.jsx)("button",{className:"flex-shrink-0 bg-red-600 hover:bg-teal-700 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",disabled:n.bool,children:"upload"}),(0,a.jsx)("p",{children:n.bool?"SABAR KONT*L!!":"ok success"})]})})};var c=n(5152),u=n.n(c);let m=e=>{let{datas:t,images:s}=e,o=u()(()=>n.e(329).then(n.bind(n,4329)),{loadableGenerated:{webpack:()=>[4329]},ssr:!1});return(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)("h1",{children:"Test Gdrive as Database Form Image"}),(0,a.jsx)(d,{}),(0,a.jsx)(o,{images:s,datas:t})]})};var p=!0,x=m}},function(e){e.O(0,[675,424,530,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);