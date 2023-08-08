## 📝 Aula 02: Tipos básicos
### 2: Tipos básicos
No TypeScript possuímos alguns tipos básicos, primitivos, são eles: boolean, number, string, array, readonlyArray, tuplas, union e any.

Arrays: os arrays podem ser declarados através dos colchetes ou das palavras reservadas Array e readonlyArray:
```
const nomes: string[] = [];
const nomes2: Array<string> = []; 
const nomes3: readonlyArray<string> = [];
```

A única diferença que temos é ao utilizar o readonlyArray, onde os métodos para manipulação do array serão removidos, por exemplo, não poderemos adicionar um novo item com push.

A única diferença que temos é ao utilizar o readonlyArray, onde os métodos para manipulação do array serão removidos, por exemplo, não poderemos adicionar um novo item com push

Para criar uma tupla utilizamos os colchetes informando os tipos que serão aceitos:
```
const lista: [string, boolean, number] = [“ana”, true, 22];
```

Assim temos uma estrutura similar a de um array, também podemos informar um nome para cada índice, como se fossem campos:
```
const lista: [nome: string, estaEstudando: boolean, idade: number] = [“ana”, true, 22];
```

Apesar da forte tipagem que o TypeScript nos fornece, podemos aceitar mais um tipo em uma variável, utilizando o Union Type:
```
let idade: number | string;
idade = 20
idade = “20 anos”
```

O TypeScript fornece um tipo fraco, chamado any, do inglês: qualquer, onde podemos atribuir qualquer tipo de dado, este recurso deve ser usado em último caso:
```
let minhaVariavel: any;
minhaVariavel = [1, 2, 3, 4]
minhaVariavel = “gian”
minhaVariavel = {}
minhaVariavel = true
```

<br>

## ✅ Questionário
Qual tipo a seguir não pertence ao TypeScript?

A- number

B- char

C- string

D- boolean

Resposta: A resposta correta é a letra B. O tipo char não pertence ao TypeScript. O TypeScript é um superconjunto do JavaScript que adiciona tipos estáticos e outras funcionalidades ao JavaScript. Ele inclui os tipos básicos number, string e boolean, que representam números, strings e valores booleanos, respectivamente. No entanto, o TypeScript não possui um tipo char específico para representar caracteres individuais. Em vez disso, os caracteres são representados como strings de comprimento.