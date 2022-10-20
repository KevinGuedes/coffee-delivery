import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasOptionalLabel?: boolean
  register: UseFormRegister<FieldValues>
  id: string
}

export function Input({
  hasOptionalLabel = false,
  register,
  ...props
}: InputProps): JSX.Element {
  return (
    <InputContainer>
      <input
        {...props}
        {...register(props.id, { valueAsNumber: props.type === 'number' })}
      />
      {hasOptionalLabel && <span>Opcional</span>}
    </InputContainer>
  )
}
