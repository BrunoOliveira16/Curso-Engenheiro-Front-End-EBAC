## 📝 Aula 04: Laços
### ✅ Sobre laços
Laço é o nome que damos quando queremos percorrer um conjunto de itens, também chamamos de loop ou iteração. 

Podemos ter um conjunto com os nomes dos ganhadores de uma promoção:
```
var ganhadores = [“Gabriela”, “João”, “Luana”]
```

Sem o uso de um laço, teríamos que acessar o índice de item no conjunto:
```
ganhadores[0] // Gabriela
ganhadores[1] // João
ganhadores[2] // Luana
```

<br>

### ✅ Laço for
O tipo de laço mais comum é o for, sua estrutura é:
```
for (var i = 0; i < qtdde itens; i++) {
// ...
}
```

Onde:

``var i`` = criamos uma variável que irá contar as vezes em que “entramos” no laço

``Qtd de itens`` = quantas vezes queremos entrar no laço, geralmente é o tamanho do conjunto, que pode ser obtido através de ganhadores.length, por exemplo.

``i++`` = Informamos que a cada vez que o laço for acionado o valor de i deve ser incrementado + 1.

``<`` = Será executada apenas quando i for menor que a qtd de itens

Exemplo prático:
```
var ganhadores = [“Gabriela”, “João”, “Luana”] 
for (var i = 0; i < ganhadores.length; i++) {
console.log(“Parabéns: “ + ganhadores[i]);
}
```

Desta forma não precisamos nos preocupar em informar o índice do elemento, basta informar o i entre colchetes que ele terá o valor atualizado do item atual.

<br>

### ✅ Laço for in
O laço for in é um meio mais simples de executarmos o laço for, nessa abordagem recebemos o índice do item em uma variável.

Exemplo considerando o conjunto:
```
ganhadores = [“Gabriela”, “João”, “Luana”]
var saudacoes= 0;
for (ganhador in ganhadores) {
console.log(“Parabéns: ” + ganhadores[ganhador]);
}
```

<br>

### ✅ Laço while
Outra forma de iterarmos um conjunto de dados é através do laço while, sua estrutura é:
```
while(condição verdadeira) {
// ...
}
```

Enquanto (while) uma condição for verdadeira o código dentro do bloco será executado.

Exemplo considerando o conjunto:
```
ganhadores = [“Gabriela”, “João”, “Luana”]
var saudacoes= 0;
while(saudacoes< ganhadores.length) {
console.log(“Parabéns :” + ganhadores[saudacoes]);
saudacoes++;
}
```

Enquanto o número de saudações for menor que a quantidade de itens o bloco será executado, ao final de cada o número de saudações será incrementado para que no final da terceira saudação saudações = 3 e isso já não satisfaz mais a condição do laço while.

<br>

### ✅ Laço do while
O laço do while é bem parecido com o laço while, apenas inverte o bloco de execução com a condição:
```
do {
// ...
} while(condição verdadeira);
```

Resumidamente, execute esse bloco de código enquanto a condição for verdadeira.

<br>

### ✅ Questionário
"Dado o trecho: let counter = 0 while (counter < 10) { console.log(counter * 10) } Qual problema temos neste código?"

A- A falta de ponto e vírgula fará com que o código não execute

B- A sintaxe do while está errada

C- Não podemos fazer operações aritméticas dentro do console.log

D- O código dentro do while será executado eternamente, pois o valor de counter sempre será menor que 10 

Resposta: letra D