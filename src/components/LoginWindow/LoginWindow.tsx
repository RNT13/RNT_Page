import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FloatingLabel, InputWrapper, LoginButton, TooglePasswordButton, WindowContainer } from '../../components/LoginWindow/LoginWindowStyles'
import { InputField, TextH3 } from '../../styles/globalStyles'

interface LoginWindowProps {
  close: () => void
}

const LoginWindow: React.FC<LoginWindowProps> = ({ close }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <WindowContainer>
        <TooglePasswordButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</TooglePasswordButton>
        <TextH3>Login</TextH3>

        <InputWrapper>
          <FloatingLabel className={emailFocused ? 'active' : ''} htmlFor="email">
            Email
          </FloatingLabel>
          <InputField id="email" type="email" placeholder="" onFocus={() => setEmailFocused(true)} onBlur={e => setEmailFocused(e.target.value !== '')} />
        </InputWrapper>

        <InputWrapper>
          <FloatingLabel className={passwordFocused ? 'active' : ''} htmlFor="password">
            Password
          </FloatingLabel>
          <InputField id="password" type={showPassword ? 'text' : 'password'} placeholder="" onFocus={() => setPasswordFocused(true)} onBlur={e => setPasswordFocused(e.target.value !== '')} />
        </InputWrapper>

        <LoginButton onClick={close}>Enter</LoginButton>
      </WindowContainer>
    </motion.div>
  )
}

export default LoginWindow
