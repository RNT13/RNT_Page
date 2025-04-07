import { useTranslation } from 'react-i18next'
import { CardBody, CardButton, CardContainer, CardFooter, ProductImage } from './ProductsCardStyles'

export type CardProps = {
  image: string
  name: string
  description: string
}

const Card = ({ image, name, description }: CardProps) => {
  const { t } = useTranslation()

  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <CardBody>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardBody>
      <CardFooter className="card-footer">
        <CardButton>{t('addToCart')}</CardButton>
      </CardFooter>
    </CardContainer>
  )
}

export default Card
