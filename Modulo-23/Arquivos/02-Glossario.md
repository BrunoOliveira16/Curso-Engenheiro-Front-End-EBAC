# 📌 Glossário
> Módulo 23: Ajax e Exceções

<br>

## Explore a comunicação entre FrontEnd e Back-End
### ✔ API REST (Representational State Transfer) 
É um estilo arquitetural utilizado para projetar e desenvolver APIs (Application Programming Interfaces) na web. É uma abordagem que define um conjunto de princípios e restrições para criar serviços webque sejam escaláveis, interoperáveis e fáceis de manter.

### ✔ Base URL
Endereço base de um siteou aplicação. É o ponto de partida para as URLs relativas dentro do site, servindo como um prefixo comum para todas as outras URLs.

### ✔ Cookies
São pequenos arquivos de texto armazenados no navegador do cliente quando um site é visitado. Eles são usados para armazenar informações específicas sobre o usuário e a interação com o site.

### ✔ Domínio (Domain)
Representa o nome do servidor ou siteque hospeda o recurso, como "example.com" ou "google.com".

### ✔ Esquema (Scheme)
Indica o protocolo de comunicação a ser usado para acessar o recurso, como "http://" para páginas da web normais ou "https://" para páginas seguras.

### ✔ Parâmetros (Query Parameters)
São informações adicionais passadas na URL após um ponto de interrogação ("?"). Os parâmetros são usados para transmitir dados para o servidor, como filtros de pesquisa ou configurações específicas.

### ✔ URL (Localizador Uniforme de Recursos)
Endereço único e padronizado que identifica um recurso na internet. Uma URL é usada para acessar diferentes tipos de recursos, como páginas da web, imagens, arquivos, vídeos, serviços web, entre outros.

### ✔ Status Code (Códigos de status)
São códigos numéricos que são incluídos nas respostas do servidor HTTP para fornecer informações sobre o resultado de uma solicitação. Eles indicam o estado da solicitação e permitem que ocliente (como um navegador web) entenda o resultado da interação com o servidor.

<br>

## Faça requisições AJAX com XMLHttpRequest
### ✔ Requisições AJAX 
São solicitações assíncronas feitas por meio de JavaScript para enviar e receber dados de um servidor sem precisar recarregar a página inteira. Com o AJAX, é possível atualizar partes específicas de uma página de forma dinâmica, melhorando a experiência do usuário e tornando as aplicações web mais interativas.

<br>

## Faça requisições AJAX com fetch API
### ✔ Fetch API
Interface poderosa para fazer requisições HTTP assíncronas em navegadores modernos. Ela fornece uma maneira mais simples e baseada em Promises para lidar com requisições e respostas, em comparação com o antigo objeto XMLHttpRequest. Suporta vários métodos HTTP, incluindo GET, POST, PUT, DELETE, entre outros. Além disso, você pode personalizar as opções da requisição, como cabeçalhos, corpo da requisição e autenticação, passando um objeto de configuração como segundo argumento para a função fetch().

### ✔ fetch(endpoint)
A chamada de função fetch(endpoint) é uma forma simplificada de utilizar a Fetch API para fazer uma requisição HTTP GET assíncrona para um endpoint específico.

<br>

## Trate exceções
### ✔ Catch (capturar)
A função catch() é um método disponível em objetos do tipo Promise no JavaScript. Ela é usada para capturar erros que ocorrem durante o processamento de uma Promise, permitindo que você trate esses erros de forma adequada.

### ✔ Exceções
Referem-se aerros ou situações inesperadas que podem ocorrer durante uma requisição assíncrona. Podem ser causadas por vários motivos, como erros de rede, problemas de comunicação com o servidor, erros de sintaxe nos dados enviados ou recebidos etc.

### ✔ Promise
É um objeto que representa aeventual conclusão (ou falha) assíncrona de uma operação. Ela é usada para tratar operações assíncronas de uma forma mais organizada e fácil de gerenciar. 

<br>

## Lance exceções
### ✔ Throw (Lançar)
A palavra reservada throwé utilizada para lançar uma exceção em JavaScript. Você pode usar o throw para sinalizar que ocorreu um erro em sua lógica e interromper aexecução normal do código. Quando uma exceção é lançada, ela é "jogada" (thrown) de volta até que seja capturada e tratada em algum ponto superior na pilha de chamadas de função.