# 📌 Questionário
> Módulo 16: Automatize tarefas com Gulp

<br>

### Pergunta 1
#### Qual é o arquivo principal do Gulp, utilizado para escrever as automações?
A- grunfile.js

B- gulpfile.js

C- package.json

D- gulpfile.json

<details>
    <summary>Resposta</summary>

    gulpfile.js
    
    A resposta correta é "gulpfile.js". Quando você executa comandos Gulp, o Gulp procura automaticamente um arquivo com esse nome no diretório do seu projeto para encontrar as tarefas de automação que você definiu. Essa é uma convenção amplamente adotada pela comunidade Gulp e ajuda a manter a consistência nos projetos que utilizam essa ferramenta de automação.
</details>

<br>

### Pergunta 2
#### Como criamos uma tarefa privada no Gulp?
A- Colocando a palavra "private" antes de iniciar a escrita da função.

B- Escrevendo uma função JavaScript e não exportando-a.

C- Escrevendo uma função JavaScript e exportando-a.

D- Colocando a palavra internal antes de iniciar a escrita da função.

<details>
    <summary>Resposta</summary>
    
    Escrevendo uma função JavaScript e não exportando-a.
    
    A resposta correta é "Escrevendo uma função JavaScript e não exportando-a.". Isso significa que a função não é acessível diretamente através da linha de comando do Gulp, tornando-a privada para o sistema de tarefas. A exportação da função tornaria a tarefa pública e acessível por meio da linha de comando do Gulp. Portanto, para criar uma tarefa privada, você escreve a função e a mantém local no escopo do arquivo de configuração do Gulp, não a exportando para que não possa ser chamada diretamente.
</details>

<br>


### Pergunta 3
#### Sobre as tarefas em série é correto afirmar que:
A- Uma tarefa será executada após o início da tarefa anteriormente informada

B- As tarefas serão executadas simultaneamente

C- Uma tarefa será executada logo após o termino da tarefa anterior

D- Para executar as tarefas em série precisamos executar o comando "npm run gulp serial"

<details>
    <summary>Resposta</summary>
    
    Uma tarefa será executada logo após o termino da tarefa anterior

    A afirmação correta sobre as tarefas em série é "Uma tarefa será executada logo após o término da tarefa anterior". As tarefas em série são executadas em sequência, uma após a outra, de forma ordenada, não simultaneamente. Para executar tarefas em série no Gulp, não é necessário utilizar o comando "npm run gulp serial". A ordem de execução é definida na configuração das tarefas no arquivo Gulpfile.js.
</details>

<br>

### Pergunta 4
#### Sobre as tarefas em paralelo é correto afirmar que:
A- O Gulp irá aguardar todo o processamento de uma tarefa antes de iniciar outra

B- Para executar as tarefas em paralelo precisamos executar o comando "npm run gulp parallel"

C- Todas as tarefas serão iniciadas no mesmo momento

D- Para criar tarefas em paralelo no Gulp precisamos instalar o pacote gulp-parallel-tasks

<details>
    <summary>Resposta</summary>
    
    Todas as tarefas serão iniciadas no mesmo momento

    A opção correta é "Todas as tarefas serão iniciadas no mesmo momento" porque, ao executar tarefas em paralelo no Gulp, todas as tarefas especificadas serão iniciadas simultaneamente, sem esperar que uma tarefa termine antes de iniciar a próxima. Isso permite que o Gulp maximize a eficiência ao processar várias tarefas de forma concorrente, o que pode melhorar significativamente o desempenho da automação de tarefas.
</details>

<br>

### Pergunta 5
#### Como exportamos uma tarefa que irá ficar observando as modificações dos arquivos?
A- exports.observer = function() { gulp.watch('ARQUIVOS', ['TAREFA']); }

B- exports.watch = function() { gulp.watcher('ARQUIVOS', ['TAREFA']); }

C- exports.watch = function() { gulp.load('ARQUIVOS', ['TAREFA']); }

D- exports.watch = function() { gulp.watch('ARQUIVOS', ['TAREFA']); }

<details>
    <summary>Resposta</summary>
    
    exports.watch = function() { gulp.watch('ARQUIVOS', ['TAREFA']); }

    A opção correta é "exports.watch = function() { gulp.watch('ARQUIVOS', ['TAREFA']); }" porque ela usa a função gulp.watch do Gulp, que é projetada especificamente para observar modificações em arquivos e acionar tarefas quando essas modificações ocorrem.
</details>

<br>

### Pergunta 6
#### Qual foi o plugin do Gulp utilizado para a minificação de JavaScript?
A- uglify

B- gulp-uglify

C- gulp-compress

D- gulp-minify

<details>
    <summary>Resposta</summary>
    
    gulp-uglify

    O plugin do Gulp utilizado para a minificação de JavaScript é chamado de "gulp-uglify" porque ele faz parte da comunidade de plugins do Gulp e é especificamente projetado para realizar a tarefa de minificação, que envolve a redução do tamanho de arquivos JavaScript, removendo espaços em branco, caracteres de formatação e até mesmo renomeando variáveis para economizar espaço. O nome "uglify" é uma referência à ação de tornar o código JavaScript "feio" (ugly) para os humanos, mas mais eficiente em termos de tamanho e desempenho para o navegador ou ambiente em que será executado.
</details>

