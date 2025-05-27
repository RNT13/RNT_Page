import { useTranslation } from 'react-i18next'
import Card from '../../components/Card/Card'
import ProductCard from '../../components/ProductsCard/ProductsCard'
import Tag from '../../components/Tag/Tag'
import { TitleH2 } from '../../styles/globalStyles'
import { GradientButton, LineHoverButton, TestContent, TestPageContainer } from '../testPage/TestPageStyles'

const TestPage = () => {
  const { t } = useTranslation()

  return (
    <TestPageContainer>
      <TitleH2>{t('test')}</TitleH2>
      <TestContent>
        <GradientButton>
          <h3>{t('click')}</h3>
        </GradientButton>
        <LineHoverButton>
          <h3>{t('click')}</h3>
        </LineHoverButton>
        <Tag $status="unknown" size="small">
          {t('test')}
        </Tag>
        <Card
          categoty="Ação"
          system="PC/PS5"
          image="public\images\resident.png"
          infos={['-10%', 'R$ 150,00']}
          title={''}
          description={''}
        />
        <ProductCard image={''} name={''} description={''} />
      </TestContent>
    </TestPageContainer>
  )
}

export default TestPage
