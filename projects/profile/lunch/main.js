var timeDelay = 2000;
let arrowBack = document.querySelector(".arrow2");
let arrowForward = document.querySelector(".arrow");
let lunch = document.querySelector(".lunch");
arrowBack.addEventListener('click', fadeBlackBack);
arrowForward.addEventListener('click', fadeBlackFor);

function fadeBlackBack () {
  lunch.classList.toggle("fadeOut");
  setTimeout(loadBackward, timeDelay);
}

function fadeBlackFor () {
  lunch.classList.toggle("fadeOut");
  setTimeout(loadForward, timeDelay);
}
  

function loadForward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/sitting/';
}

function loadBackward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/market/index.html';
}

let noSound = document.querySelector(".nosound");
let sound = document.querySelector(".sound");
noSound.addEventListener('click', playSound);
let lunchvid = document.querySelector(".lunchvid");

function playSound() {
  noSound.classList.toggle('sound')
  if (lunchvid.muted === true) {
    lunchvid.muted = false;
  }
   else if (lunchvid.muted === false) {
    lunchvid.muted = true;
  }
}
