let walkingData = [
  {
  date: "2019",
  miles: 1792
  },
  {
  date: "2020",
  miles: 1385
  },
  {
  date: "2021",
  miles: 1228
  },
  {
  date: "February",
  miles: 114
  },
  {
  date: "July",
  miles: 171
  },
    {
  date: "January",
  miles: 184
  },
  {
  date: "April",
  miles: 95
  },
  {
  date: "August",
  miles: 48
  },
    {
  date: "February",
  miles: 80
  },
  {
  date: "July",
  miles: 137
  },
    {
  date: "February",
  miles: 114
  },
  {
  date: "July",
  miles: 171
  }
];

// let button = selectAll(".button");




let segNum = 100;
let segLength = 1;


// let button = document.querySelector(".button");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let button10 = document.querySelector(".button10");

// button.addEventListener("click", addActive);
button1.addEventListener("click", changeMayDistance);
button2.addEventListener("click", changeMayDistance2);
button3.addEventListener("click", changeMayDistance3);
button4.addEventListener("click", changeMayDistance4);
button5.addEventListener("click", changeMayDistance5);
button6.addEventListener("click", changeMayDistance6);
button7.addEventListener("click", changeMayDistance7);
button8.addEventListener("click", changeMayDistance8);
button9.addEventListener("click", changeMayDistance9);
button10.addEventListener("click", changeMayDistance10);


// function addActive() {
//   button.classList.add('active');
//   if (button.hasClass('active')) {
//    button.removeClass('active');
//    }
// }



function changeMayDistance() {
  segLength = walkingData[0].miles / 100;
  // button1.classList.toggle('active');
//   if (button1.style.background = 'magenta') {
//      button1.style.backgroundColor = ("yellow");
//      console.log('test');
// } else {
//   console.log('c');
//   button1.style.backgroundColor = ("black");
// }
// addActive();
}



function changeMayDistance2() {
  segLength = walkingData[1].miles / 100;
  // button2.classList.toggle('active');

  // if (button1.classlist.hasClass('.active')){
  //   button1.remvoeclass('active');
  // }

}

function changeMayDistance3() {
  segLength = walkingData[2].miles / 100;
    // button3.classList.toggle('active');


}

function changeMayDistance4() {
  segLength = walkingData[3].miles / 100;
    button4.classList.toggle('active');

}

function changeMayDistance5() {
  segLength = walkingData[4].miles / 100;
    button5.classList.toggle('active');

}

function changeMayDistance6() {
  segLength = walkingData[5].miles / 100;
    button6.classList.toggle('active');

}

function changeMayDistance7() {
  segLength = walkingData[6].miles / 100;
    button7.classList.toggle('active');

}

function changeMayDistance8() {
  segLength = walkingData[7].miles / 100;
    button8.classList.toggle('active');

}

function changeMayDistance9() {
  segLength = walkingData[9].miles / 100;
    button9.classList.toggle('active');

}

function changeMayDistance10() {
  segLength = walkingData[10].miles / 100;
    button10.classList.toggle('active');

}

let x = [],
    y = [];

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(9);
  stroke(255, 100);
}

let activeEL;

  document.querySelectorAll(".button").forEach(e => {
    e.addEventListener('click', onButtonClick)
  });

  function onButtonClick(e) {
    if (activeEL) {
      if (activeEL != e.currentTarget) {
        activeEL.classList.remove('active');
      }
    }

    activeEL = e.currentTarget;
    activeEL.classList.add("active");
  }


function draw() {
  background('#0b0500');
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();  
}

function displayMileage1 () {
  button1.innerHTML = walkingData[0].miles + ' miles';
}

function removeMileage1() {
  button1.innerHTML = walkingData[0].date;
}

function displayMileage2 () {
  button2.innerHTML = walkingData[1].miles + ' miles';
}

function removeMileage2() {
  button2.innerHTML = walkingData[1].date;
}


function displayMileage3 () {
  button3.innerHTML = walkingData[2].miles + ' miles';
}

function removeMileage3() {
  button3.innerHTML = walkingData[2].date;
}


function displayMileage4 () {
  button4.innerHTML = walkingData[3].miles + ' miles';
}

function removeMileage4() {
  button4.innerHTML = walkingData[3].date;
}

function displayMileage5 () {
  button5.innerHTML = walkingData[4].miles + ' miles';
}

function removeMileage5() {
  button5.innerHTML = walkingData[4].date;
}

function displayMileage6 () {
  button6.innerHTML = walkingData[5].miles + ' miles';
}

function removeMileage6() {
  button6.innerHTML = walkingData[5].date;
}

function displayMileage7 () {
  button7.innerHTML = walkingData[6].miles + ' miles';
}

function removeMileage7() {
  button7.innerHTML = walkingData[6].date;
}

function displayMileage8 () {
  button8.innerHTML = walkingData[7].miles + ' miles';
}

function removeMileage8() {
  button8.innerHTML = walkingData[7].date;
}

function displayMileage9 () {
  button9.innerHTML = walkingData[8].miles + ' miles';
}

function removeMileage9() {
  button9.innerHTML = walkingData[8].date;
}

function displayMileage10 () {
  button10.innerHTML = walkingData[9].miles + ' miles';
}

function removeMileage10() {
  button10.innerHTML = walkingData[9].date;
}



button1.addEventListener("mouseenter", displayMileage1);
button1.addEventListener("mouseleave", removeMileage1);


button2.addEventListener("mouseenter", displayMileage2);
button2.addEventListener("mouseleave", removeMileage2);


button3.addEventListener("mouseenter", displayMileage3);
button3.addEventListener("mouseleave", removeMileage3);

button4.addEventListener("mouseenter", displayMileage4);
button4.addEventListener("mouseleave", removeMileage4);

button5.addEventListener("mouseenter", displayMileage5);
button5.addEventListener("mouseleave", removeMileage5);

button6.addEventListener("mouseenter", displayMileage6);
button6.addEventListener("mouseleave", removeMileage6);

button7.addEventListener("mouseenter", displayMileage7);
button7.addEventListener("mouseleave", removeMileage7);

button8.addEventListener("mouseenter", displayMileage8);
button8.addEventListener("mouseleave", removeMileage8);

button9.addEventListener("mouseenter", displayMileage9);
button9.addEventListener("mouseleave", removeMileage9);

button10.addEventListener("mouseenter", displayMileage10);
button10.addEventListener("mouseleave", removeMileage10);