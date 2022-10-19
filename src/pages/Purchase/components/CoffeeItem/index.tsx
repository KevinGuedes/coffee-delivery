import { Trash } from 'phosphor-react'
import { SelectAmount } from '../../../../components/SelectAmount'
import {
  CoffeeOnCart,
  useCoffeesContext
} from '../../../../contexts/CoffeesContext'
import { ActionsContainer, CoffeeItemContainer } from './styles'

interface CoffeeItemProps {
  coffeeOnCart: CoffeeOnCart
}

export function CoffeeItem({ coffeeOnCart }: CoffeeItemProps): JSX.Element {
  const { removeCoffeeFromCart } = useCoffeesContext()

  function handleRemoveCoffeeFromCart(): void {
    removeCoffeeFromCart(coffeeOnCart.id)
  }
  return (
    <CoffeeItemContainer>
      <div>
        <img src={coffeeOnCart.image} alt={coffeeOnCart.name} />
        <ActionsContainer>
          <span>{coffeeOnCart.name}</span>
          <div>
            <SelectAmount coffeeId={coffeeOnCart.id} />
            <button type="button" onClick={handleRemoveCoffeeFromCart}>
              <Trash size={18} />
              REMOVER
            </button>
          </div>
        </ActionsContainer>
      </div>

      <strong>R$ {coffeeOnCart.price}</strong>
    </CoffeeItemContainer>
  )
}
