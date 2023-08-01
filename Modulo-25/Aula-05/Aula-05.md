## 📝 Aula 05: Conhecendo as estruturas Map e Set
Map e Set são estruturas de dados introduzidas no ECMAScript 6 (ES6) que permitem armazenar coleções de dados. Ambas são semelhantes aos objetos e arrays, mas possuem algumas diferenças importantes.

### Map
Um ``Map`` é uma coleção de pares chave-valor, assim como um objeto. No entanto, a principal diferença é que um Map permite chaves de qualquer tipo, enquanto as chaves de um objeto devem ser strings ou símbolos. Além disso, um Map mantém a ordem de inserção dos elementos, enquanto um objeto não. Um Map possui vários métodos úteis, como ``set``, ``get``, ``has``, ``delete`` e ``clear``, além de uma propriedade ``size`` que retorna o número de elementos no Map.

```
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
// console.log(meuMap.size); // 0

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
```

### Set
Um Set é uma coleção de valores únicos. Diferentemente de um array, um Set não permite valores duplicados. Um Set também possui vários métodos úteis, como ``add``, ``has``, ``delete`` e ``clear``, além de uma propriedade ``size`` que retorna o número de elementos no Set.
```
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
```

<br>

## ✅ Questionário
Sobre o SET é incorreto afirmar:

A- Podemos adicionar itens duplicados;

B- É um tipo de coleção onde não possui chave, apenas valor;

C- Permite criar uma coleção de itens que não se repetem;

D- Podemos limpar a coleção utilizando o método .clear();

Resposta: A afirmação incorreta é a letra A. Um Set é uma coleção de valores únicos, o que significa que não permite a adição de itens duplicados. Se você tentar adicionar um valor que já está presente no Set, ele será ignorado e o Set permanecerá inalterado. As outras afirmações são corretas: um Set não possui chaves, apenas valores (B); permite criar uma coleção de itens que não se repetem (C); e podemos limpar a coleção utilizando o método .clear() (D).