import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useState } from 'react'
import { FormSectionHeader, PaymentTypeFormContainer } from './styles'

export function PaymentTypeForm(): JSX.Element {
  const [paymentType, setPaymentType] = useState('')

  function handlePaymentTypeChange(paymentType: string): void {
    setPaymentType(paymentType)
  }

  return (
    <PaymentTypeFormContainer>
      <FormSectionHeader>
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
          CARTÃO DE CRÉDITO
        </ToggleGroup.Item>
        <ToggleGroup.Item value="debit-card">
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </ToggleGroup.Item>
        <ToggleGroup.Item value="money">
          <Money size={16} />
          DINHEIRO
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </PaymentTypeFormContainer>
  )
}
