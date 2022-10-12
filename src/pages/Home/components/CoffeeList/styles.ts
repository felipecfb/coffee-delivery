import styled from 'styled-components'

export const CoffeeCard = styled.div`
  background: ${({ theme }) => theme.card};

  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const CoffeeImage = styled.img`
  margin-top: -40px;
`

export const CoffeeTagWrapper = styled.div`
  margin: 0.75rem 0 1rem;
  background-color: ${({ theme }) => theme.yellow.light};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
`

export const CoffeeTag = styled.span`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.yellow.dark};
  font-weight: bold;

  padding: 4px 8px;

  text-transform: uppercase;
`

export const CoffeeName = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.subtitle};
  font-family: 'Baloo 2', sans-serif;

  margin-bottom: 8px;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.label};

  text-align: center;
`

export const CoffeeFooter = styled.footer`
  margin-top: 33px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CoffeePriceCoin = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  font-weight: 400;
  margin-right: 4px;
`

export const CoffeePrice = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-family: 'Baloo 2', sans-serif;
  line-height: 32px;
`

export const CounterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Counter = styled.div`
  background-color: ${({ theme }) => theme.button};
  padding: 8px 12px;
  border-radius: 6px;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  &:focus {
    box-shadow: none;
  }
`

export const CounterButton = styled(Button)``

export const CounterQuantity = styled.span`
  margin: 0 4px;

  color: ${({ theme }) => theme.title};
  font-size: 1rem;
`

export const AddToCart = styled(Button)`
  background-color: ${({ theme }) => theme.purple.dark};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
