import { CoffeeList } from '../CoffeeList'
import { CoffeesContainer, CoffeesListContainer, Title } from './styles'

import coffeeAPI from '../../../../services/coffee'

export function Coffees() {
  return (
    <CoffeesContainer>
      <Title>Nossos cafés</Title>
      <CoffeesListContainer>
        {coffeeAPI.map((coffee) => (
          <CoffeeList coffee={coffee} key={coffee.id} />
        ))}
      </CoffeesListContainer>
    </CoffeesContainer>
  )
}
