import { useTranslation } from 'react-i18next'
import { BannerTag, Image, ImageContent, ImageText, Price, Title } from './bannerStyles'

const Banner = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Image style={{ backgroundImage: `url(/images/banner-homem-aranha.png)` }}>
        <ImageContent>
          <ImageText>
            <BannerTag $status="Highlight">{t('DailyHighlight')}</BannerTag>
            <Title>
              {t('SpiderMan')}
              <Price>
                {t('from')} <span>R$ 250,00</span> <br /> {t('forOnly')} R$ 99,90
              </Price>
            </Title>
          </ImageText>
        </ImageContent>
      </Image>
    </div>
  )
}

export default Banner
