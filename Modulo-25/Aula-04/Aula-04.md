## 📝 Aula 04: Operadores de Spread e Rest
Os operadores de spread e rest são recursos do JavaScript que permitem trabalhar com arrays e objetos de maneira mais flexível e concisa.

O operador de spread (``...``) permite “espalhar” os elementos de um array ou as propriedades de um objeto em outro lugar. Aqui estão alguns exemplos de como usar o operador de spread:

```
// Concatenando arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Clonando um array
const arr4 = [...arr1]; // [1, 2, 3]

// Adicionando propriedades a um objeto
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

O operador de rest (``...``) permite agrupar vários elementos em um único array ou várias propriedades em um único objeto. Ele é usado principalmente em parâmetros de funções para permitir que a função aceite um número variável de argumentos. Aqui está um exemplo de como usar o operador de rest:

```
// Função que aceita um número variável de argumentos
function soma(...numeros) {
    let total = 0;
    for (const num of numeros) {
        total += num;
    }
    return total;
}

soma(1, 2, 3); // 6
soma(1, 2, 3, 4); // 10
```

Neste exemplo, a função soma usa o operador de rest para agrupar todos os argumentos passados para a função em um único array chamado numeros. Isso permite que a função aceite qualquer número de argumentos e calcule a soma de todos eles.

<br>

### Diferenças entre o operador de spread e o operador de rest em JavaScript
Embora o operador de spread e o operador de rest usem a mesma sintaxe (``...``), eles têm funções diferentes em JavaScript.

O operador de spread é usado para “espalhar” os elementos de um array ou as propriedades de um objeto em outro lugar. Ele é útil para concatenar arrays, clonar objetos e arrays, e adicionar propriedades a objetos, entre outras coisas.

Por outro lado, o operador de rest é usado para agrupar vários elementos em um único array ou várias propriedades em um único objeto. Ele é usado principalmente em parâmetros de funções para permitir que a função aceite um número variável de argumentos.

A principal diferença entre os dois operadores é que o operador de spread “expande” um array ou objeto em seus elementos individuais, enquanto o operador de rest “agrupa” vários elementos em um único array ou objeto.

<br>

### Desestruturação
A desestruturação é um recurso do JavaScript que permite extrair valores de arrays e objetos de maneira mais concisa e legível. Ela pode ser usada para atribuir valores a variáveis de maneira mais direta, sem a necessidade de acessar os elementos ou propriedades individualmente.

Aqui estão alguns exemplos de como usar a desestruturação com arrays e objetos:

```
// Desestruturação de array
const numeros = [1, 2, 3];
const [um, dois, tres] = numeros;
console.log(um, dois, tres); // 1 2 3

// Desestruturação de objeto
const pessoa = { nome: 'João', idade: 25 };
const { nome, idade } = pessoa;
console.log(nome, idade); // João 25

// Desestruturação com renomeação de variáveis
const { nome: name, idade: age } = pessoa;
console.log(name, age); // João 25

// Desestruturação com valores padrão
const { cidade = 'Rio de Janeiro' } = pessoa;
console.log(cidade); // Rio de Janeiro
```

No primeiro exemplo, a desestruturação é usada para extrair os valores do array ``numeros`` e atribuí-los às variáveis ``um``, ``dois`` e ``tres``. No segundo exemplo, a desestruturação é usada para extrair as propriedades ``nome`` e ``idade`` do objeto ``pessoa`` e atribuí-las às variáveis ``nome`` e ``idade``.

Também é possível renomear as variáveis durante a desestruturação, como mostrado no terceiro exemplo. Nesse caso, as propriedades ``nome`` e ``idade`` são extraídas do objeto ``pessoa`` e atribuídas às variáveis ``name`` e ``age``, respectivamente.

Por fim, é possível fornecer valores padrão durante a desestruturação, como mostrado no quarto exemplo. Nesse caso, a propriedade ``cidade`` é extraída do objeto ``pessoa``, mas como ela não existe no objeto, o valor padrão ``'Rio de Janeiro'`` é usado.

## ✅ Questionário
Sobre o operador rest é correto afirma:

A- Retornar um objeto contendo os argumentos informados;

B- Deve ser informado como ultimo argumento da função;

C- Deve ser informado como primeiro argumento da função;

D- É acessível a partir da palavra reservada argumentos;

Resposta: A resposta correta é a opção B. O operador de rest deve ser informado como o último argumento de uma função. Ele permite agrupar vários argumentos em um único array, que pode ser acessado dentro da função.

As outras opções estão incorretas. O operador de rest não retorna um objeto contendo os argumentos informados (opção A), mas sim um array contendo os argumentos. Ele também não deve ser informado como o primeiro argumento da função (opção C), mas sim como o último. Além disso, o operador de rest não é acessível a partir da palavra reservada argumentos (opção D), mas sim a partir do nome do parâmetro que o precede.