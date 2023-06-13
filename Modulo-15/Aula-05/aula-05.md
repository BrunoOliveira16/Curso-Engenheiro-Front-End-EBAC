## 📝 Aula 05: Mixins
Com os mixins podemos escrever regras CSS e reaproveita-las em todo código SASS. 

A sintaxe de um mixin é parecida com a de uma função podendo receber argumentos.

Para escrever um mixin seguimos a estrutura: 
```
@mixin nomeDoMixin($argumento) {
    // código SASS
}
```

E para utilizar um mixin:
```
seletor {
    @include nomeDoMixin; // quando não há argumento
    @include nomeDoMixin(valor);
}
```

Exemplo:
```
@mixin texto-importante($cor: red) {
    color: $cor;
    font-size: 24px;
    font-weigth: bold;
}

h3 {
    @include text-importante(#000);
}
```

<br>

### ✅ Questionário
Qual é a função dos mixins?

A- Facilitar a importação de estilos externos

B- Agrupar as variáveis do SASS num mesmo contexto

C- Criar um código CSS já otimizado para responsividade

D- Criar regras CSS que podem ser reaproveitadas 

Resposta: Letra D