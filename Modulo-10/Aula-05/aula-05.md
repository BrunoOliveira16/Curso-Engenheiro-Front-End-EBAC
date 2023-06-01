## 📝 Aula 05: Criando um carousel 
Nesta aula foram atribuidos valores no input de forma dinâmico, quando o usuário clicar em um dos botões dos produtos. foi feito tratamento de limpeza do form após submit e estilizado mensagem de erro no formulário.

- jQueryMaskPlugin Referência: https://igorescobar.github.io/jQuery-Mask-Plugin/
- jQueryValidation Referência: https://jqueryvalidation.org/

<br>

```
$('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })
```

<br>

### ✅ Questionário
Qual função utilizamos para atribuir um valor ao input?

A- document.getElementById('input').val('valor')

B- $('input').val('valor')

C- $('input').setValue('valor')

D- $('input').value = 'valor' 

Resposta: Letra B