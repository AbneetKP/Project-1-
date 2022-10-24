import rl from "readline-sync";
import chalk from "chalk";
import {
  welcome,
  greetPlayers,
  giveRulesAndExplainBoard,
  announceWinner,
} from "./dialogue.js";
import { roll } from "./dice.js";

welcome();
console.log("\n");
export let player1Name = rl.question("Player 1 username? ");
console.log("\n");
export let player2Name = rl.question("Player 2 username? ");
console.log("\n");
export let player3Name = rl.question("Player 3 username? ");
console.log("\n");
export let player4Name = rl.question("Player 4 username? ");
console.log("\n");
greetPlayers();
console.log("\n");
giveRulesAndExplainBoard();
console.log("\n");
roll();
announceWinner();
