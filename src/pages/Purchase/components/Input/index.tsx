import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { PurchaseFormData } from '../..'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showOptionalLabel?: boolean
  register: UseFormRegister<PurchaseFormData>
  id: keyof PurchaseFormData
}

export function Input({
  showOptionalLabel = false,
  register,
  id,
  ...props
}: InputProps): JSX.Element {
  const isNumberInput = props.type === 'number'

  return (
    <InputContainer>
      <input
        {...props}
        {...register(id, { valueAsNumber: isNumberInput })}
        {...(isNumberInput && { min: 0, step: 1 })}
      />
      {showOptionalLabel && <span>Opcional</span>}
    </InputContainer>
  )
}
