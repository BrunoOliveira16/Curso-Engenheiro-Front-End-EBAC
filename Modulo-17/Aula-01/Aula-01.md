## 📝 Aula 01: Sintaxe
### Sintaxe
A sintaxe do LESS basicamente segue a mesma do CSS convencional, utilizando chaves e ponto e vírgula.

Um adicional que temos no LESS é o comentário em linha, onde utilizamos: //
```
body {
// background-color: red;
}
```

### Setup

Para configurarmos o LESS é necessário fazermos a instalação de forma global:
```
npm install --global less
```

E de forma local na pasta do módulo:
```
npm init// para inicializar um projeto do npm
npm install –save-dev less
```
Durante a primeira aula configuramos o package.json para expor o comando lessc.

Link do Less: https://lesscss.org/

<br>

Durante as aulas iremos atualizar o projeto na pasta ``projeto-less`` e listar o histórico de modificações no arquivo das aulas, neste primeiro momento instalamos duas depêndecias no package.json através do comando abaixo:
```
npm install --save-dev less
npm install --save-dev less-watch-compiler
```
Foi alterado o package.json com o seguinte script:
```
"scripts": {
    "less": "less-watch-compiler ./src/styles ./build/styles main.less",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
com isso toda modificação realizada nos arquivos less dentro da página styles será compilada para a build do css, através do comando:
```
npm run less
```

<br>

### ✅ Questionário
Através de qual comando compilamos o código LESS?

A- less origem.less destino.css

B- less destino.css origem.less

C- lessc destino.css origem.less

D- lessc origem.less destino.css 

Resposta: letra D