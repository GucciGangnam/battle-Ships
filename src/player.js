class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
    increaseScore() {
        this.score++;
    }
}

export default Player;