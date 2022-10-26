import {
  SelectedCoffeesCard,
  SelectedCoffeesContainer,
  SummaryContainer,
  SummaryData
} from './styles'

import { CoffeeItem } from '../CoffeeItem'
import { useCoffeesContext } from '../../../../contexts/CoffeesContext'
import { FormValidation } from '../FormValidation'
import { useFormContext } from 'react-hook-form'
import { PurchaseFormData } from '../..'

export function SelectedCoffees(): JSX.Element {
  const { formState } = useFormContext<PurchaseFormData>()
  const { coffeesOnCart, totalPrice, itemsPrice, deliveryPrice } =
    useCoffeesContext()

  const hasFormErrors = !formState.isValid

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

        {hasFormErrors && <FormValidation />}
      </SelectedCoffeesCard>
    </SelectedCoffeesContainer>
  )
}
