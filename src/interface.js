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
rotateButton.addEventListener('click', () => {
    playergameBoard.availableShips[0].changeDirection();
    console.log(playergameBoard.availableShips[0].direction);
});
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
// const computerGameBoard = document.createElement('div');
// computerGameBoard.classList.add('computer-game-board');
// gameContainer.appendChild(computerGameBoard);

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
            let playerGameBoard = document.querySelector('.player-game-board');
            if (playergameBoard.board[i][j] == 'empty') { 
                square.addEventListener('mouseover', function() {
                    mouseOver(square.id);
                })
                square.addEventListener('click', function() {
                    placeShip(square.id);
                })
                square.addEventListener('mouseout', function() {
                    mouseOut(square.id);
                })
            };
            playerGameBoard.appendChild(square);
        }
    }
    for (let i = 0; i < 10; i++){ 
        for (let j = 0; j < 10; j++){
            if (playergameBoard.board[i][j] instanceof Ship){
                let square = document.getElementById(`${i}${j}`);
                square.classList.add('ship');
            }
            if (playergameBoard.board[i][j] == 'miss') {
                let square = document.getElementById(`${i}${j}`);
                square.classList.add('miss');
            }
            
            if (playergameBoard.hits.some(arr => JSON.stringify(arr) === JSON.stringify([i, j]))) {
                console.log('a hit ship has been colored ')
                let square = document.getElementById(`${i}${j}`);
                square.classList.add('hitship');
            }

        }
    }
}
function mouseOver(squareid) {
    let currentShip = playergameBoard.availableShips[0];
    // let square = document.getElementById(squareid);
    let x = parseInt(squareid[0]);
    let y = parseInt(squareid[1]);
    if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == 0){ 
        if (currentShip.direction == 'horizontal') { 
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById(`${x}${y + i}`);
                square.style.backgroundColor = 'green';
            }
        }
        if (currentShip.direction == 'vertical') {
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById(`${x + i}${y}`);
                square.style.backgroundColor = 'green';
            }
        }
    } else { 
        if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == -0) {
            return;
        }
    }
}

function mouseOut(squareid) {
    let currentShip = playergameBoard.availableShips[0];
    // let square = document.getElementById(squareid);
    let x = parseInt(squareid[0]);
    let y = parseInt(squareid[1]);
    if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == 0){ 
        if (currentShip.direction == 'horizontal') { 
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById(`${x}${y + i}`);
                square.style.backgroundColor = 'white';
            }
        }
        if (currentShip.direction == 'vertical') {
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById(`${x + i}${y}`);
                square.style.backgroundColor = 'white';
            }
        }
    } else { 
        if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == -0) {
            return;
        }
    }
}

function placeShip(squareid){ 
    let x = parseInt(squareid[0]);
    let y = parseInt(squareid[1]);
    let currentShip = playergameBoard.availableShips[0];
    playergameBoard.placeShip(currentShip, x, y);
    displayPlayerGameBoard();
}
