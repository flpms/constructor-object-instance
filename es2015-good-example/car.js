const Battery = require('./battery.js');

class Car {
  constructor(battery) {
    this.battery = battery;
    this.velocity = 0;
    return this;
  }

  moveFoward() {
    if (this.battery.level) {
      this.velocity++;
      this.battery.consume();
    }
  }
}

module.exports = Car;