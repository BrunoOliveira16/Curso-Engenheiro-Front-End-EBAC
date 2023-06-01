## 📝 Aula 04: Validação de formulário 
Nesta aula foram adicionados mascara no campo telefone do formulario e validação dos campos do formulário, com a utilização dos plugins jQueryMaskPlugin e jQueryValidation.

- jQueryMaskPlugin Referência: https://igorescobar.github.io/jQuery-Mask-Plugin/
- jQueryValidation Referência: https://jqueryvalidation.org/

<br>

### ✅ Como usar o jQuery Mask Plugin
Primeiramente importe o plugin do jQuery Mask Plugin.

Exemplo de aplicação de máscara através do plugin:
```
$('#telefone').mask('(00) 00000-0000');
$('#cep').mask('00000-000');
$('#cpf').mask('000.000.000-00');
$('#cnpj').mask('00.000.000/0000-00');
$('#placa-carro').mask('SSS-0000’);
```
Representamos os caracteres numéricos com o uso do zero e as letras utilizando a letra S.

<br>

### ✅ Como usar o jQuery Validation
Primeiramente importe o plugin do jQuery Validation.

Exemplo de aplicação de validação através do plugin:
```
$('form').validate({ // seletor do formulário
    rules: {
    nome: { // nome do campo, <input type=“text” name=“nome” />
        required: true, // se o campo é obrigatório ou não
    },
    email: {
        email: true,
        required: true,
        },
    },
    messages: { // Opcional, customize as mensagens de erro
    nome: 'Por favor, insira o seu nome’,
    }
});
```
Representamos os caracteres numéricos com o uso do zero e as letras utilizando a letra S.

<br>

### ✅ Questionário
Qual propriedade e valor do CSS utilizamos para fazer com que o cabeçalho acompanhasse a rolagem da página?

A- display: stick

B- position: sticky

C- position: fixed

D- display: fixed 

Resposta: Letra B