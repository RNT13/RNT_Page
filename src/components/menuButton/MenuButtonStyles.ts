import { TiThMenu } from 'react-icons/ti'
import styled from 'styled-components'

export const MenuLogo = styled(TiThMenu)`
  font-size: 32px;
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 10;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`
