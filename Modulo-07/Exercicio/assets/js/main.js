const form = document.getElementById('form');
const inputNumberA = document.getElementById('number-a');
const inputNumberB = document.getElementById('number-b');
const message = document.getElementById('message');

// Formulario com menssagem de sucesso
function successfulForm () {
    message.classList.add('success');
    message.classList.remove('error');
    inputNumberB.classList.remove('input-error');
    message.innerHTML = `Formulario enviado com sucesso!`;
    inputNumberA.value = '';
    inputNumberB.value = '';
}

// Formulario com mensagem de erro
function formWithError () {
    message.classList.add('error');
    inputNumberB.classList.add('input-error');
    message.innerHTML = `Número B menor que A, formulário não enviado!`;
}

// Validando o envio do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const valueA = inputNumberA.value;
    const valueB = inputNumberB.value;

    if(valueB > valueA) {
        successfulForm();
    } else {
        formWithError();
    }
})

