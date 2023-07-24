## 📝 Aula 03: Requisições AJAX com fetch API
A Fetch API fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, como requisições e respostas. Ela também fornece o método global ``fetch()`` que fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona através da rede. Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers1.

Para fazer uma requisição AJAX com a Fetch API, usamos a função ``fetch("ENDPOINT")``. A função ``fetch`` retorna uma promessa que resolve com um objeto ``Response`` quando a requisição é concluída com sucesso. Podemos encadear métodos ``then`` e ``catch`` na promessa retornada para processar a resposta ou lidar com erros.

Aqui está um exemplo de como fazer uma requisição AJAX com a Fetch API:

```
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => {
        // Processar os dados aqui
    })
    .catch(error => {
        // Lidar com erros aqui
    });
```

Neste exemplo, usamos a função ``fetch`` para fazer uma requisição GET para o endpoint especificado. Quando a requisição for concluída com sucesso, a primeira função anônima passada para o método then é chamada. Essa função usa o método ``json`` do objeto ``Response`` para converter a resposta em um objeto JavaScript. Em seguida, ela retorna o objeto resultante para que ele possa ser passado para a próxima função anônima no encadeamento ``then``.

A segunda função anônima no encadeamento ``then`` recebe o objeto JavaScript resultante como argumento e pode processá-lo como desejado. Por fim, adicionamos um método ``catch`` ao final do encadeamento para lidar com quaisquer erros que possam ocorrer durante a requisição ou o processamento da resposta.

<br>

### Práticas da aula
#### Exemplo
```
$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none')

        fetch(endpoint)
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(json) {
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade
                const estado = json.uf

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

Neste código usa a Fetch API para fazer uma requisição ``AJAX`` para buscar informações sobre um CEP e preencher um campo de endereço com os dados retornados.

Quando o botão com o ID ``btn-buscar-cep`` é clicado, a função anônima dentro do método ``click`` do jQuery é chamada. Essa função obtém o valor do campo de entrada com o ID cep usando o método ``val`` do jQuery e constrói a URL do endpoint usando o valor do CEP e o modelo de string. Em seguida, ela alterna a visibilidade dos elementos filhos do botão clicado (um ícone e um elemento ``span``) usando os métodos ``find``, ``addClass`` e ``removeClass`` do jQuery.

A função então usa a função ``fetch`` da Fetch API para fazer uma requisição GET para o endpoint especificado. Quando a requisição for concluída com sucesso, a primeira função anônima passada para o método ``then`` é chamada. Essa função usa o método ``json`` do objeto ``Response`` para converter a resposta em um objeto JavaScript e retorna o objeto resultante.

A segunda função anônima passada para o método ``then`` é chamada com o objeto JavaScript resultante como argumento. Essa função extrai as informações de endereço do objeto (logradouro, bairro, cidade e estado) e constrói uma string de endereço formatada. Em seguida, ela define o valor do campo de entrada com o ID endereco para a string de endereço formatada usando o método ``val`` do jQuery.

<br>

## ✅ Questionário
Como fazemos uma requisição utilizando o fetch API?

A- fetch("ENDPOINT");

B- fetch.get("ENDPOINT");

C- fetch.open("ENDPOINT");

D- fetch.request("ENDPOINT");

Reposta: Letra A. Para fazer uma requisição utilizando a Fetch API, usamos a função fetch("ENDPOINT"). A função fetch retorna uma promessa que resolve com um objeto Response quando a requisição é concluída com sucesso. Podemos encadear métodos then e catch na promessa retornada para processar a resposta ou lidar com erros.