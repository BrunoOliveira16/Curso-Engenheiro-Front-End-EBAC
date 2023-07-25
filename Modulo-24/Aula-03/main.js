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

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimento);
console.log(typeof Pessoa);

console.log(bruno instanceof Pessoa);
