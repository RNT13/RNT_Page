import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactsReducer'
import filterReducer from './reducers/filterReducer'
import tasksReducer from './reducers/taskReducer'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    contacts: contactsReducer
  }
})

type RootReducer = ReturnType<typeof store.getState>

export default store
export type { RootReducer }
