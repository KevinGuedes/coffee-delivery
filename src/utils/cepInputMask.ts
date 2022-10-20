import { FormEvent } from 'react'

export function cepInputMask(
  event: FormEvent<HTMLInputElement>
): FormEvent<HTMLInputElement> {
  event.currentTarget.maxLength = 9
  let value = event.currentTarget.value

  value = value.replace(/\s/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  event.currentTarget.value = value

  return event
}
