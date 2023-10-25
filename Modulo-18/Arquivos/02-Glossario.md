# 📌 Glossário
> Módulo 18: Automatize tarefas com Grunt

<br>

## Configure o Grunt
### ✔ CLI (Command Line Interface Interface da Linha de comando)
É uma forma de interagir com um computador ou sistema operacional por meio de comandos de texto inseridos em um terminal ou prompt de comando. Permite que os usuários enviem comandos diretamente ao sistema operacional ou a um programa específico por meio do teclado. Você digita comandos específicos, seguidos de argumentos opcionais, e pressiona enter para executá-los. 

### ✔ Grunt
A palavra "grunt" refere-se ao som gutural que um javali faz. O nome foi escolhido para transmitir a ideia de que o Grunt é uma ferramenta robusta e poderosa que executa tarefas de construção (build) e automação de forma eficiente.

<br>

## Crie tarefas
### ✔ Done
Ao chamar this.async() dentro de uma tarefa do Grunt, você cria uma função de retorno que deve ser chamada quando a tarefa assíncrona for concluída. Essa função de retorno, geralmente chamada de done, é usada para sinalizar ao Grunt que a tarefa assíncrona terminou e que o Grunt pode continuar sua execução.

### ✔ This.async
É uma função fornecida pelo Grunt para lidar com tarefas assíncronas. Quando uma tarefa precisa executar operações assíncronas, como chamadas a APIs externas, acesso a bancos de dados, leitura/gravação de arquivos, entre outras, é necessário informar ao Grunt que a tarefa ainda está em andamento e não deve ser considerada como concluída imediatamente.

<br>

## Use Grunt para compilar LESS
### ✔ grunt-contrib-less
É um pluginpara o Grunt que permite compilar arquivos LESS em arquivos CSS. Acesse o link https://github.com/gruntjs/grunt-contrib-less para conhecer a documentação completa desse pacote.

### ✔ grunt-contrib-sass
É um pluginpara o Grunt que permite compilar arquivos SASS em arquivos CSS. Acesse o link https://github.com/gruntjs/grunt-contrib-sass para conhecer a documentação completa desse pacote.

<br>

## Execute tarefas de forma paralela
### ✔ grunt-concurrent
Esse pluginpermite que você defina e execute várias tarefas simultaneamente. Acesse o link https://github.com/sindresorhus/grunt-concurrent para conhecer mais sobre esse plugin.

<br>

## Inicie um projeto com o Grunt
### ✔ dist (distribuição)
Pasta comumente utilizada para armazenar os arquivos finais e otimizados da aplicação, prontos para serem implantados em um ambiente de produção. Você pode configurar tarefas para gerar esses arquivos otimizados e movê-los para a pasta "dist" durante o processo de construção. A estrutura e conteúdo específicos da pasta "dist" podem variar de acordo com o projeto e as necessidades.

<br>

## Observe mudanças com o Grunt
### ✔ grunt-contrib-watch 
Pluginque permite monitorar alterações em arquivos específicos e executar tarefas automaticamente sempre que ocorrerem mudanças. Isso é especialmente útil durante o desenvolvimento, pois evita que você precise executar manualmente as tarefas do Grunt a cada modificação nos arquivos. Acesso o link https://github.com/gruntjs/grunt-contrib-watch para conhecer mais sobre esse plugin.

<br>

## Observe mudanças com o Grunt
### ✔ grunt-replace
Plugin que permite substituir padrões de texto em arquivos durante o processo de construção. Ele é útil quando você precisa fazer substituições automáticas em arquivos, como atualizar URLs, substituir tokens ou modificar conteúdo dinamicamente. Acesse olink https://www.npmjs.com/package/grunt-replace para conhecer mais sobre esse plugin.

### ✔ grunt-contrib-htmlmin
Pluginque permite minificar arquivos HTML. Ele remove espaços em branco, comprime código CSS e JavaScript embutido, e realiza outras otimizações para reduzir o tamanho dos arquivos HTML e melhorar o desempenho do carregamento da página. Acesse o link https://www.npmjs.com/package/gruntcontrib-htmlminpara conhecer mais sobre esse plugin.

### ✔ grunt-contrib-clean
Plugindo Grunt que permite limpar (excluir) arquivos e diretórios durante o processo de construção. É útil quando você deseja remover arquivos temporários, arquivos gerados anteriormente ou limpar a pasta de destino antes de uma nova construção. Acesse o link https://www.npmjs.com/package/grunt-contribcleanpara conhecer mais sobre esse plugin.

<br>

## Conheça a JavaScript Math
### ✔ math.ceil
Função que arredonda um número para cimapara o próximo inteiro ou para a próxima casa decimal especificada. Essa função sempre retorna um valor do tipo “number”, mesmo que oargumento seja um número inteiro ou uma stringnumérica.

### ✔ math.floor
Função que arredonda um número para baixopara o próximo inteiro ou para a próxima casa decimal especificada. Essa função sempre retorna um valor do tipo “number”, mesmo que oargumento seja um número inteiro ou uma stringnumérica.

### ✔ math.round
Função matemática comum usada para arredondar um número para o inteiro mais próximo. Geralmente as regras padrão de arredondamento são: sea parte fracionária do número for menor que 0,5, o número é arredondado para baixo; se a parte fracionária for igual ou maior que 0,5, o número é arredondado para cima. O resultado arredondado é retornado como um número inteiro.

### ✔ parseInt
Função que converte uma string em um número inteiro. Ela analisa (faz o “parsing” “análise”) do valor fornecido como argumento e retorna um número inteiro com base nesse valor. Ela analisa a string da esquerda para a direita até encontrar um caractere que não seja um dígito válido na base numérica especificada. Ignora espaços em branco iniciais e para de analisar quando encontra um caractere não válido, em seguida, retorna o valor numérico resultante.

<br>

## Comprima JavaScript com o Grunt
### ✔ grunt-contrib-uglify
Pluginque ajuda a minificar e concatenar arquivos JavaScript. Ele é comumente usado em fluxos de trabalho de desenvolvimento web para otimizar o código JavaScript para ambientes de produção. Acesse o link https://github.com/gruntjs/grunt-contribuglifypara conhecer mais sobre esse plugin.

