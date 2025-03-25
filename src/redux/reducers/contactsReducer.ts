import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/ContactModels'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: []
}

const ContactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const contactAlreadyExists = state.itens.find(contact => contact.name.toLocaleUpperCase() === action.payload.name.toLocaleUpperCase())

      if (contactAlreadyExists) {
        alert('contact already exists')
      } else {
        state.itens.push(action.payload)
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(Contact => Contact.id !== action.payload)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(Contact => Contact.id === action.payload.id)

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, editContact } = ContactsSlice.actions
export default ContactsSlice.reducer
