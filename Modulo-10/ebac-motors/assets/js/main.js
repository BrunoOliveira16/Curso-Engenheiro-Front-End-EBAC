$(document).ready(function() {
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx',
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email'
        },
        submitHandler: function(form) {
            console.log(form)
            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#veiculo-interesse').val('');
            $('#mensagem').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            } 
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })
});