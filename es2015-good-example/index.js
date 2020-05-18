const Car = require('./car');
const Battery = require('./battery');

const battery = new Battery();
const car = new Car(battery);

car.moveFoward();
