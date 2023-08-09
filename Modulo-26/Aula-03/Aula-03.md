## 📝 Aula 03: Tipagens em funções
No TypeScript, é possível especificar os tipos dos parâmetros e o tipo de retorno de uma função. Isso ajuda a garantir que a função seja chamada com os argumentos corretos e que o valor retornado seja do tipo esperado.

```
function calcularArea(base: number, altura: number): number {
    return base * altura;
};
```
No primeiro exemplo, a função ``calcularArea`` tem dois parâmetros, ``base`` e ``altura``, ambos do tipo ``number``. O tipo de retorno da função é especificado após os parâmetros, usando a sintaxe ``: number``. Isso indica que a função deve retornar um valor do tipo ``number``. A função calcula a área de um retângulo multiplicando a ``base`` pela ``altura`` e retorna o resultado.

<br>

```
const calcularArea2 = (base: number, altura: number): number => base * altura;
```
No segundo exemplo, a constante ``calcularArea2`` é definida como uma função de seta que recebe dois parâmetros, ``base`` e ``altura``, ambos do tipo ``number``. O tipo de retorno da função é especificado após os parâmetros, usando a sintaxe ``: number``. A função calcula a área de um retângulo multiplicando a base pela altura e retorna o resultado.

<br>

```
function somar(...numeros: number[]): void {
    // numeros.reduce()
    console.log(numeros);
}
```
No terceiro exemplo, a função ``somar`` usa o operador de propagação (``...``) para aceitar um número variável de argumentos do tipo ``number``. Os argumentos são armazenados em um array chamado ``numeros``. O tipo de retorno da função é especificado como void, indicando que a função não retorna nenhum valor. A função imprime o array de números no console.

<br>

```
function teste(): string | number {
    if(10 > 5) {
        return 'Dez é maior que cinco';
    } else {
        return 5;
    }
}

const resultadoDeTeste = teste();
```
No último exemplo, a constante ``resultadoDeTeste`` é definida como o valor retornado pela chamada da função ``teste``. Como o tipo de retorno da função ``teste`` é ``string | number``, o tipo da constante ``resultadoDeTeste`` também será ``string | number``.

<br>

Esses exemplos mostram como você pode usar tipos em funções no TypeScript para garantir que as funções sejam chamadas com os argumentos corretos e retornem valores do tipo esperado.

<br>

## ✅ Questionário
Quando não utilizamos o return dentro de uma função, qual será o tipo de retorno dela?

A- boolean

B- any

C- void

D- unknown

Resposta: A resposta correta é a letra C. Quando uma função não possui uma instrução return explícita, ela retorna undefined por padrão. No TypeScript, o tipo de retorno de uma função que não retorna um valor é void. O tipo void representa a ausência de um valor e é usado principalmente como o tipo de retorno de funções que não retornam um valor. Por exemplo, uma função que imprime uma mensagem na tela pode ter o tipo de retorno void, pois ela não retorna nenhum valor. 