import rl from "readline-sync";
import chalk from "chalk";
import { player1Name, player2Name, player3Name, player4Name } from "./index.js";
import { callboard, getDiceRoll6 } from "./async.js";

let player1HouseSpace = 49;
let player2HouseSpace = 0;
let player3HouseSpace = 0;
let player4HouseSpace = 0;

let player1Candy = 15;
let player2Candy = 1;
let player3Candy = 1;
let player4Candy = 1;

export let winner = "";

let board = await callboard();

getDiceRoll6();

function getBadHouse() {
  const badHouse = [
    "Get of lawn you whippersnappers!...-1 Candy",
    "...lights are off and you see an empty bowl...-1 Candy",
    "Aren't you too old to to be trick or treating?...-1 Candy",
    "Candy rots your teeth, here have some dental floss. You'll thank me later...-1 Candy ",
  ];
  const response = badHouse.length;
  const randomIndex = Math.floor(Math.random() * response);
  return badHouse[randomIndex];
}
function getHouse() {
  const house = [
    "Happy Halloween! Here's your candy!...+1 Candy",
    "...lights are off and you see a sign take one candy...+1 Candy",
    "Happy Halloween! What a wonderful costume you have!...+1 Candy",
  ];
  const response = house.length;
  const randomIndex = Math.floor(Math.random() * response);
  return house[randomIndex];
}

function getLuckyHouse() {
  const luckyHouse = [
    "Happy Halloween! Here's a nice handful for you!...+10 Candies",
    "...lights are off and you see a sign take one candy, you ignore the sign...+10 Candies",
    "Happy Halloween! What a wonderful costume you have, have some extra candy!...+10 Candies",
  ];
  const response = luckyHouse.length;
  const randomIndex = Math.floor(Math.random() * response);
  return luckyHouse[randomIndex];
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
  if (board[player1HouseSpace] === 10) {
    console.log(getLuckyHouse());
  }
  if (board[player1HouseSpace] === 0) {
    console.log(`That was the last house of the neighborhood!`);
  } else if (board[player1HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else {
    console.log(getHouse());
  }
}

function getCandyP2() {
  player2Candy = player2Candy + board[player2HouseSpace];
  if (board[player2HouseSpace] === 10) {
    console.log(getLuckyHouse());
  }
  if (board[player2HouseSpace] === 0) {
    console.log(`That was the last house of the neighborhood!`);
  } else if (board[player2HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else {
    console.log(getHouse());
  }
}

function getCandyP3() {
  player3Candy = player3Candy + board[player3HouseSpace];
  if (board[player3HouseSpace] === 10) {
    console.log(getLuckyHouse());
  }
  if (board[player3HouseSpace] === 0) {
    console.log(`That was the last house of the neighborhood!`);
  } else if (board[player3HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else {
    console.log(getHouse());
  }
}

function getCandyP4() {
  player4Candy = player4Candy + board[player4HouseSpace];
  if (board[player4HouseSpace] === 10) {
    console.log(getLuckyHouse());
  }
  if (board[player4HouseSpace] === 0) {
    console.log(`That was the last house of the neighborhood`);
  } else if (board[player4HouseSpace] !== 1) {
    console.log(getBadHouse());
  } else {
    console.log(getHouse());
  }
}
async function doPlayer1() {
  rl.question(`${chalk.red(player1Name)}'s TURN! Roll! (PRESS ENTER) `);
  let diceRoll6 = await getDiceRoll6();
  console.log("\n");
  console.log(`
         ________    
       /  O     / \\)   
      /    O   / O \\)) 
  (( / _____O /     \\
  
     \\ O    O  \\    / 
      \\ O    O  \\ O/   
     ((\\ O____O  \\/ )) 
   
   
  `);
  console.log(`You rolled a ${chalk.red(diceRoll6)}`);

  updateP1HouseSpace(diceRoll6);
  console.log(`You're at house ${chalk.magenta(player1HouseSpace)}`);

  getCandyP1();
  console.log(`You have ${chalk.cyan(player1Candy)} candy total!`);
  console.log("\n");
}

async function doPlayer2() {
  rl.question(`${chalk.green(player2Name)}'s TURN! Roll! (PRESS ENTER) `);
  let diceRoll6 = await getDiceRoll6();
  console.log("\n");
  console.log(`
         ________    
       /  O     / \\)   
      /    O   / O \\)) 
  (( / _____O /     \\
  
     \\ O    O  \\    / 
      \\ O    O  \\ O/   
     ((\\ O____O  \\/ )) 
   
  `);
  console.log(`You rolled a ${chalk.green(diceRoll6)}`);

  updateP2HouseSpace(diceRoll6);
  console.log(`You're at house ${chalk.magenta(player2HouseSpace)}`);

  getCandyP2();
  console.log(`You have ${chalk.cyan(player2Candy)} candy total!`);
  console.log("\n");
}

async function doPlayer3() {
  rl.question(`${chalk.yellow(player3Name)}'s TURN! Roll! (PRESS ENTER) `);
  let diceRoll6 = await getDiceRoll6();
  console.log("\n");
  console.log(`
         ________    
       /  O     / \\)   
      /    O   / O \\)) 
  (( / _____O /     \\
  
     \\ O    O  \\    / 
      \\ O    O  \\ O/   
     ((\\ O____O  \\/ )) 
   
   
  `);
  console.log(`You rolled a ${chalk.yellow(diceRoll6)}`);

  updateP3HouseSpace(diceRoll6);
  console.log(`You're at house ${chalk.magenta(player3HouseSpace)}`);

  getCandyP3();
  console.log(`You have ${chalk.cyan(player3Candy)} candy total!`);
  console.log("\n");
}
async function doPlayer4() {
  rl.question(`${chalk.blue(player4Name)}'s TURN! Roll! (PRESS ENTER) `);
  let diceRoll6 = await getDiceRoll6();
  console.log("\n");
  console.log(`
         ________    
       /  O     / \\)   
      /    O   / O \\)) 
  (( / _____O /     \\
  
     \\ O    O  \\    / 
      \\ O    O  \\ O/   
     ((\\ O____O  \\/ )) 
   
  `);
  console.log(`You rolled a ${chalk.blue(diceRoll6)}`);

  updateP4HouseSpace(diceRoll6);
  console.log(`You're at house ${chalk.magenta(player4HouseSpace)}`);

  getCandyP4();
  console.log(`You have ${chalk.cyan(player4Candy)} candy total!`);
  console.log("\n");
}
export async function roll() {
  while (true) {
    await doPlayer1();
    if (player1HouseSpace >= 50 && player1Candy >= 15) {
      winner = player1Name;
      break;
    } else if (player1HouseSpace >= 50 && player1Candy < 15) {
      player1HouseSpace = 0;
      console.log(
        "looks like you didn't get enough candy, onto the next neighborhood!"
      );
    }
    await doPlayer2();
    if (player2HouseSpace >= 50 && player2Candy >= 15) {
      winner = player2Name;
      break;
    } else if (player2HouseSpace >= 50 && player2Candy < 15) {
      player2HouseSpace = 0;
      console.log(
        "looks like you didn't get enough candy, onto the next neighborhood!"
      );
    }
    await doPlayer3();
    if (player3HouseSpace >= 50 && player3Candy >= 15) {
      winner = player3Name;
      break;
    } else if (player3HouseSpace >= 50 && player3Candy < 15) {
      player3HouseSpace = 0;
      console.log(
        "looks like you didn't get enough candy, onto the next neighborhood!"
      );
    }
    await doPlayer4();
    if (player4HouseSpace >= 50 && player4Candy >= 15) {
      winner = player4Name;
      break;
    } else if (player4HouseSpace >= 50 && player4Candy < 15) {
      player4HouseSpace = 0;
      console.log(
        "looks like you didn't get enough candy, onto the next neighborhood!"
      );
    }
  }
}
