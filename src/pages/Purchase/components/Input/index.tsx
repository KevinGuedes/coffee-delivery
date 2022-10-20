import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showOptionalLabel?: boolean
  register: UseFormRegister<FieldValues>
  id: string
}

export function Input({
  showOptionalLabel = false,
  register,
  ...props
}: InputProps): JSX.Element {
  const isNumberInput = props.type === 'number'

  return (
    <InputContainer>
      <input
        {...props}
        {...register(props.id, { valueAsNumber: isNumberInput })}
        {...(isNumberInput && { min: 0, step: 1 })}
      />
      {showOptionalLabel && <span>Opcional</span>}
    </InputContainer>
  )
}
