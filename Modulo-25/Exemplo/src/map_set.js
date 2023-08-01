let meuMap = new Map();
meuMap.set("nome", "Bruno");
meuMap.set("stack", "html, css, js e react");
console.log(meuMap);

// Buscando o valor através da chave
const nome = meuMap.get('nome');
console.log(nome);

console.log(meuMap.size); // 2
console.log(meuMap.has('sobrenome')); // false

// Limpando o Map
// meuMap.clear();
// console.log(meuMap.size);

// Buscando as chaves e valores
for(let chave of meuMap.keys()) {
    console.log(chave);
}
for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let entrada of meuMap.entries()) {
    console.log(entrada);
}

// Removendo valores
meuMap.delete('stack')
console.log(meuMap) // Map(1) { 'nome' => 'Bruno' }


/*
 *   SET
 */

const cpfs = new Set();
cpfs.add('50718120027');
cpfs.add('77840567029');
cpfs.add('40058126007');

console.log(cpfs); // Set(3) { '50718120027', '77840567029', '40058126007' }

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})


const array = ['Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira', 'Bruno Oliveira', 'Bernardo Oliveira']
const arrayComoSet = new Set([...array]);
const arraySemDuplicados = [...arrayComoSet];
console.log(arrayComoSet); // Set(3) { 'Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira' }
console.log(arraySemDuplicados); // [ 'Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira' ]