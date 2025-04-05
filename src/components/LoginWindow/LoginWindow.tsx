import React, { useState } from 'react'
import { FloatingLabel, InputWrapper, LoginButton, LoginTitle, LoginWindowContainer, LoginWindowContent, LoginWindowFooter, TooglePasswordButton } from '../../components/LoginWindow/LoginWindowStyles'
import { InputField } from '../../styles/globalStyles'

const LoginWindow: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  return (
    <LoginWindowContainer>
      <LoginTitle>Login</LoginTitle>

      <LoginWindowContent>
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
          <TooglePasswordButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</TooglePasswordButton>
        </InputWrapper>
      </LoginWindowContent>
      <LoginWindowFooter>
        <LoginButton>Enter</LoginButton>
      </LoginWindowFooter>
    </LoginWindowContainer>
  )
}

export default LoginWindow
