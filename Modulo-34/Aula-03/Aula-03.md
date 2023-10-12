## 📝 Aula 03: Manipule formulários
O Cypress é uma ferramenta de teste de ponta a ponta que permite escrever testes para suas aplicações web. Ele fornece uma API para interagir com elementos da sua página, permitindo que você simule ações do usuário, como clicar em um botão, digitar em um campo de entrada, etc.

No exemplo abaixo, o Cypress está sendo usado para testar duas funcionalidades em uma página da web:

- ``Deve levar o usuário para o formulário de inscrição``: Este teste visita a página ``'http://ebac-jobs-e2e.vercel.app'``, clica no primeiro link da vaga e verifica se existem 7 campos de entrada na página.

- ``Deve preencher o formulário de inscrição``: Este teste também visita a mesma página, clica no primeiro link da vaga e preenche o formulário de inscrição com os dados fornecidos. Em seguida, ele simula um clique no botão de envio do formulário e verifica se um alerta com a mensagem ‘Obrigado pela candidatura!’ é exibido.

A manipulação de formulários é uma parte crucial dos testes com o Cypress. Você pode preencher campos de entrada usando o método ``type``, marcar caixas de seleção usando o método ``check``, selecionar opções em um menu suspenso usando o método ``select``, etc. A maneira como você manipula os elementos do formulário dependerá da estrutura do seu formulário e do que você está tentando testar.

Exemplo: Criado arquivo ``candidatura.cy.js`` dentro de ``testes-cypress/cypress/e2e/ebac-jobs``
```
/// <reference types ="cypress" />

describe('Teste para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('http://ebac-jobs-e2e.vercel.app')
    })

    it('Deve levar o usuário para o formulário de incrição', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click()
        cy.get('input').should('have.length', 7)  
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
    })
})
```