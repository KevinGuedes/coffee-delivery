import { IntroductionContainer } from './styles'

import coffeeIntroduction from '../../../../assets/coffee-introduction.png'

export function Introduction(): JSX.Element {
  return (
    <IntroductionContainer>
      <aside>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div>
          <span></span>
        </div>
      </aside>
      <img src={coffeeIntroduction} alt="" />
    </IntroductionContainer>
  )
}
