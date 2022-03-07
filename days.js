const dayShows = document.querySelector('.days');

const setDateDays = () => {
  const today = new Date().toLocaleDateString("fr-FR");

  dayShows.textContent =  today;
}

setDateDays();
