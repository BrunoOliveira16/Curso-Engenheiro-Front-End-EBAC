# 📌 Boas Práticas
> Módulo 20: Construa e-mails com HTML

<br>

## Crie o primeiro e-mail
### ✔ ``<td>`` 
As células de tabela ``<td>`` podem ser estilizadas usando CSS para alterar a aparência, cor de fundo, bordas, espaçamento e outros aspectos visuais. Além disso, é possível aplicar classes ou IDs às células para selecioná-las e estilizá-las de forma mais específica usando CSS ou interagir com elas por meio de JavaScript.

### ✔ Align 
Existem diferentes valores possíveis para essa propriedade: 
- "left": Alinha o elemento à esquerda de seu contêiner. 
- "right": Alinha o elemento à direita de seu contêiner. 
- "center": Centraliza o elemento horizontalmente dentro de seu contêiner. 
- "justify": Distribui o espaço em branco uniformemente entre as linhas de texto, fazendo com que as margens esquerda e direita sejam alinhadas.

<br>

## Crie um e-mail de recuperação de senha
### ✔ cellspacing 
Esse atributo está em desuso no HTML5 e é mais comumente controlado por meio de CSS usando a propriedade "border-spacing". Recomenda-se o uso de estilos CSS para controlar o espaçamento entre as células em vez de usar o atributo "cellspacing".

### ✔ colspan 
O uso do atributo "colspan" é útil quando você deseja criar células de tabela que abrangem várias colunas para agrupar ou mesclar dados relacionados. Isso é comumente usado para criar cabeçalhos de tabela que se estendem por várias colunas ou para combinar células em uma única linha.

<br>

## Crie um e-mail de confirmação de pedido
### ✔ Div 
O uso adequado das divs, em conjunto com uma estrutura semântica e estilos bem planejados, pode resultar em um código mais organizado, fácil de entender e manter. Acompanhe algumas dicas sobre o uso da tag ``<div>`` em HTML: 
- Estruturação do layout: Use ``<div>`` para criar a estrutura básica do layout da sua página. Divida a página em seções lógicas e agrupe o conteúdo relacionado dentro de divs. 
- Nomenclatura significativa: Atribua classes ou IDs significativos às suas divs para facilitar a compreensão do seu código. Dê nomes que descrevam o propósito ou função daquela seção da página.
- Evite divs desnecessárias: Use divs somente quando necessário. Se um elemento HTML existente, como ``<section>``, ``<article>`` ou ``<header>``, puder ser usado em vez de uma div, escolha-o para fornecer uma estrutura semântica ao seu conteúdo. 
- Separe estilos e comportamentos: Use divs para envolver elementos relacionados que precisam de estilos ou comportamentos específicos. Isso permite que você aplique CSS ou scripts a um conjunto específico de elementos. 
- Evite aninhamento excessivo: Evite criar aninhamentos excessivos de divs, pois isso pode tornar o seu código mais complexo e difícil de gerenciar. Procure manter a hierarquia de divs simples e plana sempre que possível.
- Flexibilidade com CSS: As divs são elementos neutros que podem ser estilizados de diversas maneiras usando CSS. Explore as propriedades de posicionamento, margens, preenchimento e outras propriedades para controlar o layout e o design das suas divs. 
- Responsividade: Use divs em combinação com técnicas de design responsivo para criar layouts que se adaptem a diferentes dispositivos e tamanhos de tela. Use media queries para aplicar estilos específicos a diferentes pontos de quebra.
- Semântica: Embora as divs sejam elementos genéricos, tente usar tags HTML semânticas sempre que possível para envolver seu conteúdo. Isso ajuda a fornecer um significado claro ao seu código e beneficia a acessibilidade. 
- Compatibilidade com navegadores: As divs são suportadas por todos os navegadores modernos. Certifique-se de fechar corretamente as tags ``<div>`` e verifique a compatibilidade com versões mais antigas dos navegadores, se necessário.

<br>

## Crie um e-mail de promoção
### ✔ line-through 
A propriedade "text-decoration: line-through" é frequentemente usada para indicar que um texto foi removido ou é irrelevante. Por exemplo, ao exibir o preço original e o preço de venda de um produto, o preço original pode ser exibido com uma linha no meio para indicar que foi descontado.