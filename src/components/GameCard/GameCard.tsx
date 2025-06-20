import { useTranslation } from 'react-i18next'
import { useGetFullGameDetailsQuery } from '../../api/gameApi'
import { priceFormat } from '../../utils/PriceFormat'
import { Title } from '../Banner/BannerStyles'
import Tag from '../Tag/Tag'
import {
  GameCardBody,
  GameCardButton,
  GameCardContainer,
  GameCardDescription,
  GameCardFooter,
  GameCardHeader,
  GameCardImage,
  GameCardTitle
} from './GameCardStyles'

type GameCardProps = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id?: number
}

const GameCard = ({ title, category, id, system, infos, image }: GameCardProps) => {
  const { t } = useTranslation()

  const { data: game, isLoading: loading, isError: error } = useGetFullGameDetailsQuery(String(id!))

  if (loading)
    return (
      <GameCardContainer>
        <Title>{t('loading')}</Title>
      </GameCardContainer>
    )
  if (error)
    return (
      <GameCardContainer>
        <Title>{t('error')}</Title>
      </GameCardContainer>
    )

  const getDescription = (description: string) => {
    if (description.length > 200) {
      return description.slice(0, 200) + '...'
    }
    return description
  }

  return (
    <GameCardContainer>
      <GameCardHeader>
        {infos[0] && <Tag $status="highlight">{infos[0]}</Tag>}
        {game?.prices.current && <Tag $status="highlight">{priceFormat(game.prices.current ?? 0)}</Tag>}
      </GameCardHeader>
      <GameCardImage src={image || undefined} alt={title || 'Default Alt Text'} />
      <GameCardBody>
        <GameCardTitle>{title}</GameCardTitle>
        <Tag $status="highlight">{category}</Tag>
        <Tag $status="highlight">{system}</Tag>
        <GameCardDescription>{getDescription(game?.description ?? '')}</GameCardDescription>
      </GameCardBody>
      <GameCardFooter className="GameCardFooter">
        <GameCardButton to={`/DetailsPage/${id}`} type="button" title={t('seeDetails')}>
          {t('seeDetails')}
        </GameCardButton>
      </GameCardFooter>
    </GameCardContainer>
  )
}

export default GameCard
