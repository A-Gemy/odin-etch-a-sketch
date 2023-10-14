"use strict";

let board = document.querySelector(".board");
let color = "black";

// * Creates a grid of squares on the board element.
function createGrid(size) {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
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
