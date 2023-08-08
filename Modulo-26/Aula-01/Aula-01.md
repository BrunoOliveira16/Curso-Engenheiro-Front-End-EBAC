## 📝 Aula 01: Introdução
### TypeScript
O TypeScript é uma nova linguagem de programação, criada pela Microsoft no ano de 2012. 

Sua principal tarefa é adicionar a sintaxe de tipagem ao JavaScript, apesar de ser uma linguagem de programação o resultado do TypeScript será um código JavaScript, por isso recebe também o nome de superset.

Para instalar o typescript globalmente em seu computador, utilize o comando:
```
npm install -g typescript
```

### Tipagem fraca
No JavaScript podemos começar uma variável string e depois, ao evoluir o programa, atribuir um número a essa variável, o que pode resultar em falhas quando o código for executado.

Com o TypeScript resolvemos esse problema, podemos dizer que uma variável receberá apenas números, todo o processo 
do TypeScript é feito em tempo de codificação e build (construção do projeto). 

Se houver algum problema no código não teremos a geração do JS final.

### Iniciando um arquivo tsconfig.json
Para iniciar um arquivo ``tsconfig.json`` em um projeto TypeScript, você pode usar o comando ``tsc --init`` no terminal. Isso criará um arquivo ``tsconfig.json`` com configurações padrão no diretório atual. Você pode então editar o arquivo para personalizar as opções do compilador de acordo com as necessidades do seu projeto.

Para compilar seus arquivos TypeScript em JavaScript, você pode usar o comando tsc seguido pelo nome do arquivo que deseja compilar. Por exemplo, para compilar um arquivo chamado ``HelloWorld.ts``, você pode usar o comando ``tsc HelloWorld.ts``. Isso criará um arquivo JavaScript correspondente chamado ``HelloWorld.js`` no mesmo diretório.

Você também pode configurar tarefas de compilação no Visual Studio Code para compilar automaticamente seus arquivos TypeScript em JavaScript quando você salvar suas alterações. Isso pode ser útil para agilizar seu fluxo de trabalho de desenvolvimento.

<br>

## ✅ Questionário
Qual resultado teremos ao executar no JavaScript: “olá “ + 10?

A- olá 10

B- Error

C- TypeError

D- Undefined

Resposta: A resposta correta é a letra A. Quando você executa "olá " + 10 no JavaScript, o resultado é "olá 10". Isso ocorre porque o operador + pode ser usado tanto para adicionar números quanto para concatenar strings. Quando um número é adicionado a uma string, o número é convertido em uma string e concatenado com a outra string.