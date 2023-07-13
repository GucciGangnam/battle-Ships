// import 
import playerGameBoard from './index';
import {computerGameBoard} from './index';
import displayPageSkeleton from './VIS-displayPageSkeleton';
import displayPlayerBoard from './VIS-Display-boards';
import battleShips from './VIS-Battle-Ships';

import  {displayComputerBoard}  from './VIS-Display-boards';

//build player gameBoard
function placeShips() {
    let body = document.querySelector('body');
    body.innerHTML = '';
    displayPageSkeleton();
    displayPlayerBoard();
    // displayComputerBoard(); // delete me later


    // add steps header text
    const stepsHeader = document.querySelector('.steps-header');
    stepsHeader.textContent = 'Place your ships';

    // add rotate button
    const rotateButton = document.querySelector('.rotate-button');
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', () => {
        playerGameBoard.availableShips[0].changeDirection();
    });

    // add event listeners to squares
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (playerGameBoard.board[i][j] == 'empty') {
                const square = document.getElementById('player' + i + j);
                square.addEventListener('mouseover', function() {
                    mouseOver(square.id);
                });
                square.addEventListener('mouseout', function() {
                    mouseOut(square.id);
                });
                square.addEventListener('click', function() {
                    placeShip(square.id);

                });
            }
        }
    }

}
export default placeShips;


function mouseOver(squareid) {

    let currentShip = playerGameBoard.availableShips[0];
    let x = parseInt(squareid[6]);
    let y = parseInt(squareid[7]);
    if (playerGameBoard.testIfShipIsLegal(currentShip, x, y) == 0){ 
        if (currentShip.direction == 'horizontal') { 
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById('player' + `${x}${y + i}`);
                square.style.backgroundColor = 'green';
            }
        }
        if (currentShip.direction == 'vertical') {
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById('player' + `${x + i}${y}`);
                square.style.backgroundColor = 'green';
            }
        }
    } else { 
        if (playerGameBoard.testIfShipIsLegal(currentShip, x, y) == -0) {
            return;
        }
    }
}

function mouseOut(squareid) {
    let currentShip = playerGameBoard.availableShips[0];
    let x = parseInt(squareid[6]);
    let y = parseInt(squareid[7]);
    if (playerGameBoard.testIfShipIsLegal(currentShip, x, y) == 0){ 
        if (currentShip.direction == 'horizontal') { 
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById('player' + `${x}${y + i}`);
                square.style.backgroundColor = '#5cc9fc';
            }
        }
        if (currentShip.direction == 'vertical') {
            for (let i = 0; i < currentShip.length; i++) { 
                let square = document.getElementById('player' + `${x + i}${y}`);
                square.style.backgroundColor = '#5cc9fc';
            }
        }
    } else { 
        if (playerGameBoard.testIfShipIsLegal(currentShip, x, y) == -0) {
            return;
        }
    }
}

function placeShip(squareid){ 

    let x = parseInt(squareid[6]);
    let y = parseInt(squareid[7]);
    let currentShip = playerGameBoard.availableShips[0];
    playerGameBoard.placeShip(currentShip, x, y);
    if (playerGameBoard.availableShips.length > 0) {
    placeShips();


    } else {
        battleShips();
    }
}