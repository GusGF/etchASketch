const totalX = 960;
const masterDIV = document.getElementById("master");
const sizeOfXY = getSizeOfSq();
const gridSqArray = masterDIV.getElementsByClassName("grid");
let numOfSqs = 16;

// setup event listeners for the 'resize' & 'restart' buttons
function initialisation() {
  const restart = document.getElementById("restart");
  const resize = document.getElementById("resize");
  // clear the grid of colour
  restart.addEventListener("click", (e) => {
    for (let box of gridSqArray) {
      box.style.backgroundColor = "white";
    }
  });
  // redraw the grid according to user requirements
  resize.addEventListener("click", (e) => {
    numOfSqs = getUserGridSize();
    paintAGrid();
  });
}

function paintAGrid() {
  // only draw grid if one doesn't already exist
  if (!gridSqArray[0]) {
    const sizeOfXY = getSizeOfSq(numOfSqs);
    // lets draw the grid
    for (let i = 1; i <= numOfSqs * numOfSqs; i++) {
      let newDiv = document.createElement("div");
      newDiv.style.border = "1px solid blue";
      newDiv.style.width = sizeOfXY;
      newDiv.style.height = sizeOfXY;
      newDiv.style.boxSizing = "border-box";
      newDiv.style.backgroundColor = "white";
      newDiv.setAttribute("class", "grid");
      masterDIV.appendChild(newDiv);
    }
  }
}

function addEventListeners() {
  // create a listener for each square in the grid
  for (let box of gridSqArray) {
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "green";
    });
  }
}

function getSizeOfSq(numOfSqs) {
  const sqSize = totalX / numOfSqs;
  // console.log(sqSize + "px");
  return sqSize + "px";
}

function getUserGridSize() {
  numOfSqs = parseInt(
    prompt("Please enter a grid size divisible into 960, >10 and <100", 80)
  );
  while (!(numOfSqs >= 10 && numOfSqs <= 100 && 960 % numOfSqs == 0)) {
    numOfSqs = parseInt(prompt("What size grid would you like to use?"));
  }
  clearCurrentGrid();
  paintAGrid();
  addEventListeners();
}

function clearCurrentGrid() {
  const masterDiv = document.getElementById("master");
  const childDivCollection = masterDIV.getElementsByTagName("div");
  // while (!childDivCollection.length == 0) {
  //   childDivCollection[0].remove();
  // }
  let cntr = childDivCollection.length;
  for (let i = 1; i <= cntr; i++) {
    childDivCollection[0].remove();
  }
}

initialisation();
paintAGrid();
addEventListeners();

// }
