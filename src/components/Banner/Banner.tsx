import { useTranslation } from 'react-i18next'
import { OverlayDark } from '../../styles/globalStyles'
import { BannerContainer, ImageButton, ImageContent, ImageText, ImageTextFooter, Price, Title } from '../Banner/BannerStyles'

import { useGetFeaturedGamesQuery } from '../../api/gameApi'
import i18n from '../../i18n'
import { priceFormat } from '../../utils/PriceFormat'
import Tag from '../Tag/Tag'

const Banner = () => {
  const { t } = useTranslation()

  const { data: game, isLoading: loading, isError: error } = useGetFeaturedGamesQuery({})

  if (loading)
    return (
      <BannerContainer>
        <Title>{t('loading')}</Title>
      </BannerContainer>
    )
  if (error)
    return (
      <BannerContainer>
        <Title>{t('error')}</Title>
      </BannerContainer>
    )

  return (
    <BannerContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
      <OverlayDark />
      <ImageContent>
        <ImageText>
          <Tag $status="Highlight" size="big">
            {t('DailyHighlight')}
          </Tag>
          <ImageTextFooter>
            <Title>
              <p>{game.name}</p>
              <Price>
                {t('from')} <span>{priceFormat(game.prices.old ?? 0, i18n.language)}</span> <br />
                {t('forOnly')} {priceFormat(game.prices.current ?? 0, i18n.language)}
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
