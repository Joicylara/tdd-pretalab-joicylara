const Calculadora = require('./calculadora')
const soma = require('./soma')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(2,4)).toEqual(6);
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtracao(6,4)).toEqual(2);
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplicacao(2,4)).toEqual(8);
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.divisao(4,4)).toEqual(1);
  })
})

