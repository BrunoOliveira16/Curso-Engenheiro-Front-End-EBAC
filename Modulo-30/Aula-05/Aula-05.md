## 📝 Aula 05: Redux Toolkit
Redux Toolkit é uma biblioteca oficial do Redux que fornece um conjunto de ferramentas para simplificar o desenvolvimento de aplicativos com Redux. Ele inclui utilitários para configurar a store, criar reducers e escrever lógica assíncrona. O Redux Toolkit é construído com base nas melhores práticas do Redux e ajuda a evitar erros comuns e reduzir a quantidade de código boilerplate.

Aqui está um exemplo de como você pode usar o Redux Toolkit para criar uma aplicação CRUD (Create, Read, Update, Delete) que consome uma API RESTful. Este exemplo usa o React Router, Axios e Bootstrap para criar uma interface de usuário e fazer chamadas de API.

Primeiro, instale o Redux Toolkit e o React-Redux em seu projeto:
```
npm install @reduxjs/toolkit react-redux
```

Em seguida, crie um arquivo chamado src/app/store.js e importe a API configureStore do Redux Toolkit. Crie uma store vazia do Redux e exporte-a:
```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

Isso criará uma store do Redux e também configurará automaticamente a extensão Redux DevTools para que você possa inspecionar a store durante o desenvolvimento.

Depois de criar a store, você pode disponibilizá-la para seus componentes React colocando um ``<Provider>`` do React-Redux ao redor de sua aplicação em src/index.js. Importe a store que acabou de criar, coloque um ``<Provider>`` ao redor de seu ``<App>`` e passe a store como prop:
```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

Agora você pode começar a adicionar slices de estado à sua store. Por exemplo, você pode adicionar um novo arquivo chamado src/features/counter/counterSlice.js e importar a API createSlice do Redux Toolkit. Criar um slice requer um nome de string para identificar o slice, um valor de estado inicial e uma ou mais funções reducer para definir como o estado pode ser atualizado. Depois que um slice é criado, você pode exportar os criadores de ação gerados e a função reducer para todo o slice.

<br>

## ✅ Questionário
No reducer por onde podemos acessar argumentos das actions?

A- através da função getState()

B- através da propriedade payload do argumento action

C- através da propriedade action do argumento payload

D- através do hook useSelecto()

Resposta: B- através da propriedade payload do argumento action