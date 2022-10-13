import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Information } from '../../../../components/Information'
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
          <Information.Root>
            <Information.Icon circleColor="yellow-dark">
              <ShoppingCart size={18} weight="fill" />
            </Information.Icon>
            <Information.Text>Compra simples e segura</Information.Text>
          </Information.Root>

          <Information.Root>
            <Information.Icon circleColor="gray">
              <Package size={18} weight="fill" />
            </Information.Icon>
            <Information.Text>Embalagem mantém o café intacto</Information.Text>
          </Information.Root>

          <Information.Root>
            <Information.Icon circleColor="yellow">
              <Timer size={18} weight="fill" />
            </Information.Icon>
            <Information.Text>Entrega rápida e rastreada</Information.Text>
          </Information.Root>

          <Information.Root>
            <Information.Icon circleColor="purple">
              <Coffee size={18} weight="fill" />
            </Information.Icon>
            <Information.Text>
              O café chega fresquinho até você
            </Information.Text>
          </Information.Root>
        </div>
      </aside>
      <img src={coffeeIntroduction} alt="" />
    </IntroductionContainer>
  )
}
