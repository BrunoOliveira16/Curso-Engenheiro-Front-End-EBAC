// Tipo de dados

// String ou Literais
let primeiroNome = "Bruno"
console.log(primeiroNome)
console.log(typeof primeiroNome)

let ultimoNome = "Oliveira"

//Concatenação
console.log(primeiroNome + " " + ultimoNome)
console.log(`${primeiroNome} ${ultimoNome}`)

// Tamanho da string
console.log(primeiroNome.length)

//cortar a string
console.log(primeiroNome.slice(0, 2))

//Procurar determinado caractere de uma string
console.log(primeiroNome.search('u'))

// Lógicos ou Booleanos
let hojeEFeriado = false
let foiConvidado = true

console.log(hojeEFeriado)
console.log(foiConvidado)

// Number
let idade = 32
console.log(typeof idade)

let altura = 1.78
console.log(Number.isInteger(altura))

console.log(10 + 10)
console.log(10 - 5)
console.log(10 * 2)
console.log(10 / 2)
console.log(10 % 3)
console.log(10 ** 3)

altura = "1.80"
console.log(parseFloat(altura))

// Arrays
let tecnologias = ['HTML', 'CSS', 'JavaScript']
console.log(tecnologias)
console.log(tecnologias[1])
tecnologias.push('jQuery')
console.log(tecnologias)