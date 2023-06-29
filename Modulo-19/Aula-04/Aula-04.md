## 📝 Aula 04: Escrevendo BEM com SASS
### BEM
BEM (Block Element Modifier) é uma metodologia para escrita de código de estilos que ajuda a criar um código reutilizável e sustentável. Criado por volta de 2005, pela Yandex, empresa líder na Internet russa, surgiu de uma necessidade de padronizar o código em variados projetos. A ideia é dividir a página em blocos1.

SASS é um pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins ao CSS. Ele pode ser usado em conjunto com BEM para tornar o código ainda mais legível e fácil de manter.

Aqui está um exemplo de como você pode usar BEM com SASS:

```
.block {
  // estilos do bloco

  &__element {
    // estilos do elemento
  }

  &--modifier {
    // estilos do modificador
  }
}
```


<br>

## ✅ Questionário
Qual dos seletores a seguir aplica BEM corretamente?

A- .profile .avatar__inactive

B- .profile__avatar--is-inactive

C- .profile__avatar.inactive

D- .header .profile .avatar.inactive 

Resposta: O seletor que aplica corretamente a metodologia BEM é B- .profile__avatar–is-inactive. Ele segue a estrutura de bloco__elemento–modificador, onde “profile” é o bloco, “avatar” é o elemento e “is-inactive” é o modificador.