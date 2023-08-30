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
