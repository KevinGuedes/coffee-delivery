import {
  SelectedCoffeesCard,
  SelectedCoffeesContainer,
  SummaryContainer,
  SummaryData
} from './styles'

import { CoffeeItem } from '../CoffeeItem'
import { useCoffeesContext } from '../../../../contexts/CoffeesContext'

export function SelectedCoffees(): JSX.Element {
  const { coffeesOnCart, totalPrice, itemsPrice, deliveryPrice } =
    useCoffeesContext()

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesCard>
        {coffeesOnCart.map(coffeeOnCart => {
          return (
            <CoffeeItem key={coffeeOnCart.id} coffeeOnCart={coffeeOnCart} />
          )
        })}

        <SummaryContainer>
          <SummaryData isTotalPrice={false}>
            <span>Total de itens</span>
            <span>{itemsPrice}</span>
          </SummaryData>

          <SummaryData isTotalPrice={false}>
            <span>Entrega</span>
            <span>{deliveryPrice}</span>
          </SummaryData>

          <SummaryData isTotalPrice>
            <strong>Total</strong>
            <strong>{totalPrice}</strong>
          </SummaryData>
        </SummaryContainer>

        <button form="purchase" type="submit">
          CONFIRMAR PEDIDO
        </button>
      </SelectedCoffeesCard>
    </SelectedCoffeesContainer>
  )
}
