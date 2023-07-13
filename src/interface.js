// // imports 
// import GameBoard from './gameBoard';
// import playergameBoard, { AiGameBoard } from './index';
// import Ship from './ship';

// // display both game boards 
// // 




// function displayPlayerGameBoard() {
//     for (let i = 0; i < 10; i++){ 
//         for (let j = 0; j < 10; j++){ 
//             const square = document.createElement('div');
//             square.classList.add('square');
//             square.id = `${i}${j}`;
//             let playerGameBoard = document.querySelector('.player-game-board');
//             if (playergameBoard.board[i][j] == 'empty') { 
//                 square.addEventListener('mouseover', function() {
//                     mouseOver(square.id);
//                 })
//                 square.addEventListener('click', function() {
//                     placeShip(square.id);
//                 })
//                 square.addEventListener('mouseout', function() {
//                     mouseOut(square.id);
//                 })
//             };
//             playerGameBoard.appendChild(square);
//         }
//     }
//     for (let i = 0; i < 10; i++){ 
//         for (let j = 0; j < 10; j++){
//             if (playergameBoard.board[i][j] instanceof Ship){
//                 let square = document.getElementById(`${i}${j}`);
//                 square.classList.add('ship');
//             }
//             if (playergameBoard.board[i][j] == 'miss') {
//                 let square = document.getElementById(`${i}${j}`);
//                 square.classList.add('miss');
//             }
            
//             if (playergameBoard.hits.some(arr => JSON.stringify(arr) === JSON.stringify([i, j]))) {

//                 let square = document.getElementById(`${i}${j}`);
//                 square.classList.add('hitship');
//             }

//         }
//     }
// }
// function mouseOver(squareid) {
//     let currentShip = playergameBoard.availableShips[0];
//     // let square = document.getElementById(squareid);
//     let x = parseInt(squareid[0]);
//     let y = parseInt(squareid[1]);
//     if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == 0){ 
//         if (currentShip.direction == 'horizontal') { 
//             for (let i = 0; i < currentShip.length; i++) { 
//                 let square = document.getElementById(`${x}${y + i}`);
//                 square.style.backgroundColor = 'green';
//             }
//         }
//         if (currentShip.direction == 'vertical') {
//             for (let i = 0; i < currentShip.length; i++) { 
//                 let square = document.getElementById(`${x + i}${y}`);
//                 square.style.backgroundColor = 'green';
//             }
//         }
//     } else { 
//         if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == -0) {
//             return;
//         }
//     }
// }

// function mouseOut(squareid) {
//     let currentShip = playergameBoard.availableShips[0];
//     // let square = document.getElementById(squareid);
//     let x = parseInt(squareid[0]);
//     let y = parseInt(squareid[1]);
//     if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == 0){ 
//         if (currentShip.direction == 'horizontal') { 
//             for (let i = 0; i < currentShip.length; i++) { 
//                 let square = document.getElementById(`${x}${y + i}`);
//                 square.style.backgroundColor = 'white';
//             }
//         }
//         if (currentShip.direction == 'vertical') {
//             for (let i = 0; i < currentShip.length; i++) { 
//                 let square = document.getElementById(`${x + i}${y}`);
//                 square.style.backgroundColor = 'white';
//             }
//         }
//     } else { 
//         if (playergameBoard.testIfShipIsLegal(currentShip, x, y) == -0) {
//             return;
//         }
//     }
// }

// function placeShip(squareid){ 
//     let x = parseInt(squareid[0]);
//     let y = parseInt(squareid[1]);
//     let currentShip = playergameBoard.availableShips[0];
//     playergameBoard.placeShip(currentShip, x, y);
//     if (playergameBoard.availableShips.length > 0) {
//     displayPlayerGameBoard();
//     } else {
//         buildBattleScreen();
//     }
// }



// ///////// BATTLE SCREEN  ///////////////////////////////////////////////////////////////

// function buildBattleScreen() {

//     let stepsHeader = document.querySelector('.steps-header');
//     stepsHeader.textContent = "Sink your enemy's ships";

//     const rotateButtonDiv = document.querySelector('.rotate-button-div');
//     rotateButtonDiv.remove();
    
//     // create computer game board 
//     const computerGameBoard = document.createElement('div');
//     computerGameBoard.classList.add('computer-game-board');
//     const gameContainer = document.querySelector('.game-container');
//     gameContainer.appendChild(computerGameBoard);

//     // dipalyer computer squares 
//     for (let i = 100; i < 110; i++){ 
//         for(let j = 100; j < 110; j++){ 
//             const square = document.createElement('div');
//             square.classList.add('square');
//             square.id = `${i}${j}`;
//             square.addEventListener('click', () => {
//                 AiGameBoard.receiveAttack(`${i -100}${j-100}`);
//             })
//             computerGameBoard.appendChild(square);
//         }
            
//     }

// }