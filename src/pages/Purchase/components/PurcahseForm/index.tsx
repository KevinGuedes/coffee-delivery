import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money
} from 'phosphor-react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import {
  FormSectionHeader,
  MainDataContainer,
  PaymentTypeContainer,
  PurchaseFormContainer
} from './styles'
import { useState } from 'react'

export function PurchaseForm(): JSX.Element {
  const [paymentType, setPaymentType] = useState('')

  function handlePaymentTypeChange(paymentType: string): void {
    setPaymentType(paymentType)
  }

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

          <ToggleGroup.Root
            type="single"
            value={paymentType}
            onValueChange={handlePaymentTypeChange}
          >
            <ToggleGroup.Item value="credit-card">
              <CreditCard size={16} />
              Certão de crédito
            </ToggleGroup.Item>
            <ToggleGroup.Item value="debit-card">
              <Bank size={16} />
              Certão de débito
            </ToggleGroup.Item>
            <ToggleGroup.Item value="money">
              <Money size={16} />
              Dinheiro
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </PaymentTypeContainer>
      </form>
    </PurchaseFormContainer>
  )
}
