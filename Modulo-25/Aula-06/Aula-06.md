## 📝 Aula 06: Programação Assíncrona
Programação assíncrona é uma técnica que permite que seu programa inicie uma tarefa potencialmente demorada e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que a tarefa seja concluída. Quando a tarefa é concluída, o resultado é apresentado ao seu programa.

Muitas funções fornecidas pelos navegadores, especialmente as mais interessantes, podem levar muito tempo e, portanto, são assíncronas. Por exemplo: fazer solicitações HTTP usando ``fetch()``, acessar a câmera ou microfone do usuário usando ``getUserMedia()``, pedir ao usuário para selecionar arquivos usando ``showOpenFilePicker()``.

A programação assíncrona permite que o usuário continue interagindo com o aplicativo enquanto os processos são executados em segundo plano, melhorando a experiência do usuário.

Existem várias maneiras de implementar funções assíncronas em JavaScript, incluindo ``callbacks``, ``promessas`` e ``async/await``. Cada uma dessas abordagens tem suas próprias vantagens e desvantagens e pode ser usada de acordo com as necessidades do seu programa.

### Promessas
Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Ela permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.

Uma Promise pode estar em um destes estados: ``pending`` (estado inicial, nem cumprido nem rejeitado), ``fulfilled`` (significa que a operação foi concluída com sucesso) ou ``rejected`` (significa que a operação falhou). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método ``then`` de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Promises são muito úteis para lidar com operações assíncronas e evitar o chamado “``callback hell``” (aninhamento excessivo de funções de retorno de chamada). Elas também podem ser encadeadas para executar várias operações assíncronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem-sucedida, com o resultado do passo anterior 2.

<br>

### Async / Await
Async/await é uma sintaxe especial para trabalhar com Promises de maneira mais confortável. A palavra-chave async pode ser colocada antes de uma função, como neste exemplo:

```
async function f() {
  return 1;
}
```

A palavra async antes de uma função significa que a função sempre retorna uma Promise. Outros valores são automaticamente encapsulados em uma Promise resolvida.

A palavra-chave await faz o JavaScript esperar até que a Promise seja resolvida e retorna seu resultado. Aqui está um exemplo com uma Promise que é resolvida em 1 segundo:

```
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // espera até que a promise seja resolvida (*)

  alert(result); // "done!"
}

f();
```

A execução da função “pausa” na linha (*) e é retomada quando a Promise é resolvida, com result se tornando o resultado da Promise.

Async/await torna o código assíncrono mais legível e fácil de escrever, evitando o aninhamento excessivo de funções de retorno de chamada (conhecido como “callback hell”). Além disso, permite o uso de blocos try/catch comuns ao redor do código assíncrono.

<br>

## ✅ Questionário
Quando devemos utilizar um código assíncrono?

A- Sempre que tivermos uma requisição ao back-end;

B- Sempre que tivermos uma iteração;

C- ***Sempre que precisarmos que algum processo termine para continuar a execução do programa***;

D- Sempre que precisarmos importar algum módulo;

Resposta: A afirmação correta é a letra C. Devemos utilizar código assíncrono sempre que precisarmos que algum processo termine para continuar a execução do programa. Isso é especialmente útil quando temos operações que podem levar muito tempo, como requisições ao back-end, acesso a recursos do sistema, leitura de arquivos grandes, etc. O código assíncrono permite que o programa continue executando outras tarefas enquanto espera pela conclusão dessas operações demoradas, melhorando a performance e a experiência do usuário.

