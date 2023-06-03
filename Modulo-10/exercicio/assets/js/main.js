$(document).ready(function(){

    //Máscara dos inputs
    $('#phone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx',
    });
    $('#cpf').mask('000.000.000-00', {
        reverse: true,
        placeholder: '000.000.000-00',
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000',
    });

    //Validação dos campos
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            adress: {
                required: false
            }
        },
        messages: {
            name: 'Por favor, digite o seu nome',
            phone: 'Por favor, digite seu telefone',
            email: 'Por favor, digite seu email',
            cpf: 'Por favor digite o seu CPF',
            cep: 'Por favor digite o seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#cpf').val('');
            $('#cep').val('');
            $('#adress').val('');
        },
    });
});