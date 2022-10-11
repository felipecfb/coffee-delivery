import { CoffeeList } from '../CoffeeList'
import { CoffeesContainer, Title } from './styles'

export function Coffees() {
  return (
    <CoffeesContainer>
      <Title>Nossos cafés</Title>
      <CoffeeList />
    </CoffeesContainer>
  )
}
