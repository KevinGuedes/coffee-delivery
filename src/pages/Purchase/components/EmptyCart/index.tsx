import { List } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { EmptyCartContainer } from './styles'

export interface NavigationState {
  shouldGoToMenu: boolean
}

export function EmptyCart(): JSX.Element {
  return (
    <EmptyCartContainer>
      <h1>Ooops! Seu carrinho está vazio</h1>
      <p>Acesse o nosso Menu e seleciones alguns dos nossos cafés</p>
      <NavLink to="/" state={{ shouldGoToMenu: true } as NavigationState}>
        <List size={22} />
        Acessar Menu
      </NavLink>
    </EmptyCartContainer>
  )
}
