import { Header } from '../../components/Header'
import { Intro } from './components/Intro'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Intro />
      </HomeContainer>
    </>
  )
}
