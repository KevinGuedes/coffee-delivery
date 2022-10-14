import { SelectedCoffees } from './components/SelectedCoffeess'
import { PurchaseContainer } from './styles'

export function Purchase(): JSX.Element {
  return (
    <PurchaseContainer>
      <SelectedCoffees />
    </PurchaseContainer>
  )
}
