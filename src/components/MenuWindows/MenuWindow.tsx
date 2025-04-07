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
          <MenuButton onClick={handleProfileCkick}>{t('profile')}</MenuButton>
          <MenuButton onClick={handleRequestsClick}>{t('requests')}</MenuButton>
          <MenuButton onClick={handleLoginClick}>{t('login')}</MenuButton>
        </MenuCountentContainer>
        <MenuFooterContainer>
          <MenuFooterButton onClick={() => dispatch(toggleTheme())}>{theme === 'dark' ? '🌙 dark' : '☀️ light'}</MenuFooterButton>
          <MenuFooterButton onClick={handleToggleLanguage}>{language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}</MenuFooterButton>
          <MenuFooterButton>L</MenuFooterButton>
        </MenuFooterContainer>
      </MenuWindowContainer>
    </motion.div>
  )
}

export default MenuWindow
