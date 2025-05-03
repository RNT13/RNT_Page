import { useTranslation } from 'react-i18next'
import { TitleH2 } from '../../styles/globalStyles'
import { ProfilePageContainer } from './ProfilePageStyles'

const ProfilePage = () => {
  const { t } = useTranslation()

  return (
    <ProfilePageContainer>
      <TitleH2>{t('profile')}</TitleH2>
    </ProfilePageContainer>
  )
}

export default ProfilePage
