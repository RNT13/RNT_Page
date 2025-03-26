import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../../components/LinkButton'
import { HeaderContainer, Nav } from './HeaderStyles'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <HeaderContainer>
      <h1>Header</h1>
      <Nav>
        <LinkButton onClick={() => navigate('/')} $isActive={location.pathname === '/'} title="Home">
          Home
        </LinkButton>
        <LinkButton onClick={() => navigate('/ProductsPage')} $isActive={location.pathname === '/ProductsPage'} title="Produtos">
          Produtos
        </LinkButton>
      </Nav>
      <h1>Header</h1>
    </HeaderContainer>
  )
}

export default Header
