## 📝 Aula 03: Animações e Efeitos
### ✅ Animações e efeitos
Podemos aplicar algumas animações simples com o jQuery, através das funções:
```
$(“seletor”).fadeIn( )
            .fadeOut( )
            .slideUp( )
            .slideDown( )
            .slideToggle( )
            .show( )
            .hide( )
            .toggle( )
```

Todas as funções acima aceitam como parâmetro uma duração em milissegundos para executar o efeito.

Exemplo no código, aplicando a função slide:
```
$(document).ready(function(){

    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
})
```
