# 📌 Boas Práticas
> Módulo 14: Projeto 3

<br>

## Crie sessões de eventos
No Bootstrap, a abreviação para a propriedade padding é p. 

O Bootstrap utiliza uma convenção de nomenclatura abreviada para suas classes utilitárias, onde o prefixo p seguido de um valor numérico ou uma palavra-chave é usado para definir o espaçamento interno (padding) de um elemento.

[documentação oficial](https://getbootstrap.com/docs/5.3/utilities/spacing/)

Existem várias classes utilitárias de espaçamento baseadas nesta convenção: 
- p-0: Remove todo o espaçamento interno do elemento. 
- p-1: Aplica um pequeno espaçamento interno ao elemento. 
- p-2: Aplica um espaçamento interno moderado ao elemento. 
- p-3: Aplica um espaçamento interno grande ao elemento. 
- p-4: Aplica um espaçamento interno muito grande ao elemento. 
- p-5: Aplica um espaçamento interno extremamente grande ao elemento.

Você também pode especificar o espaçamento individual para cada lado do elemento usando a sintaxe p-{direção}-{valor}, onde {direção} pode ser: 
- t: para o topo (top) 
- b: para a parte inferior (bottom) 
- l: para a esquerda (left) 
- r: para a direita (right) 
- x: para ambos os lados horizontalmente (left e right) 
- y: para ambos os lados verticalmente (top e bottom) 

Por exemplo, py-3 adiciona um espaçamento interno grande verticalmente ao elemento.

Essas classes podem ser aplicadas a vários elementos HTML, como divs, botões, imagens e muito mais. Elas são úteis para adicionar espaçamento interno de forma rápida e consistente aos elementos em seu layout, sem a necessidade de escrever CSS personalizado. 

Aqui estão algumas outras nomenclaturas abreviadas comumente usadas no Bootstrap para outras propriedades além do padding: 
- m: para a propriedade margin, usada para definir o espaçamento externo de um elemento. 
- mt: para margin-top. 
- mb: para margin-bottom. 
- ml: para margin-left.
- mr: para margin-right. 
- mx: para margin-left e margin-right (espaçamento horizontal). 
- my: para margin-top e margin-bottom (espaçamento vertical). 
- w: para width, usada para definir a largura de um elemento. 
- h: para height, usada para definir a altura de um elemento. 
- fw: para width: 100%, fazendo com que o elemento ocupe toda a largura disponível. 
- fh: para height: 100%, fazendo com que o elemento ocupe toda a altura disponível. 
- d: para display, usada para controlar o comportamento de exibição do elemento. 
- flex: para display: flex, usada para criar um container flexível. 
- text: para propriedades de texto, como text-center para centralizar o texto. 
- bg: para propriedades de fundo, como bg-primary para definir uma cor de fundo primária.

Essas são apenas algumas das muitas nomenclaturas abreviadas disponíveis no Bootstrap. É importante consultar a documentação oficial do Bootstrap para obter uma lista completa das classes utilitárias e suas nomenclaturas abreviadas correspondentes.

<br>

## Melhore a responsividade
É possível implementar o recurso smooth-scroll usando a biblioteca de JavaScript Smooth Scroll que é leve e independente e adiciona suporte a rolagem suave em páginas da web, configura a duração da animação, deslocamento do destino, comportamento em diferentes dispositivos, entre outros. A biblioteca está disponível no link.

[somoth-scroll](https://github.com/cferdinandi/smooth-scroll)