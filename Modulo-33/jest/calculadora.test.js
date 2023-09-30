const calc = require('./calculadora')

describe('Teste para calculadora', () => {
    test('somar 2 em 2 deve resultar em 4', () => {
        const minhaSoma = calc.soma(2, 2)
    
        expect(minhaSoma).toBe(4)
    })
    
    test('subtrair 4 em 2 deve resultar em 2', () => {
        const minhaSubtracao = calc.subtracao(4, 2)
    
        expect(minhaSubtracao).toBe(2)
        expect(minhaSubtracao).toBeLessThanOrEqual(2)
    })
    
    test('multiplicar 3 com 3 deve resultar em 9', () => {
        const minhaMultiplicacao = calc.multiplicacao(3, 3)
    
        expect(minhaMultiplicacao).toBe(9)
        expect(minhaMultiplicacao).toBeGreaterThan(8)
    })
})