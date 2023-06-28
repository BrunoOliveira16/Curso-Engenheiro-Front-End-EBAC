## 📝 Aula 07: Comprimindo HTML com o Grunt
Todos os arquivos estão na pasta ``projeto-sorteador``.

Nesta versão atualizada do arquivo ``Gruntfile.js``, foram adicionadas novas seções ``replace``, ``htmlmin`` e ``clean`` que configuram os plugins ``grunt-replace``, ``grunt-contrib-htmlmin`` e ``grunt-contrib-clean``, respectivamente. Esses plugins são usados para substituir conteúdo em arquivos HTML, minificar arquivos HTML e limpar arquivos temporários.

Na seção ``watch``, foi adicionado um novo target html que especifica que o plugin deve monitorar o arquivo ``src/index.html``. Quando esse arquivo é modificado, a tarefa ``replace:dev`` é executada automaticamente.

Na seção ``replace``, são definidos dois targets, dev e dist. O target dev especifica que a string ``ENDERECO_DO_CSS`` no arquivo ``src/index.html`` deve ser substituída por ``'./styles/main.css'``. O target dist especifica que a mesma string no arquivo ``prebuild/index.html`` deve ser substituída por ``'./styles/main.min.css'``.

Na seção ``htmlmin``, é definido um target dist que especifica que o arquivo ``src/index.html`` deve ser minificado e salvo como ``prebuild/index.html``.

Na seção ``clean``, é especificado que o diretório ``prebuild`` deve ser limpo.

Além disso, a tarefa registrada ``build`` foi alterada para executar as tarefas ``less:production``, ``htmlmin:dist``, ``replace:dist`` e ``clean``. Isso significa que, quando você executa o comando ``grunt build``, as tarefas de compilação LESS, minificação HTML, substituição de conteúdo e limpeza de arquivos temporários são executadas automaticamente.

Arquivo modificado:
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
        clean: ['prebuild']
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean']);
```

Plugins instalados:
- ``grunt-replace:`` Este plugin permite que você substitua conteúdo em arquivos durante a execução de tarefas do Grunt. Você pode especificar padrões de substituição e os arquivos nos quais esses padrões devem ser aplicados. O plugin grunt-replace é útil para substituir valores de configuração ou outras informações em arquivos durante o processo de construção.

- ``grunt-contrib-htmlmin:`` Este plugin permite que você minifique arquivos HTML durante a execução de tarefas do Grunt. Ele remove comentários, espaços em branco e outros caracteres desnecessários dos arquivos HTML para reduzir seu tamanho e melhorar o tempo de carregamento. O plugin grunt-contrib-htmlmin é útil para otimizar o desempenho de aplicações web.

- ``grunt-contrib-clean:`` Este plugin permite que você exclua arquivos e diretórios durante a execução de tarefas do Grunt. Ele é útil para limpar arquivos temporários ou de construção que não são mais necessários. O plugin grunt-contrib-clean ajuda a manter seu projeto organizado e limpo.

<br>

### ✅ Questionário
Como informamos ao plugin grunt-replace o campo que ele deverá substituir?

A- criando um campo no arquivo original adicionando @@ antes do nome do campo

B- criando um campo no arquivo original adicionando # antes e depois do nome do campo

C- criando um campo no arquivo original adicionando ## antes do nome do campo

D- criando um campo no arquivo original adicionando @ antes e depois do nome do campo

Resposta: A resposta correta é a opção A. Para informar ao plugin grunt-replace o campo que ele deve substituir em um arquivo HTML, você deve incluir o texto que deseja substituir no arquivo HTML, precedido por @@. Por exemplo, para substituir a string ENDERECO_DO_CSS pelo valor './styles/main.css', você pode incluir o seguinte código em seu arquivo HTML:

```
<link rel="stylesheet" href="@@ENDERECO_DO_CSS">
```

Em seguida, você pode especificar um padrão de substituição na configuração do plugin grunt-replace no seu arquivo Gruntfile.js, como mostrado abaixo:

```
{
    match: 'ENDERECO_DO_CSS',
    replacement: './styles/main.css'
}
```

Quando a tarefa do Grunt que usa o plugin grunt-replace é executada, a string @@ENDERECO_DO_CSS no arquivo HTML será substituída pelo valor './styles/main.css'.