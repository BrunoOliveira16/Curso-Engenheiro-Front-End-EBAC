# 📌 Boas Práticas
> Módulo 04: CSS

<br>

## Conheça a sintaxe do CSS
### ✔ Seletor de elemento: 
Seleciona elementos HTML com base em seus nomes de tag. Por exemplo, o seletor p seleciona todos os parágrafos em um documento HTML.

### ✔ Seletor de classe: 
Seleciona elementos que possuem um atributo class específico. É representado por um ponto (.) seguido do nome da classe. Por exemplo, o seletor .destaque seleciona todos os elementos com a classe "destaque".

### ✔ Seletor de ID: 
Seleciona um elemento com um ID específico. É representado por um hash (#) seguido do nome do ID. Por exemplo, o seletor #header seleciona o elemento com o ID "header".

### ✔ Seletor de descendente: 
Seleciona elementos filhos que estão aninhados dentro de outros elementos. É representado pelo espaço entre os seletores. Por exemplo, o seletor div p seleciona todos os parágrafos que são descendentes diretos de um elemento div. 

### ✔ Seletor de filho direto: 
Seleciona elementos filhos diretos de um elemento pai. É representado pelo sinal de maior (>). Por exemplo, o seletor ul > li seleciona todos os elementos li que são filhos diretos de um elemento ul.

<br>

### Propriedades comuns em CSS: 
- ``color``: Define a cor do texto. 
- ``font-family``: Define a família de fonte a ser usada no texto. 
- ``font-size``: Define o tamanho da fonte do texto. 
- ``background-color``: Define a cor de fundo de um elemento. 
- ``width e height``: Definem a largura e a altura de um elemento, respectivamente. 
- ``margin``: Define as margens externas de um elemento. 
- ``padding``: Define o preenchimento interno de um elemento. 
- ``border``: Define a borda de um elemento. 
- ``display``: Define como um elemento é exibido (bloco, em linha, em linha-bloco, etc.). 
- ``position``: Define o tipo de posicionamento de um elemento (estático, relativo, absoluto, fixo).
- ``float``: Define como um elemento deve se alinhar em relação aos elementos adjacentes. 
- ``text-align``: Define o alinhamento do texto dentro de um elemento. 
- ``list-style``: Define o estilo de marcadores de uma lista (ul e ol). 
- ``text-decoration``: Define a decoração do texto (sublinhado, tachado etc.). 
- ``transition``: Define as transições de propriedades ao longo do tempo (como animações).

<br>

### ✔ Valores numéricos: 
São valores que representam números, como valores de tamanho (px, em, %), valores de largura e altura, valores de tempo para animações (s para segundos, ms para milissegundos), valores de opacidade (0 a 1), entre outros. 

### ✔ Valores de cor: 
São usados para definir cores, como hexadecimal (#RRGGBB), rgb (rgb(R, G, B)), rgba (rgba(R, G, B, A)), hsl (hsl(H, S, L)) e hsla (hsla(H, S, L, A)). 

### ✔ Valores de texto: 
Incluem valores de fonte (font-family), tamanho de fonte (font-size), estilos de fonte (normal, italic, bold), entre outros.

### ✔ Valores de posicionamento: 
São usados para posicionar elementos em relação a outros elementos, como static, relative, absolute, fixed para a propriedade position. 

### ✔ Valores de exibição: 
Definem como um elemento é exibido, como block, inline, inline-block, flex, grid, entre outros, para a propriedade display.

<br>

## Utilize seletores na página
### ✔ Classes: 
Você pode aplicar a mesma classe a vários elementos em seu documento HTML, permitindo que você estilize todos eles de maneira consistente. Além disso, você pode criar quantas classes diferentes forem necessárias para agrupar elementos com estilos específicos.

<br>

## Configure a página com box sizing
### ✔ Reset: 
Observe que o uso de um reset CSS é opcional e depende das necessidades específicas do projeto. Algumas bibliotecas CSS, como o Normalize.css, fornecem uma versão mais abrangente de um reset CSS, que também lida com casos específicos e comportamentos inconsistentes entre navegadores. Ao usar um reset CSS, é importante entender as implicações e possíveis conflitos com outros estilos que você pode querer aplicar posteriormente. Sempre teste cuidadosamente o resultado final e verifique se ele atende aos requisitos de design e funcionalidade do seu projeto.

<br>

## Altere textos na página
### ✔ Propriedade text-decoration: 
Essa propriedade também pode ser combinada com outras propriedades para estilizar ainda mais o texto, como cor (color), espaçamento (letter-spacing), transformação (texttransform), entre outras. Lembrando que nem todas as decorações de texto são suportadas em todos os navegadores ou em todos os elementos HTML. Portanto, é importante testar e verificar a compatibilidade dos estilos de decoração de texto em diferentes navegadores, caso seja necessário suporte amplo. Altere textos na página 

### ✔ Hover: 
Ao usar a pseudo-classe :hover, você pode definir estilos específicos que serão aplicados somente quando o elemento estiver no estado "hover" (sobrevoado). Isso permite que você crie efeitos visuais, como alterar a cor, o tamanho, o fundo ou outros atributos do elemento quando o cursor estiver sobre ele.