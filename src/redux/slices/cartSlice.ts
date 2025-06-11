import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { t } from 'i18next'
import { Game } from '../../types/gameType'

type CartState = {
  items: Game[]
  isOpen?: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find(item => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert(t('gameAlert'))
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    open: state => {
      state.isOpen = true
    },
    close: state => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
