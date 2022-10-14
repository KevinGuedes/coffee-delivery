import { Trash } from 'phosphor-react'
import { SelectAmount } from '../../../../components/SelectAmount'
import { Coffee } from '../../../../data/coffees'
import { ActionsContainer, CoffeeItemContainer } from './styles'

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps): JSX.Element {
  return (
    <CoffeeItemContainer>
      <div>
        <img src={coffee.image} alt={coffee.name} />
        <ActionsContainer>
          <span>{coffee.name}</span>
          <div>
            <SelectAmount />
            <button type="button">
              <Trash size={18} />
              REMOVER
            </button>
          </div>
        </ActionsContainer>
      </div>

      <strong>R$ {coffee.price}</strong>
    </CoffeeItemContainer>
  )
}
