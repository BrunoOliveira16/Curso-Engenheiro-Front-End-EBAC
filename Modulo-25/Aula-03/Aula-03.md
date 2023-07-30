## 📝 Aula 03: Conhecendo a arrow function
Arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas têm uma sintaxe mais curta e são especialmente úteis para escrever funções anônimas ou passar funções como argumentos para outras funções. Aqui está um exemplo de como usar arrow functions:

```
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function equivalente
const soma = (a, b) => a + b;

// Usando arrow function como argumento de outra função
const numeros = [1, 2, 3, 4];
const quadrados = numeros.map(x => x * x);
```

No exemplo acima, a função soma é reescrita como uma arrow function. A sintaxe é mais curta e não é necessário usar a palavra-chave function ou as chaves {} para delimitar o corpo da função. Além disso, a arrow function é usada como argumento da função map para calcular o quadrado de cada elemento do array numeros.

<br>

### Exemplo função tradicional x arrow functions
No exemplo abaixo, o objeto ``carro`` tem duas propriedades: ``velocidadeAtual`` e duas funções, ``acelerar`` e ``frear``. A função ``acelerar`` é uma função tradicional, enquanto a função ``frear`` é uma arrow function.

Quando a função ``acelerar`` é chamada com ``carro.acelerar()``, ela aumenta o valor da propriedade ``velocidadeAtual`` em 10. Isso acontece porque a função ``acelerar`` é uma função tradicional e, portanto, tem seu próprio ``this``, que se refere ao objeto carro.

No entanto, quando a função ``frear`` é chamada com ``carro.frear()``, ela não altera o valor da propriedade ``velocidadeAtual``. Isso acontece porque a função ``frear`` é uma arrow function e, portanto, não tem seu próprio ``this``. Em vez disso, ela herda o valor de ``this`` do escopo léxico em que foi definida, que neste caso é o escopo global. Como não existe uma propriedade ``velocidadeAtual`` no escopo global, a função ``frear`` não tem efeito.
```
const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}
carro.acelerar();
carro.frear();

console.log(carro.acelerar);
console.log(carro.frear);
```

<br>

### Function tradicional
Aqui está um exemplo corrigido em que ambas as chamadas funcionam, utilizando o método tradicional:

```
const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: function() {
        this.velocidadeAtual -= 10;
    }
}
carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual); // 40
```

Neste exemplo, ambas as funções ``acelerar`` e ``frear`` são funções tradicionais e têm seu próprio ``this``, que se refere ao objeto carro. Portanto, ambas as chamadas funcionam como esperado e alteram o valor da propriedade ``velocidadeAtual``.

<br>

### Arrow function
Como mencionado anteriormente, arrow functions não têm seu próprio ``this`` e, portanto, não são adequadas para definir métodos de objetos que precisam acessar propriedades do objeto usando ``this``. No entanto, é possível reescrever o exemplo usando arrow functions de uma maneira ligeiramente diferente, usando uma função construtora para criar o objeto ``carro``. Aqui está um exemplo:

```
function Carro() {
    this.velocidadeAtual = 40;
    this.acelerar = () => {
        this.velocidadeAtual += 10;
    };
    this.frear = () => {
        this.velocidadeAtual -= 10;
    };
}

const carro = new Carro();
carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual); // 40
```

Neste exemplo, a função construtora ``Carro`` é usada para criar o objeto ``carro``. As funções ``acelerar`` e ``frear`` são definidas como arrow functions dentro da função construtora. Como as arrow functions herdam o valor de ``this`` do escopo léxico em que foram definidas, elas têm acesso ao objeto ``carro`` criado pela função construtora e podem alterar suas propriedades. Portanto, ambas as chamadas funcionam como esperado e alteram o valor da propriedade ``velocidadeAtual``.

<br>

## ✅ Questionário
Sobre as arrows functions é correto afirmar:

A- Possuem o mesmo escopo de uma função tradicional;

B- Podemos usar uma arrow function junto com os métodos apply, call e bind;

C- Nenhuma das afirmativas;

D- Não podem receber mais de um parâmetro;

Resposta: A resposta correta é a opção C, “Nenhuma das afirmativas”. Arrow functions não possuem o mesmo escopo de uma função tradicional (opção A) e não podem ser usadas com os métodos apply, call e bind (opção B), pois elas não têm seu próprio this. Além disso, arrow functions podem receber qualquer número de parâmetros (opção D).