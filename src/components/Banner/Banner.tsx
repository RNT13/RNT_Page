import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Game } from '../../pages/productsPage/ProductsPage'
import { priceFormat } from '../ProductsList/ProductsList'
import Tag from '../Tag/Tag'
import { BannerContainer, ImageButton, ImageContent, ImageText, ImageTextFooter, Price, Title } from './BannerStyles'

const Banner = () => {
  const { t } = useTranslation()
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then(res => res.json())
      .then(res => setGame(res))
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
