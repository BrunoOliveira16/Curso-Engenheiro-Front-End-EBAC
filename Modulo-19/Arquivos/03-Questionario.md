# 📌 Questionário
> Módulo 19: Boas práticas de CSS

<br>

### Pergunta 1
#### Qual dos seletores a seguir é menos performático?
A- nav a

B- header nav ul li a

C- .nav-link

D- header .nav-link

<details>
    <summary>Resposta</summary>

    header nav ul li a

    A resposta correta é "header nav ul li a". Este seletor é menos performático porque envolve uma sequência de seletores aninhados (descendentes), o que significa que o navegador precisa percorrer várias camadas de elementos HTML para encontrar os elementos que correspondem a esse seletor. Quanto mais aninhados forem os seletores, mais trabalho o navegador terá que fazer para aplicar o estilo, e isso pode afetar o desempenho da renderização da página. É sempre aconselhável escrever seletores CSS que sejam o mais eficientes possível para otimizar o desempenho da página.
</details>

<br>

### Pergunta 2
#### Como o SMACSS divide o CSS?
A- Entre estilos módulos e temas

B- Entre estilos reset, base e módulos

C- Entre estilos base, layout, módulos, estados e temas

D- Entre estilos base, módulos e temas

<details>
    <summary>Resposta</summary>
    
    Entre estilos base, layout, módulos, estados e temas

    A resposta correta é " Entre estilos base, layout, módulos, estados e temas". O SMACSS divide o CSS nessas cinco categorias principais para promover uma organização e estrutura mais eficiente e escalável:

    Base: Esta categoria lida com as configurações padrão de elementos HTML. Aqui, você define estilos globais, como definições de fontes, tamanhos de texto, cores de texto e plano de fundo, e estilos para links não visitados.

    Layout: A categoria de layout lida com a estrutura geral do layout da página, como cabeçalhos, barras laterais e rodapés. Aqui, você define estilos para os elementos de estrutura que afetam o posicionamento dos módulos.

    Módulos: Os módulos são os componentes individuais e reutilizáveis da sua interface do usuário, como botões, caixas de diálogo, formulários etc. Cada módulo possui seu próprio arquivo CSS que contém todas as regras relacionadas a ele, tornando-o fácil de manter e reutilizar.

    Estados: Nesta categoria, você lida com os estados interativos dos elementos, como links visitados, elementos ativos, elementos com foco, entre outros. Isso ajuda a manter o CSS organizado e legível, separando as regras de estilo para diferentes estados.

    Temas: Os temas envolvem a aplicação de diferentes estilos de acordo com temas específicos. Isso é útil quando você deseja personalizar a aparência do site de acordo com diferentes contextos ou preferências do usuário.
</details>

<br>


### Pergunta 3
#### Sobre o BEM é incorreto afirma que:
A- signfica Block Element Modifier

B- é uma metodologia para escrita de código de estilos

C- nos auxilia a criar código CSS escalável e com melhor manutenibilidade

D- é um framework css

<details>
    <summary>Resposta</summary>
    
    é um framework css

    A resposta incorreta é a alternativa " é um framework css". O BEM (Block Element Modifier) não é um framework CSS, mas sim uma metodologia de nomenclatura e organização de classes CSS. Ele fornece diretrizes para criar nomes de classes significativos e estruturar o código de estilo de uma maneira mais organizada e escalável, mas não oferece componentes ou estilos pré-fabricados como um framework CSS faria. O BEM é mais sobre como nomear e organizar suas próprias classes CSS em seu projeto, em vez de fornecer um conjunto completo de estilos ou componentes prontos para uso.
</details>

<br>

### Pergunta 4
#### Qual dos seletores a seguir aplica BEM corretamente?
A- .header .profile .avatar.inactive

B- .profile__avatar--is-inactive

C- .profile__avatar.inactive

D- .profile .avatar__inactive

<details>
    <summary>Resposta</summary>
    
    .profile__avatar--is-inactive

    A resposta correta é .profile__avatar--is-inactive. 
    
    .profile__avatar--is-inactive: Esse seletor está aplicando a metodologia BEM corretamente. Ele representa um elemento chamado "avatar" dentro de um bloco "profile" com o modificador "is-inactive".
</details>
