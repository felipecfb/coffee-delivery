import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5.75rem 1.25rem;

  display: flex;
  justify-content: space-between;
  gap: 56px;
`

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
