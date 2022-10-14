import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeCardContainer } from './styles'

import coffee from '../../../../assets/coffees/traditional-express.png'

export function CoffeeCard(): JSX.Element {
  const [selectedAmount, setSelectedAmount] = useState(0)

  function handleAddCoffee(): void {
    setSelectedAmount(state => {
      return state + 1
    })
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
      <header>
        <img src={coffee} alt="Café Expresso Tradicional" />
        <div>
          <strong>TRADICIONAL</strong>
          <strong>GELADO</strong>
        </div>
      </header>

      <strong>Expresso Tradicional</strong>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <footer>
        <span>
          R$
          <strong>9.99</strong>
        </span>

        <div>
          <button
            type="button"
            title="Adicionar café"
            onClick={handleAddCoffee}
          >
            <Plus size={16} weight="bold" />
          </button>
          <span>{selectedAmount}</span>
          <button
            type="button"
            title="Remover café"
            onClick={handleRemoveCoffee}
          >
            <Minus size={16} weight="bold" />
          </button>
        </div>

        <NavLink to="/purchase" title="Cart">
          <ShoppingCart size={26} weight="fill" />
        </NavLink>
      </footer>
    </CoffeeCardContainer>
  )
}
