## 📝 Aula 02: Arquitetura flux
A arquitetura Flux é um padrão de projeto para gerenciamento de estado em aplicativos de interface do usuário. Foi criada pelo Facebook para ser usada com a biblioteca React, mas pode ser usada com outras bibliotecas e frameworks também. A ideia principal por trás da arquitetura Flux é que os dados em um aplicativo seguem um fluxo unidirecional. As ações são disparadas por interações do usuário ou outros eventos, e essas ações são processadas por um despachante centralizado. O despachante, por sua vez, atualiza os armazenamentos (stores), que contêm o estado do aplicativo. Os componentes da interface do usuário, então, recebem os dados atualizados dos armazenamentos e atualizam a interface do usuário de acordo. Isso cria um fluxo unidirecional claro e previsível de dados no aplicativo, o que pode tornar o código mais fácil de entender e manter.

Na arquitetura Flux, o despachante (dispatcher), o armazenamento (store) e a visualização (view) são componentes importantes que trabalham juntos para gerenciar o estado do aplicativo.

- ``Despachante (Dispatcher)``: O despachante é um componente centralizado que gerencia o fluxo de dados no aplicativo. Ele recebe ações disparadas por interações do usuário ou outros eventos e as encaminha para os armazenamentos apropriados. O despachante garante que as ações sejam processadas em uma ordem previsível e que os armazenamentos sejam atualizados de maneira consistente.

- ``Armazenamento (Store)``: Os armazenamentos contêm o estado do aplicativo e a lógica para atualizá-lo. Eles recebem ações do despachante e atualizam o estado de acordo. Os armazenamentos também podem emitir eventos para notificar os componentes da interface do usuário sobre alterações no estado.

- ``Visualização (View)``: As visualizações são os componentes da interface do usuário que exibem os dados do aplicativo. Eles recebem os dados dos armazenamentos e atualizam a interface do usuário de acordo. As visualizações também podem disparar ações em resposta a interações do usuário, iniciando o fluxo de dados novamente.

Esses três componentes trabalham juntos para criar um fluxo unidirecional claro e previsível de dados no aplicativo, tornando o código mais fácil de entender e manter.

<br>

## ✅ Questionário
Em qual camada da arquitetura Flux podemos atualizar o estado?

A- dispatcher

B- action

C- view

D- store

Resposta: Na arquitetura Flux, o estado é atualizado na camada de armazenamento (store). Portanto, a resposta correta é a opção D. O store recebe ações do dispatcher e atualiza o estado de acordo. As outras opções (A, B e C) não são as camadas onde o estado é atualizado na arquitetura Flux.