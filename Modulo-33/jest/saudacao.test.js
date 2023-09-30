const saudacao = require('./saudacao')

describe('Testes para saudação', () => {
    test('Deverá retornar Olá, Bruno', () => {
        const olaBruno = saudacao.dizOla('Bruno')

        expect(olaBruno).toBe('Olá, Bruno')
        expect(olaBruno).toContain(',')
    })
})