## 📝 Aula 03: Variáveis
### Variáveis
No SASS podemos utilizar variáveis o que nos ajuda na manutenibilidade do código, por exemplo: a cor principal do site é vermelha, se no futuro a identidade visual da empresa mudar basta alterarmos a variáveis para adequar ao novo esquema de cores utilizado na identidade.

Para declarar uma variáveis seguimos a estrutura:
```
$nomeDaVariavel: valor; 
OU 
$nome-da-variavel: valor;
```

Exemplo:
```
$fonte-principal: Roboto, sans-serif;
$cor-primaria: red;
$cor-secundaria: yellow;

body {
    font-family: $fonte-principal;
    background-color: $cor-primaria;
    color: $cor-secundaria;
}
```

<br>

### ✅ Questionário
Como declaramos uma variável no SASS?

A- $NOME_DA_VARIAVEL: VALOR;

B- var NOME_DA_VARIAVEL = VALOR;

C- var NOME_DA_VARIAVEL: VALOR;

D- $NOME_DA_VARIAVEL = VALOR;  

Resposta: Letra A