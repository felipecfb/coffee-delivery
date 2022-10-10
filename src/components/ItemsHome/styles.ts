import styled from 'styled-components'

export interface IconProps {
  variant: 'buy' | 'packing' | 'delivery' | 'coffee'
}

export const ItemsHomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Icon = styled.div<IconProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'buy'
      ? theme.yellow.dark
      : variant === 'packing'
      ? theme.text
      : variant === 'delivery'
      ? theme.yellow.default
      : theme.purple.default};

  padding: 0.5rem;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
`
