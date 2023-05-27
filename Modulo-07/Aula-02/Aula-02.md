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
