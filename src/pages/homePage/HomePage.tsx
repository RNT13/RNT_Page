import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { HomePageContainer } from './HomePageStyles'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <HomePageContainer>
      <TitleH2>{t('home')}</TitleH2>
    </HomePageContainer>
  )
}

export default HomePage
