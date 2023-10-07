## 📝 Aula 06: Conheça o Mock Service Worker
Mock Service Worker (MSW) é uma biblioteca de simulação de API para navegador e Node.js que usa um Service Worker para interceptar solicitações que realmente aconteceram. Isso significa que não há stubs de cliente de solicitação e resiliência incomparável quando se trata de integridade de solicitação, pois seu aplicativo agora realiza solicitações da mesma maneira que faz em produção.

MSW permite a comunicação perfeita entre a página HTML e o componente TypeScript, possibilitando a transferência de informações entre as camadas de visão e lógica. O MSW pode ser unidirecional ou bidirecional, e é possível fazer o binding de valores de propriedades de componentes, diretivas e do DOM. Além disso, o MSW permite responder a eventos do DOM, como o clique em um botão, utilizando a sintaxe ``"(nomeEvento)="função($event)"``.

A biblioteca MSW é agnóstica em relação aos frameworks, bibliotecas ou configurações que você possa usar. Ela é perfeita para sua configuração e está disponível em qualquer lugar: durante o desenvolvimento, em qualquer nível de teste e até mesmo durante a depuração.

Você pode começar a usar o MSW em seu projeto executando: 
```
npm i msw
```

<br>

Foi realizado o exemplo abaixo no projeto de testes: ebac_games_redux-com_redux

Local: ``src/containers/Produtos/__tests__/Produto.test.tsx``
```
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    titulo: 'FIFA 23',
    plataformas: ['Xbox Series S/X', 'Windows', 'PS5'],
    precoAntigo: 299,
    preco: 190,
    categoria: 'Esportes',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png?w=440&thumb=false'
  },
  {
    id: 2,
    titulo: 'Gotham Knights',
    plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
    precoAntigo: 299,
    preco: 150,
    categoria: 'Ação',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202204/1422/cXffCEiRPrxFapUs6zxJQp1k.png?w=440&thumb=false'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente com o texto de carregamento', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    const { debug } = renderizaComProvider(<Produtos />)
    await waitFor(() => {
      debug()
      expect(screen.getByText('FIFA 23')).toBeInTheDocument()
    })
  })
})
```