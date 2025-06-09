import { useTranslation } from 'react-i18next'
import Button from '../../components/Button/Button'
import { Logo } from '../../components/Logo/Logo'
import MenuButton from '../../components/MenuButton/MenuButton'
import { HeaderContainer, Nav, NavLeft } from '../header/HeaderStyles'

const Header = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <Button type="headerButton" title={t('products')} to="/ProductsPage#nav">
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
