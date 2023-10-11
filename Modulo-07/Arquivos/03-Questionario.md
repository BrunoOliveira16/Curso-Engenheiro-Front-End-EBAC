# 📌 Questionário
> Módulo 07: Integre HTML com JavaScript

<br>

### Pergunta 1
#### O que NÃO conseguimos fazer através do DOM?
A- Manipular elementos

B- Manipular atributos de elementos

C- Escrever conteúdo HTML

D- Trafegar informações para o back-end

<details>
    <summary>Resposta</summary>

    Trafegar informações para o back-end
    
    O que não conseguimos fazer através do DOM é "Trafegar informações para o back-end". O DOM é uma representação de um documento HTML na memória do navegador. Ele fornece uma maneira de acessar e modificar os elementos de um documento HTML, mas não fornece uma maneira de enviar informações para o back-end.

</details>

<br>

### Pergunta 2
#### Qual dos seletores a seguir podemos usar para selecionar um elemento através de seu ID?
A- document.getElementsById("idDoElemento")

B- document.querySelector("#IdDoElemento")

C- document.getElement("#IdDoElemento")

D- document.getElements("#IdDoElemento")

<details>
    <summary>Resposta</summary>
    
    document.querySelector("#IdDoElemento")
    
    A resposta é "document.querySelector("#IdDoElemento"). A opção A está incorreta, pois o método correto para selecionar um elemento por ID é getElementById (sem o "s" no final). A opção C também está incorreta, pois o método getElement não existe no DOM para selecionar elementos por ID. A opção D está incorreta, pois o método getElements não é a forma adequada de selecionar elementos por ID.

</details>

<br>


### Pergunta 3
#### Qual atributo usamos para desabilitar um botão?
A- botao.active = false

B- botao.disabled = false

C- botao.disabled = true

D- botao.enabled = false

<details>
    <summary>Resposta</summary>
    
    botao.disabled = true

    A resposta correta é "botao.disabled = true", pois é essa a forma correta de desabilitar um botão, tornando-o inativo e não responsivo aos eventos do usuário.
</details>

<br>

### Pergunta 4
#### Através de qual função adicionamos eventos a elementos?
A- button.addEvent('click', function() {})

B- button.onEvent('click', function() {})

C- button.event('click', function() {})

D- button.addEventListener('click', function() {})

<details>
    <summary>Resposta</summary>
    
    button.addEventListener('click', function() {})

    A resposta correta é "button.addEventListener('click', function() {})". Para adicionar eventos a elementos no JavaScript, utilizamos a função addEventListener. A sintaxe correta é elemento.addEventListener('evento', funçãoDeCallback), onde "elemento" é o elemento HTML ao qual você deseja adicionar o evento, "evento" é o nome do evento que você deseja capturar (por exemplo, 'click', 'mouseover', etc.), e "funçãoDeCallback" é a função que será executada quando o evento ocorrer.
</details>

<br>

### Pergunta 5
#### Como podemos adicionar uma classe à um elemento através do JavaScript?
A- elemento.addClass('nomeDaClasse')

B- elemento.class.add('nomeDaClasse')

C- elemento.classList.add('nomeDaClasse')

D- elemento.addStyle('nomeDaClasse')

<details>
    <summary>Resposta</summary>
    
    elemento.classList.add('nomeDaClasse')

    A resposta correta é "elemento.classList.add('nomeDaClasse')". Para adicionar uma classe a um elemento HTML usando JavaScript, você utiliza a propriedade classList do elemento, que possui um método chamado add() para adicionar classes. 
</details>

