import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { RequestsPageContainer } from '../requestsPage/RequestsPageStyles'

const RequestsPage = () => {
  const { t } = useTranslation()

  return (
    <RequestsPageContainer>
      <TitleH2>{t('requests')}</TitleH2>
    </RequestsPageContainer>
  )
}

export default RequestsPage
