## 📝 Aula 08: Redux Toolkit Query
Redux Toolkit Query é uma ferramenta avançada de busca e cache de dados, projetada para simplificar casos comuns de carregamento de dados em uma aplicação web. É um complemento opcional incluído no pacote Redux Toolkit e sua funcionalidade é construída sobre as outras APIs do Redux Toolkit.

A RTK Query é usada principalmente para operações de consulta. A recomendação geral é que você use consultas apenas para solicitações que recuperam dados. Para qualquer coisa que altere os dados no servidor ou possivelmente invalide o cache, você deve usar uma Mutação.

Os endpoints de consulta são definidos retornando um objeto dentro da seção de endpoints do createApi, e definindo os campos usando o método ``builder.query()``. Os endpoints de consulta devem definir um callback de consulta que construa a URL (incluindo quaisquer parâmetros de consulta da URL), ou um callback ``queryFn`` que possa fazer lógica assíncrona arbitrária e retornar um resultado.

A RTK Query também pode gerar hooks do React que encapsulam todo o processo de busca de dados, fornecem campos ``data`` e ``isLoading`` para componentes e gerenciam o tempo de vida dos dados em cache à medida que os componentes são montados e desmontados.

Aqui está um exemplo de como você pode usar a RTK Query para criar uma API:
```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (id) => `post/${id}`,
    }),
  }),
})

export const { useGetPostQuery } = api
```

Neste exemplo, estamos criando uma API com a RTK Query que tem um único endpoint de consulta para buscar um post por id. O hook ``useGetPostQuery`` gerado pode ser usado em um componente React para buscar o post e acessar o estado da solicitação.

<br>

## ✅ Questionário
Sobre o redux toolkit query podemos afirmar que:

A- Não precisar ser configurado com a store

B- Está disponível apenas com o React utilizando o TypeScript

C- Precisa ser implementado junto com outro reducer

D- Com o createApi teremos também a criação dos reducers para os dados da requisição

Resposta: D- Com o createApi teremos também a criação dos reducers para os dados da requisição. O Redux Toolkit Query é uma ferramenta avançada de busca e cache de dados, projetada para simplificar casos comuns de carregamento de dados em uma aplicação web. É um complemento opcional incluído no pacote Redux Toolkit e sua funcionalidade é construída sobre as outras APIs do Redux Toolkit. Quando você usa a função createApi para criar uma API, o Redux Toolkit Query gera automaticamente os reducers e os seletores para gerenciar o estado dos dados da requisição. Isso simplifica o processo de gerenciamento de estado e reduz a quantidade de código que você precisa escrever.