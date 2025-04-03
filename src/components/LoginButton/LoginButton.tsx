import React, { useState } from 'react'
import LoginWindow from '../../components/LoginWindow/LoginWindow'
import { ButtonContainer, LoginIcon } from './LoginButtonStyles'

const LoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <ButtonContainer onClick={() => setIsOpen(!isOpen)}>
        <LoginIcon src="/images/cadastroIcone.png" alt="Login" />
        Login
      </ButtonContainer>
      {isOpen && <LoginWindow />}
    </div>
  )
}

export default LoginButton
