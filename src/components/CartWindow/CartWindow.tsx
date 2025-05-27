import { CartWindowContainer } from './CartWindowStyles'

interface CartWindowProps {
  onClose: () => void
}

const CartWindow: React.FC<CartWindowProps> = ({ onClose }) => {
  return (
    <>
      <CartWindowContainer></CartWindowContainer>
    </>
  )
}

export default CartWindow
