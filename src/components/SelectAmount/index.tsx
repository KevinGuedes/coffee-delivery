import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { SelectAmountContainer } from './styles'

export function SelectAmount(): JSX.Element {
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
    <SelectAmountContainer>
      <button type="button" title="Remover café" onClick={handleRemoveCoffee}>
        <Minus size={16} weight="bold" />
      </button>
      <span>{selectedAmount}</span>
      <button type="button" title="Adicionar café" onClick={handleAddCoffee}>
        <Plus size={16} weight="bold" />
      </button>
    </SelectAmountContainer>
  )
}
