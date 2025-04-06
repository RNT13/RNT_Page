import { CardBody, CardButton, CardContainer, CardFooter, ProductImage } from './ProductsCardStyles'

export type CardProps = {
  image: string
  name: string
  description: string
}

const Card = ({ image, name, description }: CardProps) => {
  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <CardBody>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardBody>
      <CardFooter className="card-footer">
        <CardButton>ADD TO CART</CardButton>
      </CardFooter>
    </CardContainer>
  )
}

export default Card
