import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import ContactModels from '../../models/ContactModels'
import { editContact, removeContact } from '../../redux/slices/contactsSlice'
import { Card, SaveButton, Tag } from '../../styles/globalStyles'
import * as Contactenums from '../../utils/enums/contactEnums'
import { ActionBar, CancelButton, ContactTitle, Description, EditButton, InfoContainer, RemoveContactButton } from './ContactCardStyles'

type ContactProps = {
  contact: ContactModels
}

const ContactCard = ({ contact }: ContactProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
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
      <Tag $status={editedContact.status as Contactenums.status}>{t((editedContact.status as string).toLowerCase())}</Tag>

      <InfoContainer>
        <label>{t('name')}:</label>
        <ContactTitle name="name" value={editedContact.name} onChange={handleChange} disabled={!isEditing} />
      </InfoContainer>
      <InfoContainer>
        <label>{t('email')}:</label>
        <ContactTitle name="email" value={editedContact.email} onChange={handleChange} disabled={!isEditing} />
      </InfoContainer>
      <InfoContainer>
        <label>{t('phone')}:</label>
        <ContactTitle name="phone" value={editedContact.phone} onChange={handleChange} disabled={!isEditing} />
      </InfoContainer>
      <Description name="description" value={editedContact.description || ''} onChange={handleChange} disabled={!isEditing} placeholder="description" />
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={handleSave}>{t('save')}</SaveButton>
            <CancelButton onClick={handleCancel}>{t('cancel')}</CancelButton>
          </>
        ) : (
          <>
            <EditButton onClick={handleEdit}>{t('editContact')} </EditButton>
            <RemoveContactButton onClick={handleRemove}>{t('remove')}</RemoveContactButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default ContactCard
