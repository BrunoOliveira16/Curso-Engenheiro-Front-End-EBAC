## 📝 Aula 02: Criação de tarefas
No exemplo abaixo ele define uma tarefa chamada ``olaGrunt`` que usa a função ``setTimeout`` para exibir a mensagem “Olá Grunt” após um atraso de 3 segundos. A tarefa ``default`` é registrada para executar a tarefa ``olaGrunt``. Quando você executa o comando grunt, a tarefa ``default`` é executada e, portanto, a tarefa ``olaGrunt`` também é executada.

```
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Olá Grunt');
            done();
        }, 3000);
    });

    grunt.registerTask('default', ['olaGrunt']);
}
```

<br>

### ✅ Questionário
Qual função utilizamos para criar uma tarefa no Grunt?

A- grunt.task("nomeDaTarefa", function(){})

B- grunt.registerTask("nomeDaTarefa", function(){})

C- grunt.initTask("nomeDaTarefa", function(){})

D- grunt.createTask("nomeDaTarefa", function(){})

Resposta: Letra B.