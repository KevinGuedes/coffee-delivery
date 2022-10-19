import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useCoffeesContext } from '../../contexts/CoffeesContext'

export function Header(): JSX.Element {
  const { totalUnits } = useCoffeesContext()

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <div>
          <span>
            <MapPin size={26} weight="fill" />
            Porto Alegre, RS
          </span>
          <NavLink to="/purchase" title="Cart">
            <ShoppingCart size={26} weight="fill" />
            {totalUnits > 0 && <strong>{totalUnits}</strong>}
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
