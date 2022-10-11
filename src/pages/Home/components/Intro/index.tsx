import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  Icon,
  IntroContainer,
  ItemContainer,
  ItemsWrapper,
  Subtitle,
  Text,
  Title,
  TitleContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <TitleContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>
      </TitleContainer>

      <ItemsWrapper>
        <ItemContainer>
          <Icon variant="cart">
            <ShoppingCart size={22} />
          </Icon>
          <Text>Compra simples e segura</Text>
        </ItemContainer>
        <ItemContainer>
          <Icon variant="package">
            <Package size={22} />
          </Icon>
          <Text>Embalagem mantém o café intacto</Text>
        </ItemContainer>
        <ItemContainer>
          <Icon variant="timer">
            <Timer size={22} />
          </Icon>
          <Text>Entrega rápida e rastreada</Text>
        </ItemContainer>
        <ItemContainer>
          <Icon variant="coffee">
            <Coffee size={22} />
          </Icon>
          <Text>O café chega fresquinho até você</Text>
        </ItemContainer>
      </ItemsWrapper>
    </IntroContainer>
  )
}
