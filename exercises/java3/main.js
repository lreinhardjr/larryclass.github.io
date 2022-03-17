
let button = document.querySelector(".button");
let colors = ["sun.jpeg", "star.jpeg", "sun.jpeg", "star.jpeg"];
let body = document.querySelector("body");

function newbutton(){
  button.style.right = (100 * Math.random()) + '%';
  button.style.top = (100 * Math.random()) + '%';
}

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundImage = randColor;
  newbutton();
}



button.addEventListener("click", newColor);




