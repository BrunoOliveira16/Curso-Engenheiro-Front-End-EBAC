## 📌 EXERCICIO MÓDULO 25 | Recursos do ES6+
### A entrega deste exercício consiste em:
- Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

- Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

- Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma.

<br>

### 💡 Solução

```
// Define a classe Aluno
class Aluno {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
};

// Cria um array de alunos
const alunos = [
    new Aluno('Bruno', 10),
    new Aluno('Bianca', 8),
    new Aluno('Bernardo', 8),
    new Aluno('João', 5),
    new Aluno('Maria', 4)
];

// Função para checar alunos aprovados
function checarAlunos(alunos) {
    const alunosAprovados = [];

    alunos.map((aluno) => {
        if(aluno.nota >= 6) {
            alunosAprovados.push(aluno)
        }
    });
    return alunosAprovados;
};

// Chama a função checarAlunos com o array de alunos e exibe o resultado no console
const alunosAprovados = checarAlunos(alunos);
console.log(alunosAprovados);
```