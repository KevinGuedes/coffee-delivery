import {
  SelectedCoffeesCard,
  SelectedCoffeesContainer,
  SummaryContainer,
  SummaryData
} from './styles'

export function SelectedCoffees(): JSX.Element {
  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <SelectedCoffeesCard>
        <SummaryContainer>
          <SummaryData isTotalPrice={false}>
            <span>Total de itens</span>
            <span>RS$ 29,70</span>
          </SummaryData>

          <SummaryData isTotalPrice={false}>
            <span>Entrega</span>
            <span>RS$3,50</span>
          </SummaryData>

          <SummaryData isTotalPrice>
            <strong>Total</strong>
            <strong>RS$ 33,20</strong>
          </SummaryData>
        </SummaryContainer>

        <button type="submit">CONFIRMAR PEDIDO</button>
      </SelectedCoffeesCard>
    </SelectedCoffeesContainer>
  )
}
