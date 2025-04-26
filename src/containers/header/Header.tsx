import { useTranslation } from 'react-i18next'
import Button from '../../components/button/button'
import { Logo } from '../../components/logo/Logo'
import MenuButton from '../../components/menuButton/MenuButton'
import { HeaderContainer, Nav, NavLeft } from '../header/HeaderStyles'

const Header = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <Button type="headerButton" title={t('home')} to="/">
          {t('home')}
        </Button>
        <Button type="headerButton" title={t('products')} to="/ProductsPage">
          {t('products')}
        </Button>
      </Nav>
      <NavLeft>
        <MenuButton />
      </NavLeft>
    </HeaderContainer>
  )
}

export default Header
