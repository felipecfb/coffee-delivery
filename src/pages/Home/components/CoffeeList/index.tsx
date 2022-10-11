import {
  CoffeeCardContainer,
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

import expressoTradicional from '../../../../assets/coffee/Expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CoffeeList() {
  const theme = useTheme()

  return (
    <CoffeeCardContainer>
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
      <CoffeeCard>
        <CoffeeImage src={expressoTradicional} alt="" />
        <CoffeeTagWrapper>
          <CoffeeTag>Tradicional</CoffeeTag>
        </CoffeeTagWrapper>

        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeDescription>

        <CoffeeFooter>
          <CoffeePrice>
            <CoffeePriceCoin>R$</CoffeePriceCoin>
            9,90
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
    </CoffeeCardContainer>
  )
}
