import{a8 as Y,a9 as O,X as A,H as j,aa as B,D as k,ab as E,a5 as C,ac as P,ad as $,ae as T,M as g,L as I,I as q,w as v,af as W,ag as X,ah as z,ai as F,aj as G,ak as J,a4 as K,n as Q,p as U,v as S,a as Z,d as x,o as N,e as ee,al as re,a3 as ae,i as te,B as ne}from"./runtime.yWo52CK0.js";import{b as se}from"./disclose-version.k4AZfbKT.js";const ie=new Set,L=new Set;function y(e){var D;var r=this,n=r.ownerDocument,t=e.type,u=((D=e.composedPath)==null?void 0:D.call(e))||[],a=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(a=u[c]||e.target,a!==r){Y(e,"currentTarget",{configurable:!0,get(){return a||n}});var m=B,o=k;O(null),A(null);try{for(var s,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+t];if(_!==void 0&&!a.disabled)if(j(_)){var[M,...V]=_;M.apply(a,[e,...V])}else _.call(a,e)}catch(p){s?i.push(p):s=p}if(e.cancelBubble||f===r||f===null)break;a=f}if(s){for(let p of i)queueMicrotask(()=>{throw p});throw s}}finally{e.__root=r,delete e.currentTarget,O(m),A(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function fe(e,r){return H(e,r)}function be(e,r){E(),r.intro=r.intro??!1;const n=r.target,t=S,u=v;try{for(var a=C(n);a&&(a.nodeType!==8||a.data!==P);)a=$(a);if(!a)throw T;g(!0),I(a),q();const c=H(e,{...r,anchor:a});if(v===null||v.nodeType!==8||v.data!==W)throw X(),T;return g(!1),c}catch(c){if(c===T)return r.recover===!1&&z(),E(),F(n),g(!1),fe(e,r);throw c}finally{g(t),I(u)}}const h=new Map;function H(e,{target:r,anchor:n,props:t={},events:u,context:a,intro:c=!0}){E();var b=new Set,d=o=>{for(var s=0;s<o.length;s++){var i=o[s];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,y,{passive:f});var _=h.get(i);_===void 0?(document.addEventListener(i,y,{passive:f}),h.set(i,1)):h.set(i,_+1)}}};d(G(ie)),L.add(d);var l=void 0,m=J(()=>{var o=n??r.appendChild(K());return Q(()=>{if(a){U({});var s=x;s.c=a}u&&(t.$$events=u),S&&se(o,null),l=e(o,t)||{},S&&(k.nodes_end=v),a&&Z()}),()=>{var f;for(var s of b){r.removeEventListener(s,y);var i=h.get(s);--i===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,i)}L.delete(d),R.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(l,m),l}let R=new WeakMap;function he(e){const r=R.get(e);r&&r()}function ce(e,r,n){if(e==null)return r(void 0),N;const t=ee(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}let w=!1;function ve(e,r,n){const t=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:N});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=N;else{var u=!0;t.unsubscribe=ce(e,a=>{u?t.source.v=a:ne(t.source,a)}),u=!1}return te(t.source)}function pe(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ge(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,ve as b,ge as c,be as h,fe as m,pe as s,he as u};