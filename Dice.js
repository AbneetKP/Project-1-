import rl from "readline-sync";
import { board } from "./board";
let player1HouseSpace = 0;
let player2HouseSpace = 0;
let player3HouseSpace = 0;
let player4HouseSpace = 0;

let player1Candy = 0;

board[(1, 2, 3, 4, 6, 8, 9, 10)] = +1;
board[5] = -1;
board[7] = +5;

function getDiceRoll6() {
  const dice6 = [1, 2, 3, 4, 5, 6];
  const numDicesides = dice6.length;
  const randomIndex = Math.floor(Math.random() * numDicesides);
  return dice6[randomIndex];
}

function updatePlayer1Score(diceRoll6) {
  player1HouseSpace = player1HouseSpace + diceRoll6;
  console.log(player1HouseSpace);
}

function updatePlayer2Score(diceRoll6) {
  player2HouseSpace = player2HouseSpace + diceRoll6;
  console.log(player2HouseSpace);
}

function updatePlayer3Score(diceRoll6) {
  player3HouseSpace = player3HouseSpace + diceRoll6;
  console.log(player3HouseSpace);
}

function updatePlayer4Score(diceRoll6) {
  player4HouseSpace = player4HouseSpace + diceRoll6;
  console.log(player4HouseSpace);
}

function getCandy() {
  for (i = 0; i <= board.length; i++) {
    if (player1HouseSpace === board[i]) {
      return (player1Candy = player1Candy + board[i]);
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
    console.log(`You're at house`) + " " + updatePlayer1Score(diceRoll6);

    diceRoll6 = getDiceRoll6();

    rl.question("Player 2 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updatePlayer2Score(diceRoll6);

    diceRoll6 = getDiceRoll6();

    rl.question("Player 3 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updatePlayer3Score(diceRoll6);

    diceRoll6 = getDiceRoll6();

    rl.question("Player 4 TURN! Can you roll? ");
    console.log(`you rolled a ${diceRoll6}`);
    console.log(`You're at house`) + " " + updatePlayer4Score(diceRoll6);
  }
}
