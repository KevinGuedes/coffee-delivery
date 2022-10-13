import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <div>
          <span>
            <MapPin size={32} weight="fill" />
            Porto Alegre, RS
          </span>
          <NavLink to="/purchase" title="Cart">
            <ShoppingCart size={32} weight="fill" />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
