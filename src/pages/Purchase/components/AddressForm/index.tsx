import { CurrencyDollar } from 'phosphor-react'
import { Input } from '../Input'
import {
  AddressDataContainer,
  FormSectionHeader,
  InputsContainer
} from './styles'

export function AddressForm(): JSX.Element {
  return (
    <AddressDataContainer>
      <FormSectionHeader>
        <CurrencyDollar size={22} />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormSectionHeader>

      <InputsContainer>
        <Input placeholder="CEP" />
        <Input placeholder="Rua" />
        <div>
          <Input placeholder="Número" />
          <Input placeholder="Complemento" hasOptionalLabel />
        </div>
        <div>
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
        </div>
      </InputsContainer>
    </AddressDataContainer>
  )
}
