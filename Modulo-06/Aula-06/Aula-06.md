## 📝 Aula 06: Funções
### ✅ Sobre funções
Uma função, também pode ser chamada de método ou procedimento, **é uma forma de separamos partes específicas do código e que podemos reutiliza-las**.

Podem receber parâmetros, também chamados de argumentos e podem retornar algum valor ou não.

<br>

### ✅ Criando uma função
Temos dois caminhos para criar uma função no JavaScript: **através de uma variável ou usando a palavra reservada function**.
```
var nome = “JavaScript”

function dizOi( ) {
    console.log(“Oi, “ + nome);
}

var dizOi = function( ) {
    console.log(“Oi, “ + nome);
}
```

Para executar a função escrevemos o nome dela seguido de ( ), dizOi().

Podemos dizer que estamos chamando ou invocando um função.

<br>

### ✅ Parâmetros
No exemplo anterior na mensagem de saudação estamos concatenando com o nome que é uma variável declarada antes da função, estamos usando um recurso externo.

Com o uso de parâmetros podemos tornar nossa função independente de recursos externos.
```
function dizOi(nome, cidadeNatal) {
    console.log(“Oi, “ + nome + “ de “ + cidadeNatal);
}
```

<br>

### ✅ Retornando dados
Até aqui vimos construir uma função e consumir dados de entrada (inputs), mas com as funções também podemos retornar dados (outputs). Fazemos isso com a palavra reservada return.

Um ponto importante é que todo o código escrito após o return não será executado.

Exemplo com return:
```
function numeroAoQuadrado(numero) {
    return numero * numero;
}
```

Podemos usar o retorno para atribuir o valor a uma variável, por exemplo:
```
var num1 = 4;
var num2 = numeroAoQuadrado(num1); // 16
```

<br>

### ✅ Questionário
Qual dos exemplos a seguir NÃO representa o uso de uma função?

A- parseInt("Dez")

B- dizOi("José")

C- nomes.length

D- console.log("Olá mundo") 

Resposta: Letra C