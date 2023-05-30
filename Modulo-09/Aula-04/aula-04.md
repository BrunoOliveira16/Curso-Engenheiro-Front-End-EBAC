## 📝 Aula 04: Manipulação do DOM com jQuery
### ✅ Manipulação do DOM com jQuery
O jQuery facilita a manipulação do DOM, nos ajudando a inserir elementos.

Podemos obter o valor de qualquer atributo e configura-lo através da função:
```
$(“seletor”).attr(“atributo”, “valor”)
$(“input”).attr(“value”, “novo valor”)
```

Podemos adicionar um elemento ao final de um contêiner através da função append e appendTo:
```
$(“ul”).append(“<li>Novo item</li>”)
$(“<li>Novo item</li>”).appendTo(“.minha-lista”)
```

Com o append/appendTo adicionamos o novo elemento ao final da lista, caso desejarmos adicionar no começo usaríamos as funções:
```
$(“ulli:first-child”).before(“<li>Novoitem</li>”)
$(“<li>Novoitem</li>”).insertBefore(“ulli:first-child”)
```

<br>

### ✅ Questionário
Qual comando utilizamos para inserir um conteúdo HTML dentro de outra tag?

A- $('.elemento').insertInto('.container')

B- $('.elemento').append('.container')

C- $('.container').insert('.elemento')

D- $('.elemento').appendTo('.container') 

Resposta: letra D

<br>

Qual é a unidade de medida aceita como parâmetro para as funções de animação?

A- minutos

B- milissegundos

C- horas

D- segundos 

Resposta: Letra B