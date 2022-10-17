import { PurchaseFormContainer } from './styles'
import { PaymentTypeForm } from '../PaymentTypeForm'
import { AddressForm } from '../AddressForm'

export function PurchaseForm(): JSX.Element {
  return (
    <PurchaseFormContainer>
      <h3>Complete seu pedido</h3>

      <form id="purchase">
        <AddressForm />
        <PaymentTypeForm />
      </form>
    </PurchaseFormContainer>
  )
}
