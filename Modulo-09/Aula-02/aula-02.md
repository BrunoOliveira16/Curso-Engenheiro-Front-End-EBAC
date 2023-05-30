## 📝 Aula 02: Eventos
### ✅ Eventos
Para adicionarmos um evento a um elementos escrevemos:
```
$(“seletor”).evento(function() {});
```

ou

```
$(“seletor”).on(“nome do evento”, function(){});
```

E dentro do bloco function(){ ... } escrevemos nosso código JavaScript, que será executada a cada vez que o evento for disparado. Exemplos:
```
$(“#nome_completo”).change(function() {});
                    .keyup
                    .click // para a tagbutton
                    .submit// para a tagform
                    .focus
                    .blur
                    .mouseover
                    .mouseout
```

<br>

### ✅ Questionário
Qual dos eventos a seguir NÃO é válido?

A- $("#botao-enviar").onmouseclick(function() {})

B- $("#botao-enviar").on("click", function() {})

C- $("#botao-enviar").click(function() {})

D- $("#botao-enviar").dblclick(function() {}) 

Resposta: Letra A