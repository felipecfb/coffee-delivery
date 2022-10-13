import styled from 'styled-components'

export const OrderDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.subtitle};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const OrderDetailsWrapper = styled.section`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;

  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const OrderTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1.5rem;
`

export const OrderTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text};

    &:last-child {
      font-size: 1rem;
    }
  }
`

export const OrderTotalItems = styled(OrderTotal)``

export const OrderTotalDelivered = styled(OrderTotal)``

export const OrderTotalSum = styled(OrderTotal)`
  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
    font-weight: bold;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.yellow.default};
  border: none;
  padding: 0.75rem;

  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;
`
