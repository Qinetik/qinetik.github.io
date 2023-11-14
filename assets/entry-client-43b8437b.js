const g={context:void 0,registry:void 0};function U(e){g.context=e}function mr(){return{...g.context,id:`${g.context.id}${g.context.count++}-`,count:0}}const br=(e,t)=>e===t,Ee=Symbol("solid-proxy"),Ce={equals:br};let he=null,Ot=Nt;const V=1,be=2,Rt={owned:null,cleanups:null,context:null,owner:null},De={};var k=null;let h=null,E=null,z=null,R=null,Be=0;const[Qo,lt]=j(!1);function et(e,t){const r=E,n=k,o=e.length===0,i=t===void 0?n:t,s=o?Rt:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=o?e:()=>e(()=>_(()=>re(s)));k=s,E=null;try{return D(a,!0)}finally{E=r,k=n}}function j(e,t){t=t?Object.assign({},Ce,t):Ce;const r={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=o=>(typeof o=="function"&&(h&&h.running&&h.sources.has(r)?o=o(r.tValue):o=o(r.value)),zt(r,o));return[_t.bind(r),n]}function ct(e,t,r){const n=we(e,t,!0,V);de(n)}function F(e,t,r){const n=we(e,t,!1,V);de(n)}function tt(e,t,r){Ot=Pr;const n=we(e,t,!1,V),o=oe&&I(oe);o&&(n.suspense=o),(!r||!r.render)&&(n.user=!0),R?R.push(n):de(n)}function A(e,t,r){r=r?Object.assign({},Ce,r):Ce;const n=we(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,de(n),_t.bind(n)}function yr(e){return e&&typeof e=="object"&&"then"in e}function vr(e,t,r){let n,o,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(n=!0,o=e,i=t||{}):(n=e,o=t,i=r||{});let s=null,a=De,c=null,d=!1,u=!1,f="initialValue"in i,m=typeof n=="function"&&A(n);const y=new Set,[x,$]=(i.storage||j)(i.initialValue),[L,T]=j(void 0),[B,W]=j(void 0,{equals:!1}),[H,M]=j(f?"ready":"unresolved");if(g.context){c=`${g.context.id}${g.context.count++}`;let b;i.ssrLoadFrom==="initial"?a=i.initialValue:g.load&&(b=g.load(c))&&(a=b)}function N(b,S,O,q){return s===b&&(s=null,q!==void 0&&(f=!0),(b===a||S===a)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(q,{value:S})),a=De,h&&b&&d?(h.promises.delete(b),d=!1,D(()=>{h.running=!0,Y(S,O)},!1)):Y(S,O)),S}function Y(b,S){D(()=>{S===void 0&&$(()=>b),M(S!==void 0?"errored":f?"ready":"unresolved"),T(S);for(const O of y.keys())O.decrement();y.clear()},!1)}function Z(){const b=oe&&I(oe),S=x(),O=L();if(O!==void 0&&!s)throw O;return E&&!E.user&&b&&ct(()=>{B(),s&&(b.resolved&&h&&d?h.promises.add(s):y.has(b)||(b.increment(),y.add(b)))}),S}function P(b=!0){if(b!==!1&&u)return;u=!1;const S=m?m():n;if(d=h&&h.running,S==null||S===!1){N(s,_(x));return}h&&s&&h.promises.delete(s);const O=a!==De?a:_(()=>o(S,{value:x(),refetching:b}));return yr(O)?(s=O,"value"in O?(O.status==="success"?N(s,O.value,void 0,S):N(s,void 0,void 0,S),O):(u=!0,queueMicrotask(()=>u=!1),D(()=>{M(f?"refreshing":"pending"),W()},!1),O.then(q=>N(O,q,void 0,S),q=>N(O,void 0,It(q),S)))):(N(s,O,void 0,S),O)}return Object.defineProperties(Z,{state:{get:()=>H()},error:{get:()=>L()},loading:{get(){const b=H();return b==="pending"||b==="refreshing"}},latest:{get(){if(!f)return Z();const b=L();if(b&&!s)throw b;return x()}}}),m?ct(()=>P(!1)):P(!1),[Z,{refetch:P,mutate:$}]}function _(e){if(E===null)return e();const t=E;E=null;try{return e()}finally{E=t}}function Tt(e,t,r){const n=Array.isArray(e);let o,i=r&&r.defer;return s=>{let a;if(n){a=Array(e.length);for(let d=0;d<e.length;d++)a[d]=e[d]()}else a=e();if(i){i=!1;return}const c=_(()=>t(a,o,s));return o=a,c}}function Jo(e){tt(()=>_(e))}function ue(e){return k===null||(k.cleanups===null?k.cleanups=[e]:k.cleanups.push(e)),e}function wr(e,t){he||(he=Symbol("error")),k=we(void 0,void 0,!0),k.context={...k.context,[he]:[t]},h&&h.running&&h.sources.add(k);try{return e()}catch(r){xe(r)}finally{k=k.owner}}function Bt(){return k}function xr(e,t){const r=k,n=E;k=e,E=null;try{return D(t,!0)}catch(o){xe(o)}finally{k=r,E=n}}function $r(e){if(h&&h.running)return e(),h.done;const t=E,r=k;return Promise.resolve().then(()=>{E=t,k=r;let n;return oe&&(n=h||(h={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),n.done||(n.done=new Promise(o=>n.resolve=o)),n.running=!0),D(e,!1),E=k=null,n?n.done:void 0})}function kr(e){R.push.apply(R,e),e.length=0}function ne(e,t){const r=Symbol("context");return{id:r,Provider:Er(r),defaultValue:e}}function I(e){return k&&k.context&&k.context[e.id]!==void 0?k.context[e.id]:e.defaultValue}function rt(e){const t=A(e),r=A(()=>Ke(t()));return r.toArray=()=>{const n=r();return Array.isArray(n)?n:n!=null?[n]:[]},r}let oe;function Sr(){return oe||(oe=ne())}function _t(){const e=h&&h.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===V)de(this);else{const t=z;z=null,D(()=>Oe(this),!1),z=t}if(E){const t=this.observers?this.observers.length:0;E.sources?(E.sources.push(this),E.sourceSlots.push(t)):(E.sources=[this],E.sourceSlots=[t]),this.observers?(this.observers.push(E),this.observerSlots.push(E.sources.length-1)):(this.observers=[E],this.observerSlots=[E.sources.length-1])}return e&&h.sources.has(this)?this.tValue:this.value}function zt(e,t,r){let n=h&&h.running&&h.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(n,t)){if(h){const o=h.running;(o||!r&&h.sources.has(e))&&(h.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&D(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],s=h&&h.running;s&&h.disposed.has(i)||((s?!i.tState:!i.state)&&(i.pure?z.push(i):R.push(i),i.observers&&jt(i)),s?i.tState=V:i.state=V)}if(z.length>1e6)throw z=[],new Error},!1)}return t}function de(e){if(!e.fn)return;re(e);const t=k,r=E,n=Be;E=k=e,ut(e,h&&h.running&&h.sources.has(e)?e.tValue:e.value,n),h&&!h.running&&h.sources.has(e)&&queueMicrotask(()=>{D(()=>{h&&(h.running=!0),E=k=e,ut(e,e.tValue,n),E=k=null},!1)}),E=r,k=t}function ut(e,t,r){let n;try{n=e.fn(t)}catch(o){return e.pure&&(h&&h.running?(e.tState=V,e.tOwned&&e.tOwned.forEach(re),e.tOwned=void 0):(e.state=V,e.owned&&e.owned.forEach(re),e.owned=null)),e.updatedAt=r+1,xe(o)}(!e.updatedAt||e.updatedAt<=r)&&(e.updatedAt!=null&&"observers"in e?zt(e,n,!0):h&&h.running&&e.pure?(h.sources.add(e),e.tValue=n):e.value=n,e.updatedAt=r)}function we(e,t,r,n=V,o){const i={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:k,context:k?k.context:null,pure:r};return h&&h.running&&(i.state=0,i.tState=n),k===null||k!==Rt&&(h&&h.running&&k.pure?k.tOwned?k.tOwned.push(i):k.tOwned=[i]:k.owned?k.owned.push(i):k.owned=[i]),i}function Le(e){const t=h&&h.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===be)return Oe(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Be);){if(t&&h.disposed.has(e))return;(t?e.tState:e.state)&&r.push(e)}for(let n=r.length-1;n>=0;n--){if(e=r[n],t){let o=e,i=r[n+1];for(;(o=o.owner)&&o!==i;)if(h.disposed.has(o))return}if((t?e.tState:e.state)===V)de(e);else if((t?e.tState:e.state)===be){const o=z;z=null,D(()=>Oe(e,r[0]),!1),z=o}}}function D(e,t){if(z)return e();let r=!1;t||(z=[]),R?r=!0:R=[],Be++;try{const n=e();return Ar(r),n}catch(n){r||(R=null),z=null,xe(n)}}function Ar(e){if(z&&(Nt(z),z=null),e)return;let t;if(h){if(!h.promises.size&&!h.queue.size){const n=h.sources,o=h.disposed;R.push.apply(R,h.effects),t=h.resolve;for(const i of R)"tState"in i&&(i.state=i.tState),delete i.tState;h=null,D(()=>{for(const i of o)re(i);for(const i of n){if(i.value=i.tValue,i.owned)for(let s=0,a=i.owned.length;s<a;s++)re(i.owned[s]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}lt(!1)},!1)}else if(h.running){h.running=!1,h.effects.push.apply(h.effects,R),R=null,lt(!0);return}}const r=R;R=null,r.length&&D(()=>Ot(r),!1),t&&t()}function Nt(e){for(let t=0;t<e.length;t++)Le(e[t])}function Pr(e){let t,r=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[r++]=n:Le(n)}if(g.context){if(g.count){g.effects||(g.effects=[]),g.effects.push(...e.slice(0,r));return}else g.effects&&(e=[...g.effects,...e],r+=g.effects.length,delete g.effects);U()}for(t=0;t<r;t++)Le(e[t])}function Oe(e,t){const r=h&&h.running;r?e.tState=0:e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const i=r?o.tState:o.state;i===V?o!==t&&(!o.updatedAt||o.updatedAt<Be)&&Le(o):i===be&&Oe(o,t)}}}function jt(e){const t=h&&h.running;for(let r=0;r<e.observers.length;r+=1){const n=e.observers[r];(t?!n.tState:!n.state)&&(t?n.tState=be:n.state=be,n.pure?z.push(n):R.push(n),n.observers&&jt(n))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const r=e.sources.pop(),n=e.sourceSlots.pop(),o=r.observers;if(o&&o.length){const i=o.pop(),s=r.observerSlots.pop();n<o.length&&(i.sourceSlots[s]=n,o[n]=i,r.observerSlots[n]=s)}}if(h&&h.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)re(e.tOwned[t]);delete e.tOwned}Mt(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}h&&h.running?e.tState=0:e.state=0}function Mt(e,t){if(t||(e.tState=0,h.disposed.add(e)),e.owned)for(let r=0;r<e.owned.length;r++)Mt(e.owned[r])}function It(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function dt(e,t,r){try{for(const n of t)n(e)}catch(n){xe(n,r&&r.owner||null)}}function xe(e,t=k){const r=he&&t&&t.context&&t.context[he],n=It(e);if(!r)throw n;R?R.push({fn(){dt(n,r,t)},state:V}):dt(n,r,t)}function Ke(e){if(typeof e=="function"&&!e.length)return Ke(e());if(Array.isArray(e)){const t=[];for(let r=0;r<e.length;r++){const n=Ke(e[r]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}function Er(e,t){return function(n){let o;return F(()=>o=_(()=>(k.context={...k.context,[e]:n.value},rt(()=>n.children))),void 0),o}}let Ht=!1;function Cr(){Ht=!0}function v(e,t){if(Ht&&g.context){const r=g.context;U(mr());const n=_(()=>e(t||{}));return U(r),n}return _(()=>e(t||{}))}function Se(){return!0}const Xe={get(e,t,r){return t===Ee?r:e.get(t)},has(e,t){return t===Ee?!0:e.has(t)},set:Se,deleteProperty:Se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Se,deleteProperty:Se}},ownKeys(e){return e.keys()}};function Ve(e){return(e=typeof e=="function"?e():e)?e:{}}function Lr(){for(let e=0,t=this.length;e<t;++e){const r=this[e]();if(r!==void 0)return r}}function ie(...e){let t=!1;for(let i=0;i<e.length;i++){const s=e[i];t=t||!!s&&Ee in s,e[i]=typeof s=="function"?(t=!0,A(s)):s}if(t)return new Proxy({get(i){for(let s=e.length-1;s>=0;s--){const a=Ve(e[s])[i];if(a!==void 0)return a}},has(i){for(let s=e.length-1;s>=0;s--)if(i in Ve(e[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<e.length;s++)i.push(...Object.keys(Ve(e[s])));return[...new Set(i)]}},Xe);const r={},n={},o=new Set;for(let i=e.length-1;i>=0;i--){const s=e[i];if(!s)continue;const a=Object.getOwnPropertyNames(s);for(let c=0,d=a.length;c<d;c++){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(s,u);if(!o.has(u))f.get?(o.add(u),Object.defineProperty(r,u,{enumerable:!0,configurable:!0,get:Lr.bind(n[u]=[f.get.bind(s)])})):(f.value!==void 0&&o.add(u),r[u]=f.value);else{const m=n[u];m?f.get?m.push(f.get.bind(s)):f.value!==void 0&&m.push(()=>f.value):r[u]===void 0&&(r[u]=f.value)}}}return r}function _e(e,...t){if(Ee in e){const o=new Set(t.length>1?t.flat():t[0]),i=t.map(s=>new Proxy({get(a){return s.includes(a)?e[a]:void 0},has(a){return s.includes(a)&&a in e},keys(){return s.filter(a=>a in e)}},Xe));return i.push(new Proxy({get(s){return o.has(s)?void 0:e[s]},has(s){return o.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!o.has(s))}},Xe)),i}const r={},n=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,o),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let a=!1,c=0;for(const d of t)d.includes(o)&&(a=!0,s?n[c][o]=i.value:Object.defineProperty(n[c],o,i)),++c;a||(s?r[o]=i.value:Object.defineProperty(r,o,i))}return[...n,r]}function ee(e){let t,r;const n=o=>{const i=g.context;if(i){const[a,c]=j();g.count||(g.count=0),g.count++,(r||(r=e())).then(d=>{U(i),g.count--,c(()=>d.default),U()}),t=a}else if(!t){const[a]=vr(()=>(r||(r=e())).then(c=>c.default));t=a}let s;return A(()=>(s=t())&&_(()=>{if(!i)return s(o);const a=g.context;U(i);const c=s(o);return U(a),c}))};return n.preload=()=>r||((r=e()).then(o=>t=()=>o.default),r),n}let Or=0;function Rr(){const e=g.context;return e?`${e.id}${e.count++}`:`cl-${Or++}`}const Tr=e=>`Stale read from <${e}>.`;function nt(e){const t=e.keyed,r=A(()=>e.when,void 0,{equals:(n,o)=>t?n===o:!n==!o});return A(()=>{const n=r();if(n){const o=e.children;return typeof o=="function"&&o.length>0?_(()=>o(t?n:()=>{if(!_(r))throw Tr("Show");return e.when})):o}return e.fallback},void 0,void 0)}let le;function Ft(){le&&[...le].forEach(e=>e())}function Br(e){let t;g.context&&g.load&&(t=g.load(g.context.id+g.context.count));const[r,n]=j(t,void 0);return le||(le=new Set),le.add(n),ue(()=>le.delete(n)),A(()=>{let o;if(o=r()){const i=e.fallback;return typeof i=="function"&&i.length?_(()=>i(o,()=>n())):i}return wr(()=>e.children,n)},void 0,void 0)}const _r=ne();function zr(e){let t=0,r,n,o,i,s;const[a,c]=j(!1),d=Sr(),u={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:a,effects:[],resolved:!1},f=Bt();if(g.context&&g.load){const x=g.context.id+g.context.count;let $=g.load(x);if($&&(typeof $!="object"||$.status!=="success")&&(o=$),o&&o!=="$$f"){const[L,T]=j(void 0,{equals:!1});i=L,o.then(()=>{g.gather(x),U(n),T(),U()}).catch(B=>{if(B||g.done)return B&&(s=B),T()})}}const m=I(_r);m&&(r=m.register(u.inFallback));let y;return ue(()=>y&&y()),v(d.Provider,{value:u,get children(){return A(()=>{if(s)throw s;if(n=g.context,i)return i(),i=void 0;n&&o==="$$f"&&U();const x=A(()=>e.children);return A($=>{const L=u.inFallback(),{showContent:T=!0,showFallback:B=!0}=r?r():{};if((!L||o&&o!=="$$f")&&T)return u.resolved=!0,y&&y(),y=n=o=void 0,kr(u.effects),x();if(B)return y?$:et(W=>(y=W,n&&(U({id:n.id+"f",count:0}),n=void 0),e.fallback),f)})})}})}const Nr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],jr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Nr]),Mr=new Set(["innerHTML","textContent","innerText","children"]),Ir=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Hr=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Fr(e,t){const r=Hr[e];return typeof r=="object"?r[t]?r.$:void 0:r}const Dr=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Vr=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),qr={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ur(e,t,r){let n=r.length,o=t.length,i=n,s=0,a=0,c=t[o-1].nextSibling,d=null;for(;s<o||a<i;){if(t[s]===r[a]){s++,a++;continue}for(;t[o-1]===r[i-1];)o--,i--;if(o===s){const u=i<n?a?r[a-1].nextSibling:r[i-a]:c;for(;a<i;)e.insertBefore(r[a++],u)}else if(i===a)for(;s<o;)(!d||!d.has(t[s]))&&t[s].remove(),s++;else if(t[s]===r[i-1]&&r[a]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(r[a++],t[s++].nextSibling),e.insertBefore(r[--i],u),t[o]=r[i]}else{if(!d){d=new Map;let f=a;for(;f<i;)d.set(r[f],f++)}const u=d.get(t[s]);if(u!=null)if(a<u&&u<i){let f=s,m=1,y;for(;++f<o&&f<i&&!((y=d.get(t[f]))==null||y!==u+m);)m++;if(m>u-a){const x=t[s];for(;a<u;)e.insertBefore(r[a++],x)}else e.replaceChild(r[a++],t[s++])}else s++;else t[s++].remove()}}}const ft="_$DX_DELEGATE";function Wr(e,t,r,n={}){let o;return et(i=>{o=i,t===document?e():K(t,e(),t.firstChild?null:void 0,r)},n.owner),()=>{o(),t.textContent=""}}function C(e,t,r){let n;const o=()=>{const s=document.createElement("template");return s.innerHTML=e,r?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>_(()=>document.importNode(n||(n=o()),!0)):()=>(n||(n=o())).cloneNode(!0);return i.cloneNode=i,i}function $e(e,t=window.document){const r=t[ft]||(t[ft]=new Set);for(let n=0,o=e.length;n<o;n++){const i=e[n];r.has(i)||(r.add(i),t.addEventListener(i,qt))}}function Re(e,t,r){g.context||(r==null?e.removeAttribute(t):e.setAttribute(t,r))}function Gr(e,t,r,n){g.context||(n==null?e.removeAttributeNS(t,r):e.setAttributeNS(t,r,n))}function Dt(e,t){g.context||(t==null?e.removeAttribute("class"):e.className=t)}function Vt(e,t,r,n){if(n)Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r;else if(Array.isArray(r)){const o=r[0];e.addEventListener(t,r[0]=i=>o.call(e,r[1],i))}else e.addEventListener(t,r)}function Kr(e,t,r={}){const n=Object.keys(t||{}),o=Object.keys(r);let i,s;for(i=0,s=o.length;i<s;i++){const a=o[i];!a||a==="undefined"||t[a]||(gt(e,a,!1),delete r[a])}for(i=0,s=n.length;i<s;i++){const a=n[i],c=!!t[a];!a||a==="undefined"||r[a]===c||!c||(gt(e,a,!0),r[a]=c)}return r}function Xr(e,t,r){if(!t)return r?Re(e,"style"):t;const n=e.style;if(typeof t=="string")return n.cssText=t;typeof r=="string"&&(n.cssText=r=void 0),r||(r={}),t||(t={});let o,i;for(i in r)t[i]==null&&n.removeProperty(i),delete r[i];for(i in t)o=t[i],o!==r[i]&&(n.setProperty(i,o),r[i]=o);return r}function X(e,t={},r,n){const o={};return n||F(()=>o.children=ce(e,t.children,o.children)),F(()=>t.ref&&t.ref(e)),F(()=>Yr(e,t,r,!0,o,!0)),o}function K(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return ce(e,t,n,r);F(o=>ce(e,t(),o,r),n)}function Yr(e,t,r,n,o={},i=!1){t||(t={});for(const s in o)if(!(s in t)){if(s==="children")continue;o[s]=ht(e,s,null,o[s],r,i)}for(const s in t){if(s==="children"){n||ce(e,t.children);continue}const a=t[s];o[s]=ht(e,s,a,o[s],r,i)}}function Zr(e,t,r={}){g.completed=globalThis._$HY.completed,g.events=globalThis._$HY.events,g.load=o=>globalThis._$HY.r[o],g.has=o=>o in globalThis._$HY.r,g.gather=o=>mt(t,o),g.registry=new Map,g.context={id:r.renderId||"",count:0},mt(t,r.renderId);const n=Wr(e,t,[...t.childNodes],r);return g.context=null,n}function se(e){let t,r;return!g.context||!(t=g.registry.get(r=en()))?e():(g.completed&&g.completed.add(t),g.registry.delete(r),t)}function Qr(e){let t=e,r=0,n=[];if(g.context)for(;t;){if(t.nodeType===8){const o=t.nodeValue;if(o==="$")r++;else if(o==="/"){if(r===0)return[t,n];r--}}n.push(t),t=t.nextSibling}return[t,n]}function ze(){g.events&&!g.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=g;for(t.queued=!1;t.length;){const[r,n]=t[0];if(!e.has(r))return;qt(n),t.shift()}}),g.events.queued=!0)}function Jr(e){return e.toLowerCase().replace(/-([a-z])/g,(t,r)=>r.toUpperCase())}function gt(e,t,r){const n=t.trim().split(/\s+/);for(let o=0,i=n.length;o<i;o++)e.classList.toggle(n[o],r)}function ht(e,t,r,n,o,i){let s,a,c,d,u;if(t==="style")return Xr(e,r,n);if(t==="classList")return Kr(e,r,n);if(r===n)return n;if(t==="ref")i||r(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);n&&e.removeEventListener(f,n),r&&e.addEventListener(f,r)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);n&&e.removeEventListener(f,n,!0),r&&e.addEventListener(f,r,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),m=Dr.has(f);if(!m&&n){const y=Array.isArray(n)?n[0]:n;e.removeEventListener(f,y)}(m||r)&&(Vt(e,f,r,m),m&&$e([f]))}else if(t.slice(0,5)==="attr:")Re(e,t.slice(5),r);else if((u=t.slice(0,5)==="prop:")||(c=Mr.has(t))||!o&&((d=Fr(t,e.tagName))||(a=jr.has(t)))||(s=e.nodeName.includes("-"))){if(u)t=t.slice(5),a=!0;else if(g.context)return r;t==="class"||t==="className"?Dt(e,r):s&&!a&&!c?e[Jr(t)]=r:e[d||t]=r}else{const f=o&&t.indexOf(":")>-1&&qr[t.split(":")[0]];f?Gr(e,f,t,r):Re(e,Ir[t]||t,r)}return r}function qt(e){const t=`$$${e.type}`;let r=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==r&&Object.defineProperty(e,"target",{configurable:!0,value:r}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return r||document}}),g.registry&&!g.done&&(g.done=_$HY.done=!0);r;){const n=r[t];if(n&&!r.disabled){const o=r[`${t}Data`];if(o!==void 0?n.call(r,o,e):n.call(r,e),e.cancelBubble)return}r=r._$host||r.parentNode||r.host}}function ce(e,t,r,n,o){if(g.context){!r&&(r=[...e.childNodes]);let a=[];for(let c=0;c<r.length;c++){const d=r[c];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():a.push(d)}r=a}for(;typeof r=="function";)r=r();if(t===r)return r;const i=typeof t,s=n!==void 0;if(e=s&&r[0]&&r[0].parentNode||e,i==="string"||i==="number"){if(g.context)return r;if(i==="number"&&(t=t.toString()),s){let a=r[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),r=ae(e,r,n,a)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t}else if(t==null||i==="boolean"){if(g.context)return r;r=ae(e,r,n)}else{if(i==="function")return F(()=>{let a=t();for(;typeof a=="function";)a=a();r=ce(e,a,r,n)}),()=>r;if(Array.isArray(t)){const a=[],c=r&&Array.isArray(r);if(Ye(a,t,r,o))return F(()=>r=ce(e,a,r,n,!0)),()=>r;if(g.context){if(!a.length)return r;if(n===void 0)return[...e.childNodes];let d=a[0],u=[d];for(;(d=d.nextSibling)!==n;)u.push(d);return r=u}if(a.length===0){if(r=ae(e,r,n),s)return r}else c?r.length===0?pt(e,a,n):Ur(e,r,a):(r&&ae(e),pt(e,a));r=a}else if(t.nodeType){if(g.context&&t.parentNode)return r=s?[t]:t;if(Array.isArray(r)){if(s)return r=ae(e,r,n,t);ae(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function Ye(e,t,r,n){let o=!1;for(let i=0,s=t.length;i<s;i++){let a=t[i],c=r&&r[i],d;if(!(a==null||a===!0||a===!1))if((d=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Ye(e,a,c)||o;else if(d==="function")if(n){for(;typeof a=="function";)a=a();o=Ye(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||o}else e.push(a),o=!0;else{const u=String(a);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return o}function pt(e,t,r=null){for(let n=0,o=t.length;n<o;n++)e.insertBefore(t[n],r)}function ae(e,t,r,n){if(r===void 0)return e.textContent="";const o=n||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const a=t[s];if(o!==a){const c=a.parentNode===e;!i&&!s?c?e.replaceChild(o,a):e.insertBefore(o,r):c&&a.remove()}else i=!0}}else e.insertBefore(o,r);return[o]}function mt(e,t){const r=e.querySelectorAll("*[data-hk]");for(let n=0;n<r.length;n++){const o=r[n],i=o.getAttribute("data-hk");(!t||i.startsWith(t))&&!g.registry.has(i)&&g.registry.set(i,o)}}function en(){const e=g.context;return`${e.id}${e.count++}`}function tn(e){return g.context?void 0:e.children}function rn(){}const Ut=!1,nn="http://www.w3.org/2000/svg";function on(e,t=!1){return t?document.createElementNS(nn,e):document.createElement(e)}const sn=(...e)=>(Cr(),Zr(...e));function an(e){const[t,r]=_e(e,["component"]),n=A(()=>t.component);return A(()=>{const o=n();switch(typeof o){case"function":return _(()=>o(r));case"string":const i=Vr.has(o),s=g.context?se():on(o,i);return X(s,r,i),s}})}const ln="modulepreload",cn=function(e){return"/"+e},bt={},te=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=cn(i),i in bt)return;bt[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!n)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===i&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":ln,s||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),s)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};function un(e,t){e&&t&&sn(e,t)}const Wt=ne(),dn=["title","meta"],yt=[],vt=["name","http-equiv","content","charset","media"].concat(["property"]),wt=(e,t)=>{const r=Object.fromEntries(Object.entries(e.props).filter(([n])=>t.includes(n)).sort());return(Object.hasOwn(r,"name")||Object.hasOwn(r,"property"))&&(r.name=r.name||r.property,delete r.property),e.tag+JSON.stringify(r)};function fn(){if(!g.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,n=>n.parentNode.removeChild(n))}const e=new Map;function t(r){if(r.ref)return r.ref;let n=document.querySelector(`[data-sm="${r.id}"]`);return n?(n.tagName.toLowerCase()!==r.tag&&(n.parentNode&&n.parentNode.removeChild(n),n=document.createElement(r.tag)),n.removeAttribute("data-sm")):n=document.createElement(r.tag),n}return{addTag(r){if(dn.indexOf(r.tag)!==-1){const i=r.tag==="title"?yt:vt,s=wt(r,i);e.has(s)||e.set(s,[]);let a=e.get(s),c=a.length;a=[...a,r],e.set(s,a);let d=t(r);r.ref=d,X(d,r.props);let u=null;for(var n=c-1;n>=0;n--)if(a[n]!=null){u=a[n];break}return d.parentNode!=document.head&&document.head.appendChild(d),u&&u.ref&&document.head.removeChild(u.ref),c}let o=t(r);return r.ref=o,X(o,r.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(r,n){const o=r.tag==="title"?yt:vt,i=wt(r,o);if(r.ref){const s=e.get(i);if(s){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let a=n-1;a>=0;a--)s[a]!=null&&document.head.appendChild(s[a].ref)}s[n]=null,e.set(i,s)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}}}const gn=e=>{const t=fn();return v(Wt.Provider,{value:t,get children(){return e.children}})},ot=(e,t,r)=>(hn({tag:e,props:t,setting:r,id:Rr(),get name(){return t.name||t.property}}),null);function hn(e){let t;if(t=t||I(Wt),!t)throw new Error("<MetaProvider /> should be in the tree");F(()=>{const r=t.addTag(e);ue(()=>t.removeTag(e,r))})}const pn=e=>ot("title",e,{escape:!0,close:!0}),qe=e=>ot("meta",e),mn=e=>ot("link",e);function bn(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function yn([e,t],r,n){return[r?()=>r(e()):e,n?o=>t(n(o)):t]}function vn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function wn(e,t){const r=vn(`#${e}`);r?r.scrollIntoView():t&&window.scrollTo(0,0)}function xn(e,t,r,n){let o=!1;const i=a=>typeof a=="string"?{value:a}:a,s=yn(j(i(e()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!o&&t(a),a));return r&&ue(r((a=e())=>{o=!0,s[1](i(a)),o=!1})),{signal:s,utils:n}}function $n(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:j({value:""})};return e}function kn(){return xn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:r,state:n})=>{t?window.history.replaceState(n,"",e):window.history.pushState(n,"",e),wn(window.location.hash.slice(1),r)},e=>bn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Sn(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let r=!1;function n(o,i){if(r)return!(r=!1);const s={to:o,options:i,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const a of e)a.listener({...s,from:a.location,retry:c=>{c&&(r=!0),a.navigate(o,i)}});return!s.defaultPrevented}return{subscribe:t,confirm:n}}const An=/^(?:[a-z0-9]+:)?\/\//i,Pn=/^\/+|(\/)\/+$/g;function pe(e,t=!1){const r=e.replace(Pn,"$1");return r?t||/^[?#]/.test(r)?r:"/"+r:""}function Pe(e,t,r){if(An.test(t))return;const n=pe(e),o=r&&pe(r);let i="";return!o||t.startsWith("/")?i=n:o.toLowerCase().indexOf(n.toLowerCase())!==0?i=n+o:i=o,(i||"/")+pe(t,!i)}function En(e,t){if(e==null)throw new Error(t);return e}function Gt(e,t){return pe(e).replace(/\/*(\*.*)?$/g,"")+pe(t)}function Cn(e){const t={};return e.searchParams.forEach((r,n)=>{t[n]=r}),t}function Ln(e,t,r){const[n,o]=e.split("/*",2),i=n.split("/").filter(Boolean),s=i.length;return a=>{const c=a.split("/").filter(Boolean),d=c.length-s;if(d<0||d>0&&o===void 0&&!t)return null;const u={path:s?"":"/",params:{}},f=m=>r===void 0?void 0:r[m];for(let m=0;m<s;m++){const y=i[m],x=c[m],$=y[0]===":",L=$?y.slice(1):y;if($&&Ue(x,f(L)))u.params[L]=x;else if($||!Ue(x,y))return null;u.path+=`/${x}`}if(o){const m=d?c.slice(-d).join("/"):"";if(Ue(m,f(o)))u.params[o]=m;else return null}return u}}function Ue(e,t){const r=n=>n.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?r(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(r):t instanceof RegExp?t.test(e):!1}function On(e){const[t,r]=e.pattern.split("/*",2),n=t.split("/").filter(Boolean);return n.reduce((o,i)=>o+(i.startsWith(":")?2:3),n.length-(r===void 0?0:1))}function Kt(e){const t=new Map,r=Bt();return new Proxy({},{get(n,o){return t.has(o)||xr(r,()=>t.set(o,A(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Xt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const o=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)o.push(r+=t[1]),n=n.slice(t[0].length);return Xt(n).reduce((i,s)=>[...i,...o.map(a=>a+s)],[])}const Rn=100,Yt=ne(),Ne=ne(),Zt=()=>En(I(Yt),"Make sure your app is wrapped in a <Router />");let ye;const Qt=()=>ye||I(Ne)||Zt().base;function Tn(e,t="",r){const{component:n,data:o,children:i}=e,s=!i||Array.isArray(i)&&!i.length,a={key:e,element:n?()=>v(n,{}):()=>{const{element:c}=e;return c===void 0&&r?v(r,{}):c},preload:e.component?n.preload:e.preload,data:o};return Jt(e.path).reduce((c,d)=>{for(const u of Xt(d)){const f=Gt(t,u),m=s?f:f.split("/*",1)[0];c.push({...a,originalPath:u,pattern:m,matcher:Ln(m,!s,e.matchFilters)})}return c},[])}function Bn(e,t=0){return{routes:e,score:On(e[e.length-1])*1e4-t,matcher(r){const n=[];for(let o=e.length-1;o>=0;o--){const i=e[o],s=i.matcher(r);if(!s)return null;n.unshift({...s,route:i})}return n}}}function Jt(e){return Array.isArray(e)?e:[e]}function er(e,t="",r,n=[],o=[]){const i=Jt(e);for(let s=0,a=i.length;s<a;s++){const c=i[s];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const d=Tn(c,t,r);for(const u of d){n.push(u);const f=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!f)er(c.children,u.pattern,r,n,o);else{const m=Bn([...n],o.length);o.push(m)}n.pop()}}}return n.length?o:o.sort((s,a)=>a.score-s.score)}function _n(e,t){for(let r=0,n=e.length;r<n;r++){const o=e[r].matcher(t);if(o)return o}return[]}function zn(e,t){const r=new URL("http://sar"),n=A(c=>{const d=e();try{return new URL(d,r)}catch{return console.error(`Invalid path ${d}`),c}},r,{equals:(c,d)=>c.href===d.href}),o=A(()=>n().pathname),i=A(()=>n().search,!0),s=A(()=>n().hash),a=A(()=>"");return{get pathname(){return o()},get search(){return i()},get hash(){return s()},get state(){return t()},get key(){return a()},query:Kt(Tt(i,()=>Cn(n())))}}function Nn(e,t="",r,n){const{signal:[o,i],utils:s={}}=$n(e),a=s.parsePath||(P=>P),c=s.renderPath||(P=>P),d=s.beforeLeave||Sn(),u=Pe("",t),f=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&i({value:u,replace:!0,scroll:!1});const[m,y]=j(!1),x=async P=>{y(!0);try{await $r(P)}finally{y(!1)}},[$,L]=j(o().value),[T,B]=j(o().state),W=zn($,T),H=[],M={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(P){return Pe(u,P)}};if(r)try{ye=M,M.data=r({data:void 0,params:{},location:W,navigate:Y(M)})}finally{ye=void 0}function N(P,b,S){_(()=>{if(typeof b=="number"){b&&(s.go?d.confirm(b,S)&&s.go(b):console.warn("Router integration does not support relative routing"));return}const{replace:O,resolve:q,scroll:Q,state:fe}={replace:!1,resolve:!0,scroll:!0,...S},J=q?P.resolvePath(b):Pe("",b);if(J===void 0)throw new Error(`Path '${b}' is not a routable path`);if(H.length>=Rn)throw new Error("Too many redirects");const ge=$();if((J!==ge||fe!==T())&&!Ut){if(d.confirm(J,S)){const pr=H.push({value:ge,replace:O,scroll:Q,state:T()});x(()=>{L(J),B(fe),Ft()}).then(()=>{H.length===pr&&Z({value:J,state:fe})})}}})}function Y(P){return P=P||I(Ne)||M,(b,S)=>N(P,b,S)}function Z(P){const b=H[0];b&&((P.value!==b.value||P.state!==b.state)&&i({...P,replace:b.replace,scroll:b.scroll}),H.length=0)}F(()=>{const{value:P,state:b}=o();_(()=>{P!==$()&&x(()=>{L(P),B(b)})})});{let P=function(b){if(b.defaultPrevented||b.button!==0||b.metaKey||b.altKey||b.ctrlKey||b.shiftKey)return;const S=b.composedPath().find(ge=>ge instanceof Node&&ge.nodeName.toUpperCase()==="A");if(!S||!S.hasAttribute("link"))return;const O=S.href;if(S.target||!O&&!S.hasAttribute("state"))return;const q=(S.getAttribute("rel")||"").split(/\s+/);if(S.hasAttribute("download")||q&&q.includes("external"))return;const Q=new URL(O);if(Q.origin!==window.location.origin||u&&Q.pathname&&!Q.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const fe=a(Q.pathname+Q.search+Q.hash),J=S.getAttribute("state");b.preventDefault(),N(M,fe,{resolve:!1,replace:S.hasAttribute("replace"),scroll:!S.hasAttribute("noscroll"),state:J&&JSON.parse(J)})};$e(["click"]),document.addEventListener("click",P),ue(()=>document.removeEventListener("click",P))}return{base:M,out:f,location:W,isRouting:m,renderPath:c,parsePath:a,navigatorFactory:Y,beforeLeave:d}}function jn(e,t,r,n,o){const{base:i,location:s,navigatorFactory:a}=e,{pattern:c,element:d,preload:u,data:f}=n().route,m=A(()=>n().path);u&&u();const y={parent:t,pattern:c,get child(){return r()},path:m,params:o,data:t.data,outlet:d,resolvePath(x){return Pe(i.path(),x,m())}};if(f)try{ye=y,y.data=f({data:t.data,params:o,location:s,navigate:a(y)})}finally{ye=void 0}return y}const Mn=e=>{const{source:t,url:r,base:n,data:o,out:i}=e,s=t||kn(),a=Nn(s,n,o);return v(Yt.Provider,{value:a,get children(){return e.children}})},In=e=>{const t=Zt(),r=Qt(),n=rt(()=>e.children),o=A(()=>er(n(),Gt(r.pattern,e.base||""),Hn)),i=A(()=>_n(o(),t.location.pathname)),s=Kt(()=>{const u=i(),f={};for(let m=0;m<u.length;m++)Object.assign(f,u[m].params);return f});t.out&&t.out.matches.push(i().map(({route:u,path:f,params:m})=>({originalPath:u.originalPath,pattern:u.pattern,path:f,params:m})));const a=[];let c;const d=A(Tt(i,(u,f,m)=>{let y=f&&u.length===f.length;const x=[];for(let $=0,L=u.length;$<L;$++){const T=f&&f[$],B=u[$];m&&T&&B.route.key===T.route.key?x[$]=m[$]:(y=!1,a[$]&&a[$](),et(W=>{a[$]=W,x[$]=jn(t,x[$-1]||r,()=>d()[$+1],()=>i()[$],s)}))}return a.splice(u.length).forEach($=>$()),m&&y?m:(c=x[0],x)}));return v(nt,{get when(){return d()&&c},keyed:!0,children:u=>v(Ne.Provider,{value:u,get children(){return u.outlet()}})})},Hn=()=>{const e=Qt();return v(nt,{get when(){return e.child},keyed:!0,children:t=>v(Ne.Provider,{value:t,get children(){return t.outlet()}})})},Fn=[{component:ee(()=>te(()=>import("./index-8f1abe46.js"),["assets/index-8f1abe46.js","assets/GooglePlayIcon-3e3dcbb0.js","assets/PageContainer-4902de9e.js"])),path:"/apps/123mind/"},{component:ee(()=>te(()=>import("./index-7a8bfea6.js"),["assets/index-7a8bfea6.js","assets/GooglePlayIcon-3e3dcbb0.js","assets/PageContainer-4902de9e.js"])),path:"/apps/easytodo/"},{component:ee(()=>te(()=>import("./index-56f0dd5b.js"),["assets/index-56f0dd5b.js","assets/PageContainer-4902de9e.js","assets/GooglePlayIcon-3e3dcbb0.js"])),path:"/apps/sketchable/"},{component:ee(()=>te(()=>import("./index-76a27596.js"),["assets/index-76a27596.js","assets/GooglePlayIcon-3e3dcbb0.js","assets/PageContainer-4902de9e.js"])),path:"/apps/timeline/"},{component:ee(()=>te(()=>import("./delete-data-request-f7727631.js"),["assets/delete-data-request-f7727631.js","assets/PageContainer-4902de9e.js"])),path:"/delete-data-request"},{component:ee(()=>te(()=>import("./index-efef42ee.js"),["assets/index-efef42ee.js","assets/PageContainer-4902de9e.js"])),path:"/"},{component:ee(()=>te(()=>import("./privacy-3454f7df.js"),["assets/privacy-3454f7df.js","assets/PageContainer-4902de9e.js"])),path:"/privacy"},{component:ee(()=>te(()=>import("./terms-1369fd8f.js"),["assets/terms-1369fd8f.js","assets/PageContainer-4902de9e.js"])),path:"/terms"}],Dn=()=>Fn,tr="$FETCH",rr=ne({$type:tr}),Vn=()=>I(rr),qn=In,Un=C('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre>');function Wn(e){return v(Br,{fallback:(t,r)=>v(nt,{get when(){return!e.fallback},get fallback(){return A(()=>!!e.fallback)()&&e.fallback(t,r)},get children(){return v(Gn,{error:t})}}),get children(){return e.children}})}function Gn(e){return tt(()=>console.error(e.error)),console.log(e.error),(()=>{const t=se(Un),r=t.firstChild,n=r.firstChild,o=n.nextSibling,i=o.nextSibling;return t.style.setProperty("padding","16px"),r.style.setProperty("background-color","rgba(252, 165, 165)"),r.style.setProperty("color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("overflow","scroll"),r.style.setProperty("padding","16px"),r.style.setProperty("margin-bottom","8px"),n.style.setProperty("font-weight","bold"),K(n,()=>e.error.message),Vt(o,"click",Ft,!0),o.style.setProperty("color","rgba(252, 165, 165)"),o.style.setProperty("background-color","rgb(153, 27, 27)"),o.style.setProperty("border-radius","5px"),o.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),K(i,()=>e.error.stack),ze(),t})()}$e(["click"]);const Kn=!1,Xn=!1;function Yn(){return Xn}function Zn(){return Kn}function Qn(){return Vn(),[v(rn,{}),v(tn,{get children(){return[v(Yn,{}),A(()=>Ut)]}})]}function Jn(){return[v(Zn,{}),v(Qn,{})]}function eo(e){return X(document.documentElement,e,!1,!0),e.children}function to(e){return X(document.head,e,!1,!0),e.children}function ro(e){{let t=rt(()=>e.children);return X(document.body,e,!1,!0),K(document.body,()=>{let r=t();if(r){if(Array.isArray(r)){let n=r.filter(o=>!!o);return n.length?n:null}return r}return null},null,[...document.body.childNodes]),document.body}}function no(e,t,r,n){var o={configurable:!0,enumerable:!0};return o[e]=n,Object.defineProperty(t,r,o)}function xt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function We(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xt(Object(r),!0).forEach(function(n){oo(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ve(e){return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function oo(e,t,r){return(t=function(n){var o=function(i,s){if(typeof i!="object"||i===null)return i;var a=i[Symbol.toPrimitive];if(a!==void 0){var c=a.call(i,s||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(i)}(n,"string");return typeof o=="symbol"?o:String(o)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function io(e){return function(t){if(Array.isArray(t))return Ze(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||nr(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function nr(e,t){if(e){if(typeof e=="string")return Ze(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ze(e,t):void 0}}function Ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ke(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}var so={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function or(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var ao=/[A-Z]|^ms/g,lo=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ir=function(e){return e.charCodeAt(1)===45},$t=function(e){return e!=null&&typeof e!="boolean"},Ge=or(function(e){return ir(e)?e:e.replace(ao,"-$&").toLowerCase()}),kt=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(lo,function(r,n,o){return G={name:n,styles:o,next:G},n})}return so[e]===1||ir(e)||typeof t!="number"||t===0?t:t+"px"};function me(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(ve(r)){case"boolean":return"";case"object":if(r.anim===1)return G={name:r.name,styles:r.styles,next:G},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)G={name:n.name,styles:n.styles,next:G},n=n.next;var o=r.styles+";";return o}return function(c,d,u){var f="";if(Array.isArray(u))for(var m=0;m<u.length;m++)f+=me(c,d,u[m])+";";else for(var y in u){var x=u[y];if(ve(x)!=="object")d!=null&&d[x]!==void 0?f+=y+"{"+d[x]+"}":$t(x)&&(f+=Ge(y)+":"+kt(y,x)+";");else if(!Array.isArray(x)||typeof x[0]!="string"||d!=null&&d[x[0]]!==void 0){var $=me(c,d,x);switch(y){case"animation":case"animationName":f+=Ge(y)+":"+$+";";break;default:f+=y+"{"+$+"}"}}else for(var L=0;L<x.length;L++)$t(x[L])&&(f+=Ge(y)+":"+kt(y,x[L])+";")}return f}(e,t,r);case"function":if(e!==void 0){var i=G,s=r(e);return G=i,me(e,t,s)}break}if(t==null)return r;var a=t[r];return a!==void 0?a:r}var G,St=/label:\s*([^\s;\n{]+)\s*(;|$)/g,je=function(e,t,r){if(e.length===1&&ve(e[0])==="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";G=void 0;var i=e[0];i==null||i.raw===void 0?(n=!1,o+=me(r,t,i)):o+=i[0];for(var s=1;s<e.length;s++)o+=me(r,t,e[s]),n&&(o+=i[s]);St.lastIndex=0;for(var a,c="";(a=St.exec(o))!==null;)c+="-"+a[1];var d=ke(o)+c;return{name:d,styles:o,next:G}},Qe=function(e){return e[e.Assets=0]="Assets",e[e.Sibling=1]="Sibling",e}({}),Me=ne({classNamePattern:function(e){return"c"+e},keyframesPattern:function(e){return"k"+e},injectionStrategy:Qe.Assets});C("<style>");function Ie(e,t,r){var n;F(function(o){var i=t(),s=e();return(n=document.head.querySelector('[data-style-id="'.concat(i,'"]')))==null?((n=document.createElement("style")).innerHTML=s,n.setAttribute("data-style-id",i),At(n),n.nonce=r,document.head.appendChild(n)):At(n),o!=null&&o.element!=null&&Pt(o.element),{element:n}}),ue(function(){n&&Pt(n)})}function At(e){var t=e.getAttribute("data-server-style");if(t==null||t==""){var r=Number(e.getAttribute("data-uses"));r++,e.setAttribute("data-uses",r.toString())}}function Pt(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=e.getAttribute("data-server-style");if(r==null||r==""){var n=Number(e.getAttribute("data-uses"));--n<=0?t?e.remove():e.setAttribute("data-uses","0"):e.setAttribute("data-uses",n.toString())}}var co={},uo=ne(function(){return co});function He(){return I(uo)()}function fo(){for(var e=I(Me),t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=je(r,void 0,{get theme(){return He()}}),i=ke(o.styles),s=e.keyframesPattern(i),a="@keyframes ".concat(s,"{").concat(o.styles,"}"),c=function(){return Ie(function(){return a},function(){return i},e.nonce),null};return c.__evaluate=s,c.animationName=s,c.toString=function(){return s},c}function it(){for(var e=I(Me),t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=je(r,void 0,{get theme(){return He()}}),i=ke(o.styles),s=e.classNamePattern(i),a=".".concat(s,"{").concat(o.styles,"}"),c=function(){return Ie(function(){return a},function(){return i},e.nonce),s};return c.toString=function(){return".".concat(s)},c.__evaluate=".".concat(s),c.className=s,c}var go=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;function ho(){return!1}var po=or(function(e){return go.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),mo=function(e){return e!=="theme"},Et=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?po:mo},Ct=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(i){return e.__emotion_forwardProp(i)&&o(i)}:o}return typeof n!="function"&&r&&(n=e.__emotion_forwardProp),n};const bo=C("<style>");function yo(e,t){var r={};for(var n in e)t!=n&&(r[n]=e[n]);return r}C("<style>");function vo(e){var t,r=[],n=function(i,s){var a=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!a){if(Array.isArray(i)||(a=nr(i))||s&&i&&typeof i.length=="number"){a&&(i=a);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(y){throw y},f:d}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,f=!0,m=!1;return{s:function(){a=a.call(i)},n:function(){var y=a.next();return f=y.done,y},e:function(y){m=!0,u=y},f:function(){try{f||a.return==null||a.return()}finally{if(m)throw u}}}}(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.__evaluate!=null?r.push(o.__evaluate):r.push(o)}}catch(i){n.e(i)}finally{n.f()}return r}function Fe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){var n=I(Me),o=A(function(){return je(vo(t),void 0,{get theme(){return He()}})})(),i=ke(o.styles),s=o.styles;return Ie(function(){return s},function(){return i},n.nonce),null}}var p=function e(t,r){var n,o,i=t.__emotion_base||t;r!==void 0&&(n=r.label,o=r.target);var s=Ct(t,r,!0),a=s||Et(i);return function(){var c=t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];n!==void 0&&c.push("label:".concat(n,";"));for(var d=arguments.length,u=new Array(d),f=0;f<d;f++)u[f]=arguments[f];if(u[0]==null||u[0].raw===void 0)c.push.apply(c,u);else{c.push(u[0][0]);for(var m=u.length,y=1;y<m;y++)c.push(u[y],u[0][y])}var x=function($){var L=i,T=A(function(){var b=ie($,{get theme(){return He()}}),S=je(c,void 0,b);return{hashName:ke(S.styles),styles:S.styles}}),B=$,W=s===void 0?Et(L):a;for(var H in $)if(!W(H))try{delete B[H]}catch{B=yo(B,H)}var M,N=I(Me),Y=function(){return N.classNamePattern(T().hashName)},Z=function(){var b=T();return".".concat(N.classNamePattern(b.hashName),"{").concat(b.styles,"}")},P=v(an,ie({component:L},B,no("get",{},"class",function(){return A(function(){return!(!$.class||$.class=="")})()?"".concat(Y()," ").concat($.class):Y()})));switch(N.injectionStrategy){case Qe.Assets:return Ie(Z,function(){return T().hashName},N.nonce),P;case Qe.Sibling:return[(M=se(bo),K(M,Z),F(function(){return Re(M,"nonce",N.nonce)}),M),P]}};return x.__emotion_base=i,x.__emotion_styles=c,x.__emotion_forwardProp=s,Object.defineProperty(x,"toString",{value:function(){return o===void 0&&ho()?"NO_COMPONENT_SELECTOR":".".concat(o)}}),x.withComponent=function($,L){return e($,We(We(We({},r),L),{},{shouldForwardProp:Ct(x,L,!0)})).apply(void 0,io(c))},x}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){return p[e]=p(e)});C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>alert</title><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z">');C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z">');C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>information-box-outline</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z">');const wo=C('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><title>chevron-up</title><path d=M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z>');function xo(e){return(()=>{const t=se(wo);return X(t,e,!0,!0),ze(),t})()}C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>check</title><path d=M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z>');C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>close</title><path d=M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z>');C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z">');C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z">');class st{unit="px";step=5;values={xs:0,sm:600,md:900,lg:1200,xl:1536};up=t=>`@media (min-width:${t instanceof Number?t:this.values[t]}${this.unit})`;down=t=>`@media (max-width:${(t instanceof Number?t:this.values[t])-this.step/100}${this.unit})`;between=(t,r)=>{const n=t instanceof Number?t:this.values[t],o=r instanceof Number?r:this.values[r];return`@media (min-width:${n}${this.unit}) and (max-width:${o}${this.unit})`}}const w={border:{smRadius:"a0",mdRadius:"a1",lgRadius:"a2"},font:{primary:"a3",secondary:"a4"},animation:{timing:{ease:"a5",slider:"a6",slideStop:"a7",timingThrottle:"a8"}},colors:{success:"a9",onSuccess:"b0",warning:"b1",onWarning:"b2",error:"b3",onError:"b4",info:"b5",onInfo:"b6",primary:"b7",primary100:"b8",primary200:"b9",primary300:"c0",primary400:"c1",primary500:"c2",accent:"c3",accent100:"c4",accent200:"c5",accent300:"c6",accent400:"c7",accent500:"c8",bg:"c9",bg100:"d0",bg200:"d1",bg300:"d2",bg400:"d3",bg500:"d4",onBg:"d5",onBg100:"d6",onBg200:"d7",onBg300:"d8",onBg400:"d9",onBg500:"e0",backdrop:"e1"}};function Ae(e,t,r){let n="";for(let o=0;o<e.length;o++){const i=e[o];o>0&&(n+=`
`);const s=t[i];if(s==null)throw new Error(`No CSS Variable key found for theme key ${i.toString()}`);const a=r[i];if(a==null)throw new Error(`No CSS Variable value found for theme key ${i.toString()} && mapped key ${s}`);n+=`--${s}:${a};`}return n}function sr(e){return[Ae(Object.keys(w.border),w.border,e.border),Ae(Object.keys(w.font),w.font,e.font),Ae(Object.keys(w.animation.timing),w.animation.timing,e.animation.timing),Ae(Object.keys(w.colors),w.colors,e.colors)].join(`
`)}function $o(e){return{border:{smRadius:`var(--${w.border.smRadius})`,mdRadius:`var(--${w.border.mdRadius})`,lgRadius:`var(--${w.border.lgRadius})`},font:{primary:`var(--${w.font.primary})`,secondary:`var(--${w.font.secondary})`},animation:{timing:{ease:`var(--${w.animation.timing.ease})`,slider:`var(--${w.animation.timing.slider})`,timingThrottle:`var(--${w.animation.timing.timingThrottle})`,slideStop:`var(--${w.animation.timing.slideStop})`}},colors:{accent:`var(--${w.colors.accent})`,accent100:`var(--${w.colors.accent100})`,accent200:`var(--${w.colors.accent200})`,accent300:`var(--${w.colors.accent300})`,accent400:`var(--${w.colors.accent400})`,accent500:`var(--${w.colors.accent500})`,backdrop:`var(--${w.colors.backdrop})`,bg:`var(--${w.colors.bg})`,bg100:`var(--${w.colors.bg100})`,bg200:`var(--${w.colors.bg200})`,bg300:`var(--${w.colors.bg300})`,bg400:`var(--${w.colors.bg400})`,bg500:`var(--${w.colors.bg500})`,error:`var(--${w.colors.error})`,info:`var(--${w.colors.info})`,onBg:`var(--${w.colors.onBg})`,onBg100:`var(--${w.colors.onBg100})`,onBg200:`var(--${w.colors.onBg200})`,onBg300:`var(--${w.colors.onBg300})`,onBg400:`var(--${w.colors.onBg400})`,onBg500:`var(--${w.colors.onBg500})`,onError:`var(--${w.colors.onError})`,onInfo:`var(--${w.colors.onInfo})`,onSuccess:`var(--${w.colors.onSuccess})`,onWarning:`var(--${w.colors.onWarning})`,primary:`var(--${w.colors.primary})`,primary100:`var(--${w.colors.primary100})`,primary200:`var(--${w.colors.primary200})`,primary300:`var(--${w.colors.primary300})`,primary400:`var(--${w.colors.primary400})`,primary500:`var(--${w.colors.primary500})`,success:`var(--${w.colors.success})`,warning:`var(--${w.colors.warning})`},breakpoints:e}}const l=$o(new st),ko=p("div",{shouldForwardProp:e=>e!="size"&&e!="fill"})`

    fill: ${e=>e.fill||l.colors.onBg};
    width: ${e=>1.5+(e.size||0)}em;
    height: ${e=>1.5+(e.size||0)}em;

    & > svg {
        width: ${e=>1.5+(e.size||0)}em;
        height: ${e=>1.5+(e.size||0)}em;
        fill: ${e=>e.fill||l.colors.onBg};
    }
`;C("<div><!$><!/><!$><!/>");(function(e){return e.Info="info",e.Warning="warning",e.Error="error",e.Success="success",e})({});const So=p("div",{shouldForwardProp:e=>e!="width"&&e!="height"})`
    width: ${e=>e.width||"100%"};
    height: ${e=>e.height||"100%"};
`;p("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;const ei=p("p")`

`,ti=p("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;(function(e){return e[e.TopLeft=0]="TopLeft",e[e.TopCenter=1]="TopCenter",e[e.TopRight=2]="TopRight",e[e.CenterLeft=3]="CenterLeft",e[e.Center=4]="Center",e[e.CenterRight=5]="CenterRight",e[e.BottomLeft=6]="BottomLeft",e[e.BottomCenter=7]="BottomCenter",e[e.BottomRight=8]="BottomRight",e})({});p.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;const ar=p("div",{shouldForwardProp:e=>e!="gap"&&e!="wrap"&&e!="alignment"})`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${e=>e.alignment!=null?"align-items:"+e.alignment+";":""}
    ${e=>e.gap!=null?"gap:"+e.gap+";":null}
    ${e=>e.wrap?"flex-wrap : wrap;":null}
`,Ao=C("<div>"),Po=p(ar)`
  width : 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,Eo=p("div")`
  margin-right: 1rem;
`,Co=p("h3")`
  flex : 1;
`;function ri(e){return v(Po,ie(()=>_e(e,["navIcon","title","actions","children"])[1],{get children(){return[A(()=>A(()=>!!e.navIcon)()?v(Eo,{style:{"margin-right":"1rem"},get children(){return e.navIcon()}}):v(So,{width:"0.75em"})),v(Co,{get children(){return e.title}}),(()=>{const t=se(Ao);return K(t,()=>e.actions),t})()]}}))}C("<div>");p("div")`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    &:after {
        content: "";
        background: ${l.colors.bg};
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

`;const ni=p("button",{shouldForwardProp:e=>e!="size"})`

    box-sizing: border-box;
    padding: ${e=>.8+(e.size?.25*e.size:0)}em ${e=>.8+(e.size?.5*e.size:0)}em;
    background: ${l.colors.primary};
    border-radius: ${l.border.lgRadius};
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:disabled {
        background: ${l.colors.bg500};
        cursor: default;
    }

    &:hover:not(&:disabled) {
        background: ${l.colors.primary100};
    }

    &:active:not(&:disabled) {
        background: ${l.colors.primary200};
    }

`,Lo=p("div")`
    border-radius: ${l.border.mdRadius};
    background: ${l.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`;p(Lo)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${l.colors.bg300};
    }
    
    &:active {
        background: ${l.colors.bg400};
    }

`;const Oo=p("span",{shouldForwardProp:e=>e!="color"})`
  font-family: ${l.font.secondary};
  color: ${e=>l.colors[e.color||"onBg"]};
`;p(Oo)`
  font-size: 0.8rem;
`;const at=p("div",{shouldForwardProp:e=>e!="gap"&&e!="wrap"})`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${e=>e.gap!=null?"gap:"+e.gap+";":null}
    ${e=>e.wrap?"flex-wrap : wrap;":null}
`;p("input",{shouldForwardProp:e=>e!="size"})`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: ${e=>1.15+(e.size?.3*e.size:0)}em;
  height: ${e=>1.15+(e.size?.3*e.size:0)}em;
  border: ${e=>.15+.05*(e.size||0)}em solid ${l.colors.primary};
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: ${e=>.65+.2*(e.size||0)}em;
    height: ${e=>.65+.2*(e.size||0)}em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 80ms transform ease-in-out;
    box-shadow: inset 1em 1em ${l.colors.onBg300};
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(0.5px, 0.05em) solid ${l.colors.onBg500};
    outline-offset: 0.1em;
  }

  &:disabled {
    border: 0.15em solid ${l.colors.bg500};
    color: ${l.colors.bg200};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

`;const oi=p("div",{shouldForwardProp:e=>!["size","disableAutoFill"].includes(e)})`

    width: ${e=>2.5+(e.size||0)}em;
    height: ${e=>2.5+(e.size||0)}em;
    border-radius: 50%;

    padding : 0.5em;
    box-sizing : border-box;
    
    ${e=>e.disableAutoFill?"":`fill:${l.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+.3*(e.size||0)}em;
        height: ${e=>1.5+.3*(e.size||0)}em;
    }

    &:hover {
        background: ${l.colors.bg300};
    }

    &:active {
        background: ${l.colors.bg400};
    }

`;let Te=function(e){return e.Dark="dark",e.Light="light",e}({});const lr=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?Te.Dark:Te.Light;function Ro(e){const t=window.matchMedia("(prefers-color-scheme: dark)"),r=()=>{t.matches?e(Te.Dark):e(Te.Light)};return t.addEventListener("change",r),()=>t.removeEventListener("change",r)}let ii=function(e){return e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large",e}({});const cr={primary:'"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',secondary:'"Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'},ur={smRadius:"0.25em",mdRadius:"0.5em",lgRadius:"0.75em"},dr={timing:{ease:"cubic-bezier(0.25, 0.1, 0.25, 1)",slider:"cubic-bezier(0.05, 0.95, 0.35, 1.05)",slideStop:"cubic-bezier(0.05, 0.05, 0, 1)",timingThrottle:"cubic-bezier(0.95, 0, 0.95, 0.25)"}},To={border:ur,font:cr,breakpoints:new st,animation:dr,colors:{success:"#145222",onSuccess:"#adebbb",warning:"#624904",onWarning:"#fbe29d",error:"#640202",onError:"#fdb4b4",info:"#133353",onInfo:"#99c9ff",primary:"#119c8c",primary100:"#14b8a5",primary200:"#17d3bd",primary300:"#23e7d0",primary400:"#3fe9d5",primary500:"#5aeddc",accent:"rgb(59,130,246)",accent100:"rgb(89,150,247)",accent200:"rgb(119,168,249)",accent300:"rgb(148,187,250)",accent400:"rgb(177,206,251)",accent500:"rgb(206,224,253)",bg:"#121212",bg100:"#1e1e1e",bg200:"#2c2c2c",bg300:"#3a3a3a",bg400:"#464646",bg500:"#525252",onBg:"rgb(255,255,255)",onBg100:"rgb(237,237,237)",onBg200:"rgb(219,219,219)",onBg300:"rgb(201,201,201)",onBg400:"rgb(184,184,184)",onBg500:"rgb(166,166,166)",backdrop:"rgba(15, 23, 42, 1)"}},Bo={font:cr,border:ur,breakpoints:new st,animation:dr,colors:{success:"#84e19a",onSuccess:"#0a2911",warning:"#f9d36c",onWarning:"#312402",error:"#fc6969",onError:"#4b0202",info:"#82b3e3",onInfo:"#001833",primary:"rgb(23,207,185)",primary100:"rgb(18,161,144)",primary200:"rgb(15,138,123)",primary300:"rgb(13,115,103)",primary400:"rgb(10,92,82)",primary500:"rgb(8,69,62)",accent:"rgb(59,130,246)",accent100:"rgb(26,110,244)",accent200:"rgb(11,92,224)",accent300:"rgb(9,78,190)",accent400:"rgb(7,64,156)",accent500:"rgb(6,50,122)",bg:"rgb(246,246,247)",bg100:"rgb(225,225,229)",bg200:"rgb(204,204,209)",bg300:"rgb(182,182,190)",bg400:"rgb(160,160,171)",bg500:"rgb(139,139,152)",onBg:"rgb(0,0,0)",onBg100:"rgb(23,23,23)",onBg200:"rgb(46,46,46)",onBg300:"rgb(69,69,69)",onBg400:"rgb(92,92,92)",onBg500:"rgb(115,115,115)",backdrop:"rgba(0, 0, 0, 0.5)"}},_o=Fe`
    :root * {
        font-family: ${l.font.secondary};
    }

    a {
        color: #0060FE;
    }

    a:hover {
        color: #266bd9;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${l.font.primary};
    }

    p {
        line-height: 1.75rem;
        letter-spacing: 0.05rem;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background: ${l.colors.onBg500};
        color: ${l.colors.bg100};
        border-radius: ${l.border.smRadius};
        padding: 1px 3px;
    }
`;function zo(e){const t=A(()=>sr(To)),r=Fe`${e.containerCssSelector} {
        ${t()}
    }`;return v(r,{})}function No(e){const t=A(()=>sr(Bo)),r=Fe`${e.containerCssSelector} {
        ${t()}
    }`;return v(r,{})}const Je="anique-theme-key";function si(e,t,r){(t==null||t)&&e==lr()?localStorage.removeItem(r||Je):localStorage.setItem(r||Je,e)}function jo(e){tt(()=>{const r=localStorage.getItem(e.localStorageKey||Je);r==null?(document.documentElement.className=lr(),(e.trackSystemTheme==null||e.trackSystemTheme)&&Ro(n=>{document.documentElement.className=n})):document.documentElement.className=r});const t=Fe`
        :root.dark {
            color-scheme: dark;
        }

        :root.light {
            color-scheme: light;
        }
    `;return[v(No,{containerCssSelector:".light"}),v(zo,{containerCssSelector:".dark"}),v(_o,{}),v(t,{})]}C("<h3>");C("<div>");p(at)`
    background: ${l.colors.bg200};
    padding: 1em;
    border-radius: ${l.border.lgRadius};
`;p("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 280px;
    box-sizing: border-box;
    padding: 1.5em;
`;p("div",{shouldForwardProp:e=>e!="isActive"})`
    width: 100%;
    box-sizing: border-box;
    padding: 0.6em 0.5em 0.6em 1em;
    border-radius: 999px;
    cursor: pointer;
    font-family: ${l.font.secondary};
    color: ${l.colors.onBg};
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 1em;
    text-decoration : none;

    ${e=>e.isActive&&"background : "+l.colors.bg200+";"}
    &:hover {
        background: ${l.colors.primary};
        color: ${l.colors.onBg};
        text-decoration : none;
    }
`;const Mo=p("h4")`
    box-sizing: border-box;
    display: inline-block;
    padding: 0.6em 0.5em 0.6em 1em;
    margin: 0.25em 0 0.25em 0;
    font-family: ${l.font.primary};
    color : ${l.colors.onBg200};
`;p(e=>v(Mo,ie({get children(){return e.title}},()=>_e(e,["title"])[1])))`
`;const Io=C("<div><div><div></div><!$><!/></div><div>");C("<div class=exposed>");C("<div class=content>");const Ho=it`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;

    background: ${l.colors.bg200};
    padding: 1.25em;
    gap: 0.5em;
    box-sizing: border-box;
    border-radius: ${l.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

    & .icon {
        transition: rotate 500ms;
    }

    &.expanded .icon {
        rotate: 180deg;
    }

`,Fo=it`
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > :first-of-type {
        flex: 1;
    }
`;function ai(e){let t=e.expanded,r=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const n=j(e.defaultExpanded??!0);t=n[0],r=n[1]}return(()=>{const n=se(Io),o=n.firstChild,i=o.firstChild,s=i.nextSibling,[a,c]=Qr(s.nextSibling),d=o.nextSibling;return X(n,ie(()=>_e(e,["title","children","class","defaultExpanded"])[1],{get class(){return Ho()+(t()?" expanded":"")+(e.class?" "+e.class:"")}}),!1,!0),o.$$click=()=>r(!t()),K(i,()=>e.title),K(o,(()=>{const u=A(()=>!!(e.showIcon??1));return()=>u()&&v(ko,{class:"icon",get children(){return v(xo,{})}})})(),a,c),d.style.setProperty("overflow","hidden"),K(d,()=>e.children),F(()=>Dt(o,Fo())),ze(),n})()}p("div",{shouldForwardProp:e=>e!="timeMillis"})`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows ${e=>e.timeMillis||500}ms;

    box-sizing: border-box;
    border-radius: ${l.border.smRadius};

    & .content {
        overflow: hidden;
    }

    &.expanded {
        grid-template-rows: min-content 1fr;
    }

`;$e(["click"]);const fr=p("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${l.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${l.colors.primary100};
    }

    &:active {
        background: ${l.colors.primary200};
    }
`;p(fr,{shouldForwardProp:e=>e!="size"})`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`;p(fr,{shouldForwardProp:e=>e!="size"})`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+.5*(e.size||0)}em;
    width: max-content;
    height: ${e=>3+.25*(e.size||0)}em;
    border-radius: 99em;
`;const li=p("h1")`
    font-weight: 100;
    font-size : ${e=>3+(e.size?e.size:0)}rem;
`,Do=p("select")`
    border: none;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    padding: 0.2em 0.8em 0.2em 0.2em;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
        display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
    
    &:disabled {
        cursor: not-allowed;
        background-color: ${l.colors.onBg400};
        background-image: linear-gradient(to top, ${l.colors.onBg300}, ${l.colors.onBg400} 33%);
        color : ${l.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${l.colors.bg100};
    }
    
`;p(Do)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${l.border.smRadius};
`;p("input",{shouldForwardProp:e=>e!="size"})`

    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${e=>1.15+(e.size?.3*e.size:0)}em;
    height: ${e=>1.15+(e.size?.3*e.size:0)}em;
    border: ${e=>.15+.05*(e.size||0)}em solid ${l.colors.primary};
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;


    &::before {
        content: "";
        width: ${e=>.65+.2*(e.size||0)}em;
        height: ${e=>.65+.2*(e.size||0)}em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: ${l.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${l.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${l.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;const Vo=p("div")`
    display: flex;
    flex-direction: row;
    gap: 0.35em;
    align-items: center;
    padding: 0.35rem;
    font-size: 0.8rem;
    color: ${l.colors.onBg100};
    border-radius: ${l.border.mdRadius};
    background: ${e=>l.colors[(e.variation||"bg")+"100"]};
    user-select: none;
`;p(Vo)`

    cursor: pointer;

    &:hover {
        background: ${e=>l.colors[(e.variation||"bg")+"300"]};
    }

    &:active {
        background: ${e=>l.colors[(e.variation||"bg")+"400"]};
    }

`;p("div")`

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${l.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        width: 7px;
        background-color: ${l.colors.bg200};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${l.colors.bg500};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${l.colors.onBg500};
    }

`;C("<mark>");C("<mark>");p("div")`
    position: relative;
    background-color : ${l.colors.bg200};
    border-radius : ${l.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`;p("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${l.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${l.colors.bg200};
    max-width: 25rem;
    grid-template-columns: repeat(1,minmax(0,1fr));;


    &[data-multiple="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-has-value="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-disabled="true"] {
        border-color: ${l.colors.onBg500};
        background-color: ${l.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${l.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`;p("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`;p("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`;p("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${l.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`;p("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`;p("input")`
    grid-column-start: 1;
    grid-row-start: 1;
    flex: 1;
    background-color: transparent;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    cursor: default;
    caret-color: transparent;

    &[data-multiple=true] {
        caret-color: currentColor;
    }

    &[data-is-active=true] {
        caret-color: currentColor;
    }
`;p("div")`
    position: absolute;
    min-width: 100%;
    background: inherit;
    color: inherit;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    border-radius: 0.125rem; /* This is equivalent to rounded-sm in Windi CSS */
    margin-top: 0.25rem; /* This is equivalent to mt-1 in Windi CSS */
    padding: 0.5rem; /* This is equivalent to p-2 in Windi CSS */
    z-index: 1;
    overflow-y: auto;
    max-height: 50vh;
`;p("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`;p("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${l.colors.bg200};
    border-radius : ${l.border.smRadius};
    color : ${l.colors.onBg200};

    &:hover {
        background-color: ${l.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${l.colors.bg400};
    }

    &[data-disabled=true] {
        pointer-events: none;
        color: #999999;
    }

    & mark {
        text-decoration: underline;
        background-color: unset;
        color: unset;
    }

`;p("input",{shouldForwardProp:e=>e!="size"})`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${e=>6+3*(e.size||0)}px;
    background: ${l.colors.primary};
    border: none;
    outline: none;
    margin-top: ${e=>6+.01*(e.size||0)}px;
    margin-bottom: ${e=>6+.01*(e.size||0)}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${e=>16+3*(e.size||0)}px;
        height: ${e=>16+3*(e.size||0)}px;
        background: ${l.colors.onBg};
        border-radius: 50%;
        border : ${e=>4+(e.size||0)}px solid ${l.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${l.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${l.colors.onBg400};
        border-color : ${l.colors.primary};
    }
    
`;C('<svg><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></svg>',!1,!0);const qo=fo`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;p("svg")`
    animation: ${qo.animationName} 1s linear infinite;
`;const gr=p("input")`

    width: 14em;
    min-height: 2em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.5em;
    box-sizing: border-box;
    border: 2px solid ${l.colors.bg200};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${l.colors.bg100};

    &:focus {
        border-color: ${l.colors.primary};
        box-shadow: 0 0 0 2px ${l.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background: ${l.colors.bg300};
        color: ${l.colors.bg500};
    }

`,ci=gr;p(at)`

    width: 14em;
    border: 2px solid ${l.colors.bg100};
    box-sizing: border-box;
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${l.colors.bg100};

    padding: 0.25em 0.5em;
    position: relative;

    &:has(input:focus) {
        border-color: ${l.colors.primary};
        box-shadow: 0 0 0 1px ${l.colors.primary100};
        outline: 3px solid transparent;
    }

    &.disabled {
        background: ${l.colors.bg500};
    }

    &.disabled .label {
        color: ${l.colors.onBg500};
    }

`;p("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-family: ${l.font.secondary};
    min-width: 10em;
    flex: 1;
    box-sizing: border-box;
`;p("span")`
    color: ${l.colors.onBg200};
    font-size: 0.8rem;
    margin-left: 0.25em;
`;p(gr.withComponent("textarea"))`
    resize: vertical;
    height: 8rem;
`;const Uo=130,Wo=130,Go=111,hr=110;p("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    position : fixed;
    z-index : ${Uo};
`;p("div")`

  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;

  &:hover *:last-of-type:not(style) {
    display: block;
  }

  & > *:last-of-type:not(style) {
    display: none;
  }

`;p("div")`
  width: 100%;
`;p("div")`
  position: absolute;
  top: 100%;
  width: 100%;
`;const Ko=C("<div>");p(e=>(()=>{const t=se(Ko);return X(t,ie(e,{get class(){return"anique-menu-item"+(e.class?" "+e.class:"")}}),!1,!1),ze(),t})())`

    padding: 0.75em 1em;
    background: ${l.colors.bg200};

    cursor: pointer;
    user-select: none;

    transition: background 0.2s ease-in;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap : 0.5em;

    &:hover {
        background: ${l.colors.bg300};
    }

    &:active {
        background: ${l.colors.bg500};
    }

    &:first-of-type {
        border-top-left-radius: ${l.border.smRadius};
        border-top-right-radius: ${l.border.smRadius};
    }

    &:last-of-type {
        border-bottom-left-radius: ${l.border.smRadius};
        border-bottom-right-radius: ${l.border.smRadius};
    }

`;C("<div>");p(at)`
    align-items: unset;
    position: absolute;
    width: max-content;
    z-index: ${Wo};
`;$e(["click"]);p("div")`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 100%;
`;p("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
    width: ${e=>e.drawerWidth};
    height: calc(100% - ${e=>e.topBarHeight});
    box-sizing: border-box;
    position: relative;
    z-index: ${hr};

    display: none;

    ${l.breakpoints.up("md")} {
        display: block;
    }

    //background: skyblue;

`;p("div",{shouldForwardProp:e=>e!="drawerWidth"&&e!="topBarHeight"})`
    width: ${e=>e.drawerWidth};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-sizing: border-box;
    height: calc(100% - ${e=>e.topBarHeight});
    position: fixed;
    top: ${e=>e.topBarHeight};
    bottom: 0;
    z-index : ${hr};
    //background: red;
`;p("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
`;p("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    left: 0;
    top: 0;
    right: 0;
    height: ${e=>e.topBarHeight};
    position : fixed;
    z-index: ${Go};
    //background: blue;
`;p("div",{shouldForwardProp:e=>e!="topBarHeight"})`
    flex: 1;
    overflow-y: auto;
    margin-top: ${e=>e.topBarHeight};
    position: relative;
    //background: grey;
`;p("div",{shouldForwardProp:e=>e!="hideAboveBreakpoint"})`
    position: absolute;
    top: 0;
    bottom: 0;

    ${e=>e.hideAboveBreakpoint!=null&&e.hideAboveBreakpoint+`{
     display: none;
  }`}
`;C("<div>");p("div")`
    display: flex;
    flex-direction: row;
    background: ${l.colors.bg200};
    border-radius: ${l.border.smRadius};
`;it`

    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
    padding: 0.75em 1.5em;
    cursor: pointer;

    transition: border-bottom 0.3s ease, color 0.3s ease;

    &:hover, &.selected {
        border-bottom: 3px solid ${l.colors.primary};
        color: ${l.colors.primary};
    }

`;p("table")`

    border-collapse: collapse;
    font-family: sans-serif;
    min-width: 400px;
    border-radius : ${l.border.mdRadius};
    overflow : hidden;

    & thead tr {
        background-color: ${l.colors.primary};
        text-align: left;
    }

    & th, & td {
        padding: 12px 15px;
    }

    & tbody tr {
        border-bottom: 1px solid ${l.colors.bg100};
    }

    & tbody tr:nth-of-type(even) {
        background-color: ${l.colors.bg200};
    }

    & tbody tr:last-of-type {
        border-bottom: 2px solid ${l.colors.primary};
    }

    & tbody tr.active {
        font-weight: bold;
        color: ${l.colors.primary};
    }
    
`;C("<input type=checkbox>");C('<span class="slider round">');p("label")`

    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;


    /* Hide default HTML checkbox */

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */

    & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${l.colors.bg300};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: ${l.colors.onBg};
        -webkit-transition: .4s;
        transition: .4s;
    }

    &[data-disabled] .slider:before {
        background-color: ${l.colors.onBg400};
    }

    & input:checked + .slider {
        background-color: ${l.colors.primary};
    }

    & input:focus + .slider {
        box-shadow: 0 0 1px ${l.colors.primary};
    }

    & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */

    & .slider.round {
        border-radius: 34px;
    }

    & .slider.round:before {
        border-radius: 50%;
    }
`;p.a`

    width: 2.75em;
    height: 2.75em;
    background: ${l.colors.bg100};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    color: ${l.colors.onBg};
    text-decoration: none;

    &:hover, &.current {
        background: ${l.colors.bg300};
        color: ${l.colors.onBg};
    }

    &.current {
        background: ${l.colors.primary};
    }

`;p(ar)`
    flex-wrap: wrap;
    gap: 0.5em;
`;function Xo(){return v(eo,{lang:"en",class:"dark",get children(){return[v(to,{get children(){return[v(pn,{children:"Qinetik - App Development"}),v(qe,{charset:"utf-8"}),v(qe,{name:"viewport",content:"width=device-width, initial-scale=1"}),v(qe,{name:"description",content:"We create productivity apps"}),v(mn,{rel:"icon",href:"/assets/favicon.png"}),v(jo,{})]}}),v(ro,{get children(){return[v(Wn,{get children(){return v(zr,{get children(){return v(qn,{get children(){return v(Dn,{})}})}})}}),v(Jn,{})]}})]}})}const Lt=Object.values(Object.assign({}))[0],Yo=Lt?Lt.default:void 0,Zo=({routerProps:e}={})=>{let t={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(i){},getStatusCode(){},$type:tr,fetch,$islands:new Set,mutation:!1};function r(i){return v(Mn,i)}const n="/";let o=n;if(n.startsWith("http"))try{o=new URL(n).pathname}catch{console.warn("BASE_URL starts with http, but `new URL` failed to parse it. Please check your BASE_URL:",n)}return v(rr.Provider,{value:t,get children(){return v(gn,{get children(){return v(r,ie({base:o,data:Yo},e,{get children(){return v(Xo,{})}}))}})}})};un(()=>v(Zo,{}),document);export{an as D,oi as E,So as G,Te as I,ii as M,l as N,si as U,ei as _,Qr as a,F as b,v as c,at as d,ni as e,ai as f,se as g,li as h,K as i,A as j,Re as k,ar as l,ie as m,ti as n,Jo as o,ci as p,ko as q,ze as r,X as s,C as t,ri as u,Fe as w,p as x};
