"use strict";

let color = "black";
let board = document.querySelector(".board");
let select = document.querySelector(".btn-invisible");

// * Creates a grid of squares on the board element.
function createGrid(size) {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mousedown", colorDown);
    square.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

// Create grid after pager load
createGrid(16);

//  Changes the size of the board based on the input value.
function changeSize(input) {
  const errorElement = document.querySelector(".error");

  if (input >= 2 && input <= 64) {
    errorElement.style.display = "none";
    createGrid(input);
  } else {
    errorElement.style.cssText =
      "display:flex;justify-content: center;font-size:18px;";
  }
}

// Sets the value of the 'mouseClicked' variable to true when the mouse button is pressed down on the 'board' element, and sets it to false when the mouse button is released.
let mouseClicked = false;

board.addEventListener("mousedown", () => {
  mouseClicked = true;
});

board.addEventListener("mouseup", () => {
  mouseClicked = false;
});

// Changes the color of a square on the board based on the current color and mode selected.
function colorSquare() {
  const mode = document.querySelector(".mode");

  if (mouseClicked) {
    mode.textContent = "Mode: Coloring";

    switch (color) {
      case "random":
        this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
        break;
      case "select":
        this.style.backgroundColor = select.value;
        break;
      case "white":
        mode.textContent = "Mode: NOT Coloring";
        this.style.backgroundColor = color;
        break;
      default:
        this.style.backgroundColor = color;
        break;
    }
  } else {
    mode.textContent = "Mode: NOT Coloring";
  }
}

// Changes the background color of a square element based on the selected color mode.
function colorDown() {
  const mode = document.querySelector(".mode");

  mode.textContent = "Mode: Coloring";

  switch (color) {
    case "random":
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
      break;
    case "select":
      this.style.backgroundColor = select.value;
      break;
    case "white":
      mode.textContent = "Mode: NOT Coloring";
      this.style.backgroundColor = color;
      break;
    default:
      this.style.backgroundColor = color;
  }
}

// This function assigns the value of `choice` to the `color` variable.
function changeColor(choice) {
  color = choice;
}

// When the button is clicked, it triggers a click event on another element with the class name "btn-invisible".
document
  .querySelector("button.opener")
  .addEventListener("click", () =>
    document.querySelector(".btn-invisible").click()
  );
