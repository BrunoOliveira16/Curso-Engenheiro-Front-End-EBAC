# 📌 Boas Práticas
> Módulo 10: Plugins jQuery

<br>

## Crie um menu hambúrger e um carrossel de imagens
### ✔ Puglins do Jquery: 
Além dos plugins estudados, seguem mais exemplos: 
- jQuery UI: É uma coleção de plugins e componentes de interface do usuário que adicionam recursos avançados de interação, como efeitos visuais, arrastar e soltar, seleção, redimensionamento e muito mais. 

- Magnific Popup: É um plugin para exibir imagens, vídeos e conteúdo em janelas pop-up com uma ampla gama de opções de personalização, como zoom, galerias e recursos avançados de controle de pop-up. 

- FullCalendar: É um plugin de calendário completo e altamente configurável, que permite exibir e gerenciar eventos em um calendário interativo. Ele oferece suporte a arrastar e soltar, visualização de mês/semana/dia, personalização de eventos e muito mais.

- Chosen: É um plugin para melhorar a experiência de seleção de elementos ``<select>``. Ele transforma caixas de seleção simples em elementos avançados de seleção com pesquisa, filtragem, seleção múltipla e outras opções de personalização. 

- DataTables: É um plugin para criar tabelas interativas e responsivas, permitindo filtrar, classificar e pesquisar dados de forma avançada. Ele suporta recursos como paginação, ordenação, pesquisa em tempo real, exportação de dados e muito mais. 

Crie um menu hambúrger e um carrossel de imagens Você pode encontrar mais plugins no diretório oficial do jQuery Plugins https://plugins.jquery.com/. Lembre-se de verificar a documentação e os requisitos de cada plugin individualmente para saber como utilizá-los corretamente em seu projeto.

### ✔ Menu hamburger: 
Adicione um evento de clique no documento para fechar o menu quando o usuário clicar fora dele. Use a função .on() do jQuery para capturar o evento de clique e verificar se o clique ocorreu fora do menu. Se ocorrer, remova a classe .menu-aberto do menu e do botão para fechar o menu.

### ✔ Carrossel de imagens com o jQuery: 
Acompanhe algumas dicas para desenvolver um carrossel eficiente e com boa usabilidade: 
- Planeje a estrutura HTML: Defina a estrutura HTML do carrossel com os elementos necessários, como uma lista ``<ul>`` para os slides e botões de navegação. Isso ajudará a organizar o conteúdo do carrossel e facilitar a manipulação com o jQuery. 

- Defina o layout responsivo: Utilize media queries CSS para ajustar as dimensões e o número de slides exibidos em diferentes tamanhos de tela.

- Controle de navegação: Adicione botões de navegação através de botões de seta, links de páginação ou outros elementos visuais. 

- Adicione animações suaves: Utilize transições e animações CSS para criar efeitos de transição suaves entre os slides. Use a função .animate() do jQuery para criar animações personalizadas, se necessário. 

- Insira funcionalidades adicionais: Use recursos como autoplay, pausa ao passar o mouse, indicadores de progresso, miniaturas entre outros. 

- Teste em diferentes navegadores: Faça testes de compatibilidade e ajustes necessários para garantir que a experiência do usuário seja consistente.

<br>

## Aplique máscara aos campos de texto
### ✔ Design: 
Ao usar o JQuery para criar elementos, seções, menus entre outros itens, lembre-se de sempre planejar o design antecipadamente. Defina a paleta de cores, a tipografia, os espaçamentos e outros elementos visuais que você deseja aplicar. Ter uma visão clara do design ajudará você a implementá-lo com mais eficiência.

### ✔ Zindex: 
Essa propriedade pode ter efeitos inesperados se usada incorretamente ou em excesso. Certifique-se de usá-la com moderação e teste em diferentes cenários para garantir o resultado desejado.

### ✔ Facilidades: 
Use o “control d” para selecionar todas as ocorrências de uma div.

<br>

## Valide o formulário 
Redução de erros: O feedback adequado pode ajudar a reduzir erros em formulários, fornecendo indicações claras sobre o formato correto dos dados esperados e destacando quais campos têm erros de validação. Isso pode evitar que os usuários enviem informações incorretas ou incompletas, economizando tempo e evitando frustrações. Dar feedback em formulários de sites feitos com jQuery é de extrema importância para melhorar a experiência do usuário e fornecer uma interação eficiente. Acompanhe algumas das razões.

### ✔ Usabilidade: 
Feedback em tempo real ou imediato ajuda os usuários a entenderem o que está acontecendo enquanto preenchem um formulário. Isso inclui fornecer informações sobre campos obrigatórios, validação de entrada e confirmação de envio. Com o jQuery, você pode facilmente adicionar validações em tempo real e exibir mensagens de erro ou sucesso conforme os usuários interagem com os campos. 

### ✔ Redução de erros: 
O feedback adequado pode ajudar a reduzir erros em formulários, fornecendo indicações claras sobre o formato correto dos dados esperados e destacando quais campos têm erros de validação. Isso pode evitar que os usuários enviem informações incorretas ou incompletas, economizando tempo e evitando frustrações.

### ✔ Confiabilidade e feedback de progresso: 
Dar feedback sobre o progresso de preenchimento do formulário, como barras de progresso ou etapas concluídas, ajuda os usuários a terem uma noção clara de onde estão no processo de preenchimento. Isso pode aumentar a confiabilidade e a sensação de controle do usuário sobre o processo.


### ✔ Engajamento e satisfação do usuário: 
Ao fornecer feedback interativo, como animações suaves ou efeitos visuais ao enviar um formulário, você pode criar uma experiência mais envolvente e agradável para o usuário. Esses pequenos detalhes podem fazer a diferença na satisfação geral do usuário com o site.


### ✔ Acessibilidade: 
O feedback adequado também é importante para usuários com necessidades especiais ou que utilizam tecnologias assistivas, como leitores de tela. Ao fornecer mensagens claras e distintas, você torna o formulário mais acessível para todos os usuários.

### ✔ Offset: 
Essa função retorna as coordenadas em relação ao documento. Se você deseja obter as coordenadas em relação ao elemento pai mais próximo com uma posição definida, você pode usar a função position() em vez de offset(). A função position() retorna as coordenadas de posicionamento em relação ao elemento pai.