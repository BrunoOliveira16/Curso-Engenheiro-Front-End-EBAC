// Condicionais
console.log(10 <= 5)
console.log(10 >= 5)
console.log(10 == 5)
console.log(10 === 10)
console.log(10 == '10')
console.log(10 === '10')
console.log(10 !== '10')
console.log(10 != '10')

// and
console.log(10 > 5 && 5 > 2)

// or
console.log(10 < 5 || 5 > 2)

// not
console.log(!false)


// if, else e else if
let idade = 15
let estaAcompanhada = true
/*let idade = prompt("Digite sua idade: ")
idade = parseInt(idade)*/

if(idade >= 18) {
    console.log("Pode entrar")
} else if (estaAcompanhada == true) {
    console.log("Pode entrar, pois está acompanhada")
} else {
    console.log("Não pode entrar, pois é menor de idade e não está acompanhado")
}

// Operador ternario
const podeEntrar = idade >= 18 ? true : false
console.log(podeEntrar)