import { useTranslation } from 'react-i18next'
import { ProfilePageContainer } from '../../pages/profilePage/ProfilePageStyles'
import { TitleH2 } from '../../styles/globalStyles'

const ProfilePage = () => {
  const { t } = useTranslation()

  return (
    <ProfilePageContainer>
      <TitleH2>{t('profile')}</TitleH2>
    </ProfilePageContainer>
  )
}

export default ProfilePage
