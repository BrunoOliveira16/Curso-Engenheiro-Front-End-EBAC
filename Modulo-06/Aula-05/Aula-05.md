## 📝 Aula 05: Condicionais
### ✅ Sobre condicionais
**Com o uso das condicionais podemos executar diferentes fluxos de instruções.**

Em conjunto com os verificadores temos os operadores lógicos e os comparadores.

### Comparadores
- ``<`` Menor que 5 < 4 //false
- ``<=`` Menor ou igual que 2 <= 3 // true
- ``>`` Maior que 5 > 5 // false
- ``>=`` Maior ou igual que 5 >= 5 // true
- ``==`` Igual a 5 == “5” // true
- ``===`` Igual a // compara além do conteúdo o tipo do dado 5 === “5” // false
- ``!=`` Diferente de !== Diferente de 5 != “5” // false5 !== “5” // true
- ``!`` Negação !true// false, estamos negando o true, logo false

### Operadores lógicos 
Com os operadores lógicos conseguimos construir uma cadeia de condicionais.

No Java Script possuímos os operadores && (E), || (Ou) e ! (Negação).

- ``&& E`` Com esse operador todos os termos devem ser verdadeiros para a condição ser verdadeira.
    - true&& true// true
    - 5 > 10 && true// false, cinco não é maior que 10

- ``|| OU`` Com esse operador apenas um dos termos precisam ser verdadeiros para a condição ser verdadeira.
    - true|| false // true
    - 5 > 10 || true// true, o termo da direita é verdadeiro

- ``! Negação`` Com esse operador negamos um termo.
    - !false // true, a negação de um termo falso é ele ser verdadeiro
    - !true// false

<br>

### ✅ if
Com o uso do IF (se) verificamos uma condição e se ela for verdadeira o código dentro do IF será executado:
```
If (condição) {
    // ...
}
```

<br>

### ✅ else
Com o uso do Else (senão) podemos criar um fluxo alternativo para quando a condição do IF não for atendida:
```
If (condição) {
    // ...
} else{
    // ...
}
```

Logo, se a condição for false, o código executado será o dentro do bloco else.

<br>

### ✅ if else
Com o else if podemos criar outras condições para tratar nosso fluxo de execução, quando a condição inicial não é satisfeita. 

Para ilustrar, vamos ver uma instrução onde só se pode entrar se tiver mais ou 18 anos ou menor com acompanhante.
```
If (idade >= 18) {
    podeEntrar = true
} else if (estaAcompanhado) {
    podeEntrar = true
} else {
    podeEntrar = false
}
```

<br>

### ✅ Ternário
Com o operador ternário podemos executar o IF e o ELSE em apenas uma linha, isso é útil quando o valor de uma variável depende de alguma condição, por exemplo:
```
var eFeriado= true

var saudacao= eFeriado ? “Estamos fechados hoje” : “Seja bem-vindo”;
```

Com o ternário o IF é executado após o sinal ? E o else após o :

<br>

### ✅ Questionário
Qual dos operadores lógicos a seguir NÃO é válido?

A- ==

B- >! 

C- <=

D- >=

Resposta: letra B