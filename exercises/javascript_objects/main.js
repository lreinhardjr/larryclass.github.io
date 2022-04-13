// keep this viewable for all examples. These are JavaScript objects
let teenDramas = [
  {
    name: "Monday", 
    year:3.9, 
  },
  {
    name: "Tuesday", 
    year: 1.7, 
  },
  {
    name: "Wednesday", 
    year: .88, 
  },
  {
    name: "Thursday", 
    year: 3.0, 
  },
  {
    name: "Friday", 
    year: 2.4, 
  },
  {
    name: "Saturday", 
    year: 2.4, 
  },
  {
    name: "Sunday", 
    year: 1.7, 
  }
];


let container = document.querySelector(".teen-show-container");

function displayTDramas(show) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let showDiv = container.appendChild(newItem);


  // adds a class to each new div
  newItem.classList.add("show");
  // places the show name to the div
  showDiv.innerHTML = show.name;


  // Same process as above to add the show year, needs to go here so that it doesnt get overridden
  let newYearItem = document.createElement("div");
  let yearDiv = showDiv.appendChild(newYearItem);

  // create a function that will replace the HTML of the show div with the episode title
  function displayEpTitle() {
    showDiv.innerHTML = show.year + ' miles';
    showDiv.style.fontSize = show.year * 50 + "px";

  }
  // here Im adding back the show name. I could add the year back, too, but I chose not to
  function revertShow() {
    showDiv.innerHTML = show.name;
    showDiv.style.fontSize = 50 + "px";
  }

  // add an eventlistener for both the mouseover and mouseleave events
  showDiv.addEventListener("mouseover", displayEpTitle);
  showDiv.addEventListener("mouseleave", revertShow);
}

// loops through the teen dramas and runs the displayTDramas function for each one
teenDramas.forEach(displayTDramas);

// New edits: Add an event listener to the button
let button = document.querySelector(".year-button");

function sortDramas() {
  // store a reference to original teenDramas before sorting it.
  // The JSON.parse code copies the original object into its own entity.
  // Otherwise, the sort() function below would modify the original object.
  // See this stack overflow question for more: https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
  let sortedDramas = JSON.parse(JSON.stringify(teenDramas))

  // create an if statement that checks if the button has the clicked class so that it returns the original state
  if (button.classList.contains("sorted")) {
    // the sortedDramas variable is already in the original order, nothing todo
    button.classList.remove("sorted");
    button.innerHTML=("Click to Sort");
  } else {
    button.classList.add("sorted");
    // otherwise, the dramas need to be sorted
    sortedDramas.sort(function(a, b) {
      return a.year - b.year;
    });
    button.innerHTML=("Sorted by mileage!");
  }

  // re-insert teenDramas in new order
  container.innerHTML = '';
  sortedDramas.forEach(displayTDramas);
}

button.addEventListener("click", sortDramas)