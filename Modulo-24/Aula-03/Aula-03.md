## 📝 Aula 03: Verificação de tipos e instâncias
A verificação de tipos e instâncias é uma maneira de verificar o tipo de dados de uma variável ou se um objeto é uma instância de uma determinada classe ou construtor.

Em JavaScript, podemos usar o operador ``typeof`` para verificar o tipo de dados de uma variável. Por exemplo, no código fornecido, typeof nome retornará ``'string'``, typeof idade retornará ``'number'``, typeof ehMaiorDeIdade retornará ``'boolean'``, typeof conhecimento retornará ``'object'`` e typeof Pessoa retornará ``'function'``, pois Pessoa é uma função construtora.

```
const nome = 'Bruno';
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimento = ['html', 'css', 'javascript', 'react'];

function Pessoa(nome, idade, ehMaiorDeIdade, conhecimento) {
    this.nome = nome;
    this.idade = idade;
    this.ehMaiorDeIdade = ehMaiorDeIdade;
    this.conhecimento = conhecimento;
}

const bruno = new Pessoa('Bruno', 30, true, ['html', 'css', 'javascript', 'react'])

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof ehMaiorDeIdade); // boolean
console.log(typeof conhecimento); // object
console.log(typeof Pessoa); // function

console.log(bruno instanceof Pessoa);

```

ambém podemos usar o operador ``instanceof`` para verificar se um objeto é uma instância de uma determinada classe ou construtor. No exemplo fornecido, a linha ``console.log(bruno instanceof Pessoa)`` verifica se o objeto bruno é uma instância da classe Pessoa. Como bruno foi criado usando a função construtora Pessoa, essa linha de código retornará ``true``.

<br>

## ✅ Questionário
Sobre o typeof é o incorreto afirmar que:

A- retornará string para typeof “1.54”;

B- retornará object para typeof new Error();

C- retornará object para typeof [1, 2, 3];

D- retornará error para typeof new Error();

Resposta: A afirmação incorreta é a opção D: typeof new Error() retornará 'object', não 'error'. Portanto, a resposta correta é a opção D.

As outras afirmações estão corretas:

- A opção A está correta: typeof "1.54" retornará ``'string'``.
- A opção B está correta: typeof new Error() retornará ``'object'``.
- A opção C está correta: typeof [1, 2, 3] retornará ``'object'``.