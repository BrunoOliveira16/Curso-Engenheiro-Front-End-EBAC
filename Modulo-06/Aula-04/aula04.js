// laços de repetição
const nomes = ["Bruno", "Bianca", "Bernardo"]

// Laço for
for(let i = 0; i < nomes.length; i++) {
    console.log(`O nome é: ${nomes[i]}`)
}

// Laço for in
for(nome in nomes) {
    console.log(`O nome é: ${nomes[nome]}`)
}


let saudacoes = 0
// Laço while
while(saudacoes < nomes.length) {
    console.log(`O nome é: ${nomes[saudacoes]}`)
    saudacoes++
}


saudacoes = 0
// Laço do while
do {
    console.log(`O nome é: ${nomes[saudacoes]}`)
    saudacoes++
} while (saudacoes < nomes.length);