## 📝 Aula 10: Temas
Conteúdo da construção do projeto.

Criado temas para o projeto:
```
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'

function App() {
  const [stateDarkTheme, setStateDarkTheme] = useState(false)

  function changeTheme() {
    setStateDarkTheme(!stateDarkTheme)
  }

  return (
    <ThemeProvider theme={stateDarkTheme ? temaDark : temaLight}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
```

```
import Avatar from '../../components/Avatar'
import Text from '../../components/Text'
import Title from '../../components/Title'
import { Description, SidebarContainer, ThemeButton } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
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
      <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
```

<br>

## ✅ Questionário
"Através de qual componente do Styled Components fazemos a utilização de temas? "

A- ThemeProvider

B- ThemeContainer

C- ThemeConsumer

D- Theme

Resposta: Para utilizar temas com o Styled Components, você pode usar o componente ThemeProvider. O ThemeProvider é um componente de ordem superior que fornece um tema para todos os componentes estilizados descendentes. Ele permite que você defina um tema global para o seu aplicativo e acesse as propriedades do tema em seus componentes estilizados. Portanto, a resposta correta é a opção A. As outras opções (B, C e D) não são componentes do Styled Components para utilização de temas.