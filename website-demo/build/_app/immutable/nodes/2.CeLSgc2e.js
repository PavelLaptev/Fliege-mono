var Ge=Object.defineProperty;var ge=s=>{throw TypeError(s)};var Ve=(s,e,a)=>e in s?Ge(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var me=(s,e,a)=>Ve(s,typeof e!="symbol"?e+"":e,a),ee=(s,e,a)=>e.has(s)||ge("Cannot "+a);var N=(s,e,a)=>(ee(s,e,"read from private field"),a?a.call(s):e.get(s)),O=(s,e,a)=>e.has(s)?ge("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,a),se=(s,e,a,t)=>(ee(s,e,"write to private field"),t?t.call(s,a):e.set(s,a),a),ye=(s,e,a)=>(ee(s,e,"access private method"),a);import{a as w,t as A,c as be}from"../chunks/disclose-version.C37OBrzW.js";import{a1 as $e,l as Ye,ap as Se,q as C,K as ae,H as Ke,G as Je,ag as Me,I as Ue,J as we,L as te,v as q,aq as K,M as Fe,m as je,N as Xe,al as Qe,C as xe,ar as oe,as as ke,at as ce,au as Ze,a0 as es,y as Ae,av as ss,af as as,aw as ts,o as rs,a2 as ls,ac as ns,a7 as is,ax as vs,aa as os,ay as cs,az as ds,F as ze,aA as us,aB as fs,ak as _s,aj as ps,b as hs,t as T,A as I,g as b,j as x,h as Ee,k as h,s as k,aC as gs,ao as W,p as He,a as ms,i as De}from"../chunks/runtime.DYbu6N6Z.js";import{i as re,p as Y,a as le}from"../chunks/props.D8-VQ54g.js";import{a as M}from"../chunks/store.Jlt9vTgP.js";import{i as ys}from"../chunks/lifecycle.BwFIeqiq.js";let ne=null;function H(s,e){return e}function bs(s,e,a,t){for(var r=[],c=e.length,i=0;i<c;i++)ss(e[i].e,r,!0);var d=c>0&&r.length===0&&a!==null;if(d){var g=a.parentNode;as(g),g.append(a),t.clear(),F(s,e[0].prev,e[c-1].next)}ts(r,()=>{for(var y=0;y<c;y++){var u=e[y];d||(t.delete(u.k),F(s,u.prev,u.next)),rs(u.e,!d)}})}function D(s,e,a,t,r,c=null){var i=s,d={flags:e,items:new Map,first:null},g=(e&Se)!==0;if(g){var y=s;i=C?ae(ls(y)):y.appendChild($e())}C&&Ke();var u=null,m=!1;Ye(()=>{var n=a(),o=Je(n)?n:n==null?[]:Me(n),l=o.length;if(m&&l===0)return;m=l===0;let v=!1;if(C){var _=i.data===Ue;_!==(l===0)&&(i=we(),ae(i),te(!1),v=!0)}if(C){for(var z=null,E,L=0;L<l;L++){if(q.nodeType===8&&q.data===ns){i=q,v=!0,te(!1);break}var f=o[L],p=t(f,L);E=Pe(q,d,z,null,f,p,L,r,e),d.items.set(p,E),z=E}l>0&&ae(we())}if(!C){var X=is;ws(o,d,i,r,e,(X.f&K)!==0,t)}c!==null&&(l===0?u?Fe(u):u=je(()=>c(i)):u!==null&&Xe(u,()=>{u=null})),v&&te(!0),a()}),C&&(i=q)}function ws(s,e,a,t,r,c,i){var ue,fe,_e,pe;var d=(r&vs)!==0,g=(r&(oe|ce))!==0,y=s.length,u=e.items,m=e.first,n=m,o,l=null,v,_=[],z=[],E,L,f,p;if(d)for(p=0;p<y;p+=1)E=s[p],L=i(E,p),f=u.get(L),f!==void 0&&((ue=f.a)==null||ue.measure(),(v??(v=new Set)).add(f));for(p=0;p<y;p+=1){if(E=s[p],L=i(E,p),f=u.get(L),f===void 0){var X=n?n.e.nodes_start:a;l=Pe(X,e,l,l===null?e.first:l.next,E,L,p,t,r),u.set(L,l),_=[],z=[],n=l.next;continue}if(g&&xs(f,E,p,r),f.e.f&K&&(Fe(f.e),d&&((fe=f.a)==null||fe.unfix(),(v??(v=new Set)).delete(f))),f!==n){if(o!==void 0&&o.has(f)){if(_.length<z.length){var $=z[0],S;l=$.prev;var de=_[0],Q=_[_.length-1];for(S=0;S<_.length;S+=1)Le(_[S],$,a);for(S=0;S<z.length;S+=1)o.delete(z[S]);F(e,de.prev,Q.next),F(e,l,de),F(e,Q,$),n=$,l=Q,p-=1,_=[],z=[]}else o.delete(f),Le(f,n,a),F(e,f.prev,f.next),F(e,f,l===null?e.first:l.next),F(e,l,f),l=f;continue}for(_=[],z=[];n!==null&&n.k!==L;)(c||!(n.e.f&K))&&(o??(o=new Set)).add(n),z.push(n),n=n.next;if(n===null)continue;f=n}_.push(f),l=f,n=f.next}if(n!==null||o!==void 0){for(var R=o===void 0?[]:Me(o);n!==null;)(c||!(n.e.f&K))&&R.push(n),n=n.next;var Z=R.length;if(Z>0){var Be=r&Se&&y===0?a:null;if(d){for(p=0;p<Z;p+=1)(_e=R[p].a)==null||_e.measure();for(p=0;p<Z;p+=1)(pe=R[p].a)==null||pe.fix()}bs(e,R,Be,u)}}d&&Qe(()=>{var he;if(v!==void 0)for(f of v)(he=f.a)==null||he.apply()}),xe.first=e.first&&e.first.e,xe.last=l&&l.e}function xs(s,e,a,t){t&oe&&ke(s.v,e),t&ce?ke(s.i,a):s.i=a}function Pe(s,e,a,t,r,c,i,d,g){var y=ne;try{var u=(g&oe)!==0,m=(g&Ze)===0,n=u?m?es(r):Ae(r):r,o=g&ce?Ae(i):i,l={i:o,v:n,k:c,a:null,e:null,prev:a,next:t};return ne=l,l.e=je(()=>d(s,n,o),C),l.e.prev=a&&a.e,l.e.next=t&&t.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),t!==null&&(t.prev=l,t.e.prev=l.e),l}finally{ne=y}}function Le(s,e,a){for(var t=s.next?s.next.e.nodes_start:a,r=e?e.e.nodes_start:a,c=s.e.nodes_start;c!==t;){var i=os(c);r.before(c),c=i}}function F(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}let Ie=!1;function Re(){Ie||(Ie=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var e;if(!s.defaultPrevented)for(const a of s.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function Oe(s){if(C){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var t=s.value;B(s,"value",null),s.value=t}if(s.hasAttribute("checked")){var r=s.checked;B(s,"checked",null),s.checked=r}}};s.__on_r=a,cs(a),Re()}}function B(s,e,a,t){var r=s.__attributes??(s.__attributes={});C&&(r[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[ds]=a),a==null?s.removeAttribute(e):typeof a!="string"&&ks(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var Ce=new Map;function ks(s){var e=Ce.get(s.nodeName);if(e)return e;Ce.set(s.nodeName,e=[]);for(var a,t=ze(s),r=Element.prototype;r!==t;){a=us(t);for(var c in a)a[c].set&&e.push(c);t=ze(t)}return e}function As(s,e,a){if(a){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}function G(s,e,a,t){var r=s.__styles??(s.__styles={});r[e]!==a&&(r[e]=a,a==null?s.style.removeProperty(e):s.style.setProperty(e,a,""))}function zs(s,e,a,t=a){s.addEventListener(e,a);const r=s.__on_r;r?s.__on_r=()=>{r(),t()}:s.__on_r=t,Re()}function qe(s,e,a=e){var t=fs();zs(s,"input",()=>{var r=Te(s)?Ne(s.value):s.value;a(r),t&&r!==(r=e())&&(s.value=r??"")}),_s(()=>{var r=e();if(C&&s.defaultValue!==s.value){a(s.value);return}Te(s)&&r===Ne(s.value)||s.type==="date"&&!r&&!s.value||r!==s.value&&(s.value=r??"")})}function Te(s){var e=s.type;return e==="number"||e==="range"}function Ne(s){return s===""?null:+s}var j,P,V,J,We;const U=class U{constructor(e){O(this,J);O(this,j,new WeakMap);O(this,P);O(this,V);se(this,V,e)}observe(e,a){var t=N(this,j).get(e)||new Set;return t.add(a),N(this,j).set(e,t),ye(this,J,We).call(this).observe(e,N(this,V)),()=>{var r=N(this,j).get(e);r.delete(a),r.size===0&&(N(this,j).delete(e),N(this,P).unobserve(e))}}};j=new WeakMap,P=new WeakMap,V=new WeakMap,J=new WeakSet,We=function(){return N(this,P)??se(this,P,new ResizeObserver(e=>{for(var a of e){U.entries.set(a.target,a);for(var t of N(this,j).get(a.target)||[])t(a)}}))},me(U,"entries",new WeakMap);let ve=U;var Es=new ve({box:"border-box"});function Ls(s,e,a){var t=Es.observe(s,()=>a(s[e]));ps(()=>(hs(()=>a(s[e])),t))}var Is=A(`<section class="hero svelte-81nd4c"><div class="hero-top svelte-81nd4c"><h1 class="title svelte-81nd4c">Fliege</h1> <div class="links svelte-81nd4c"><a class="links-item svelte-81nd4c" href="https://github.com/PavelLaptev/Fliege-mono/raw/refs/heads/main/font/Fliege-mono.zip" target="_blank">Download</a> <a class="links-item svelte-81nd4c" href="https://github.com/PavelLaptev/Fliege-mono" target="_blank">Source</a></div></div> <table class="data-table svelte-81nd4c"><tbody><tr><td class="label svelte-81nd4c">Glyphs</td><td class="svelte-81nd4c">531</td></tr><tr><td class="label svelte-81nd4c">Styles</td><td class="svelte-81nd4c">6 + variable font</td></tr><tr><td class="label svelte-81nd4c">Alphabets</td><td class="svelte-81nd4c">Ext.Latin, Cyrillic</td></tr></tbody></table> <p class="hero-description svelte-81nd4c">Fliege mono It is a monospaced typeface with a strong personality. It is designed as a monospace
		font but with a human touch. In order to make the font a bit more playful and less monotonous,
		the font has ink traps and lowercase ascenders are slightly taller than uppercase cap height.</p></section>`);function Cs(s){var e=Is();w(s,e)}var Ts=A('<span class="tick-weight svelte-lj84ay">100</span>'),Ns=A('<span class="tick-weight svelte-lj84ay">400</span>'),Ss=A('<span class="tick-weight svelte-lj84ay">900</span>'),Ms=A('<div class="slider-scale-tick svelte-lj84ay"><!></div>'),Fs=A('<section class="weight-presentation svelte-lj84ay"><div class="slider svelte-lj84ay"><div class="slider-scale svelte-lj84ay"><!> <div class="slider-track svelte-lj84ay"></div> <input class="slider-input svelte-lj84ay" type="range" name="emoji-range" step="10" min="100" max="900"></div></div> <div class="preview svelte-lj84ay"><span class="preview-letters svelte-lj84ay">Aa</span> <span class="preview-caption">+ 7 static styles</span></div></section>');function js(s){let a=W(400);var t=Fs(),r=x(t),c=x(r),i=x(c);D(i,17,()=>Array.from({length:9},(u,m)=>m),H,(u,m)=>{var n=Ms(),o=x(n);re(o,()=>b(m)===0,l=>{var v=Ts();w(l,v)},l=>{var v=be(),_=Ee(v);re(_,()=>b(m)===3,z=>{var E=Ns();w(z,E)},z=>{var E=be(),L=Ee(E);re(L,()=>b(m)===8,f=>{var p=Ss();w(f,p)},null,!0),w(z,E)},!0),w(l,v)}),h(n),T(()=>As(n,"transparent",b(m)===0||b(m)===8)),w(u,n)});var d=k(i,4);Oe(d),h(c),h(r);var g=k(r,2),y=x(g);gs(2),h(g),h(t),T(()=>G(y,"font-weight",b(a))),qe(d,()=>b(a),u=>I(a,u)),w(s,t)}var Hs=A('<section class="font-layout svelte-amnzu6"><img class="font-layout-image svelte-amnzu6" src="assets/font-layout-preview.svg" alt="Font Layout"></section>');function Ds(s){var e=Hs();w(s,e)}var Ps=A('<div class="slider svelte-1itsxg5"><div class="slider-labels svelte-1itsxg5"><span class="slider-label svelte-1itsxg5"> </span> <span class="slider-label svelte-1itsxg5"> </span></div> <div class="slider-scale svelte-1itsxg5"><div class="slider-track svelte-1itsxg5"></div> <input class="slider-input svelte-1itsxg5" type="range" name="emoji-range"></div></div>');function ie(s,e){let a=Y(e,"value",15),t=Y(e,"min",3,100),r=Y(e,"max",3,900),c=Y(e,"step",3,1);var i=Ps(),d=x(i),g=x(d),y=x(g,!0);h(g);var u=k(g,2),m=x(u,!0);h(u),h(d);var n=k(d,2),o=k(x(n),2);Oe(o),h(n),h(i),T(()=>{M(y,e.label),M(m,a()),B(o,"min",t()),B(o,"max",r()),B(o,"step",c())}),qe(o,a),w(s,i)}var Rs=A('<section class="try-it-out svelte-du1vac"><div class="controls svelte-du1vac"><!> <!> <!></div> <div class="text-preview svelte-du1vac" contenteditable="true">Every line counts — version control with GitButler.</div></section>');function Os(s,e){He(e,!0);let a=W(400),t=W(130),r=W(-.7),c=W(0);ms(()=>{b(c)<800?(I(t,50),I(a,400),I(r,-.7)):(I(t,130),I(a,400),I(r,-.7))});var i=Rs(),d=x(i),g=x(d);ie(g,{label:"Font size",get value(){return b(t)},set value(n){I(t,le(n))},min:12,max:200});var y=k(g,2);ie(y,{label:"Font weight",get value(){return b(a)},set value(n){I(a,le(n))},min:100,max:900,step:10});var u=k(y,2);ie(u,{label:"Letter spacing",get value(){return b(r)},set value(n){I(r,le(n))},min:-1,max:0,step:.1}),h(d);var m=k(d,2);h(i),T(()=>{G(m,"font-size",b(t)+"px"),G(m,"font-weight",b(a)),G(m,"letter-spacing",b(r)*b(t)/6+"px")}),Ls(i,"clientWidth",n=>I(c,n)),w(s,i),De()}var qs=A('<span class="symbol svelte-lezu35"> </span>'),Ws=A('<span class="symbol svelte-lezu35"> </span>'),Bs=A('<span class="symbol svelte-lezu35"> </span>'),Gs=A('<span class="symbol svelte-lezu35"> </span>'),Vs=A('<span class="symbol svelte-lezu35"> </span>'),$s=A('<span class="symbol svelte-lezu35"> </span>'),Ys=A('<section class="symbols svelte-lezu35"><div class="symbols-grid svelte-lezu35"></div> <div class="symbols-grid svelte-lezu35"></div> <hr class="divider svelte-lezu35"> <div class="symbols-grid svelte-lezu35"></div> <div class="symbols-grid svelte-lezu35"></div> <hr class="divider svelte-lezu35"> <div class="symbols-grid svelte-lezu35"></div> <div class="symbols-grid svelte-lezu35"></div></section>');function Ks(s,e){He(e,!1);const a="abcdefghijklmnopqrstuvwxyz".split(""),t="абвгдеєжзиіїйклмнопрстуфхцчшщьюя".split(""),r="0123456789".split(""),c="!@#$%^&*()_+-=[]{}|;:,.<>?/→↑←↓".split("");ys();var i=Ys(),d=x(i);G(d,"text-transform","uppercase"),D(d,5,()=>a,H,(o,l)=>{var v=qs(),_=x(v,!0);h(v),T(()=>M(_,b(l))),w(o,v)}),h(d);var g=k(d,2);D(g,5,()=>a,H,(o,l)=>{var v=Ws(),_=x(v,!0);h(v),T(()=>M(_,b(l))),w(o,v)}),h(g);var y=k(g,4);D(y,5,()=>t,H,(o,l)=>{var v=Bs(),_=x(v,!0);h(v),T(()=>M(_,b(l))),w(o,v)}),h(y);var u=k(y,2);D(u,5,()=>t,H,(o,l)=>{var v=Gs(),_=x(v,!0);h(v),T(()=>M(_,b(l))),w(o,v)}),h(u);var m=k(u,4);D(m,5,()=>r,H,(o,l)=>{var v=Vs(),_=x(v,!0);h(v),T(()=>M(_,b(l))),w(o,v)}),h(m);var n=k(m,2);D(n,5,()=>c,H,(o,l)=>{var v=$s(),_=x(v,!0);h(v),T(()=>M(_,b(l))),w(o,v)}),h(n),h(i),w(s,i),De()}var Js=A('<section class="posters svelte-ywmwnl"><img src="assets/poster-6.png" alt="" class="svelte-ywmwnl"> <img src="assets/poster-3.png" alt="" class="svelte-ywmwnl"> <img src="assets/poster-2.png" alt="" class="svelte-ywmwnl"> <img src="assets/poster-4.png" alt="" class="svelte-ywmwnl"></section>');function Us(s){var e=Js();w(s,e)}var Xs=A('<main class="page-wrapper svelte-1slyh4u"><!> <!> <!> <!> <!> <!></main>');function ra(s){var e=Xs(),a=x(e);Cs(a);var t=k(a,2);js(t);var r=k(t,2);Ds(r);var c=k(r,2);Os(c,{});var i=k(c,2);Ks(i,{});var d=k(i,2);Us(d),h(e),w(s,e)}export{ra as component};