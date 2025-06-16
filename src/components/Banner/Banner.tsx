import { useTranslation } from 'react-i18next'
import { OverlayDark } from '../../styles/globalStyles'
import { BannerContainer, ImageButton, ImageContent, ImageText, ImageTextFooter, Price, Title } from '../Banner/BannerStyles'

import { useGetUnifiedGamesQuery } from '../../api/gameApi'
import { priceFormat } from '../../utils/PriceFormat'
import Tag from '../Tag/Tag'

const Banner = () => {
  const { t } = useTranslation()

  const { data: game, isLoading: loading, isError: error } = useGetUnifiedGamesQuery()

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
    <BannerContainer style={{ backgroundImage: `url(${game && game[0]?.media.cover})` }}>
      <OverlayDark />
      <ImageContent>
        <ImageText>
          <Tag $status="Highlight" size="big">
            {t('DailyHighlight')}
          </Tag>
          <ImageTextFooter>
            <Title>
              <p>{game && game[0]?.name}</p>
              <Price>
                {t('from')} <span>{priceFormat((game && game[0]?.prices.original) ?? 0)}</span> <br />
                {t('forOnly')} {priceFormat((game && game[0]?.prices.current) ?? 0)}
              </Price>
            </Title>
            <ImageButton to={`/DetailsPage/${game && game[0]?.id}`} type="headerButton" title={t('click')}>
              {t('BuyNow')}
            </ImageButton>
          </ImageTextFooter>
        </ImageText>
      </ImageContent>
    </BannerContainer>
  )
}

export default Banner
