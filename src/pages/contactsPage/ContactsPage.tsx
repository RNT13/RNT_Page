import { useTranslation } from 'react-i18next'
import { AddButtonContacts } from '../../components/addButton/AddButton'
import ContactsList from '../../containers/contactsList/ContactsList'
import FilterBar from '../../containers/filterBar/FilterBar'
import { TitleH2 } from '../../styles/globalStyles'
import { ContactsContainer, ContactsContent, ContactsMain } from '../contactsPage/ContactsPageStyles'

const ContactsPage = () => {
  const { t } = useTranslation()

  return (
    <ContactsContainer>
      <FilterBar mostrarFiltros={true} type="contacts" />
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
