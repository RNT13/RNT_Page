import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
  language: 'pt' | 'en'
}

const initialState: LanguageState = {
  language: 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state, action: PayloadAction<'pt' | 'en'>) => {
      state.language = action.payload
    }
  }
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
