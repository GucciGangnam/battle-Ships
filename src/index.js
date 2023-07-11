



//imports  
import placeShipScreen from './interface';
import GameBoard from './gameBoard';


//build gameBoard

const playergameBoard = new GameBoard();
playergameBoard.createBoard();


// buold interface
placeShipScreen(playergameBoard.availableShips[0]);



