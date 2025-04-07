import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'

const CalendarPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <TitleH2>{t('calendar')}</TitleH2>
    </div>
  )
}

export default CalendarPage
