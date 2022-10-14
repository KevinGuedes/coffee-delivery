import { SuccessContainer } from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryGuy from '../../assets/delivery-guy.png'
import { Information } from '../../components/Information'

export function Success(): JSX.Element {
  return (
    <SuccessContainer>
      <h1>Uhuuu! Pedido confirmado!</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <section>
        <div>
          <div>
            <Information.Root>
              <Information.Icon circleColor="purple">
                <MapPin size={18} weight="fill" />
              </Information.Icon>
              <Information.Text>
                Entrega em Rua João Daniel Martinelli, 102 <br />
                Farrapos - Porto Alegre, RS
              </Information.Text>
            </Information.Root>

            <Information.Root>
              <Information.Icon circleColor="yellow">
                <Timer size={18} weight="fill" />
              </Information.Icon>
              <Information.Text>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </Information.Text>
            </Information.Root>

            <Information.Root>
              <Information.Icon circleColor="yellow-dark">
                <CurrencyDollar size={18} weight="fill" />
              </Information.Icon>
              <Information.Text>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </Information.Text>
            </Information.Root>
          </div>
        </div>

        <img src={deliveryGuy} alt="Pessoa entregando café em uma moto" />
      </section>
    </SuccessContainer>
  )
}
