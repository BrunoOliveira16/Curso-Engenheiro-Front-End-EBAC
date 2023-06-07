## 📝 Aula 05: Navbar 
Através do componente Navbar podemos estar criando um cabeçalho completo para o site, incluindo um menu responsivo com menu hamburguer, tudo isso com recursos do Bootstrap.

Você pode conferir a documentação oficial do componente: https://getbootstrap.com/docs/5.2/components/navbar/

Exemplo desenvolvido:
```
<header id="header">
    <div class="navbar navbar-expand-lg">
        <div class="container">
            <h1>Título da Página</h1>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav class="collapse navbar-collapse justify-content-end" id="menu">
                <ul class="nav navbar-nav nav-pills">
                    <li class="nav-item"><a class="nav-link active" href="#inicio">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#produtos">Produtos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#promocoes">Promoções</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
<div data-bs-spy="scroll" data-bs-target="#header">
    <section id="inicio">
        <h2>Inicio</h2>
    </section>
    <section id="produtos">
        <h2>Produtos</h2>
    </section>
    <section id="promocoes">
        <h2>Promoções</h2>
    </section>
    <section id="contato">
        <h2>Contato</h2>
    </section>
</div>
```

<br>

### ✅ Questionário
Qual classe do Bootstrap utilizamos para adicionar o ícone de menu hamburguer?

A- navbar-toggler-icon

B- hambuguer-icon

C- navbar-hamburguer-icon

D- navbar-button-icon  

Resposta: Letra A.