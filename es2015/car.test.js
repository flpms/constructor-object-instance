const Car = require('./car.js');

describe('Teste da unidade Car', () => {
  const car = new Car();
    
  it('espera que a propriedade velocity não mude quando chamar moveFoward e sem a propriedade batteryLevel', () => {
      const  = car.velocity;
      car.moveFoward();
      assert.equal(car.velocity, initialVelocity);
  });
});