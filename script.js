let container = document.querySelector(".container");
const width = 7;
let layout = [1, 1, 1, 0, 2, 2, 2]; // 1 = green, 0 = empty, 2 = red
let cells = [];
let cell;
let clickedCell;
const btn = document.getElementById("btn");
let infoText = document.getElementById("info-text");

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    cell = document.createElement("div");
    container.appendChild(cell);
    cells.push(cell);
    cells[i].innerHTML = "";
    //Add layout styling
    if (layout[i] === 0) {
      cells[i].classList.add("empty");
      cells[i].classList.add("cell");
    } else if (layout[i] === 1) {
      cells[i].classList.add("green");
      cells[i].classList.add("cell");
    } else if (layout[i] === 2) {
      cells[i].classList.add("pink");
      cells[i].classList.add("cell");
    }
  }
  document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener("click", (el) => {
      // console.log(el.target);
      clickedCell = cells.indexOf(el.target);

      // console.log(clickedCell);
      if (cells[clickedCell].classList.contains("pink")) {
        infoText.innerHTML = "";
        if (cells[clickedCell - 1].classList.contains("empty")) {
          cells[clickedCell - 1].classList.add("pink");
          cells[clickedCell - 1].classList.remove("empty");
          cells[clickedCell].classList.add("empty");
          cells[clickedCell].innerHTML = "";
          cells[clickedCell].classList.remove("pink");
        } else if (cells[clickedCell - 2].classList.contains("empty")) {
          cells[clickedCell - 2].classList.add("pink");
          cells[clickedCell - 2].classList.remove("empty");
          cells[clickedCell].classList.add("empty");
          cells[clickedCell].innerHTML = "";
          cells[clickedCell].classList.remove("pink");
        } else {
          infoText.innerHTML += "😱 du kan inte flytta den där 😱";
        }
      }
      if (cells[clickedCell].classList.contains("green")) {
        infoText.innerHTML = "";
        if (cells[clickedCell + 1].classList.contains("empty")) {
          cells[clickedCell + 1].classList.add("green");
          cells[clickedCell + 1].classList.remove("empty");
          cells[clickedCell].classList.add("empty");
          cells[clickedCell].classList.remove("green");
          cells[clickedCell].innerHTML = "";
        } else if (cells[clickedCell + 2].classList.contains("empty")) {
          cells[clickedCell + 2].classList.add("green");
          cells[clickedCell + 2].classList.remove("empty");
          cells[clickedCell].classList.add("empty");
          cells[clickedCell].classList.remove("green");
          cells[clickedCell].innerHTML = "";
        } else {
          infoText.innerHTML += "😱 du kan inte flytta den där 😱";
        }
      }
      if (
        cells[0].classList.contains("pink") &&
        cells[1].classList.contains("pink") &&
        cells[2].classList.contains("pink") &&
        cells[4].classList.contains("green") &&
        cells[5].classList.contains("green") &&
        cells[6].classList.contains("green")
      ) {
        infoText.innerHTML += "🎉🎉DU KLARADE DET!!!🎉🎉";
      }
    });
  });
}
createBoard();

//Reset
// btn.addEventListener("click", event => {
//   // location.reload();
// })
btn.addEventListener("click", restart);

function restart() {
  const myNode = document.querySelector(".container");
  myNode.innerHTML = "";
  cells = [];
  layout = [1, 1, 1, 0, 2, 2, 2];
  createBoard();
  infoText.innerHTML = "";
}
