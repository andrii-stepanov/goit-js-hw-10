import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as c}from"./assets/vendor-BbbuE1sJ.js";const m={button:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),input:document.querySelector("#datetime-picker")},{button:e,days:h,hours:f,minutes:b,seconds:y,input:n}=m;e.setAttribute("disabled","");let i=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0]<=Date.now()?(e.setAttribute("disabled",""),c.warning({title:"Error",message:"Please choose a date in the future",messageColor:"#fff",titleSize:"16px",backgroundColor:"#ffa000",position:"topRight",titleColor:"#fff",theme:"dark"})):t[0]>Date.now()&&(e.removeAttribute("disabled"),i=t[0])}};l("#datetime-picker",p);e.addEventListener("click",()=>{T.start(),e.setAttribute("disabled",""),n.setAttribute("disabled","")});const T={intervalId:null,resultTime:null,start(){this.intervalId=setInterval(()=>{this.timerClick(),this.printTime()},1e3)},timerClick(){const t=Date.now(),o=i-t;this.resultTime=v(o),o<1e3&&(console.log(o),clearInterval(this.intervalId),e.removeAttribute("disabled"),n.removeAttribute("disabled"))},printTime(){h.textContent=r(this.resultTime.days),f.textContent=r(this.resultTime.hours),b.textContent=r(this.resultTime.minutes),y.textContent=r(this.resultTime.seconds)}};function r(t){return t.toString().padStart(2,"0")}function v(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:u,seconds:d}}
//# sourceMappingURL=1-timer.js.map
