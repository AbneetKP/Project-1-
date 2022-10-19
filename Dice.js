const getDiceRoll10 = (dice10) => {
  let length = dice10.length;

  const randomIndex = Math.floor(Math.random() * length);
  //conditional
  return dice10[randomIndex];
};

let dice10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


