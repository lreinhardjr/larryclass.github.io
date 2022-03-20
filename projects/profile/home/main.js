var timeDelay = 2000;
let arrowForward = document.querySelector(".arrow");
let intro = document.querySelector(".intro");
arrowForward.addEventListener('click', fadeBlackFor);



function fadeBlackFor () {
  intro.classList.toggle("fadeOut");
  setTimeout(loadForward, timeDelay);
}
  

function loadForward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/market/';
}
