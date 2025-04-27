import { useTranslation } from 'react-i18next'
import { Tag } from '../../styles/globalStyles'
import { Image, ImageButton, ImageContent, ImageText, ImageTextFooter, Price, Title } from './bannerStyles'

const Banner = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Image style={{ backgroundImage: `url(/images/banner-homem-aranha.png)` }}>
        <ImageContent>
          <ImageText>
            <Tag $status="Highlight">{t('DailyHighlight')}</Tag>
            <ImageTextFooter>
              <Title>
                {t('SpiderMan')}
                <Price>
                  {t('from')} <span>R$ 250,00</span> <br /> {t('forOnly')} R$ 99,90
                </Price>
              </Title>
              <ImageButton type="headerButton" title={t('click')}>
                {t('BuyNow')}
              </ImageButton>
            </ImageTextFooter>
          </ImageText>
        </ImageContent>
      </Image>
    </div>
  )
}

export default Banner
