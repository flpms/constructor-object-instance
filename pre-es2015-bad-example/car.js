const Battery = require('./battery.js');

function Car() {
  this.battery = new Battery();
  this.velocity = 0;
  return this;
}

Car.prototype.moveFoward = function moveFoward() {
  if (this.battery.level) {
    this.velocity++;
    this.battery.consume();
  }
}

module.exports = Car;