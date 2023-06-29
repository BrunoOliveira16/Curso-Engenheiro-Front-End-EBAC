## 📝 Aula 02: Introdução ao SMACSS
SMACSS (Scalable and Modular Architecture for CSS) é uma metodologia que se concentra em dividir o código em cinco categorias: base, layout, módulos, estado e tema. A base inclui as propriedades que se aplicam a todo o site, como fontes, cores e espaçamento.

Um dos primeiros conhecimentos que se adquire em SMACSS é a respeito da estrutura e organização de seus arquivos. Basicamente, a organização dos arquivos divide-se nas cinco categorias mencionadas acima.

Aqui está um exemplo de como você pode organizar seus arquivos CSS usando SMACSS:
```
/css
    /base
        reset.css
        typography.css
    /layout
        header.css
        footer.css
    /modules
        button.css
        form.css
    /state
        active.css
        hidden.css
    /theme
        light.css
        dark.css
```

**Base**
- Regras padrões

**Layout**
- Regras que definem a forma visual de um elemento, sem impactar em sua semântica ou estrutura.

**Módulo**
- Regras que são as principais de um projeto, as que dão o “volume” de CSS.

**Estado**
- Regras que descrevem como determinado layout ou módulo comporta-se em determinada condição ou estado, por exemplo: ativo ou inativo, oculto ou visível.

**Tema**
- Regras similares ao Estado, porém, descrevem como os layouts ou módulos devem ser visualmente em determinadas situações.

<br>

### Organização
Neste momento, com a divisão das cinco categorias informadas e descritas, devemos separar nosso código CSS em vários arquivos, separando-os em suas respectivas categorias. Com essa organização conseguimos diminuir a repetição de códigos e regras CSS já utilizadas, sendo assim, consequentemente nosso código irá ficar mais fácil para ser mantido(manutenção) e atualizado(criação).

<br>

### Nomeclaturas
Ao utilizar SMACSS devemos respeitar a nomeclatura e certas regras, baseado nas cinco categorias já mencionadas, facilitando a identificação de qual categoria pertence determinada regra(seletor) CSS.

Convencionamente foi definido a ideia de utilizar prefixos para realizar a separação entre: Layout, Módulo e Estado, sendo eles:

- Usar l- ou layout- para Layouts
- Usar is- para Estados
- Não usar m- ou module- para Módulos, pois como são as maiores folhas de estilo e sendo assim os mais utilizados, torna-se descenessário a repetiação de escrita dos prefixos.

<br>

### Exemplos
#### Base
São regras aplicadas utilizando os seguintes seletores: elemento, descendente, filho ou pseudoclasses. Logo podemos ver que não esta incluso utilizar os seletores de id ou classe.

Servem para definir como será a aparência padrão de determinados elementos que aparecem na página, em outras palavras, podemos dizer que aqui se encaixa o Reset CSS:
```
body {
  margin: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

*{
    box-sizing: border-box
    font-weight: 300
}

*:focus{
    outline: none
}
```

#### Layout
Como já mencionado, os layouts são escritos baseando-se em seu prefixo, sendo ele o l- seguido pelo layout que deseja-se aplicar ao elemento:
```
.l-inline {
	/* Definir um elemento inline */
}

.l-right {
	/* Definir um elemento à direita */
}

.l-fixed {
	/* Definir um elemento com posição fixa */
}
```

#### Modulo
Os módulos são escritos apenas pelo nome do elemento que esta sendo aplicado a regra css:
```
.campo {
	/* Para campos em formulário */
}

.exemplo {
	/* Para definir algum exemplo de código escrito */
}

.painel {
	/* Para definir algum painel na aplicação */
}

.login {
	/* Para definir alguma regra da autenticação */
}
```

#### Estados
Como já mencionado, os estados são escritos baseando-se em seu prefixo, sendo ele o is- seguido pelo estado que deseja-se aplicar ao elemento:
```
.is-escondido {
	/* Esconder um determinado elemento na página */
}

.is-ativo {
	/* Definir um elemento como ativo */
}

.is-visivel {
	/* Mostrar um elemento na página */
}
```

#### Temas
O significado de tema em SMACSS é o mesmo que em qualquer outro site: Um conjunto de cores, imagens e elementos que compoem uma determinada página.

A ideia dos temas é que um arquivo realize a sobreescrita das regras de outro tema, vamos imaginar que em uma determinada pasta temos:
```
> Temas
    # azul.css
    # preto.css
    # verde.css
```

Veja que temos um ``.css`` para cada tema, dentro deles os seletores devem ser os mesmos:
```
/* azul.css */
.modulo {
	border-color: blue;
}

/* preto.css */
.modulo {
	border-color: black;
}

/* verde.css */
.modulo {
	border-color: green;
}
```

Assim podemos importar determinado arquivo para utilizar determinado tema, onde não será necessário realizar mudanças na estrutura do HTML ou CSS.

<br>

### Conclusão
SMACSS é um padrão flexível, elaborado com base em anos de observação e experiência em projetos de alto nível. É importante realizar experiências e práticas em seus projetos para verificar os resultados, certamente terá um ganho na organização e produtividade.

<br>

### Link

- https://smacss.com/

<br>

## ✅ Questionário
Como o SMACSS divide o CSS?

A- Entre estilos base, módulos e temas

B- Entre estilos reset, base e módulos

C- Entre estilos módulos e temas

D- Entre estilos base, layout, módulos, estados e temas 

Resposta: A resposta correta é D- Entre estilos base, layout, módulos, estados e temas. SMACSS divide o código em cinco categorias: base, layout, módulos, estados e temas.