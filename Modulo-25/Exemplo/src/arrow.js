const minhaFuncao = () => 'Diz olá';

const retornaCarro = () => ({
        modelo: 'Ka',
        fabricante: 'Ford'
});

console.log(minhaFuncao());
console.log(retornaCarro());

// Método com erro na chamada
// const carro = {
//     velocidadeAtual: 40,
//     acelerar: function() {
//         this.velocidadeAtual += 10;
//     },
//     frear: () => {
//         this.velocidadeAtual -= 10;
//     }
// }

// Método tradicional - OK
// const carro = {
//     velocidadeAtual: 40,
//     acelerar: function() {
//         this.velocidadeAtual += 10;
//     },
//     frear: function() {
//         this.velocidadeAtual -= 10;
//     }
// }

// Arrow function + função construtora - OK
function Carro() {
    this.velocidadeAtual = 40;
    this.acelerar = () => {
        this.velocidadeAtual += 10;
    };
    this.frear = () => {
        this.velocidadeAtual -= 10;
    };
}
const carro = new Carro();

carro.acelerar();
carro.frear();

// console.log(carro.acelerar);
// console.log(carro.frear);
console.log(carro.velocidadeAtual); // 40
