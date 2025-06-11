import { useTranslation } from 'react-i18next'
import { useGetGameQuery } from '../../api/gameApi'
import i18n from '../../i18n'
import { priceFormat } from '../../utils/PriceFormat'
import { Title } from '../Banner/BannerStyles'
import Tag from '../Tag/Tag'
import { CardBody, CardButton, CardContainer, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from './CarsStyles'

type CardProps = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id?: number
}

const Card = ({ title, category, id, system, description, infos, image }: CardProps) => {
  const { t } = useTranslation()

  const { data: game, isLoading: loading, isError: error } = useGetGameQuery(id!)

  if (loading)
    return (
      <CardContainer>
        <Title>{t('loading')}</Title>
      </CardContainer>
    )
  if (error)
    return (
      <CardContainer>
        <Title>{t('error')}</Title>
      </CardContainer>
    )

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
        {game?.prices.current && <Tag $status="highlight">{priceFormat(game.prices.current ?? 0, i18n.language)}</Tag>}
      </CardHeader>
      <CardImage src={image || undefined} alt={title || 'Default Alt Text'} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Tag $status="highlight">{category}</Tag>
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
