## 📌 EXERCICIO MÓDULO 26 │Introdução ao TypeScript
### A entrega deste exercício consiste em:
- Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que
deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

- No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.

<br>

### 💡 Solução

```
function multiplicar(x: number, y: number): number {
    return x * y
};

function saudar(nome: string): string {
    return `Olá ${nome}`
};


const resultado = multiplicar(5, 5);
const msg = saudar('Bruno');

console.log(resultado);
console.log(msg);
```