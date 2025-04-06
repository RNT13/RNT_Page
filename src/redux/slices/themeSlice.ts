import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  theme: 'light' | 'dark'
  language: 'en' | 'pt-br'
}

const initialState: ThemeState = {
  theme: 'dark',
  language: 'pt-br'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
    toggleLanguage: state => {
      state.language = state.language === 'en' ? 'pt-br' : 'en'
    }
  }
})

export const { toggleTheme, toggleLanguage } = themeSlice.actions

export default themeSlice.reducer
