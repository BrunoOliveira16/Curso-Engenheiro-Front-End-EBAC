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
