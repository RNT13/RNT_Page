import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../../components/LinkButton'
import { HeaderContainer, Nav } from '../Header/Header.styles'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <HeaderContainer>
      <h1>Header</h1>
      <Nav>
        <LinkButton onClick={() => navigate('/')} $isActive={location.pathname === '/'}>
          Home
        </LinkButton>
        <LinkButton onClick={() => navigate('/ProductsPage')} $isActive={location.pathname === '/ProductsPage'}>
          Produtos
        </LinkButton>
      </Nav>
      <h1>Header</h1>
    </HeaderContainer>
  )
}

export default Header
