import { Header } from '../../components/Header'
import { Form } from './components/Form'
import { OrderDetails } from './components/OrderDetails'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <Form />
        <OrderDetails />
      </CheckoutContainer>
    </>
  )
}
