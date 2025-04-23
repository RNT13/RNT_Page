import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../../components/linkButton/LinkButton'
import { Logo } from '../../components/logo/Logo'
import MenuButton from '../../components/menuButton/MenuButton'
import { HeaderContainer, Nav, NavLeft } from '../header/HeaderStyles'

const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <LinkButton onClick={() => navigate('/')} $isActive={location.pathname === '/'} title="Home">
          {t('home')}
        </LinkButton>
        <LinkButton onClick={() => navigate('/ProductsPage')} $isActive={location.pathname === '/ProductsPage'} title="Produtos">
          {t('products')}
        </LinkButton>
      </Nav>
      <NavLeft>
        <MenuButton />
      </NavLeft>
    </HeaderContainer>
  )
}

export default Header
