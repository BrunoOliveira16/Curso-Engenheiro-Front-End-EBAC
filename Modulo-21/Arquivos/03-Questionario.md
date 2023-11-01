# 📌 Questionário
> Módulo 21: Projeto 4

<br>

### Pergunta 1
#### Qual função do Gulp utilizamos para fazer com que o Gulp acompanhe as mudanças nos arquivos?
A- gulp.parallel

B- gulp.watch

C- gulp.update

D- gulp.sync

<details>
    <summary>Resposta</summary>

    gulp.watch

    O opção correta é "gulp.watch" porque é a função específica do Gulp que nos permite acompanhar as mudanças nos arquivos e automatizar tarefas com base nessas mudanças. As demais opções não estão relacionadas a essa funcionalidade específica.
</details>

<br>

### Pergunta 2
#### Através de qual comando do SASS incluímos o conteúdo de um mixin numa classe?
A- @import

B- @use

C- @include

D- include

<details>
    <summary>Resposta</summary>
    
    @include

    Q resposta correta é a opção " @include" porque é a diretiva SASS utilizada para incluir o conteúdo de um mixin numa classe. As demais opções estão incorretas porque não cumprem essa função específica.
</details>

<br>


### Pergunta 3
#### Qual regra CSS utilizamos para incluir uma fonte externa?
A- @font

B- @font-family

C- font-face

D- @font-face

<details>
    <summary>Resposta</summary>
    
    @font-face

    A resposta correta é "@font-face. Através de @font-face conseguimos incluir fontes externas ao nosso código CSS. Alguns comandos do CSS exigem o uso do @ antes, como em @font-face e @import.
</details>

<br>

### Pergunta 4
#### Através de qual pseudo-seletor do CSS podemos selecionar um elemento com base em sua posição no DOM?
A- .elemento:child(2) {}

B- .elemento:nth-child(2) {}

C- .elemento:nth(2) {}

D- .elemento:select(2) {}

<details>
    <summary>Resposta</summary>
    
    elemento:nth-child(2) {}

    A resposta correta é a opção " .elemento:nth-child(2) {}" porque é o pseudo-seletor correto para selecionar um elemento com base em sua posição no DOM em relação aos seus irmãos. No exemplo dado, ".elemento:nth-child(2)" irá selecionar o segundo elemento com a classe "elemento" no seu respectivo nível no DOM. As demais opções estão erradas porque não são sintaxes válidas ou não representam o pseudo-seletor apropriado para essa finalidade.
</details>

<br>

### Pergunta 5
#### Com qual propriedade CSS podemos definir o espaçamento de elementos que estejam dentro de um container display: grid?
A- grid-gap

B- grid-space

C- gap

D- display-gap

<details>
    <summary>Resposta</summary>
    
    gap

    A resposta correta é a opção "gap" porque é a propriedade CSS correta para definir o espaçamento de elementos que estejam dentro de um container com display: grid. Ela define tanto o espaçamento entre as colunas quanto o espaçamento entre as linhas. As demais opções estão erradas porque ou não são propriedades válidas ou não representam a propriedade adequada para essa finalidade.
</details>

<br>

### Pergunta 6
#### Com qual propriedade CSS ocultamos o conteúdo que extrapole as limitações do elemento (box-model)?
A- display-overflow

B- visibility

C- overflow

D- overlay

<details>
    <summary>Resposta</summary>
    
    overflow

    A resposta correta é a opção overflow". A propriedade "overflow" é usada para controlar o comportamento do conteúdo que ultrapassa as limitações do elemento (box-model). Ela determina se o conteúdo que excede o tamanho do elemento deve ser recortado, exibido com barras de rolagem ou se deve ser ocultado completamente. As demais opções estão erradas porque ou não são propriedades válidas ou não cumprem essa função específica.
</details>

<br>

### Pergunta 7
#### Com qual propriedade e valor CSS fazemos o conteúdo de um container display: flex ocupar mais de um linha?
A- flex-wrap: nowrap

B- flex-direction: wrap

C- flex-wrap: row

D- flex-wrap: wrap

<details>
    <summary>Resposta</summary>
    
    flex-wrap: wrap

    A resposta correta é a opção "flex-wrap: wrap". Quando definimos "flex-wrap: wrap", o conteúdo dos itens flexíveis pode ocupar mais de uma linha no container flexível. Se o espaço horizontal não for suficiente para acomodar todos os itens em uma única linha, eles serão automaticamente dispostos em linhas adicionais. As demais opções estão erradas porque não cumprem essa função específica.
</details>

<br>

### Pergunta 8
#### Como podemos recuperar a posição atual da barra de rolagem de uma página com o JavaScript?
A- window.getPosition()

B- window.getScrollPosition

C- document.offsetY

D- window.scrollY

<details>
    <summary>Resposta</summary>
    
    window.scrollY

    A alternativa correta é a opção "window.scrollY". A propriedade "scrollY" é usada para obter a posição atual da barra de rolagem vertical da página. Ela retorna o número de pixels que o conteúdo da página foi rolado verticalmente a partir do topo. As demais opções estão erradas porque não representam a forma correta de obter essa informação.
</details>

<br>

### Pergunta 9
#### Com qual propriedade e valor CSS forçamos a NÃO quebra de linha de um texto, mesmo quando o tamanho do container não comporte o conteúdo?
A- white-space: wrap

B- overflow: hidden

C- white-space: nowrap

D- overflow: break

<details>
    <summary>Resposta</summary>
    
    white-space: nowrap

    A alternativa correta é a opção "white-space: nowrap". O valor "nowrap" para a propriedade white-space é usado para forçar o texto a não quebrar em várias linhas, mesmo que o tamanho do container não comporte o conteúdo. O texto será exibido em uma única linha, e o conteúdo que não couber no container será cortado. As demais opções estão erradas porque não cumprem essa função específica.
</details>

<br>

### Pergunta 10
#### Com qual função podemos recuperar um atributo de um elemento?
A- elemento.getAttr("nome do atributo")

B- elemento.getAttribute("nome do atributo")

C- elemento.attribute("nome do atributo")

D- elemento.dataset("nome do atributo")

<details>
    <summary>Resposta</summary>
    
    elemento.getAttribute("nome do atributo")

    A resposta correta é a opção "elemento.getAttribute("nome do atributo")". Em JavaScript, utilizamos a função getAttribute() para recuperar o valor de um atributo específico de um elemento HTML. A função recebe o nome do atributo como argumento e retorna o valor associado a esse atributo no elemento. As demais opções estão erradas porque não são as funções adequadas para essa finalidade.
</details>