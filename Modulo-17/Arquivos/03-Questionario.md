# 📌 Questionário
> Módulo 17: Introdução ao LESS

<br>

### Pergunta 1
#### Através de qual comando compilamos o código LESS?
A- less origem.less destino.css

B- lessc destino.css origem.less

C- lessc origem.less destino.css

D- less destino.css origem.less

<details>
    <summary>Resposta</summary>

    lessc origem.less destino.css
    
    A opção correta é "lessc origem.less destino.css". Esse comando para compilar código LESS segue a sintaxe padrão do LESS, onde origem.less é o arquivo LESS que você deseja compilar e destino.css é o nome do arquivo de saída que conterá o código CSS gerado a partir do código LESS. Essa é a ordem típica dos argumentos em comandos de compilação: primeiro você especifica o arquivo de origem e depois o arquivo de destino. Portanto, o comando deve refletir essa ordem para funcionar corretamente.
</details>

<br>

### Pergunta 2
#### Como declaramos uma variável no LESS?
A- $corPrincipal: ``#eee``;

B- #corPrincipal: ``#eee``;

C- var corPrincipal: ``#eee``;

D- @corPrincipal: ``#eee``;

<details>
    <summary>Resposta</summary>
    
    @corPrincipal: ``#eee``
    
    A declaração correta de uma variável no LESS segue a convenção de usar "@" antes do nome da variável. Isso é uma convenção de sintaxe na linguagem LESS para diferenciar variáveis de outros elementos CSS, como seletores e propriedades. Ao utilizar o símbolo "@", o LESS reconhece que você está criando uma variável e a associa ao valor especificado. Essa sintaxe ajuda a tornar o código mais legível e facilita a manutenção do código, uma vez que você pode reutilizar o valor da variável em vários lugares do seu código LESS.
</details>

<br>


### Pergunta 3
#### Sobre os escapings é correto afirmar:
A- São utilizados para reaproveitar propriedades de estilo.

B- São utilizados para armazenar strings em variáveis e utilizá-las no arquivo LESS.

C- São recursos introduzidos no CSS3.

D- São utilizados para otimizar o tamanho do arquivo CSS final.

<details>
    <summary>Resposta</summary>
    
    São utilizados para armazenar strings em variáveis e utilizá-las no arquivo LESS.

    A alternativa correta "São utilizados para armazenar strings em variáveis e utilizá-las no arquivo LESS." Em LESS, os escapings são utilizados para armazenar strings (sequências de caracteres) em variáveis. Com isso, é possível reutilizar essas strings em várias partes do arquivo LESS, facilitando a manutenção e a escrita do código. O escaping é representado pelo símbolo "~" seguido da string a ser armazenada em uma variável.
</details>

<br>

### Pergunta 4
#### Sobre os mixins é correto afirmar:
A- São escritos utilizando a sintaxe @mixin nomeDoMixin()

B- São escritos utilizando a sintaxe .nomeDoMixin ou .nomeDoMixin()

C- São escritos utilizando a sintaxe #mixin nomeDoMixin()

D- São escritos utilizando a sintaxe @nomeDoMixin()

<details>
    <summary>Resposta</summary>
    
    São escritos utilizando a sintaxe .nomeDoMixin().

    A resposta correta é "São escritos utilizando a sintaxe .nomeDoMixin()." Como apresentado na aula, mixins são definidos usando a notação de ponto, o nome do mixin. Os mixins permitem reutilizar e compartilhar blocos de código CSS em várias partes de um projeto. São especialmente úteis para evitar a duplicação de código e para criar estilos consistentes em um site ou aplicativo da web.
</details>

<br>

### Pergunta 5
#### Sobre os maps é correto afirmar:
A- É um tipo de dado chave-valor

B- É um tipo de dado coleção

C- É um tipo de dado objeto

D- É um tipo de dado numérico

<details>
    <summary>Resposta</summary>
    
    É um tipo de dado chave-valor

    A resposta correta é" É um tipo de dado chave-valor". Os maps no LESS são uma estrutura de dados que associa chaves (nomes) a valores, funcionando como um dicionário de pares chave-valor.
</details>

<br>

### Pergunta 6
#### Como fazemos o consumo de um dado armazenado em um map?
A- #cores.get(˜corPrincipal˜)

B- #cores(˜corPrincipal˜)

C- #cores.corPrincipal

D- #cores[corPrincipal]

<details>
    <summary>Resposta</summary>
    
    #cores[corPrincipal]

    A resposta correta é"#cores[corPrincipal]", pois essa é a forma correta de consumir um dado armazenado em um map porque nos mapas do LESS, os valores são acessados usando colchetes []. Quando você quer acessar um valor específico dentro de um mapa, você usa o nome do mapa seguido pelos colchetes contendo a chave (neste caso, corPrincipal) para acessar o valor associado a essa chave dentro do mapa. Por exemplo, se você tiver um mapa chamado cores e quiser acessar o valor associado à chave corPrincipal, você fará isso da seguinte maneira: #cores[corPrincipal].
</details>

