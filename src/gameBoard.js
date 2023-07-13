// imports 
import Ship from './ship';


class GameBoard {
    constructor() {
        this.board = [];
        this.ships = [];
        this.misses = [];
        this.hits = [];
        this.availableShips = [];
        this.guesses = [];
    }

    createBoard() {
        for (let i = 0; i < 10; i++) {
            this.board.push([]);
            for (let j = 0; j < 10; j++) {
                this.board[i].push("empty");
            }
        }
        const ship1 = new Ship(5);
        const ship2 = new Ship(4);
        const ship3 = new Ship(3);
        const ship4 = new Ship(3);
        const ship5 = new Ship(2);
        this.availableShips.push(ship1);
        this.availableShips.push(ship2);
        this.availableShips.push(ship3);
        this.availableShips.push(ship4);
        this.availableShips.push(ship5);
    }

    //maybe
    resetBoard() {
        this.board = [];
        this.ships = [];
        this.misses = [];
        this.hits = [];
        this.availableShips = [];
        this.guesses = [];
    }
    // maybe

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
            this.availableShips.shift();

            console.log('ship placed successfully')
        } else {
            return "error: did not pass legal test";
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] === "empty") {
            this.misses.push([x, y]);
            this.board[x][y] = "miss";

            return "miss";}
            else if (this.board[x][y] === "miss") {
                return "miss";
            }
            else {
            this.board[x][y].hit();
            this.hits.push([x, y]);

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