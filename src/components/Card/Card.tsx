import { useTranslation } from 'react-i18next'
import Tag from '../Tag/Tag'
import { CardBody, CardButton, CardContainer, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from './CarsStyles'

type CardProps = {
  title: string
  categoty: string
  system: string
  description: string
  infos: string[]
  image: string
  id?: number
}

const Card = ({ title, categoty, id, system, description, infos, image }: CardProps) => {
  const { t } = useTranslation()
  const getDescription = (description: string) => {
    if (description.length > 200) {
      return description.slice(0, 200) + '...'
    }
    return description
  }

  return (
    <CardContainer>
      <CardHeader>
        {infos[0] && <Tag $status="highlight">{infos[0]}</Tag>}
        {infos[1] && <Tag $status="highlight">{infos[1]}</Tag>}
      </CardHeader>
      <CardImage src={image || undefined} alt={title || 'Default Alt Text'} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Tag $status="highlight">{categoty}</Tag>
        <Tag $status="highlight">{system}</Tag>
        <CardDescription>{getDescription(description)}</CardDescription>
      </CardBody>
      <CardFooter className="card-footer">
        <CardButton to={`/DetailsPage/${id}`} type="button" title={t('seeDetails')}>
          {t('seeDetails')}
        </CardButton>
      </CardFooter>
    </CardContainer>
  )
}

export default Card
