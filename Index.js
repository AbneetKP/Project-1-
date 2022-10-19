import rl from "readline-sync";
import { roll } from "./dice.js";

let player1Candy = 0;
let player1HouseSpace = 0;

console.log("Welcome Trick or Treaters!");

const player1Name = rl.question("Player 1 username? ");

console.log(`Welcome ${player1Name}.
Prepare yourselves for the a fright full night indeed!`);

console.log(`Alright let me explain the board, there is 50 total houses on the board
and each house will give you a candy where ever you land, careful though some houses are
not so friendly and there is a special house space that gives out full size bars!`);

roll();

console.log(`you got 1 candy!`); //basic space + 1

console.log("you lost 1 candy!"); //basic space - 1

console.log(`you got 10 candies, what a nice house`); // lucky house

console.log(`Welcome, how much candy did you get?`); // set function to check candy total

console.log(`Sorry, doesn't look you have enough candy`); //send back to first space
console.log(`Nice, you're the winner`); // end of game
