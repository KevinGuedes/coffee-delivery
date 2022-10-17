import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasOptionalLabel?: boolean
}

export function Input({
  hasOptionalLabel = false,
  ...props
}: InputProps): JSX.Element {
  return (
    <InputContainer>
      <input {...props} />
      {hasOptionalLabel && <span>Opcional</span>}
    </InputContainer>
  )
}
