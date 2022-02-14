var Player = function (name, points) {
  this.name = name;
  this.points = points;
};

var playerOne;
var playerTwo;

var bandera = true;
var myFunction = function (clicked_id) {
  console.log("aqui");
  const cell = document.getElementById("" + clicked_id);

  switch (cell.innerHTML) {
    case " ":
      if (bandera === true) {
        cell.innerHTML = "O";
        bandera = false;
        break;
      }
      if (bandera === false) {
        cell.innerHTML = "X";
        bandera = true;
        break;
      }
      break;
  }
  checkState();
};

var checkState = function () {
  const collection = document.getElementsByClassName("grid-item");
  console.log("collLength: " + collection.length);

  if (
    collection[0].innerHTML === "O" &&
    collection[1].innerHTML === "O" &&
    collection[2].innerHTML === "O"
  ) {
    alert(playerOne.name+" Wins");
  }
  if (
    collection[3].innerHTML === "O" &&
    collection[4].innerHTML === "O" &&
    collection[5].innerHTML === "O"
  ) {
    alert(playerOne.name+" Wins");
  }
  if (
    collection[6].innerHTML === "O" &&
    collection[7].innerHTML === "O" &&
    collection[8].innerHTML === "O"
  ) {
    alert(playerOne.name+" Wins");
  }
  if (
    collection[0].innerHTML === "X" &&
    collection[1].innerHTML === "X" &&
    collection[2].innerHTML === "X"
  ) {
    alert(playerTwo.name+" Wins");
  }
  if (
    collection[3].innerHTML === "X" &&
    collection[4].innerHTML === "X" &&
    collection[5].innerHTML === "X"
  ) {
    alert(playerTwo.name+" Wins");
  }
  if (
    collection[6].innerHTML === "X" &&
    collection[7].innerHTML === "X" &&
    collection[8].innerHTML === "X"
  ) {
    alert(playerTwo.name+" Wins");
  }
};

var startGame = function () {
  playerOne = new Player("" + document.getElementById("playerOne").value, 0);
  playerTwo = new Player("" + document.getElementById("playerTwo").value, 0);

  var button = document.getElementById("button");
  button.remove();
  var nameInputOne = document.getElementById("playerOne");
  nameInputOne.remove();
  var nameInputTwo = document.getElementById("playerTwo");
  nameInputTwo.remove();
  var labelNameOne = document.getElementById("playerOneLabel");
  labelNameOne.remove();
  var labelNameTwo = document.getElementById("playerTwoLabel");
  labelNameTwo.remove();

  var instructionLabel = document.getElementById("instructionLabel");
  instructionLabel.innerHTML = "Player One Starts:  " + playerOne.name;

  var bigLabelOne = document.getElementById("bigLabelOne");
  bigLabelOne.innerHTML = "---> 'O' " + playerOne.name;

  var bigLabelTwo = document.getElementById("bigLabelTwo");
  bigLabelTwo.innerHTML = "---> 'X'" + playerTwo.name;
};
