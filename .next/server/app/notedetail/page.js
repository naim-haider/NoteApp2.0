(()=>{var e={};e.id=968,e.ids=[968],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},4753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>l,routeModule:()=>x,tree:()=>p});var a=r(482),s=r(9108),n=r(2563),o=r.n(n),i=r(8300),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let p=["",{children:["notedetail",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9730)),"D:\\VS Code\\vs-code\\Sajjad\\main projects\\NoteApp\\noteme-app deployed\\src\\app\\notedetail\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6492)),"D:\\VS Code\\vs-code\\Sajjad\\main projects\\NoteApp\\noteme-app deployed\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],l=["D:\\VS Code\\vs-code\\Sajjad\\main projects\\NoteApp\\noteme-app deployed\\src\\app\\notedetail\\page.js"],c="/notedetail/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/notedetail/page",pathname:"/notedetail",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},1731:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6730:(e,t,r)=>{Promise.resolve().then(r.bind(r,4606))},716:(e,t,r)=>{Promise.resolve().then(r.bind(r,7997))},2254:(e,t,r)=>{e.exports=r(4767)},7997:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(2295),s=r(3729),n=r(9895),o=r.n(n),i=r(783),d=r.n(i),p=r(2254),l=r(7664);let c=()=>{let[e,t]=(0,s.useState)(""),[r,n]=(0,s.useState)(""),i=(0,p.useRouter)(),c=new Date,u=c.getFullYear(),x=c.getMonth()+1,m=c.getDate(),h=`${m}/${x}/${u}`,j=async()=>{let t=await fetch(`${l._}/api/notes`,{method:"POST",body:JSON.stringify({title:e,description:r,newDate:h})});(t=await t.json()).success&&i.push("/",{scroll:!1})};return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsxs)("header",{className:o().header,children:[a.jsx(d(),{href:"/",children:a.jsx("button",{className:o().backBtn,children:"Back"})}),a.jsx("button",{className:o().saveBtn,onClick:j,children:"Save"})]}),a.jsx("div",{className:o().popupB,children:a.jsx("div",{className:o().popup,children:(0,a.jsxs)("div",{className:o().content,children:[(0,a.jsxs)("header",{children:[a.jsx("p",{children:"Add a new Note"}),a.jsx("img",{src:"./notes.png"})]}),(0,a.jsxs)("form",{action:"#",children:[(0,a.jsxs)("div",{className:"row title",children:[a.jsx("label",{children:"Title"}),a.jsx("input",{type:"text",onChange:e=>t(e.target.value)})]}),(0,a.jsxs)("div",{className:"row description",children:[a.jsx("label",{children:"Description"}),a.jsx("textarea",{onChange:e=>n(e.target.value)})]})]})]})})})]})}},4606:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Providers:()=>d});var a=r(2295),s=r(448),n=r(8986);let o=(0,s.xC)({reducer:{note:n.Z}}),{Provider:i}=r(6890);function d({children:e}){return a.jsx(i,{store:o,children:e})}},8986:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i,_:()=>o});var a=r(7664);let{createSlice:s,createAsyncThunk:n}=r(5742),o=n("fetchApiNote",async()=>{let e=await fetch(`${a._}/api/notes`,{method:"GET"});return await e.json()}),i=s({name:"addNote",initialState:{isloading:!1,noteApiData:[],isError:!1},extraReducers:e=>{e.addCase(o.pending,(e,t)=>{e.isloading=!0}),e.addCase(o.fulfilled,(e,t)=>{e.isloading=!1,e.noteApiData=t.payload}),e.addCase(o.rejected,(e,t)=>{e.isError=!0})}}).reducer},7664:(e,t,r)=>{"use strict";r.d(t,{_:()=>a});let a="http://localhost:3000"},9895:e=>{e.exports={content:"page_content__TFnMT",popupB:"page_popupB__kQSgR",header:"page_header__u__0v",container:"page_container__iG1Dz",saveBtn:"page_saveBtn__PzsLK",backBtn:"page_backBtn__jP3om",popup:"page_popup__afytT"}},6492:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>c});var a=r(5036),s=r(1457),n=r.n(s);r(5023);var o=r(6843);let i=(0,o.createProxy)(String.raw`D:\VS Code\vs-code\Sajjad\main projects\NoteApp\noteme-app deployed\src\app\redux\provider.js`),{__esModule:d,$$typeof:p}=i;i.default;let l=(0,o.createProxy)(String.raw`D:\VS Code\vs-code\Sajjad\main projects\NoteApp\noteme-app deployed\src\app\redux\provider.js#Providers`),c={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:n().className,children:a.jsx(l,{children:e})})})}},9730:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>o});let a=(0,r(6843).createProxy)(String.raw`D:\VS Code\vs-code\Sajjad\main projects\NoteApp\noteme-app deployed\src\app\notedetail\page.js`),{__esModule:s,$$typeof:n}=a,o=a.default},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,998,783],()=>r(4753));module.exports=a})();