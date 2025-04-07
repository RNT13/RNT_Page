import { useTranslation } from 'react-i18next'
import Carousel from '../../components/Carousel/Carousel'
import Card from '../../components/ProductsCard/ProductsCard'
import { TitleH2 } from '../../styles/globalStyles'
import { ProductsCardContainer, ProductsContainer } from './productsPageStyles'

const ProductsPage = () => {
  const { t } = useTranslation()

  return (
    <ProductsContainer>
      <Carousel />
      <TitleH2>{t('products')}</TitleH2>
      <ProductsCardContainer>
        <Card image="/images/canecas (1).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (2).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (3).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (4).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (5).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (6).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (7).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (8).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (9).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (10).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (11).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (12).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
        <Card image="/images/canecas (13).png" name="Caneca Personalizada" description="Uma linda caneca personalizada para o seu café." />
      </ProductsCardContainer>
    </ProductsContainer>
  )
}

export default ProductsPage
