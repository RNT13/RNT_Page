import { useTranslation } from 'react-i18next'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationGamesQuery } from '../../services/api'
import { TitleH2 } from '../../styles/globalStyles'
import { CategoryPageContent } from './CategoryPageStyles'

const CategoryPage = () => {
  const { t } = useTranslation()
  const { data: action } = useGetActionGamesQuery()
  const { data: rpg } = useGetRpgGamesQuery()
  const { data: fight } = useGetFightGamesQuery()
  const { data: simulation } = useGetSimulationGamesQuery()

  return (
    <CategoryPageContent>
      <ProductsNav />
      <Banner />
      <TitleH2>Category</TitleH2>
      <ProductsList id="action" title={t('action')} background="grey" games={Array.isArray(action) ? action : []} />
      <ProductsList id="rpg" title={t('rpg')} background="black" games={Array.isArray(rpg) ? rpg : []} />
      <ProductsList id="fight" title={t('fight')} background="grey" games={Array.isArray(fight) ? fight : []} />
      <ProductsList id="simulation" title={t('simulation')} background="black" games={Array.isArray(simulation) ? simulation : []} />
    </CategoryPageContent>
  )
}

export default CategoryPage
