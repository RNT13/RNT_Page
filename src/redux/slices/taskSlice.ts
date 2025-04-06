import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/TaskModels'
import * as enums from '../../utils/enums/taskEnums'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: []
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, { payload }: PayloadAction<number>) => {
      state.itens = state.itens.filter(task => task.id !== payload)
    },
    editTask: (state, { payload }: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex(task => task.id === payload.id)

      if (taskIndex !== -1) {
        state.itens[taskIndex] = payload
      }
    },
    addTask: (state, { payload }: PayloadAction<Task>) => {
      const taskExists = state.itens.some(task => task.title.toLowerCase() === payload.title.toLowerCase())

      if (taskExists) {
        alert('Task already exists!')
      } else {
        state.itens.push(payload)
      }
    },
    changeStatus: (state, { payload }: PayloadAction<{ id: number; finalizado: boolean }>) => {
      const task = state.itens.find(task => task.id === payload.id)

      if (task) {
        task.status = payload.finalizado ? enums.status.COMPLETED : enums.status.PENDING
      }
    }
  }
})

export const { removeTask, editTask, addTask, changeStatus } = taskSlice.actions
export default taskSlice.reducer
