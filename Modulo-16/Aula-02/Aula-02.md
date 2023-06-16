## 📝 Aula 02: Criação de tarefas
### Tarefas
O Gulp funciona a base de tarefas, as tarefas podem ser privadas ou públicas.

Uma tarefa pública pode ser acessada através do comando:
```
npm run gulp NOME_DA_TAREFA
```

Já uma tarefa privada é acessível apenas por outra tarefa no Gulp file.

Ao executar o comando npm run gulp iremos receber uma mensagem de erro, informando que a tarefa padrão (default) não foi encontrada, isso porque no arquivo gulpfile.js não existe uma função para o exports.default.

Exemplo utilizado na aula, no arquivo ``gulpfile.js``, dentro da pasta ``exemplo-gulp``:
```
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

exports.default = funcaoPadrao;
exports.dizOi = dizOi;
```

<br>

### ✅ Questionário
Como criamos uma tarefa privada no Gulp?

A- Colocando a palavra private antes de iniciar a escrita da função

B- Colocando a palavra internal antes de iniciar a escrita da função

C- Escrevendo uma função JavaScript e não a exportando

D- Escrevendo uma função JavaScript e a exportando 

Resposta: letra C