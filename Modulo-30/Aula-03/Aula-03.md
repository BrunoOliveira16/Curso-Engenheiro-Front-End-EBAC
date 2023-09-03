## 📝 Aula 03: Conhecendo o Redux
Redux é uma biblioteca JavaScript de código aberto para gerenciamento de estado de aplicativos. É comumente usado com bibliotecas e frameworks como React, Angular e Vue para construir aplicativos de interface do usuário. Redux ajuda a gerenciar o estado global do aplicativo de maneira previsível, tornando mais fácil compartilhar dados entre componentes e manter o código organizado. Ele segue a arquitetura Flux, que promove um fluxo unidirecional de dados e ajuda a evitar problemas comuns de gerenciamento de estado. Redux é amplamente utilizado e tem uma grande comunidade de desenvolvedores, com muitos recursos e exemplos disponíveis online.

O Redux oferece várias vantagens quando usado com o React:

- ``Gerenciamento de estado previsível``: O Redux ajuda a gerenciar o estado do aplicativo de maneira previsível. Isso é especialmente útil em aplicativos complexos onde o gerenciamento de estado pode se tornar complicado.

- ``Estado global``: O Redux fornece um armazenamento global, tornando mais fácil compartilhar dados entre componentes. Isso pode ajudar a evitar o problema de “prop drilling”, onde os dados precisam ser passados através de vários componentes.

- ``Time-travel debugging``: Uma das características mais poderosas do Redux é a capacidade de viajar no tempo durante a depuração. Isso significa que você pode ver o estado do aplicativo em diferentes pontos no tempo e entender melhor como as alterações no estado afetam o comportamento do aplicativo.

- ``Middleware``: O Redux suporta middleware, que permite adicionar funcionalidades personalizadas ao despachante. Isso pode ser útil para lidar com efeitos colaterais, como chamadas de API.

- ``Ecosistema e comunidade``: O Redux tem um grande ecossistema e uma comunidade ativa, com muitos recursos e exemplos disponíveis online.

Lembre-se, no entanto, que o Redux adiciona complexidade ao seu aplicativo e pode não ser necessário para aplicativos menores ou menos complexos. É importante avaliar as necessidades do seu projeto antes de decidir usar o Redux.

<br>

### Actions
No Redux, as actions são objetos JavaScript que descrevem o que aconteceu na aplicação. Elas são a única fonte de informação para o store do Redux e são enviadas para o store usando o método dispatch.

Cada action deve ter um campo type que especifica o tipo de ação a ser executada. O campo type deve ser uma string e geralmente é definido como uma constante para evitar erros de digitação. Além do campo type, as actions podem conter outros campos para fornecer informações adicionais sobre a ação.

Aqui está um exemplo de uma action que adiciona um item à lista de tarefas:
```
const ADD_TODO = 'ADD_TODO';

const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text
  }
});

store.dispatch(addTodo('Aprender sobre actions do Redux'));
```

Neste exemplo, estamos criando uma action do tipo ADD_TODO com um campo payload que contém o texto da tarefa a ser adicionada. Em seguida, estamos despachando a action para o store do Redux usando o método dispatch. Quando a action é despachada, o store chama os reducers com o estado atual e a action para calcular o novo estado da aplicação.


<br>

## ✅ Questionário
Qual é o retorno de uma action creator?

A- não tem retorno

B- um booleano

C- o estado atualizado

D- um objeto action

Resposta: A resposta correta é a letra D, um objeto action. Um action creator é simplesmente uma função que retorna um objeto de ação. O objeto de ação geralmente contém um campo type que especifica o tipo de ação e pode conter outros campos, como payload, para fornecer informações adicionais sobre a ação. O objeto de ação retornado pelo action creator é então despachado para o store do Redux, onde é usado para atualizar o estado da aplicação.