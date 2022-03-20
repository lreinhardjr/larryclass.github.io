var timeDelay = 2000;
let arrowBack = document.querySelector(".arrow2");
let arrowForward = document.querySelector(".arrow");
let seat = document.querySelector(".seat");
arrowBack.addEventListener('click', fadeBlackBack);
arrowForward.addEventListener('click', fadeBlackFor);

function fadeBlackBack () {
  seat.classList.toggle("fadeOut");
  setTimeout(loadBackward, timeDelay);
}

function fadeBlackFor () {
  seat.classList.toggle("fadeOut");
  setTimeout(loadForward, timeDelay);
}
  

function loadForward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/produce/';
}

function loadBackward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/lunch/';
}