import { SelectAmount } from '../../../../components/SelectAmount'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CoffeeCardContainer, FooterContainer, HeaderContainer } from './styles'

import { Coffee } from '../../../../data/coffees'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps): JSX.Element {
  return (
    <CoffeeCardContainer>
      <HeaderContainer>
        <img src={coffee.image} alt={coffee.name} />
        <div>
          {coffee.tags.map(tag => {
            return <strong key={tag}>{tag}</strong>
          })}
        </div>
      </HeaderContainer>

      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>

      <FooterContainer>
        <span>
          R$
          <strong>{coffee.price}</strong>
        </span>

        <SelectAmount coffeeId={coffee.id} />

        <NavLink to="/purchase" title="Cart">
          <ShoppingCart size={26} weight="fill" />
        </NavLink>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
