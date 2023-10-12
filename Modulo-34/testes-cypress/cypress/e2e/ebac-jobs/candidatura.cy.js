/// <reference types ="cypress" />

describe('Teste para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('http://ebac-jobs-e2e.vercel.app')
    })

    it('Deve levar o usuário para o formulário de incrição', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click()
        cy.get('input').should('have.length', 7)  

        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click()
        cy.get('input[name="nome-completo"]').type('Bruno Oliveira')
        cy.get('input[name="email"]').type('brunoOliveira@teste.com')
        cy.get('input[name="telefone"]').type('00 12344-5678')
        cy.get('input[name="endereco"]').type('Rua JavaScript - html 5, Rio de janeiro-RJ')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo)=> {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchida')
    })
})