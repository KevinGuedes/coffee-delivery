import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { FormSectionHeader, PaymentTypeFormContainer } from './styles'

export enum PaymentType {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  CASH = 'Dinheiro'
}

export function PaymentTypeForm(): JSX.Element {
  const { register, setValue } = useFormContext()

  function handlePaymentTypeChange(paymentType: PaymentType): void {
    setValue('paymentType', paymentType)
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
        id="paymentType"
        type="single"
        {...register('paymentType')}
        onValueChange={handlePaymentTypeChange}
      >
        <ToggleGroup.Item value={PaymentType.CREDIT_CARD}>
          <CreditCard size={16} />
          {PaymentType.CREDIT_CARD.toUpperCase()}
        </ToggleGroup.Item>
        <ToggleGroup.Item value={PaymentType.DEBIT_CARD}>
          <Bank size={16} />
          {PaymentType.DEBIT_CARD.toUpperCase()}
        </ToggleGroup.Item>
        <ToggleGroup.Item value={PaymentType.CASH}>
          <Money size={16} />
          {PaymentType.CASH.toUpperCase()}
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </PaymentTypeFormContainer>
  )
}
