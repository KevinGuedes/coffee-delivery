import {
  SelectedCoffeesCard,
  SelectedCoffeesContainer,
  SummaryContainer,
  SummaryData
} from './styles'

import { coffees } from '../../../../data/coffees'
import { CoffeeItem } from '../CoffeeItem'

export function SelectedCoffees(): JSX.Element {
  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesCard>
        {coffees.slice(0, 2).map(coffee => {
          return <CoffeeItem key={coffee.id} coffee={coffee} />
        })}

        <SummaryContainer>
          <SummaryData isTotalPrice={false}>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </SummaryData>

          <SummaryData isTotalPrice={false}>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </SummaryData>

          <SummaryData isTotalPrice>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </SummaryData>
        </SummaryContainer>

        <button form="purchase" type="submit">
          CONFIRMAR PEDIDO
        </button>
      </SelectedCoffeesCard>
    </SelectedCoffeesContainer>
  )
}
