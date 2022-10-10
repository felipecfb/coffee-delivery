import { ReactNode } from 'react'
import { Icon, ItemsHomeContainer, Text } from './styles'

interface ItemsHomeProps {
  children: ReactNode
  title: string
  variant: 'buy' | 'packing' | 'delivery' | 'coffee'
}

export function ItemsHome({ children, title, variant }: ItemsHomeProps) {
  return (
    <ItemsHomeContainer>
      <Icon variant={variant}>{children}</Icon>
      <Text>{title}</Text>
    </ItemsHomeContainer>
  )
}
