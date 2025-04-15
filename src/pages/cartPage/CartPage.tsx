import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { CartContent, CartPageContainer } from './CartPageStyles'

const CartPage = () => {
  const { t } = useTranslation()

  return (
    <CartPageContainer>
      <TitleH2>{t('cart')}</TitleH2>
      <CartContent></CartContent>
    </CartPageContainer>
  )
}

export default CartPage
