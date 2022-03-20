var timeDelay = 2000;
let arrowBack = document.querySelector(".arrow2");
let arrowForward = document.querySelector(".arrow");
let produce = document.querySelector(".produce");
arrowBack.addEventListener('click', fadeBlackBack);
arrowForward.addEventListener('click', fadeBlackFor);

function fadeBlackBack () {
  produce.classList.toggle("fadeOut");
  setTimeout(loadBackward, timeDelay);
}

function fadeBlackFor () {
  produce.classList.toggle("fadeOut");
  setTimeout(loadForward, timeDelay);
}
  

function loadForward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/lunch/';
}

function loadBackward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/home/';
}

let noSound = document.querySelector(".nosound");
let sound = document.querySelector(".sound");
noSound.addEventListener('click', playSound);
let producevid = document.querySelector(".producevid");

function playSound() {
  noSound.classList.toggle('sound')
  if (producevid.muted === true) {
    producevid.muted = false;
  }
   else if (producevid.muted === false) {
    producevid.muted = true;
  }
}
