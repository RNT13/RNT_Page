import { JSX } from 'react'
import { ButtonContainer, ButtonLinkContainer, ButtonToggleContainer, HeaderButtonContainer } from './buttonStyles'

export type ButtonType = 'button' | 'link' | 'buttonToggle' | 'headerButton'

export type ButtonProps = {
  type: ButtonType
  title: string
  to?: string
  onClick?: () => void
  children: string | JSX.Element
  isOpen?: boolean
  isActive?: boolean
}

const Button = ({ type, title, children, to, onClick, isActive, isOpen }: ButtonProps) => {
  switch (type) {
    case 'button':
      return (
        <ButtonContainer type="button" title={title} onClick={onClick} to={to as string}>
          {children}
        </ButtonContainer>
      )
    case 'buttonToggle':
      return (
        <ButtonToggleContainer type="buttonToggle" title={title} onClick={onClick} to={to as string} isOpen={isOpen} isActive={isActive}>
          {children}
        </ButtonToggleContainer>
      )
    case 'headerButton':
      return (
        <HeaderButtonContainer type="headerButton" title={title} onClick={onClick} to={to as string} isActive={isActive}>
          {children}
        </HeaderButtonContainer>
      )
    default:
      return (
        <ButtonLinkContainer type="link" title={title} onClick={onClick} to={to as string}>
          {children}
        </ButtonLinkContainer>
      )
  }
}

export default Button
