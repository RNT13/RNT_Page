import { useTranslation } from 'react-i18next'
import { useGetUnifiedGamesQuery } from '../../api/gameApi'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { TitleH2 } from '../../styles/globalStyles'
import { CategoryPageContent } from './CategoryPageStyles'

const CategoryPage = () => {
  const { t } = useTranslation()
  const { data: allGames = [], isLoading, isError } = useGetUnifiedGamesQuery()

  // Filtra por categoria
  const action = allGames.filter(game => game.details.category?.toLowerCase() === 'ação' || game.details.category?.toLowerCase() === 'action')
  const rpg = allGames.filter(game => game.details.category?.toLowerCase() === 'rpg')
  const fight = allGames.filter(game => game.details.category?.toLowerCase() === 'luta' || game.details.category?.toLowerCase() === 'fight')
  const simulation = allGames.filter(
    game => game.details.category?.toLowerCase() === 'simulação' || game.details.category?.toLowerCase() === 'simulation'
  )

  if (isLoading) return <TitleH2>{t('loading')}</TitleH2>
  if (isError) return <TitleH2>{t('error')}</TitleH2>

  return (
    <CategoryPageContent>
      <ProductsNav />
      <Banner />
      <TitleH2>Category</TitleH2>
      <ProductsList id="action" title={t('action')} background="grey" games={action} />
      <ProductsList id="rpg" title={t('rpg')} background="black" games={rpg} />
      <ProductsList id="fight" title={t('fight')} background="grey" games={fight} />
      <ProductsList id="simulation" title={t('simulation')} background="black" games={simulation} />
    </CategoryPageContent>
  )
}

export default CategoryPage
