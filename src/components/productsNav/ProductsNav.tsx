import { useTranslation } from 'react-i18next'
import CartButton from '../cartButton/CartButton'
import { ProductsNavButton, ProductsNavContainer, ProductsNavContent } from './ProductsNavStyles'

const ProductsNav = () => {
  const { t } = useTranslation()

  return (
    <ProductsNavContainer>
      <ProductsNavContent>
        <ProductsNavButton>{t('category')}</ProductsNavButton>
        <ProductsNavButton>{t('news')}</ProductsNavButton>
        <ProductsNavButton>{t('promo')}</ProductsNavButton>
      </ProductsNavContent>
      <CartButton />
    </ProductsNavContainer>
  )
}

export default ProductsNav
