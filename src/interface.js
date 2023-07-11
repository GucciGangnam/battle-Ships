// imports 
import GameBoard from './gameBoard';
import playergameBoard from './index';


function displayPlayerBoard() { 
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (playergameBoard.board[i][j] == "empty") {
                document.getElementById(`${i}${j}`).style.backgroundColor = "blue";
            }
            if (playergameBoard.board[i][j] == "miss") {
                document.getElementById(`${i}${j}`).style.backgroundColor = "white";
            }
            if (playergameBoard.board[i][j] == "hit") {
                document.getElementById(`${i}${j}`).style.backgroundColor = "red";
            }
            if (playergameBoard.board[i][j] == "sunk") {
                document.getElementById(`${i}${j}`).style.backgroundColor = "black";
            }
            if (playergameBoard.board[i][j] == "ship") {
                document.getElementById(`${i}${j}`).style.backgroundColor = "green";
            }
        }
    } 
}
export default displayPlayerBoard;