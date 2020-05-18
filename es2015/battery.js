class Battery {
    constructor() {
       this.level = 100;
       return this;
    }
  
    charge() {
      this.level++;
    }
  
    consume() {
      this.level--;
    }
  }
  
  module.exports = Battery;