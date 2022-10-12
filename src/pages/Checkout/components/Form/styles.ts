import styled from 'styled-components'

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.subtitle};
    font-family: 'Baloo 2', sans-serif;
  }
`
