## 📝 Aula 09: Estilizando a sidebar
Conteúdo da construção do projeto.

Criado componente de projeto e estilização:
```
import Avatar from '../../components/Avatar'
import Text from '../../components/Text'
import Title from '../../components/Title'
import { Description, SidebarContainer, ThemeButton } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Bruno Oliveira</Title>
      <Text typeColor="secondary" fontSize={16}>
        BrunoOliveira16
      </Text>
      <Description fontSize={12} typeColor="main">
        Engenheiro Front-end
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
```

```
import styled from 'styled-components'
import { P } from '../../components/Text/styles'

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`

```

<br>

## ✅ Questionário
Como acessamos uma propriedade de um componente estilizado?

A- através de uma arrow function dentro da regra de estilização, onde invocamos a propriedade, ex: ${(props) => props.fontSize()}

B- através da função props que irá retornar um objeto com as propriedades

C- através de uma arrow function dentro da regra de estilização, onde acessamos a propriedade, ex: ${(props) => props.fontSize}

D- não é possível

Resposta: A resposta correta é a opção C. As outras opções (A, B e D) não são maneiras corretas de acessar uma propriedade de um componente estilizado com o Styled Components.