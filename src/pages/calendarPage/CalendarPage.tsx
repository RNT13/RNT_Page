import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { CalendarContainer, CalendarContent } from '../calendarPage/CalendarPageStyles'

const CalendarPage = () => {
  const { t } = useTranslation()

  return (
    <CalendarContainer>
      <TitleH2>{t('calendar')}</TitleH2>
      <CalendarContent></CalendarContent>
    </CalendarContainer>
  )
}

export default CalendarPage
