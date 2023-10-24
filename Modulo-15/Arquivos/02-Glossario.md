# 📌 Glossário
> Módulo 15: Introdução ao SASS

<br>

## Conheça o Node
### ✔ Node.js
É um ambiente de execução de código JavaScript do lado do servidor. Permite que você execute código JavaScript fora do navegador, o que significa que você pode criar aplicativos e servidores web completos usando JavaScript como linguagem de programação tanto no front-end quanto no back-end. Utiliza o mecanismo V8, desenvolvido pelo Google, que é um interpretador de JavaScript de alto desempenho.

### ✔ NPM (Node Package Manager)
É o gerenciador de pacotes padrão para o ecossistema do Node.js. É uma ferramenta que permite aos desenvolvedores instalar, compartilhar, atualizar e gerenciar as dependências dos projetos em JavaScript. É executado na linha de comando e é instalado automaticamente junto com o Node.js. Fornece acesso aum vasto repositório de pacotes de código aberto mantidos pela comunidade do Node.js. Esses pacotes podem ser bibliotecas, frameworks, utilitários e outras ferramentas que podem ser utilizadas para desenvolver aplicações em JavaScript.

### ✔ SASS (Syntactically Awesome Style Sheets)
Pré-processadorCSS. São linguagemde extensãodo CSS que adicionarecursose funcionalidadesaodesenvolvimentode estilospara páginasweb. É um compilado emCSS usandoumaferramenta de linha de comandoouumatarefade compilaçãoautomatizadaduranteo processode desenvolvimento. O resultado é um arquivoCSS padrãoque podeser interpretadopelosnavegadores. S

<br>

## Aprenda a sintaxe de SASS e SCSS
### ✔ Input (Entrada)
Refere-se ao arquivo de entrada no SASS que é geralmente um arquivo com a extensão .scss ou .sass que contém o código SASS. Esse arquivo é escrito em sintaxe SASS ou SCSS e pode conter variáveis, mixins, aninhamento e outras funcionalidades do SASS. É o arquivo onde você escreve seu código SASS para estilizar seu projeto.

### ✔ Highlight
Termo comumente usado para descrever a aplicação de destaque visual a determinados elementos ou partes de um siteou aplicativo.

### ✔ npm i
Abreviação de npm install. Comando usado no Node.js para instalar as dependências de um projeto. Quando você executa esse comando, o NPM (Node Package Manager) irá ler o arquivo package.json do seu projeto e instalar todas as dependências listadas nele.

### ✔ npm init
Comando usado no Node.js para iniciar o processo de criação de um novo projeto e gerar o arquivo package.json. Ao executar o comando npm init, será solicitado fornecer informações sobre o projeto, como nome, versão, descrição, ponto de entrada do aplicativo, autor, licença, entre outros detalhes. Essas informações serão usadas para gerar o arquivo package.json.

### ✔ npm run sass
Comando personalizado definido no arquivo package.json de um projeto que utiliza o Node Package Manager (NPM) para executar uma tarefa específica relacionada ao SASS. Ele procura no arquivo package.json por uma seção chamada "scripts" e procura um script chamado "sass" dentro dela. Em seguida, ele executa o comando associado aesse script.

### ✔ Output (Saída)
Refere-se ao arquivo de saída que é o resultado da compilação do código SASS em CSS. Ele geralmente tem aextensão .css e contém o código CSS convertido do código SASS. O arquivo de saída é o arquivo que onavegador lê e aplica aos elementos HTML para estilizar o conteúdo da página.

### ✔ Sintaxe 
No contexto do SASS, a palavra "sintaxe" refere-se à estrutura, regras e convenções de escrita que devem ser seguidas ao escrever código em SASS. A sintaxe define como as declarações de estilo, seletores, propriedades e valores devem ser organizados e formatados para que o código seja interpretado corretamente pelo compilador SASS.

<br>

## Declare variáveisno SASS
### ✔ --watch
É uma opção de linha de comando que pode ser passada para executar comandos relacionados ao gerenciamento e monitoramento de alterações de arquivos em tempo real.

### ✔ & (comercial) 
Esse símbolo no SASS é conhecido como "parent selector" ou "seletor pai" e é usado para fazer referência ao seletor pai no contexto de aninhamento de regras. Quando você usa o símbolo em uma regra no SASS, ele é substituído pelo seletor pai atual, permitindo que você crie seletores mais específicos e evite repetições de código.

### ✔ Encapsulamento de regras
Agrupar seletivamente as regras de estilo em blocos, com o objetivo de limitar o escopo e evitar conflitos de estilos indesejados. Ao aninhar as regras de estilo, você cria um escopo específico para as propriedades e os seletores relacionados. Isso ajuda a evitar a poluição do escopo global e permite que você trabalhe com hierarquia mais clara e organizada.

### ✔ Source ou src (fonte) 
É uma convenção comumente utilizada criar uma pasta com esse nome para armazenar os arquivos de entrada do SASS, os arquivos SASS originais antes da compilação em arquivos CSS. 

### ✔ Variáveis
São recursos que permitem armazenar valores reutilizáveis para uso posterior em seu código CSS. Em vez de repetir os valores várias vezes em diferentes partes do código, você pode atribuir um valor a uma variável e usar essa variável em todo o seu código, facilitando a manutenção e a atualização dos estilos. Para definir uma variável no SASS, utiliza-se o símbolo $ seguido pelo nome da variável e o valor desejado.

<br>

## Crie módulos
### ✔ @use
É uma diretiva do SASS que é usada para importar módulos (ou arquivos parciais) em um arquivo SASS. O uso do @use traz algumas melhorias em relação ao @import e é recomendado para projetos SASS mais modernos.

<br>

## Reutilize códigocom mixins
### ✔ @include
Função diretiva que permite incluir mixins em um arquivo SASS. É usado para chamar um mixin específico e passar os argumentos necessários (valores fixos ou variáveis SASS), se houver.

### ✔ Calc
Função matemática incorporada que permite realizar cálculos aritméticos durante a compilação do código SASS para CSS. Ela é semelhante à função calc() do CSS, mas com a vantagem de poder usar variáveis e expressões SASS em seus argumentos.

### ✔ Mixins
É umafuncionalidadeque permite reutilizarblocosde códigoCSS em váriosseletoresoudeclarações. São semelhantesa funções, mas emvezde retornarum valor, elesgeramum bloco de estilosCSS que podeser incorporado emoutrasregrasde estilo. São úteis quandovocêtemum conjunto de propriedadesCSS que desejaaplicara diferentesseletoresouquandoprecisa compartilharestiloscomunsentre váriaspartesdo seucódigo.

<br>

## Use funçõese operadores
### ✔ Darken
Função de manipulação de cores que permite escurecer uma cor existente. Ela aceita dois argumentos: a cor original e a quantidade de escurecimento desejada.

### ✔ Lighten
É uma função de manipulação de cores que permite clarear uma cor existente. Ela aceita dois argumentos: a cor original e a quantidade de clareamento desejada.

### ✔ Módulo math
É um módulo incorporado do SASS que fornece funções matemáticas para realizar cálculos durante a compilação do código SASS para CSS.