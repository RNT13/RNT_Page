import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleLanguage } from '../../redux/slices/languageSlice'
import { toggleTheme } from '../../redux/slices/themeSlice'
import { RootState } from '../../redux/store'
import { MenuButton, MenuCountentContainer, MenuFooterButton, MenuFooterContainer, MenuTitle, MenuWindowContainer } from './MenuWindowStyles'

interface MenuProps {
  onClose: () => void
}

const MenuWindow: React.FC<MenuProps> = ({ onClose }) => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.theme)
  const { language } = useSelector((state: RootState) => state.language)
  const { t } = useTranslation()

  const handleLoginClick = () => {
    onClose()
    Navigate('/LoginPage')
  }

  const handleProfileCkick = () => {
    onClose()
    Navigate('/ProfilePage')
  }

  const handleRequestsClick = () => {
    onClose()
    Navigate('/RequestsPage')
  }

  const handleToggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt'
    dispatch(toggleLanguage(newLang))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <MenuWindowContainer>
        <MenuTitle>{t('menu')}</MenuTitle>
        <MenuCountentContainer>
          <MenuButton type="button" title={t('profile')} onClick={handleProfileCkick}>
            {t('profile')}
          </MenuButton>
          <MenuButton type="button" title={t('requests')} onClick={handleRequestsClick}>
            {t('requests')}
          </MenuButton>
          <MenuButton type="button" title={t('login')} onClick={handleLoginClick}>
            {t('login')}
          </MenuButton>
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
      </MenuWindowContainer>
    </motion.div>
  )
}

export default MenuWindow
