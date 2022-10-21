import { PurchaseFormContainer } from './styles'
import { PaymentType, PaymentTypeForm } from '../PaymentTypeForm'
import { AddressForm } from '../AddressForm'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useCoffeesContext } from '../../../../contexts/CoffeesContext'
import { useNavigate } from 'react-router-dom'

const purchaseFormValidationSchema = zod.object({
  cep: zod.string().length(9, 'CEP inválido'),
  street: zod.string().min(1, 'Rua não informada'),
  number: zod.number().int('Número inválido').nonnegative('Número inválido'),
  city: zod.string().min(1, 'Cidade não informado'),
  neighborhood: zod.string().min(1, 'Bairro não informado'),
  uf: zod.string().length(2, 'UF deve conter somente 2 dígitos'),
  complement: zod.string().optional(),
  paymentType: zod.nativeEnum(PaymentType)
})

export type PurchaseFormData = zod.infer<typeof purchaseFormValidationSchema>

export function PurchaseForm(): JSX.Element {
  const { onSubmitPurchase } = useCoffeesContext()
  const navigate = useNavigate()

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

  const { handleSubmit, reset } = purchaseForm

  function handleSubmitPurchase(purchaseFormData: PurchaseFormData): void {
    onSubmitPurchase(purchaseFormData)
    navigate('/success')
    reset()
  }

  return (
    <PurchaseFormContainer>
      <h3>Complete seu pedido</h3>

      <form id="purchase" onSubmit={handleSubmit(handleSubmitPurchase)}>
        <FormProvider {...purchaseForm}>
          <AddressForm />
          <PaymentTypeForm />
        </FormProvider>
      </form>
    </PurchaseFormContainer>
  )
}
