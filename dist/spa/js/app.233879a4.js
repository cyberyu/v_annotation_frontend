(function(e){function t(t){for(var o,r,u=t[0],i=t[1],c=t[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a={1:0},s=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"7f290a90",3:"39233ac8",4:"efd95bd9",5:"8990cfbb",6:"31137b12"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={2:1,3:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"0f404157",3:"14c43790",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",a=i.p+o,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"authenticated",(function(){return O})),n.d(o,"user",(function(){return P}));var r={};n.r(r),n.d(r,"authRequest",(function(){return x})),n.d(r,"authSuccess",(function(){return _})),n.d(r,"csrftoken",(function(){return E})),n.d(r,"authError",(function(){return k})),n.d(r,"logout",(function(){return T})),n.d(r,"loading",(function(){return R}));var a={};n.r(a),n.d(a,"register",(function(){return j})),n.d(a,"setCSRFToken",(function(){return C})),n.d(a,"login",(function(){return N})),n.d(a,"logout",(function(){return A}));n("5319"),n("7d6e"),n("e54f"),n("0ca9"),n("5b0d");var s=n("2b0e"),u=n("1f91"),i=n("42d2"),c=n("b05d"),l=n("515f"),f=n("2a19"),d=n("f508");s["a"].use(c["a"],{config:{},lang:u["a"],iconSet:i["a"],plugins:{Cookies:l["a"],Notify:f["a"],Loading:d["a"]}});var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},m=[],h={name:"App"},g=h,v=n("2877"),y=Object(v["a"])(g,p,m,!1,null,null,null),b=y.exports,w=n("2f62"),S=function(){return{authenticated:l["a"].get("sessionid")||!1,user:JSON.parse(localStorage.getItem("user")||"{}")}};const O=e=>e.authenticated,P=e=>e.user;function x(e){e.status="loading"}function _(e,t){e.status="success",e.authenticated=!0,e.user=t}function E(e){}function k(e){e.status="error"}function T(e){e.authenticated=!1,e.user={pk:"",username:""}}function R(e,t){e.loading=t}function j({commit:e},t){return new Promise(((n,o)=>{e("authRequest"),this._vm.$axios.post("/rest-auth/registration/",t).then((t=>{const o=t.data.user;localStorage.setItem("user",JSON.stringify(o)),e("authSuccess",t.data),n(t)})).catch((t=>{e("authError",t),localStorage.removeItem("user"),o(t)}))}))}function C({commit:e}){return new Promise(((t,n)=>{this._vm.$axios.get("/account/login-set-cookie/").then((n=>{if(200===n.status){console.log(n),console.log(n.config.headers);const o=l["a"].get("csrftoken");localStorage.setItem("csrftoken",o),e("csrftoken",o),t(n)}})).catch((t=>{e("authError"),localStorage.removeItem("csrftoken"),n(t)}))}))}function N({commit:e,dispatch:t},n){return new Promise(((t,o)=>{e("authRequest"),this._vm.$axios.post("/account/login/",n).then((n=>{if(200===n.status){const o=n.data;localStorage.setItem("user",JSON.stringify(o)),e("authSuccess",n.data),this.$router.push("/"),t(n)}})).catch((t=>{e("authError"),localStorage.removeItem("user"),o(t)}))}))}function A({commit:e}){return new Promise((t=>{this._vm.$axios.post("/rest-auth/logout/",{}),e("logout"),localStorage.removeItem("user"),localStorage.removeItem("csrftoken"),t()}))}var $={namespaced:!0,state:S,getters:o,mutations:r,actions:a};s["a"].use(w["a"]);var I=function(){const e=new w["a"].Store({modules:{auth:$},strict:!1});return e},L=n("8c4f");n("ddb0");const B=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{name:"projects",path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"171d"))},{name:"project",path:"/project/:id",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"d556"))},{name:"annotate",path:"/annotate/:id",props:!0,component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"4dad"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var q=B;s["a"].use(L["a"]);var D=function(){const e=new L["a"]({scrollBehavior:()=>({x:0,y:0}),routes:q,mode:"hash",base:""});return e},J=async function(){const e="function"===typeof I?await I({Vue:s["a"]}):I,t="function"===typeof D?await D({Vue:s["a"],store:e}):D;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}},M=n("a925"),F={failed:"Action failed",success:"Action was successful"},V={"en-us":F};s["a"].use(M["a"]);const H=new M["a"]({locale:"en-us",fallbackLocale:"en-us",messages:V});var U=({app:e})=>{e.i18n=H},K=n("bc3a"),Q=n.n(K);s["a"].prototype.$hostname=window.location.origin+window.location.pathname,s["a"].prototype.$axios=Q.a.create({baseURL:s["a"].prototype.$hostname}),s["a"].prototype.$axios.defaults.xsrfHeaderName="X-CSRFToken",s["a"].prototype.$axios.defaults.xsrfCookieName="csrftoken",s["a"].prototype.$axios.defaults.withCredentials=!0;const X={bind(e,t,n){function o(){if(e.parentElement){var n=r();n.fixStr&&t.value.getSelection&&t.value.getSelection(n)}else document.body.removeEventListener("mouseup",o)}function r(){var n=window.getSelection(),o={};if(n.rangeCount>0){var r=n.getRangeAt(0),u=document.createRange();if(u.selectNode(e),a(r,u))if(o.allStr=r.toString(),t.modifiers.fix)s(r,u),o.fixStr=r.toString(),o.start=r.startOffset,o.end=r.endOffset;else{var i=r.cloneRange();s(i,u),o.fixStr=i.toString(),o.start=i.startOffset,o.end=i.endOffset,i.detach()}}return o}function a(e,t){return!(e.compareBoundaryPoints(Range.END_TO_START,t)>0||e.compareBoundaryPoints(Range.START_TO_END,t)<0)}function s(e,t){e.compareBoundaryPoints(Range.START_TO_START,t)<0&&e.setStart(t.startContainer,t.startOffset),e.compareBoundaryPoints(Range.END_TO_END,t)>0&&e.setEnd(t.endContainer,t.endOffset)}document.body.addEventListener("mouseup",o)}};var z=X;console.log("text"),s["a"].directive("selection",z);const G="";async function W(){const{app:e,store:t,router:n}=await J();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),u=[U,void 0,void 0];for(let c=0;!1===o&&c<u.length;c++)if("function"===typeof u[c])try{await u[c]({app:e,router:n,store:t,Vue:s["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:G})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&new s["a"](e)}W()},"5b0d":function(e,t,n){}});