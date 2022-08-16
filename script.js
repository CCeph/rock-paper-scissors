let winCounter = 0
let lossCounter = 0
let drawCounter = 0
let roundNumber = 0

/**
 * Returns a random computer choice for the game as the string "rock", "paper", or "scissors".
 * 
 * var computerNumberChoice stores a random integer from 0 to 2 (inclusive).
 * switch statement translates the computer random generated integer into a game choice as a string.
 */

function getComputerChoice() {
    computerNumberChoice = Math.floor(Math.random() * 3);
    computerGameChoice = "";
    switch(computerNumberChoice) {
        case 0:
            computerGameChoice = "rock";
            break;
        case 1:
            computerGameChoice = "paper";
            break;
        case 2:
            computerGameChoice = "scissors";
            break;
        default:
            console.log("Error in the computer choice.")
    }
    return computerGameChoice
}


buttons = document.querySelectorAll(".playButtons")
buttons.forEach(button => button.addEventListener('click', playRound))

function playRound() {
    playerSelection = this.getAttribute('data-selection');
    roundResult = oneRound(playerSelection, getComputerChoice())
    gameTracking(roundResult)
}

function gameTracking(roundResult) {
    //Displays the result of each round.
    matchResult = document.querySelector(".matchResult");
    
    if (matchResult.textContent === "No rounds played yet.") {
        roundNumber += 1
        matchResult.textContent = `Round ${roundNumber} result: ${roundResult}`
    } else {
        roundNumber += 1
        matchResult.textContent += `\nRound ${roundNumber} result: ${roundResult}`;
    }   
    game(roundResult) 
}

//Keeps track of win/loss/draw count
function game(roundResult) {
    if (roundResult.substr(0, 8) === "You win!") {
        winCounter += 1
    } else if (roundResult.substr(0, 9) === "You lose!") {
        lossCounter += 1
    } else if (roundResult.substr(0, 5) === "Draw!") {
        drawCounter += 1
    }
    if (winCounter === 5) {
        matchResult.textContent += "\nYou win!"
        buttons.forEach(button => button.removeEventListener('click', playRound))
    } else if (lossCounter === 5) {
        matchResult.textContent += "\nYou lose..."
        buttons.forEach(button => button.removeEventListener('click', playRound))
    }
}

/**
 * This function plays one round of rock, paper, scissors and returns a string with the results.
 * 
 * @param {*} playerSelection is the player's selection for the game
 * @param {*} computerSelection is the computer randomly generated selection, and it's argument should call upon the function getComputerChoice()
 * The switch statement determines the winner and returns a string explaining the results.
 */
function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(true) {
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "You win! Rock beats scissors.";
        
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "You win! Paper beats rock.";

        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "You win! Scissors beat paper.";

        case (playerSelection === "rock" && computerSelection === "paper"):
            return "You lose! Paper beats rock.";

        case (playerSelection === "paper" && computerSelection === "scissors"):
            return "You lose! Scissors beat paper.";
        
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "You lose! Rock beats scissors.";

        case (playerSelection === computerSelection):
            return "Draw! Both of you made the same choice.";
        
        default:
            console.log("Error in the game logic.");
    }
}