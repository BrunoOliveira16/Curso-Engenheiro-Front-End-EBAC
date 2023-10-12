/// <reference types ="cypress" />

describe('Testes para a Home', () => {
    it('Deve renderizar 4 vagas', () => {
        cy.visit('http://ebac-jobs-e2e.vercel.app')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('Deve filtrar por fullstack', () => {
        cy.visit('http://ebac-jobs-e2e.vercel.app')
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        cy.get('button[type="submit"]').click()
    })
})