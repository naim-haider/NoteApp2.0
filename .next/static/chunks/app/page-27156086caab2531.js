(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9371:function(e,t,n){Promise.resolve().then(n.bind(n,2268))},2268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7437),o=n(1396),a=n.n(o),i=n(345),s=n.n(i),c=n(2265),l=n(9688),d=Symbol.for("react-redux-context"),u="undefined"!=typeof globalThis?globalThis:{},f=function(){if(!c.createContext)return{};let e=u[d]??(u[d]=new Map),t=e.get(c.createContext);return t||(t=c.createContext(null),e.set(c.createContext,t)),t}();function m(e=f){return function(){return c.useContext(e)}}var _=m(),p=()=>{throw Error("uSES not initialized!")},h=(e,t)=>e===t,x=function(e=f){let t=e===f?_:m(e);return function(e,n={}){let{equalityFn:r=h,devModeChecks:o={}}="function"==typeof n?{equalityFn:n}:n,{store:a,subscription:i,getServerState:s,stabilityCheck:l,identityFunctionCheck:d}=t();c.useRef(!0);let u=c.useCallback({[e.name]:t=>e(t)}[e.name],[e,l,o.stabilityCheck]),f=p(i.addNestedSub,a.getState,s||a.getState,u,r);return c.useDebugValue(f),f}}();function g(e=f){let t=e===f?_:m(e);return function(){let{store:e}=t();return e}}Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference"),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?c.useLayoutEffect:c.useEffect;var C=g(),y=function(e=f){let t=e===f?C:g(e);return function(){return t().dispatch}}();p=l.useSyncExternalStoreWithSelector,c.useSyncExternalStore;var S=n(2742),b=n(1168);function j(){var e;let t=y(),n=x(e=>e.note.noteApiData);(0,c.useEffect)(()=>{t((0,S._)())},[]);let o=async e=>{let n=await fetch("".concat(b._,"/api/notes/")+e,{method:"DELETE"});(n=await n.json()).success?t((0,S._)()):alert("error")};return(0,r.jsx)("main",{className:s().mainContainer,children:(0,r.jsxs)("div",{className:s().mainContainer,children:[(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)("img",{src:"./notes.png"}),"Notes"]}),(0,r.jsx)(a(),{href:"/notedetail",children:(0,r.jsxs)("button",{children:[(0,r.jsx)("img",{src:"./edit.png"}),"Create Notes"]})})]}),(0,r.jsx)("div",{className:s().mainNoteContainer,children:null==n?void 0:null===(e=n.result)||void 0===e?void 0:e.map(e=>(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:s().notesContainer1,children:[(0,r.jsxs)("div",{className:s().noteContainerText,children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:e.description})]}),(0,r.jsxs)("div",{className:s().notesContainerImg,children:[(0,r.jsx)("div",{className:s().date,children:e.newDate}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a(),{href:"notedetail/"+e._id,children:(0,r.jsx)("img",{className:s().editImg,src:"./edit.png"})}),(0,r.jsx)("img",{className:s().deleteImg,onClick:()=>o(e._id),src:"./delete.png"})]})]})]})},e._id))})]})})}},2742:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var r=n(1168);let{createSlice:o,createAsyncThunk:a}=n(344),i=a("fetchApiNote",async()=>{let e=await fetch("".concat(r._,"/api/notes"),{method:"GET"});return await e.json()}),s=o({name:"addNote",initialState:{isloading:!1,noteApiData:[],isError:!1},extraReducers:e=>{e.addCase(i.pending,(e,t)=>{e.isloading=!0}),e.addCase(i.fulfilled,(e,t)=>{e.isloading=!1,e.noteApiData=t.payload}),e.addCase(i.rejected,(e,t)=>{e.isError=!0})}});t.Z=s.reducer},1168:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r="http://localhost:3000"},345:function(e){e.exports={notesContainer1:"page_notesContainer1__Di6Ni",container:"page_container__aoG4z",mainContainer:"page_mainContainer__uvqiI",notesContainerImg:"page_notesContainerImg__WNM_E",noteContainerText:"page_noteContainerText__x_5Yw",notesContainer:"page_notesContainer__Bp1pX",date:"page_date__i6_IY",deleteImg:"page_deleteImg__ft0Rk",editImg:"page_editImg__qKzp8"}}},function(e){e.O(0,[176,332,971,938,744],function(){return e(e.s=9371)}),_N_E=e.O()}]);