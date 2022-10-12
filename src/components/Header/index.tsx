import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
