const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(7,2)).toBe(9);
  })
})