## 📝 Aula 04: Faça testes com React e Redux
Testar aplicações React e Redux com Jest e React Testing Library é uma prática comum para garantir a qualidade do código e a correta funcionalidade dos componentes e ações da aplicação.

Jest é uma estrutura de teste JavaScript popular que inclui um conjunto completo de recursos de teste, como a capacidade de criar testes unitários e de integração, simular comportamentos e criar instantâneos para testes de UI.

React Testing Library é uma biblioteca leve para testar componentes React. Ela fornece utilitários para renderizar componentes React, consultar o DOM resultante e interagir com ele. A filosofia por trás da React Testing Library é testar o comportamento do componente, não a implementação.

Quando se trata de testar componentes Redux conectados, pode parecer complicado à primeira vista, pois o componente está envolvido em um HOC (High Order Component) e não temos acesso direto às propriedades do componente. No entanto, existem várias estratégias que podemos usar:

- ``Isolar o componente``: Podemos testar o componente desconectado importando diretamente o componente não conectado.

- ``Mock do Store``: Podemos usar pacotes como redux-mock-store para simular o store do Redux. Isso nos permitirá testar as ações disparadas pelo componente.

- ``Wrapper Provider``: Podemos envolver o componente em um Provider durante o teste e passar um store criado manualmente.

Além disso, ao testar componentes Redux conectados, geralmente queremos verificar se as ações corretas são disparadas com os parâmetros corretos e se os dados são renderizados conforme o esperado.

configurando ambiente de testes:
```
import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { RootState, AppStore, configuraStore } from '../store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
```
Este é um exemplo de como você pode configurar um ambiente de teste para uma aplicação React que usa Redux. Vamos analisar o que cada parte do código faz:

- Importações: Você está importando as funções necessárias do pacote @reduxjs/toolkit, @testing-library/react, react-redux e a função configuraStore do seu arquivo de store.

- Interface ExtendedRenderOptions: Esta interface estende a interface RenderOptions do React Testing Library e adiciona duas novas propriedades: preloadedState e store. Isso permite que você passe um estado pré-carregado ou uma store personalizada para a função renderizaComProvider.

- Função renderizaComProvider: Esta função é uma versão personalizada da função render do React Testing Library. Ela aceita um elemento React e um objeto de opções, que pode incluir um estado pré-carregado ou uma store personalizada. A função então renderiza o elemento dentro de um componente Provider que é fornecido com a store.

- Componente Encapsulador: Este é um componente auxiliar que envolve o elemento que está sendo testado em um componente Provider. Isso permite que o elemento tenha acesso à store Redux.

- Retorno da função: A função retorna um objeto que inclui a store e todos os retornos da função render do React Testing Library. Isso permite que você faça asserções não apenas sobre o elemento renderizado, mas também sobre o estado da store após as interações do usuário.

<br>

Exemplo de teste:
```
import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
              preco: 199.9,
              precoAntigo: 299.9,
              titulo: 'Horgwarts Legacy'
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
```

Este é um exemplo de teste de componente usando Jest e React Testing Library. Vamos analisar o que cada parte do código faz:

- Importações: Você está importando as funções necessárias do pacote @testing-library/react e o componente que deseja testar.

- Descrição do conjunto de testes: A função describe é usada para agrupar testes relacionados. Neste caso, todos os testes dentro da função describe estão testando o componente Header.

- Teste de renderização: O primeiro teste verifica se o componente Header é renderizado corretamente. Ele faz isso renderizando o componente com a função auxiliar renderizaComProvider e, em seguida, verifica se o texto ‘EBAC Games’ está no documento.

- Teste com estado pré-carregado: O segundo teste verifica se o componente Header é renderizado corretamente quando há itens no carrinho. Ele faz isso fornecendo um estado pré-carregado para a função auxiliar renderizaComProvider. Em seguida, verifica se a quantidade de itens no carrinho é exibida corretamente.

Esses testes ajudam a garantir que o componente Header seja renderizado corretamente em diferentes estados da aplicação e que a quantidade de itens no carrinho seja exibida corretamente.
