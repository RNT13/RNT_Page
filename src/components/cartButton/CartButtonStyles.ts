import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'

export const CartButtonContainer = styled(Link)``

export const CartButtonContent = styled(Button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  margin: 0;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.textColor)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s ease;
  }
`
