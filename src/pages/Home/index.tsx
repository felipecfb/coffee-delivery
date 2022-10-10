import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Header } from '../../components/Header'
import { ItemsHome } from '../../components/ItemsHome'

import bannerHome from '../../assets/bannerHome.svg'

import {
  HomeContainer,
  HomeLeft,
  Items,
  Subtitle,
  Title,
  TitleContainer,
} from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeLeft>
          <TitleContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </TitleContainer>

          <Items>
            <ItemsHome variant="buy" title="Compra simples e segura">
              <ShoppingCart size={22} />
            </ItemsHome>
            <ItemsHome
              variant="packing"
              title="Embalagem mantém o café intacto"
            >
              <Package size={22} />
            </ItemsHome>
            <ItemsHome variant="delivery" title="Entrega rápida e rastreada">
              <Timer size={22} />
            </ItemsHome>
            <ItemsHome
              variant="coffee"
              title="O café chega fresquinho até você"
            >
              <Coffee size={22} />
            </ItemsHome>
          </Items>
        </HomeLeft>

        <img src={bannerHome} alt="" />
      </HomeContainer>
    </>
  )
}
