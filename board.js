// let board = [
//   {
//     0: "start",
//     1: 1,
//     2: 1,
//     3: 1,
//     4: 1,
//     5: -1,
//     6: 1,
//     7: 10,
//     8: 1,
//     9: 1,
//     10: "end",
//   },
// ];
// let playerHouseSpace = 0;
// let player1Candy = 0;
// function getCandy() {
//   while (playerHouseSpace === board) {
//     player1Candy = player1Candy + board;
//     return player1Candy;
//   }
// }
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

board[(1, 2, 3, 4, 6, 8, 9, 10)] = +1;
board[5] = -1;
board[7] = +5;
console.log(board[5]);
