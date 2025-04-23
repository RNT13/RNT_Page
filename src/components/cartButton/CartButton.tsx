import { HiOutlineShoppingCart } from 'react-icons/hi'
import { CartButtonContainer, CartButtonContent } from './CartButtonStyles'

const CartButton = () => {
  return (
    <CartButtonContainer to="/CartPage">
      <CartButtonContent>
        <HiOutlineShoppingCart />
      </CartButtonContent>
    </CartButtonContainer>
  )
}

export default CartButton
