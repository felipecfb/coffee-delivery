import { Delivery } from './components/Delivery'
import { Payment } from './components/Payment'
import { FormContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <h1>Complete seu pedido</h1>
      <Delivery />
      <Payment />
    </FormContainer>
  )
}
