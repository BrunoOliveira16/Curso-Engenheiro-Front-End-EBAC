## 📝 Aula 01: Configurando o Grunt
### Instalação
Primeiramente precisamos instalar o Grunt CLI de forma global:
```
npm install –g grunt-cli
```

Dentro da pasta do projeto ``exemplo-grunt``, vamos criar um arquivo json com:
```
npm init
```

Após isso, na pasta do projeto digitamos:
```
npm install –-save-dev grunt
```

Após a instalação vamos criar um script de execução do grunt no package.json:
```
{
  "name": "exemplo-grunt",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "grunt": "grunt",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "grunt": "^1.6.1"
  }
}
```

<br>

### Gruntfile
O arquivo de configuração do Grunt é o ``Gruntfile.js``. Neste arquivo iremos configurar as tarefas e importar os plugins.

A configuração básica do Grunt é:
```
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })
}
```

No código acima fizemos a exportação do arquivo, que será acessado pelo Grunt, onde ele injetará o argumento “grunt”.

Inicializamos a configuração com grunt.initConfig, onde, dentro da função, em pkg, importamos o arquivo package.json.

para executar o grunt, é só efetuarmos o comando abaixo no terminal:
```
npm run grunt
```

<br>

### ✅ Questionário
Qual função utilizamos para inicializar a configuração do Grunt?

A- grunt.setup()

B- grunt.initConfig()

C- grunt.config()

D- grunt.init() 

Resposta: Letra B