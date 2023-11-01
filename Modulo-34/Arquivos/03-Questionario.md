# 📌 Questionário
> Módulo 34: Testes E2E com Cypress

<br>

### Pergunta 1
#### O que é um teste E2E?
A- É o teste da menor parte de um código, como métodos

B- É o teste de duas ou mais partes de um código, integrados

C- É o teste onde validamos uma aplicação de ponta a ponta, simulando a interação do usuário

D- É o teste onde medimos a capacidade de processamento de uma aplicação

<details>
    <summary>Resposta</summary>

    É o teste onde validamos uma aplicação de ponta a ponta, simulando a interação do usuário

    Um teste E2E (End-to-End) é aquele onde validamos uma aplicação de ponta a ponta, simulando a interação do usuário. É um tipo de teste de software que tem como objetivo verificar o funcionamento completo de um aplicativo ou sistema, simulando o fluxo de uso real do usuário, desde o início até o fim (ponta a ponta). Nesse tipo de teste, a aplicação é testada como um todo, incluindo todas as suas camadas, componentes e integrações. Durante o teste E2E, são realizadas interações com a aplicação de forma semelhante a um usuário real, utilizando um navegador ou interface gráfica, por exemplo. O objetivo é garantir que todas as partes do sistema estejam funcionando em harmonia e que os diferentes componentes e módulos do aplicativo estejam integrados corretamente.
</details>

<br>

### Pergunta 2
#### Como selecionamos um elemento da tela com o Cypress?
A- cy.recovery(seletor)

B- cy.find(seletor)

C- cy.get(seletor)

D- cy.element(seletor)

<details>
    <summary>Resposta</summary>
    
    cy.get(seletor)

    Para selecionar um elemento da tela usando o Cypress, utilizamos o comando cy.get(seletor). O "seletor" pode ser um seletor CSS, uma classe, um ID, uma tag HTML ou qualquer outra forma de identificar o elemento na página. O Cypress também oferece outras formas de selecionar elementos, como cy.find(seletor) e cy.contains(texto), mas cy.get(seletor) é o método principal e mais usado para selecionar elementos da página durante a escrita de testes com o Cypress.
</details>

<br>


### Pergunta 3
#### Como alteramos campos de texto com o Cypress?
A- Através da função change

B- Através da função type

C- Através da função write

D- Através da função event

<details>
    <summary>Resposta</summary>
    
    Através da função type

    Para alterar campos de texto com o Cypress, utilizamos a função type. Ela é uma das principais funções do Cypress e é usada para simular a digitação de texto em campos de input, textareas ou qualquer outro elemento editável na página.
</details>

<br>

### Pergunta 4
#### O que não podemos fazer com o Cypress?
A- gravar vídeos durante os testes

B- capturar a tela durante os testes

C- gerar relatórios

D- nenhuma das anteriores

<details>
    <summary>Resposta</summary>
    
    nenhuma das anteriores

    A opção correta é "nenhuma das anteriores". O Cypress é uma ferramenta de automação de testes avançada e rica em recursos, que inclui a capacidade de gravar vídeos durante os testes, capturar screenshots (telas) em diferentes momentos dos testes e gerar relatórios detalhados dos resultados. Portanto, todas as opções mencionadas (gravar vídeos, capturar a tela e gerar relatórios) são recursos que o Cypress suporta e que podem ser utilizados para ajudar a entender e analisar os resultados dos testes automatizados.
</details>
