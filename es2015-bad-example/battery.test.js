const assert = require('assert').strict;

const Battery = require('./battery');

describe('Teste da unidade Battery', () => {
  const battery = new Battery();

  it('espera que level seja igual ao valor inicial de 100', () => {
    assert.equal(battery.level, 100);
  });

  it('espera que level diminua ao chamar battery consume', () => {
    battery.consume();
    assert.equal(battery.level, 99);
  });

  it('espera que level aumente ao chamar battery consume', () => {
    battery.charge();
    assert.equal(battery.level, 100);
  });
});
