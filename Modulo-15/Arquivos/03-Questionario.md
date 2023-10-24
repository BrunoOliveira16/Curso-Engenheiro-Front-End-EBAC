# 📌 Questionário
> Módulo 15: Introdução ao SASS

<br>

### Pergunta 1
#### Através de qual comando acessamos o NodeJS pelo terminal?
A- nodejs

B- start nodejs

C- node

D- run node

<details>
    <summary>Resposta</summary>

    node
    
    A resposta correta é "node". Com esse comando, podemos executar arquivos JavaScript, interagir com o ambiente NodeJS e executar comandos no console.
</details>

<br>

### Pergunta 2
#### Como informamos ao Git que determinada pasta ou arquivo não deve ser versionada?
A- Executando o comando git ignore NOME_DA_PASTA_OU_ARQUIVO

B- Inserindo o nome da pasta ou arquivo no arquivo .gitignore

C- Executando o comando git remove NOME_DA PASTA_OU_ARQUIVO

D- Inserindo o nome da pasta ou arquivo no arquivo .gitexclude

<details>
    <summary>Resposta</summary>
    
    Inserindo o nome da pasta ou arquivo no arquivo .gitignore
    
    A resposta correta é "Inserindo o nome da pasta ou arquivo no arquivo .gitignore". Para informar ao Git que uma determinada pasta ou arquivo não deve ser versionado, devemos inserir o nome dessa pasta ou arquivo no arquivo ".gitignore". O arquivo ".gitignore" é um arquivo de texto onde podemos listar os padrões de nomes de arquivos e pastas que o Git deve ignorar ao versionar o código.
</details>

<br>


### Pergunta 3
#### Como declaramos uma variável no SASS?
A- var NOME_DA_VARIAVEL = VALOR;

B- $NOME_DA_VARIAVEL = VALOR;

C- $NOME_DA_VARIAVEL: VALOR;

D- var NOME_DA_VARIAVEL: VALOR;

<details>
    <summary>Resposta</summary>
    
    $NOME_DA_VARIAVEL: VALOR;

    A resposta correta é "$NOME_DA_VARIAVEL: VALOR;". No SASS, as variáveis são declaradas usando o símbolo "$" seguido pelo nome da variável, dois pontos ":" e, em seguida, o valor que você deseja atribuir à variável. Esta é a sintaxe padrão para a declaração de variáveis no SASS, e é a forma correta de fazê-lo de acordo com a documentação oficial do SASS.
</details>

<br>

### Pergunta 4
#### Como podemos importar arquivos no SASS?
A- import 'arquivo.sass'

B- require 'arquivo.sass'

C- @use 'arquivo'

D- _ @require 'arquivo'

<details>
    <summary>Resposta</summary>
    
    @use 'arquivo'

    A resposta correta é @use 'arquivo'. Essa é uma forma mais atual de importar arquivos no SASS e é usada principalmente para importar módulos, que podem conter variáveis, funções e mixins. Esta é a abordagem recomendada para organizar o código SASS em módulos e é a que segue as melhores práticas mais recentes. O modo @import 'arquivo'; é uma forma válida e amplamente usada para importar arquivos SASS. Mas ela é mais antiga e é usada principalmente para importar estilos.
</details>

<br>

### Pergunta 5
#### Qual é a função dos mixins?
A- Criar um código CSS já otimizado para responsividade

B- Agrupar as variáveis do SASS num mesmo contexto

C- Facilitar a importação de estilos externos

D- Criar regras CSS que podem ser reaproveitadas

<details>
    <summary>Resposta</summary>
    
    Criar regras CSS que podem ser reaproveitadas

    A resposta correta é "Criar regras CSS que podem ser reaproveitadas." Essa é a principal função dos mixins no SASS. Eles permitem definir um conjunto de estilos que podem ser incluídos em diversas classes ou seletores, o que proporciona maior modularidade e reutilização do código CSS.
</details>

<br>

### Pergunta 6
#### Qual é a sintaxe básica para criar uma função no SASS?
A- function nomeDaFuncao() { return 10px }

B- @function nomeDaFuncao() { @return 10px }

C- $function nomeDaFuncao() { $return 10px }

D- function nomeDaFuncao() { @return 10px }

<details>
    <summary>Resposta</summary>
    
    @function nomeDaFuncao() { @return 10px }

    A resposta correta é "@function nomeDaFuncao() { @return 10px }". Essa é a sintaxe correta para criar uma função no SASS é utilizar "@function" seguido do nome da função e os parênteses "()", e dentro do bloco de código da função, utilizamos "@return" para retornar um valor.
</details>

