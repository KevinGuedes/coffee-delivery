import { CoffeeCard } from '../CoffeeCard'
import { CoffeesListContainer } from './styles'

export function CoffeesList(): JSX.Element {
  return (
    <CoffeesListContainer>
      <h2>Nossos cafés</h2>
      <div>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </CoffeesListContainer>
  )
}
