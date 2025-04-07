import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FloatingLabel, InputWrapper, LoginButton, LoginTitle, LoginWindowContainer, LoginWindowContent, LoginWindowFooter, TooglePasswordButton } from '../../components/LoginWindow/LoginWindowStyles'
import { InputField } from '../../styles/globalStyles'

const LoginWindow: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const { t } = useTranslation()

  return (
    <LoginWindowContainer>
      <LoginTitle>{t('login')}</LoginTitle>

      <LoginWindowContent>
        <InputWrapper>
          <FloatingLabel className={emailFocused ? 'active' : ''} htmlFor="email">
            {t('email')}
          </FloatingLabel>
          <InputField id="email" type="email" placeholder="" onFocus={() => setEmailFocused(true)} onBlur={e => setEmailFocused(e.target.value !== '')} />
        </InputWrapper>

        <InputWrapper>
          <FloatingLabel className={passwordFocused ? 'active' : ''} htmlFor="password">
            {t('password')}
          </FloatingLabel>
          <InputField id="password" type={showPassword ? 'text' : 'password'} placeholder="" onFocus={() => setPasswordFocused(true)} onBlur={e => setPasswordFocused(e.target.value !== '')} />
          <TooglePasswordButton onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? t('hidePassword') : t('showPassword')}>
            {showPassword ? <FaEyeSlash size={23} color="#888" /> : <FaEye size={23} color="#888" />}
          </TooglePasswordButton>
        </InputWrapper>
      </LoginWindowContent>
      <LoginWindowFooter>
        <LoginButton>{t('enter')}</LoginButton>
      </LoginWindowFooter>
    </LoginWindowContainer>
  )
}

export default LoginWindow
