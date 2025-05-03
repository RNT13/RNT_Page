import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SaveButton } from '../../components/contactCard/ContactCardStyles'
import Contacts from '../../models/ContactModels'
import { addContact } from '../../redux/slices/contactsSlice'
import { InputField } from '../../styles/globalStyles'
import * as contactEnums from '../../utils/enums/contactEnums'
import { Form, NewContactFormContainer, Opcoe, Opcoes } from '../newContactForm/NewContactFormStyles'

const NewContactForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<contactEnums.status>(contactEnums.status.UNKNOWN)

  const registerContact = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert(t('fillAllFilds'))
      return
    }

    const parsedPhone = parseInt(phone, 10)
    if (isNaN(parsedPhone)) {
      alert(t('fillAllFilds'))
      return
    }

    const contactToRegister = new Contacts(name, email, parsedPhone, Date.now())
    contactToRegister.status = status

    dispatch(
      addContact({
        name: contactToRegister.name,
        email: contactToRegister.email,
        phone: contactToRegister.phone,
        id: contactToRegister.id,
        status: contactToRegister.status
      })
    )

    navigate('/ContactsPage')
  }

  return (
    <NewContactFormContainer>
      <Form onSubmit={registerContact}>
        <InputField id="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder={t('fullName')} />
        <InputField id="email" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder={t('email')} />
        <InputField id="phone" value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder={t('phone')} />
        <Opcoes>
          <p>Status</p>
          {Object.values(contactEnums.status).map(statusValue => (
            <Opcoe key={statusValue}>
              <input
                value={statusValue}
                name="status"
                type="radio"
                id={statusValue}
                checked={status === statusValue}
                onChange={e => setStatus(e.target.value as contactEnums.status)}
              />
              <label htmlFor={statusValue}>{statusValue}</label>
            </Opcoe>
          ))}
        </Opcoes>
        <SaveButton type="headerButton" title={t('save')}>
          {t('save')}
        </SaveButton>
      </Form>
    </NewContactFormContainer>
  )
}

export default NewContactForm
