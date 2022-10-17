import rl from "readline-sync";
let player1Candy;
let player2Candy;
let player3Candy;

let player1HouseSpace;
let player2HouseSpace;
let player3HouseSpace;

console.log("Welcome Trick or Treaters!");

const player1Name = rl.question("Player 1 username? ");
const player2Name = rl.question("Player 2 username? ");
const player3Name = rl.question("Player 3 username? ");

console.log(`Welcome ${player1Name}, ${player2Name}, and ${player3Name}. 
Prepare yourselves for the a fright full night indeed!`);

console.log(`Alright let me explain the board, there is 50 total houses on the board 
and each house will give you a candy where ever you land, careful though some houses are 
not so friendly and there is a special house space that gives out full size bars!`);

console.log(
  `Alright lets have you all roll for your turn order, to see who gets first dibs on the houses`
);

// Pick turn order
console.log(``); //who went first

console.log(`you got 1 candy!`); //basic space + 1

console.log("you lost 1 candy!"); //basic space - 1

console.log(`you got 10 candies, what a nice house`); // lucky house

console.log(`hey welcome back, how much candy did you get?`); // set function to check candy total

console.log(`Nice, you're the winner`);
