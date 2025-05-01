import { useTranslation } from 'react-i18next'
import GameModel from '../../models/GameModels'
import { TitleH2 } from '../../styles/globalStyles'
import Card from '../card/card'
import { ProductsListContainer, ProductsListContent } from './productsListStyles'

export type listProps = {
  title: string
  background: 'grey' | 'black'
  games: GameModel[]
}

const ProductsList = ({ title, background, games }: listProps) => {
  const { t } = useTranslation()

  return (
    <ProductsListContainer $background={background}>
      <TitleH2>{t(title)}</TitleH2>
      <ProductsListContent $background={background}>
        {games.map(game => (
          <Card
            key={game.id}
            categoty={game.category}
            system={game.system}
            image={game.image}
            infos={game.infos}
            title={game.title}
            description={game.description}
          />
        ))}
      </ProductsListContent>
    </ProductsListContainer>
  )
}

export default ProductsList
