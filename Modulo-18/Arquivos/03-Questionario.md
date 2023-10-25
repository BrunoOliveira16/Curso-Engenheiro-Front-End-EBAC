# 📌 Questionário
> Módulo 18: Automatize tarefas com Grunt

<br>

### Pergunta 1
#### Qual função utilizamos para inicializar a configuração do Grunt?
A- grunt.config()

B- grunt.init()

C- grunt.setup()

D- grunt.initConfig()

<details>
    <summary>Resposta</summary>

    grunt.initConfig()

    A resposta correta é "grunt.initConfig()" para inicializar a configuração do Grunt porque essa função é a maneira padrão de definir as configurações para as tarefas e plugins do Grunt. Quando chamamos grunt.initConfig(), estamos passando um objeto de configuração como argumento para essa função, e esse objeto contém todas as configurações necessárias para as tarefas específicas que queremos executar em nosso projeto.
</details>

<br>

### Pergunta 2
#### Qual função utilizamos para criar uma tarefa no Grunt?
A- grunt.task("nomeDaTarefa", function(){})

B- grunt.createTask("nomeDaTarefa", function(){})

C- grunt.registerTask("nomeDaTarefa", function(){})

D- grunt.initTask("nomeDaTarefa", function(){})

<details>
    <summary>Resposta</summary>
    
    grunt.registerTask("nomeDaTarefa", function(){})

    A resposta correta é "grunt.registerTask("nomeDaTarefa", pois function(){}) é usada para criar uma tarefa no Grunt porque é uma função nativa do Grunt que permite registrar tarefas personalizadas. Ela recebe dois argumentos: o nome da tarefa (que você escolhe) e a função que contém o código a ser executado quando a tarefa for chamada. Essa função é uma forma de encapsular a lógica da tarefa, tornando-a reutilizável e configurável.
</details>

<br>


### Pergunta 3
#### Qual função utilizamos para carregar um plugin no Grunt?
A- grunt.import("nomeDoPlugin")

B- grunt.loadNpmTasks("nomeDoPlugin")

C- grunt.load("nomeDoPlugin")

D- grunt.loadPlugin("nomeDoPlugin")

<details>
    <summary>Resposta</summary>
    
    grunt.loadNpmTasks("nomeDoPlugin")

    A resposta correta é " grunt.loadNpmTasks("nomeDoPlugin"). Ela é utilizada para carregar um plugin no Grunt porque o Grunt é um sistema de automação de tarefas para projetos JavaScript, e muitas das tarefas comuns são encapsuladas em plugins. Esses plugins podem ser desenvolvidos pela comunidade ou personalizados para atender às necessidades específicas de um projeto.
</details>

<br>

### Pergunta 4
#### Sobre a execução de tarefas em paralelo é correto afirmar que:
A- São possíveis através do plugin grunt-concurrent

B- São configuradas através da função grunt.parallel()

C- São possíveis através do plugin grunt-parallel

D- São configuradas através da função grunt.concurrent()

<details>
    <summary>Resposta</summary>
    
    São possíveis através do plugin grunt-concurrent

    A resposta correta é "São possíveis através do plugin grunt-concurrent" porque este plugin fornece a funcionalidade necessária para executar tarefas de forma simultânea, aproveitando ao máximo os recursos do sistema e melhorando a eficiência da automação de tarefas no Grunt. Ele permite configurar tarefas para serem executadas em paralelo, evitando a necessidade de execução sequencial e, assim, acelerando o processo de automação.
</details>

<br>

### Pergunta 5
#### Como podemos separar os arquivos tratados pelo Grunt, por exemplo, os arquivos compilados pelo LESS.
A- Nenhuma das opções

B- Através dos targets podemos separar a configuração de um plugin entre os ambientes

C- Através da função grunt.dest("/dist") podemos enviar os arquivos para a pasta dist

D- Através da função grunt.target("dist") podemos enviar os arquivos para a pasta dist

<details>
    <summary>Resposta</summary>
    
    Através dos targets podemos separar a configuração de um plugin entre os ambientes

    A resposta correta é "Através dos targets podemos separar a configuração de um plugin entre os ambientes" Em cada tarefa configurada no Grunt utilizamos a opção target onde podemos separar os arquivos que serão processados em tempo de desenvolvimento e no ambiente produtivo, aquele utilizado pelo cliente final."
</details>

<br>

### Pergunta 6
#### Como podemos fazer com que o Grunt fique assistindo as alterações nos arquivos e execute as tarefas automaticamente?
A- Através do uso do plugin grunt-contrib-live

B- Através da função grunt.watch() informando as tarefas como argumento da função

C- Através da função grunt.watch() informando os arquivos como argumento da função

D- Através do uso do plugin grunt-contrib-watch

<details>
    <summary>Resposta</summary>
    
    Através do uso do plugin grunt-contrib-watch

    A resposta correta é " Através do uso do plugin grunt-contrib-watch". O Grunt não possui uma função nativa chamada grunt.watch(). Para habilitar o monitoramento de alterações em arquivos e a execução de tarefas automaticamente com base nessas alterações, é necessário utilizar um plugin específico que ofereça essa funcionalidade. O plugin mais comum e amplamente utilizado para essa finalidade é o grunt-contrib-watch. Ele permite definir quais arquivos ou tarefas devem ser monitorados e quais ações executar quando ocorrem alterações nos arquivos especificados.
</details>

<br>

### Pergunta 7
#### Como informamos ao plugin grunt-replace o campo que ele deverá substituir?
A- criando um campo no arquivo original adicionando @@ antes do nome do campo

B- criando um campo no arquivo original adicionando # antes e depois do nome do campo

C- criando um campo no arquivo original adicionando ## antes do nome do campo

D- criando um campo no arquivo original adicionando @ antes e depois do nome do campo

<details>
    <summary>Resposta</summary>
    
    criando um campo no arquivo original adicionando @@ antes do nome do campo

    A resposta correta é "criando um campo no arquivo original adicionando @@ antes do nome do campo". Utilizamos dois @ antes do nome do campo que será substituído.
</details>

<br>

### Pergunta 8
#### Qual função utilizamos para arredondar um número para baixo, ou seja, considerar apenas a parte inteira do número?
A- Math.ceil(4.52)

B- floor(4.52)

C- Math.round(4.52)

D- Math.floor(4.52)

<details>
    <summary>Resposta</summary>
    
    Math.floor(4.52)

    A reposta correta é " Math.floor(4.52)". A função Math.floor() é utilizada para arredondar um número para baixo, ou seja, para obter o maior número inteiro menor ou igual ao número fornecido como argumento. Ela faz isso descartando a parte decimal do número e mantendo apenas a parte inteira. No exemplo fornecido, Math.floor(4.52), a função Math.floor() é aplicada ao número 4.52. Ela remove a parte decimal (0.52) e retorna o maior número inteiro menor ou igual a 4.52, que é 4. Portanto, o resultado da expressão é 4. Isso é útil em situações em que você deseja ignorar a parte decimal de um número e trabalhar apenas com a parte inteira, como ao calcular quantos itens inteiros podem ser comprados com um determinado valor, por exemplo.
</details>

<br>

### Pergunta 9
#### Qual plugin utilizamos para comprimir código JavaScript no Grunt?
A- grunt-contrib-compress-js

B- grunt-contrib-uglify

C- grunt-compress-js

D- grunt-uglify

<details>
    <summary>Resposta</summary>
    
    grunt-contrib-uglify

    A resposta correta é "grunt-contrib-uglify". Ele é amplamente utilizado para comprimir código JavaScript no Grunt devido à sua confiabilidade, funcionalidade abrangente e aceitação generalizada na comunidade.
</details>