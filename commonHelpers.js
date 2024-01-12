import{f}from"./assets/vendor-992cd48f.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c=document.querySelector("[data-start]"),m=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let a;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0].getTime(),console.log(t[0]),k(a)}};f("#datetime-picker",T);class S{constructor({onTick:n}){this.onTick=n,this.isActive=!1}start(){this.intervalId=setInterval(()=>{const n=Date.now(),s=a-n,r=g(s);this.onTick(r)},1e3)}stop(){}}function g(t){const o=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:d,seconds:l}}function b({days:t,hours:n,minutes:s,seconds:r}){m.textContent=`${t}`.padStart(2,"0"),h.textContent=`${n}`.padStart(2,"0"),y.textContent=`${s}`.padStart(2,"0"),p.textContent=`${r}`.padStart(2,"0")}const u=new S({onTick:b});function k(t){t<Date.now()?(window.alert("Please choose a date in the future"),c.disabled=!0):c.disabled=!1}c.addEventListener("click",u.start.bind(u));
//# sourceMappingURL=commonHelpers.js.map
