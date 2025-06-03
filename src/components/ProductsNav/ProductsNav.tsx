import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import CartBar from '../CartBar/CartBar'
import CartButton from '../CartButton/CartButton'
import { ProductsNavContainer, ProductsNavContent } from './ProductsNavStyles'

const ProductsNav = () => {
  const { t } = useTranslation()

  return (
    <ProductsNavContainer>
      <ProductsNavContent>
        <div>
          <Button type="button" title={t('category')}>
            {t('category')}
          </Button>
          <Button type="button" title={t('news')}>
            {t('news')}
          </Button>
          <Button type="button" title={t('promo')}>
            {t('promo')}
          </Button>
        </div>
        <div>
          <CartButton />
        </div>
      </ProductsNavContent>
      <CartBar />
    </ProductsNavContainer>
  )
}

export default ProductsNav
