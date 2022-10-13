import { Introduction } from './components/Introduction'
import { HomeContainer } from './styles'

export function Home(): JSX.Element {
  return (
    <HomeContainer>
      <Introduction />
    </HomeContainer>
  )
}
