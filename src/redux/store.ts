import { combineReducers, configureStore as toolkitConfigureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/contactsSlice'
import filterReducer from './slices/filterSlice'
import languageReducer from './slices/languageSlice'
import sideBarSlice from './slices/sideBarSlice'
import tasksReducer from './slices/taskSlice'
import themeReducer from './slices/themeSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  contacts: contactsReducer,
  theme: themeReducer,
  language: languageReducer,
  sidebar: sideBarSlice
})

export type RootState = ReturnType<typeof rootReducer>

export function configureStore(preloadedState?: Partial<RootState>) {
  return toolkitConfigureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = configureStore()

export type AppStore = ReturnType<typeof configureStore>
export type RootReducer = typeof rootReducer
