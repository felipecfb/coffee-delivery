import {
  OrderItemContainer,
  OrderItemImage,
  OrderItemContent,
  OrderItemName,
  Counter,
  CounterButton,
  Quantity,
  ItemPrice,
  RemoveButton,
  ButtonContainer,
  OrderItemActions,
} from './styles'

import ExpressImg from '../../../../../../../public/coffee/Americano.png'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderItem() {
  const theme = useTheme()

  return (
    <OrderItemContainer>
      <OrderItemImage src={ExpressImg} />
      <OrderItemContent>
        <OrderItemName>Expresso americano</OrderItemName>
        <OrderItemActions>
          <Counter>
            <CounterButton>
              <Minus size={14} color={theme.purple.default} />
            </CounterButton>
            <Quantity>1</Quantity>
            <CounterButton>
              <Plus size={14} color={theme.purple.default} />
            </CounterButton>
          </Counter>
          <RemoveButton>
            <Trash size={14} color={theme.purple.default} />
            Remover
          </RemoveButton>
        </OrderItemActions>
      </OrderItemContent>
      <ItemPrice>R$ 9,90</ItemPrice>
    </OrderItemContainer>
  )
}
