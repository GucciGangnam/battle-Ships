// imports 
import GameBoard from './gameBoard';
import playergameBoard from './index';
import Ship from './ship';

// display both game boards 

function displayPageSkeleton() {
// create sreps header
const stepsHeader = document.createElement('div');
stepsHeader.classList.add('steps-header');
stepsHeader.textContent = 'Place 1st ship';
document.body.appendChild(stepsHeader);

//insert rotate button 
const rotateButtonDiv = document.createElement('div');
rotateButtonDiv.classList.add('rotate-button-div');
document.body.appendChild(rotateButtonDiv);
const rotateButton = document.createElement('button');
rotateButton.classList.add('rotate-button');
rotateButton.textContent = 'Rotate';
rotateButtonDiv.appendChild(rotateButton);

// create game container 
const gameContainer = document.createElement('div');
gameContainer.classList.add('game-container');
document.body.appendChild(gameContainer);

// create player game board 
const playerGameBoard = document.createElement('div');
playerGameBoard.classList.add('player-game-board');
gameContainer.appendChild(playerGameBoard);

// create computer game board 
const computerGameBoard = document.createElement('div');
computerGameBoard.classList.add('computer-game-board');
gameContainer.appendChild(computerGameBoard);

// display player game board
displayPlayerGameBoard();

}
export default displayPageSkeleton;



function displayPlayerGameBoard() {
    for (let i = 0; i < 10; i++){ 
        for (let j = 0; j < 10; j++){ 
            const square = document.createElement('div');
            square.classList.add('square');
            square.id = `${i}${j}`;
            if (playergameBoard.board[i][j] instanceof Ship){
                square.classList.add('ship');
                console.log('ship');
            } else if (playergameBoard.board[i][j] == 'miss') {
                square.classList.add('miss');
                console.log('miss');
            }
            else if (playergameBoard.board[i][j] === 'empty') {
                square.classList.add('empty');
                console.log('empty');
            }
            let playerGameBoard = document.querySelector('.player-game-board');
            playerGameBoard.appendChild(square);
        }
    }
}