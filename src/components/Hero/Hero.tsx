import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'
import { add, open } from '../../redux/slices/cartSlice'
import { OverlayDark } from '../../styles/globalStyles'
import { Game } from '../../types/gameType'
import { priceFormat } from '../../utils/PriceFormat'
import Tag from '../Tag/Tag'
import { HeroButton, HeroContainer, HeroContent, HeroHeader, HeroInfo, HeroText, HeroTextFooter, Price } from './HeroStyles'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <HeroContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
      <OverlayDark />
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
                  {t('from')} {priceFormat(game.prices.original ?? 0)}
                </span>
              )}
              {game.release_date ? (
                <h3>
                  {t('releaseDate')}: {game.release_date}
                </h3>
              ) : (
                <>
                  <Price>
                    {t('forOnly')} {priceFormat(game.prices.current ?? 0)}
                  </Price>
                  <HeroButton onClick={addToCart} type="headerButton" title={t('click')}>
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
