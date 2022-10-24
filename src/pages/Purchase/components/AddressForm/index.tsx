import { MapPinLine } from 'phosphor-react'
import { FormEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { cepInputMask } from '../../../../utils/cepInputMask'
import { Input } from '../Input'
import { PurchaseFormData } from '../PurcahseForm'
import {
  AddressDataContainer,
  FormSectionHeader,
  InputsContainer
} from './styles'

export function AddressForm(): JSX.Element {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<PurchaseFormData>()

  function handleCepInput(event: FormEvent<HTMLInputElement>): void {
    event.currentTarget.value = cepInputMask(event.currentTarget.value)
  }

  const complement = watch('complement')
  const showOptionalLabel = complement?.length === 0

  console.log(errors)

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
          maxLength={9}
          error={errors.cep}
        />
        <Input
          placeholder="Rua"
          title="Rua"
          id="street"
          register={register}
          error={errors.street}
        />
        <div>
          <Input
            placeholder="Número"
            title="Número"
            id="number"
            type="number"
            register={register}
            error={errors.number}
          />
          <Input
            placeholder="Complemento"
            title="Complemento"
            showOptionalLabel={showOptionalLabel}
            id="complement"
            register={register}
            error={errors.complement}
          />
        </div>
        <div>
          <Input
            placeholder="Bairro"
            title="Bairro"
            id="neighborhood"
            register={register}
            error={errors.neighborhood}
          />
          <Input
            placeholder="Cidade"
            title="Cidade"
            id="city"
            register={register}
            error={errors.city}
          />
          <Input
            placeholder="UF"
            title="UF"
            id="uf"
            register={register}
            error={errors.uf}
          />
        </div>
      </InputsContainer>
    </AddressDataContainer>
  )
}
