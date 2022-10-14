import { ReactNode } from 'react'

import {
  OrderInfoContainer,
  IconWrapper,
  Content,
  Title,
  Subtitle,
} from './styles'

interface OrderInfoProps {
  icon: ReactNode
  title: string
  subtitle: string
  background: string
}

export function OrderInfo({
  icon,
  title,
  subtitle,
  background,
}: OrderInfoProps) {
  return (
    <OrderInfoContainer>
      <IconWrapper background={background}>{icon}</IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Subtitle>
          <strong>{subtitle}</strong>
        </Subtitle>
      </Content>
    </OrderInfoContainer>
  )
}
