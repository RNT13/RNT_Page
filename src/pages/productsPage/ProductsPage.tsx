import { useTranslation } from 'react-i18next'
import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../api/gameApi'
import Banner from '../../components/Banner/Banner'
import { Title } from '../../components/Banner/BannerStyles'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { ProductsContainer } from './ProductsPageStyles'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const ProductsPage = () => {
  const { t } = useTranslation()
  const { data: promotions, isLoading: loadingPromotions, isError: errorPromotions } = useGetOnSaleQuery({})
  const { data: comingSoon, isLoading: loadingComingSoon, isError: errorComingSoon } = useGetComingSoonQuery({})

  if (loadingPromotions || loadingComingSoon)
    return (
      <ProductsContainer>
        <Title>{t('loading')}</Title>
      </ProductsContainer>
    )
  if (errorPromotions || errorComingSoon)
    return (
      <ProductsContainer>
        <Title>{t('error')}</Title>
      </ProductsContainer>
    )

  if (promotions && comingSoon) {
    return (
      <ProductsContainer id="nav">
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
