const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for(let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
};

//ES6 - forEach
redesSociais.forEach(function(nomeRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeRedeSocial}`)
});

// ES6 - map
const alunos = ['Bruno', 'Bianca', 'Bernardo'];
const alunosUpdate = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
});
console.log(alunosUpdate);

const numeros = [2, 4, 6, 8];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
})
console.log(dobroDosNumeros);


// ES6 - find e findIndex
const bianca = alunosUpdate.find(function(aluno) {
    return aluno.nome == 'Bianca';
})
console.log(bianca);

const indiceBianca = alunosUpdate.findIndex(function(aluno) {
    return aluno.nome == 'Bianca';
})
console.log(indiceBianca);


// ES6 - every
alunosUpdate.push({
    nome: 'Lucio',
    curso: 'Backend'
});

const todosAlunosSaoFrontend = alunosUpdate.every(function(item) {
    return item.curso === 'Frontend'
});
console.log(todosAlunosSaoFrontend);

// ES6 - some
const existeAlunoBackend = alunosUpdate.some(function(item) {
    return item.curso === 'Backend'
});
console.log(existeAlunoBackend);


// ES6 - filter
const alunosBackend = alunosUpdate.filter(function(item) {
    return item.curso === 'Backend'
});
console.log(alunosBackend);


// ES6 - reduce
const soma = numeros.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador
}, 0);
console.log(soma);

const nomeDosAlunos = alunosUpdate.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '');
console.log(nomeDosAlunos);