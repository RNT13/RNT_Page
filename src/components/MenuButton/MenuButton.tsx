import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Button from '../Button/Button'
import MenuWindow from '../MenuWindows/MenuWindow'
import { MenuLogo, MenuOverlay } from './MenuButtonStyles'

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="buttonToggle" title="Menu" onClick={() => setIsOpen(true)}>
        <MenuLogo />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <MenuOverlay onClick={() => setIsOpen(false)} />
            <div style={{ position: 'relative', zIndex: 20 }} onClick={e => e.stopPropagation()}>
              <MenuWindow onClose={() => setIsOpen(false)} />
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuButton
