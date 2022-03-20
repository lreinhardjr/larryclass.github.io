var timeDelay = 2000;

let arrowBack = document.querySelector(".arrow2");
let arrowForward = document.querySelector(".arrow");
let produce = document.querySelector(".produce");
let noSound = document.querySelector(".nosound");
let sound = document.querySelector(".sound");
let producevid = document.querySelector(".producevid");

arrowBack.addEventListener('click', fadeBlackBack);
arrowForward.addEventListener('click', fadeBlackFor);
noSound.addEventListener('click', playSound);


function fadeBlackBack () {
  produce.classList.toggle("fadeOut");
  setTimeout(loadBackward, timeDelay);
}

function fadeBlackFor () {
  produce.classList.toggle("fadeOut");
  setTimeout(loadForward, timeDelay);
}
  
function loadForward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/flowers/';
}

function loadBackward () {
  window.location.href = 'https://lreinhardjr.github.io/projects/profile/sitting/';
}

function playSound() {
  noSound.classList.toggle('sound')
  if (producevid.muted === true) {
    producevid.muted = false;
  }
   else if (producevid.muted === false) {
    producevid.muted = true;
  }
}
