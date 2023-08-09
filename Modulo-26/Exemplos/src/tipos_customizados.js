"use strict";
const alunos = [
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
];
alunos.push({
    nome: 'Julia',
    cursos: ['Back-end', 'Python'],
    idade: 25
});
const novoAluno = {
    nome: 'Bruno',
    idade: 30
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
