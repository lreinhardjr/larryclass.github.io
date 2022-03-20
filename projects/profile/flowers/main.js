var timeDelay = 2000;
let arrowBack = document.querySelector(".arrow2");
let arrowForward = document.querySelector(".arrow");
let flowers = document.querySelector(".flowers");
arrowBack.addEventListener('click', fadeBlackBack);
arrowForward.addEventListener('click', fadeBlackFor);

function fadeBlackBack () {
  flowers.classList.toggle("fadeOut");
  setTimeout(loadBackward, timeDelay);
}

function fadeBlackFor () {
  flowers.classList.toggle("fadeOut");
  setTimeout(loadForward, timeDelay);
}
  

function loadForward () {
  window.location.href = 'https://www.encodedna.com/javascript/operators/default.htm';
}

function loadBackward () {
  window.location.href = 'https://www.google.com';
}

