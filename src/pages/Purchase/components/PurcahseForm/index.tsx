import { PurchaseFormContainer } from './styles'
import { PaymentType, PaymentTypeForm } from '../PaymentTypeForm'
import { AddressForm } from '../AddressForm'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const purchaseFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'CEP inválido'),
  street: zod.string().min(1, 'Rua não informada'),
  number: zod.number().int('Número inválido').nonnegative('Número inválido'),
  city: zod.string().min(1, 'Cidade não informado'),
  neighborhood: zod.string().min(1, 'Bairro não informado'),
  uf: zod.string().length(2, 'UF deve conter somente 2 dígitos'),
  complement: zod.string(),
  paymentType: zod.nativeEnum(PaymentType)
})

type PurchaseFormData = zod.infer<typeof purchaseFormValidationSchema>

export function PurchaseForm(): JSX.Element {
  const purchaseForm = useForm<PurchaseFormData>({
    resolver: zodResolver(purchaseFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      complement: '',
      neighborhood: '',
      uf: '',
      number: undefined,
      paymentType: undefined
    }
  })

  const { handleSubmit, formState, reset } = purchaseForm

  function handleCompletePurchase(data: PurchaseFormData): void {
    console.log(data)
    console.log(formState.errors)
    reset()
  }

  console.log(formState.errors)

  return (
    <PurchaseFormContainer>
      <h3>Complete seu pedido</h3>

      <form id="purchase" onSubmit={handleSubmit(handleCompletePurchase)}>
        <FormProvider {...purchaseForm}>
          <AddressForm />
          <PaymentTypeForm />
        </FormProvider>
      </form>
    </PurchaseFormContainer>
  )
}
