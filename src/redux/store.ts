import { combineReducers, configureStore as toolkitConfigureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsReducer'
import filterReducer from './reducers/filterReducer'
import tasksReducer from './reducers/taskReducer'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  contacts: contactsReducer
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
