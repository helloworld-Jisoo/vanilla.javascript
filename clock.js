const clock = document.querySelector(".clock");

function getChristmas() {
  const christmas = new Date('December 25, 2020 00:00:00 GMT0000');
  const now = new Date();
  const gap = christmas.getTime()- now.getTime(); 
  const second = 1000,
  minute = second * 60,
  hour = minute * 60, 
  date = hour * 24;

  const s = Math.floor((gap / second)%60),
  m = Math.floor((gap/minute)%60),
  h = Math.floor((gap/hour)%24),
  d = Math.floor(gap/date);

  clock.innerText = `${d < 10 ? `0${d}` : d} Days ${h < 10 ? `0${h}` : h} Hours ${m < 10 ? `0${m}` : m} Minutes ${s < 10 ? `0${s}` : s} Seconds`;

}

getChristmas();
setInterval(getChristmas,1000);
