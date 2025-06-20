import { useTranslation } from 'react-i18next'
import { useGetFullGameDetailsQuery } from '../../api/gameApi'
import Gallery from '../../components/Gallery/Gallery'
import Card from '../../components/GameCard/GameCard'
import ProductCard from '../../components/ProductsCard/ProductsCard'
import Tag from '../../components/Tag/Tag'
import { TitleH2 } from '../../styles/globalStyles'
import { GradientButton, LineHoverButton, TestContent, TestPageContainer } from '../testPage/TestPageStyles'

import { useParams } from 'react-router-dom'

const TestPage = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const { data: game } = useGetFullGameDetailsQuery(id!)

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
        {game && (
          <Card
            id={Number(500)}
            title={game.name}
            category={game?.details.category}
            system={game?.details.system}
            description={game?.description}
            infos={[game?.release_date]}
            image={game?.media.thumbnail}
          />
        )}
        <ProductCard image={''} name={''} description={''} />
        <Gallery defaultCover={''} name={''} items={[]} />
      </TestContent>
    </TestPageContainer>
  )
}

export default TestPage
