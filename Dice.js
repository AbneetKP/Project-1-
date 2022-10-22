import rl from "readline-sync";
import { player1Name, player2Name, player3Name, player4Name } from "./index.js";

let player1HouseSpace = 0;
let player2HouseSpace = 0;
let player3HouseSpace = 0;
let player4HouseSpace = 0;

let player1Candy = 1;
let player2Candy = 1;
let player3Candy = 1;
let player4Candy = 1;

let board = [
  0, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1,
  1, 1, -1, 1, 1, 1, 10, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1,
  1, 1, 0, 0, 0, 0, 0, 0,
];
function getBadHouse() {
  const badHouse = [
    "Get of lawn you whippersnappers!",
    "...lights are off and you see an empty bowl",
    "Aren't you too old to to be trick or treating?",
    "Candy rots your teeth, here have some dental floss. You'll thank me later ",
  ];
  const response = badHouse.length;
  const randomIndex = Math.floor(Math.random() * response);
  return badHouse[randomIndex];
}
function getHouse() {
  const house = [
    "Happy Halloween! Here's your candy!",
    "...lights are off and you a sign take one candy",
    "Happy Halloween! What a wonderful costume you have!",
  ];
  const response = house.length;
  const randomIndex = Math.floor(Math.random() * response);
  return house[randomIndex];
}

function getLuckyHouse() {
  const luckyHouse = [
    "Happy Halloween! Here's a nice handful for you!",
    "...lights are off and you a sign take one candy, you ignore the sign",
    "Happy Halloween! What a wonderful costume you have, have some extra candy!",
  ];
  const response = luckyHouse.length;
  const randomIndex = Math.floor(Math.random() * response);
  return luckyHouse[randomIndex];
}

function getDiceRoll6() {
  const dice6 = [1, 2, 3, 4, 5, 6];
  const numDicesides = dice6.length;
  const randomIndex = Math.floor(Math.random() * numDicesides);
  return dice6[randomIndex];
}

function updateP1HouseSpace(diceRoll6) {
  player1HouseSpace = player1HouseSpace + diceRoll6;
}

function updateP2HouseSpace(diceRoll6) {
  player2HouseSpace = player2HouseSpace + diceRoll6;
}

function updateP3HouseSpace(diceRoll6) {
  player3HouseSpace = player3HouseSpace + diceRoll6;
}

function updateP4HouseSpace(diceRoll6) {
  player4HouseSpace = player4HouseSpace + diceRoll6;
}

function getCandyP1() {
  player1Candy = player1Candy + board[player1HouseSpace];
  if (board[player1HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else if (board[player1HouseSpace] === 10) {
    console.log(getLuckyHouse());
  } else {
    console.log(getHouse());
  }
}

function getCandyP2() {
  player2Candy = player2Candy + board[player2HouseSpace];
  if (board[player2HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else if (board[player2HouseSpace] === 10) {
    console.log(getLuckyHouse());
  } else {
    console.log(getHouse());
  }
}

function getCandyP3() {
  player3Candy = player3Candy + board[player3HouseSpace];
  if (board[player3HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else if (board[player3HouseSpace] === 10) {
    console.log(getLuckyHouse());
  } else {
    console.log(getHouse());
  }
}

function getCandyP4() {
  player4Candy = player4Candy + board[player4HouseSpace];
  if (board[player4HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else if (board[player4HouseSpace] === 10) {
    console.log(getLuckyHouse());
  } else {
    console.log(getHouse());
  }
}
function checkRequirement() {}
export function roll() {
  while (
    player1HouseSpace > 50 &&
    player1Candy > 15 &&
    player2HouseSpace > 50 &&
    player2Candy > 15 &&
    player3HouseSpace > 50 &&
    player3Candy > 15 &&
    player4HouseSpace > 50 &&
    player4Candy > 15
  ) {
    let diceRoll6 = getDiceRoll6();

    rl.question(`${player1Name}'s TURN! Roll! (PRESS ENTER) `);
    console.log("\n");
    console.log(`You rolled a ${diceRoll6}`);

    updateP1HouseSpace(diceRoll6);
    console.log(`You're at house ${player1HouseSpace}`);

    getCandyP1();
    console.log(`You have ${player1Candy} candy total!`);
    console.log("\n");
    //BREAK Player 2
    diceRoll6 = getDiceRoll6();

    rl.question(`${player2Name}'s TURN! Roll! (PRESS ENTER) `);
    console.log("\n");
    console.log(`You rolled a ${diceRoll6}`);

    updateP2HouseSpace(diceRoll6);
    console.log(`You're at house ${player2HouseSpace}`);

    getCandyP2();
    console.log(`You have ${player2Candy} candy total!`);
    console.log("\n");
    //BREAK PLayer 3
    diceRoll6 = getDiceRoll6();

    rl.question(`${player3Name}'s TURN! Roll! (PRESS ENTER) `);
    console.log("\n");
    console.log(`You rolled a ${diceRoll6}`);

    updateP3HouseSpace(diceRoll6);
    console.log(`You're at house ${player3HouseSpace}`);

    getCandyP3();
    console.log(`You have ${player3Candy} candy total!`);
    console.log("\n");
    //BREAK PLAYER 4
    diceRoll6 = getDiceRoll6();

    rl.question(`${player4Name}'s TURN! Roll! (PRESS ENTER) `);
    console.log("\n");
    console.log(`You rolled a ${diceRoll6}`);

    updateP4HouseSpace(diceRoll6);
    console.log(`You're at house ${player4HouseSpace}`);

    getCandyP4();
    console.log(`You have ${player4Candy} candy total!`);
    console.log("\n");
  }
}

roll();
