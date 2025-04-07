import { useTranslation } from 'react-i18next'
import { AddButtonContacts } from '../../components/AddButton/AddButton'
import ContactsList from '../../containers/ContactsList/ContactsList'
import FilterBar from '../../containers/FilterBar/FilterBar'
import { TitleH2 } from '../../styles/globalStyles'
import { ContactsContainer, ContactsContent, ContactsMain, ContactsSidebar } from './ContactsPageStyles'

const ContactsPage = () => {
  const { t } = useTranslation()

  return (
    <ContactsContainer>
      <ContactsSidebar>
        <FilterBar mostrarFiltros={true} type="contacts" />
      </ContactsSidebar>
      <ContactsMain>
        <TitleH2>{t('contacts')}</TitleH2>
        <ContactsContent>
          <ContactsList />
          <AddButtonContacts />
        </ContactsContent>
      </ContactsMain>
    </ContactsContainer>
  )
}

export default ContactsPage
