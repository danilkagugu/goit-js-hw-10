import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form");o.addEventListener("submit",s=>{const t=Number(o.delay.value);s.preventDefault(),new Promise((e,i)=>{o.state.value==="fulfilled"?setTimeout(()=>{e(t)},t):o.state.value==="rejected"&&setTimeout(()=>{i(t)},t)}).then(e=>{r.show({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter",color:"green"})}).catch(e=>{r.show({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topCenter",color:"red"})}),s.currentTarget.reset()});
//# sourceMappingURL=commonHelpers2.js.map
