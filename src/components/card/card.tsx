import { useTranslation } from 'react-i18next'
import Tag from '../tag/tag'
import { CardBody, CardButton, CardContainer, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from './carsStyles'

type CardProps = {
  title: string
  categoty: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Card = ({ title, categoty, system, description, infos, image }: CardProps) => {
  const { t } = useTranslation()

  return (
    <CardContainer>
      <CardHeader>
        <Tag $status="highlight">{infos[0]}</Tag>
        <Tag $status="highlight">{infos[1]}</Tag>
      </CardHeader>
      <CardImage src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Tag $status="highlight">{categoty}</Tag>
        <Tag $status="highlight">{system}</Tag>
        <CardDescription>{description}</CardDescription>
      </CardBody>
      <CardFooter className="card-footer">
        <CardButton type="button" title={t('addToCart')}>
          {t('addToCart')}
        </CardButton>
      </CardFooter>
    </CardContainer>
  )
}

export default Card
