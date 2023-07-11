
//imports  

import GameBoard from './gameBoard';
import displayPlayerBoard from './interface';


//build player gameBoard
const playergameBoard = new GameBoard();
playergameBoard.createBoard();
export default playergameBoard;

// build Ai gameBoard 
const AiGameBoard = new GameBoard();
AiGameBoard.createBoard();
export { AiGameBoard };

displayPlayerBoard()






