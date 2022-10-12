import styled from 'styled-components'

export const PaymentTypeContainer = styled.button`
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;

  background-color: ${({ theme }) => theme.button};
  border: none;

  cursor: pointer;
`

export const PaymentTypeTitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.75rem;
  text-transform: uppercase;
`
