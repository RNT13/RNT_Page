import { useTranslation } from 'react-i18next'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { CartButtonContent } from './CartButtonStyles'

const CartButton = () => {
  const { t } = useTranslation()

  return (
    <CartButtonContent type="headerButton" title={t('cart')}>
      <HiOutlineShoppingCart />
    </CartButtonContent>
  )
}

export default CartButton
