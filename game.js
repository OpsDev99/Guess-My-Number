let buttonStart = document.getElementById("button-start");
let buttonReset = document.getElementById("reset");
let randomNumber = Math.floor(Math.random() * 10 + 1);
let userGuessInput = document.getElementById("userGuess");
let questionSign = document.getElementById("interrogation-sign");
let subtitleText = document.getElementById("subtitle");
let resultTab = document.getElementById("result");

buttonStart.addEventListener("click", function () {
  let userGuess = parseFloat(userGuessInput.value);
  if (userGuess == randomNumber) {
    questionSign.innerText = `${randomNumber}`;
    subtitleText.innerText = ` The number is ${randomNumber} you win!`;
    resultTab.innerText = `${randomNumber}`;
  } else {
    questionSign.innerText = `${randomNumber}`;
    subtitleText.innerText = `The number is ${randomNumber} try again`;
    resultTab.innerText = ` Result:${randomNumber}`;
  }
  if (userGuess > 10 || userGuess < 0) {
    alert("Please add a number from 1 to 10");
    questionSign.innerText = "?";
  }
  if (userGuess == 0) {
    alert("Please add a number");
    questionSign.innerText = "?";
  }
});

buttonReset.addEventListener("click", function () {
  questionSign.innerText === "Resetting";
  if ((questionSign.innerText = "Resetting")) questionSign.innerText = "?";
  randomNumber = Math.floor(Math.random() * 10 + 1);
  subtitleText.innerText = "Guess the number";
  resultTab.innerText = "Result";
});
