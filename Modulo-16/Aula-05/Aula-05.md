## 📝 Aula 05: Usando Gulp para compilar SASS 
### Plugins
O Gulp possui vários plugins que nos ajudam nas tarefas do dia a dia, como compilação de pré-processadores CSS, minificação de imagens e outros arquivos.

Cada plugin é um novo pacote Node que instalamos, é importante que essa instalação seja feita utilizando o sufixo --save-dev para que a dependência seja utilizada apenas em ambiente de desenvolvimento.

Nesta aula instalamos os plugins:
- gulp-sass: ``npm install --save-dev gulp-sass``
- gulp-sourcemaps: ``npm install --save-dev gulp-sourcemaps``

Criamos novas variaveis no nosso arquivo ``gulpfile.js``:
```
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
```

Criamos a função para compilar e minificar os arquivos sass para css:
```
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}
```

criamos nossa estrutura de pastas para exemplo:
```
exemplo-gulp > source > styles > main.scss e variaveis.scss

// Os arquivos css foram geradas após o comando gulp
exemplo-gulp > build > styles > main.css
exemplo-gulp > build > styles > maps > main.css.map
```

E criamos uma chamada para a tarefa de compilar o ``sass`` e definimos uma tarefa ``Gulp`` chamada ``watch`` que monitora mudanças em arquivos ``.scss`` na pasta ``./source/styles/``. Quando um arquivo é alterado, a tarefa ``compilaSass`` é executada em série.
```
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}
```

A função ``gulp.watch`` é usada para monitorar mudanças nos arquivos especificados. O segundo argumento é um objeto de opções que define o comportamento do monitoramento. Neste caso, a opção ``ignoreInitial`` é definida como ``false``, o que significa que a tarefa ``compilaSass`` será executada imediatamente quando a tarefa ``watch`` for iniciada.

<br>

### Links Uteis
- Lista de plugins: https://gulpjs.com/plugins/
- Documentação do plugin Gulp-SASS: https://www.npmjs.com/package/gulp-sass
- Documentação do plugin Gulp-Sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps

<br>

### ✅ Questionário
Como exportamos uma tarefa que irá ficar observando as modificações dos arquivos?

A- exports.watch = function() { gulp.watch('ARQUIVOS', ['TAREFA']); }

B- exports.watch = function() { gulp.load('ARQUIVOS', ['TAREFA']); }

C- exports.watch = function() { gulp.watcher('ARQUIVOS', ['TAREFA']); }

D- exports.observer = function() { gulp.watch('ARQUIVOS', ['TAREFA']); } 

Resposta: Letra A