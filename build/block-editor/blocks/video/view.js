(()=>{"use strict";var e={8490:e=>{e.exports=window.wp.domReady}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r=o(8490);o.n(r)()((function(){!function(){const e=document.querySelectorAll(".wp-block-jetpack-videopress");0!==e.length&&e.forEach((function(e){const t=e.querySelector("iframe");if(!t)return;if(!window?.VideoPressIframeApi)return;const o=e.querySelector('script[type="application/json"]');if(!o)return;let r;try{r=JSON.parse(o.innerHTML)}catch(e){return void console.error(e)}o.remove();let n=!1;const s=window.VideoPressIframeApi(t,(()=>{s.status.onPlayerStatusChanged(((e,t)=>{"ready"===e&&"playing"===t&&(s.controls.pause(),s.controls.seek(r.previewAtTime),s.customize?.set({bigPlayButton:!0,playPauseAnimation:!1,controlBar:!1,shareButton:!1,posterImage:!0}))})),s.status.onTimeUpdate((e=>{if(n)return;const t=1e3*e,o=r.previewAtTime,a=o+r.previewLoopDuration;(t<o||t>a)&&s.controls.seek(o)}))})),a=e.querySelector(".jetpack-videopress-player__overlay");a&&(r.showControls&&a.addEventListener("click",(()=>{n=!0,a.remove(),s.customize?.set({bigPlayButton:!1,playPauseAnimation:!0,controlBar:!0,shareButton:!0}),s.controls.seek(0)})),a.addEventListener("mouseenter",(()=>{s.customize?.set({playPauseAnimation:!1,posterImage:!1}),s.controls.play()})),a.addEventListener("mouseleave",(()=>{s.customize?.set({playPauseAnimation:!1,posterImage:!0}),s.controls.pause()})))}))}()}))})();