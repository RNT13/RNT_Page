import { useState } from 'react'
import Button from '../Button/Button'
import MenuWindow from '../MenuWindows/MenuWindow'
import { MenuLogo } from './MenuButtonStyles'

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button type="buttonToggle" title="Menu" onClick={handleToggleMenu}>
        <MenuLogo />
      </Button>
      <MenuWindow isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default MenuButton
