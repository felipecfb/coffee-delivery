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

export const OrderDetailsBox = styled.section`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;

  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`
