var timeDelay = 2000;
let arrowBack = document.querySelector(".arrow2");
let home = document.querySelector(".home");
let dessert = document.querySelector(".dessert");
arrowBack.addEventListener('click', fadeBlackBack);
home.addEventListener('click', fadeBlackForward);

function fadeBlackBack () {
  dessert.classList.toggle("fadeOut");
  setTimeout(loadBackward, timeDelay);
}

function fadeBlackForward () {
  dessert.classList.toggle("fadeOut");
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
let dessertvid = document.querySelector(".dessertvid");

function playSound() {
  noSound.classList.toggle('sound')
  if (dessertvid.muted === true) {
    dessertvid.muted = false;
  }
   else if (dessertvid.muted === false) {
    dessertvid.muted = true;
  }
}
