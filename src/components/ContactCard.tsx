import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import ContactModels from '../models/ContactModels'
import { editContact, removeContact } from '../redux/reducers/contactsReducer'
import { Button, Card, SaveButton, Tag } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import * as Contactenums from '../utils/enums/contactEnums'

type ContactProps = {
  contact: ContactModels
}

const ContactTitle = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  border: none;
  background: transparent;
  color: ${theme.colors.preto};
  width: 100%;
`

const Description = styled.textarea`
  color: ${theme.colors.cinza};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

const ActionBar = styled.div`
  border-top: 1px solid ${theme.colors.preto};
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;
`

const InfoContainer = styled.div`
  display: flex;
  margin: 16px 16px;
  justify-content: start;

  label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: ${theme.colors.preto};
  }
`

const RemoveContactButton = styled(Button)`
  background-color: ${theme.colors.vermelho};
`

const ContactCard = ({ contact }: ContactProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedContact, setEditedContact] = useState(contact)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditedContact(contact)
  }

  const handleSave = () => {
    dispatch(editContact(editedContact))
    setIsEditing(false)
  }

  const handleRemove = () => {
    dispatch(removeContact(contact.id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedContact(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Card>
      <div>
        <Tag $status={editedContact.status as Contactenums.status}>{editedContact.status}</Tag>
        {isEditing && <span>Editing...</span>}
      </div>
      <InfoContainer>
        <label>Name:</label>
        <ContactTitle name="name" value={editedContact.name} onChange={handleChange} disabled={!isEditing} />
      </InfoContainer>
      <InfoContainer>
        <label>Email:</label>
        <ContactTitle name="email" value={editedContact.email} onChange={handleChange} disabled={!isEditing} />
      </InfoContainer>
      <InfoContainer>
        <label>Phone:</label>
        <ContactTitle name="phone" value={editedContact.phone} onChange={handleChange} disabled={!isEditing} />
      </InfoContainer>
      <Description name="description" value={editedContact.description || ''} onChange={handleChange} disabled={!isEditing} placeholder="description" />
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={handleSave}>Save</SaveButton>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={handleEdit}>Edit Contact</Button>
            <RemoveContactButton onClick={handleRemove}>Remove</RemoveContactButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default ContactCard
