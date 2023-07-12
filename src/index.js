
//imports  

import GameBoard from './gameBoard';
import placeShips from './VIS-Place-Ships';



//build player gameBoard
const playerGameBoard = new GameBoard();
playerGameBoard.createBoard();
playerGameBoard.placeShip(playerGameBoard.availableShips[0], 0, 0);
playerGameBoard.receiveAttack(1, 0);


export default playerGameBoard;

// build Ai gameBoard 
const computerGameBoard = new GameBoard();
computerGameBoard.createBoard();
computerGameBoard.placeShip(computerGameBoard.availableShips[0], 9, 0);
computerGameBoard.receiveAttack(8, 0);

export { computerGameBoard };




// place ships screen 
placeShips();

