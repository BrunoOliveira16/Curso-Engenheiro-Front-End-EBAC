## 📝 Aula 01: Especificidade CSS
### Especificidade CSS
Escrever código CSS é relativamente simples, porém precisamos ter alguns cuidados e entender alguns conceitos, como a especificidade.

A especificidade no CSS diz o quão específica, forte, um seletor é.

O efeito cascata do CSS pode fazer com que uma regra CSS sobrescreva outra, por exemplo:
```
h1 { color: red; }
h1 { color: blue; }
```

A cor aplicada ao elemento H1 será azul, por essa ser a última regra para este seletor.

Porém podemos contornar esse comportamento deixando o seletor mais específico:
```
h1.titulo { color: red; }
h1 { color: blue; }
```
Com isso o H1 que tiver a classe “titulo” terá a cor vermelha, por essa regra ser mais especifica.

A aplicação de estilos no CSS são do mais especifico para o menos especifico:

1. Estilos inline;
2. Ids;
3. Classes, pseudoclasses e atributos;
4. Elementos e pseudo elementos.

Existe uma regra para calcularmos a especificidade de uma regra CSS.

A especificidade é definida pelas contagens de Ids –classes e afins –elementos e afins.

Por exemplo:
```
h1 // 001 –possui 0 Ids, 0 classes e 1 elemento
h1.titulo // 011 possui 0 Ids, 1 classe e 1 elemento
```
A segunda seleção é mais especifica pois 011 é maior que 001.

Existe uma exceção na especificidade, que é o uso da palavra ``!importante`` logo após o valor da propriedade, por exemplo:
```
h1 { color: red! importante; }
h1.titulo { color: blue; }
```

Neste exemplo a primeira regra será aplicada, por possuir o ``!importante``.

Porém isso é uma má prática que deve ser evitada e contornada com a escrita de um código CSS escalável e de boa manutenibilidade.

Você pode acessar uma ferramenta que auxilia no cálculo da especificidade de um seletor clicando aqui.

<br>

### Como o navegador entende o seletor CSS
**O navegador lê um seletor CSS da direita para a esquerda, leve em consideração o seletor: nava.**

Como a leitura é feita da direita para à esquerda, primeiro o navegador irá selecionar todos os elementos A que existirem na página, após isso ele irá filtrar por aqueles que estiverem dentro do elemento NAV.

Pode existir centenas de links na página e o navegador irá verificar cada um deles para ver se estão dentro do elemento NAV, isso faz com que o nosso seletor não seja performático.

**A melhor abordagem seria criar uma classe .nav-link e aplica-la aos elementos que desejamos estilizar**. Assim o navegador terá que verificar menos elementos no documento, sendo mais performático.

<br>

### Link
- https://specificity.keegan.st/

<br>

## ✅ Questionário
Qual dos seletores a seguir é menos performático?

A- header .nav-link

B- nav a

C- header nav ul li a

D- .nav-link 

Resposta: O seletor menos performático é o C- header nav ul li a. Isso porque ele é o mais específico e tem mais níveis de profundidade, o que significa que o navegador terá que fazer mais trabalho para encontrar os elementos correspondentes na página.