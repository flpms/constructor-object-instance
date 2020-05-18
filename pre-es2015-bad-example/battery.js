function Battery() {
  this.level = 100;
  return this;
}

Battery.prototype.charge = function charge() {
  this.level++;
}
  
Battery.prototype.consume = function consume() {
  this.level--;
}

module.exports = Battery;