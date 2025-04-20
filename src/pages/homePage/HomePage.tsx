import { useTranslation } from 'react-i18next'
import { GlobalMainContent, TitleH2 } from '../../styles/globalStyles'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <GlobalMainContent>
      <TitleH2>{t('home')}</TitleH2>
    </GlobalMainContent>
  )
}

export default HomePage
