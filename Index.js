import rl from "readline-sync";
import chalk from "chalk";
import {
  greetPlayers,
  giveRulesAndExplainBoard,
  announceWinner,
} from "./dialogue.js";
import { roll } from "./dice.js";
import { callEnd, callWelcome } from "./async.js";

console.log(await callWelcome());
console.log("\n");
export let player1Name = rl.question("Player 1 username? ");
console.log("\n");
export let player2Name = rl.question("Player 2 username? ");
console.log("\n");
export let player3Name = rl.question("Player 3 username? ");
console.log("\n");
export let player4Name = rl.question("Player 4 username? ");
console.log("\n");
player1Name = chalk.red(player1Name);
player2Name = chalk.green(player2Name);
player3Name = chalk.yellow(player3Name);
player4Name = chalk.blue(player4Name);
greetPlayers();
console.log("\n");
giveRulesAndExplainBoard();
console.log("\n");
await roll();
console.log(await callEnd());
announceWinner();
