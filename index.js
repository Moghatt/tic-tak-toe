let playArea = document.querySelector("#play-area");
let squares = document.querySelectorAll(".square");
let playerOne = "O";
let playerTwo = "X";
let ul = document.querySelector("ul");
let restart = document.querySelector(".restart");
let confirm = document.querySelector("#confirm");
let colors = document.querySelector("#color");
let body = document.querySelector("body");
let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");

let currentPlayer = playerOne;
let winner;
let clickArray = [null, null, null, null, null, null, null, null, null];

function squareClicked(e) {
  let id = e.target.id;

  if (clickArray[id - 1] == null) {
    e.target.textContent = currentPlayer;
    clickArray[id - 1] = currentPlayer;
    if (winingPattern()) {
      endGame();
    } else {
      if (
        clickArray[0] !== null &&
        clickArray[1] !== null &&
        clickArray[2] !== null &&
        clickArray[3] !== null &&
        clickArray[4] !== null &&
        clickArray[5] !== null &&
        clickArray[6] !== null &&
        clickArray[7] !== null &&
        clickArray[8] !== null
      ) {
        endGame("draw");
      }
    }

    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }

    console.log(clickArray);
  }
}

var counter1 = 0;
var counter2 = 0;

var someVarName = "value";
localStorage.setItem("someVarKey", someVarName);

function endGame(result) {
  if (result == "draw") {
    let li = document.createElement("li");
    li.textContent = "Woops, it's a Draw";
    li.classList.add("draw-sentence");
    ul.appendChild(li);
  } else {
    if (currentPlayer == "O") {
      let li = document.createElement("li");
      li.classList.add("wining-sentence");
      li.textContent = `PLAYER ONE WINS`;

      ul.appendChild(li);
      var updateCounter = counter1 + 1;

      player1Score.textContent = updateCounter;
      player1Score.classList.add("numberScore");
      // localStorage.setItem("score", updateCounter);

      removeEvent();
    } else {
      let li = document.createElement("li");
      li.classList.add("wining-sentence");
      li.textContent = `PLAYER TWO WINS`;
      ul.appendChild(li);
      var updateCounter2 = counter2 + 1;
      player2Score.textContent = updateCounter2;
      player2Score.classList.add("numberScore");
      removeEvent();
    }
  }
}

function winingPattern() {
  if (
    currentPlayer == clickArray[0] &&
    clickArray[0] == clickArray[1] &&
    clickArray[0] == clickArray[2]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[3] &&
    clickArray[3] == clickArray[4] &&
    clickArray[3] == clickArray[5]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[6] &&
    clickArray[6] == clickArray[7] &&
    clickArray[6] == clickArray[8]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[0] &&
    clickArray[0] == clickArray[3] &&
    clickArray[0] == clickArray[6]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[1] &&
    clickArray[1] == clickArray[4] &&
    clickArray[1] == clickArray[7]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[2] &&
    clickArray[2] == clickArray[5] &&
    clickArray[5] == clickArray[8]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[0] &&
    clickArray[0] == clickArray[4] &&
    clickArray[0] == clickArray[8]
  ) {
    return true;
  } else if (
    currentPlayer == clickArray[2] &&
    clickArray[2] == clickArray[4] &&
    clickArray[2] == clickArray[6]
  ) {
    return true;
  }
}

squares.forEach((square) => {
  square.addEventListener("click", squareClicked);
});

function removeEvent() {
  squares.forEach((square) => {
    square.removeEventListener("click", squareClicked);
  });
}

restart.addEventListener("click", (e) => {
  location.reload();
});

confirm.addEventListener("click", (e) => {
  console.log(colors.value);
  if (colors.value == "grey") {
    document.body.style.background = "gray";
  } else if (colors.value == "lightblue") {
    document.body.style.background = "#cceeff";
  } else if (colors.value == "blue/green") {
    document.body.style.background = "rgb(59 207 208)";
  } else {
    document.body.style.background = "yellow";
  }
});
