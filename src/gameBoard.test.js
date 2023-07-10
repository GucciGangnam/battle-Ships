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
    // const ship = new Ship(9);
    // ship.changeDirection();
    // const ship2 = new Ship(9);
    const ship3 = new Ship(5);

    // expect(gameBoard.testIfShipIsLegal(ship, 0,0)).toBe(0);
    // expect(gameBoard.testIfShipIsLegal(ship2, 0,0)).toBe(0);
    // expect(gameBoard.testIfShipIsLegal(ship2, 4,0)).toBe(0);
    // expect(gameBoard.testIfShipIsLegal(ship2, 4,4)).toBe(-1);
    // expect(gameBoard.testIfShipIsLegal(ship2, 0,3)).toBe(-1);
    // expect(gameBoard.testIfShipIsLegal(ship, 3,0)).toBe(-1);

    
    expect(gameBoard.testIfShipIsLegal(ship3, 4,7)).toBe(-1);
}
);


test ('placeShip places ship on board', () => {
    const gameBoard = new GameBoard();
    gameBoard.createBoard();
    
    const ship3 = new Ship(5);

    gameBoard.placeShip(ship3, 4,7);
    expect(gameBoard.board[4][7]).toBe("empty");
    expect(gameBoard.board[4][8]).toBe("empty");
    expect(gameBoard.board[4][9]).toBe("empty");

    gameBoard.placeShip(ship3, 0,0);
    expect(gameBoard.board[0][0]).toBe(ship3);
    expect(gameBoard.board[0][1]).toBe(ship3);
    expect(gameBoard.board[0][2]).toBe(ship3);
    expect(gameBoard.board[0][3]).toBe(ship3);
    expect(gameBoard.board[0][4]).toBe(ship3);
    expect(gameBoard.board[0][5]).toBe("empty");

}
);


