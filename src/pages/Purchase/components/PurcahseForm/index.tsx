import { PurchaseFormContainer } from './styles'
import { PaymentTypeForm } from '../PaymentTypeForm'
import { AddressForm } from '../AddressForm'
import { useFormContext } from 'react-hook-form'
import { useCoffeesContext } from '../../../../contexts/CoffeesContext'
import { useNavigate } from 'react-router-dom'
import { PurchaseFormData } from '../..'

export function PurchaseForm(): JSX.Element {
  const { onSubmitPurchase } = useCoffeesContext()
  const { reset, handleSubmit } = useFormContext<PurchaseFormData>()
  const navigate = useNavigate()

  function handleSubmitPurchase(purchaseFormData: PurchaseFormData): void {
    console.log(purchaseFormData)
    onSubmitPurchase(purchaseFormData)
    navigate('/success')
    reset()
  }

  return (
    <PurchaseFormContainer>
      <h3>Complete seu pedido</h3>

      <form id="purchase" onSubmit={handleSubmit(handleSubmitPurchase)}>
        <AddressForm />
        <PaymentTypeForm />
      </form>
    </PurchaseFormContainer>
  )
}
