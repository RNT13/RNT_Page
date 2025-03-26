import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Contacts from '../../models/ContactModels'
import { addContact } from '../../redux/reducers/contactsReducer'
import { InputField, MainContainer, SaveButton } from '../../styles/globalStyles'
import * as contactEnums from '../../utils/enums/contactEnums'
import { Form, Opcoe, Opcoes } from './NewContactFormStyles'

const NewContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<contactEnums.status>(contactEnums.status.UNKNOWN)

  const registerContact = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    const parsedPhone = parseInt(phone, 10)
    if (isNaN(parsedPhone)) {
      alert('Por favor, insira um número de telefone válido.')
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
    <MainContainer>
      <Form onSubmit={registerContact}>
        <InputField value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
        <InputField value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <InputField value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="Phone" />
        <Opcoes>
          <p>Status</p>
          {Object.values(contactEnums.status).map(statusValue => (
            <Opcoe key={statusValue}>
              <input value={statusValue} name="status" type="radio" id={statusValue} checked={status === statusValue} onChange={e => setStatus(e.target.value as contactEnums.status)} />
              <label htmlFor={statusValue}>{statusValue}</label>
            </Opcoe>
          ))}
        </Opcoes>
        <SaveButton type="submit">Save</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default NewContactForm
