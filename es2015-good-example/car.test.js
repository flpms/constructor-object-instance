const assert = require('assert').strict;

const Car = require('./car.js');

describe('Teste da unidade Car', () => {
  const batteryMock = {};

  const car = new Car(batteryMock);
    
  it('espera que a propriedade velocity não mude quando chamar moveFoward e battery level for 0', () => {
    batteryMock.level = 0;
    const initialVelocity = car.velocity;
    car.moveFoward();
    assert.equal(car.velocity, initialVelocity);
  });

  it('espera que a propriedade velocity mude quando chamar moveFoward e tiver battery level', () => {
    batteryMock.level = 10;
    batteryMock.consume = ()=> {};
    const initialVelocity = car.velocity;
    car.moveFoward();
    assert.notStrictEqual(car.velocity, initialVelocity);
  });

  it('espera que ao chamar moveForward consumeCall mude seu valor para true indicando que foi chamado', () => {
    let consumeCall = false;
    batteryMock.level = 10;
    batteryMock.consume = () => { consumeCall = true};

    car.moveFoward();
    assert.equal(consumeCall, true);
  });
});
