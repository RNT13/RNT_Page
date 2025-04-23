import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'

export const CartButtonContainer = styled(Link)``

export const CartButtonContent = styled(Button)`
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.prirycolor};
`
