import styled from 'styled-components'

interface IconWrapperProps {
  background: string
}

export const OrderInfoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 100%;

  background-color: ${({ background }) => background};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`

export const Title = styled.span``

export const Subtitle = styled.span``
