const hourShow = document.querySelector('.dig');

const setDate = () => {
  const now = new Date();

  let seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
  
  const mins = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  
  const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();

  hourShow.textContent = `${hour} : ${mins} : ${seconds}`;
}

setInterval(setDate, 1000);

setDate();
