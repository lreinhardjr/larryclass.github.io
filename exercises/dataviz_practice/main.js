
let flowers = [
  {name: "Sunday", amount: 1},
  {name: "Monday", amount: 3},
  {name: "Tuesday", amount: 2},
  {name: "Wednesday", amount: 1},
  {name: "Thursday", amount: 1},
  {name: "Friday", amount: 3},
  {name: "Saturday", amount: 1}
  ];

// First show all the flowers and create divs for each of them
let container = document.querySelector(".garden");
// create a counter variable that will give us each flowers number in the array
let i = 0;
let b;

function displayFlowers(flower) {
  // create a for loop that will run based on the flower amount
  for (var b = 0; b < flower.amount; b++) {
    // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let flowerDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("flower");
  // adds a specific class to each new div
  newItem.classList.add(flower.name);
  newItem.classList.add(flower.name + [i]);
  // places the flower name and amount to the div
  flowerDiv.innerHTML = flower.name;
  }
  
}
// loops through the flowers and runs the displayFlowers function for each one
flowers.forEach(displayFlowers);