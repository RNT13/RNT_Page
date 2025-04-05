import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuButton, MenuCountentContainer, MenuFooterButton, MenuFooterContainer, MenuTitle, MenuWindowContainer } from './MenuWindowStyles'

interface MenuProps {
  onClose: () => void
}

const MenuWindow: React.FC<MenuProps> = ({ onClose }) => {
  const Navigate = useNavigate()

  const handleLoginClick = () => {
    onClose()
    Navigate('/LoginPage')
  }

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <MenuWindowContainer>
        <MenuTitle>Menu</MenuTitle>
        <MenuCountentContainer>
          <MenuButton>Profile</MenuButton>
          <MenuButton>Cart</MenuButton>
          <MenuButton onClick={handleLoginClick}>Login</MenuButton>
        </MenuCountentContainer>
        <MenuFooterContainer>
          <MenuFooterButton>L</MenuFooterButton>
          <MenuFooterButton>L</MenuFooterButton>
          <MenuFooterButton>L</MenuFooterButton>
        </MenuFooterContainer>
      </MenuWindowContainer>
    </motion.div>
  )
}

export default MenuWindow
