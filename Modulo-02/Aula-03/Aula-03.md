## 📝 Aula 03: Logs
### ✅ Git log
Para visualizar o histórico de commits, usamos o comando:
```
git log
```

<img src="./img/img-01.jpg">

<br>

O registro de um commits é composto por:

``Commit``: identificador único do commit

``Author``: autor do commit

``Date``: data em que o commitfoi feito 

Mensagem informado no git commit

<br>

### ✅ Git log - variações
Para visualizar os últimos dois commits:
```
git log –n 2* (ou outro número)
```

<img src="./img/img-02.jpg">

<br>

Para visualizar uma versão resumida do registro de commits:
```
git log --oneline
```

<img src="./img/img-03.jpg">

<br>

Podemos visualizar o registro de uma forma mais detalhada solicitando o conteúdo da alteração, através do comando:
```
git log --stat
```

<img src="./img/img-04.jpg">

<br>

É possível combinar as variações, solicitamos o conteúdo de dois  registros com apenas o identificador do commit:
```
git log --stat–n 2 --oneline
```

<img src="./img/img-05.jpg">