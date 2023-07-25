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

console.log(pessoa.nome);
console.log(pessoa['nome']); 

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
};
exibeAtributo('nome');

pessoa.sobrenome = undefined;

if(pessoa.sobrenome) {
    console.log('a pessoa possui um sobrenome')
}

if('sobrenome' in pessoa) {
    console.log('tem sobrenome')
}

console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));