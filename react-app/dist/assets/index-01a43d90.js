var Is=Object.defineProperty,ws=Object.defineProperties;var Es=Object.getOwnPropertyDescriptors;var dn=Object.getOwnPropertySymbols,bs=Object.getPrototypeOf,Ts=Object.prototype.hasOwnProperty,Ss=Object.prototype.propertyIsEnumerable,Cs=Reflect.get;var un=(n,e,t)=>e in n?Is(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,L=(n,e)=>{for(var t in e||(e={}))Ts.call(e,t)&&un(n,t,e[t]);if(dn)for(var t of dn(e))Ss.call(e,t)&&un(n,t,e[t]);return n},U=(n,e)=>ws(n,Es(e));var ue=(n,e,t)=>Cs(bs(n),t,e);var l=(n,e,t)=>new Promise((r,s)=>{var i=c=>{try{a(t.next(c))}catch(d){s(d)}},o=c=>{try{a(t.throw(c))}catch(d){s(d)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(i,o);a((t=t.apply(n,e)).next())});import{r as h,d as zn,a as Ps}from"./vendor-9fe24c3f.js";import{u as As,a as Os,R as Rs,b as F,L as hn,B as ks}from"./router-4197aa40.js";import{m as Ds,k as Ns,Q as M}from"./ui-9e04399f.js";import{_ as Lt,c as Ls}from"./supabase-f3f4aacd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var qn={exports:{}},lt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=h,xs=Symbol.for("react.element"),Us=Symbol.for("react.fragment"),Fs=Object.prototype.hasOwnProperty,js=Ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bs={key:!0,ref:!0,__self:!0,__source:!0};function Gn(n,e,t){var r,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fs.call(e,r)&&!Bs.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:xs,type:n,key:i,ref:o,props:s,_owner:js.current}}lt.Fragment=Us;lt.jsx=Gn;lt.jsxs=Gn;qn.exports=lt;var m=qn.exports,Kn,fn=zn;Kn=fn.createRoot,fn.hydrateRoot;const $s="modulepreload",Vs=function(n){return"/"+n},pn={},k=function(e,t,r){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Vs(i),i in pn)return;pn[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let _=s.length-1;_>=0;_--){const y=s[_];if(y.href===i&&(!o||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":$s,o||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),o)return new Promise((_,y)=>{d.addEventListener("load",_),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const Hs=({id:n,src:e,startRect:t,targetSelector:r,onComplete:s})=>{const[i,o]=h.useState(null);if(h.useEffect(()=>{const w=document.querySelector(r);if(w)o(w.getBoundingClientRect());else{const R=document.querySelector(".nav-icon");R&&o(R.getBoundingClientRect())}},[r]),!t)return null;const a=document.body,c=t.left,d=t.top,_=t.width,y=t.height,u=i?i.left+i.width/2-_/2:c+20,E=i?i.top+i.height/2-y/2:d-20;return zn.createPortal(m.jsx(Ds.div,{style:{position:"fixed",left:c,top:d,width:_,height:y,zIndex:3e3,pointerEvents:"none",borderRadius:8,overflow:"hidden"},initial:{x:0,y:0,opacity:1,scale:1},animate:{x:u-c,y:E-d,opacity:.15,scale:.35},transition:{duration:.8,ease:"easeInOut"},onAnimationComplete:()=>{setTimeout(()=>s&&s(n),10)},children:m.jsx("img",{src:e,alt:"flying",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),a)},Jn=h.createContext(),Ws=()=>{const n=h.useContext(Jn);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n},zs=({children:n})=>{const[e,t]=h.useState(()=>{const s=localStorage.getItem("luxe-dark-mode");return s?JSON.parse(s):!1});h.useEffect(()=>{localStorage.setItem("luxe-dark-mode",JSON.stringify(e)),e?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode")},[e]);const r=()=>t(s=>!s);return m.jsx(Jn.Provider,{value:{isDarkMode:e,toggleTheme:r},children:n})},qs=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gs=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,d=c?n[s+2]:0,_=i>>2,y=(i&3)<<4|a>>4;let u=(a&15)<<2|d>>6,E=d&63;c||(E=64,o||(u=64)),r.push(t[_],t[y],t[u],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yn(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gs(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||d==null||y==null)throw new Ks;const u=i<<2|a>>4;if(r.push(u),d!==64){const E=a<<4&240|d>>2;if(r.push(E),y!==64){const w=d<<6&192|y;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ks extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Js=function(n){const e=Yn(n);return Xn.encodeByteArray(e,!0)},Qn=function(n){return Js(n).replace(/\./g,"")},Zn=function(n){try{return Xn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=()=>Ys().__FIREBASE_DEFAULTS__,Qs=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zs=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&Zn(n[1]);return e&&JSON.parse(e)},Mt=()=>{try{return qs()||Xs()||Qs()||Zs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ei=n=>{var e,t;return(t=(e=Mt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},er=()=>{var n;return(n=Mt())===null||n===void 0?void 0:n.config},tr=n=>{var e;return(e=Mt())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function ni(n){return l(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}const Me={};function ri(){const n={prod:[],emulator:[]};for(const e of Object.keys(Me))Me[e]?n.emulator.push(e):n.prod.push(e);return n}function si(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mn=!1;function ii(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!dt(window.location.host)||Me[n]===e||Me[n]||mn)return;Me[n]=e;function t(u){return`__firebase__banner__${u}`}const r="__firebase__banner",i=ri().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function c(u,E){u.setAttribute("width","24"),u.setAttribute("id",E),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function d(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{mn=!0,o()},u}function _(u,E){u.setAttribute("id",E),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function y(){const u=si(r),E=t("text"),w=document.getElementById(E)||document.createElement("span"),R=t("learnmore"),f=document.getElementById(R)||document.createElement("a"),v=t("preprendIcon"),g=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const P=u.element;a(P),_(f,R);const C=d();c(g,v),P.append(g,w,f,C),document.body.appendChild(P)}i?(w.innerText="Preview backend disconnected.",g.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(g.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oi(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function ai(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function ci(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function li(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function di(){const n=j();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ui(){try{return typeof indexedDB=="object"}catch(n){return!1}}function hi(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="FirebaseError";class ce extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fi,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$e.prototype.create)}}class $e{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pi(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ce(s,a,r)}}function pi(n,e){return n.replace(mi,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mi=/\{\$([^}]+)}/g;function gi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Te(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(gn(i)&&gn(o)){if(!Te(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ne(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Le(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function _i(n,e){const t=new yi(n,e);return t.subscribe.bind(t)}class yi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vi(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=_t),s.error===void 0&&(s.error=_t),s.complete===void 0&&(s.complete=_t);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vi(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _t(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n){return n&&n._delegate?n._delegate:n}class Se{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ti;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ei(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch(i){}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return l(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wi(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(s){}return r||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wi(n){return n===he?void 0:n}function Ei(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ii(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Ti={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Si=D.INFO,Ci={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Pi=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ci[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nr{constructor(e){this.name=e,this._logLevel=Si,this._logHandler=Pi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ti[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Ai=(n,e)=>e.some(t=>n instanceof t);let _n,yn;function Oi(){return _n||(_n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ri(){return yn||(yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rr=new WeakMap,St=new WeakMap,sr=new WeakMap,yt=new WeakMap,xt=new WeakMap;function ki(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(oe(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&rr.set(t,n)}).catch(()=>{}),xt.set(e,n),e}function Di(n){if(St.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});St.set(n,e)}let Ct={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return St.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ni(n){Ct=n(Ct)}function Li(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vt(this),e,...t);return sr.set(r,e.sort?e.sort():[e]),oe(r)}:Ri().includes(n)?function(...e){return n.apply(vt(this),e),oe(rr.get(this))}:function(...e){return oe(n.apply(vt(this),e))}}function Mi(n){return typeof n=="function"?Li(n):(n instanceof IDBTransaction&&Di(n),Ai(n,Oi())?new Proxy(n,Ct):n)}function oe(n){if(n instanceof IDBRequest)return ki(n);if(yt.has(n))return yt.get(n);const e=Mi(n);return e!==n&&(yt.set(n,e),xt.set(e,n)),e}const vt=n=>xt.get(n);function xi(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=oe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(oe(o.result),c.oldVersion,c.newVersion,oe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const Ui=["get","getKey","getAll","getAllKeys","count"],Fi=["put","add","delete","clear"],It=new Map;function vn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(It.get(e))return It.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Fi.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ui.includes(t)))return;const i=function(o,...a){return l(this,null,function*(){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(a.shift())),(yield Promise.all([d[t](...a),s&&c.done]))[0]})};return It.set(e,i),i}Ni(n=>U(L({},n),{get:(e,t,r)=>vn(e,t)||n.get(e,t,r),has:(e,t)=>!!vn(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bi(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bi(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pt="@firebase/app",In="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new nr("@firebase/app"),$i="@firebase/app-compat",Vi="@firebase/analytics-compat",Hi="@firebase/analytics",Wi="@firebase/app-check-compat",zi="@firebase/app-check",qi="@firebase/auth",Gi="@firebase/auth-compat",Ki="@firebase/database",Ji="@firebase/data-connect",Yi="@firebase/database-compat",Xi="@firebase/functions",Qi="@firebase/functions-compat",Zi="@firebase/installations",eo="@firebase/installations-compat",to="@firebase/messaging",no="@firebase/messaging-compat",ro="@firebase/performance",so="@firebase/performance-compat",io="@firebase/remote-config",oo="@firebase/remote-config-compat",ao="@firebase/storage",co="@firebase/storage-compat",lo="@firebase/firestore",uo="@firebase/ai",ho="@firebase/firestore-compat",fo="firebase",po="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]",mo={[Pt]:"fire-core",[$i]:"fire-core-compat",[Hi]:"fire-analytics",[Vi]:"fire-analytics-compat",[zi]:"fire-app-check",[Wi]:"fire-app-check-compat",[qi]:"fire-auth",[Gi]:"fire-auth-compat",[Ki]:"fire-rtdb",[Ji]:"fire-data-connect",[Yi]:"fire-rtdb-compat",[Xi]:"fire-fn",[Qi]:"fire-fn-compat",[Zi]:"fire-iid",[eo]:"fire-iid-compat",[to]:"fire-fcm",[no]:"fire-fcm-compat",[ro]:"fire-perf",[so]:"fire-perf-compat",[io]:"fire-rc",[oo]:"fire-rc-compat",[ao]:"fire-gcs",[co]:"fire-gcs-compat",[lo]:"fire-fst",[ho]:"fire-fst-compat",[uo]:"fire-vertex","fire-js":"fire-js",[fo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new Map,go=new Map,Ot=new Map;function wn(n,e){try{n.container.addComponent(e)}catch(t){Z.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fe(n){const e=n.name;if(Ot.has(e))return Z.debug(`There were multiple attempts to register component ${e}.`),!1;Ot.set(e,n);for(const t of nt.values())wn(t,n);for(const t of go.values())wn(t,n);return!0}function ir(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new $e("app","Firebase",_o);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Se("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=po;function or(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:At,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ae.create("bad-app-name",{appName:String(s)});if(t||(t=er()),!t)throw ae.create("no-options");const i=nt.get(s);if(i){if(Te(t,i.options)&&Te(r,i.config))return i;throw ae.create("duplicate-app",{appName:s})}const o=new bi(s);for(const c of Ot.values())o.addComponent(c);const a=new yo(t,r,o);return nt.set(s,a),a}function vo(n=At){const e=nt.get(n);if(!e&&n===At&&er())return or();if(!e)throw ae.create("no-app",{appName:n});return e}function ve(n,e,t){var r;let s=(r=mo[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Z.warn(a.join(" "));return}Fe(new Se(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="firebase-heartbeat-database",wo=1,je="firebase-heartbeat-store";let wt=null;function ar(){return wt||(wt=xi(Io,wo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(je)}catch(t){console.warn(t)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),wt}function Eo(n){return l(this,null,function*(){try{const t=(yield ar()).transaction(je),r=yield t.objectStore(je).get(cr(n));return yield t.done,r}catch(e){if(e instanceof ce)Z.warn(e.message);else{const t=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Z.warn(t.message)}}})}function En(n,e){return l(this,null,function*(){try{const r=(yield ar()).transaction(je,"readwrite");yield r.objectStore(je).put(e,cr(n)),yield r.done}catch(t){if(t instanceof ce)Z.warn(t.message);else{const r=ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Z.warn(r.message)}}})}function cr(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=1024,To=30;class So{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Po(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return l(this,null,function*(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bn();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>To){const o=Ao(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Z.warn(r)}})}getHeartbeatsHeader(){return l(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bn(),{heartbeatsToSend:r,unsentEntries:s}=Co(this._heartbeatsCache.heartbeats),i=Qn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Z.warn(t),""}})}}function bn(){return new Date().toISOString().substring(0,10)}function Co(n,e=bo){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tn(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Tn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Po{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return l(this,null,function*(){return ui()?hi().then(()=>!0).catch(()=>!1):!1})}read(){return l(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield Eo(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return l(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return En(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return l(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return En(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return})}}function Tn(n){return Qn(JSON.stringify({version:2,heartbeats:n})).length}function Ao(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){Fe(new Se("platform-logger",e=>new ji(e),"PRIVATE")),Fe(new Se("heartbeat",e=>new So(e),"PRIVATE")),ve(Pt,In,n),ve(Pt,In,"esm2017"),ve("fire-js","")}Oo("");var Ro="firebase",ko="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(Ro,ko,"app");function lr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Do=lr,dr=new $e("auth","Firebase",lr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new nr("@firebase/auth");function No(n,...e){rt.logLevel<=D.WARN&&rt.warn(`Auth (${He}): ${n}`,...e)}function Qe(n,...e){rt.logLevel<=D.ERROR&&rt.error(`Auth (${He}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n,...e){throw Ft(n,...e)}function W(n,...e){return Ft(n,...e)}function Ut(n,e,t){const r=Object.assign(Object.assign({},Do()),{[e]:t});return new $e("auth","Firebase",r).create(e,{appName:n.name})}function Q(n){return Ut(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&V(n,"argument-error"),Ut(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ft(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return dr.create(n,...e)}function T(n,e,...t){if(!n)throw Ft(e,...t)}function Y(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qe(e),new Error(e)}function ee(n,e){n||Y(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mo(){return Sn()==="http:"||Sn()==="https:"}function Sn(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mo()||ci()||"connection"in navigator)?navigator.onLine:!0}function Uo(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.shortDelay=e,this.longDelay=t,ee(t>e,"Short delay should be less than long delay!"),this.isMobile=oi()||li()}get(){return xo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,e){ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bo=new We(3e4,6e4);function le(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}function te(i,o,a,c){return l(this,arguments,function*(n,e,t,r,s={}){return hr(n,s,()=>l(this,null,function*(){let d={},_={};r&&(e==="GET"?_=r:d={body:JSON.stringify(r)});const y=Ve(Object.assign({key:n.config.apiKey},_)).slice(1),u=yield n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const E=Object.assign({method:e,headers:u},d);return ai()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&dt(n.emulatorConfig.host)&&(E.credentials="include"),ur.fetch()(yield fr(n,n.config.apiHost,t,y),E)}))})}function hr(n,e,t){return l(this,null,function*(){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fo),e);try{const s=new Vo(n),i=yield Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=yield i.json();if("needConfirmation"in o)throw Ye(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,d]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ye(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ye(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ye(n,"user-disabled",o);const _=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ut(n,_,d);V(n,_)}}catch(s){if(s instanceof ce)throw s;V(n,"network-request-failed",{message:String(s)})}})}function ze(i,o,a,c){return l(this,arguments,function*(n,e,t,r,s={}){const d=yield te(n,e,t,r,s);return"mfaPendingCredential"in d&&V(n,"multi-factor-auth-required",{_serverResponse:d}),d})}function fr(n,e,t,r){return l(this,null,function*(){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?jt(n.config,s):`${n.config.apiScheme}://${s}`;return jo.includes(t)&&(yield i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o})}function $o(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vo{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(W(this.auth,"network-request-failed")),Bo.get())})}}function Ye(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=W(n,e,r);return s.customData._tokenResponse=t,s}function Cn(n){return n!==void 0&&n.enterprise!==void 0}class Ho{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $o(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}function Wo(n,e){return l(this,null,function*(){return te(n,"GET","/v2/recaptchaConfig",le(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n,e){return l(this,null,function*(){return te(n,"POST","/v1/accounts:delete",e)})}function st(n,e){return l(this,null,function*(){return te(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function qo(n,e=!1){return l(this,null,function*(){const t=G(n),r=yield t.getIdToken(e),s=Bt(r);T(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xe(Et(s.auth_time)),issuedAtTime:xe(Et(s.iat)),expirationTime:xe(Et(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}})}function Et(n){return Number(n)*1e3}function Bt(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qe("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zn(t);return s?JSON.parse(s):(Qe("Failed to decode base64 JWT payload"),null)}catch(s){return Qe("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pn(n){const e=Bt(n);return T(e,"internal-error"),T(typeof e.exp!="undefined","internal-error"),T(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,e,t=!1){return l(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof ce&&Go(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function Go({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>l(this,null,function*(){yield this.iteration()}),t)}iteration(){return l(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xe(this.lastLoginAt),this.creationTime=xe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return l(this,null,function*(){var e;const t=n.auth,r=yield n.getIdToken(),s=yield Ce(n,st(t,{idToken:r}));T(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pr(i.providerUserInfo):[],a=Yo(n.providerData,o),c=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),_=c?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kt(i.createdAt,i.lastLoginAt),isAnonymous:_};Object.assign(n,y)})}function Jo(n){return l(this,null,function*(){const e=G(n);yield it(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function Yo(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pr(n){return n.map(e=>{var{providerId:t}=e,r=Lt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e){return l(this,null,function*(){const t=yield hr(n,{},()=>l(this,null,function*(){const r=Ve({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=yield fr(n,s,"/v1/token",`key=${i}`),a=yield n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return n.emulatorConfig&&dt(n.emulatorConfig.host)&&(c.credentials="include"),ur.fetch()(o,c)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function Qo(n,e){return l(this,null,function*(){return te(n,"POST","/v2/accounts:revokeToken",le(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken!="undefined","internal-error"),T(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Pn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){T(e.length!==0,"internal-error");const t=Pn(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return l(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(T(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return l(this,null,function*(){const{accessToken:r,refreshToken:s,expiresIn:i}=yield Xo(e,t);this.updateTokensAndExpiration(r,s,Number(i))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ie;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(T(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ie,this.toJSON())}_performRefresh(){return Y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,e){T(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class H{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Lt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ko(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kt(i.createdAt||void 0,i.lastLoginAt||void 0)}getIdToken(e){return l(this,null,function*(){const t=yield Ce(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return qo(this,e)}reload(){return Jo(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new H(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return l(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield it(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return l(this,null,function*(){if($(this.auth.app))return Promise.reject(Q(this.auth));const e=yield this.getIdToken();return yield Ce(this,zo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,d,_;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,u=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(a=t.tenantId)!==null&&a!==void 0?a:void 0,f=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(d=t.createdAt)!==null&&d!==void 0?d:void 0,g=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:P,emailVerified:C,isAnonymous:b,providerData:A,stsTokenManager:x}=t;T(P&&x,e,"internal-error");const z=Ie.fromJSON(this.name,x);T(typeof P=="string",e,"internal-error"),ne(y,e.name),ne(u,e.name),T(typeof C=="boolean",e,"internal-error"),T(typeof b=="boolean",e,"internal-error"),ne(E,e.name),ne(w,e.name),ne(R,e.name),ne(f,e.name),ne(v,e.name),ne(g,e.name);const K=new H({uid:P,auth:e,email:u,emailVerified:C,displayName:y,isAnonymous:b,photoURL:w,phoneNumber:E,tenantId:R,stsTokenManager:z,createdAt:v,lastLoginAt:g});return A&&Array.isArray(A)&&(K.providerData=A.map(Ae=>Object.assign({},Ae))),f&&(K._redirectEventId=f),K}static _fromIdTokenResponse(e,t,r=!1){return l(this,null,function*(){const s=new Ie;s.updateFromServerResponse(t);const i=new H({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return yield it(i),i})}static _fromGetAccountInfoResponse(e,t,r){return l(this,null,function*(){const s=t.users[0];T(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pr(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ie;a.updateFromIdToken(r);const c=new H({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kt(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map;function X(n){ee(n instanceof Function,"Expected a class definition");let e=An.get(n);return e?(ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,An.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return l(this,null,function*(){return!0})}_set(e,t){return l(this,null,function*(){this.storage[e]=t})}_get(e){return l(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return l(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}mr.type="NONE";const On=mr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,e,t){return`firebase:${n}:${e}:${t}`}class we{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ze(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ze("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return l(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield st(this.auth,{idToken:e}).catch(()=>{});return t?H._fromGetAccountInfoResponse(this.auth,t,e):null}return H._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return l(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return l(this,null,function*(){if(!t.length)return new we(X(On),e,r);const s=(yield Promise.all(t.map(d=>l(this,null,function*(){if(yield d._isAvailable())return d})))).filter(d=>d);let i=s[0]||X(On);const o=Ze(r,e.config.apiKey,e.name);let a=null;for(const d of t)try{const _=yield d._get(o);if(_){let y;if(typeof _=="string"){const u=yield st(e,{idToken:_}).catch(()=>{});if(!u)break;y=yield H._fromGetAccountInfoResponse(e,u,_)}else y=H._fromJSON(e,_);d!==i&&(a=y),i=d;break}}catch(_){}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new we(i,e,r):(i=c[0],a&&(yield i._set(o,a.toJSON())),yield Promise.all(t.map(d=>l(this,null,function*(){if(d!==i)try{yield d._remove(o)}catch(_){}}))),new we(i,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wr(e))return"Blackberry";if(Er(e))return"Webos";if(_r(e))return"Safari";if((e.includes("chrome/")||yr(e))&&!e.includes("edge/"))return"Chrome";if(Ir(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gr(n=j()){return/firefox\//i.test(n)}function _r(n=j()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yr(n=j()){return/crios\//i.test(n)}function vr(n=j()){return/iemobile/i.test(n)}function Ir(n=j()){return/android/i.test(n)}function wr(n=j()){return/blackberry/i.test(n)}function Er(n=j()){return/webos/i.test(n)}function $t(n=j()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zo(n=j()){var e;return $t(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ea(){return di()&&document.documentMode===10}function br(n=j()){return $t(n)||Ir(n)||Er(n)||wr(n)||/windows phone/i.test(n)||vr(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e=[]){let t;switch(n){case"Browser":t=Rn(j());break;case"Worker":t=`${Rn(j())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${He}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}runMiddleware(e){return l(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){return l(this,arguments,function*(n,e={}){return te(n,"GET","/v2/passwordPolicy",le(n,e))})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=6;class sa{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ra,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kn(this),this.idTokenSubscription=new kn(this),this.beforeStateQueue=new ta(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=X(t)),this._initializationPromise=this.queue(()=>l(this,null,function*(){var r,s,i;if(!this._deleted&&(this.persistenceManager=yield we.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return l(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return l(this,null,function*(){try{const t=yield st(this,{idToken:e}),r=yield H._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return l(this,null,function*(){var t;if($(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=yield this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{yield this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)})}tryRedirectSignIn(e){return l(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return l(this,null,function*(){try{yield it(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=Uo()}_delete(){return l(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return l(this,null,function*(){if($(this.app))return Promise.reject(Q(this));const t=e?G(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return l(this,null,function*(){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>l(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return l(this,null,function*(){return $(this.app)?Promise.reject(Q(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return $(this.app)?Promise.reject(Q(this)):this.queue(()=>l(this,null,function*(){yield this.assertedPersistence.setPersistence(X(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return l(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return l(this,null,function*(){const e=yield na(this),t=new sa(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $e("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return l(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield Qo(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return l(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return l(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&X(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=yield we.create(this,[X(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return l(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>l(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return l(this,null,function*(){if(e===this.currentUser)return this.queue(()=>l(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}directlySetCurrentUser(e){return l(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return l(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const s=yield this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t})}_getAppCheckToken(){return l(this,null,function*(){var e;if($(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t!=null&&t.error&&No(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function de(n){return G(n)}class kn{constructor(e){this.auth=e,this.observer=null,this.addObserver=_i(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut={loadJS(){return l(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oa(n){ut=n}function Sr(n){return ut.loadJS(n)}function aa(){return ut.recaptchaEnterpriseScript}function ca(){return ut.gapiScript}function la(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class da{constructor(){this.enterprise=new ua}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ua{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ha="recaptcha-enterprise",Cr="NO_RECAPTCHA";class fa{constructor(e){this.type=ha,this.auth=de(e)}verify(e="verify",t=!1){return l(this,null,function*(){function r(i){return l(this,null,function*(){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise((o,a)=>l(this,null,function*(){Wo(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ho(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{a(c)})}))})}function s(i,o,a){const c=window.grecaptcha;Cn(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(Cr)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new da().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Cn(window.grecaptcha))s(a,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=aa();c.length!==0&&(c+=a),Sr(c).then(()=>{s(a,i,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})})}}function De(n,e,t,r=!1,s=!1){return l(this,null,function*(){const i=new fa(n);let o;if(s)o=Cr;else try{o=yield i.verify(t)}catch(c){o=yield i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a})}function Dt(n,e,t,r,s){return l(this,null,function*(){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=yield De(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(a=>l(this,null,function*(){if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=yield De(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)}));else if(s==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=yield De(n,e,t);return r(n,a).catch(c=>l(this,null,function*(){var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const _=yield De(n,e,t,!1,!0);return r(n,_)}return Promise.reject(c)}))}else{const a=yield De(n,e,t,!1,!0);return r(n,a)}else return Promise.reject(s+" provider is not supported.")})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,e){const t=ir(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Te(i,e!=null?e:{}))return s;V(s,"already-initialized")}return t.initialize({options:e})}function ma(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(X);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ga(n,e,t){const r=de(n);T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Pr(e),{host:o,port:a}=_a(e),c=a===null?"":`:${a}`,d={url:`${i}//${o}${c}/`},_=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){T(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),T(Te(d,r.config.emulator)&&Te(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,dt(o)?(ni(`${i}//${o}${c}`),ii("Auth",!0)):s||ya()}function Pr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _a(n){const e=Pr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dn(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dn(o)}}}function Dn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ya(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Y("not implemented")}_getIdTokenResponse(e){return Y("not implemented")}_linkToIdToken(e,t){return Y("not implemented")}_getReauthenticationResolver(e){return Y("not implemented")}}function va(n,e){return l(this,null,function*(){return te(n,"POST","/v1/accounts:signUp",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){return l(this,null,function*(){return ze(n,"POST","/v1/accounts:signInWithPassword",le(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n,e){return l(this,null,function*(){return ze(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))})}function Ea(n,e){return l(this,null,function*(){return ze(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Vt{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Be(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Be(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return l(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dt(e,t,"signInWithPassword",Ia,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return wa(e,{email:this._email,oobCode:this._password});default:V(e,"internal-error")}})}_linkToIdToken(e,t){return l(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dt(e,r,"signUpPassword",va,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ea(e,{idToken:t,email:this._email,oobCode:this._password});default:V(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e){return l(this,null,function*(){return ze(n,"POST","/v1/accounts:signInWithIdp",le(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="http://localhost";class pe extends Vt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):V("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Lt(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new pe(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ee(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ee(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ee(e,t)}buildRequest(){const e={requestUri:ba,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ve(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sa(n){const e=Ne(Le(n)).link,t=e?Ne(Le(e)).deep_link_id:null,r=Ne(Le(n)).deep_link_id;return(r?Ne(Le(r)).link:null)||r||t||e||n}class Ht{constructor(e){var t,r,s,i,o,a;const c=Ne(Le(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,_=(r=c.oobCode)!==null&&r!==void 0?r:null,y=Ta((s=c.mode)!==null&&s!==void 0?s:null);T(d&&_&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=_,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Sa(e);try{return new Ht(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(){this.providerId=Pe.PROVIDER_ID}static credential(e,t){return Be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ht.parseLink(t);return T(r,"argument-error"),Be._fromEmailAndCode(e,r.code,r.tenantId)}}Pe.PROVIDER_ID="password";Pe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends qe{constructor(){super("facebook.com")}static credential(e){return pe._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch(t){return null}}}re.FACEBOOK_SIGN_IN_METHOD="facebook.com";re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pe._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return J.credential(t,r)}catch(s){return null}}}J.GOOGLE_SIGN_IN_METHOD="google.com";J.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends qe{constructor(){super("github.com")}static credential(e){return pe._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch(t){return null}}}se.GITHUB_SIGN_IN_METHOD="github.com";se.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends qe{constructor(){super("twitter.com")}static credential(e,t){return pe._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ie.credential(t,r)}catch(s){return null}}}ie.TWITTER_SIGN_IN_METHOD="twitter.com";ie.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n,e){return l(this,null,function*(){return ze(n,"POST","/v1/accounts:signUp",le(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,s=!1){return l(this,null,function*(){const i=yield H._fromIdTokenResponse(e,r,s),o=Nn(r);return new me({user:i,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return l(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const s=Nn(r);return new me({user:e,providerId:s,_tokenResponse:r,operationType:t})})}}function Nn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends ce{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ot.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ot(e,t,r,s)}}function Ar(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ot._fromErrorAndOperation(n,i,e,r):i})}function Pa(n,e,t=!1){return l(this,null,function*(){const r=yield Ce(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return me._forOperation(n,"link",r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,e,t=!1){return l(this,null,function*(){const{auth:r}=n;if($(r.app))return Promise.reject(Q(r));const s="reauthenticate";try{const i=yield Ce(n,Ar(r,s,e,n),t);T(i.idToken,r,"internal-error");const o=Bt(i.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(n.uid===a,r,"user-mismatch"),me._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&V(r,"user-mismatch"),i}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n,e,t=!1){return l(this,null,function*(){if($(n.app))return Promise.reject(Q(n));const r="signIn",s=yield Ar(n,r,e),i=yield me._fromIdTokenResponse(n,r,s);return t||(yield n._updateCurrentUser(i.user)),i})}function Oa(n,e){return l(this,null,function*(){return Or(de(n),e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){return l(this,null,function*(){const e=de(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function Ra(n,e,t){return l(this,null,function*(){if($(n.app))return Promise.reject(Q(n));const r=de(n),o=yield Dt(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ca,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Rr(n),c}),a=yield me._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(a.user),a})}function ka(n,e,t){return $(n.app)?Promise.reject(Q(n)):Oa(G(n),Pe.credential(e,t)).catch(r=>l(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Rr(n),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,e){return l(this,null,function*(){return te(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(r,s){return l(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=G(n),a={idToken:yield i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=yield Ce(i,Da(i.auth,a));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:_})=>_==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),yield i._updateTokensIfNecessary(c)})}function La(n,e,t,r){return G(n).onIdTokenChanged(e,t,r)}function Ma(n,e,t){return G(n).beforeAuthStateChanged(e,t)}function xa(n,e,t,r){return G(n).onAuthStateChanged(e,t,r)}function Ua(n){return G(n).signOut()}const at="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(at,"1"),this.storage.removeItem(at),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=1e3,ja=10;class be extends kr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=br(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ea()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ja):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return l(this,null,function*(){yield ue(be.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return l(this,null,function*(){const t=yield ue(be.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return l(this,null,function*(){yield ue(be.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}be.type="LOCAL";const Ba=be;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends kr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dr.type="SESSION";const Nr=Dr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n){return Promise.all(n.map(e=>l(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ht(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return l(this,null,function*(){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(d=>l(this,null,function*(){return d(t.origin,i)})),c=yield $a(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ht.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return l(this,null,function*(){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const d=zt("",20);s.port1.start();const _=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const u=y;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(_),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(u.data.response);break;default:clearTimeout(_),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return window}function Ha(n){q().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){return typeof q().WorkerGlobalScope!="undefined"&&typeof q().importScripts=="function"}function Wa(){return l(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function za(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qa(){return Lr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="firebaseLocalStorageDb",Ga=1,ct="firebaseLocalStorage",xr="fbase_key";class Ge{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ft(n,e){return n.transaction([ct],e?"readwrite":"readonly").objectStore(ct)}function Ka(){const n=indexedDB.deleteDatabase(Mr);return new Ge(n).toPromise()}function Nt(){const n=indexedDB.open(Mr,Ga);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ct,{keyPath:xr})}catch(s){t(s)}}),n.addEventListener("success",()=>l(this,null,function*(){const r=n.result;r.objectStoreNames.contains(ct)?e(r):(r.close(),yield Ka(),e(yield Nt()))}))})}function Ln(n,e,t){return l(this,null,function*(){const r=ft(n,!0).put({[xr]:e,value:t});return new Ge(r).toPromise()})}function Ja(n,e){return l(this,null,function*(){const t=ft(n,!1).get(e),r=yield new Ge(t).toPromise();return r===void 0?null:r.value})}function Mn(n,e){const t=ft(n,!0).delete(e);return new Ge(t).toPromise()}const Ya=800,Xa=3;class Ur{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return l(this,null,function*(){return this.db?this.db:(this.db=yield Nt(),this.db)})}_withRetries(e){return l(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>Xa)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return l(this,null,function*(){return Lr()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return l(this,null,function*(){this.receiver=ht._getInstance(qa()),this.receiver._subscribe("keyChanged",(e,t)=>l(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>l(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return l(this,null,function*(){var e,t;if(this.activeServiceWorker=yield Wa(),!this.activeServiceWorker)return;this.sender=new Va(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return l(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||za()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return l(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Nt();return yield Ln(e,at,"1"),yield Mn(e,at),!0}catch(e){}return!1})}_withPendingWrite(e){return l(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return l(this,null,function*(){return this._withPendingWrite(()=>l(this,null,function*(){return yield this._withRetries(r=>Ln(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return l(this,null,function*(){const t=yield this._withRetries(r=>Ja(r,e));return this.localCache[e]=t,t})}_remove(e){return l(this,null,function*(){return this._withPendingWrite(()=>l(this,null,function*(){return yield this._withRetries(t=>Mn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return l(this,null,function*(){const e=yield this._withRetries(s=>{const i=ft(s,!1).getAll();return new Ge(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>l(this,null,function*(){return this._poll()}),Ya)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ur.type="LOCAL";const Qa=Ur;new We(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e){return e?X(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Vt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ee(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ee(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Za(n){return Or(n.auth,new qt(n),n.bypassAuthState)}function ec(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Aa(t,new qt(n),n.bypassAuthState)}function tc(n){return l(this,null,function*(){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Pa(t,new qt(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>l(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return l(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(a)(c))}catch(d){this.reject(d)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Za;case"linkViaPopup":case"linkViaRedirect":return tc;case"reauthViaPopup":case"reauthViaRedirect":return ec;default:V(this.auth,"internal-error")}}resolve(e){ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new We(2e3,1e4);function rc(n,e,t){return l(this,null,function*(){if($(n.app))return Promise.reject(W(n,"operation-not-supported-in-this-environment"));const r=de(n);Lo(n,e,Wt);const s=Fr(r,t);return new fe(r,"signInViaPopup",e,s).executeNotNull()})}class fe extends jr{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fe.currentPopupAction&&fe.currentPopupAction.cancel(),fe.currentPopupAction=this}executeNotNull(){return l(this,null,function*(){const e=yield this.execute();return T(e,this.auth,"internal-error"),e})}onExecution(){return l(this,null,function*(){ee(this.filter.length===1,"Popup operations only handle one event");const e=zt();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(W(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(W(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(W(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nc.get())};e()}}fe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="pendingRedirect",et=new Map;class Ue extends jr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return l(this,null,function*(){let e=et.get(this.auth._key());if(!e){try{const r=(yield ic(this.resolver,this.auth))?yield ue(Ue.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}et.set(this.auth._key(),e)}return this.bypassAuthState||et.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return l(this,null,function*(){if(e.type==="signInViaRedirect")return ue(Ue.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,ue(Ue.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return l(this,null,function*(){})}cleanUp(){}}function ic(n,e){return l(this,null,function*(){const t=cc(e),r=ac(n);if(!(yield r._isAvailable()))return!1;const s=(yield r._get(t))==="true";return yield r._remove(t),s})}function oc(n,e){et.set(n._key(),e)}function ac(n){return X(n._redirectPersistence)}function cc(n){return Ze(sc,n.config.apiKey,n.name)}function lc(n,e,t=!1){return l(this,null,function*(){if($(n.app))return Promise.reject(Q(n));const r=de(n),s=Fr(r,e),o=yield new Ue(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=10*60*1e3;class uc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Br(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(W(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dc&&this.cachedEventUids.clear(),this.cachedEventUids.has(xn(e))}saveEventToCache(e){this.cachedEventUids.add(xn(e)),this.lastProcessedEventTime=Date.now()}}function xn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Br({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Br(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return l(this,arguments,function*(n,e={}){return te(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mc=/^https?/;function gc(n){return l(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield fc(n);for(const t of e)try{if(_c(t))return}catch(r){}V(n,"unauthorized-domain")})}function _c(n){const e=Rt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!mc.test(t))return!1;if(pc.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new We(3e4,6e4);function Un(){const n=q().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vc(n){return new Promise((e,t)=>{var r,s,i;function o(){Un(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Un(),t(W(n,"network-request-failed"))},timeout:yc.get()})}if(!((s=(r=q().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=q().gapi)===null||i===void 0)&&i.load)o();else{const a=la("iframefcb");return q()[a]=()=>{gapi.load?o():t(W(n,"network-request-failed"))},Sr(`${ca()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw tt=null,e})}let tt=null;function Ic(n){return tt=tt||vc(n),tt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new We(5e3,15e3),Ec="__/auth/iframe",bc="emulator/auth/iframe",Tc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cc(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jt(e,bc):`https://${n.config.authDomain}/${Ec}`,r={apiKey:e.apiKey,appName:n.name,v:He},s=Sc.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ve(r).slice(1)}`}function Pc(n){return l(this,null,function*(){const e=yield Ic(n),t=q().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:Cc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tc,dontclear:!0},r=>new Promise((s,i)=>l(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=W(n,"network-request-failed"),a=q().setTimeout(()=>{i(o)},wc.get());function c(){q().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})})))})}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oc=500,Rc=600,kc="_blank",Dc="http://localhost";class Fn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Nc(n,e,t,r=Oc,s=Rc){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ac),{width:r.toString(),height:s.toString(),top:i,left:o}),d=j().toLowerCase();t&&(a=yr(d)?kc:t),gr(d)&&(e=e||Dc,c.scrollbars="yes");const _=Object.entries(c).reduce((u,[E,w])=>`${u}${E}=${w},`,"");if(Zo(d)&&a!=="_self")return Lc(e||"",a),new Fn(null);const y=window.open(e||"",a,_);T(y,n,"popup-blocked");try{y.focus()}catch(u){}return new Fn(y)}function Lc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="__/auth/handler",xc="emulator/auth/handler",Uc=encodeURIComponent("fac");function jn(n,e,t,r,s,i){return l(this,null,function*(){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:He,eventId:s};if(e instanceof Wt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",gi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries(i||{}))o[_]=y}if(e instanceof qe){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(o.scopes=_.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const _ of Object.keys(a))a[_]===void 0&&delete a[_];const c=yield n._getAppCheckToken(),d=c?`#${Uc}=${encodeURIComponent(c)}`:"";return`${Fc(n)}?${Ve(a).slice(1)}${d}`})}function Fc({config:n}){return n.emulator?jt(n,xc):`https://${n.authDomain}/${Mc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="webStorageSupport";class jc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nr,this._completeRedirectFn=lc,this._overrideRedirectResult=oc}_openPopup(e,t,r,s){return l(this,null,function*(){var i;ee((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=yield jn(e,t,r,Rt(),s);return Nc(e,o,zt())})}_openRedirect(e,t,r,s){return l(this,null,function*(){yield this._originValidation(e);const i=yield jn(e,t,r,Rt(),s);return Ha(i),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ee(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return l(this,null,function*(){const t=yield Pc(e),r=new uc(e);return t.register("authEvent",s=>(T(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bt,{type:bt},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bt];o!==void 0&&t(!!o),V(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return br()||_r()||$t()}}const Bc=jc;var Bn="@firebase/auth",$n="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return l(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hc(n){Fe(new Se("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tr(n)},d=new ia(r,s,i,c);return ma(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Fe(new Se("auth-internal",e=>{const t=de(e.getProvider("auth").getImmediate());return(r=>new $c(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ve(Bn,$n,Vc(n)),ve(Bn,$n,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=5*60,zc=tr("authIdTokenMaxAge")||Wc;let Vn=null;const qc=n=>e=>l(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zc)return;const s=t==null?void 0:t.token;Vn!==s&&(Vn=s,yield fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});function Gc(n=vo()){const e=ir(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pa(n,{popupRedirectResolver:Bc,persistence:[Qa,Ba,Nr]}),r=tr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qc(i.toString());Ma(t,o,()=>o(t.currentUser)),La(t,a=>o(a))}}const s=ei("auth");return s&&ga(t,`http://${s}`),t}function Kc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oa({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=W("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Kc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hc("Browser");const Jc={apiKey:"AIzaSyBvbT3Ri0S1NdffMQqwWENJBTDwD8jlrAo",authDomain:"luxzant.firebaseapp.com",projectId:"luxzant",storageBucket:"luxzant.firebasestorage.app",messagingSenderId:"696545673252",appId:"1:696545673252:web:d5aef48aeab33302d158b1",measurementId:"G-SFZ6K7681T"},Yc=or(Jc),_e=Gc(Yc);var Hn,Wn;const Xc=((Wn=(Hn=import.meta)==null?void 0:Hn.env)==null?void 0:Wn.VITE_API_URL)||(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:5000/api":"/api"),N=(t,...r)=>l(void 0,[t,...r],function*(n,e={}){const s=localStorage.getItem("firebaseToken"),i=L({headers:L(L({"Content-Type":"application/json"},s&&{Authorization:`Bearer ${s}`}),e.headers)},e);try{const o=yield fetch(`${Xc}${n}`,i);if(!o.ok){let a={};try{a=yield o.json()}catch(d){a={}}let c=(a==null?void 0:a.message)||(a==null?void 0:a.error);throw!c&&Array.isArray(a==null?void 0:a.details)&&a.details.length>0&&(c=a.details.map(d=>d==null?void 0:d.message).filter(Boolean).join(", ")),c||(c=`HTTP ${o.status}: ${o.statusText}`),new Error(c)}return yield o.json()}catch(o){throw o}}),Xe={getProducts:(n={})=>{const e=new URLSearchParams(n).toString();return N(`/products${e?`?${e}`:""}`).then(t=>{var r;return(r=t==null?void 0:t.data)!=null?r:t})},getProductById:n=>N(`/products/${n}`).then(e=>{var t;return(t=e==null?void 0:e.data)!=null?t:e}),getCategories:()=>N("/products/categories").then(n=>{var e;return(e=n==null?void 0:n.data)!=null?e:n}),createProduct:n=>N("/products",{method:"POST",body:JSON.stringify(n)}).then(e=>{var t;return(t=e==null?void 0:e.data)!=null?t:e}),updateProduct:(n,e)=>N(`/products/${n}`,{method:"PUT",body:JSON.stringify(e)}).then(t=>{var r;return(r=t==null?void 0:t.data)!=null?r:t}),deleteProduct:n=>N(`/products/${n}`,{method:"DELETE"}).then(e=>{var t;return(t=e==null?void 0:e.data)!=null?t:e})},ye={getCartItems:()=>N("/cart"),getCartSummary:()=>N("/cart/summary"),addToCart:(n,e=1)=>N("/cart",{method:"POST",body:JSON.stringify({productId:n,quantity:e})}),updateCartItemQuantity:(n,e)=>N(`/cart/${n}`,{method:"PUT",body:JSON.stringify({quantity:e})}),removeFromCart:n=>N(`/cart/${n}`,{method:"DELETE"}),clearCart:()=>N("/cart",{method:"DELETE"})},Qc={getWishlistItems:()=>N("/wishlist"),addToWishlist:n=>N("/wishlist",{method:"POST",body:JSON.stringify({product_id:n})}),removeFromWishlist:n=>N(`/wishlist/${n}`,{method:"DELETE"}),toggleWishlist:n=>N("/wishlist/toggle",{method:"POST",body:JSON.stringify({product_id:n})}),checkWishlistStatus:n=>N(`/wishlist/check/${n}`),moveAllToCart:()=>N("/wishlist/move-to-cart",{method:"POST"}),clearWishlist:()=>N("/wishlist",{method:"DELETE"})},Wl={getOrders:(n={})=>{const e=new URLSearchParams(n).toString();return N(`/orders${e?`?${e}`:""}`)},getOrderById:n=>N(`/orders/${n}`),createOrder:n=>N("/orders",{method:"POST",body:JSON.stringify(n)}),updateOrderStatus:(n,e)=>N(`/orders/${n}/status`,{method:"PUT",body:JSON.stringify({status:e})}),cancelOrder:n=>N(`/orders/${n}/cancel`,{method:"DELETE"}),getOrderStats:()=>N("/orders/stats")},$r=h.createContext(),Zc=()=>{const n=h.useContext($r);if(!n)throw new Error("useAuth must be used within AuthProvider");return n},el=({children:n})=>{const[e,t]=h.useState(null),[r,s]=h.useState(!0),[i,o]=h.useState([]),a=()=>l(void 0,null,function*(){try{const f=yield ye.getCartItems();f.success&&(o(f.data.items),console.log("Cart fetched after login:",f.data.items))}catch(f){console.error("Error fetching cart after login:",f)}});h.useEffect(()=>{const f=xa(_e,v=>{v?(t({id:v.uid,email:v.email,name:v.displayName||v.email.split("@")[0],role:v.email==="admin@luxe.com"?"admin":"user"}),v.getIdToken().then(g=>{localStorage.setItem("firebaseToken",g),a()})):(t(null),o([]),localStorage.removeItem("firebaseToken")),s(!1)});return()=>f()},[]);const R={user:e,loading:r,cart:i,fetchCart:a,login:(f,v)=>l(void 0,null,function*(){try{const g=f.trim().toLowerCase();return{success:!0,user:(yield ka(_e,g,v)).user}}catch(g){return console.error("Login error:",g),{success:!1,error:g.message||"Unable to sign in"}}}),signup:(f,v,g,P)=>l(void 0,null,function*(){const C=f.trim(),b=v.trim().toLowerCase();if(!C)return{success:!1,error:"Name is required"};if(!b)return{success:!1,error:"Email is required"};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b))return{success:!1,error:"Please enter a valid email address"};if(g.length<6)return{success:!1,error:"Password must be at least 6 characters long"};if(g!==P)return{success:!1,error:"Passwords do not match"};try{const x=(yield Ra(_e,b,g)).user;return C&&(yield Na(x,{displayName:C})),{success:!0,user:x}}catch(A){return console.error("Signup error:",A),{success:!1,error:A.message||"Unable to create account"}}}),logout:()=>l(void 0,null,function*(){try{yield Ua(_e),t(null),localStorage.removeItem("firebaseToken"),console.log("User logged out successfully")}catch(f){console.error("Logout error:",f)}}),refreshSession:()=>l(void 0,null,function*(){const f=_e.currentUser;if(f){const v=yield f.getIdToken();return localStorage.setItem("firebaseToken",v),!0}return!1}),loginWithGoogle:()=>l(void 0,null,function*(){try{const f=new J;return f.setCustomParameters({prompt:"select_account",access_type:"offline"}),f.addScope("email"),f.addScope("profile"),{success:!0,user:(yield rc(_e,f)).user}}catch(f){return console.error("Google login error:",f),{success:!1,error:f.message||"Unable to sign in with Google"}}}),isAdmin:()=>(e==null?void 0:e.role)==="admin"||(e==null?void 0:e.email)==="admin@luxe.com",isAuthenticated:()=>!!e};return m.jsx($r.Provider,{value:R,children:n})},zl=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),ql=n=>{const e=Math.floor(n),t=n%1>=.5,r=5-e-(t?1:0);return"★".repeat(e)+(t?"☆":"")+"☆".repeat(r)},tl=n=>{const e=document.getElementById(n);if(e){const r=e.offsetTop-80;window.scrollTo({top:r,behavior:"smooth"})}},Gl=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n),nl=(n,e,t,r)=>{const[s,i]=h.useState({}),[o,a]=h.useState(new Set),c=h.useCallback((u,E=1)=>l(void 0,null,function*(){var R;if(!n)return console.log("User not authenticated"),{success:!1,error:"User not authenticated"};const w=`add-${u}-${Date.now()}`;i(f=>U(L({},f),{[u]:"adding"})),a(f=>new Set(f).add(w));try{const f=e.find(P=>P.id===u);if(!f)return console.error("Product not found in products array:",u),{success:!1,error:`Product with ID ${u} not found`};const v={id:`temp-${w}`,productId:u,name:(f==null?void 0:f.name)||"Unknown Product",price:(f==null?void 0:f.price)||0,image:((R=f==null?void 0:f.images)==null?void 0:R[0])||"/placeholder.jpg",quantity:E,isOptimistic:!0,operationId:w};t(P=>P.find(b=>b.productId===u)?P.map(b=>b.productId===u?U(L({},b),{quantity:b.quantity+E}):b):[...P,v]);const g=yield ye.addToCart(u,E);return g!=null&&g.success&&(g!=null&&g.data)?t(P=>P.map(C=>{var b;return C.operationId===w?{id:g.data.id||C.id,productId:g.data.product_id||C.productId,name:(f==null?void 0:f.name)||"Unknown Product",price:(f==null?void 0:f.price)||0,image:((b=f==null?void 0:f.images)==null?void 0:b[0])||"/placeholder.jpg",quantity:g.data.quantity||C.quantity}:C})):(console.error("Backend add to cart failed:",g==null?void 0:g.error),t(P=>P.filter(C=>C.operationId!==w))),{success:!0,data:g}}catch(f){return console.error("Error in addToCartOptimistic:",f),t(v=>v.filter(g=>g.operationId!==w)),{success:!1,error:f}}finally{i(f=>U(L({},f),{[u]:null})),a(f=>{const v=new Set(f);return v.delete(w),v})}}),[n,e,t]),d=h.useCallback(u=>l(void 0,null,function*(){if(!n)return{success:!1,error:"User not authenticated"};const E=`remove-${u}-${Date.now()}`,w=r.find(f=>f.productId===u||f.id===u);if(!w)return{success:!1,error:"Cart item not found"};i(f=>U(L({},f),{[u]:"removing"})),a(f=>new Set(f).add(E));const R=L({},w);try{return t(f=>f.filter(v=>v.productId!==u)),yield ye.removeFromCart(u),{success:!0}}catch(f){return console.error("Error in removeFromCartOptimistic:",f),t(v=>[...v,R]),{success:!1,error:f}}finally{i(f=>U(L({},f),{[u]:null})),a(f=>{const v=new Set(f);return v.delete(E),v})}}),[n,r,t]),_=h.useCallback((u,E)=>l(void 0,null,function*(){if(E<=0)return yield d(u);if(!n)return{success:!1,error:"User not authenticated"};if(!u||!E||E<1)return console.error("Invalid parameters for updateQuantityOptimistic:",{productId:u,newQuantity:E}),{success:!1,error:"Product ID and valid quantity are required"};const w=`update-${u}-${Date.now()}`,R=r.find(v=>v.productId===u||v.id===u);if(!R)return{success:!1,error:"Cart item not found"};i(v=>U(L({},v),{[u]:"updating"})),a(v=>new Set(v).add(w));const f=R.quantity;try{return t(v=>v.map(g=>g.productId===u?U(L({},g),{quantity:E}):g)),yield ye.updateCartItemQuantity(u,E),{success:!0}}catch(v){return console.error("Error in updateQuantityOptimistic:",v),t(g=>g.map(P=>P.productId===u?U(L({},P),{quantity:f}):P)),{success:!1,error:v}}finally{i(v=>U(L({},v),{[u]:null})),a(v=>{const g=new Set(v);return g.delete(w),g})}}),[n,r,t,d]),y=h.useCallback(()=>l(void 0,null,function*(){if(!n)return;const u=`clear-${Date.now()}`;i(w=>U(L({},w),{clear:"clearing"})),a(w=>new Set(w).add(u));const E=[...r];try{return t([]),yield ye.clearCart(),{success:!0}}catch(w){return console.error("Error in clearCartOptimistic:",w),t(E),{success:!1,error:w}}finally{i(w=>U(L({},w),{clear:null})),a(w=>{const R=new Set(w);return R.delete(u),R})}}),[n,r,t]);return{cartLoading:s,pendingOperations:o,addToCartOptimistic:c,removeFromCartOptimistic:d,updateQuantityOptimistic:_,clearCartOptimistic:y,isCartLoading:Object.values(s).some(u=>u!==null),hasPendingOperations:o.size>0}},rl=(n,e=[])=>{const[t,r]=h.useState({cart:[],wishlist:[],reviewsByProduct:{},isLoading:!1,error:null}),s=h.useCallback(o=>l(void 0,null,function*(){var a;if(o){r(c=>U(L({},c),{isLoading:!0,error:null}));try{const c=Array.isArray(e)?e.map(w=>w==null?void 0:w.id).filter(Boolean):[],d=yield ye.getCartItems(),y=(((a=d==null?void 0:d.data)==null?void 0:a.items)||[]).map(w=>({id:w.id,productId:w.productId,name:w.name||"Unknown Product",price:w.price||0,image:w.image||"/placeholder.jpg",quantity:w.quantity}));r({cart:y,wishlist:[],reviewsByProduct:{},isLoading:!1,error:null})}catch(c){console.error("Data preloading failed:",c),r(d=>U(L({},d),{isLoading:!1,error:c.message}))}}}),[e]),i=h.useCallback(()=>{r({cart:[],wishlist:[],reviewsByProduct:{},isLoading:!1,error:null})},[]);return h.useEffect(()=>{if(n&&(n.uid||n.id)){const o=n.uid||n.id;s(o)}else i()},[n,s,i]),U(L({},t),{preloadData:s,clearData:i})},sl=(n,e=[],t={})=>{const{clearFiltersOnEmptySearch:r=!0}=t,[s,i]=h.useState(""),[o,a]=h.useState({}),[c,d]=h.useState(""),[_,y]=h.useState(Array.isArray(n)?n:[]);h.useEffect(()=>{Array.isArray(n)&&y(n)},[n]);const u=h.useMemo(()=>{let g=[...Array.isArray(n)?n:[]];const P=String(s||"").trim().toLowerCase();if(P.length>0&&(g=g.filter(C=>e.some(b=>{const A=b.split(".").reduce((x,z)=>x==null?void 0:x[z],C);return String(A!=null?A:"").toLowerCase().includes(P)}))),Object.entries(o).forEach(([C,b])=>{if(b!=null&&b!=="")if(C==="price"&&typeof b=="string")if(b.includes("-")){const[A,x]=b.split("-").map(Number);g=g.filter(z=>z.price>=A&&z.price<=x)}else if(b.includes("+")){const A=parseInt(b.replace("+",""),10);g=g.filter(x=>x.price>=A)}else b==="0-2000"?g=g.filter(A=>A.price<2e3):b==="2000-5000"?g=g.filter(A=>A.price>=2e3&&A.price<=5e3):b==="5000-10000"?g=g.filter(A=>A.price>=5e3&&A.price<=1e4):b==="10000+"&&(g=g.filter(A=>A.price>=1e4));else g=g.filter(A=>A[C]===b)}),c)switch(c){case"price-low":g.sort((C,b)=>C.price-b.price);break;case"price-high":g.sort((C,b)=>b.price-C.price);break;case"name":g.sort((C,b)=>(C.name||"").localeCompare(b.name||""));break;case"rating":g.sort((C,b)=>(b.rating||0)-(C.rating||0));break;case"featured":default:g.sort((C,b)=>C.featured&&!b.featured?-1:!C.featured&&b.featured?1:(b.rating||0)-(C.rating||0));break}return g},[n,s,o,c,e]);h.useEffect(()=>{String(s||"").trim()===""&&r&&(a({}),d(""))},[s,r]),h.useEffect(()=>{const v=String(s||"").trim();y(v===""?Array.isArray(n)?n:[]:u)},[u,s,n]);const E=h.useCallback(v=>{const g=v&&v.target?v.target.value:v,P=String(g||"").trim();i(P)},[]),w=h.useCallback(()=>{i(""),r&&(a({}),d("")),y(Array.isArray(n)?n:[])},[r,n]),R=h.useCallback((v,g)=>{a(P=>U(L({},P),{[v]:g}))},[]),f=h.useCallback(()=>{a({}),d(""),i(""),y(Array.isArray(n)?n:[])},[n]);return{searchTerm:s,handleSearchChange:E,handleClearSearch:w,filters:o,updateFilter:R,sortBy:c,setSortBy:d,filteredData:_,clearFilters:f}};let Tt=null;const il=()=>(Tt||(Tt=Ls("https://jsmskqsmsptrnjilvkrj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbXNrcXNtc3B0cm5qaWx2a3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTg1MzYsImV4cCI6MjA4MDgzNDUzNn0.SiZNO9-XP-hFM8uiwoqV4iaRNm5ewbhTlSWKG_c_BXM",{auth:{autoRefreshToken:!1,persistSession:!1}})),Tt),pt=il(),Kl=()=>l(void 0,null,function*(){const{data:n,error:e}=yield pt.from("profiles").select("id, name, role, updated_at").order("updated_at",{ascending:!1});if(e)throw e;return n}),Jl=(n,e,t="user")=>l(void 0,null,function*(){const r=`admin-${Date.now()}`,{data:s,error:i}=yield pt.from("profiles").insert({id:r,email:n,name:e,role:t,updated_at:new Date().toISOString()}).select().single();if(i)throw i;return s}),Yl=(n,e)=>l(void 0,null,function*(){const{data:t,error:r}=yield pt.from("profiles").update(U(L({},e),{updated_at:new Date().toISOString()})).eq("id",n).select().single();if(r)throw r;return t}),Xl=n=>l(void 0,null,function*(){const{error:e}=yield pt.from("profiles").delete().eq("id",n);if(e)throw e});const ol=h.lazy(()=>k(()=>import("./Header-5d96012d.js"),["assets/Header-5d96012d.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js"])),al=h.lazy(()=>k(()=>import("./Shop-c962d13a.js"),["assets/Shop-c962d13a.js","assets/vendor-9fe24c3f.js","assets/Products-5a78b18a.js","assets/Products-3852f56a.css","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),cl=h.lazy(()=>k(()=>import("./Home-d0628abd.js"),["assets/Home-d0628abd.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/Products-5a78b18a.js","assets/Products-3852f56a.css","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),ll=h.lazy(()=>k(()=>import("./CollectionPage-9064a029.js"),["assets/CollectionPage-9064a029.js","assets/vendor-9fe24c3f.js","assets/Products-5a78b18a.js","assets/Products-3852f56a.css","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),dl=h.lazy(()=>k(()=>import("./ReviewPage-7889ed87.js"),["assets/ReviewPage-7889ed87.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js"])),ul=h.lazy(()=>k(()=>import("./Profile-087c92c4.js"),["assets/Profile-087c92c4.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),hl=h.lazy(()=>k(()=>import("./EditProfile-82ca08df.js"),["assets/EditProfile-82ca08df.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),fl=h.lazy(()=>k(()=>import("./Orders-268e6551.js"),["assets/Orders-268e6551.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),pl=h.lazy(()=>k(()=>import("./WishlistPage-169d4b3e.js"),["assets/WishlistPage-169d4b3e.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),ml=h.lazy(()=>k(()=>import("./Addresses-32f9da2d.js"),["assets/Addresses-32f9da2d.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),gl=h.lazy(()=>k(()=>import("./Payments-d9e061ab.js"),["assets/Payments-d9e061ab.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),_l=h.lazy(()=>k(()=>import("./RecentlyViewed-d77103eb.js"),["assets/RecentlyViewed-d77103eb.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),yl=h.lazy(()=>k(()=>import("./CartPage-fa34720d.js"),["assets/CartPage-fa34720d.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),vl=h.lazy(()=>k(()=>import("./TrackOrder-962fa418.js"),["assets/TrackOrder-962fa418.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),Il=h.lazy(()=>k(()=>import("./Returns-eb81bc3f.js"),["assets/Returns-eb81bc3f.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),wl=h.lazy(()=>k(()=>import("./OrderHistory-b38e80f5.js"),["assets/OrderHistory-b38e80f5.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),El=h.lazy(()=>k(()=>import("./Login-c4b9ed4c.js"),["assets/Login-c4b9ed4c.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),bl=h.lazy(()=>k(()=>import("./Signup-9061f13f.js"),["assets/Signup-9061f13f.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),Tl=h.lazy(()=>k(()=>import("./ReviewModal-8a1958a0.js"),["assets/ReviewModal-8a1958a0.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),Sl=h.lazy(()=>k(()=>import("./UserDashboard-15c5301b.js"),["assets/UserDashboard-15c5301b.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js","assets/UserDashboard-0b92cbbf.css"])),Cl=h.lazy(()=>k(()=>import("./Footer-40bc5755.js"),["assets/Footer-40bc5755.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js"])),Pl=h.lazy(()=>k(()=>import("./CartSidebar-a8e15570.js"),["assets/CartSidebar-a8e15570.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),Al=h.lazy(()=>k(()=>import("./ProductModal-970a72f6.js"),["assets/ProductModal-970a72f6.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),Ol=h.lazy(()=>k(()=>import("./Wishlist-cfac00c9.js"),["assets/Wishlist-cfac00c9.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js"])),Rl=h.lazy(()=>k(()=>import("./Checkout-daabf3b6.js"),["assets/Checkout-daabf3b6.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js"])),kl=h.lazy(()=>k(()=>import("./AdminPanel-51d27e1e.js"),["assets/AdminPanel-51d27e1e.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js"])),Dl=h.lazy(()=>k(()=>import("./ScrollToTop-213c2e29.js"),["assets/ScrollToTop-213c2e29.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"])),Nl=h.lazy(()=>k(()=>import("./Loading-9a2c4ca4.js"),["assets/Loading-9a2c4ca4.js","assets/vendor-9fe24c3f.js","assets/ui-9e04399f.js","assets/router-4197aa40.js","assets/supabase-f3f4aacd.js","assets/Loading-4237b8f7.css"]));h.lazy(()=>k(()=>import("./SkeletonLoader-3ad72f35.js"),["assets/SkeletonLoader-3ad72f35.js","assets/vendor-9fe24c3f.js","assets/router-4197aa40.js","assets/ui-9e04399f.js","assets/supabase-f3f4aacd.js"]));function Ll(){const n=As(),e=Os(),{isDarkMode:t}=Ws(),{user:r,isAuthenticated:s,isAdmin:i}=Zc(),[o,a]=h.useState(!0),[c,d]=Ps.useState([]),_=({src:p,startRect:I,target:S})=>{if(!I||!p)return;const O=`${Date.now()}-${Math.random()}`,B=S==="wishlist"?'button.nav-icon[data-target="wishlist"]':'button.nav-icon[data-target="cart"]';d(ke=>[...ke,{id:O,src:p,startRect:I,selector:B}])},[y,u]=h.useState([]),[E,w]=h.useState([]),[R,f]=h.useState([]),[v,g]=h.useState({}),[P,C]=h.useState([]),[b,A]=h.useState(!1),[x,z]=h.useState(!1),[K,Ae]=h.useState(!1),[Oe,mt]=h.useState(!1),[ge,Gt]=h.useState(null),[Vr,Kt]=h.useState(!1),[Jt,Yt]=h.useState(null);h.useState(!1);const{cart:Xt,wishlist:Qt,reviewsByProduct:Zt,isLoading:en}=rl(r,y),Ke=()=>l(this,null,function*(){try{const p=yield Xe.getProducts();u(Array.isArray(p)?p:[])}catch(p){console.error("Failed to load products from backend:",p),u([]),M.error("Failed to load products")}});h.useEffect(()=>{en||(w(Xt),f(Qt),g(Zt))},[Xt,Qt,Zt,en]);const{searchTerm:tn,handleSearchChange:Hr,filters:nn,updateFilter:Wr,sortBy:zr,setSortBy:rn,filteredData:sn,clearFilters:qr}=sl(y,["name","category","description"]);h.useEffect(()=>{Xr()},[]),h.useEffect(()=>{Ke()},[]),h.useEffect(()=>(b||x||K||Oe||ge?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[b,x,K,Oe,ge]),h.useEffect(()=>{var I;if(e.pathname==="/"&&!((I=e.state)!=null&&I.fromNavigation)){a(!0);const S=setTimeout(()=>{a(!1)},300);return()=>clearTimeout(S)}else a(!1)},[e.pathname,e.state]);const{cartLoading:Ml,pendingOperations:xl,addToCartOptimistic:Gr,removeFromCartOptimistic:Kr,updateQuantityOptimistic:Jr,clearCartOptimistic:Yr,isCartLoading:Ul,hasPendingOperations:Fl}=nl(r,y,w,E);h.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e.pathname]);const Xr=()=>{const p={threshold:.1,rootMargin:"0px 0px -50px 0px"},I=new IntersectionObserver(O=>{O.forEach(B=>{B.isIntersecting&&(B.target.style.opacity="1",B.target.style.transform="translateY(0)",I.unobserve(B.target))})},p);setTimeout(()=>{document.querySelectorAll(".fade-in").forEach(O=>{I.observe(O)})},100);const S=()=>{const O=document.querySelector(".header");O&&(window.scrollY>100?O.style.background="rgba(255, 255, 255, 0.98)":O.style.background="rgba(255, 255, 255, 0.95)")};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},Re=(p,I=1,S=!0)=>l(this,null,function*(){if(!r){S&&M.error("Please login to add items to cart");return}S&&M.success("Item added to cart!"),!(yield Gr(p,I)).success&&S&&M.error("Failed to add item to cart")}),Qr=p=>l(this,null,function*(){M.info("Item removed from cart"),(yield Kr(p)).success||M.error("Failed to remove item")}),Zr=(p,I)=>l(this,null,function*(){(yield Jr(p,I)).success||M.error("Failed to update quantity")}),es=()=>l(this,null,function*(){M.success("All items removed from cart successfully!"),(yield Yr()).success||M.error("Failed to clear cart")}),Je=p=>l(this,null,function*(){if(!r){M.error("Please login to manage wishlist");return}try{yield Qc.toggleWishlist(p),f(I=>{if(I.findIndex(O=>O.id===p)>-1)return I.filter(O=>O.id!==p);{const O=y.find(B=>B.id===p);return O?[...I,O]:I}})}catch(I){console.error("Error toggling wishlist:",I),M.error("Failed to update wishlist")}}),ts=p=>{f(I=>I.filter(S=>S.id!==p))},ns=()=>{f([])},on=(p,I)=>{if(p==="search"){const S=String(I!=null?I:"").trim();Hr(S),S===""&&(qr(),rn("featured"))}else p==="sort"?rn(I):Wr(p,I)},rs={search:tn,category:nn.category||"",price:nn.price||"",sort:zr||"featured"},ss=p=>{try{localStorage.setItem("product_reviews",JSON.stringify(p))}catch(I){console.error("Failed to save reviews",I)}},is=(p,I)=>{try{const S=localStorage.getItem("product_reviews"),O=S?JSON.parse(S):{},B=U(L({},O),{[p]:[...O[p]||[],I]});ss(B)}catch(S){console.error("Failed to save review",S)}Kt(!1),Yt(null)},os=()=>{z(p=>!p)},as=p=>{M.success("Thank you for subscribing to our newsletter!")},cs=p=>{n(`/collection/${p}`)},ls=p=>{n("/review")},gt=p=>{const I=y.find(S=>S.id===p);Gt(I);try{const S=localStorage.getItem("recently_viewed"),O=S?JSON.parse(S):[],B=O.find(vs=>String(vs.id)===String(p)),ke={id:p,name:(I==null?void 0:I.name)||""},ys=B?O:[ke,...O].slice(0,30);localStorage.setItem("recently_viewed",JSON.stringify(ys))}catch(S){}},an=()=>{Gt(null)},cn=()=>{A(p=>!p)},ds=()=>{A(!1),tl("products")},us=()=>{if(E.length===0){M.error("Your cart is empty");return}if(!r){M.error("Please log in to proceed to checkout");return}A(!1),Ae(!0)},hs=p=>{if(!r){M.error("Please log in to place an order");return}const I=L({id:Date.now(),customerName:`${p.firstName} ${p.lastName}`,customerEmail:r.email,items:[...E],total:ln*1.1,date:new Date().toISOString(),status:"Processing"},p),S=`orders_${r.email}`,B=[...JSON.parse(localStorage.getItem(S)||"[]"),I];localStorage.setItem(S,JSON.stringify(B)),C(ke=>[...ke,I]),w([]),localStorage.setItem("cart_items",JSON.stringify([])),M.success("Order placed successfully!")},fs=p=>l(this,null,function*(){try{yield Xe.createProduct(p),yield Ke(),M.success("Product added successfully!")}catch(I){console.error("Failed to create product:",I),M.error((I==null?void 0:I.message)||"Failed to create product")}}),ps=(p,I)=>l(this,null,function*(){try{yield Xe.updateProduct(p,I),yield Ke(),M.success("Product updated successfully!")}catch(S){console.error("Failed to update product:",S),M.error((S==null?void 0:S.message)||"Failed to update product")}}),ms=p=>l(this,null,function*(){try{yield Xe.deleteProduct(p),yield Ke(),M.info("Product deleted")}catch(I){console.error("Failed to delete product:",I),M.error((I==null?void 0:I.message)||"Failed to delete product")}}),ln=E.reduce((p,I)=>p+I.price*I.quantity,0),gs=E.reduce((p,I)=>p+I.quantity,0),_s=R.length;return h.useEffect(()=>{const p=I=>{I.key==="Escape"&&(ge?an():b?A(!1):x?z(!1):K?Ae(!1):Oe&&mt(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[ge,b,x,K,Oe]),m.jsxs("div",{className:"App",children:[o&&m.jsx(Nl,{}),m.jsx(Ns,{position:"top-right",autoClose:2300,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,theme:t?"dark":"light"}),m.jsx(h.Suspense,{fallback:m.jsx("div",{style:{height:"80px",background:"var(--background)"}}),children:m.jsx(ol,{cartCount:gs,wishlistCount:_s,onCartToggle:cn,onWishlistToggle:os,onAdminToggle:()=>mt(!0),searchValue:tn,onSearchChange:p=>on("search",p),searchSuggestions:sn})}),m.jsxs(Rs,{children:[m.jsx(F,{path:"/",element:m.jsx(h.Suspense,{fallback:m.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:"Loading..."}),children:m.jsx(cl,{filteredProducts:sn,wishlist:R,onAddToCart:Re,onToggleWishlist:Je,onOpenModal:gt,filters:rs,onFilterChange:on,onViewCollection:cs,onWriteReview:ls,reviewsByProduct:v,onFly:_})})}),m.jsx(F,{path:"/collections",element:m.jsxs("div",{className:"section container",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[m.jsx("h1",{children:"Our Collections"}),m.jsx(hn,{to:"/",className:"btn btn-secondary",children:"Back to Home"})]}),m.jsx("div",{className:"collections-grid",children:Array.from(new Set(y.map(p=>p.category).filter(Boolean))).map(p=>{var S;const I=(S=y.find(O=>O.category===p))==null?void 0:S.images[0];return m.jsxs(hn,{to:`/collection/${p}`,className:"collection-card",children:[I&&m.jsx("div",{className:"collection-image",children:m.jsx("img",{src:I,alt:p})}),m.jsx("h2",{children:p.replace("-"," ")}),m.jsxs("span",{className:"collection-count",children:[y.filter(O=>O.category===p).length," items"]})]},p)})})]})}),m.jsx(F,{path:"/collection/:type",element:m.jsx(ll,{products:y,wishlist:R,onAddToCart:Re,onToggleWishlist:Je,onOpenModal:gt,onFly:_})}),m.jsx(F,{path:"/shop",element:m.jsx(al,{products:y,wishlist:R,onAddToCart:Re,onToggleWishlist:Je,onOpenModal:gt,reviewsByProduct:v,onFly:_})}),m.jsx(F,{path:"/review",element:m.jsx(dl,{products:y})}),m.jsx(F,{path:"/login",element:m.jsx(El,{})}),m.jsx(F,{path:"/signup",element:m.jsx(bl,{})}),m.jsx(F,{path:"/profile",element:m.jsx(ul,{})}),m.jsx(F,{path:"/edit-profile",element:m.jsx(hl,{})}),m.jsx(F,{path:"/dashboard",element:m.jsx(Sl,{})}),m.jsx(F,{path:"/orders",element:m.jsx(fl,{})}),m.jsx(F,{path:"/wishlist",element:m.jsx(pl,{})}),m.jsx(F,{path:"/addresses",element:m.jsx(ml,{})}),m.jsx(F,{path:"/payments",element:m.jsx(gl,{})}),m.jsx(F,{path:"/recently-viewed",element:m.jsx(_l,{})}),m.jsx(F,{path:"/cart",element:m.jsx(yl,{})}),m.jsx(F,{path:"/track-order",element:m.jsx(vl,{})}),m.jsx(F,{path:"/returns",element:m.jsx(Il,{})}),m.jsx(F,{path:"/order-history",element:m.jsx(wl,{})})]}),m.jsx(Cl,{onSubscribe:as}),m.jsx(Pl,{isOpen:b,cart:E,onClose:cn,onUpdateQuantity:Zr,onRemove:Qr,onContinueShopping:ds,onCheckout:us,onClearCart:es}),m.jsx(Ol,{isOpen:x,wishlist:R,onClose:()=>z(!1),onRemove:ts,onAddToCart:Re,onMoveAllToCart:ns,onFly:_}),m.jsx(Rl,{isOpen:K,cart:E,cartTotal:ln,onClose:()=>Ae(!1),onCompleteOrder:hs}),m.jsx(Al,{isOpen:!!ge,product:ge,wishlist:R,onClose:an,onAddToCart:Re,onToggleWishlist:Je,onFly:_}),m.jsx(Tl,{product:Jt,isOpen:Vr,onClose:()=>{Kt(!1),Yt(null)},onSubmit:p=>is(Jt.id,p)}),s()&&i()&&m.jsx(kl,{isOpen:Oe,onClose:()=>mt(!1),products:y,orders:P,onAddProduct:fs,onUpdateProduct:ps,onDeleteProduct:ms}),m.jsx(Dl,{}),c.map(p=>m.jsx(Hs,{id:p.id,src:p.src,startRect:p.startRect,targetSelector:p.selector,onComplete:I=>d(S=>S.filter(O=>O.id!==I))},p.id))]})}Kn(document.getElementById("root")).render(m.jsx(h.StrictMode,{children:m.jsx(ks,{future:{v7_startTransition:!0},children:m.jsx(zs,{children:m.jsx(el,{children:m.jsx(Ll,{})})})})}));export{Zc as a,Kl as b,ye as c,Jl as d,Yl as e,zl as f,ql as g,Xl as h,Gl as i,m as j,Wl as o,tl as s,Ws as u,Qc as w};
