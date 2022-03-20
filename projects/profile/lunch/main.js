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
  window.location.href = 'https://www.encodedna.com/javascript/operators/default.htm';
}

function loadBackward () {
  window.location.href = 'https://www.google.com';
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
