// imports 
import Ship from './ship';

//tests

test('ship with length of 4 has 3 hits and is not sunk', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
}
);

test('ship with length of 4 has 4 hits and is sunk', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
}
);

test('ship.changeDirection() changes direction from horizontal to vertical', () => {
    const ship = new Ship(4);
    ship.changeDirection();
    expect(ship.direction).toBe('vertical');
}
);

test('ship.changeDirection() changes direction from vertical to horizontal', () => {
    const ship = new Ship(4);
    ship.changeDirection();
    ship.changeDirection();
    expect(ship.direction).toBe('horizontal');
}
);

