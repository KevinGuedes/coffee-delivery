import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { CoffeesContextProvider } from './contexts/CoffeesContext'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
