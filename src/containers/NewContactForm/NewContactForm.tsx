import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Contacts from '../../models/ContactModels'
import { addContact } from '../../redux/reducers/contactsReducer'
import { InputField, MainContainer, SaveButton } from '../../styles/globalStyles'
import * as contactEnums from '../../utils/enums/contactEnums'
import { Form, Opcoe, Opcoes } from './NewContactForm.Styles'

const NewContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(contactEnums.status.UNKNOWN)

  const registerContact = (e: React.FormEvent) => {
    e.preventDefault()
    const contactToRegister = new Contacts(name, email, phone, Date.now())
    contactToRegister.status = status

    const contactPlainObject = {
      name: contactToRegister.name,
      email: contactToRegister.email,
      phone: contactToRegister.phone,
      id: contactToRegister.id,
      status: contactToRegister.status
    }

    dispatch(addContact(contactPlainObject))
    navigate('/ContactsPage')
  }

  return (
    <MainContainer>
      <Form onSubmit={registerContact}>
        <InputField value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
        <InputField value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <InputField value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="Phone" />
        <Opcoes>
          <p>Status</p>
          {Object.values(contactEnums.status).map(status => (
            <Opcoe key={status}>
              <input value={status} name="status" type="radio" id={status} defaultChecked={status === contactEnums.status.STRANGER} onChange={e => setStatus(e.target.value as contactEnums.status)} />{' '}
              <label htmlFor={status}>{status}</label>
            </Opcoe>
          ))}
        </Opcoes>
        <SaveButton type="submit">Save</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default NewContactForm
