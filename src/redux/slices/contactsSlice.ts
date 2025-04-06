import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/ContactModels'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<Contact>) => {
      const contactExists = state.itens.some(contact => contact.name.toLocaleUpperCase() === payload.name.toLocaleUpperCase())

      if (contactExists) {
        alert('Contact already exists')
      } else {
        state.itens.push(payload)
      }
    },
    removeContact: (state, { payload }: PayloadAction<number>) => {
      state.itens = state.itens.filter(contact => contact.id !== payload)
    },
    editContact: (state, { payload }: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(contact => contact.id === payload.id)

      if (contactIndex !== -1) {
        state.itens[contactIndex] = payload
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
