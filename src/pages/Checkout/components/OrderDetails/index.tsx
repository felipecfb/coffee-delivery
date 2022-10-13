import { OrderItem } from './components/OrderItem'
import {
  OrderDetailsWrapper,
  OrderDetailsContainer,
  OrderTotalWrapper,
  OrderTotalItems,
  OrderTotalDelivered,
  OrderTotalSum,
  ConfirmButton,
} from './styles'

export function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <h1>Cafés selecionados</h1>

      <OrderDetailsWrapper>
        <OrderItem />
        <OrderItem />

        <OrderTotalWrapper>
          <OrderTotalItems>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </OrderTotalItems>
          <OrderTotalDelivered>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </OrderTotalDelivered>
          <OrderTotalSum>
            <span>Total</span>
            <span>R$ 33,20</span>
          </OrderTotalSum>
        </OrderTotalWrapper>

        <ConfirmButton>Confirmar pedido</ConfirmButton>
      </OrderDetailsWrapper>
    </OrderDetailsContainer>
  )
}
