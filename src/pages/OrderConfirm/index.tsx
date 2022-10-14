import {
  OrderConfirmContainer,
  OrderConfirmMessage,
  Title,
  Subtitle,
  HeroImage,
  OrderInfoContainer,
} from './styles'

import { Header } from '../../components/Header'
import { OrderInfo } from './components/OrderInfo'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import HeroImageSrc from '../../assets/bannerSucess.svg'

export function OrderConfirm() {
  const theme = useTheme()

  return (
    <OrderConfirmContainer>
      <section>
        <OrderConfirmMessage>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </OrderConfirmMessage>

        <OrderInfoContainer>
          <OrderInfo
            icon={<MapPin size={16} weight="fill" color={theme.white} />}
            title="Entrega em Rua João Daniel Martinelli, 102"
            subtitle="Farrapos - Porto Alegre, RS"
            background={theme.purple.default}
          />
          <OrderInfo
            icon={<Timer size={16} weight="fill" color={theme.white} />}
            title="Previsão de entrega"
            subtitle="20 min - 30 min"
            background={theme.yellow.default}
          />
          <OrderInfo
            icon={
              <CurrencyDollar size={16} weight="fill" color={theme.white} />
            }
            title="Pagamento na entrega"
            subtitle="Cartão de Crédito"
            background={theme.yellow.dark}
          />
        </OrderInfoContainer>
      </section>

      <HeroImage src={HeroImageSrc} />
    </OrderConfirmContainer>
  )
}
