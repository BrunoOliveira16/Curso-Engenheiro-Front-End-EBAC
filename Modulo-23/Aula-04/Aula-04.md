## 📝 Aula 04: Tratando exceções
Tratar exceções é uma parte importante do desenvolvimento de qualquer aplicação, pois permite que você lide com erros e falhas de maneira elegante, sem interromper a execução do programa ou exibir mensagens de erro confusas para o usuário.

Existem várias maneiras de tratar exceções em JavaScript. Uma maneira comum é usar os blocos ``try``/``catch`` para capturar erros que possam ocorrer durante a execução de um bloco de código. Aqui está um exemplo:

```
try {
    // Código que pode lançar uma exceção
    const resultado = funcaoQuePodeLancarExcecao();
    console.log(resultado);
} catch (erro) {
    // Código para lidar com a exceção
    console.error('Ocorreu um erro:', erro);
}
```

Neste exemplo, o código dentro do bloco ``try`` pode lançar uma exceção. Se isso acontecer, a execução do bloco ``try`` será interrompida e o código dentro do bloco ``catch`` será executado. O objeto erro passado para o bloco ``catch`` contém informações sobre o ``erro`` que ocorreu.

Outra maneira de tratar exceções é usar promessas e encadear um método ``catch`` ao final da cadeia de promessas. Isso permite que você capture qualquer ``erro`` que possa ocorrer durante a resolução da promessa ou durante a execução de qualquer uma das funções passadas para os métodos ``then``. Aqui está um exemplo:

```
funcaoQueRetornaUmaPromessa()
    .then(resultado => {
        // Código para processar o resultado
        console.log(resultado);
    })
    .catch(erro => {
        // Código para lidar com o erro
        console.error('Ocorreu um erro:', erro);
    });
```

Neste exemplo, a função ``funcaoQueRetornaUmaPromessa`` retorna uma promessa que pode ser resolvida com sucesso ou rejeitada com um erro. Se a promessa for resolvida com sucesso, a primeira função anônima passada para o método ``then`` será chamada com o resultado da promessa como argumento. Se a promessa for rejeitada com um erro ou se ocorrer um erro durante a execução da primeira função anônima, a função anônima passada para o método ``catch`` será chamada com o objeto de erro como argumento.

É importante sempre tratar exceções em seu código para evitar que erros inesperados interrompam a execução do programa ou causem comportamentos indesejados.

<br>

### Exemplo
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
            })
            .catch(function(erro) {
                alert("ocorreu um erro ao buscar o endereço, tente novamente mais tarde");
            })
            .finally(function() {
                setTimeout(function() {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 1000);
            })
    })
})
```

Este código é uma versão modificada do código anterior que usa a Fetch API para fazer uma requisição AJAX para buscar informações sobre um CEP e preencher um campo de endereço com os dados retornados. Ele também adiciona tratamento de exceções para lidar com erros que possam ocorrer durante a requisição.

O código adiciona um método ``catch`` ao final da cadeia de promessas para lidar com quaisquer erros que possam ocorrer durante a requisição ou o processamento da resposta. A função anônima passada para o método ``catch`` é chamada com o objeto de erro como argumento. Neste caso, ela exibe um alerta informando ao usuário que ocorreu um erro ao buscar o endereço.

Por fim, o código adiciona um método ``finally`` ao final da cadeia de promessas para executar código independentemente de a promessa ter sido resolvida ou rejeitada. A função anônima passada para o método ``finally`` usa o método setTimeout para agendar uma função para ser chamada após 1 segundo (1000 milissegundos). Essa função alterna novamente a visibilidade dos elementos filhos do botão clicado (um ícone e um elemento span) usando os métodos find, addClass e removeClass do jQuery.

<br>

## ✅ Questionário
Qual bloco será executado caso ocorra um erro na execução do nosso código JavaScript?

A- error;

B- catch;

C- finally;

D- try;

Reposta: Letra B - Se ocorrer um erro durante a execução de um bloco de código JavaScript dentro de um bloco try, o código dentro do bloco catch correspondente será executado. O bloco catch permite que você lide com exceções de maneira elegante, sem interromper a execução do programa ou exibir mensagens de erro confusas para o usuário.