const gulp = require('gulp');

// Tarefas Públicas
function funcaoPadrao(callback) {
    console.log("Executando via gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá Gulp");
    dizTchau();
    callback();
}

// Tarefas Privadas
function dizTchau() {
    console.log("Tchau Gulp")
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;