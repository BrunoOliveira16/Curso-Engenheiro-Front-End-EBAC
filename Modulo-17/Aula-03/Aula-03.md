## 📝 Aula 03: Escapings
### Escaping
O LESS possui um recurso chamado escaping, com este recurso podemos armazenar uma string que poderá ser utilizada para construir uma regra de estilo.
```
@desktopBreakpoint: ~”(min-width: 1023px)”; // escaping

@media @desktopBreakpoint{ // @media (min-width: 1023px)
    body {
        font-size: 1.2em;
    }
}
```

<br>

### Histórico Projeto
Nesta Aula adicionamos mais estilos ao main.less:
```
@breakpointTablet: ~"(min-width: 768px) and (max-width: 1023px)";
@breakpointMobile: ~"(max-width: 767px)";

.container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;

    @media @breakpointTablet {
        max-width: 80%;
    }

    @media @breakpointMobile {
        max-width: 70%;
    }
}
```

<br>

### ✅ Questionário
CSobre os escapings é correto afirmar:

A- São recursos introduzidos no CSS3

B- São utilziados para armazenar strings em variáveis e utiliza-las no arquivo LESS

C- São utilizados para otimizar o tamanho do arquivo CSS final

D- São utilizados para reaproveitar propriedades de estilo  

Resposta: letra B