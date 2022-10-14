import { Form } from './components/Form'
import { OrderDetails } from './components/OrderDetails'

import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <OrderDetails />
    </CheckoutContainer>
  )
}
