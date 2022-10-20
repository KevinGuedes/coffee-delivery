import { CurrencyDollar } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../Input'
import {
  AddressDataContainer,
  FormSectionHeader,
  InputsContainer
} from './styles'

export function AddressForm(): JSX.Element {
  const { register } = useFormContext()

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
        <Input placeholder="CEP" id="cep" register={register} />
        <Input placeholder="Rua" id="street" register={register} />
        <div>
          <Input
            placeholder="Número"
            id="number"
            type="number"
            register={register}
          />
          <Input
            placeholder="Complemento"
            hasOptionalLabel
            id="complement"
            register={register}
          />
        </div>
        <div>
          <Input placeholder="Bairro" id="neighborhood" register={register} />
          <Input placeholder="Cidade" id="city" register={register} />
          <Input placeholder="UF" id="uf" register={register} />
        </div>
      </InputsContainer>
    </AddressDataContainer>
  )
}
