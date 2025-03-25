import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as contactEnums from '../../utils/enums/contactEnums'
import * as taskEnums from '../../utils/enums/taskEnums'

type FiltroState = {
  term: string
  criterion: 'priority' | 'status' | 'all'
  value?: taskEnums.priority | taskEnums.status | contactEnums.status
}

const initialState: FiltroState = {
  term: '',
  criterion: 'all',
  value: undefined
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<{ criterion: 'priority' | 'status' | 'all'; value?: taskEnums.priority | taskEnums.status | contactEnums.status }>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filtroSlice.actions
export default filtroSlice.reducer
