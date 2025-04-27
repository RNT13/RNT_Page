import { styled } from 'styled-components'
import Button from '../button/button'

export const CartButtonContent = styled(Button)`
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`
