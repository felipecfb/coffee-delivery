import { Header } from '../../components/Header'
import { Coffees } from './components/Coffees'
import { Intro } from './components/Intro'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Intro />
        <Coffees />
      </HomeContainer>
    </>
  )
}
