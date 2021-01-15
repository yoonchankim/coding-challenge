const clock=document.querySelector(".time");
const nineHour=32400000;
function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const today = new Date();
    const r=xmasDay-today+nineHour;
    const rDate=Math.floor(r/(1000*60*24*60));
    const rHour=Math.floor((r/(1000*60*60))%24);
    const rMin=Math.floor((r/(1000*60))%60);
    const rSec=Math.floor((r/1000)%60);
    clock.innerHTML= `${rDate}:${rHour<10 ? `0${rHour}` : rHour}:${rMin<10 ? `0${rMin}` : rMin}:${rSec<10 ? `0${rSec}` : rSec}`;
  }
  
  function init() {
    setInterval(getTime, 1000);
}
  init();