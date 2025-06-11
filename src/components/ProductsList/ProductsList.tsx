import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { Game } from '../../types/gameType'
import { priceFormat } from '../../utils/PriceFormat'
import Card from '../Card/Card'
import { ProductsListContainer, ProductsListContent } from './ProductsListStyles'

export type listProps = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ title, background, games, id }: listProps) => {
  const { t } = useTranslation()

  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(priceFormat(game.prices.current))
    }

    return tags
  }

  return (
    <ProductsListContainer id={id} $background={background}>
      <TitleH2>{t(title)}</TitleH2>
      <ProductsListContent $background={background}>
        {games.map(game => (
          <li key={game.id}>
            <Card
              id={game.id}
              category={t(game.details.category)}
              system={game.details.system}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              title={t(game.name)}
              description={t(game.description)}
            />
          </li>
        ))}
      </ProductsListContent>
    </ProductsListContainer>
  )
}

export default ProductsList
