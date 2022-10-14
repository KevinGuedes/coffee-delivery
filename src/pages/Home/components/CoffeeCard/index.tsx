import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeCardContainer, FooterContainer, HeaderContainer } from './styles'

import { Coffee } from '../../../../data/coffees'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps): JSX.Element {
  const [selectedAmount, setSelectedAmount] = useState(0)

  function handleAddCoffee(): void {
    if (selectedAmount < 99) {
      setSelectedAmount(state => {
        return state + 1
      })
    }
  }

  function handleRemoveCoffee(): void {
    if (selectedAmount > 0) {
      setSelectedAmount(state => {
        return state - 1
      })
    }
  }

  return (
    <CoffeeCardContainer>
      <HeaderContainer>
        <img src={coffee.image} alt="Café Expresso Tradicional" />
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

        <div>
          <button
            type="button"
            title="Remover café"
            onClick={handleRemoveCoffee}
          >
            <Minus size={16} weight="bold" />
          </button>
          <span>{selectedAmount}</span>
          <button
            type="button"
            title="Adicionar café"
            onClick={handleAddCoffee}
          >
            <Plus size={16} weight="bold" />
          </button>
        </div>

        <NavLink to="/purchase" title="Cart">
          <ShoppingCart size={26} weight="fill" />
        </NavLink>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
