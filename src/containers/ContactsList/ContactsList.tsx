import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard/ContactCard'
import { RootState } from '../../redux/store'
import { TitleH2 } from '../../styles/globalStyles'
import { MainContactContainer } from './ContactsListStyles'

const ContactsList = () => {
  const { t } = useTranslation()
  const { term, criterion, value } = useSelector((state: RootState) => state.filter)
  const contacts = useSelector((state: RootState) => state.contacts.itens)

  const filtrarcontacts = () => {
    let filteredcontacts = contacts
    if (term !== '') {
      filteredcontacts = filteredcontacts.filter(contact => contact.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
    }
    if (criterion === 'status') {
      filteredcontacts = filteredcontacts.filter(contact => contact.status === value)
    }
    return filteredcontacts
  }

  const displayFilteredResult = (amount: number) => {
    let message = ''
    const complementation = term !== undefined && term.length > 0 ? ` e "${term}"` : ''
    const getTranslatedStatus = (value: string) => {
      const lower = value.toLowerCase()
      return t(lower, value)
    }

    if (criterion === 'all') {
      message = `${amount} ${t('contactMarkedAsAll')} ${complementation}`
    } else {
      message = `${amount} ${t('contactMarketAs')} ${getTranslatedStatus(value || '')} ${complementation}`
    }
    return message
  }

  const filteredcontacts = filtrarcontacts()
  const message = displayFilteredResult(filteredcontacts.length)

  return (
    <MainContactContainer>
      <TitleH2 as="p">{message}</TitleH2>
      <ul>
        {filteredcontacts.map(contact => (
          <li key={contact.id}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </MainContactContainer>
  )
}

export default ContactsList
