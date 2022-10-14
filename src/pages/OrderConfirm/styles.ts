import styled from 'styled-components'

export const OrderConfirmContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 102px;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
  }
`

export const OrderConfirmMessage = styled.div``

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme.yellow.dark};
  font-weight: 900;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.subtitle};
`

export const OrderInfoContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 32rem;
  height: 16.875rem;

  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;

  background: ${({ theme }) => theme.background};

  &::before {
    content: '';
    position: absolute;

    z-index: -1;
    inset: -1px;

    border-radius: 7px 37px 7px 37px;

    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const HeroImage = styled.img``
