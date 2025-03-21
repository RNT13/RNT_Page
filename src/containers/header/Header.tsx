import { useNavigate } from 'react-router-dom'
import { LinkButton } from '../../components/LinkButton'
import { HeaderContainer, Nav } from './Header.styles'

const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <h1>Header</h1>
      <Nav>
        <LinkButton onClick={() => navigate('/')}>Home</LinkButton>
        <LinkButton onClick={() => navigate('/produtos')}>Produtos</LinkButton>
      </Nav>
      <h1>Header</h1>
    </HeaderContainer>
  )
}

export default Header
