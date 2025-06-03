import { combineReducers, configureStore as toolkitConfigureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './slices/cartSlice'
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
  sidebar: sideBarSlice,
  cart: cartReducer,
  [api.reducerPath]: api.reducer
})

export function configureStore(preloadedState?: Partial<RootState>) {
  return toolkitConfigureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
  })
}

export const store = configureStore()

export type AppStore = ReturnType<typeof configureStore>
export type RootState = ReturnType<typeof rootReducer>
