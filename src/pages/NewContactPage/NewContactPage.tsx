import { useTranslation } from 'react-i18next'
import FilterBar from '../../containers/filterBar/FilterBar'
import NewContactForm from '../../containers/newContactForm/NewContactForm'
import { TitleH2 } from '../../styles/globalStyles'
import { NewContactsContainer, NewContactsContent, NewContactsMain, NewContactsSideBar } from '../newContactPage/NewContactsPageStyles'

const NewContactsPage = () => {
  const { t } = useTranslation()

  return (
    <NewContactsContainer>
      <NewContactsSideBar>
        <FilterBar mostrarFiltros={false} type={'contacts'} />
      </NewContactsSideBar>
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
