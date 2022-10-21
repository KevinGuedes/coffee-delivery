import { Minus, Plus } from 'phosphor-react'
import { useCoffeesContext } from '../../contexts/CoffeesContext'
import { SelectAmountContainer } from './styles'

interface SelectAmountProps {
  coffeeId: number
}

export function SelectAmount({ coffeeId }: SelectAmountProps): JSX.Element {
  const {
    addOneCoffeeUnitToCart,
    removeOneCoffeeUnitFromCart,
    getCoffeeUnitsByCoffeeId
  } = useCoffeesContext()

  const units = getCoffeeUnitsByCoffeeId(coffeeId)

  function handleAddOneCoffeeUnitToCart(): void {
    if (units < 99) addOneCoffeeUnitToCart(coffeeId)
  }

  function handleRemoveOneCoffeeUnitFromCart(): void {
    if (units > 0) removeOneCoffeeUnitFromCart(coffeeId)
  }

  return (
    <SelectAmountContainer>
      <button
        type="button"
        title="Remover uma unidade"
        onClick={handleRemoveOneCoffeeUnitFromCart}
      >
        <Minus size={16} weight="bold" />
      </button>
      <span>{units}</span>
      <button
        type="button"
        title="Adicionar uma unidade"
        onClick={handleAddOneCoffeeUnitToCart}
      >
        <Plus size={16} weight="bold" />
      </button>
    </SelectAmountContainer>
  )
}
