import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import CartButton from '../CartButton/CartButton'
import { ProductsNavContainer, ProductsNavContent } from './ProductsNavStyles'

const ProductsNav = () => {
  const { t } = useTranslation()

  return (
    <ProductsNavContainer>
      <ProductsNavContent>
        <Button type="button" title={t('category')}>
          {t('category')}
        </Button>
        <Button type="button" title={t('news')}>
          {t('news')}
        </Button>
        <Button type="button" title={t('promo')}>
          {t('promo')}
        </Button>
      </ProductsNavContent>
      <CartButton />
    </ProductsNavContainer>
  )
}

export default ProductsNav
