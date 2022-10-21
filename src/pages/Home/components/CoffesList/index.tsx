import { useCoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesListContainer } from './styles'

export function CoffeesList(): JSX.Element {
  const { coffees } = useCoffeesContext()

  return (
    <CoffeesListContainer>
      <h2>Nossos cafés</h2>
      <menu>
        {coffees.map(coffee => {
          return (
            <li key={coffee.id}>
              <CoffeeCard coffee={coffee} />
            </li>
          )
        })}
      </menu>
    </CoffeesListContainer>
  )
}
