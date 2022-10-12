import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { PaymentType } from './components/PaymentType'
import {
  PaymentContainer,
  PaymentHeader,
  PaymentHeaderContent,
  PaymentTypeWrapper,
  SubtitleHeader,
  TitleHeader,
} from './styles'

export function Payment() {
  const theme = useTheme()

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} color={theme.purple.default} />
        <PaymentHeaderContent>
          <TitleHeader>Pagamento</TitleHeader>
          <SubtitleHeader>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </SubtitleHeader>
        </PaymentHeaderContent>
      </PaymentHeader>

      <PaymentTypeWrapper>
        <PaymentType
          icon={<CreditCard color={theme.purple.default} />}
          title={'Cartão de crédito'}
        />
        <PaymentType
          icon={<Bank color={theme.purple.default} />}
          title={'Cartão de débito'}
        />
        <PaymentType
          icon={<Money color={theme.purple.default} />}
          title={'Dinheiro'}
        />
      </PaymentTypeWrapper>
    </PaymentContainer>
  )
}
