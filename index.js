let computerScore = 0;
let userScore = 0;

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const plays = ["Rock", "Paper", "Scissors"];
  console.log(plays[randomNumber]);
  return plays[randomNumber];
}

function playRound(userSelection) {
  let response = "";
  const computerSelection = computerPlay();

  if (userSelection === computerSelection) {
    response = "It's a draw. Play again";
  } else if (userSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    response = "You lose! Computer played paper.";
  } else if (userSelection === "Paper" && computerSelection === "Rock") {
    userScore++;
    response = "You win! Computer played rock.";
  } else if (userSelection === "Rock" && computerSelection === "Scissors") {
    userScore++;
    response = "You win! Computer played scissors.";
  } else if (userSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    response = "Computer played rock. You lose!";
  } else if (userSelection === "Scissors" && computerSelection === "Paper") {
    userScore++;
    response = "Computer played paper. You win!";
  } else if (userSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    response = "Computer played scissors. You lose!";
  }

  changeDOM(response);
  checkWinner();
}

function checkWinner() {
  if (userScore > computerScore && userScore === 5) {
    alert("Congrats! You won the game.");
    userScore = 0;
    computerScore = 0;
    changeDOM("");
  } else if (userScore < computerScore && userScore === 5) {
    alert("Darn, you lost. Play again!");
    userScore = 0;
    computerScore = 0;
    changeDOM("");
  }
}

function changeDOM(message) {
    //change output box
    if (userScore < 5 || computerScore < 5) document.getElementById("output").innerHTML = message;

    //change score if neither is at 5 yet
    if (userScore < 5 || computerScore < 5) {
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("user").innerHTML = userScore;
    }

}