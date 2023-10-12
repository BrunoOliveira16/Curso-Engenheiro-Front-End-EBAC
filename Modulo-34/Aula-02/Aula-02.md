## 📝 Aula 02: Selecione elementos
O Cypress é uma ferramenta de teste de ponta a ponta que permite escrever testes para suas aplicações web. Ele fornece uma API para interagir com elementos da sua página, permitindo que você simule ações do usuário, como clicar em um botão, digitar em um campo de entrada, etc.

No exemplo abaixo, o Cypress está sendo usado para testar duas funcionalidades em uma página da web:

- ``Deve renderizar 4 vagas``: Este teste visita a página ``'http://ebac-jobs-e2e.vercel.app'``, e então usa o método ``cy.get`` para selecionar elementos na página. Neste caso, ele está selecionando todos os elementos ``li`` que são descendentes diretos da classe ``.ListaVagas_vagas__gmNZn``. Em seguida, ele verifica se existem exatamente 4 desses elementos na página usando o método ``should('have.length', 4)``.

- ``Deve filtrar por fullstack``: Este teste também visita a mesma página, mas desta vez ele está simulando a digitação do texto ‘fullstack’ em um campo de entrada (selecionado pela classe ``.FormVagas_campo__E1ppF``) e pressionando ‘Enter’. Em seguida, ele simula um clique em um botão cujo tipo é ``'submit'``.

A seleção de elementos é uma parte crucial dos testes com o Cypress. Você pode selecionar elementos por tag, classe, id, atributos ou conteúdo do texto. A maneira como você seleciona os elementos dependerá da estrutura da sua página e do que você está tentando testar.

Exemplo: Criado arquivo ``home.cy.js`` dentro de ``testes-cypress/cypress/e2e/ebac-jobs``
```
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
```