import { MapPinLine } from 'phosphor-react'
import { FormEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { cepInputMask } from '../../../../utils/cepInputMask'
import { Input } from '../Input'
import {
  AddressDataContainer,
  FormSectionHeader,
  InputsContainer
} from './styles'

export function AddressForm(): JSX.Element {
  const { register, watch } = useFormContext()

  function handleCepInput(event: FormEvent<HTMLInputElement>): void {
    cepInputMask(event)
  }

  const complement: string = watch('complement')
  const showOptionalLabel = complement.length === 0

  return (
    <AddressDataContainer>
      <FormSectionHeader>
        <MapPinLine size={22} />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormSectionHeader>

      <InputsContainer>
        <Input
          placeholder="CEP"
          title="CEP"
          id="cep"
          onInput={handleCepInput}
          register={register}
        />
        <Input placeholder="Rua" title="Rua" id="street" register={register} />
        <div>
          <Input
            placeholder="Número"
            title="Número"
            id="number"
            type="number"
            register={register}
          />
          <Input
            placeholder="Complemento"
            title="Complemento"
            showOptionalLabel={showOptionalLabel}
            id="complement"
            register={register}
          />
        </div>
        <div>
          <Input
            placeholder="Bairro"
            title="Bairro"
            id="neighborhood"
            register={register}
          />
          <Input
            placeholder="Cidade"
            title="Cidade"
            id="city"
            register={register}
          />
          <Input placeholder="UF" title="UF" id="uf" register={register} />
        </div>
      </InputsContainer>
    </AddressDataContainer>
  )
}
