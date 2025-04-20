import { useTranslation } from 'react-i18next'
import { GlobalMainContent, TitleH2 } from '../../styles/globalStyles'

const ProfilePage = () => {
  const { t } = useTranslation()

  return (
    <GlobalMainContent>
      <TitleH2>{t('profile')}</TitleH2>
    </GlobalMainContent>
  )
}

export default ProfilePage
