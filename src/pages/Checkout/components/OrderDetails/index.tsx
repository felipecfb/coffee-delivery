import { OrderItem } from './components/OrderItem'
import { OrderDetailsBox, OrderDetailsContainer } from './styles'

export function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <h1>Cafés selecionados</h1>

      <OrderDetailsBox>
        <OrderItem />
        <OrderItem />
      </OrderDetailsBox>
    </OrderDetailsContainer>
  )
}
