/** @format */

// todo Selecting the function buttons
const player1Btn = document.querySelector(".btn-1");
const player2Btn = document.querySelector(".btn-2");
const restBtn = document.querySelector(".restBtn");

// todo Selecting the DOM elements where changes to be applied
const dicesImages = document.querySelector(".dices-images");
const player1Value = document.querySelector(".value-1");
const player2Value = document.querySelector(".value-2");

// todo Array of dice images
const images = [
  "./img/value1-dice.png",
  "./img/value2-dice.png",
  "./img/value3-dice.png",
  "./img/value4-dice.png",
  "./img/value5-dice.png",
  "./img/value6-dice.png",
];

// ! Function to set a default image
const setDefaultImage = () => {
  // * Create an img element and set its source attribute to the default image
  const img = document.createElement("img");
  img.setAttribute("src", images[0]);

  // * Clear previous dice image
  dicesImages.innerHTML = "";

  // * Append the image to the dicesImages container
  dicesImages.appendChild(img);
  // * set default span value as a zero
  player1Value.textContent = 0;
  player2Value.textContent = 0;
};

// ! Function to handle player button 1
const rollDice1 = () => {
  // * Generate a random number for selecting a dice image
  const randomNum = Math.floor(Math.random() * images.length);

  // * Create an img element and set its source attribute
  const img = document.createElement("img");
  img.setAttribute("src", images[randomNum]);

  // * Clear previous dice image
  dicesImages.innerHTML = "";

  // * Append the image to the dicesImages container
  dicesImages.appendChild(img);

  let printvalue1 = randomNum + 1;
  let add = printvalue1 * 2;

  console.log(add);
  // * Update the player1Value span with the rolled value
  player1Value.textContent = printvalue1;
};

// ! Function to handle player button 2
const rollDice2 = () => {
  // * Generate a random number for selecting a dice image
  const randomNum = Math.floor(Math.random() * images.length);

  // * Create an img element and set its source attribute
  const img = document.createElement("img");
  img.setAttribute("src", images[randomNum]);

  // * Clear previous dice image
  dicesImages.innerHTML = "";

  // * Append the image to the dicesImages container
  dicesImages.appendChild(img);

  printvalue2 = randomNum + 1;
  // * Update the player2Value span with the rolled value
  player2Value.textContent = printvalue2;
};

// todoAdding event listeners to the buttons
player1Btn.addEventListener("click", rollDice1);
player2Btn.addEventListener("click", rollDice2);
restBtn.addEventListener("click", setDefaultImage);
