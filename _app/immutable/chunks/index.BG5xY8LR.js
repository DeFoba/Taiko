import{n as f,e as w,r as m,s as q,i as x}from"./scheduler.DQm6Vmd6.js";const a=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=f){let r;const n=new Set;function u(t){if(q(s,t)&&(s=t,r)){const i=!a.length;for(const e of n)e[1](),a.push(e,s);if(i){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function l(t){u(t(s))}function b(t,i=f){const e=[t,i];return n.add(e),n.size===1&&(r=o(u,l)||f),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:u,update:l,subscribe:b}}function E(s,o,r){const n=!Array.isArray(s),u=n?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=o.length<2;return z(r,(b,t)=>{let i=!1;const e=[];let d=0,p=f;const h=()=>{if(d)return;p();const c=o(n?e[0]:e,b,t);l?b(c):p=x(c)?c:f},y=u.map((c,g)=>w(c,_=>{e[g]=_,d&=~(1<<g),i&&h()},()=>{d|=1<<g}));return i=!0,h(),function(){m(y),p(),i=!1}})}export{E as d,A as w};
//# sourceMappingURL=index.BG5xY8LR.js.map
