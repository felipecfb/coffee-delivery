import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.background};

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;

  padding: 2rem 1.25rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0;
  }
`

export const baseNavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
`

export const Location = styled(baseNavbarItems)`
  background: ${({ theme }) => theme.purple.light};

  span {
    color: ${({ theme }) => theme.purple.dark};
    font-size: 0.875rem;
  }
`

export const Cart = styled(baseNavbarItems)`
  background: ${({ theme }) => theme.yellow.light};
  position: relative;

  &:after {
    content: '3';
    width: 20px;
    height: 20px;
    border-radius: 10px;

    position: absolute;
    top: -5px;
    right: -5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.yellow.dark};
    color: ${({ theme }) => theme.white};
    font-size: 0.75rem;
    font-weight: bold;
  }
`
