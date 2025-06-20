import { useTranslation } from 'react-i18next'
import { useGetUnifiedGamesQuery } from '../../api/gameApi'
import Banner from '../../components/Banner/Banner'
import { Title } from '../../components/Banner/BannerStyles'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { ProductsContainer } from './ProductsPageStyles'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
  preview?: string
}

const ProductsPage = () => {
  const { t } = useTranslation()
  const { data: allGames, isLoading, isError } = useGetUnifiedGamesQuery()

  if (isLoading || !allGames) return <Title>{t('loading')}</Title>
  if (isError) return <Title>{t('error')}</Title>

  const promotions = allGames.filter(g => g.prices.discount > 0)
  const comingSoon = allGames.filter(g => new Date(g.release_date) > new Date())

  if (promotions && comingSoon) {
    return (
      <ProductsContainer id="nav">
        <ProductsNav />
        <Banner />
        <ProductsList id="onSale" title={t('games')} background="grey" games={promotions} />
        <ProductsList id="comingSoon" title={t('comingSoon')} background="black" games={comingSoon} />
      </ProductsContainer>
    )
  }

  return <h4>{t('loading')}</h4>
}

export default ProductsPage
