let playerScore = 0;
let computerScore = 0;

function getUserChoice(id) {
  let button = document.getElementById(id);
  return button.textContent.trim();
}

function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRockPaperScissors(playerChoice, computerChoices) {
  playerSelection.innerHTML = "Player : " + playerChoice;
  computerSelection.innerHTML = "Computer: " + computerChoices;
  if (playerChoice == "Rock") {
    switch (computerChoices) {
      case "Rock":
        result.innerHTML = "Tie!";
        result.style.color = "white";
        break;
      case "Paper":
        result.innerHTML = "You lost!";
        result.style.color = "red";
        computerScore += 1;
        computerScoreId.innerHTML = computerScore;
        break;
      case "Scissors":
        result.innerHTML = "You win!";
        result.style.color = "green";
        playerScore += 1;
        playerScoreId.innerHTML = playerScore;
        break;
    }
  } else if (playerChoice == "Paper") {
    switch (computerChoices) {
      case "Rock":
        result.innerHTML = "You win!";
        result.style.color = "green";
        playerScore += 1;
        playerScoreId.innerHTML = playerScore;
        break;
      case "Paper":
        result.innerHTML = "Tie!";
        result.style.color = "white";
        break;
      case "Scissors":
        result.innerHTML = "You lost!";
        result.style.color = "red";
        computerScore += 1;
        computerScoreId.innerHTML = computerScore;
        break;
    }
  } else if (playerChoice == "Scissors") {
    switch (computerChoices) {
      case "Rock":
        result.innerHTML = "You lost!";
        result.style.color = "red ";
        computerScore += 1;
        computerScoreId.innerHTML = computerScore;
        break;
      case "Paper":
        result.innerHTML = "You win!";
        result.style.color = "green";
        playerScore += 1;
        playerScoreId.innerHTML = playerScore;
        break;
      case "Scissors":
        result.innerHTML = "Tie!";
        result.style.color = "white";
        break;
    }
  }
  document.getElementById("result").classList.add("animate-text");
  setTimeout(() => {
    document.getElementById("result").classList.remove("animate-text");
  }, 350);
}

console.log(result);
