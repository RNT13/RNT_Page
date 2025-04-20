import LoginWindow from '../../components/loginWindow/LoginWindow'
import { GlobalMainContent } from '../../styles/globalStyles'
import { LoginContainer } from '../loginPage/LoginPageStyles'

const LoginPage = () => {
  return (
    <GlobalMainContent>
      <LoginContainer>
        <LoginWindow />
      </LoginContainer>
    </GlobalMainContent>
  )
}

export default LoginPage
