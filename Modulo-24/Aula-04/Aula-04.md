## 📝 Aula 04: Acessando atributos
Acessar atributos de um objeto é uma maneira de ler ou modificar os valores das propriedades desse objeto. Em JavaScript, existem duas maneiras principais de acessar os atributos de um objeto: usando a notação de ponto (``.``) ou a notação de colchetes (``[]``).

No exemplo abaixo, o objeto ``pessoa`` tem quatro atributos: ``nome``, ``idade``, ``ehMaiorDeIdade`` e ``conhecimento``. Esses atributos podem ser acessados usando a notação de ponto ou a notação de colchetes. Por exemplo, ``pessoa.nome`` e ``pessoa['nome']`` retornarão o valor do atributo ``nome`` do objeto ``pessoa``.

```
const nome = 'Bruno';
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimento = ['html', 'css', 'javascript', 'react'];

const pessoa = {
    nome : nome,
    idade : idade,
    ehMaiorDeIdade : ehMaiorDeIdade,
    conhecimento : conhecimento,
}

console.log(pessoa.nome); // Bruno
console.log(pessoa['nome']); // Bruno

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
};
exibeAtributo('nome'); // Bruno

pessoa.sobrenome = undefined;

if(pessoa.sobrenome) {
    console.log('a pessoa possui um sobrenome')
}

if('sobrenome' in pessoa) {
    console.log('tem sobrenome') // tem sobrenome
}

console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'ehMaiorDeIdade', 'conhecimento', 'sobrenome' ]
console.log(Object.keys(pessoa).length); // 5
console.log(Object.values(pessoa)); // [ 'Bruno', 30, true, [ 'html', 'css', 'javascript', 'react' ], undefined ]

```

Também é possível acessar os atributos de um objeto usando uma variável para especificar o nome do atributo. No exemplo fornecido, a função ``exibeAtributo`` aceita um argumento chamado ``nomeAtributo`` e usa esse argumento para acessar o valor do atributo correspondente do objeto pessoa. Por exemplo, chamar ``exibeAtributo('nome')`` exibirá o valor do atributo ``nome`` do objeto ``pessoa``.

Além disso, é possível verificar se um objeto possui um determinado atributo usando o operador ``in`` ou o método ``Object.keys()``. No exemplo fornecido, a linha ``'sobrenome' in pessoa`` verifica se o objeto pessoa possui um atributo chamado sobrenome. Como esse atributo não existe no objeto pessoa, essa linha de código retornará false. O método ``Object.keys(pessoa)`` retorna um array contendo os nomes dos atributos do objeto pessoa.

Finalmente, é possível adicionar novos atributos a um objeto simplesmente atribuindo um valor a eles. No exemplo fornecido, a linha ``pessoa.sobrenome = undefined``; adiciona um novo atributo chamado sobrenome ao objeto pessoa e define seu valor como ``undefined``.

<br>

## ✅ Questionário
Sobre o acesso a atributos é incorreto afirmar que:

A- São acessíveis através dos colchetes;

B- São acessíveis através da notação ponto;

C- Não podemos deletar atributos de objetos criados com a palavra const;

D- São passíveis de remoção;

Resposta: A afirmação incorreta é a opção C: é possível deletar atributos de objetos criados com a palavra-chave const usando o operador delete. Portanto, a resposta correta é a opção C.

As outras afirmações estão corretas:

- A opção A está correta: os atributos de um objeto podem ser acessados usando a notação de colchetes.
- A opção B está correta: os atributos de um objeto também podem ser acessados usando a notação de ponto.
- A opção D está correta: é possível remover atributos de um objeto usando o operador delete.