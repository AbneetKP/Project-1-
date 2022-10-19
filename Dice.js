import rl from "readline-sync";

let player1HouseSpace = 0;
let player2HouseSpace = 0;
let player3HouseSpace = 0;
let player4HouseSpace = 0;

let player1Candy = 0;
let player2Candy = 0;
let player3Candy = 0;
let player4Candy = 0;

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
board[(1, 2, 3, 4, 6, 8, 9, 10)] = +1;
board[5] = -1;
board[7] = +5;

function getDiceRoll6() {
  const dice6 = [1, 2, 3, 4, 5, 6];
  const numDicesides = dice6.length;
  const randomIndex = Math.floor(Math.random() * numDicesides);
  return dice6[randomIndex];
}

function updateP1Score(diceRoll6) {
  player1HouseSpace = player1HouseSpace + diceRoll6;
  console.log(player1HouseSpace);
}

function updateP2Score(diceRoll6) {
  player2HouseSpace = player2HouseSpace + diceRoll6;
  console.log(player2HouseSpace);
}

function updateP3Score(diceRoll6) {
  player3HouseSpace = player3HouseSpace + diceRoll6;
  console.log(player3HouseSpace);
}

function updateP4Score(diceRoll6) {
  player4HouseSpace = player4HouseSpace + diceRoll6;
  console.log(player4HouseSpace);
}

function getCandyP1() {
  //for (let i = 0; i <= board.length; i++) {
  if (player1HouseSpace === board[i]) {
    return (player1Candy = player1Candy + board[i]);
  }
  //}
}
function getCandyP2() {
  for (let i = 0; i <= board.length; i++) {
    if (player2HouseSpace === board[i]) {
      return (player2Candy = player2Candy + board[i]);
    }
  }
}
function getCandyP3() {
  for (let i = 0; i <= board.length; i++) {
    if (player3HouseSpace === board[i]) {
      return (player3Candy = player3Candy + board[i]);
    }
  }
}
function getCandyP4() {
  for (let i = 0; i <= board.length; i++) {
    if (player4HouseSpace === board[i]) {
      return (player4Candy = player4Candy + board[i]);
    }
  }
}
export function roll() {
  while (
    player1HouseSpace <= 10 ||
    player2HouseSpace <= 10 ||
    player3HouseSpace <= 10 ||
    player4HouseSpace <= 10
  ) {
    let diceRoll6 = getDiceRoll6();

    rl.question("Player 1 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updateP1Score(diceRoll6);
    getCandyP1();
    console.log(`you have ${player1Candy} candy!`);

    diceRoll6 = getDiceRoll6();

    rl.question("Player 2 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updateP2Score(diceRoll6);

    diceRoll6 = getDiceRoll6();

    rl.question("Player 3 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updateP3Score(diceRoll6);

    diceRoll6 = getDiceRoll6();

    rl.question("Player 4 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updateP4Score(diceRoll6);
  }
}
roll();
