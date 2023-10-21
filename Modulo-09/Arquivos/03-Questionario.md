# 📌 Questionário
> Módulo 09: Conheça o jQuery

<br>

### Pergunta 1
#### Qual dos seletores a seguir NÃO é válido?
A- document.querySelector("#botao-enviar")

B- jquery.getElement("#botao-enviar")

C- $("#botao-enviar")

D- $("header button")

<details>
    <summary>Resposta</summary>

    jquery.getElement("#botao-enviar")
    
    O seletor que não é válido é o "jquery.getElement("#botao-enviar")". A função jquery.getElement não é um método ou uma função válida para selecionar elementos usando o jQuery. A forma correta de selecionar elementos com jQuery é utilizando o seletor $
</details>

<br>

### Pergunta 2
#### Qual dos eventos a seguir NÃO é válido?
A- $("#botao-enviar").click(function() {})

B- $("#botao-enviar").on("click", function() {})

C- $("#botao-enviar").onmouseclick(function() {})

D- $("#botao-enviar").dblclick(function() {})

<details>
    <summary>Resposta</summary>
    
    $("#botao-enviar").onmouseclick(function() {})
    
    O evento que não é válido é o $("#botao-enviar").onmouseclick(function() {})", pois a função onmouseclick() não faz parte dos métodos de evento do jQuery.

</details>

<br>


### Pergunta 3
#### Qual comando utilizamos para inserir um conteúdo HTML dentro de outra tag?
A- $('.elemento').insertInto('.container')

B- $('.elemento').appendTo('.container')

C- $('.elemento').append('.container')

D- $('.container').insert('.elemento')

<details>
    <summary>Resposta</summary>
    
    $('.elemento').appendTo('.container')

    A resposta correta é "$('.elemento').appendTo('.container')". Essa é a forma correta de inserir o elemento com classe "elemento" dentro do elemento com classe "container" usando o jQuery. O método appendTo é usado para mover o elemento selecionado como filho do elemento de destino, inserindo-o dentro dele.
</details>

<br>

### Pergunta 4
#### Qual é a unidade de medida aceita como parâmetro para as funções de animação?
A- milissegundos

B- minutos

C- segundos

D- horas

<details>
    <summary>Resposta</summary>
    
    milissegundos

    A unidade de medida aceita como parâmetro para as funções de animação geralmente é em milissegundos (ms). Ao definir a duração de uma animação, é comum especificar o tempo em milissegundos para controlar a velocidade e o tempo de execução da animação. Por exemplo, um valor de 1000ms representa 1 segundo de duração da animação.
</details>

<br>

### Pergunta 5
#### Como podemos recuperar e atribuir um valor para um elemento ``<input>`` através do jQuery?
A- $('input').getValue()

B- $('input').value

C- document.getElementById('input').val()

D- $('input').val()

<details>
    <summary>Resposta</summary>
    
    $('input').val()

    A resposta correta é "$('input').val()". Essa é a forma correta de recuperar e atribuir um valor para um elemento <input> usando o jQuery. O método val() é usado para obter ou definir o valor de um elemento de formulário.
</details>

