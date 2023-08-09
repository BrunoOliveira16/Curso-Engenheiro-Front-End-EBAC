## 📝 Aula 05: Tipos customizados
No TypeScript, é possível criar tipos personalizados usando a palavra-chave type. Os tipos personalizados permitem que você defina a estrutura de um objeto, especificando os nomes e os tipos de suas propriedades. Isso pode ser útil para garantir que os objetos tenham a estrutura correta e para fornecer informações de tipo mais precisas ao TypeScript.

No exemplo abaixo, um tipo personalizado chamado ``aluno`` é criado usando a sintaxe ``type aluno = {...}``. O tipo ``aluno`` tem três propriedades: ``nome``, ``cursos`` e ``idade``. A propriedade ``nome`` é do tipo ``string``, a propriedade ``cursos`` é um ``array opcional`` de ``strings`` (indicado pelo sinal de interrogação após o nome da propriedade) e a propriedade ``idade`` é do tipo ``number``.

```
type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}
```

A constante ``alunos`` é declarada como um array de objetos do tipo ``aluno``. O array contém dois objetos, cada um representando um aluno com as propriedades ``nome, cursos e idade``.

```
const alunos: aluno[] = [
    {
        nome: 'João',
        cursos: ['Front-end', 'UX/UI'],
        idade: 30
    },
    {
        nome: 'Maria',
        cursos: ['Front-end', 'Python'],
        idade: 28
    },
]
```

A constante novoAluno é declarada como um objeto do tipo ``aluno``. O objeto tem as propriedades ``nome e idade``, mas não tem a propriedade opcional ``cursos``.

```
const novoAluno: aluno = {
    nome: 'Bruno',
    idade: 30
}
```

A função ``exibeAluno`` recebe um parâmetro chamado ``aluno`` do tipo ``aluno``. A função imprime o valor da propriedade ``nome`` do objeto passado como argumento.

```
function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}
```

Em resumo, o exemplo mostra como você pode criar tipos personalizados no TypeScript para definir a estrutura de objetos e garantir que eles tenham as propriedades corretas. Isso pode ser útil para fornecer informações de tipo mais precisas ao TypeScript e para ajudar a evitar erros ao trabalhar com objetos complexos.

<br>

## ✅ Questionário
Qual palavra reservada utilizamos para criar tipos customizados?

A- type

B- package

C- namespace

D- struct

Resposta: A palavra reservada correta é a letra A, type. No TypeScript, é possível criar tipos personalizados usando a palavra-chave type. Os tipos personalizados permitem que você defina a estrutura de um objeto, especificando os nomes e os tipos de suas propriedades. Isso pode ser útil para garantir que os objetos tenham a estrutura correta e para fornecer informações de tipo mais precisas ao TypeScript.