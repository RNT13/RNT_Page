import { AddButtonContacts } from '../../components/AddButton/AddButton'
import ContactsList from '../../containers/ContactsList/ContactsList'
import FilterBar from '../../containers/FilterBar/FilterBar'
import { TitleH2 } from '../../styles/globalStyles'
import { ContactsContainer, ContactsContent, ContactsMain, ContactsSidebar } from './ContactsPageStyles'

const ContactsPage = () => {
  return (
    <ContactsContainer>
      <ContactsSidebar>
        <FilterBar mostrarFiltros={true} type="contacts" />
      </ContactsSidebar>
      <ContactsMain>
        <TitleH2>Contacts</TitleH2>
        <ContactsContent>
          <ContactsList />
          <AddButtonContacts />
        </ContactsContent>
      </ContactsMain>
    </ContactsContainer>
  )
}

export default ContactsPage
