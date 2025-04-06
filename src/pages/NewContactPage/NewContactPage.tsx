import FilterBar from '../../containers/FilterBar/FilterBar'
import NewContactForm from '../../containers/NewContactForm/NewContactForm'
import { TitleH2 } from '../../styles/globalStyles'
import { NewContactsContainer, NewContactsContent, NewContactsMain, NewContactsSideBar } from './NewContactsPageStyles'

const NewContactsPage = () => (
  <NewContactsContainer>
    <NewContactsSideBar>
      <FilterBar mostrarFiltros={false} type={'contacts'} />
    </NewContactsSideBar>
    <NewContactsMain>
      <TitleH2>New Contact</TitleH2>
      <NewContactsContent>
        <NewContactForm />
      </NewContactsContent>
    </NewContactsMain>
  </NewContactsContainer>
)

export default NewContactsPage
