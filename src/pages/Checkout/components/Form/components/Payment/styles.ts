import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;
`

export const PaymentHeader = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

export const PaymentHeaderContent = styled.div`
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

export const PaymentTypeWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
