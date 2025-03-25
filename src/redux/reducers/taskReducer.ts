import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import task from '../../models/TaskModels'
import * as enums from '../../utils/enums/taskEnums'

type tasksState = {
  itens: task[]
}

const initialState: tasksState = {
  itens: []
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(task => task.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<task>) => {
      const taskIndex = state.itens.findIndex(t => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    },
    addTask: (state, action: PayloadAction<task>) => {
      const taskAlreadyExists = state.itens.find(task => task.title.toLowerCase() === action.payload.title.toLowerCase())

      if (taskAlreadyExists) {
        alert('task already exists!')
      } else {
        state.itens.push(action.payload)
      }
    },
    changeStatus: (state, action: PayloadAction<{ id: number; finalizado: boolean }>) => {
      const taskIndex = state.itens.findIndex(t => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.finalizado ? enums.status.COMPLETED : enums.status.PENDING
      }
    }
  }
})

export const { removeTask, editTask, addTask, changeStatus } = taskSlice.actions
export default taskSlice.reducer
