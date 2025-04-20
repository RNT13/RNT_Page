import { useTranslation } from 'react-i18next'
import { GlobalMainContent, TitleH2 } from '../../styles/globalStyles'

const CartPage = () => {
  const { t } = useTranslation()

  return (
    <GlobalMainContent>
      <TitleH2>{t('cart')}</TitleH2>
    </GlobalMainContent>
  )
}

export default CartPage
