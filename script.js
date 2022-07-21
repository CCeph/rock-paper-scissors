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
}