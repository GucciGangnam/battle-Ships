// imports 
import Ship from './ship';


class GameBoard { 
    constructor() {
        this.board = [];
        this.ships = [];
        this.misses = [];
    }

    createBoard() {
        for (let i = 0; i < 10; i++) {
            this.board.push([]);
            for (let j = 0; j < 10; j++) {
                this.board[i].push(null);
            }
        }
    }

    



}

export default GameBoard;