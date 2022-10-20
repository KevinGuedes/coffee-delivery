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
  id,
  type,
  register,
  ...props
}: InputProps): JSX.Element {
  const registerOptions = type === 'number' ? { valueAsNumber: true } : {}

  return (
    <InputContainer>
      <input {...props} id={id} {...register(id, registerOptions)} />
      {hasOptionalLabel && <span>Opcional</span>}
    </InputContainer>
  )
}
