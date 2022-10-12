import { useTheme } from 'styled-components'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  CoffeeCard,
  CoffeeImage,
  CoffeeTagWrapper,
  CoffeeTag,
  CoffeeName,
  CoffeeDescription,
  CoffeeFooter,
  CoffeePrice,
  CounterWrapper,
  CounterButton,
  CounterQuantity,
  AddToCart,
  CoffeePriceCoin,
  Counter,
} from './styles'

interface Coffee {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  image: string
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeList({ coffee }: CoffeeProps) {
  const theme = useTheme()

  return (
    <CoffeeCard>
      <CoffeeImage src={`/coffee/${coffee.image}`} alt="" />
      <CoffeeTagWrapper>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTagWrapper>

      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CoffeeFooter>
        <CoffeePrice>
          <CoffeePriceCoin>R$</CoffeePriceCoin>
          {String(coffee.price).padEnd(4, '0')}
        </CoffeePrice>
        <CounterWrapper>
          <Counter>
            <CounterButton>
              <Minus size={14} color={theme.purple.default} />
            </CounterButton>
            <CounterQuantity>1</CounterQuantity>
            <CounterButton>
              <Plus size={14} color={theme.purple.default} />
            </CounterButton>
          </Counter>
          <AddToCart>
            <ShoppingCart color={theme.white} />
          </AddToCart>
        </CounterWrapper>
      </CoffeeFooter>
    </CoffeeCard>
  )
}
