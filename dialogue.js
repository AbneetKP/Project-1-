import { player1Name, player2Name, player3Name, player4Name } from "./index.js";

export function welcome() {
  console.log("Welcome Trick or Treaters!");
}

export function greetPlayers() {
  console.log(`Welcome ${player1Name},${player2Name},${player3Name}.${player4Name}
    Prepare yourselves for the a fright full night indeed!`);
}

export function giveRulesAndExplainBoard() {
  console.log(`Alright let me explain the board, there is 50 total houses on the board
    and each house will give you a candy where ever you land, careful though some houses are
    not so friendly and there is a special house space that gives out full size bars!`);

  console.log(
    `I will start you all off with 1 candy from me, to begin tonights festivities`
  );
  console.log(`${player1Name} has received 1 candy`);
  console.log(`${player2Name} has received 1 candy`);
  console.log(`${player3Name} has received 1 candy`);
  console.log(`${player4Name} has received 1 candy`);
}

export function announceWinner() {
  console.log(`You're the first person to get enough candy to clear the Spook Spaces challenge!
    Congratulations (winnerName)!!! `);
}
