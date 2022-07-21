/**
 * Returns a random computer choice for the game as the string "rock", "paper", or "scissors".
 * 
 * var computerNumberChoice stores a random integer from 0 to 2 (inclusive).
 */

function getComputerChoice() {
    computerNumberChoice = Math.floor(Math.random() * 3);
}