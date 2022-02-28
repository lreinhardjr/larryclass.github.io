let body = document.body;

function turnOnLight() {
  body.classList.toggle("stars");
  button.classList.toggle("button1on");
}

let button = document.querySelector(".button1");
button.addEventListener("click", turnOnLight);