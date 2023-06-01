## 📝 Aula 02: Criando a seção sobre e a listagem de itens
Nesta aula foram construidas as seções de destque e promoção dos itens, assim como a sua estilização no CSS.

Foi implementado o evento de clique no menu hamburguer para que exiba o menu de navegação.
```
$(document).ready(function() {
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });
});
```

<br>

### ✅ Questionário
Qual propriedade e valor do CSS utilizamos para remover a rolagem horizontal na página?

A- scroll: disabled;

B- scroll-horizontal: none;

C- overflow-x:hidden;

D- overflow-y: none; 

Resposta: letra c