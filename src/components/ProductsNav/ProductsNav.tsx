import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Button from '../Button/Button'
import CartBar from '../CartBar/CartBar'
import CartButton from '../CartButton/CartButton'
import { CartDiv, ProductsNavContainer, ProductsNavContent } from './ProductsNavStyles'

const ProductsNav = () => {
  const { t } = useTranslation()
  const { items } = useSelector((state: RootState) => state.cart)

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
        <CartDiv>
          <p>
            {items.length} {t('itemsOnCart')}
          </p>
          <CartButton />
        </CartDiv>
      </ProductsNavContent>
      <CartBar />
    </ProductsNavContainer>
  )
}

export default ProductsNav
