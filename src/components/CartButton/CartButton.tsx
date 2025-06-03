import { useTranslation } from 'react-i18next'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { open } from '../../redux/slices/cartSlice'
import { CartButtonContent } from './CartButtonStyles'

const CartButton = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <CartButtonContent onClick={openCart} type="headerButton" title={t('cart')}>
      <HiOutlineShoppingCart />
    </CartButtonContent>
  )
}

export default CartButton
