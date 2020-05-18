const Battery = require('./battery.js');

class Car {
  constructor() {
    const battery = new Battery();
    this.battery = battery;
    this.batteryLevel = battery;
    this.velocity = 0;
    return this;
  }

  moveFoward() {
    if (this.batteryLevel) {
      this.velocity++;
      this.battery.consume();
    }
  }
}

module.exports = Car;