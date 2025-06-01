import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { apiFetch, Game } from '../../utils/GameApi'
import { BannerContainer, ImageButton, ImageContent, ImageText, ImageTextFooter, Price, Title } from '../Banner/BannerStyles'
import { priceFormat } from '../ProductsList/ProductsList'
import Tag from '../Tag/Tag'

const Banner = () => {
  const { t } = useTranslation()
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    apiFetch('/destaque')
      .then(res => setGame(res))
      .catch(error => console.error(error))
  }, [])

  if (!game)
    return (
      <BannerContainer>
        <Title>{t('loading')}</Title>
      </BannerContainer>
    )

  return (
    <BannerContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
      <ImageContent>
        <ImageText>
          <Tag $status="Highlight" size="big">
            {t('DailyHighlight')}
          </Tag>
          <ImageTextFooter>
            <Title>
              {game.name}
              <Price>
                {t('from')} <span>{priceFormat(game.prices.old)}</span> <br />
                {t('forOnly')} {priceFormat(game.prices.current)}
              </Price>
            </Title>
            <ImageButton to={`/DetailsPage/${game.id}`} type="headerButton" title={t('click')}>
              {t('BuyNow')}
            </ImageButton>
          </ImageTextFooter>
        </ImageText>
      </ImageContent>
    </BannerContainer>
  )
}

export default Banner
