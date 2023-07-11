// imports 
import GameBoard from "./gameBoard";

function placeShipScreen(ship) { 
// format body 
const body = document.querySelector('body');

body.style.backgroundColor = 'lightblue';
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.height = '100vh';
body.style.width = '100vw';

// craete steps banner 
const stepsBanner = document.createElement('div');

stepsBanner.style.backgroundColor = 'white';
stepsBanner.style.height = '100px';
stepsBanner.style.width = 'calc(100vw + 10px)';
stepsBanner.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)';
stepsBanner.style.position = 'absolute';
stepsBanner.style.top = '5vh'; 
stepsBanner.style.left = '-10px';
stepsBanner.style.display = 'flex';
stepsBanner.style.alignItems = 'center';
stepsBanner.style.justifyContent = 'center';

stepsBanner.innerHTML = 'Step 1: Place your ships!';
stepsBanner.style.fontFamily = 'Arial, sans-serif';
stepsBanner.style.fontSize = '50px';
stepsBanner.style.color = 'black'; 
stepsBanner.style.fontWeight = 'bold';

body.appendChild(stepsBanner);

// create player baord 
const playerGameBoard = new GameBoard();
playerGameBoard.createBoard();

const playerBoard = document.createElement('div');
playerBoard.style.backgroundColor = 'white';
playerBoard.style.height = '500px';
playerBoard.style.width = '500px';
playerBoard.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)';
playerBoard.style.display = 'grid';
playerBoard.style.gridTemplateColumns = 'repeat(10, 1fr)';
playerBoard.style.gridTemplateRows = 'repeat(10, 1fr)';

body.appendChild(playerBoard);

// create squares for player baord

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const square = document.createElement('div');
        square.style.backgroundColor = 'lightblue';
        square.style.border = '1px solid black';
        square.id = `${i} ${j}`;
        square.innerHTML = `${i}, ${j}`;
        playerBoard.appendChild(square);
        square.style.cursor = 'pointer';
        square.addEventListener('click', () => {
            playerGameBoard.placeShip(ship, i, j);
            console.log(playerGameBoard.board);
        });
        square.addEventListener('mouseover', function() { 
            hoverCheck(square, ship);
        });
        square.addEventListener('mouseout', () => {
            for (let i = 0; i < 10; i++) { 
                for (let j = 0; j < 10; j++) { 
                    const square = document.getElementById(`${i} ${j}`);
                    square.style.backgroundColor = 'lightblue';
                }
            }
        });
    }
}

    function hoverCheck(square, ship) {
        const squareId = square.id.split(' ');
        const x = parseInt(squareId[0]);
        const y = parseInt(squareId[1]);
        const legal = playerGameBoard.testIfShipIsLegal(ship, x, y);
        if (legal == 0) {
            for (let i = 0; i < ship.length; i++) {
                const square = document.getElementById(`${x} ${y + i}`);
                square.style.backgroundColor = 'green';
            }
        } else {
            square.style.backgroundColor = 'red';
        }
    }
console.log('Hello from interface!')
}

export default placeShipScreen;