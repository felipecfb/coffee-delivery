import styled from 'styled-components'

interface InputProps {
  optional?: boolean
  maxWidth?: boolean
}

export const DeliveryContainer = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;
`

export const DeliveryHeader = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

export const DeliveryHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleHeader = styled.h1`
  color: ${({ theme }) => theme.subtitle};

  font-size: 1rem;

  line-height: 20px;
`

export const SubtitleHeader = styled.p`
  color: ${({ theme }) => theme.text};

  font-size: 0.875rem;
`

export const FormDelivery = styled.form``

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  padding-bottom: 1rem;

  &:last-child {
    padding-bottom: 0;
  }

  position: relative;
`

export const Input = styled.input<InputProps>`
  padding: 0.75rem;

  background: ${({ theme }) => theme.input};

  color: ${({ theme }) => theme.label};
  font-size: 0.875rem;

  border: 1px solid ${({ theme }) => theme.button};

  flex: ${({ maxWidth }) => (maxWidth ? '1' : '0')};
`

export const OptionalInput = styled.label`
  position: absolute;
  right: 0.75rem;

  color: ${({ theme }) => theme.label};
  font-style: italic;
  font-size: 0.75rem;
`
