import React, { useState } from 'react'
import LoginWindow from '../../components/LoginWindow/LoginWindow'
import { ButtonContainer, LoginIcon, Overlay } from '../LoginButton/LoginButtonStyles'

const LoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ButtonContainer onClick={() => setIsOpen(true)}>
        <LoginIcon src="/images/cadastroIcone.png" alt="Login" />
        Login
      </ButtonContainer>

      {isOpen && (
        <>
          <Overlay onClick={() => setIsOpen(false)} />
          <div style={{ position: 'relative', zIndex: 20 }}>
            <LoginWindow close={() => setIsOpen(false)} />
          </div>
        </>
      )}
    </>
  )
}

export default LoginButton
