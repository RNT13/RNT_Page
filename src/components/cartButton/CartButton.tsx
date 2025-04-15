import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { CartButtonContainer, CartButtonContent } from './CartButtonStyles'

const CartButton = () => {
  const location = useLocation()
  const isActive = location.pathname === '/CartPage'

  return (
    <CartButtonContainer to="/CartPage">
      <CartButtonContent $isActive={isActive}>
        <HiOutlineShoppingCart />
      </CartButtonContent>
    </CartButtonContainer>
  )
}

export default CartButton
