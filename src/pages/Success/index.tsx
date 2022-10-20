import { SuccessContainer, SucessHeaderContainer } from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryGuy from '../../assets/delivery-guy.png'
import { Information } from '../../components/Information'
import { useCoffeesContext } from '../../contexts/CoffeesContext'

export function Success(): JSX.Element {
  const { purchaseFormData } = useCoffeesContext()

  return (
    <SuccessContainer>
      <SucessHeaderContainer>
        <h1>Uhuuu! Pedido confirmado!</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SucessHeaderContainer>
      <section>
        <div>
          <div>
            <Information.Root>
              <Information.Icon circleColor="purple">
                <MapPin size={18} weight="fill" />
              </Information.Icon>
              <Information.Address>
                Entrega em{' '}
                <strong>
                  {purchaseFormData.street}, {purchaseFormData.number}
                </strong>
                <br />
                {purchaseFormData.neighborhood} - {purchaseFormData.city},{' '}
                {purchaseFormData.uf}
              </Information.Address>
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
                Pagamento na entrega <br />
                <strong>{purchaseFormData.paymentType}</strong>
              </Information.Text>
            </Information.Root>
          </div>
        </div>

        <figure>
          <img src={deliveryGuy} alt="Pessoa entregando café em uma moto" />
        </figure>
      </section>
    </SuccessContainer>
  )
}
