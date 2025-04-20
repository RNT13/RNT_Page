import { useTranslation } from 'react-i18next'
import { GlobalMainContent, TitleH2 } from '../../styles/globalStyles'

const RequestsPage = () => {
  const { t } = useTranslation()

  return (
    <GlobalMainContent>
      <TitleH2>{t('requests')}</TitleH2>
    </GlobalMainContent>
  )
}

export default RequestsPage
