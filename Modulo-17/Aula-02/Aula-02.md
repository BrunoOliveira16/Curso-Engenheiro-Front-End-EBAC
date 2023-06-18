## 📝 Aula 02: Variáveis 
### Variáveis
Para declarar uma variável no LESS utilizamos o @, por exemplo:
```
@fontePrincipal: Roboto, sans-serif;

body {
    font-family: @fontePrincipal;
}
```

As variáveis no LESS podem ser alteradas à nível de escopo:
```
@fontePrincipal: Roboto, sans-serif;

body {
    @fontePrincipal: Helvetica;
    font-family: @fontePrincipal; // será Helvetica
}

h1 {
    font-family: @fontePrincipal; // será Roboto
}
```

<br>

### Histórico Projeto
Nesta Aula criamos um arquivo variaveis.less e adicionamos estilos ao main.less:
```
//variaveis.less
@background-color: #341f97;
@buttons-color: #54a0ff;
@text-color: #c8d6e5;

//main.less
@import "variaveis.less";

body {
    background-color: @background-color;
    color: @text-color;
}
```

Criamos a estrutura abaixo no index.html:
```
<header>
    <img src="https://via.placeholder.com/200x200" alt="imagem de perfil">
    <h1>Página do Bruno</h1>
    <h2>Desenvolvedor Front-end</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis eos possimus reiciendis aliquam. Omnis, vel! Deleniti nostrum fugiat excepturi ea magnam, incidunt accusamus in porro, quidem cumque ab impedit?</p>
    <nav>
        <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">E-mail</a></li>
        </ul>
    </nav>
</header>
```

### ✅ Questionário
Como declaramos uma variável no LESS?

A- @corPrincipal: #eee;

B- $corPrincipal: #eee;

C- #corPrincipal: #eee;

D- var corPrincipal: #eee; 

Resposta: letra A