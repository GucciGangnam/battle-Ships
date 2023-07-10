//imports 
import GameBoard from './gameBoard';

//tests
test('createBoard creates a 10x10 board', () => {
    const gameBoard = new GameBoard();
    gameBoard.createBoard();
    expect(gameBoard.board.length).toBe(10);
    expect(gameBoard.board[0].length).toBe(10);
}
);