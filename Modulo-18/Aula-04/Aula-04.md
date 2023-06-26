## 📝 Aula 04: Executando tarefas de forma paralela
Você pode usar o plugin grunt-concurrent para executar tarefas do Grunt de forma paralela.

Para instalar este plugin, você pode usar o comando:
```
npm install --save-dev grunt-concurrent
```

Depois de instalar o plugin, você pode habilitá-lo em seu arquivo ``Gruntfile.js`` com a linha ``grunt.loadNpmTasks('grunt-concurrent')``. Você pode então configurar as opções do plugin e definir as tarefas que deseja executar de forma paralela.

Segue um exemplo abaixo no nosso arquivo:
```
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        concurrent: {
            target: ['less', 'sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent']);
}
```
No código acima usamos os plugins ``grunt-contrib-less``, ``grunt-contrib-sass`` e ``grunt-concurrent`` para compilar arquivos LESS e SASS em CSS de forma paralela. O código define uma tarefa chamada ``target`` que é configurada para executar as tarefas less e sass de forma paralela.

O plugin ``grunt-concurrent`` é carregado com a linha ``grunt.loadNpmTasks('grunt-concurrent')``. A tarefa padrão é definida para executar a tarefa ``concurrent``, que por sua vez executará a tarefa ``target`` definida na configuração do plugin.

Quando você executa o comando grunt, a tarefa padrão é executada e, portanto, as tarefas less e sass são executadas de forma paralela.

<br>

### ✅ Questionário
Sobre a execução de tarefas em paralelo é correto afirmar que:

A- São possíveis através do plugin grunt-concurrent

B- São configuradas através da função grunt.parallel()

C- São possíveis através do plugin grunt-parallel

D- São configuradas através da função grunt.concurrent()

Resposta: Letra A.