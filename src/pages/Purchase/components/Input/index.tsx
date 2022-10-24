import { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { PurchaseFormData } from '../PurcahseForm'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showOptionalLabel?: boolean
  register: UseFormRegister<PurchaseFormData>
  id: keyof PurchaseFormData
  error?: FieldError
}

export function Input({
  showOptionalLabel = false,
  register,
  error,
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
      {error !== undefined && <p role="alert">{error.message}</p>}
    </InputContainer>
  )
}
