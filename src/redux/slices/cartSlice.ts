import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../utils/GameApi'

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
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<Game>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
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
