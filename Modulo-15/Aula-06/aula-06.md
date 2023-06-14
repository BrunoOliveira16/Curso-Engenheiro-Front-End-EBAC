## 📝 Aula 06: Funções e operadores 
A sintaxe de uma função no SASS é muito parecida com a de um mixin, com a diferença que em uma função podemos utilizar lógica e retornar valores.

Exemplo:
```
@function pixel-para-em($pixel, $font-size-contexto: 16px) {
    @return math.div($pixel, $contexto);
}
.section-title{
    font-size: pixel-para-em(36px, 18px);
}
```

<br>

### ✅ Questionário
Qual é a sintaxe básica para criar uma função no SASS?

A- @function nomeDaFuncao() { @return 10px }

B- $function nomeDaFuncao() { $return 10px }

C- function nomeDaFuncao() { return 10px }

D- function nomeDaFuncao() { @return 10px } 

Resposta: Letra A