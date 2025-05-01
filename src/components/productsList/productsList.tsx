import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { ProductsListContainer, ProductsListContent } from './productsListStyles'

export type listProps = {
  title: string
  background: 'grey' | 'black'
  children?: React.ReactNode
}

const ProductsList = ({ title, children, background }: listProps) => {
  const { t } = useTranslation()

  return (
    <ProductsListContainer $background={background}>
      <TitleH2>{t(title)}</TitleH2>
      <ProductsListContent $background={background}>{children}</ProductsListContent>
    </ProductsListContainer>
  )
}

export default ProductsList
