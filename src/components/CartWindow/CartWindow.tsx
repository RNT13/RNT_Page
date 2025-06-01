import { CartWindowContainer } from './CartWindowStyles'

interface CartWindowProps {
  onClose: () => void
}

const CartWindow: React.FC<CartWindowProps> = () => {
  return (
    <>
      <CartWindowContainer></CartWindowContainer>
    </>
  )
}

export default CartWindow
