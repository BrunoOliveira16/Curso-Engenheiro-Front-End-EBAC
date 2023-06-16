## 📝 Aula 06: Minificando JS com o Gulp 
Nesta aula instalamos os plugins:
- gulp-uglify: ``npm install --save-dev gulp-uglify``
- gulp-obfuscate: ``npm install --save-dev gulp-obfuscate``
- gulp-imagemin: ``npm install --save-dev gulp-imagemin@7.1.0``

<br>

### gulp-uglify
gulp-uglify é um plugin para o Gulp que permite comprimir arquivos JavaScript. Ele usa a biblioteca UglifyJS para remover espaços em branco desnecessários, comentários e outras informações desnecessárias do código, reduzindo assim o tamanho do arquivo. Isso pode ajudar a melhorar o desempenho do site, pois os arquivos JavaScript menores são carregados mais rapidamente pelo navegador.

Para usar o plugin gulp-uglify, basta instalá-lo como uma dependência do projeto e importá-lo no arquivo gulpfile.js. Em seguida, você pode usar a função uglify() em uma tarefa Gulp para comprimir arquivos JavaScript. Por exemplo:
```
const uglify = require('gulp-uglify');

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}
```
Neste exemplo, a tarefa comprimeJavaScript usa o plugin gulp-uglify para comprimir todos os arquivos JavaScript na pasta ./source/scripts/ e salvar os arquivos comprimidos na pasta ./build/scripts/.

<br>

### gulp-ofuscate
gulp-obfuscate é um plugin para o Gulp que permite ofuscar código JavaScript. Ofuscar o código significa torná-lo mais difícil de ler e entender por humanos, geralmente através da substituição de nomes de variáveis e funções por nomes curtos e sem sentido. Isso pode ajudar a proteger o código contra engenharia reversa e roubo de propriedade intelectual.

Para usar o plugin gulp-obfuscate, basta instalá-lo como uma dependência do projeto e importá-lo no arquivo gulpfile.js. Em seguida, você pode usar a função obfuscate() em uma tarefa Gulp para ofuscar arquivos JavaScript. Por exemplo:
```
const obfuscate = require('gulp-obfuscate');

function ofuscaJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}
```
Neste exemplo, a tarefa ofuscaJavaScript usa o plugin gulp-obfuscate para ofuscar todos os arquivos JavaScript na pasta ./source/scripts/ e salvar os arquivos ofuscados na pasta ./build/scripts/.

<br>

### gulp-imagemin
gulp-imagemin é um plugin para o Gulp que permite comprimir imagens. Ele suporta vários formatos de imagem, incluindo PNG, JPEG, GIF e SVG. O plugin usa várias bibliotecas de compressão de imagem para reduzir o tamanho do arquivo sem comprometer a qualidade da imagem. Isso pode ajudar a melhorar o desempenho do site, pois as imagens menores são carregadas mais rapidamente pelo navegador.

Para usar o plugin gulp-imagemin, basta instalá-lo como uma dependência do projeto e importá-lo no arquivo gulpfile.js. Em seguida, você pode usar a função imagemin() em uma tarefa Gulp para comprimir imagens. Por exemplo:
```
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}
```
Neste exemplo, a tarefa comprimeImagens usa o plugin gulp-imagemin para comprimir todas as imagens na pasta ./source/images/ e salvar as imagens comprimidas na pasta ./build/images/.

<br>

O código final do nosso arquivo gulpfile.js ficou assim:
```
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}
```

### Links Uteis
- Documentação do plugin Gulp-Uglify: https://www.npmjs.com/package/gulp-uglify
- Documentação do plugin Gulp-Obfuscate: https://www.npmjs.com/package/gulp-obfuscate
- Documentação do plugin Gulp-Imagemin: https://www.npmjs.com/package/gulp-imagemin

<br>

### ✅ Questionário
Qual foi o plugin do Gulp utilizado para a minificação de JavaScript?

A- gulp-minify

B- gulp-uglify

C- uglify

D- gulo-compress 

Resposta: Letra B