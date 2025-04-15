import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { MenuButtonContainer, MenuLogo, MenuOverlay } from '../menuButton/MenuButtonStyles'
import MenuWindow from '../menuWindows/MenuWindow'

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuButtonContainer onClick={() => setIsOpen(true)}>
        <MenuLogo />
      </MenuButtonContainer>

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
