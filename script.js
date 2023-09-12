/** @format */

// todo Selecting the function buttons
const player1Btn = document.querySelector(".btn-1");
const player2Btn = document.querySelector(".btn-2");
const restBtn = document.querySelector(".restBtn");

// todo Selecting the DOM elements where changes to be applied
const dicesImages = document.querySelector(".dices-images");
const player1Value = document.querySelector(".value-1");
const player2Value = document.querySelector(".value-2");
const h1Text = document.querySelector(".h1Text");

// todo Array of dice images
const images = [
  "./img/value1-dice.png",
  "./img/value2-dice.png",
  "./img/value3-dice.png",
  "./img/value4-dice.png",
  "./img/value5-dice.png",
  "./img/value6-dice.png",
];

// ? winner score
const winnerScore = 30;
// ? Initial player value = 0;
let player1Score = 0;
let player2Score = 0;

// ! Function to set a default image
const setDefaultImage = () => {
  const img = document.createElement("img");
  img.setAttribute("src", images[0]);
  dicesImages.innerHTML = "";
  dicesImages.appendChild(img);
  player1Value.textContent = 0;
  player2Value.textContent = 0;
  player1Score = 0;
  player2Score = 0;
  h1Text.textContent = "let's go to play";
  h1Text.classList.remove("winner");
  player1Btn.disabled = false;
  player2Btn.disabled = false;
};

// ! Function to handle player button 1
const rollDice1 = () => {
  const randomNum = Math.floor(Math.random() * images.length);
  const img = document.createElement("img");
  img.setAttribute("src", images[randomNum]);
  dicesImages.innerHTML = "";
  dicesImages.appendChild(img);
  let printvalue1 = randomNum + 1;
  player1Score += printvalue1;
  if (player1Score >= winnerScore) {
    h1Text.textContent =
      "🎉🎉 Congratulations Player 1! 🏆 You're the winner! 🥇 Well done! 👏👏";
    h1Text.classList.add("winner");
    player1Value.textContent = player1Score;

    // ? disable both player btn
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  } else {
    player1Value.textContent = player1Score;
    h1Text.textContent = "player-2 to play";

    // ? disable one button
    player1Btn.disabled = true;
    player2Btn.disabled = false;
  }
};

// ! Function to handle player button 2
const rollDice2 = () => {
  const randomNum = Math.floor(Math.random() * images.length);
  const img = document.createElement("img");
  img.setAttribute("src", images[randomNum]);
  dicesImages.innerHTML = "";
  dicesImages.appendChild(img);
  let printvalue2 = randomNum + 1;
  player2Score += printvalue2;
  if (player2Score >= winnerScore) {
    h1Text.textContent =
      "🎉🎉 Congratulations Player 2! 🏆 You're the winner! 🥇 Well done! 👏👏";
    h1Text.classList.add("winner");
    player2Value.textContent = player2Score;

    // ? disable both player btn
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  } else {
    player2Value.textContent = player2Score;
    h1Text.textContent = "Player-1 to play";

    // ? disable one button
    player1Btn.disabled = false;
    player2Btn.disabled = true;
  }
};

// todoAdding event listeners to the buttons
player1Btn.addEventListener("click", rollDice1);
player2Btn.addEventListener("click", rollDice2);
restBtn.addEventListener("click", setDefaultImage);
