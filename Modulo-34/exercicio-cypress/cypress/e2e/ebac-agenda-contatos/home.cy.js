/// <reference types ="cypress" />

describe('', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it('Deve inserir um contato na lista', () => {
        cy.get('[type="text"]').type('Bruno Oliveira')
        cy.get('[type="email"]').type('bruno@teste.com')
        cy.get('[type="tel"]').type('21987654321')
        cy.get('.adicionar').click()
        cy.wait(2000)
    })

    it('Deve alterar um contato na lista', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Usuario00')
        cy.get('[type="email"]').clear().type('email@teste.com')
        cy.get('[type="tel"]').clear().type('11234568888')
        cy.get('.alterar').click()
        cy.wait(2000)
    })

    it('Deve remover um contato na lista', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})