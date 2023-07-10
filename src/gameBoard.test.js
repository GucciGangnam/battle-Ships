//imports 
import Ship from './ship';
import GameBoard from './gameBoard';

//tests
test('createBoard creates a 10x10 board', () => {
    const gameBoard = new GameBoard();
    gameBoard.createBoard();
    expect(gameBoard.board.length).toBe(10);
    expect(gameBoard.board[0].length).toBe(10);
}
);


test ('testIfShipIsLegal returns true if ship can be placed', () => {
    const gameBoard = new GameBoard();
    gameBoard.createBoard();
    const ship = new Ship(9);
    ship.changeDirection();
    const ship2 = new Ship(9);

    expect(gameBoard.testIfShipIsLegal(ship, 0,0)).toBe(0);
    expect(gameBoard.testIfShipIsLegal(ship2, 0,0)).toBe(0);
    expect(gameBoard.testIfShipIsLegal(ship2, 4,0)).toBe(0);
    expect(gameBoard.testIfShipIsLegal(ship2, 4,4)).toBe(-1);
    expect(gameBoard.testIfShipIsLegal(ship2, 0,3)).toBe(-1);
    expect(gameBoard.testIfShipIsLegal(ship, 3,0)).toBe(-1);



}
);
