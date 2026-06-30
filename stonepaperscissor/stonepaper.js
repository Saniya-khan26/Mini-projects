let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "rgb(9, 7, 55)";

};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `you lose! .computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {

  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor//paper
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      //rock scissor
      userWin = compChoice === "scissor" ? false : true;
    }
    else {
      //rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")

    playGame(userChoice);
  });
});