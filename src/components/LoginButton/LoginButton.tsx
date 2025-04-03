import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import LoginWindow from '../../components/LoginWindow/LoginWindow'
import { ButtonContainer, LoginIcon, Overlay } from './LoginButtonStyles'

const LoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ButtonContainer onClick={() => setIsOpen(true)}>
        <LoginIcon src="/images/cadastroIcone.png" alt="Login" />
        Login
      </ButtonContainer>

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay onClick={() => setIsOpen(false)} />
            <div style={{ position: 'relative', zIndex: 20 }}>
              <LoginWindow close={() => setIsOpen(false)} />
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default LoginButton
