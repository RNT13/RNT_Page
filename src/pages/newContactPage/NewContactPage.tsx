import { useTranslation } from 'react-i18next'
import FilterBar from '../../containers/filterBar/FilterBar'
import NewContactForm from '../../containers/newContactForm/NewContactForm'
import { TitleH2 } from '../../styles/globalStyles'
import { NewContactsContainer, NewContactsContent, NewContactsMain } from '../newContactPage/NewContactsPageStyles'

const NewContactsPage = () => {
  const { t } = useTranslation()

  return (
    <NewContactsContainer>
      <FilterBar mostrarFiltros={false} type={'contacts'} />
      <NewContactsMain>
        <TitleH2>{t('newContact')}</TitleH2>
        <NewContactsContent>
          <NewContactForm />
        </NewContactsContent>
      </NewContactsMain>
    </NewContactsContainer>
  )
}

export default NewContactsPage
