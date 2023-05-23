## 📝 Aula 02: Seletores
### ✅ Tags, classes e ID 
No CSS podemos estilizar os elementos através do nome da tag, do nome da 
classe ou pelo seu ID.

Para adicionarmos uma classe no elemento HTML usamos o atributo class.
```
<h1 class=“title”>Olá CSS</h1>
```

<br>

### ✅ Selecionando elementos
Para selecionar os elementos que queremos estilizar, podemos usar os seletores, são eles:

``Nome da tag, exemplo``: h1 {...}

``ID da tag, representado por #``: #meuId

``Classe da tag, usamos o ponto``: .minhaClasse{}

Podemos selecionar mais de um elemento por vez:
```
.title, .subtitle{...}
```

Podemos navegar entre os elementos:
```
.header .title{...}
```

> Nesse exemplo estamos estilizando o elemento .title que está dentro do elemento .header

<br>

### ✅ Pseudo-classes
Podemos estilizar além dos elementos, seu estado. Fazemos isso com as pseudo-classes, por exemplo: quando passamos o mouse sobre um link e ele muda de cor, essa mudança é feita através da estilização de pseudo-classes.
```
seletor:estado{ ... }
```

Exemplo, quando passar o mouse sobre as tags H1 o texto ficará vermelho:
```
h1:hover { color: red; }
```

<br>

### ✅ Lista das principais pseudo-classes
``:first-child`` – para selecionar a primeira ocorrência do elemento

``:last-child`` – para selecionar a última ocorrência do elemento

``:hover`` – para estilizar o elemento quando passarmos o mouse por cima

``:focus`` – para estilizar um elemento quando o foco estiver nele

``:checked`` – para estilizar inputs do tipo checkbox e radio, quando estes estiverem marcados

``:required`` – para estilizar inputs que sejam obrigatórios

``:optional`` – para estilizar inputs que sejam opcionais

<br>

### ✅ Alguns exemplos de uso de pseudo-classes
Selecionando o primeiro item de uma lista:
```
ulli:first-child{...}
```

Selecionado um campo quando ele está com o foco:
```
input:focus{...}
```

Selecionando um link quando passamos o mouse:
```
a:hover {...}
```

<br>

### ✅ Questionário
1- Qual dos seletores a seguir é INVÁLIDO?

a- #sports

b- .sports

c- section#sports

d- sidebar

Resposta: Letra d