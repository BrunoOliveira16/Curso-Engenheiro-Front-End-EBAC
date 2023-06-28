## 📝 Aula 09: Comprimindo JavaScript com o Grunt
Nesta aula, foi adicionada uma nova seção uglify que configura o plugin grunt-contrib-uglify. Este plugin é usado para comprimir código JavaScript.

Na seção replace, foi adicionado um novo padrão de substituição no target dev que especifica que a string ENDERECO_DO_JS no arquivo src/index.html deve ser substituída por '../src/scripts/main.js'. No target dist, foi adicionado um novo padrão de substituição que especifica que a mesma string no arquivo prebuild/index.html deve ser substituída por './scripts/main.min.js'.

Na seção uglify, é definido um target que especifica que o arquivo src/scripts/main.js deve ser comprimido e salvo como dist/scripts/main.min.js.

Além disso, a tarefa registrada build foi alterada para incluir a tarefa uglify. Isso significa que, quando você executa o comando grunt build, a tarefa de compressão de código JavaScript é executada automaticamente, além das outras tarefas de compilação LESS, minificação HTML, substituição de conteúdo e limpeza de arquivos temporários.

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
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            taget: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}
```

<br>

### ✅ Questionário
Qual plugin utilizamos para comprimir código JavaScript no Grunt?

A- grunt-contrib-compress-js

B- grunt-contrib-uglify

C- grunt-compress-js

D- grunt-uglify

Resposta: A resposta correta é a opção B. O plugin grunt-contrib-uglify é usado para comprimir código JavaScript no Grunt. Ele remove espaços em branco, comentários e outros caracteres desnecessários do código JavaScript para reduzir seu tamanho e melhorar o tempo de carregamento. O plugin grunt-contrib-uglify é útil para otimizar o desempenho de aplicações web.