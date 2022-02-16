let n;
let flag = true;
let winningCombinations = [];

cellClicked = function (clicked_id) {
  const cell = document.getElementById("" + clicked_id);
  console.log("Cell Id: " + clicked_id);

  switch (cell.innerHTML) {
    case " ":
      if (flag === true) {
        cell.innerHTML = "O";
        flag = false;
        break;
      }
      if (flag === false) {
        cell.innerHTML = "X";
        flag = true;
        break;
      }
      break;
  }
  checkGameStatus();
};

checkGameStatus = function () {
  let xCounter = 0;
  let oCounter = 0;

  winningCombinations.forEach((winningCombination) => {
    winningCombination.forEach((index) => {
      let cell = document.getElementById("" + index);
      if (cell.innerHTML === "X") xCounter++;
      if (cell.innerHTML === "O") oCounter++;
    });
    if (xCounter === n) {
      setTimeout(() => {resetBoard("X wins!"); }, 1000);
    }
    xCounter = 0;
    if (oCounter === n) {
      setTimeout(() => {resetBoard("O wins!");  }, 1000);
    }
    oCounter = 0;
  });
};

resetBoard = function (message) {
  alert(message);
  winningCombinations.forEach((winningCombination) => {
    winningCombination.forEach((index) => {
      let cell = document.getElementById("" + index);
      cell.innerHTML = " ";
    });
  });
};

buildWinningCombinations = function () {
  for (let i = 1; i <= n * n; i = i + n) {
    var winningRow = [];
    for (let j = i; j < n + i; j++) {
      winningRow.push(j);
    }
    winningCombinations.push(winningRow);
  }
  for (let i = 1; i <= n; i++) {
    var winningColumn = [];
    for (let j = i; j <= n * n; j = j + n) {
      winningColumn.push(j);
    }
    winningCombinations.push(winningColumn);
  }
  var winningDownCross = [];
  for (let i = 1; i <= n * n; i = i + (n + 1)) {
    winningDownCross.push(i);
  }
  winningCombinations.push(winningDownCross);
  var winningUpCross = [];
  for (let i = n; i <= n * n - n + 1; i = i + (n - 1)) {
    winningUpCross.push(i);
  }
  winningCombinations.push(winningUpCross);

  //winningCombinations.forEach(element => console.log(element));
};

startGame = function () {
  let nInput = document.getElementById("nInput").value;
  console.log("XD: " + nInput);
  n = parseInt(nInput);

  buildWinningCombinations();

  let frColsRows = "1fr";
  for (let i = 1; i < n; i++) {
    frColsRows = frColsRows + " 1fr";
  }
  document.getElementById("gridContainer").style.gridTemplateColumns =
    frColsRows;
  document.getElementById("gridContainer").style.gridTemplateRows = frColsRows;

  let id = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const item = document.createElement("div");
      item.setAttribute("id", id);
      item.setAttribute("onClick", "cellClicked(id)");
      //item.style.backgroundColor = "red";
      item.style.borderStyle = "groove";
      //item.innerHTML = "" + id;
      item.innerHTML = " ";
      document.getElementById("gridContainer").appendChild(item);
      id++;
    }
  }
};
