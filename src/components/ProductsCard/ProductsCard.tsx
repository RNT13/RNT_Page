import { useTranslation } from 'react-i18next'
import {
  ProductCardBody,
  ProductCardButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardHeader,
  ProductCardImage
} from './ProductsCardStyles'

export type ProductCardProps = {
  image: string
  name: string
  description: string
}

const ProductProductCard = ({ image, name, description }: ProductCardProps) => {
  const { t } = useTranslation()

  return (
    <ProductCardContainer>
      <ProductCardHeader>
        <ProductCardImage src={image} alt={name} />
      </ProductCardHeader>
      <ProductCardBody>
        <h3>{name}</h3>
        <p>{description}</p>
      </ProductCardBody>
      <ProductCardFooter className="ProductCard-footer">
        <ProductCardButton type="button" title={t('addToCart')}>
          {t('addToCart')}
        </ProductCardButton>
      </ProductCardFooter>
    </ProductCardContainer>
  )
}

export default ProductProductCard
