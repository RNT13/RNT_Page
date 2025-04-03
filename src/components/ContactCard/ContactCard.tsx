import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactModels from '../../models/ContactModels'
import { editContact, removeContact } from '../../redux/reducers/contactsReducer'
import { Button, Card, SaveButton, Tag } from '../../styles/globalStyles'
import * as Contactenums from '../../utils/enums/contactEnums'
import { ActionBar, ContactTitle, Description, InfoContainer, RemoveContactButton } from './ContactCardStyles'

type ContactProps = {
  contact: ContactModels
}

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
