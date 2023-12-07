### Introdução 
Neste módulo evoluímos na criação do nosso e-commerce construindo o carrinho de compras e toda a sua funcionalidade: adição, remoção e somatória dos itens. 

Você pode consultar o código escrito nesta segunda parte acessando o link 
https://github.com/ogiansouza/eplay/tree/parte-3. 

Para visualizar o layout no Figma acesse o link
https://www.figma.com/file/FiFpwvwwHX0rCbrXatjMg4/EPLAY?type=design&node-id=0-1& mode=design.

### Reduce
Para fazer a somatória dos itens no carrinho utilizamos o método de arrays, reduce. Com o reduce podemos iterar por vários itens e retornar uma consolidação dos dados: 
```
[10, 10, 20, 30].reduce((acumulador, itemAtual) => { return acumulador += itemAtual }, 0) 
```

O método reducer recebe como argumentos função e o valor inicial. Na função teremos como argumentos o acumulador, que é uma variável temporária onde iremos armazenar a consolidação dos dados e o itemAtual que é o iterando.