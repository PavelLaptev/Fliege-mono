var $e=Object.defineProperty;var ye=s=>{throw TypeError(s)};var Ye=(s,e,a)=>e in s?$e(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var be=(s,e,a)=>Ye(s,typeof e!="symbol"?e+"":e,a),ee=(s,e,a)=>e.has(s)||ye("Cannot "+a);var N=(s,e,a)=>(ee(s,e,"read from private field"),a?a.call(s):e.get(s)),R=(s,e,a)=>e.has(s)?ye("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,a),se=(s,e,a,t)=>(ee(s,e,"write to private field"),t?t.call(s,a):e.set(s,a),a),we=(s,e,a)=>(ee(s,e,"access private method"),a);import{a as w,t as z,c as xe}from"../chunks/disclose-version.k4AZfbKT.js";import{i as Ke}from"../chunks/legacy.l9zqFJIr.js";import{a9 as ke,X as ze,aa as Me,D as oe,a4 as Xe,m as Je,as as De,v as T,L as ae,I as Ue,H as Qe,aj as Fe,J as Ze,K as Ae,M as te,w as B,at as K,N as He,n as je,O as es,ao as ss,au as de,av as Ee,aw as fe,ax as as,ai as ts,ay as rs,q as ls,a5 as ns,af as is,az as vs,a3 as os,z as Le,aA as cs,ad as ds,aB as fs,aC as us,G as Ie,aD as _s,aE as ps,an as hs,am as gs,e as ms,t as C,B as I,i as b,c as x,f as Te,r as h,s as k,aF as ys,ar as W,p as Oe,b as bs,a as Pe}from"../chunks/runtime.yWo52CK0.js";import{i as re,p as Y,a as le}from"../chunks/props.BwZMTqX5.js";import{a as M}from"../chunks/store.DGX-FSx9.js";let Ce=!1;function Re(){Ce||(Ce=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var e;if(!s.defaultPrevented)for(const a of s.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function ws(s){var e=Me,a=oe;ke(null),ze(null);try{return s()}finally{ke(e),ze(a)}}function xs(s,e,a,t=a){s.addEventListener(e,()=>ws(a));const r=s.__on_r;r?s.__on_r=()=>{r(),t()}:s.__on_r=t,Re()}function H(s,e){return e}function ks(s,e,a,t){for(var r=[],c=e.length,i=0;i<c;i++)as(e[i].e,r,!0);var d=c>0&&r.length===0&&a!==null;if(d){var m=a.parentNode;ts(m),m.append(a),t.clear(),D(s,e[0].prev,e[c-1].next)}rs(r,()=>{for(var y=0;y<c;y++){var f=e[y];d||(t.delete(f.k),D(s,f.prev,f.next)),ls(f.e,!d)}})}function j(s,e,a,t,r,c=null){var i=s,d={flags:e,items:new Map,first:null},m=(e&De)!==0;if(m){var y=s;i=T?ae(ns(y)):y.appendChild(Xe())}T&&Ue();var f=null,g=!1;Je(()=>{var l=a(),n=Qe(l)?l:l==null?[]:Fe(l),v=n.length;if(g&&v===0)return;g=v===0;let o=!1;if(T){var _=i.data===Ze;_!==(v===0)&&(i=Ae(),ae(i),te(!1),o=!0)}if(T){for(var A=null,E,L=0;L<v;L++){if(B.nodeType===8&&B.data===is){i=B,o=!0,te(!1);break}var u=n[L],p=t(u,L);E=Be(B,d,A,null,u,p,L,r,e),d.items.set(p,E),A=E}v>0&&ae(Ae())}if(!T){var U=Me;zs(n,d,i,r,e,(U.f&K)!==0,t)}c!==null&&(v===0?f?He(f):f=je(()=>c(i)):f!==null&&es(f,()=>{f=null})),o&&te(!0),a()}),T&&(i=B)}function zs(s,e,a,t,r,c,i){var _e,pe,he,ge;var d=(r&vs)!==0,m=(r&(de|fe))!==0,y=s.length,f=e.items,g=e.first,l=g,n,v=null,o,_=[],A=[],E,L,u,p;if(d)for(p=0;p<y;p+=1)E=s[p],L=i(E,p),u=f.get(L),u!==void 0&&((_e=u.a)==null||_e.measure(),(o??(o=new Set)).add(u));for(p=0;p<y;p+=1){if(E=s[p],L=i(E,p),u=f.get(L),u===void 0){var U=l?l.e.nodes_start:a;v=Be(U,e,v,v===null?e.first:v.next,E,L,p,t,r),f.set(L,v),_=[],A=[],l=v.next;continue}if(m&&As(u,E,p,r),u.e.f&K&&(He(u.e),d&&((pe=u.a)==null||pe.unfix(),(o??(o=new Set)).delete(u))),u!==l){if(n!==void 0&&n.has(u)){if(_.length<A.length){var $=A[0],S;v=$.prev;var ue=_[0],Q=_[_.length-1];for(S=0;S<_.length;S+=1)Ne(_[S],$,a);for(S=0;S<A.length;S+=1)n.delete(A[S]);D(e,ue.prev,Q.next),D(e,v,ue),D(e,Q,$),l=$,v=Q,p-=1,_=[],A=[]}else n.delete(u),Ne(u,l,a),D(e,u.prev,u.next),D(e,u,v===null?e.first:v.next),D(e,v,u),v=u;continue}for(_=[],A=[];l!==null&&l.k!==L;)(c||!(l.e.f&K))&&(n??(n=new Set)).add(l),A.push(l),l=l.next;if(l===null)continue;u=l}_.push(u),v=u,l=u.next}if(l!==null||n!==void 0){for(var P=n===void 0?[]:Fe(n);l!==null;)(c||!(l.e.f&K))&&P.push(l),l=l.next;var Z=P.length;if(Z>0){var Ve=r&De&&y===0?a:null;if(d){for(p=0;p<Z;p+=1)(he=P[p].a)==null||he.measure();for(p=0;p<Z;p+=1)(ge=P[p].a)==null||ge.fix()}ks(e,P,Ve,f)}}d&&ss(()=>{var me;if(o!==void 0)for(u of o)(me=u.a)==null||me.apply()}),oe.first=e.first&&e.first.e,oe.last=v&&v.e}function As(s,e,a,t){t&de&&Ee(s.v,e),t&fe?Ee(s.i,a):s.i=a}function Be(s,e,a,t,r,c,i,d,m){var y=(m&de)!==0,f=(m&cs)===0,g=y?f?os(r):Le(r):r,l=m&fe?Le(i):i,n={i:l,v:g,k:c,a:null,e:null,prev:a,next:t};try{return n.e=je(()=>d(s,g,l),T),n.e.prev=a&&a.e,n.e.next=t&&t.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),t!==null&&(t.prev=n,t.e.prev=n.e),n}finally{}}function Ne(s,e,a){for(var t=s.next?s.next.e.nodes_start:a,r=e?e.e.nodes_start:a,c=s.e.nodes_start;c!==t;){var i=ds(c);r.before(c),c=i}}function D(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function We(s){if(T){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var t=s.value;q(s,"value",null),s.value=t}if(s.hasAttribute("checked")){var r=s.checked;q(s,"checked",null),s.checked=r}}};s.__on_r=a,fs(a),Re()}}function q(s,e,a,t){var r=s.__attributes??(s.__attributes={});T&&(r[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[us]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Es(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var Se=new Map;function Es(s){var e=Se.get(s.nodeName);if(e)return e;Se.set(s.nodeName,e=[]);for(var a,t=Ie(s),r=Element.prototype;r!==t;){a=_s(t);for(var c in a)a[c].set&&e.push(c);t=Ie(t)}return e}function Ls(s,e,a){if(a){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}function G(s,e,a,t){var r=s.__styles??(s.__styles={});r[e]!==a&&(r[e]=a,a==null?s.style.removeProperty(e):s.style.setProperty(e,a,""))}function qe(s,e,a=e){var t=ps();xs(s,"input",()=>{var r=ne(s)?ie(s.value):s.value;a(r),t&&r!==(r=e())&&(s.value=r??"")}),hs(()=>{var r=e();if(T&&s.defaultValue!==s.value){a(ne(s)?ie(s.value):s.value);return}ne(s)&&r===ie(s.value)||s.type==="date"&&!r&&!s.value||r!==s.value&&(s.value=r??"")})}function ne(s){var e=s.type;return e==="number"||e==="range"}function ie(s){return s===""?null:+s}var F,O,V,X,Ge;const J=class J{constructor(e){R(this,X);R(this,F,new WeakMap);R(this,O);R(this,V);se(this,V,e)}observe(e,a){var t=N(this,F).get(e)||new Set;return t.add(a),N(this,F).set(e,t),we(this,X,Ge).call(this).observe(e,N(this,V)),()=>{var r=N(this,F).get(e);r.delete(a),r.size===0&&(N(this,F).delete(e),N(this,O).unobserve(e))}}};F=new WeakMap,O=new WeakMap,V=new WeakMap,X=new WeakSet,Ge=function(){return N(this,O)??se(this,O,new ResizeObserver(e=>{for(var a of e){J.entries.set(a.target,a);for(var t of N(this,F).get(a.target)||[])t(a)}}))},be(J,"entries",new WeakMap);let ce=J;var Is=new ce({box:"border-box"});function Ts(s,e,a){var t=Is.observe(s,()=>a(s[e]));gs(()=>(ms(()=>a(s[e])),t))}var Cs=z(`<section class="hero svelte-81nd4c"><div class="hero-top svelte-81nd4c"><h1 class="title svelte-81nd4c">Fliege</h1> <div class="links svelte-81nd4c"><a class="links-item svelte-81nd4c" href="https://github.com/PavelLaptev/Fliege-mono/raw/refs/heads/main/font/Fliege-mono.zip" target="_blank">Download</a> <a class="links-item svelte-81nd4c" href="https://github.com/PavelLaptev/Fliege-mono" target="_blank">Source</a></div></div> <table class="data-table svelte-81nd4c"><tbody><tr><td class="label svelte-81nd4c">Glyphs</td><td class="svelte-81nd4c">531</td></tr><tr><td class="label svelte-81nd4c">Styles</td><td class="svelte-81nd4c">6 + variable font</td></tr><tr><td class="label svelte-81nd4c">Alphabets</td><td class="svelte-81nd4c">Ext.Latin, Cyrillic</td></tr></tbody></table> <p class="hero-description svelte-81nd4c">Fliege mono It is a monospaced typeface with a strong personality. It is designed as a monospace
		font but with a human touch. In order to make the font a bit more playful and less monotonous,
		the font has ink traps and lowercase ascenders are slightly taller than uppercase cap height.</p></section>`);function Ns(s){var e=Cs();w(s,e)}var Ss=z('<span class="tick-weight svelte-lj84ay">100</span>'),Ms=z('<span class="tick-weight svelte-lj84ay">400</span>'),Ds=z('<span class="tick-weight svelte-lj84ay">900</span>'),Fs=z('<div class="slider-scale-tick svelte-lj84ay"><!></div>'),Hs=z('<section class="weight-presentation svelte-lj84ay"><div class="slider svelte-lj84ay"><div class="slider-scale svelte-lj84ay"><!> <div class="slider-track svelte-lj84ay"></div> <input class="slider-input svelte-lj84ay" type="range" name="emoji-range" step="10" min="100" max="900"></div></div> <div class="preview svelte-lj84ay"><span class="preview-letters svelte-lj84ay">Aa</span> <span class="preview-caption">+ 7 static styles</span></div></section>');function js(s){let a=W(400);var t=Hs(),r=x(t),c=x(r),i=x(c);j(i,17,()=>Array.from({length:9},(f,g)=>g),H,(f,g)=>{var l=Fs(),n=x(l);re(n,()=>b(g)===0,v=>{var o=Ss();w(v,o)},v=>{var o=xe(),_=Te(o);re(_,()=>b(g)===3,A=>{var E=Ms();w(A,E)},A=>{var E=xe(),L=Te(E);re(L,()=>b(g)===8,u=>{var p=Ds();w(u,p)},null,!0),w(A,E)},!0),w(v,o)}),h(l),C(()=>Ls(l,"transparent",b(g)===0||b(g)===8)),w(f,l)});var d=k(i,4);We(d),h(c),h(r);var m=k(r,2),y=x(m);ys(2),h(m),h(t),C(()=>G(y,"font-weight",b(a))),qe(d,()=>b(a),f=>I(a,f)),w(s,t)}var Os=z('<section class="font-layout svelte-amnzu6"><img class="font-layout-image svelte-amnzu6" src="assets/font-layout-preview.svg" alt="Font Layout"></section>');function Ps(s){var e=Os();w(s,e)}var Rs=z('<div class="slider svelte-1itsxg5"><div class="slider-labels svelte-1itsxg5"><span class="slider-label svelte-1itsxg5"> </span> <span class="slider-label svelte-1itsxg5"> </span></div> <div class="slider-scale svelte-1itsxg5"><div class="slider-track svelte-1itsxg5"></div> <input class="slider-input svelte-1itsxg5" type="range" name="emoji-range"></div></div>');function ve(s,e){let a=Y(e,"value",15),t=Y(e,"min",3,100),r=Y(e,"max",3,900),c=Y(e,"step",3,1);var i=Rs(),d=x(i),m=x(d),y=x(m,!0);h(m);var f=k(m,2),g=x(f,!0);h(f),h(d);var l=k(d,2),n=k(x(l),2);We(n),h(l),h(i),C(()=>{M(y,e.label),M(g,a()),q(n,"min",t()),q(n,"max",r()),q(n,"step",c())}),qe(n,a),w(s,i)}var Bs=z('<section class="try-it-out svelte-du1vac"><div class="controls svelte-du1vac"><!> <!> <!></div> <div class="text-preview svelte-du1vac" contenteditable="true">Every line counts — version control with GitButler.</div></section>');function Ws(s,e){Oe(e,!0);let a=W(400),t=W(130),r=W(-.7),c=W(0);bs(()=>{b(c)<800?(I(t,50),I(a,400),I(r,-.7)):(I(t,130),I(a,400),I(r,-.7))});var i=Bs(),d=x(i),m=x(d);ve(m,{label:"Font size",get value(){return b(t)},set value(l){I(t,le(l))},min:12,max:200});var y=k(m,2);ve(y,{label:"Font weight",get value(){return b(a)},set value(l){I(a,le(l))},min:100,max:900,step:10});var f=k(y,2);ve(f,{label:"Letter spacing",get value(){return b(r)},set value(l){I(r,le(l))},min:-1,max:0,step:.1}),h(d);var g=k(d,2);h(i),C(()=>{G(g,"font-size",b(t)+"px"),G(g,"font-weight",b(a)),G(g,"letter-spacing",b(r)*b(t)/6+"px")}),Ts(i,"clientWidth",l=>I(c,l)),w(s,i),Pe()}var qs=z('<span class="symbol svelte-lezu35"> </span>'),Gs=z('<span class="symbol svelte-lezu35"> </span>'),Vs=z('<span class="symbol svelte-lezu35"> </span>'),$s=z('<span class="symbol svelte-lezu35"> </span>'),Ys=z('<span class="symbol svelte-lezu35"> </span>'),Ks=z('<span class="symbol svelte-lezu35"> </span>'),Xs=z('<section class="symbols svelte-lezu35"><div class="symbols-grid svelte-lezu35"></div> <div class="symbols-grid svelte-lezu35"></div> <hr class="divider svelte-lezu35"> <div class="symbols-grid svelte-lezu35"></div> <div class="symbols-grid svelte-lezu35"></div> <hr class="divider svelte-lezu35"> <div class="symbols-grid svelte-lezu35"></div> <div class="symbols-grid svelte-lezu35"></div></section>');function Js(s,e){Oe(e,!1);const a="abcdefghijklmnopqrstuvwxyz".split(""),t="абвгдеєжзиіїйклмнопрстуфхцчшщьюя".split(""),r="0123456789".split(""),c="!@#$%^&*()_+-=[]{}|;:,.<>?/→↑←↓".split("");Ke();var i=Xs(),d=x(i);G(d,"text-transform","uppercase"),j(d,5,()=>a,H,(n,v)=>{var o=qs(),_=x(o,!0);h(o),C(()=>M(_,b(v))),w(n,o)}),h(d);var m=k(d,2);j(m,5,()=>a,H,(n,v)=>{var o=Gs(),_=x(o,!0);h(o),C(()=>M(_,b(v))),w(n,o)}),h(m);var y=k(m,4);j(y,5,()=>t,H,(n,v)=>{var o=Vs(),_=x(o,!0);h(o),C(()=>M(_,b(v))),w(n,o)}),h(y);var f=k(y,2);j(f,5,()=>t,H,(n,v)=>{var o=$s(),_=x(o,!0);h(o),C(()=>M(_,b(v))),w(n,o)}),h(f);var g=k(f,4);j(g,5,()=>r,H,(n,v)=>{var o=Ys(),_=x(o,!0);h(o),C(()=>M(_,b(v))),w(n,o)}),h(g);var l=k(g,2);j(l,5,()=>c,H,(n,v)=>{var o=Ks(),_=x(o,!0);h(o),C(()=>M(_,b(v))),w(n,o)}),h(l),h(i),w(s,i),Pe()}var Us=z('<section class="posters svelte-ywmwnl"><img src="assets/poster-6.png" alt="" class="svelte-ywmwnl"> <img src="assets/poster-3.png" alt="" class="svelte-ywmwnl"> <img src="assets/poster-2.png" alt="" class="svelte-ywmwnl"> <img src="assets/poster-4.png" alt="" class="svelte-ywmwnl"></section>');function Qs(s){var e=Us();w(s,e)}var Zs=z('<main class="page-wrapper svelte-1slyh4u"><!> <!> <!> <!> <!> <!></main>');function na(s){var e=Zs(),a=x(e);Ns(a);var t=k(a,2);js(t);var r=k(t,2);Ps(r);var c=k(r,2);Ws(c,{});var i=k(c,2);Js(i,{});var d=k(i,2);Qs(d),h(e),w(s,e)}export{na as component};
