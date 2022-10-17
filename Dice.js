const getDiceRoll10 = (dice10) => {
  let length = dice10.length;

  const randomIndex = Math.floor(Math.random() * length);
  //conditional
  return dice10[randomIndex];
};

let dice10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getDiceRoll10(dice10));

const getDiceRoll6 = (dice6) => {
  let length = dice6.length;

  const randomIndex = Math.floor(Math.random() * length);
  return dice6[randomIndex];
};

let dice6 = [1, 2, 3, 4, 5, 6];

console.log(getDiceRoll6(dice6));

module.exports = {
  getDiceRoll10,
  getDiceRoll6,
};
