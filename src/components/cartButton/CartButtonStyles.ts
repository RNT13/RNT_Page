import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'

export const CartButtonContainer = styled(Link)``

export const CartButtonContent = styled(Button)<{ $isActive: boolean }>`
  font-size: 24px;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
`
