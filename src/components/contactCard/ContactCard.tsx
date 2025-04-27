import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import ContactModels from '../../models/ContactModels'
import { editContact, removeContact } from '../../redux/slices/contactsSlice'
import { Card, Tag } from '../../styles/globalStyles'
import * as Contactenums from '../../utils/enums/contactEnums'
import { CancelButton, ContactCardActionBar, ContactCardContainer, ContactCardDescription, ContactCardHeader, ContactCardTitle, EditButton, RemoveContactButton, SaveButton } from './ContactCardStyles'

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
      <ContactCardHeader>
        <Tag $status={editedContact.status as Contactenums.status}>{t((editedContact.status as string).toLowerCase())}</Tag>
        {isEditing && <h2>{t('editing')}</h2>}
      </ContactCardHeader>

      <ContactCardContainer>
        <label>{t('name')}:</label>
        <ContactCardTitle name="name" value={editedContact.name} onChange={handleChange} disabled={!isEditing} />
      </ContactCardContainer>
      <ContactCardContainer>
        <label>{t('email')}:</label>
        <ContactCardTitle name="email" value={editedContact.email} onChange={handleChange} disabled={!isEditing} />
      </ContactCardContainer>
      <ContactCardContainer>
        <label>{t('phone')}:</label>
        <ContactCardTitle name="phone" value={editedContact.phone} onChange={handleChange} disabled={!isEditing} />
      </ContactCardContainer>
      <ContactCardDescription name="description" value={editedContact.description || ''} onChange={handleChange} disabled={!isEditing} placeholder="description" />
      <ContactCardActionBar>
        {isEditing ? (
          <>
            <SaveButton type="button" title={t('save')} onClick={handleSave}>
              {t('save')}
            </SaveButton>
            <CancelButton type="button" title={t('cancel')} onClick={handleCancel}>
              {t('cancel')}
            </CancelButton>
          </>
        ) : (
          <>
            <EditButton type="button" title={t('editContact')} onClick={handleEdit}>
              {t('editContact')}
            </EditButton>
            <RemoveContactButton type="button" title={t('remove')} onClick={handleRemove}>
              {t('remove')}
            </RemoveContactButton>
          </>
        )}
      </ContactCardActionBar>
    </Card>
  )
}

export default ContactCard
