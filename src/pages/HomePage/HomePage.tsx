import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { HomeContainer } from './HomePageStyles'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <HomeContainer>
      <TitleH2>{t('home')}</TitleH2>
    </HomeContainer>
  )
}

export default HomePage
