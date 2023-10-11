## 📝 Aula 01: Configure o Cypress
### E2E 
Neste módulo aprenderemos a escrever testes E2E (end-to-end, de ponta a ponta). Neste tipo de teste, buscamos interagir com uma aplicação da mesma maneira que o usuário final iria fazer. É considerado o tipo de teste mais complexo, pois depende do funcionamento do Front-End e Back-End, quando temos integração com API.

### Sobre o Cypress 
Com o Cypress conseguimos interagir com as páginas web, criar expectativas, capturar evidências de teste, tais como: verificar se um texto está na tela, capturar imagens da tela, fazer gravações de vídeo durante a execução dos testes. O Cypress possui algumas funções fundamentais para a interação com os elementos de uma página, com ele podemos visitar uma URL, selecionar elementos, clicar e digitar em campos. Nos arquivos de teste, o Cypress está disponível através do objeto cy.

### Comandos do Cypress 
Os principais comandos para o Cypress são: 
- cy.visit: utilizado para visitar uma página, por exemplo: cy.visit(“http://ebac.art.br”). 
- cy.get: utilizado para selecionar um elemento no DOM, a partir de um seletor, por exemplo: cy.get(“#btn-enviar”)

### Links do módulo 
- Acesse o site https://www.cypress.io/ e conheça mais sobre a ferramenta. 
- Para acessar a página da EBAC clique no linkhttps://ebac-jobs-e2e.vercel.app/.