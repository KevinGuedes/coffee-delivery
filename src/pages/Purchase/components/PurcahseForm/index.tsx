import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import {
  FormSectionHeader,
  MainDataContainer,
  PaymentTypeContainer,
  PurchaseFormContainer
} from './styles'

export function PurchaseForm(): JSX.Element {
  return (
    <PurchaseFormContainer>
      <h3>Complete seu pedido</h3>

      <form>
        <MainDataContainer>
          <FormSectionHeader iconColor="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormSectionHeader>
        </MainDataContainer>
        <PaymentTypeContainer>
          <FormSectionHeader iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormSectionHeader>
        </PaymentTypeContainer>
      </form>
    </PurchaseFormContainer>
  )
}
