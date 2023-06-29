const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');


btn.addEventListener('click', function() {
    resultado.classList.toggle('resultado-ativo');
    if (resultado.classList.contains('resultado-ativo')) {
        resultado.innerText = 'Obrigado por testar';
    } else {
        resultado.innerText = '';
    }
});

