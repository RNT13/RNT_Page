import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type tarefasState = {
  itens: Tarefa[]
}

const initialState: tarefasState = {
  itens: [] // Lista de tarefas inicial vazia
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(t => t.id === action.payload.id)

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        Tarefa => Tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Tarefa já cadastrada!')
      } else {
        state.itens.push(action.payload)
      }
    },
    alteraStatus: (state, action: PayloadAction<{ id: number; finalizado: boolean }>) => {
      const indexDaTarefa = state.itens.findIndex(t => t.id === action.payload.id)

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado ? enums.status.CONCLUIDA : enums.status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
