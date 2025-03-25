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

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Description = styled.textarea`
  color: ${theme.colors.cinza};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

const ActionBar = styled.div`
  border-top: 1px solid ${theme.colors.preto};
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
`

const InfoContainer = styled.div`
  display: flex;
  margin: 16px 16px;
  justify-content: start;
`

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
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
      <Title>
        <Tag $status={editedContact.status as Contactenums.status}>{editedContact.status}</Tag>
      </Title>
      <InfoContainer>
        <Label>Name:</Label>
        <p>{editedContact.name}</p>
      </InfoContainer>
      <InfoContainer>
        <Label>Email:</Label>
        <p>{editedContact.email}</p>
      </InfoContainer>
      <InfoContainer>
        <Label>Phone:</Label>
        <p>{editedContact.phone}</p>
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
