import styled from 'styled-components'

interface ItemProps {
  variant: 'cart' | 'package' | 'timer' | 'coffee'
}

export const IntroContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 66px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 66px;
`

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.title};
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.subtitle};
`

export const ItemsWrapper = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Icon = styled.div<ItemProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'cart'
      ? theme.yellow.dark
      : variant === 'package'
      ? theme.text
      : variant === 'timer'
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
