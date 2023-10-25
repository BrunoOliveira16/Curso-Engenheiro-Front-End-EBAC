# 📌 Glossário
> Módulo 16: Automatize tarefas com Gulp

<br>

## Configure o Gulp
### ✔ Gulp (Engolir)
A palavra "gulp" é um trocadilho com o ato de “engolir” as tarefas de automação. Utiliza uma sintaxe baseada em JavaScript e é construído em torno do conceito de "fluxo" (stream). Ele permite que os desenvolvedores definam tarefas personalizadas que manipulam arquivos e executam ações como concatenação, minificação, transpilação, recarregamento do navegador, entre outras. 

<br>

## Crie tarefas
### ✔ ES Modules
Também conhecido como ECMAScript Modules ou ES6 Modules. É um para importação e exportação de módulos em JavaScript. Fornecem uma maneira nativa de modularizar o código JavaScript, permitindo que você separe seu código em arquivos diferentes e importe/exporte partes específicas conforme necessário. Isso facilita a organização, reutilização e manutenção do código em projetos complexos.

<br>

## Execute tarefas em série
### ✔ gulp.series
Função do Gulp que permite criar uma sequência de tarefas em série. Ela recebe uma lista de nomes de tarefas como argumentos e retorna uma nova função que pode ser usada como uma tarefa. 

<br>

## Execute tarefas em paralelo
### ✔ gulp.parallel 
Função do Gulp que permite criar uma sequência de tarefas que serão executadas simultaneamente. Recebe uma lista de nomes de tarefas como argumentos e retorna uma nova função que pode ser usada como uma tarefa.

<br>

## Use Gulp para compilar o SASS
### ✔ gulp.dest
Função usada no Gulp para definir o destino (ou diretório de saída) dos arquivos processados por uma tarefa. Ela indica para onde os arquivos devem ser salvos após passarem por um ou mais pipes (encadeamento de tarefas). 

### ✔ Pipe
No Gulp essa função é usada para encadear tarefas e direcionar o fluxo de dados entre elas. Ela permite que você execute várias operações em um arquivo ou conjunto de arquivos, passando-os sequencialmente de uma tarefa para outra. É chamada em um objeto stream retornado pela tarefa anterior. Cada chamada de pipe() representa uma etapa no processamento dos arquivos.

### ✔ Source maps (Mapas de origem) 
São arquivos que mapeiam o código minificado ou transpilado de volta para o código original, facilitando a depuração e a inspeção do código durante o desenvolvimento. Para usar no Gulp, instale o pacote gulp-sourcemaps.

<br>

## Minifique JS com o Gulp
### ✔ Obfuscação
É o ato de tornar o arquivo JavaScript ilegível por motivos de segurança, no qual você dificulta a leitura dos códigos. Para isso, instale o plugin gulp-obsfuscate e importe-o para o arquivo de configuração do gulp.