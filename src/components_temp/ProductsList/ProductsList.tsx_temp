import { useTranslation } from 'react-i18next'
import { Game } from '../../pages/productsPage/ProductsPage'
import { TitleH2 } from '../../styles/globalStyles'
import Card from '../Card/Card'
import { ProductsListContainer, ProductsListContent } from './ProductsListStyles'

export type listProps = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(price)
}

const ProductsList = ({ title, background, games }: listProps) => {
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
    <ProductsListContainer $background={background}>
      <TitleH2>{t(title)}</TitleH2>
      <ProductsListContent $background={background}>
        {games.map(game => (
          <li key={game.id}>
            <Card
              id={game.id}
              categoty={t(game.details.category)}
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
