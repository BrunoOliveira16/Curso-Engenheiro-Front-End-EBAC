// Funções
let nome = "Bruno"

function dizOi() {
    console.log(`Olá ${nome}`)
}
dizOi()


function ola(nomeUsuario) {
    console.log(`Olá ${nomeUsuario}`)
}
ola("Bruno")


function calcularIdade(anoNascimento) {
    let idade = 2023 - anoNascimento;
    return idade;
}
console.log(`Você tem ${calcularIdade(1990)} anos`)