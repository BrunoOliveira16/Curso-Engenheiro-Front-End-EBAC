# 📌 Boas Práticas
> Módulo 11: Fundamentos do CSS Responsivo

<br>

## Utilize Viewport
- Se o seu site ou aplicativo exigir suporte a zoom, você pode remover o atributo maximum-scale ou ajustar seu valor para permitir escalas maiores. Lembre-se de testar e garantir que a experiência de zoom seja adequada para o seu caso de uso. 

- Verifique a compatibilidade dos navegadores com as propriedades e valores que você está usando na meta tag viewport. Alguns navegadores mais antigos podem não suportar todos os recursos ou ter comportamentos diferentes. 

- Use o recurso "modo de inspeção" do navegador (como o DevTools do Chrome) para visualizar seu site ou aplicativo em diferentes tamanhos de viewport e simular a exibição em dispositivos específicos.

<br>

## Trabalhe com unidades flexíveis de medidas
### ✔ Evite o uso de unidades de medida absolutas 
Unidades de medida absolutas, como px (pixels), não se adaptam ao tamanho do dispositivo e podem resultar em layouts rígidos e quebrados em diferentes telas. É recomendado evitar o uso excessivo de unidades absolutas e priorizar as unidades relativas e de viewport.

<br>

## Use Breakpoints
### ✔ Mobile first 
Acompanhe algumas características e princípios-chave do conceito Mobile First: 
- Layout responsivo: O design do site é criado de forma flexível, usando técnicas de layout responsivo, para se adaptar a diferentes tamanhos de tela e dispositivos. 

- Performance otimizada: O desempenho do site em dispositivos móveis é uma consideração fundamental. O foco é dado à otimização de velocidade de carregamento, redução de uso de dados e melhorias de desempenho geral.

- Priorização do conteúdo essencial: Como o espaço em telas móveis é limitado, o conteúdo mais relevante e importante é identificado e priorizado para garantir que os usuários móveis tenham uma experiência clara e eficiente. 

- Design simplificado: O design é mantido limpo, simplificado e com foco nas principais tarefas e funcionalidades, para garantir que os usuários móveis possam navegar e interagir facilmente com o site. 

- Navegação e interação touch-friendly: Os elementos de navegação e interação são projetados com a usabilidade em mente em dispositivos de toque, com botões e menus adequados para interações táteis.

### ✔ Utilize a tag ``<picture>`` em conjunto com a tag ``<source>`` 
A tag ``<picture>`` é usada em conjunto com a tag ``<source>``, que especifica as diferentes versões da imagem. Dentro da tag ``<source>``, você pode definir atributos como srcset e media para fornecer diferentes arquivos de imagem e condições de exibição.


### ✔ Considere o tamanho do arquivo e a resolução das imagens 
Ao fornecer diferentes versões da imagem, certifique-se de otimizá-las para o tamanho de arquivo e resolução adequados. Isso ajudará a garantir um carregamento rápido e uma boa qualidade de imagem em cada dispositivo.