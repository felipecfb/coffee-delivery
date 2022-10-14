import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Router } from './routes/index.routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
