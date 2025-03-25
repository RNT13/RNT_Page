import FilterBar from '../../containers/FilterBar/FilterBar'
import NewContactForm from '../../containers/NewContactForm/NewContactForm'
import { NewContactsContainer } from '../../pages/NewContactPage/NewContactsPage.style'
import { TitleH2 } from '../../styles/globalStyles'
import { NewContactsContent, NewContactsMain, NewContactsSideBar } from './NewContactsPage.style'

const NewContactsPage = () => (
  <NewContactsContainer>
    <NewContactsSideBar>
      <FilterBar mostrarFiltros={false} type={'contacts'} />
    </NewContactsSideBar>
    <NewContactsMain>
      <TitleH2>New Contacts</TitleH2>
      <NewContactsContent>
        <NewContactForm />
      </NewContactsContent>
    </NewContactsMain>
  </NewContactsContainer>
)

export default NewContactsPage
