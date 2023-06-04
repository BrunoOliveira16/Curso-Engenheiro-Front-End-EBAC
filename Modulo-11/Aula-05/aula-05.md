## 📝 Aula 05: Criando um menu dropdown 
Nesta Aula será desenvolvido um projeto de portal de noticias, e todo o conteúdo será realizado na pasta do projeto ``portal-noticias``.

Código HTML desenvolvido:
```
<nav>
    <ul class="menu">
        <li>
            Esportes
            <ul class="sub-menu">
                <li><a href="#">Futebol</a></li>
                <li><a href="#">Basquete</a></li>
                <li><a href="#">Fórmula 1</a></li>
            </ul>
        </li>
        <li>
            Economia
            <ul class="sub-menu">
                <li><a href="#">Bolsa de Valores</a></li>
                <li><a href="#">Imposto de Renda</a></li>
                <li><a href="#">Finanças Pessoais</a></li>
            </ul>
        </li>
    </ul>
    <div class="clear"></div>
</nav>
```

Código CSS desenvolvido:
```
.menu > li {
    float: left;
    list-style: none;
    padding: 16px;
    border-top: 4px solid transparent;
    position: relative;
}

.menu li:hover {
    border-color: red;
}

.menu li:hover .sub-menu {
    display: block;
}

.sub-menu {
    width: 300px;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid red;
}

.sub-menu li {
    display: block;
    padding: 8px;
}

.clear {
    clear: both;
}
```

<br>

### ✅ Questionário
Através de qual propriedade e valor alinhamos um elemento na vertical, utilizando o flexbox?

A- vertical-align: center

B- ustify-content: center

C- alignment: vertical

D- align-items: center 

Resposta: Letra D