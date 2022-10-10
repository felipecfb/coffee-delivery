import { Header } from '../../components/Header'
import {
  HomeContainer,
  HomeLeft,
  Subtitle,
  Title,
  TitleContainer,
} from './styles'

import bannerHome from '../../assets/bannerHome.svg'

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
        </HomeLeft>

        <img src={bannerHome} alt="" />
      </HomeContainer>
    </>
  )
}
