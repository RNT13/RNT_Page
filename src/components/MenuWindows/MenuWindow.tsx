import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { To, useNavigate } from 'react-router-dom'
import { toggleLanguage } from '../../redux/slices/languageSlice'
import { toggleTheme } from '../../redux/slices/themeSlice'
import { RootState } from '../../redux/store'
import { OverlayBlur } from '../../styles/globalStyles'
import {
  MenuButtons,
  MenuCountentContainer,
  MenuFooterButton,
  MenuFooterContainer,
  MenuTitle,
  MenuWindowContainer,
  MenuWindowContent
} from './MenuWindowStyles'

type MenuWindowProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuWindow = ({ isOpen, setIsOpen }: MenuWindowProps) => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.theme)
  const { language } = useSelector((state: RootState) => state.language)
  const { t } = useTranslation()

  const handleNavigate = (path: To) => {
    Navigate(path)
    setIsOpen(false)
  }

  const handleToggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt'
    dispatch(toggleLanguage(newLang))
  }

  return (
    <MenuWindowContainer className={isOpen ? 'isOpen' : ''}>
      <OverlayBlur onClick={() => setIsOpen(false)} />
      <MenuWindowContent>
        <MenuTitle>{t('menu')}</MenuTitle>
        <MenuCountentContainer>
          <MenuButtons type="button" title={t('profile')} onClick={() => handleNavigate('/ProfilePage')}>
            {t('profile')}
          </MenuButtons>
          <MenuButtons type="button" title={t('requests')} onClick={() => handleNavigate('/RequestsPage')}>
            {t('requests')}
          </MenuButtons>
          <MenuButtons type="button" title={t('login')} onClick={() => handleNavigate('/LoginPage')}>
            {t('login')}
          </MenuButtons>
        </MenuCountentContainer>
        <MenuFooterContainer>
          <MenuFooterButton type="button" title="Theme" onClick={() => dispatch(toggleTheme())}>
            {theme === 'dark' ? '🌙 dark' : '☀️ light'}
          </MenuFooterButton>
          <MenuFooterButton type="button" title="Language" onClick={handleToggleLanguage}>
            {language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
          </MenuFooterButton>
          <MenuFooterButton type="button" title="L">
            L
          </MenuFooterButton>
        </MenuFooterContainer>
      </MenuWindowContent>
    </MenuWindowContainer>
  )
}

export default MenuWindow
