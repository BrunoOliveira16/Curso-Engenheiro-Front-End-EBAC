## 📝 Aula 03: Usando Grunt para compilar LESS
### Compilando LESS
Você pode usar o Grunt para compilar arquivos LESS em CSS usando o plugin ``grunt-contrib-less``.

Para instalar este plugin, você pode usar o comando:
```
npm install --save-dev grunt-contrib-less
```

Depois de instalar o plugin, você pode habilitá-lo em seu arquivo ``Gruntfile.js`` com a linha ``grunt.loadNpmTasks('grunt-contrib-less')``. Você pode então configurar as opções do plugin e definir as tarefas para compilar seus arquivos LESS.

Exemplo:
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
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
}
```
Este é um exemplo de um arquivo ``Gruntfile.js`` que usa o plugin ``grunt-contrib-less`` para compilar arquivos LESS em CSS. O código define duas tarefas para compilar o arquivo ``main.less`` em dois arquivos CSS diferentes: ``main.css`` e ``main.min.css``.

A primeira tarefa é chamada ``development`` e compila o arquivo ``main.less`` em ``main.css``. A segunda tarefa é chamada ``production`` e compila o arquivo ``main.less`` em ``main.min.css``, com a opção de compressão ativada para reduzir o tamanho do arquivo.

O plugin ``grunt-contrib-less`` é carregado com a linha ``grunt.loadNpmTasks('grunt-contrib-less')``. A tarefa padrão é definida para executar a tarefa less, que por sua vez executará ambas as tarefas de compilação definidas na configuração do plugin.

Quando você executa o comando grunt, a tarefa padrão é executada e, portanto, ambas as tarefas de compilação são executadas.

<br>

### Compilando SASS
Você pode usar o Grunt para compilar arquivos SASS em CSS usando o plugin grunt-contrib-sass. 

Para instalar este plugin, você pode usar o comando:
```
npm install --save-dev grunt-contrib-sass
```
Depois de instalar o plugin, você pode habilitá-lo em seu arquivo Gruntfile.js com a linha ``grunt.loadNpmTasks('grunt-contrib-sass')``. Você pode então configurar as opções do plugin e definir as tarefas para compilar seus arquivos SASS.

Exemplo:
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['less', 'sass']);
}
```
Dando continuidade no arquivo Gruntfile.js, adicionamos agora o plugin ``grunt-contrib-sass`` para compilar arquivos SASS em CSS. O código define uma tarefa para compilar o arquivo ``main.scss`` em um arquivo CSS chamado ``main2.css``.

A tarefa é chamada ``dist`` e está configurada para compilar o arquivo ``main.scss`` em ``main2.css``, com a opção de estilo definida como ``compressed`` para reduzir o tamanho do arquivo.

O plugin ``grunt-contrib-sass`` é carregado com a linha ``grunt.loadNpmTasks('grunt-contrib-sass')``. A tarefa padrão é definida para executar as tarefas less e sass, que por sua vez executarão as tarefas de compilação definidas na configuração dos plugins.

Quando você executa o comando grunt, a tarefa padrão é executada e, portanto, ambas as tarefas de compilação são executadas.

<br>

### ✅ Questionário
Qual função utilizamos para carregar um plugin no Grunt?

A- grunt.import("nomeDoPlugin")

B- grunt.loadNpmTasks("nomeDoPlugin")

C- grunt.load("nomeDoPlugin")

D- grunt.loadPlugin("nomeDoPlugin")

Resposta: Letra B.