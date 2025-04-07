import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Logo } from '../../components/Logo/Logo'
import MenuButton from '../../components/MenuButton/MenuButton'
import { HeaderContainer, Nav } from './HeaderStyles'

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
      <MenuButton />
    </HeaderContainer>
  )
}

export default Header
