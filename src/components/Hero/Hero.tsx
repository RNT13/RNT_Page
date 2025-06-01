import { useTranslation } from 'react-i18next'

import { Game } from '../../utils/GameApi'
import { priceFormat } from '../ProductsList/ProductsList'
import Tag from '../Tag/Tag'
import { HeroButton, HeroContainer, HeroContent, HeroHeader, HeroInfo, HeroText, HeroTextFooter, Price } from './HeroStyles'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
  const { t } = useTranslation()

  return (
    <HeroContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
      <HeroContent>
        <HeroText className="container">
          <HeroHeader>
            <Tag $status="Highlight" size="mid">
              {game.details.category}
            </Tag>
            <Tag $status="Highlight" size="mid">
              {game.details.system}
            </Tag>
          </HeroHeader>
          <HeroTextFooter>
            <HeroInfo>
              <h2>{game.name}</h2>
              {game.prices.discount && (
                <span>
                  {t('from')} {priceFormat(game.prices.old)}
                </span>
              )}
              {game.release_date ? (
                <h3>
                  {t('releaseDate')}: {game.release_date}
                </h3>
              ) : (
                <>
                  <Price>
                    {t('forOnly')} {priceFormat(game.prices.current)}
                  </Price>
                  <HeroButton type="headerButton" title={t('click')}>
                    {t('addToCart')}
                  </HeroButton>
                </>
              )}
            </HeroInfo>
          </HeroTextFooter>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
