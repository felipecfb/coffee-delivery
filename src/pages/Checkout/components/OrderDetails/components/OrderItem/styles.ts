import styled from 'styled-components'

export const OrderItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;

  padding-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.button};

  & ~ div {
    padding-top: 24px;
  }
`

export const OrderItemImage = styled.img`
  max-width: 4rem;
`

export const OrderItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const OrderItemName = styled.p``

export const OrderItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.button};
  padding: 8px 12px;
  border-radius: 6px;
`

export const Counter = styled(ButtonContainer)``

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

export const Quantity = styled.span`
  margin: 0 4px;

  color: ${({ theme }) => theme.title};
  font-size: 1rem;
`

export const RemoveButton = styled(ButtonContainer)`
  text-transform: uppercase;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.text};
`

export const ItemPrice = styled.p`
  margin-left: 1.25rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`
