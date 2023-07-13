
//imports  

import GameBoard from './gameBoard';
import placeShips from './VIS-Place-Ships';



//build player gameBoard
const playerGameBoard = new GameBoard();
playerGameBoard.createBoard();



export default playerGameBoard;

// build Ai gameBoard 
const computerGameBoard = new GameBoard();
computerGameBoard.createBoard();




export { computerGameBoard };



function startGame() { 
    computerGameBoard.resetBoard();
    computerGameBoard.createBoard();

    playerGameBoard.resetBoard();
    playerGameBoard.createBoard();

    placeShips();
}
// place ships screen 
startGame();

export {startGame};