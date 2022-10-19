import { CoffeeCard } from '../CoffeeCard'
import { CoffeesListContainer } from './styles'

import { coffeesData } from '../../../../data/coffees'

export function CoffeesList(): JSX.Element {
  return (
    <CoffeesListContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffeesData.map(coffee => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </div>
    </CoffeesListContainer>
  )
}
