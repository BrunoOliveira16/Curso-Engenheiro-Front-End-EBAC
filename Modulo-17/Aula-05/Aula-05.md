## 📝 Aula 05: Maps
### Maps
Com os maps podemos criar uma estrutura parecida com um objeto, onde temos um conjunto chave-valor, isso é útil para organizar dados como breakpoints e um esquema de cores para o site.

Para criar um map seguimos a estrutura:
```
@nomeDoMap: { // ou #nomeDoMap()
    chave: valor;
}

// exemplo
@breakpoints: { // ou #breakpoints()
    mobile: 320px;
    tablet: 768px;
    desktop: 1024px;
}
```

E para fazer uso de um map:

```
@seletor {
    background-color: @nomeDoMap[corPrincipal];
}

// exemplo
@media (min-width: @breakpoints[desktop]) { 
    // 1024px
    // ...
}
```

Ou

```
@media (min-width: #breakpoints[desktop]) {
    // ...
}
```

<br>

### Histórico Projeto
Nesta Aula criamos um mapeamento de cores utilizando o maps do less, no arquivo maps.less:
```
#colors() {
    background-color: #341f97;
    buttons-color: #54a0ff;
    text-color: #c8d6e5;
}
```

Imortamos o arquivo em main.less e utilizamos a sintaxe abaixo:
```
@import "maps.less";

body {
    background-color: #colors[background-color];
    color: #colors[text-color];
}
```

<br>

### ✅ Questionário
Sobre os maps é correto afirmar:

A- É um tipo de dado chave-valor

B- É um tipo de dado númerico

C- É um tipo de dado coleção

D- É um tipo de dado objeto 

Resposta: letra A