## 📝 Aula 04: Eventos
### ✅ Eventos
Evento é o nome dado a uma ação de determinado elemento, por exemplo:

``Click``: ao clicar em um botão;

``Submit``: ao enviar um formulário;

``Change``: ao mudar o conteúdo de um input.

Para adicionar um evento a um elemento usamos a função addEventListener, que irá estar observando o evento e quando ele for disparado executará nosso código.
```
document.querySelector('form').addEventListener(function() {
    alert("O formulário foi enviado");
});
```

<br>

### ✅ Questionário
Através de qual função adicionamos eventos a elementos?

A- button.onEvent('click', function() {})

B- button.addEvent('click', function() {})

C- button.addEventListener('click', function() {})

D- button.event('click', function() {}) 

Resposta: letra C