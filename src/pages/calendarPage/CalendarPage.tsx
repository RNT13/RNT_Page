import { useTranslation } from 'react-i18next'
import { GlobalMainContent, TitleH2 } from '../../styles/globalStyles'

const CalendarPage = () => {
  const { t } = useTranslation()

  return (
    <GlobalMainContent>
      <TitleH2>{t('calendar')}</TitleH2>
    </GlobalMainContent>
  )
}

export default CalendarPage
