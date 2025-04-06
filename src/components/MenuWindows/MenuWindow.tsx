import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleLanguage, toggleTheme } from '../../redux/slices/themeSlice'
import { RootState } from '../../redux/store'
import { MenuButton, MenuCountentContainer, MenuFooterButton, MenuFooterContainer, MenuTitle, MenuWindowContainer } from './MenuWindowStyles'

interface MenuProps {
  onClose: () => void
}

const MenuWindow: React.FC<MenuProps> = ({ onClose }) => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { theme, language } = useSelector((state: RootState) => state.theme)

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

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <MenuWindowContainer>
        <MenuTitle>Menu</MenuTitle>
        <MenuCountentContainer>
          <MenuButton onClick={handleProfileCkick}>Profile</MenuButton>
          <MenuButton onClick={handleRequestsClick}>Requests</MenuButton>
          <MenuButton onClick={handleLoginClick}>Login</MenuButton>
        </MenuCountentContainer>
        <MenuFooterContainer>
          <MenuFooterButton onClick={() => dispatch(toggleTheme())}>{theme === 'dark' ? '🌙 dark' : '☀️ light'}</MenuFooterButton>
          <MenuFooterButton onClick={() => dispatch(toggleLanguage())}>{language === 'pt-br' ? '🇧🇷 PT' : '🇺🇸 EN'}</MenuFooterButton>
          <MenuFooterButton>L</MenuFooterButton>
        </MenuFooterContainer>
      </MenuWindowContainer>
    </motion.div>
  )
}

export default MenuWindow
