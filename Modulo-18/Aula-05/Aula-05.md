## 📝 Aula 05: Iniciando um projeto com o Grunt
Nesta aula iniciamos o projeto sorteador de números com o Grunt e iremos desenvolver ele ao longo das aulas do módulo.

Todos os arquivos estão na pasta ``projeto-sorteador``.

Arquivo gruntfile.js desenvolvido:
```
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);
}
```
Neste exemplo configuramos o plugin grunt-contrib-less para compilar arquivos LESS. O arquivo define duas tarefas, development e production, que especificam como os arquivos LESS devem ser compilados para cada ambiente.

Na seção less, o target development especifica que o arquivo src/styles/main.less deve ser compilado para o arquivo dev/styles/main.css. O target production especifica que o mesmo arquivo LESS deve ser compilado para o arquivo dist/styles/main.min.css, com a opção de compressão ativada.

O arquivo também define duas tarefas registradas, default e build. A tarefa default executa a tarefa less:development, enquanto a tarefa build executa a tarefa less:production. Isso permite que você execute diferentes tarefas de compilação LESS para diferentes ambientes, usando os comandos grunt e grunt build.


<br>

### ✅ Questionário
Como podemos separar os arquivos tratados pelo Grunt, por exemplo, os arquivos compilados pelo LESS.

A- Nenhuma das opções

B- Através dos targets podemos separar a configuração de um plugin entre os ambientes

C- Através da função grunt.dest("/dist") podemos enviar os arquivos para a pasta dist

D- Através da função grunt.target("dist") podemos enviar os arquivos para a pasta dist

Resposta: A resposta correta é a opção B. Através dos targets, podemos separar a configuração de um plugin entre os ambientes. Isso permite que você especifique diferentes configurações para diferentes ambientes, como desenvolvimento, teste e produção. Por exemplo, você pode ter um target para compilar arquivos LESS para o ambiente de desenvolvimento e outro target para compilar arquivos LESS para o ambiente de produção.