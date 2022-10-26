import { FieldErrors, useFormContext } from 'react-hook-form'
import { FormValidationContainer } from './styles'
import { PurchaseFormData } from '../..'
import { ErrorMessage } from '@hookform/error-message'

export function FormValidation(): JSX.Element {
  const {
    formState: { errors }
  } = useFormContext<PurchaseFormData>()

  const errorData = errors as FieldErrors
  const errorDataKeys = Object.keys(errorData)

  return (
    <FormValidationContainer>
      <ul>
        {errorDataKeys.map(key => {
          return (
            <ErrorMessage
              key={key}
              errors={errors}
              name={key as keyof PurchaseFormData}
              render={({ message }) => <li role="alert">{message}</li>}
            />
          )
        })}
      </ul>
    </FormValidationContainer>
  )
}
