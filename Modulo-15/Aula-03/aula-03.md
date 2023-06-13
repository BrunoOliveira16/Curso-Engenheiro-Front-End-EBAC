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
Através de qual comando acessamos o NodeJS pelo terminal?

A- start nodejs

B- run node

C- node

D- nodejs 

Resposta: Letra C