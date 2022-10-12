import { Header } from '../../components/Header'
import { Form } from './components/Form'
import { CheckoutContainer, CompleteOrder, SelectedCoffees } from './styles'

export function Checkout() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <Form />
        <SelectedCoffees>
          <h1>Cafés selecionados</h1>
        </SelectedCoffees>
      </CheckoutContainer>
    </>
  )
}
