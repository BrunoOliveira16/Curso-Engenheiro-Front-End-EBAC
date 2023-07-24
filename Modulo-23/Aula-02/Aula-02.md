## 📝 Aula 02: Requisições AJAX com XMLHttpRequest
AJAX, é o acrônimo para Asynchronous JavaScript and XML. Na essência, o AJAX é uma forma eficiente de uma aplicação web tratar as interações do usuário com uma página web: uma forma que reduz a necessidade de fazer uma atualização da página ou uma recarga completa da página para cada interação do usuário. Quando essas tecnologias são combinadas no modelo AJAX, as aplicações web que a utilizam são capazes de fazer rapidamente atualizações incrementais para a interface do usuário sem recarregar a página inteira do navegador.

XMLHttpRequest é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. Isso permite que uma página da web atualize apenas uma parte do conteúdo sem interromper o que o usuário esteja fazendo. XMLHttpRequest é usado constantemente na programação de AJAX.

Para fazer uma requisição AJAX com XMLHttpRequest, basta criar uma instância do objeto, abrir uma URL e enviar uma requisição. O status HTTP do resultado, assim como o seu conteúdo, estarão disponíveis quando a transação for completada.

Exemplo de como fazer uma requisição AJAX com XMLHttpRequest:

```
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Processar a resposta aqui
        var data = JSON.parse(this.responseText);
    }
};
xhr.open("GET", "https://api.exemplo.com/dados", true);
xhr.send();
```

Neste exemplo, criamos uma nova instância do objeto XMLHttpRequest e definimos uma função para ser chamada quando o estado da requisição mudar. Em seguida, usamos o método open para especificar o método HTTP (GET), a URL da requisição e se a requisição deve ser assíncrona (true). Por fim, usamos o método send para enviar a requisição.

Quando a requisição for concluída e a resposta estiver disponível, a função que definimos para o evento onreadystatechange será chamada. Dentro dessa função, verificamos se o estado da requisição é 4 (concluída) e se o status HTTP é 200 (OK). Se essas condições forem verdadeiras, podemos processar a resposta. Neste exemplo, estamos supondo que a resposta é um objeto JSON, então usamos JSON.parse para converter a resposta em um objeto JavaScript.

<br>

### Práticas da aula
#### Exemplo 01 - JavaScript
```
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})
```
O código acima adiciona um evento de clique ao botão com o ID ``btn-buscar-cep`` que, quando clicado, faz uma requisição AJAX para buscar informações sobre um CEP.

Primeiro, o código espera que o conteúdo da página seja carregado usando o evento ``DOMContentLoaded``. Quando a página estiver carregada, ele adiciona um evento de clique ao botão com o ID ``btn-buscar-cep``.

Quando o botão é clicado, a função anônima dentro do ``addEventListener`` é chamada. Essa função cria uma nova instância do objeto XMLHttpRequest e obtém o valor do campo de entrada com o ID ``cep``. Em seguida, ela constrói a URL do endpoint usando o valor do CEP e o modelo de string.

A função então usa os métodos open e send do objeto XMLHttpRequest para fazer uma requisição GET para o endpoint especificado. No entanto, este código está incompleto, pois não há manipulação da resposta da requisição. Para processar a resposta, seria necessário adicionar um manipulador de eventos para o evento ``readystatechange`` ou ``load`` do objeto XMLHttpRequest.

<br>

#### Exemplo 02 - jQuery
```
$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none')

        $.ajax(endpoint).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade
            const estado = resposta.uf

            const endereco = `${logradouro}, ${bairro} - ${cidade} / ${estado}`
            $('#endereco').val(endereco)

            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000)
        })
    })
})
```
Este código usa a biblioteca jQuery para adicionar uma máscara de entrada ao campo com o ID cep, para formatar a entrada como um CEP. Ele também adiciona um evento de clique ao botão com o ID ``btn-buscar-cep`` que, quando clicado, faz uma requisição AJAX para buscar informações sobre um CEP e preenche um campo de endereço com os dados retornados.

Primeiro, o código espera que o conteúdo da página seja carregado usando o método ready do jQuery. Quando a página estiver carregada, ele adiciona uma máscara de entrada ao campo com o ID cep usando o método mask do plugin jQuery Mask. Em seguida, ele adiciona um evento de clique ao botão com o ID ``btn-buscar-cep`` usando o método ``click`` do jQuery.

Quando o botão é clicado, a função anônima dentro do método ``click`` é chamada. Essa função obtém o valor do campo de entrada com o ID cep usando o método val do jQuery e constrói a URL do endpoint usando o valor do CEP e o modelo de string. Em seguida, ela alterna a visibilidade dos elementos filhos do botão clicado (um ícone e um elemento span) usando os métodos ``find``, ``addClass`` e ``removeClass`` do jQuery.

A função então usa o método ``ajax`` do jQuery para fazer uma requisição GET para o endpoint especificado. Quando a requisição for concluída com sucesso, a função anônima passada para o método ``done`` é chamada. Essa função extrai as informações de endereço da resposta (logradouro, bairro, cidade e estado) e constrói uma string de endereço formatada. Em seguida, ela define o valor do campo de entrada com o ID endereco para a string de endereço formatada usando o método val do jQuery.

Por fim, a função usa o método ``setTimeout`` para agendar uma função para ser chamada após 1 segundo (1000 milissegundos). Essa função alterna novamente a visibilidade dos elementos filhos do botão clicado (um ícone e um elemento span) usando os métodos ``find``, ``addClass`` e ``removeClass`` do jQuery.

<br>

## ✅ Questionário
Qual função utilizamos para configurar uma requisição com XMLHtttpRequest (sem fazer o envio), considerando: const http = new XMLHttpRequest():

A- http.open("GET", "ROTA”);

B- http.send("GET", "ROTA”);

C- http.config("GET", "ROTA”);

D- http.init("GET", "ROTA”);

Reposta: Letra A. A função correta para configurar uma requisição com XMLHttpRequest (sem fazer o envio) é http.open("GET", "ROTA"). O método open do objeto XMLHttpRequest é usado para especificar o método HTTP, a URL da requisição e se a requisição deve ser assíncrona ou não (opcional).