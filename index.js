const hourShow = document.querySelector('.dig');

const setDate = () => {
  const now = new Date();

  let seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  if(seconds < 10){
    hourShow.innerHTML = `${hour} : ${mins} : 0${seconds}`;
  } else {
    hourShow.innerHTML = `${hour} : ${mins} : ${seconds}`;
  }
}

setInterval(setDate, 1000);

setDate();
