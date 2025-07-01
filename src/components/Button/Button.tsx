import { useLocation, useNavigate } from 'react-router-dom'
import { ButtonContainer, ButtonLinkContainer, ButtonToggleContainer, HeaderButtonContainer } from './ButtonStyles'

export type ButtonProps = {
  type: 'button' | 'link' | 'buttonToggle' | 'headerButton'
  title: string
  to?: string
  onClick?: () => void
  children?: React.ReactNode
  isOpen?: boolean
  isActive?: boolean
  href?: string
  target?: string
  rel?: string
  onSubmit?: () => void
}

const Button = ({ type, title, children, to, onClick, isOpen, isActive, href, target, rel, onSubmit, ...props }: ButtonProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const finalIsActive = to ? location.pathname === to : (isActive ?? false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    if (onSubmit) {
      onSubmit()
    }
    if (to) {
      navigate(to)
    }
  }

  if (href) {
    return (
      <ButtonToggleContainer as="a" href={href} target={target} rel={rel} onClick={handleClick} $isOpen={isOpen} $isActive={finalIsActive} title={title}>
        {children}
      </ButtonToggleContainer>
    )
  }

  switch (type) {
    case 'button':
      return (
        <ButtonContainer type="button" title={title} onClick={handleClick} {...props}>
          {children}
        </ButtonContainer>
      )
    case 'buttonToggle':
      return (
        <ButtonToggleContainer type="buttonToggle" title={title} onClick={handleClick} $isOpen={isOpen} $isActive={finalIsActive} {...props}>
          {children}
        </ButtonToggleContainer>
      )
    case 'headerButton':
      return (
        <HeaderButtonContainer type="headerButton" to={to as string} title={title} onClick={handleClick} $isActive={finalIsActive} {...props}>
          {children}
        </HeaderButtonContainer>
      )
    case 'link':
      return (
        <ButtonLinkContainer type="link" to={to as string} title={title} {...props}>
          {children}
        </ButtonLinkContainer>
      )
  }
}

export default Button
