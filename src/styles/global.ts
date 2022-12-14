import { createGlobalStyle } from 'styled-components'
import { device } from './devices'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.base.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.brand.purple};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${props => props.theme.brand.purple};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.brand['purple-dark']};
  }

  @media ${device.mobile} {
    html {
      font-size: 87.5%;
    }
  }
`
