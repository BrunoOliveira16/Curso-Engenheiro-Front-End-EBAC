# 📌 Boas Práticas
> Módulo 09: Conheça o jQuery

<br>

## Selecione elementos
### ✔ Seletor de elemento: 
Selecione elementos HTML usando o seletor de elemento básico. Por exemplo, $('p') selecionará todos os parágrafos do documento.

### ✔ Seletor de classe: 
Use o ponto (.) seguido do nome da classe para selecionar elementos com uma determinada classe. Por exemplo, $('.classe') selecionará todos os elementos com a classe "classe".

### ✔ Seletor de ID: 
Use o caractere de cerquilha (#) seguido do ID para selecionar um elemento com um ID específico. Por exemplo, $('#id') selecionará o elemento com o ID "id".

### ✔ Seletor de atributo: 
Use colchetes ([]) para selecionar elementos com um atributo específico. Por exemplo, $('[type="text"]') selecionará todos os elementos com o atributo type igual a "text".


### ✔ Seletor de descendente: 
Você pode usar o espaço para selecionar elementos que são descendentes de outro elemento. Por exemplo, $('div p') selecionará todos os parágrafos que são descendentes de um elemento div.


### ✔ Seletor de elementos visíveis: 
Use o pseudo-seletor :visible para selecionar elementos que estão visíveis na página. Por exemplo, $('.elemento:visible') selecionará todos os elementos com a classe "elemento" que estão visíveis.

### ✔ Seletor de elementos ocultos: 
Use o pseudo-seletor :hidden para selecionar elementos que estão ocultos na página. Por exemplo, $('.elemento:hidden') selecionará todos os elementos com a classe "elemento" que estão ocultos.


### ✔ Combine seletores: 
Você pode combinar diferentes seletores para refinar sua seleção. Por exemplo, $('div .classe') selecionará todos os elementos com a classe "classe" que são descendentes de um elemento div.


### ✔ Cache de seletores: 
Se você planeja usar o mesmo seletor várias vezes, armazene-o em uma variável para evitar pesquisas repetidas no DOM. Isso pode melhorar o desempenho do seu código.


<br>

## Manipule eventos
### ✔ Use a função on() para associar eventos: 
A função on() é usada para associar manipuladores de eventos a elementos selecionados. Ela permite que você associe um ou mais eventos a um elemento específico ou a vários elementos correspondentes a um seletor.

### ✔ Utilize os eventos comuns: 
O jQuery suporta uma ampla variedade de eventos, como click, mouseover, keydown, submit e muitos outros. Use os eventos adequados às suas necessidades para responder a ações do usuário.

### ✔ Utilize a delegação de eventos: 
A delegação de eventos permite associar manipuladores de eventos a elementos futuros que ainda não existem no momento em que o código é executado. Isso é especialmente útil para elementos dinâmicos adicionados posteriormente.

### ✔ Evite o uso de atributos onclick: 
Em vez de usar atributos onclick em elementos HTML para associar eventos, é recomendado usar a função on() para manter seu código separado e mais legível.

### ✔ Use a função off() para remover manipuladores de eventos: 
Se você precisar remover um manipulador de evento associado a um elemento, use a função off(). Isso garante que o evento não seja mais acionado quando ocorrer.

<br>

## Manipule DOM
### ✔ Opacity: 
Com essa propriedade do CSS, você pode fazer com que o elemento pareça mais transparente, revelando o conteúdo por trás dele ou criando efeitos de transição suave. 