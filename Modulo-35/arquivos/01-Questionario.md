# 📌 Questionário
> Módulo 35: Projeto 6 - Part 1

<br>

### Pergunta 1
#### Com qual função do Styled Components podemos criar um estilo global?
A- styled

B- createStyle

C- createGlobalStyle

D- createUniversalStyle

<details>
    <summary>Resposta</summary>

    createGlobalStyle

    A função do Styled Components que permite criar um estilo global é a createGlobalStyle. Ao utilizar o createGlobalStyle, você pode definir estilos globais para o seu aplicativo que serão aplicados a todos os componentes, independentemente de onde eles estejam localizados na árvore de componentes. Isso é útil para aplicar estilos que se aplicam a toda a aplicação, como redefinição de estilos padrão de tags HTML, definição de fontes, cores ou até mesmo estilos de animação global.
</details>

<br>

### Pergunta 2
#### Com qual propriedade CSS alinhamentos verticalmente um elemento que esteja num container com display: flex?
A- vertical-align

B- justify-content

C- align-items

D- align

<details>
    <summary>Resposta</summary>
    
    align-items

    Para alinhar verticalmente um elemento que esteja dentro de um container com display: flex, você deve utilizar a propriedade CSS align-items. A propriedade align-items é usada para controlar o alinhamento dos itens flexíveis (elementos filhos) em relação ao eixo transversal (eixo vertical, se o flex-direction for "row" ou "row-reverse", e eixo horizontal, se o flex-direction for "column" ou "column-reverse").
</details>

<br>


### Pergunta 3
#### Através de qual propriedade CSS podemos ajustar o tamanho de uma imagem de fundo?
A- image-size

B- background-image-size

C- background-repeat

D- background-size

<details>
    <summary>Resposta</summary>
    
    background-size

    Para ajustar o tamanho de uma imagem de fundo, você deve utilizar a propriedade CSS background-size. A propriedade background-size controla as dimensões da imagem de fundo em relação ao elemento ao qual a imagem está sendo aplicada. Ela permite que você especifique o tamanho da imagem de fundo, dimensionando-a de acordo com as dimensões do elemento ou usando valores específicos, como porcentagens, pixels ou palavras-chave.
</details>

<br>

### Pergunta 4
#### Como podemos acessar as propriedades de um componente com o Styled Components?
A- Através de uma arrow function que recebe como argumento as props e a partir disso acessamos a propriedade desejada

B- Através da função getProps que retorna um array com as propriedades

C- Através da função getProps que retorna um objeto com as propriedades

D- Através de uma arrow function que recebe como argumento as props e retorna um array com as propriedades

<details>
    <summary>Resposta</summary>
    
    Através de uma arrow function que recebe como argumento as props e a partir disso acessamos a propriedade desejada

    A forma correta de acessar as propriedades de um componente com o Styled Components é através de uma arrow function que recebe como argumento as props. Isso permite que você acesse as propriedades passadas para o componente e utilize-as dentro da definição do estilo.
</details>

<br>

### Pergunta 5
#### Sobre o Styled Components é INCORRETO afirmar:
A- É utilizado para construção de componentes estilizados

B- É nativo no React

C- Suporte recurso de aninhamento, como no SASS

D- Pode ser utilizado em conjunto com o CSS convencional

<details>
    <summary>Resposta</summary>
    
    É nativo no React

    A alternativa "É nativo no React" - é INCORRETA. O Styled Components não é uma funcionalidade nativa no React. Ele é uma biblioteca externa que permite a criação de componentes estilizados no React (e também em outras bibliotecas JavaScript) de uma maneira mais declarativa e eficiente. Para utilizar o Styled Components, você precisa instalá-lo e importá-lo no seu projeto. É uma ferramenta independente do React, mas que funciona bem em conjunto com ele, permitindo criar componentes estilizados de forma mais organizada e reutilizável.
</details>

<br>

### Pergunta 6
#### Qual é a função do Omit do TypeScript?
A- adicionar propriedades a um tipo existente

B- remover métodos de uma classe

C- criar um tipo baseado em outro, removendo algumas propriedades

D- converter tipos

<details>
    <summary>Resposta</summary>
    
    criar um tipo baseado em outro, removendo algumas propriedades

    A função Omit no TypeScript é usada para criar um novo tipo baseado em outro tipo, removendo explicitamente determinadas propriedades do tipo original. Isso permite que você crie um novo tipo que seja uma versão "omitida" do tipo original, contendo todas as propriedades do tipo original, exceto as que você especificou para serem removidas.
</details>

<br>

### Pergunta 7
#### Sobre o erro: “Cannot destructure property ‘basename’ of ‘react__WEBPACK_IMPORTED_MODULE_0__.useContext(…)’ as it is null’ este erro acontece por que?
A- Por utilizar um recurso do react-router-dom fora de Router ou RouterProvider

B- Por estar utilizando o componente Router sem uma propriedae router

C- Por estar utilizando a função useRouter sem passar o location como argumento

D- Nenhuma das opções anteriores

<details>
    <summary>Resposta</summary>
    
    Por utilizar um recurso do react-router-dom fora de Router ou RouterProvider

    O erro "Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null" acontece devido à opção "Por utilizar um recurso do react-router-dom fora de Router ou RouterProvider."

    A mensagem de erro indica que está ocorrendo um problema com o uso do recurso basename do React Router DOM, especificamente com a função useContext (que é uma funcionalidade do React) dentro do contexto do react-router-dom, e o valor retornado é nulo (null).

    Esse erro geralmente ocorre quando um componente ou função que depende do React Router DOM está sendo usado fora do contexto de um componente Router ou RouterProvider, que é onde o React Router estabelece o contexto para que seus recursos possam ser acessados corretamente.
</details>

<br>

### Pergunta 8
#### Com qual função JavaScript podemos recuperar o ano completo (YYYY) de uma data?
A- new Date.getFullYear()

B- new Date().getYear()

C- new Date().year

D- new Date().getFullYear()

<details>
    <summary>Resposta</summary>
    
    new Date().getFullYear()

    A função JavaScript correta para recuperar o ano completo (YYYY) de uma data é new Date().getFullYear(). Essa função é um método do objeto Date em JavaScript que retorna o ano completo (com quatro dígitos) da data atual ou da data especificada.
</details>