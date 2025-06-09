import { HashLink as Link } from 'react-router-hash-link'
import { styled } from 'styled-components'

export type ButtonProps = {
  type: 'button' | 'link' | 'buttonToggle' | 'headerButton'
  title: string
  to?: string
  onClick?: () => void
  children?: React.ReactNode
  $isOpen?: boolean
  $isActive?: boolean
  href?: string
  target?: string
  rel?: string
}

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const ButtonLinkContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const ButtonToggleContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  text-align: center;
  text-align: left;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  justify-content: ${props => (props.$isOpen ? 'flex-start' : 'center')};
  width: ${props => (props.$isOpen ? '220px' : '100%')};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.textColor)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
  box-shadow: 5px 5px 5px ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.shadow)};
  transition: all 0.2s ease;

  svg {
    font-size: 28px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  span {
    display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
    flex-grow: 1;
    text-align: center;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: all 0.2s linear;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
  }
`

// eslint-disable-next-line prettier/prettier
export const HeaderButtonContainer = styled(Link) <ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.textColor)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
  box-shadow: 5px 5px 5px ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.shadow)};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
  }
`
