import { useTranslation } from 'react-i18next'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../services/api'
import { ProductsContainer } from './ProductsPageStyles'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const ProductsPage = () => {
  const { t } = useTranslation()
  const { data: promotions } = useGetOnSaleQuery()
  const { data: comingSoon } = useGetComingSoonQuery()

  if (promotions && comingSoon) {
    return (
      <ProductsContainer>
        <ProductsNav />
        <Banner />
        <ProductsList id="onSale" title={t('games')} background="grey" games={Array.isArray(promotions) ? promotions : []}></ProductsList>
        <ProductsList id="comingSoon" title={t('comingSoon')} background="black" games={Array.isArray(comingSoon) ? comingSoon : []}></ProductsList>
      </ProductsContainer>
    )
  }

  return <h4>{t('loading')}</h4>
}

export default ProductsPage
