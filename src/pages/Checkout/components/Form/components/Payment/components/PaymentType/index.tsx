import { ReactNode } from 'react'
import { PaymentTypeContainer, PaymentTypeTitle } from './styles'

interface PaymentTypeProps {
  icon: ReactNode
  title: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
}

export function PaymentType({ icon, title }: PaymentTypeProps) {
  return (
    <PaymentTypeContainer>
      {icon}
      <PaymentTypeTitle>{title}</PaymentTypeTitle>
    </PaymentTypeContainer>
  )
}
