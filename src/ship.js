class Ship { 
    constructor(length) { 
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.direction = 'horizontal';
    }

    hit() {
        this.hits++;
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }

    changeDirection() { 
        if (this.direction === 'horizontal') {
            this.direction = 'vertical';
        } else {
            this.direction = 'horizontal';
        }
    }
    
}

export default Ship;