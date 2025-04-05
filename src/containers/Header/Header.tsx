import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Logo } from '../../components/Logo/Logo'
import MenuButton from '../../components/MenuButton/MenuButton'
import { HeaderContainer, Nav } from './HeaderStyles'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <LinkButton onClick={() => navigate('/')} $isActive={location.pathname === '/'} title="Home">
          Home
        </LinkButton>
        <LinkButton onClick={() => navigate('/ProductsPage')} $isActive={location.pathname === '/ProductsPage'} title="Produtos">
          Produtos
        </LinkButton>
      </Nav>
      <MenuButton />
    </HeaderContainer>
  )
}

export default Header
