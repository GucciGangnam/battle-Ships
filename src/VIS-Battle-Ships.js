// imports 
import displayPlayerBoard from "./VIS-Display-boards";
import { displayComputerBoard } from "./VIS-Display-boards";
import displayPageSkeleton from "./VIS-displayPageSkeleton";
import { computerGameBoard, startGame } from "./index";

import playerGameBoard from "./index";


function battleShips() {
    const body = document.querySelector('body');
    body.innerHTML = '';    
    displayPageSkeleton();
    const stepsHeader = document.querySelector('.steps-header');
    stepsHeader.textContent = 'Choose a square to attack';
    const rotateButtonDiv = document.querySelector('.rotate-button-div');
    rotateButtonDiv.innerHTML = '';

    displayPlayerBoard();

    // Ai place ships on conputer board 

    AiPlaceShips();
    displayComputerBoard();

    // add event listeners to computers board squares
    addELForComputerBoardSquares();


}
export default battleShips;


function AiPlaceShips() { 
    while (computerGameBoard.availableShips.length > 0) { 
        let ship = computerGameBoard.availableShips[0];
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let direction = Math.floor(Math.random() * 2);
        if (direction == 0) {
            ship.changeDirection();
        }
        if (computerGameBoard.testIfShipIsLegal(ship, x, y) == 0) {
            computerGameBoard.placeShip(ship, x, y);
        }
        else {
            AiPlaceShips();
        }
    }
}

function addELForComputerBoardSquares() { 
    for (let i = 0; i < 10; i++) { 
        for (let j = 0; j < 10; j++) { 
            let square = document.getElementById('computer' + i + j);
            if (square.classList == 'square') {
                square.addEventListener('click', () => {
                    computerGameBoard.receiveAttack(i, j);
                    let body = document.querySelector('body');
                    body.innerHTML = '';
                    displayPageSkeleton();
                    let stepsHeader = document.querySelector('.steps-header');
                    stepsHeader.textContent = 'Choose a square to attack';
                    let rotateButtonDiv = document.querySelector('.rotate-button-div');
                    rotateButtonDiv.innerHTML = '';
                    displayPlayerBoard();
                    displayComputerBoard();
                    if (computerGameBoard.allShipsSunk() == true){ 
                        let stepsHeader = document.querySelector('.steps-header');
                        stepsHeader.textContent = 'You win!';
                        setTimeout(() => {
                            
                            startGame();
                        }, 1000);
                    } else { 
                        setTimeout(() => {
                            AiAttack();
                        }, 200);
                    }
                });
            } 
        }
    }
}

function AiAttack() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let guessArr = [x, y];
    if (computerGameBoard.guesses.some(item => JSON.stringify(item) === JSON.stringify([x, y]))) {
        AiAttack();
        console.log('already guessed');
    } else {
    playerGameBoard.receiveAttack(x, y);
    console.log(computerGameBoard.guesses);
    computerGameBoard.guesses.push(guessArr);
    let body = document.querySelector('body');
    body.innerHTML = '';
    displayPageSkeleton();
    let stepsHeader = document.querySelector('.steps-header');
    stepsHeader.textContent = 'Choose a square to attack';
    let rotateButtonDiv = document.querySelector('.rotate-button-div');
    rotateButtonDiv.innerHTML = '';
    displayPlayerBoard();
    displayComputerBoard();

    if (playerGameBoard.allShipsSunk() == true) {
        let stepsHeader = document.querySelector('.steps-header');
        stepsHeader.textContent = 'You lose!';
        setTimeout(() => {
            startGame();
        }, 1000);
    } else { 
        addELForComputerBoardSquares();
    }

    }
}
