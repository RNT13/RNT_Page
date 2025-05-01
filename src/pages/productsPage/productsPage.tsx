import { useTranslation } from 'react-i18next'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import ProductsList from '../../components/productsList/productsList'
import ProductsNav from '../../components/productsNav/ProductsNav'
import { ProductsContainer } from '../productsPage/productsPageStyles'

const ProductsPage = () => {
  const { t } = useTranslation()

  return (
    <ProductsContainer>
      <ProductsNav />
      <Banner />
      <ProductsList title={t('games')} background="grey">
        <Card
          categoty={t('horror')}
          system="PC/PS5"
          image="public\images\resident.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('resident')}
          description={t('residentDescription')}
        />
        <Card
          categoty={t('action')}
          system="PC/PS5"
          image="public\images\diablo.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('diablo')}
          description={t('diabloDescription')}
        />
        <Card
          categoty={t('adventure')}
          system="PC/PS5"
          image="public\images\star_wars.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('starWars')}
          description={t('starWarsDescription')}
        />
        <Card
          categoty={t('action')}
          system="PC/PS5"
          image="public\images\zelda.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('zelda')}
          description={t('zeldaDescription')}
        />
      </ProductsList>
      <ProductsList title={t('comingSoon')} background="black">
        <Card
          categoty={t('horror')}
          system="PC/PS5"
          image="public\images\resident.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('resident')}
          description={t('residentDescription')}
        />
        <Card
          categoty={t('action')}
          system="PC/PS5"
          image="public\images\diablo.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('diablo')}
          description={t('diabloDescription')}
        />
        <Card
          categoty={t('adventure')}
          system="PC/PS5"
          image="public\images\star_wars.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('starWars')}
          description={t('starWarsDescription')}
        />
        <Card
          categoty={t('action')}
          system="PC/PS5"
          image="public\images\zelda.png"
          infos={['-10%', 'R$ 150,00']}
          title={t('zelda')}
          description={t('zeldaDescription')}
        />
      </ProductsList>
    </ProductsContainer>
  )
}

export default ProductsPage
