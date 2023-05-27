## 📝 Aula 02: Seletores
### ✅ Seletores
Podemos selecionar um ou mais elementos através de alguns critérios:

``ID`` - retorna apenas um elemento:
```
document.getElementById('btn-depositar’)
```

``Classe`` – retorna todos os elementos que usam a classe:
```
document.getElementsByClassName('container’)
```

``Nome da tag`` – retorna todos os elementos da tag:
```
document.getElementsByTagName('input’)
```

``Seletores especiais``:
```
document.querySelector('input[type=number]’)
```
Ou para retornar todos os itens que atendam ao critério da busca ``document.querySelectorAll('input[type=number]')``

<br>

### ✅ Questionário
Qual dos seletores a seguir podemos usar para selecionar um elemento através de seu ID?

A- document.querySelector("#IdDoElemento")

B- document.getElementsById("idDoElemento")

C- document.getElement("#IdDoElemento")

D- document.getElements("#IdDoElemento") 

Resposta: Letra A