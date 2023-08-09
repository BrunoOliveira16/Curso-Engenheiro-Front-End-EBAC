## 📝 Aula 07: Interfaces
Interfaces são uma maneira poderosa de definir contratos dentro do seu código, bem como contratos com código fora do seu projeto. Uma interface é um conjunto de propriedades e métodos que descrevem a estrutura de um objeto. As interfaces são usadas para definir tipos personalizados e para especificar quais propriedades e métodos um objeto deve ter.

Aqui está um exemplo de como você pode usar interfaces no TypeScript:

```
interface Pessoa {
    nome: string;
    idade: number;
}

function exibirPessoa(pessoa: Pessoa) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

const joao = { nome: 'João', idade: 30 };
exibirPessoa(joao); // Nome: João, Idade: 30
```

Neste exemplo, uma interface chamada ``Pessoa`` é definida usando a palavra-chave ``interface``. A interface tem duas propriedades: ``nome e idade``. A função ``exibirPessoa`` recebe um parâmetro chamado pessoa do tipo Pessoa. A função usa as propriedades ``nome e idade`` do objeto passado como argumento para exibir informações sobre a pessoa.

Um objeto chamado ``joao`` é criado com as propriedades ``nome e idade``. O objeto é passado como argumento para a função ``exibirPessoa``, que exibe as informações sobre a pessoa.

Em resumo, as interfaces permitem que você defina tipos personalizados e especifique quais propriedades e métodos um objeto deve ter. Isso pode ser útil para garantir que os objetos tenham a estrutura correta e para fornecer informações de tipo mais precisas ao TypeScript.


<br>

## ✅ Questionário
O que não podemos fazer com interfaces?

A- Aplicar interfaces para serem implementadas por classes

B- Compartilhar interfaces, como herança

C- Criar instâncias da interface

D- Utilizar como tipos de dados

Resposta: A resposta correta é a letra C. Não podemos criar instâncias de uma interface. Interfaces são usadas para definir tipos personalizados e para especificar quais propriedades e métodos um objeto deve ter. Elas são usadas para definir contratos dentro do seu código, bem como contratos com código fora do seu projeto. No entanto, interfaces não podem ser instanciadas diretamente. Em vez disso, você pode criar objetos que implementam uma interface ou usar classes para implementar uma interface e criar instâncias dessas classes.