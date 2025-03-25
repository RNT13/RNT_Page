import Carousel from '../../components/Carousel'
import Card from '../../components/ProductsCard'
import { TitleH2 } from '../../styles/globalStyles'
import { ProductsCardContainer, ProductsContainer } from './productsPage.styles'

const ProductsPage = () => {
  return (
    <ProductsContainer>
      <Carousel />
      <TitleH2>Produtos</TitleH2>
      <ProductsCardContainer>
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
        <Card
          image="/images/canecas (1).png"
          name="Caneca Personalizada"
          description="Uma linda caneca personalizada para o seu café."
        />
      </ProductsCardContainer>
    </ProductsContainer>
  )
}

export default ProductsPage
