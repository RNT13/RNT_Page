import { useTranslation } from 'react-i18next'
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
    </ProductsNavContainer>
  )
}

export default ProductsNav
