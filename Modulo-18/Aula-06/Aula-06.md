## 📝 Aula 06: Observando mudanças com o Grunt
Todos os arquivos estão na pasta ``projeto-sorteador``.

Nesta aula foi adicionada uma nova seção watch que configura o plugin grunt-contrib-watch. Este plugin monitora alterações em arquivos especificados e executa tarefas quando esses arquivos são modificados.

Na seção watch, o target less especifica que o plugin deve monitorar todos os arquivos com a extensão .less no diretório src/styles e seus subdiretórios. Quando um desses arquivos é modificado, a tarefa less:development é executada automaticamente.

Além disso, a tarefa registrada default foi alterada para executar a tarefa watch em vez de less:development. Isso significa que, quando você executa o comando grunt, o plugin grunt-contrib-watch é iniciado e começa a monitorar alterações nos arquivos LESS especificados. Quando um desses arquivos é modificado, a tarefa less:development é executada automaticamente para compilar os arquivos LESS.

Arquivo atualizado:
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
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);
}
```

Agora ao executar o comando abaixo no terminal, qualquer alteração nos arquivos less será automaticamente compilada:
```
npm run grunt
```

<br>

### ✅ Questionário
Como podemos fazer com que o Grunt fique assistindo as alterações nos arquivos e execute as tarefas automaticamente?

A- Através do uso do plugin grunt-contrib-live

B- Através da função grunt.watch() informando as tarefas como argumento da função

C- Através da função grunt.watch() informando os arquivos como argumento da função

D- Através do uso do plugin grunt-contrib-watch

Resposta: A resposta correta é a opção D. Você pode usar o plugin grunt-contrib-watch para fazer com que o Grunt fique assistindo as alterações nos arquivos e execute tarefas automaticamente. Este plugin monitora alterações em arquivos especificados e executa tarefas quando esses arquivos são modificados. Você pode configurar o plugin grunt-contrib-watch no seu arquivo Gruntfile.js, especificando quais arquivos devem ser monitorados e quais tarefas devem ser executadas quando esses arquivos são modificados.