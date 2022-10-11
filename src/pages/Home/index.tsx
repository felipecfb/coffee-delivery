import { Header } from '../../components/Header'
import { Intro } from './components/Intro'

import bannerHome from '../../assets/bannerHome.svg'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Intro />
        <img src={bannerHome} alt="" />
      </HomeContainer>
    </>
  )
}
