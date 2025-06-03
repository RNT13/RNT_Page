import { useTranslation } from 'react-i18next'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import {
  useGetActionGamesQuery,
  useGetComingSoonQuery,
  useGetFightGamesQuery,
  useGetOnSaleQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'
import { ProductsContainer } from './ProductsPageStyles'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const ProductsPage = () => {
  const { t } = useTranslation()
  const { data: promotions } = useGetOnSaleQuery()
  const { data: comingSoon } = useGetComingSoonQuery()
  const { data: action } = useGetActionGamesQuery()
  const { data: rpg } = useGetRpgGamesQuery()
  const { data: fight } = useGetFightGamesQuery()
  const { data: simulation } = useGetSimulationGamesQuery()

  if (promotions && comingSoon && action && rpg && fight && simulation) {
    return (
      <ProductsContainer>
        <ProductsNav />
        <Banner />
        <ProductsList title={t('games')} background="grey" games={Array.isArray(promotions) ? promotions : []}></ProductsList>
        <ProductsList title={t('comingSoon')} background="black" games={Array.isArray(comingSoon) ? comingSoon : []}></ProductsList>
        <ProductsList title={t('action')} background="grey" games={Array.isArray(action) ? action : []}></ProductsList>
        <ProductsList title={t('rpg')} background="black" games={Array.isArray(rpg) ? rpg : []}></ProductsList>
        <ProductsList title={t('fight')} background="grey" games={Array.isArray(fight) ? fight : []}></ProductsList>
        <ProductsList title={t('simulation')} background="black" games={Array.isArray(simulation) ? simulation : []}></ProductsList>
      </ProductsContainer>
    )
  }

  return <h4>{t('loading')}</h4>
}

export default ProductsPage
