import fetch from "node-fetch";

export async function callboard() {
  const res = await fetch(`http://localhost:3000/board`);

  if (res.status !== 200) {
    console.log(`Error ${res.status}`);
  }

  const result = await res.json();
  return result.board;
}

export async function getDiceRoll6() {
  const res = await fetch(`http://localhost:3000/rollDice`);

  if (res.status !== 200) {
    console.log(`Error ${res.status}`);
  }
  const result = await res.json();
  return result.roll;
}

export async function callWelcome() {
  const res = await fetch(`http://localhost:3000/dialogue/welcome`);

  if (res.status !== 200) {
    console.log(`Error ${res.status}`);
  }
  const result = await res.text();
  return result;
}
export async function callEnd() {
  const res = await fetch(`http://localhost:3000/dialogue/end`);

  if (res.status !== 200) {
    console.log(`Error ${res.status}`);
  }
  const result = await res.text();
  return result;
}
console.log(await callEnd());
// async function updateP1HouseSpace() {
//   const res = await fetch(`http://localhost:3000/location/player1`);

//   if (res.status !== 200) {
//     console.log(`Error${res.status}`);

//     const result = await res.json();
//     return result.player1HouseSpace;
//   }
// }
// async function updateP2HouseSpace() {
//   const res = await fetch(`http://localhost:3000/location/player2`);

//   if (res.status !== 200) {
//     console.log(`Error${res.status}`);

//     const result = await res.json();
//     return result.player2HouseSpace;
//   }
// }
// async function updateP3HouseSpace() {
//   const res = await fetch(`http://localhost:3000/location/player3`);

//   if (res.status !== 200) {
//     console.log(`Error${res.status}`);

//     const result = await res.json();
//     return result.player1HouseSpace;
//   }
// }
// async function updateP4HouseSpace() {
//   const res = await fetch(`http://localhost:3000/location/player4`);

//   if (res.status !== 200) {
//     console.log(`Error${res.status}`);

//     const result = await res.json();
//     return result.player4HouseSpace;
//   }
// }
