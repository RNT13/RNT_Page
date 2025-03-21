import { configureStore } from '@reduxjs/toolkit'
import filtroReducer from './reducers/filtro'
import tarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    Tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

type RootReducer = ReturnType<typeof store.getState>

export default store
export type { RootReducer }
