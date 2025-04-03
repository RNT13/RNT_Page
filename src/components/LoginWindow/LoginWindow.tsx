import React from 'react'
import { InputField } from '../../styles/globalStyles'
import { WindowContainer } from './LoginWindowStyles'

const LoginWindow: React.FC = () => {
  return (
    <WindowContainer>
      <h3>Login</h3>
      <InputField id="email" type="email" placeholder="Email" />
      <InputField id="password" type="password" placeholder="Password" />
      <button>Enter</button>
    </WindowContainer>
  )
}

export default LoginWindow
