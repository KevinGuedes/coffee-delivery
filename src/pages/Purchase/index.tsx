import { PurchaseForm } from './components/PurcahseForm'
import { SelectedCoffees } from './components/SelectedCoffeess'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { PurchaseContainer } from './styles'
import { PaymentType } from './components/PaymentTypeForm'
import { useCoffeesContext } from '../../contexts/CoffeesContext'
import { EmptyCart } from './components/EmptyCart'

const purchaseFormValidationSchema = zod.object({
  cep: zod
    .string()
    .length(9, 'CEP inválido')
    .regex(/^[0-9]{5}-[0-9]{3}$/),
  street: zod.string().min(1, 'Rua não informada'),
  number: zod
    .number({ invalid_type_error: 'Número não informado' })
    .int('Número inválido')
    .nonnegative('Número inválido'),
  city: zod.string().min(1, 'Cidade não informada'),
  neighborhood: zod.string().min(1, 'Bairro não informado'),
  uf: zod.string().length(2, 'Informe os 2 dígitos referentes a sua UF'),
  complement: zod.string().optional(),
  paymentType: zod.nativeEnum(PaymentType, {
    required_error: 'Escolha uma forma de pagamento'
  })
})

export type PurchaseFormData = zod.infer<typeof purchaseFormValidationSchema>

export function Purchase(): JSX.Element {
  const { isCartEmpty } = useCoffeesContext()
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

  return (
    <div>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <PurchaseContainer>
          <FormProvider {...purchaseForm}>
            <PurchaseForm />
            <SelectedCoffees />
          </FormProvider>
        </PurchaseContainer>
      )}
    </div>
  )
}
