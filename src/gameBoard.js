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
                this.board[i].push("empty");
            }
        }
    }

    testIfShipIsLegal(ship, x, y) { 
        let response = 0;
        if (ship.direction === 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x] && this.board[x][y + i] == "empty") {
                    response += 0;
                } else {
                    response -= 1;
                    return response;
                }
            } 
        } else {
            for (let i = 0; i < ship.length; i++) {

                if (this.board[x + i] && this.board[x + i][y] == "empty") {

                    response += 0;
                } else {
                    response -= 1;
                    return response;
                }
            } 
        }
        return response;
    }

    placeShip(ship, x, y) {
        if (this.testIfShipIsLegal(ship, x, y) == 0) {
            if (ship.direction === 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    this.board[x][y + i] = ship;
                }
            } else {
                for (let i = 0; i < ship.length; i++) {
                    this.board[x + i][y] = ship;
                }
            }
            this.ships.push(ship);
        } else {
            return "error: did not pass legal test";
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] === "empty") {
            this.misses.push([x, y]);
            return "miss";
        } else {
            this.board[x][y].hit();
            if (this.board[x][y].sunk === true) {
                return "sunk";
            } else {
                return "hit";
            }
        }
    }

    allShipsSunk() {
        let sunk = true;
        this.ships.forEach(ship => {
            if (ship.sunk === false) {
                sunk = false;
            }
        });
        return sunk;
    }

}

export default GameBoard;