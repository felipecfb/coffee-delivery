import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  DeliveryContainer,
  DeliveryHeader,
  TitleHeader,
  SubtitleHeader,
  FormDelivery,
  InputGroup,
  Input,
  DeliveryHeaderContent,
  OptionalInput,
} from './styles'

export function Delivery() {
  const theme = useTheme()

  return (
    <DeliveryContainer>
      <DeliveryHeader>
        <MapPinLine size={22} color={theme.yellow.dark} />
        <DeliveryHeaderContent>
          <TitleHeader>Endereço de entrega</TitleHeader>
          <SubtitleHeader>
            Informe o endereço onde deseja receber seu pedido
          </SubtitleHeader>
        </DeliveryHeaderContent>
      </DeliveryHeader>
      <FormDelivery>
        <InputGroup>
          <Input placeholder="CEP" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="Rua" maxWidth={true} />
        </InputGroup>
        <InputGroup>
          <Input placeholder="Número" />
          <OptionalInput>Opcional</OptionalInput>
          <Input placeholder="Complemento" maxWidth={true} optional={true} />
        </InputGroup>
        <InputGroup>
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
        </InputGroup>
      </FormDelivery>
    </DeliveryContainer>
  )
}
