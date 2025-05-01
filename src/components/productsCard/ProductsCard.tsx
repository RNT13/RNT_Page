import { useTranslation } from 'react-i18next'
import { CardBody, CardButton, CardContainer, CardFooter, CardHeader, ProductImage } from '../productsCard/ProductsCardStyles'

export type CardProps = {
  image: string
  name: string
  description: string
}

const ProductCard = ({ image, name, description }: CardProps) => {
  const { t } = useTranslation()

  return (
    <CardContainer>
      <CardHeader>
        <ProductImage src={image} alt={name} />
      </CardHeader>
      <CardBody>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardBody>
      <CardFooter className="card-footer">
        <CardButton type="button" title={t('addToCart')}>
          {t('addToCart')}
        </CardButton>
      </CardFooter>
    </CardContainer>
  )
}

export default ProductCard
