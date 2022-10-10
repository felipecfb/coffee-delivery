import { Cart, HeaderContainer, Location } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { useTheme } from 'styled-components'

export function Header() {
  const { yellow, purple } = useTheme()

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <Location>
          <MapPin size={22} color={purple.default} />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart>
          <ShoppingCart size={22} color={yellow.dark} />
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
