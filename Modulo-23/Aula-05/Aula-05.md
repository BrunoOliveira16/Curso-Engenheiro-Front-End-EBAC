## 📝 Aula 05: Lançando exceções
A instrução ``throw`` é usada para lançar uma exceção definida pelo usuário em JavaScript. Quando você lança uma exceção, a expressão especifica o valor da exceção. A execução da função atual vai parar (as instruções após o ``throw`` não serão executadas), e o controle será passado para o primeiro bloco ``catch`` na pilha de chamadas. Se nenhum bloco ``catch`` existe entre as funções “chamadoras”, o programa vai terminar .

Aqui está um exemplo de como usar a instrução throw para lançar uma exceção:

```
$('#formulario-pedido').submit(function(evento) {
    evento.preventDefault();
    
    if($('#nome').val().length == 0) {
        throw new Error('Digite o nome');
    }
})
```

O código verifica se o campo de entrada com o ID ``nome`` está vazio, verificando se o comprimento do valor é igual a 0. Se for verdadeiro, uma exceção é lançada usando a instrução ``throw`` com um objeto ``Error`` contendo uma mensagem de erro.

Isso interrompe a execução da função e passa o controle para o primeiro bloco ``catch`` na pilha de chamadas, se houver. Se nenhum bloco ``catch`` for encontrado, a exceção será propagada até o nível superior e exibida para o usuário.

Você pode usar ``throw`` para relançar uma exceção depois de capturá-la. Isso é útil quando você deseja adicionar informações adicionais à exceção ou modificar seu comportamento antes de propagá-la para cima na pilha de chamadas.

<br>

## ✅ Questionário
Como disparamos um erro no JavaScript?

A- new Error(”Descrição do erro");

B- throw Error(”Descrição do erro");

C- throw new Exception("Descrição do erro");

D- throw new Error("Descrição do erro");

Reposta: Letra D - A instrução throw é usada para lançar uma exceção definida pelo usuário em JavaScript. Quando você lança uma exceção, a expressão especifica o valor da exceção. Você pode criar um objeto de erro usando o construtor Error e passando uma mensagem de erro como argumento. Em seguida, você pode lançar o objeto de erro usando a instrução throw. Isso interrompe a execução da função atual e passa o controle para o primeiro bloco catch na pilha de chamadas .