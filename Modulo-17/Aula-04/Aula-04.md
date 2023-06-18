## 📝 Aula 04: Mixins
### Mixins
Com os mixins podemos escrever porções de estilos que podemos reutilizar em diversos seletores, para escrever um mixin seguimos a estrutura:
```
.nomeDoMixin( ) {
    // Estilização
}

.classe {
    .nomeDoMixin( ); // utilização
}
```
Um mixin pode receber argumentos, como uma função, e podemos atribuir um valor padrão para o argumento:
```
.cardDeProduto(@color, @padding: 16px) { // mixin
    color: @color;
    padding: @padding;
}

.produto {
    .cardDeProduto(#333, 8px); // uso
}
```

<br>

### Histórico Projeto
Nesta Aula adicionamos mais estilos ao main.less:
```
.marginBottom8 {
    margin-bottom: 8px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

header {
    padding: 24px;

    .profile-avatar {
        display: block;
        margin: 0 auto 24px;
        border-radius: 50%;
    }
}

.profile-bio {
    text-align: center;

    &-main {
        font-size: 16px;
        .marginBottom8();
    }

    &-subtitle {
        font-size: 14px;
        .marginBottom8();
    }

    &-description {
        font-size: 14px;
        opacity: .7;
    }
}
```

<br>

### ✅ Questionário
Sobre os mixins é correto afirmar:

A- São escritos utilizando a sintaxe @mixin nomeDoMixin()

B- São escritos utilizando a sintaxe #mixin nomeDoMixin()

C- São escritos utilizando a sintaxe .nomeDoMixin ou .nomeDoMixin()

D- São escritos utilizando a sintaxe @nomeDoMixin()  

Resposta: letra C