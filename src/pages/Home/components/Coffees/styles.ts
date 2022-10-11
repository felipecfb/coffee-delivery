import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme.subtitle};

  margin-bottom: 54px;
`
