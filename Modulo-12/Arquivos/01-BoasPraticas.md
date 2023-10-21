# 📌 Boas Práticas
> Módulo 12: Fundamentos do Bootstrap

<br>

## Conheça o Bootstrap
No Bootstrap, existem várias funcionalidades de toggle (comportamento de alternância ou ativação/desativação). Conheça alguns exemplos: 

- Collapse (colapso): O colapso é usado para criar elementos recolhiveis, como painéis ou menus. Ao clicar em um botão ou link, o conteúdo é mostrado ou ocultado. A classe collapse é usada para identificar o elemento que será colapsado, enquanto a classe collapsed é adicionada ao botão ou link que controla o colapso. 

- Dropdown (menu suspenso): Os menus suspensos são usados para exibir opções adicionais em um formato de lista suspensa. Ao clicar em um botão ou link, o menu suspenso é mostrado ou ocultado. A classe dropdown-toggle é usada no botão ou link para ativar o menu suspenso.

- Tabs (guias): As guias permitem alternar entre diferentes conteúdos em uma única área. Ao clicar em uma guia, o conteúdo correspondente é mostrado. A classe nav-link é usada nos elementos de link para alternar entre as guias. 

- Modals (modais): Modais são janelas de sobreposição que exibem conteúdo adicional. Eles podem ser mostrados ou ocultados clicando em um botão ou link. A classe modal é usada para criar o modal, e o atributo data-toggle="modal" é usado para ativar o modal. 

- Accordion (acordeão): O acordeão é usado para exibir uma lista de itens empilhados verticalmente, onde apenas um item pode ser expandido de cada vez. Ao clicar em um item, ele é expandido e o restante é recolhido. A classe accordion é usada para criar o acordeão e as classes collapse e collapsed são usadas nos elementos de item para controlar o colapso.

- Carousel (carrossel): O carrossel permite exibir um conjunto de imagens ou conteúdo em um formato de slides. Os usuários podem navegar pelos slides clicando em botões de próxima e anterior ou através de indicadores de slide. A classe carousel é usada para criar o carrossel e várias classes relacionadas são usadas para controlar a navegação e a exibição dos slides. 

- Tooltip (dica de ferramenta): Os tooltips fornecem informações adicionais quando o usuário passa o mouse sobre um elemento. Eles geralmente exibem um texto pequeno para fornecer contexto ou explicação. A classe tooltip é usada para criar o tooltip e o atributo data-toggle="tooltip" é usado para ativá-lo.

- Popover: Popovers são semelhantes a tooltips, mas fornecem informações mais detalhadas em um formato de sobreposição. Eles podem conter texto, links, botões ou qualquer outro conteúdo HTML. A classe popover é usada para criar o popover e o atributo data-toggle="popover" é usado para ativá-lo. 

- SideNav (navegação lateral): A navegação lateral é usada para exibir um menu ou conjunto de links em uma barra lateral. Ao clicar em um botão ou ícone, a navegação lateral é mostrada ou ocultada. A classe sidenav é usada para criar a navegação lateral e o atributo data-toggle="sidenav" é usado para ativá-la.

<br>

## Desenvolva tabelas
O Bootstrap disponibiliza uma variedade de recursos para trabalhar com tabelas e estilizar o seu conteúdo. Aqui estão mais alguns recursos comumente usados: 
- Classes de estilo de borda (table-bordered): Essa classe adiciona bordas a todas as células da tabela.

- Classes de estilo de listra (table-striped): Essa classe adiciona uma lista de cores alternadas em linhas consecutivas da tabela, facilitando a leitura dos dados. 

- Classes de estilo hover (table-hover): Essa classe adiciona um efeito de destaque às células da tabela quando o mouse é passado sobre elas. 

- Classes de estilo responsivo (table-responsive): Essa classe é usada para tornar uma tabela responsiva, permitindo que ela se adapte a diferentes tamanhos de tela. A tabela se torna horizontalmente rolável em dispositivos menores.

<br>

## Desenvolva botões
O Bootstrap oferece uma variedade de classes para personalizar o estilo e o formato dos botões. Aqui estão algumas das classes mais comumente usadas: 
- Classes de tamanho (btn-lg, btn-sm, btn-xs): Essas classes são usadas para controlar o tamanho dos botões. Você pode aplicar uma classe de tamanho ao elemento ``<button>`` ou ``<a>`` para aumentar ou diminuir o tamanho do botão. 

- Classes de estilo de canto arredondado (rounded): Essa classe adiciona cantos arredondados ao botão, dando uma aparência mais suave.

- Classes de estilo de borda ``(btn-outline-*)``: Essas classes aplicam um estilo de borda sólida aos botões, em vez do preenchimento sólido padrão. Você pode substituir * pelo nome de uma cor do Bootstrap, como btn-outline-primary, btn-outline-secondary, etc. 

- Classes de estilo de formato de botão (btn-block): Essa classe faz com que o botão ocupe toda a largura disponível, estendendo-se de uma borda à outra. 

- Classes de estilo de sombra (shadow-*): Essas classes aplicam diferentes estilos de sombra ao botão, adicionando profundidade e dimensão. Você pode substituir * por um número de 1 a 5 para controlar a intensidade da sombra.

- Você também pode combinar várias classes para criar estilos personalizados e adicionar CSS adicional, se necessário, para ajustar o formato do botão de acordo com suas necessidades específicas. 

Lembre-se de consultar a documentação oficial do Bootstrap para obter mais detalhes sobre as classes e opções disponíveis para estilizar os botões no Bootstrap, pois a disponibilidade e a sintaxe podem variar dependendo da versão do Bootstrap que você está utilizando.

<br>

## Desenvolva botões
Acompanhe as classes mais comumente usadas para estilizar alertas no Bootstrap: 
- alert: Essa classe é a classe base para estilizar um elemento de alerta. Ela define o estilo básico do alerta, como cor de fundo, bordas e espaçamento. 

- alert-primary, alert-secondary, alert-success, alert-danger, alert-warning, alert-info, alert-light, alert-dark: Essas classes aplicam cores de fundo diferentes aos alertas, permitindo que você destaque diferentes tipos de mensagens ou estados. Por exemplo, alert-success define um alerta com cor de fundo verde para indicar sucesso.

- fade, show: Essas classes são usadas para controlar as animações de transição do alerta. A classe fade adiciona uma animação de desvanecimento, enquanto a classe show garante que o alerta seja exibido. 

- alert-heading: Essa classe é usada para estilizar o título ou cabeçalho do alerta. Ela pode ser aplicada a um elemento ``<h4>`` ou ``<h5>`` para definir o estilo do texto do cabeçalho. 

- Você também pode combinar as classes mencionadas acima com outras classes do Bootstrap para personalizar ainda mais o estilo dos alertas, como adicionar ícones, alterar a fonte ou adicionar estilos personalizados.

<br>

## Desenvolva formulários
Conheça algumas classes de checkbox disponíveis no Bootstrap: 
- form-check: Essa classe deve ser adicionada ao elemento contendo o checkbox para estilizá-lo corretamente. Pode ser aplicada a uma ``<div>``, ``<label>`` ou ``<li>``, dependendo da estrutura desejada. 

- form-check-input: Essa classe deve ser aplicada ao elemento ``<input type="checkbox">`` para estilizar o checkbox propriamente dito. Ela é responsável por fornecer o estilo de base para o checkbox.

- form-check-label: Essa classe pode ser adicionada a um elemento ``<label>`` associado ao checkbox para estilizar o rótulo do checkbox. O rótulo é o texto ou conteúdo que acompanha o checkbox e fornece uma descrição ou explicação para a opção selecionável. 

- form-check-inline: Essa classe é usada para alinhar horizontalmente vários checkboxes em uma única linha. Ela é aplicada ao elemento que envolve os checkboxes em uma estrutura de layout em linha. 

- Você pode aplicar outras classes e estilos para personalizar ainda mais a aparência dos checkboxes, como alterar as cores, adicionar ícones ou usar layouts diferentes.