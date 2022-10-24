import { winner } from "./dice.js";
import chalk from "chalk";
import { player1Name, player2Name, player3Name, player4Name } from "./index.js";

export function welcome() {
  console.log("Welcome Trick or Treaters! Welcome to spooky spaces!");
  console.log("\n");
  console.log("Lets start by getting your names");
}

export function greetPlayers() {
  console.log(`Welcome ${chalk.red(player1Name)}, ${chalk.green(
    player2Name
  )}, ${chalk.yellow(player3Name)}, ${chalk.blue(player4Name)}

  Prepare yourselves for the a fright full night indeed!`);
}

export function giveRulesAndExplainBoard() {
  console.log(`Alright let me explain the rules, there is 50 total houses in this neighborhood
and each house will give you a candy where ever you land, careful though some houses are
not so friendly and there is a special house space that gives out full size bars!`);
  console.log("\n");
  console.log(
    `The first person to go through the neighborhood and get a total of 15 candy will be the winner.
However if you don't have enough candy we will send you to another neighbhorhood.`
  );
  console.log("\n");
  console.log(
    `I will start you all off with 1 candy from me, to begin tonights festivities.`
  );
  console.log(`${chalk.red(player1Name)} has received 1 candy`);
  console.log(`${chalk.green(player2Name)} has received 1 candy`);
  console.log(`${chalk.yellow(player3Name)} has received 1 candy`);
  console.log(`${chalk.blue(player4Name)} has received 1 candy`);
  console.log("\n");
  console.log(
    `Alright lets get start then! ${chalk.red(player1Name)} gets first roll!`
  );
}

export function announceWinner() {
  console.log(`You're the first person to get enough candy to clear the Spook Spaces challenge!
    Congratulations ${chalk.orange(winner)}!`);
}
