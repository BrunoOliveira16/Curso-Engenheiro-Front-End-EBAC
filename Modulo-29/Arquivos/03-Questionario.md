# 📌 Questionário
> Módulo 29: Introdução ao CSS in JS com React

<br>

### Pergunta 1
#### O que é o CSS in JS?
A- uma metodologia ágil

B- um novo framework para CSS

C- um novo pré-processador de CSS

D- uma nova forma de escrever CSS, através do JavaScript

<details>
    <summary>Resposta</summary>

    uma nova forma de escrever CSS, através do JavaScript

    A alternativa correta é a opção "uma nova forma de escrever CSS, através do JavaScript". CSS-in-JS é uma abordagem que permite aos desenvolvedores escrever estilos CSS diretamente em JavaScript, usando bibliotecas ou frameworks que encapsulam os estilos como objetos JavaScript. Isso facilita a criação de estilos dinâmicos e componentizados, pois os estilos são tratados como parte do código JavaScript. As demais alternativas estão erradas: "metodologia ágil" não está relacionada ao CSS-in-JS, "novo framework para CSS" não é uma definição precisa, e "novo pré-processador de CSS" não descreve a natureza do CSS-in-JS, que não é um pré-processador, mas sim uma técnica de escrita de estilos.
</details>

<br>

### Pergunta 2
#### Qual é o papel do EditorConfig?
A- manter nosso estilo de código padronizado, como o uso de ponto virgula, estilo de aspas

B- procurar bugs no código

C- aplicar uma padronização no editor de código

D- melhorar a escrita do código com uso de sugestões, autocomplete

<details>
    <summary>Resposta</summary>
    
    aplicar uma padronização no editor de código

    A resposta correta é "aplicar uma padronização no editor de código". Com o editor config padronizamos algumas configurações do editor de código, como a formatação a ser utilizada no final da linha. O estilo de código configuramos com o ESLint e Prettier.
</details>

<br>


### Pergunta 3
#### No Atomic Design, qual desses elementos NÃO pode ser considerado um átomo?
A- um campo de texto

B- um formulário

C- um parágrafo

D- um botão

<details>
    <summary>Resposta</summary>
    
    um formulário

    A alternativa correta é a opção "um formulário" porque, no Atomic Design, os átomos representam os elementos mais básicos e indivisíveis da interface de usuário, como botões, campos de texto, parágrafos, entre outros. Um formulário é uma composição de vários elementos, incluindo campos de texto, botões e outros, portanto, não pode ser considerado um átomo, mas sim uma molécula ou organismo, dependendo do contexto de design. As demais alternativas estão erradas porque representam elementos individuais e básicos da interface, que podem ser considerados átomos.
</details>

<br>

### Pergunta 4
#### Como criamos um estilo global com o Styled Components?
A- Utilizando a função createGlobalStyle no arquivo index.tsx

B- Utilizando a função createGlobalStyle para criar um componente estilizado e importando ele no App.tsx

C- Utilizando a função createGlobalCSS para criar um componente estilizado e importando ele no App.tsx

D- Utilizando a função createCSS no arquivo index.tsx

<details>
    <summary>Resposta</summary>
    
    Utilizando a função createGlobalStyle para criar um componente estilizado e importando ele no App.tsx

    A resposta correta é "Utilizando a função createGlobalStyle para criar um componente estilizado e importando ele no App.tsx" Com essa função podemos criar o estilo global do nosso App, onde iremos também incluir o reset de estilos. Geralmente separamos o arquivo de estilos do arquivo de componente, com isso devemos importar o arquivo que contém o estilo global no nosso componente principal, App.tsx.
</details>

<br>

### Pergunta 5
#### Sobre a estilização com Styled Components é correto afirmar que:
A- podemos utilizar media queries dentro de um componente estilizado

B- só podemos ter um componente estilizado por arquivo

C- não podemos estilizar elementos filhos

D- é um framework CSS

<details>
    <summary>Resposta</summary>
    
    podemos utilizar media queries dentro de um componente estilizado

    A alternativa correta é a opção "podemos utilizar media queries dentro de um componente estilizado" porque com o Styled Components é possível incluir media queries diretamente em um componente estilizado para criar estilos responsivos. Isso permite que você adapte o estilo do componente com base nas características do dispositivo, como tamanho da tela, orientação, entre outros. As demais alternativas estão incorretas: "só podemos ter um componente estilizado por arquivo" não é verdadeira, pois é possível ter vários componentes estilizados em um único arquivo; "não podemos estilizar elementos filhos" não é verdadeira, pois você pode estilizar elementos filhos; e "é um framework CSS" não está correto, pois o Styled Components não é um framework CSS, mas uma biblioteca para estilização em CSS-in-JS.
</details>

<br>

### Pergunta 6
#### Como acessamos uma propriedade de um componente estilizado?
A- através da função props que irá retornar um objeto com as propriedades

B- não é possível

C- através de uma arrow function dentro da regra de estilização, onde invocamos a propriedade, ex: ${(props) => props.fontSize()}

D- através de uma arrow function dentro da regra de estilização, onde acessamos a propriedade, ex: ${(props) => props.fontSize}

<details>
    <summary>Resposta</summary>
    
    através de uma arrow function dentro da regra de estilização, onde acessamos a propriedade, ex: ${(props) => props.fontSize}

    A alternativa correta é a opção "através de uma arrow function dentro da regra de estilização, onde acessamos a propriedade, ex: ${(props) => props.fontSize} " porque, ao estilizar um componente em React com styled-components, a propriedade do componente é acessada utilizando uma arrow function dentro da regra de estilização, como exemplificado em ${(props) => props.fontSize}. Isso permite o acesso direto à propriedade desejada do objeto props. As outras alternativas estão incorretas: a função props em React não retorna um objeto com as propriedades, é possível acessar propriedades em componentes estilizados e a notação ${(props) => props.fontSize()} tenta chamar uma função que não existe nas props, em vez de acessar diretamente a propriedade fontSize.
</details>

### Pergunta 7
#### Através de qual componente do Styled Components fazemos a utilização de temas?
A- ThemeConsumer

B- Theme

C- ThemeContainer

D- ThemeProvider

<details>
    <summary>Resposta</summary>
    
    ThemeProvider

    A alternativa correta é a opção "ThemeProvider" porque o componente ThemeProvider é usado no Styled Components para fornecer temas (ou "themes") aos componentes estilizados dentro de uma aplicação. Ele envolve os componentes da árvore de renderização e permite que você acesse as propriedades do tema em qualquer lugar da aplicação, tornando mais fácil a aplicação de estilos consistentes em toda a interface com base no tema definido. As demais alternativas estão erradas, pois não representam os componentes específicos para a utilização de temas com Styled Components.
</details>

### Pergunta 8
#### Como acessamos o conteúdo inserido dentro de um componente React?
A- através da propriedade children em props

B- através de props.content

C- através da função props.children

D- através da propriedade content em props

<details>
    <summary>Resposta</summary>
    
    através da propriedade children em props

    A resposta correta é "através da propriedade children em props" Através da propriedade children que está disponível ao acessar props, é preciso tomar cuidado com as nomenclaturas, pois children é uma propriedade e não uma função.
</details>

### Pergunta 9
#### Sobre a estilização com Styled Components é INCORRETO afirmar que:
A- podemos acessar os elementos filhos do componente e estiliza-los

B- devem ser criados dentro de um arquivo JavaScript ou TypeScript

C- não podemos acessar os elementos filhos do componente e estiliza-los

D- o Styled Components evita colisões criando classes únicas

<details>
    <summary>Resposta</summary>
    
    não podemos acessar os elementos filhos do componente e estiliza-los

    A alternativa correta é a opção "não podemos acessar os elementos filhos do componente e estilizá-los" porque, com o Styled Components, é possível acessar e estilizar os elementos filhos de um componente. O Styled Components permite que você crie estilos para componentes e seus elementos internos usando seletores, permitindo um alto grau de controle sobre a estilização. As demais alternativas estão erradas: "podemos acessar os elementos filhos do componente e estiliza-los" está correta ao mencionar que é possível estilizar elementos filhos, "devem ser criados dentro de um arquivo JavaScript ou TypeScript" está correta em relação ao local de criação dos estilos e "Styled Components evita colisões criando classes únicas" está correta ao mencionar que o Styled Components gera classes únicas para evitar colisões de estilos.
</details>