## 📝 Aula 06: Criando os componentes para textos
Conteúdo da construção do projeto.

Criado regras de estilo no styled components, tipagem e criação de component Text.

Exemplos:
```
//components/Text/styles.ts

import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.typeColor === 'main' ? '#282a35' : '#949494')};
  font-size: 14px;
  line-height: 22px;
`
```

```
//components/Text/index.tsx

import { P } from './styles'

export type Props = {
  children: string
  typeColor?: 'main' | 'secondary'
}

const Text = ({ children, typeColor = 'main' }: Props) => (
  <P typeColor={typeColor}>{children}</P>
)

export default Text
```

<br>

## ✅ Questionário
Como acessamos o conteúdo inserido dentro de um componente React?

A- através de props.content

B- através da propriedade content em props

C- através da função props.children

D- através da propriedade children em props

Resposta: No React, podemos acessar o conteúdo inserido dentro de um componente através da propriedade children em props. Portanto, a resposta correta é a opção D. As outras opções (A, B e C) não são maneiras corretas de acessar o conteúdo inserido dentro de um componente React. 