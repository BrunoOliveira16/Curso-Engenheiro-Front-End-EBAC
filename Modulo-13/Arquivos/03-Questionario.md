# 📌 Questionário
> Módulo 13: Bootstrap avançado

<br>

### Pergunta 1
#### Qual afirmação a seguir não é verdadeira?
A- Podemos utilizar os cards para a listagem de produtos, artigos, cadastros, qualquer tipo de conteúdo

B- Podemos aplicar variações aos cards com uso do Bootstrap

C- Para utilizar os cards é necessário importar o JavaScript do Bootstrap

D- Os cards podem conter elementos multimídia como imagens e vídeos

<details>
    <summary>Resposta</summary>

    Para utilizar os cards é necessário importar o JavaScript do Bootstrap
    
    Alternativa Para utilizar os cards é necessário importar o JavaScript do Bootstrap: Essa alternativa é falsa. Os cards do Bootstrap são criados principalmente usando classes CSS, e o JavaScript não é necessário para torná-los funcionais. Embora o Bootstrap possa oferecer alguns efeitos de interação baseados em JavaScript para cards, eles não são obrigatórios para o funcionamento básico dos cards.
</details>

<br>

### Pergunta 2
#### Através de qual atributo informamos ao botão de avançar que ele deve trocar para o próximo slide?
A- data-bs-to-slide

B- data-bs-slide

C- data-bs-slide-to

D- data-bs-carousel-to

<details>
    <summary>Resposta</summary>
    
    data-bs-slide
    
    A resposta correta é "data-bs-slide". Através de data-bs-slide podemos informar ao Bootstrap se ele deve avançar (data-bs-slide="next") ou retroceder (data-bs-slide="prev" ) Já com data-bs-slide-to informamos qual slide queremos exibir, não seguindo uma ordem.
</details>

<br>


### Pergunta 3
#### Através de qual atributo e valor informamos que o botão deve ter o comportamento de abrir um menu?
A- data-bs-dropdown="true"

B- data-bs-target="dropdown"

C- data-bs-toggle="dropdown"

D- data-bs-dropdown="toggle"

<details>
    <summary>Resposta</summary>
    
    data-bs-toggle="dropdown"

    Alternativa data-bs-toggle="dropdown": Essa alternativa está correta. O atributo "data-bs-toggle" é usado com o valor "dropdown" para indicar que o botão deve ter o comportamento de abrir um menu suspenso (dropdown menu) no Bootstrap.
</details>

<br>

### Pergunta 4
#### Através de qual atributo e valor adicionamos o comportamento de não fechar a modal ao clicar fora dela?
A- data-bs-dismiss="static"

B- data-bs-backdrop="close"

C- data-bs-backdrop="static"

D- data-bs-close="true"

<details>
    <summary>Resposta</summary>
    
    data-bs-backdrop="static"

    Alternativa data-bs-backdrop="static": Essa alternativa está correta. Ao usar o atributo "data-bs-backdrop" com o valor "static", estamos indicando que a modal não será fechada ao clicar fora dela. O backdrop (fundo escuro) ainda será exibido, mas a modal permanecerá aberta mesmo se o usuário clicar fora dela.
</details>

<br>

### Pergunta 5
#### Qual classe do Bootstrap utilizamos para adicionar o ícone de menu hamburguer?
A- hambuguer-icon

B- navbar-button-icon

C- navbar-hamburguer-icon

D- navbar-toggler-icon

<details>
    <summary>Resposta</summary>
    
    navbar-toggler-icon

    Alternativa navbar-toggler-icon: Essa alternativa está correta. A classe "navbar-toggler-icon" é utilizada no Bootstrap para adicionar o ícone de menu hamburguer nos elementos que controlam a abertura e o fechamento da barra de navegação responsiva (navbar) em dispositivos móveis ou telas menores. Essa classe é geralmente usada com o componente "navbar-toggler".
</details>

<br>

### Pergunta 6
#### Através de qual classe do Bootstrap criamos um menu com abas?
A- menu-tabs

B- nav-tabs

C- bs-nav-tabs

D- tabs

<details>
    <summary>Resposta</summary>
    
    nav-tabs

    Alternativa nav-tabs: Essa alternativa está correta. A classe "nav-tabs" é utilizada no Bootstrap para criar um menu com abas (tabs). Essa classe é aplicada ao elemento <ul> que contém as abas, e ela define o estilo e comportamento do menu de abas.
</details>

<br>

### Pergunta 7
#### Através de qual função do Bootstrap abrimos um Toast?
A- toast.open()

B- toast.show()

C- toast.visible()

D- toast.create()

<details>
    <summary>Resposta</summary>
    
    toast.show()

    Alternativa toast.show(): Essa alternativa está correta. Para abrir um Toast no Bootstrap, utilizamos a função "show()" no elemento do Toast para torná-lo visível na tela.
</details>

