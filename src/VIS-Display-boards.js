//imports 
import GameBoard from './gameBoard';
import playerGameBoard from './index';
import { computerGameBoard } from './index';
import Ship from './ship';

function displayPlayerBoard() { 
    // create player game board 
    const playerGameBoardDiv = document.createElement('div');
    playerGameBoardDiv.classList.add('player-game-board');
    const gameContainer = document.querySelector('.game-container');
    gameContainer.appendChild(playerGameBoardDiv);

    for (let i=0; i<10; i++) { 
        for (let j=0; j<10; j++) { 
            let square = document.createElement('div');
            square.classList.add('square');
            square.id = 'player' + i + j;
            if (playerGameBoard.board[i][j] instanceof Ship){
                square.classList.add('ship');
            }
            if (playerGameBoard.board[i][j] == 'miss') {
                square.classList.add('miss');
            }
            if (playerGameBoard.hits.some(arr => JSON.stringify(arr) === JSON.stringify([i, j]))) {
                square.classList.add('hitship');
            }
            
            document.querySelector('.player-game-board').appendChild(square);
        }
    }
}
export default displayPlayerBoard;

function displayComputerBoard() { 

    // create computer game board 
    const computerGameBoardDiv = document.createElement('div');
    computerGameBoardDiv.classList.add('computer-game-board');
    const gameContainer = document.querySelector('.game-container');
    gameContainer.appendChild(computerGameBoardDiv);



    for (let i=0; i<10; i++) { 
        for (let j=0; j<10; j++) { 
            let square = document.createElement('div');
            square.classList.add('square');
            square.id = 'computer' + i + j;
            // if (computerGameBoard.board[i][j] instanceof Ship){
            //     square.style.backgroundColor = 'pink';
            // }
            if (computerGameBoard.board[i][j] == 'miss') {
                square.classList.add('miss');
                
            }
            if (computerGameBoard.hits.some(item => JSON.stringify(item) === JSON.stringify([i, j]))) {
                square.classList.add('hitship');
                square.innerHTML = 'X';
                square.style.display = 'flex';
                square.style.justifyContent = 'center';
                square.style.alignItems = 'center';
                square.style.textAlign = 'center';
                

            }
            document.querySelector('.computer-game-board').appendChild(square);
        }
    }

}
export { displayComputerBoard };