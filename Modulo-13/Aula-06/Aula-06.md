## 📝 Aula 06: Abas 
Através das abas podemos separar o conteúdo de um mesmo contexto.

No Bootstrap podemos construir abas na horizontal ou na vertical.

Você pode conferir a documentação oficial do componente: https://getbootstrap.com/docs/5.2/components/navs-tabs/

Exemplo desenvolvido:
```
<div class="container">
    <nav class="nav nav-tabs">
        <button class="nav-link active" type="button" data-bs-toggle="tab" data-bs-target="#aba01">Eletrônicos</button>
        <button class="nav-link" type="button" data-bs-toggle="tab" data-bs-target="#aba02">Moda masculina</button>
        <button class="nav-link" type="button" data-bs-toggle="tab" data-bs-target="#aba03">Moda feminina</button>
    </nav>
    <div class="tab-content">
        <div class="tab-pane active" id="aba01">
            Conteúdo da aba eletrônicos
        </div>
        <div class="tab-pane" id="aba02">
            Conteúdo da aba Moda masculina
        </div>
        <div class="tab-pane" id="aba03">
            Conteúdo da aba Moda feminina
        </div>
    </div>
</div>
```

<br>

### ✅ Questionário
Através de qual classe do Bootstrap criamos um menu com abas?

A- bs-nav-tabs

B- nav-tabs

C- tabs

D- menu-tabs 

Resposta: Letra B.