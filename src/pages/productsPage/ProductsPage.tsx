import { useTranslation } from 'react-i18next'
import Banner from '../../components/banner/banner'
import ProductsList from '../../components/productsList/productsList'
import ProductsNav from '../../components/productsNav/ProductsNav'
import { comingSoonGames, promotionGames } from '../../data/GamesData'
import { ProductsContainer } from './ProductsPageStyles'

const ProductsPage = () => {
  const { t } = useTranslation()

  return (
    <ProductsContainer>
      <ProductsNav />
      <Banner />
      <ProductsList title={t('games')} background="grey" games={promotionGames}></ProductsList>
      <ProductsList title={t('comingSoon')} background="black" games={comingSoonGames}></ProductsList>
    </ProductsContainer>
  )
}

export default ProductsPage
