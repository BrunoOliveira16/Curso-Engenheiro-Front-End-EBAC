## 📝 Aula 01: Configurando o Gulp
Neste módulo conhecemos o Gulp, uma ferramenta utilizada para automação de tarefas, com ela podemos automatizar a compilação do SASS e compressão de arquivos.

Link do site: https://gulpjs.com/

### Setup
Para começar a utilizar o Gulp é necessário fazer duas instalações.

Inicialmente instalamos o CLI (Command Line Interface) do Gulp de forma global:
```
gulp-cli: npm install --global gulp-cli ou npm install --global gulp-cli
```

E dentro da pasta do projeto precisamos inicializar um projeto Node, através do comando npm init.

Após isso instalamos o Gulp como dependência de desenvolvimento para o projeto:
```
npm install --save-dev gulp
```

Após a instalação precisamos criar um arquivo chamado gulpfile.js, é neste arquivo onde escreveremos as tarefas que serão automatizadas.

Também precisamos alterar o arquivo package.json, na seção scripts, ficando assim:
```
"scripts": {
    "gulp": "gulp",
    "test": "echo \"Error: no test specified\" && exit 1“
},
```
Com isso podemos executar o comando npm run gulp, via terminal, desde que estejamos na pasta do projeto.

<br>

### ✅ Questionário
Qual é o arquivo principal do Gulp, utilizado para escrever as automações?

A- gulpfile.json

B- gulpfile.js

C- package.json

D- grunfile.js 

Resposta: letra B