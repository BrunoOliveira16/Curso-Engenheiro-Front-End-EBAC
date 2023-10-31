# 📌 Glossário
> Módulo 19: Boas práticas de CSS

<br>

## Determine regrasde CSS
### ✔ Inline
CSS inline é uma forma de aplicar estilos CSS diretamente no elemento HTML, através do uso do atributo style. Ao utilizar o CSS inline, as propriedades de estilo são definidas diretamente no elemento HTML, dentro do atributo style, sem a necessidade de criar uma folha de estilos separada.

### ✔ Pseudoclasses 
São seletores CSS que permitem estilizar elementos HTML com base em estados específicos ou características do elemento. São usadas para aplicar estilos aelementos que estão em um estado específico ou que possuem características particulares, sem a necessidade de adicionar classes ou IDs adicionais ao HTML. As pseudoclasses são denotadas pelo uso de dois pontos (::) ou um único colchete (:) após o seletor.

### ✔ Pseudo elementos
São partes específicas de um elemento HTML que podem ser estilizadas separadamente usando seletores CSS especiais. Eles permitem adicionar conteúdo ou estilizar partes específicas de um elemento sem a necessidade de modificar a estrutura HTML. São representados por dois colons (::) após o seletor.

<br>

## Apliquea metodologia SMACSS
### ✔ Base
É onde são definidos os estilos globais e elementos básicos do projeto. Isso inclui definições de fontes, cores, estilos de links, estilos de cabeçalhos etc.

### ✔ Estados
Referem-se às diferentes condições em que um elemento pode estar, como hover, foco, ativo etc. Esses estados geralmente são representados por classes CSS adicionais que modificam aaparência do elemento quando ativadas.

### ✔ Layout
Define aestrutura e o posicionamento dos elementos da página. Ele trata de dividir a página em regiões ou seções e define as classes CSS correspondentes a cada uma delas.

### ✔ Módulos
São componentes independentes e reutilizáveis que podem ser combinados para construir páginas completas. Cada módulo possui seu próprio CSS e pode ser estilizado de forma isolada.

### ✔ ParentNode
É uma propriedade em JavaScript que retorna o nó pai de um elemento HTML. Em outras palavras, ela fornece uma referência ao elemento pai de um determinado nó.

### ✔ Temas
Permite personalizar aaparência do sitecom base em diferentes variações de design. Essa seção define as classes CSS relacionadas à aparência temática e permite que oestilo seja facilmente alterado.

<br>

## Apliquea metodologiaBEM
### ✔ Bloco (Block)
Representa um componente independente e autossuficiente. Ele é uma entidade significativa e isolada que pode ser reutilizada em diferentes contextos. Os nomes dos blocos são descritivos e não devem depender da estrutura HTML ou do posicionamento visual. Um bloco é representado por uma classe CSS que começa com o prefixo do bloco, geralmente o nome do componente em si.

### ✔ Elemento (Element)
São partes individuais e dependentes de um bloco. Eles fazem parte do bloco e não têm significado quando usados isoladamente. Os nomes dos elementos são anexados ao nome do bloco, separados por um underscore (_).

### ✔ Modificador (Modifier)
Representa uma variação ou estado específico de um bloco ou elemento. Os modificadores permitem alterar aaparência ou comportamento de um bloco ou elemento sem a necessidade de duplicar o código. Os nomes dos modificadores são anexados ao nome do bloco ou elemento, separados por um traço (-).

### ✔ __view-more
Essa classe é uma convenção de nomenclatura que pode ser usada para representar um elemento específico dentro de um bloco com a finalidade de mostrar mais conteúdo. É comumente usado em interfaces de usuário para indicar a presença de um botão, linkou elemento interativo que permite expandir ou exibir mais informações.