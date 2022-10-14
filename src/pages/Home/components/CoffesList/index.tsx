import { CoffeeCard } from '../CoffeeCard'
import { CoffeesListContainer } from './styles'

import { coffees } from '../../../../data/coffees'

export function CoffeesList(): JSX.Element {
  return (
    <CoffeesListContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffees.map(coffee => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </div>
    </CoffeesListContainer>
  )
}
