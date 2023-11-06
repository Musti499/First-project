const num = document.querySelector(".number");
const checkbutton = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const scoreEl = document.querySelector(".score");
const highscores = document.querySelector(".highscore");
const again = document.querySelector(".again");
console.log(guess);

// generating random numbers

const randomNum = Math.floor(Math.random() * 20) + 1;

// input

let userGuess;
let score = 20;
let highscore = 0;

checkbutton.addEventListener("click", function () {
  userGuess = guess.value;
  score--;
  scoreEl.textContent = score;
  if (userGuess < randomNum) {
    message.textContent = "Too low!";
  } else if (userGuess > randomNum) {
    message.textContent = "Too high!";
  } else {
    body.style.backgroundColor = "#60b347";
    // body.classList.add("abc")
    message.textContent = "Correct Answer!";
    num.textContent = randomNum;
    if (highscore < score) {
      highscores.textContent = score;
    }
    highscore = score;
  }
  if (score === 0) {
    message.textContent = "Game over";
    checkbutton.disabled = true;
  }
});

again.addEventListener("click", function () {
  score = 20;
  scoreEl.textContent = score;
  message.textContent = "Start guessing...";
  num.textContent = "?";
  body.style.backgroundColor = "#222";
});
