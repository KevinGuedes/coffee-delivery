import { CoffeesList } from './components/CoffesList'
import { Introduction } from './components/Introduction'

export function Home(): JSX.Element {
  return (
    <main>
      <Introduction />
      <CoffeesList />
    </main>
  )
}
